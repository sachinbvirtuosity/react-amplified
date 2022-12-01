import "./App.css";
import { useFormik } from "formik";
import { Header } from "./components/Header";
import { Primary } from "./components/Primary";
import { Agent } from "./components/Agent";
import { Emergency } from "./components/Emergency";
import { Routing } from "./components/Routing";
import { Queue } from "./components/Queue";
import { Holiday } from "./components/Holiday";
import { SpecialCondition } from "./components/SpecialCondition";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import {
  createAAFPMainSetup,
  createAAFPEmergencyMsgSetup,
  createAAFPHolidayMsgSetup,
} from "./graphql/mutations";
import { Amplify, API, Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import React, { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import * as queries from "./graphql/queries";

Amplify.configure(aws_exports);

function App({ signOut, user }) {
  const [authUser, setAuthUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const user = Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(user => {
        setAuthUser(user.attributes.email);
        console.log("User Authenticated : ", user);
      })
      .catch(err => console.log("Error while authenticated user : ", err));
  }, []);

  useEffect(() => {
    getAllMainSetup();
  }, []);

  const getAllMainSetup = async () => {
    const allResult = await API.graphql({ query: queries.listAAFPMainSetups });
    allResult.data ? setDepartments(allResult.data) : setDepartments([]);
    console.log(allResult);
  };

  const formik = useFormik({
    initialValues: {
      incomingNumber: "",
      welcomeMsg: "",
      afterHour: "",
      agentsNotAvailable: false,
      agentsNotStaffed: false,
      emergencyTurnedOn: false,
      emergencyConditionMsg: "",
      routingCallToQueue: false,
      callRoutingExtNumber: "",
      platOptionsMenu: false,
      menuOptionsMsg: "",
      enableVoiceMail: false,
      enableCallBack: false,
      queueMsg: "",
      holidayMsg: "",
      holiday: "",
      sDate: "",
      eDate: "",
      active: false,
      enableSpecialCondition: false,
      specialCondition: false,
    },
    onSubmit: async function (values) {
      //console.log("Values are ", values);
      setLoading(true);
      try {
        const formDataMainSetup = {
          dialed_number: values.incomingNumber,
          main_greeting: values.welcomeMsg,
          after_hr_msg: values.afterHour,
          enable_emergency_flg: values.emergencyTurnedOn,
          no_agents_logged_in_flg: values.agentsNotAvailable,
          agents_unstaffed_flg: values.agentsNotStaffed,
          enable_callback_flg: values.enableCallBack,
          enable_spcl_condtn_flg: values.enableSpecialCondition,
          spcl_condtn_msg: values.specialCondition,
          route_call_to_queue: values.routingCallToQueue,
          queue_msg: values.queueMsg,
          extn_num: values.callRoutingExtNumber,
          play_menu_optns_flg: values.platOptionsMenu,
          menu_optn_msg: values.menuOptionsMsg,
          voice_mail_flg: values.enableVoiceMail,
          last_update_date: new Date().toISOString(),
          last_update_by: authUser,
        };

        const formDataEmergencySetup = {
          emergency_msg: values.emergencyConditionMsg,
          active_flg: values.emergencyTurnedOn,
          id: new Date().toISOString(),
          last_update_date: new Date().toISOString(),
          last_update_by: authUser,
        };

        const formDataHolidaySetup = {
          holiday_start_dt: values.sDate.toISOString(),
          holiday_end_dt: values.eDate.toISOString(),
          holiday_type: values.holiday,
          holiday_msg: values.holidayMsg,
          active_flg: values.active,
          last_update_by: authUser,
          id: new Date().toISOString(),
        };

        const mainSetupResult = await API.graphql({
          query: createAAFPMainSetup,
          variables: { input: formDataMainSetup },
        });

        const emergencySetupResult = await API.graphql({
          query: createAAFPEmergencyMsgSetup,
          variables: { input: formDataEmergencySetup },
        });

        const holidaySetupResult = await API.graphql({
          query: createAAFPHolidayMsgSetup,
          variables: { input: formDataHolidaySetup },
        });

        setLoading(false);

        console.log(
          "Result of all Tables : ",
          mainSetupResult,
          emergencySetupResult,
          holidaySetupResult
        );
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    },
  });

  return (
    <div className="container md:container sm:container mx-auto px-4">
      <Loader loading={loading} />
      <header className="mt-2">
        <Header departments={departments} formik={formik} />
      </header>
      <form onSubmit={formik.handleSubmit}>
        <Primary formik={formik} />
        <Agent formik={formik} />
        <Emergency formik={formik} />
        <Routing formik={formik} />
        <Queue formik={formik} />
        <Holiday formik={formik} />
        <SpecialCondition formik={formik} />
        <div className="submit-btn w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5 my-12">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default withAuthenticator(App);
