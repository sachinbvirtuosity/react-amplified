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
  updateAAFPHolidayMsgSetup,
  updateAAFPMainSetup,
  updateAAFPEmergencyMsgSetup,
} from "./graphql/mutations";
import { Amplify, API, Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import React, { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import * as queries from "./graphql/queries";
import Select from "react-select";
import DatePicker from "react-datepicker";
import addIcon from "./assets/img/add.png";

import "react-datepicker/dist/react-datepicker.min.css";

Amplify.configure(aws_exports);

function App({ signOut, user }) {
  const [authUser, setAuthUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [holidayApiResult, setHolidayApiResult] = useState([]);
  const [groupName, setGroupName] = useState("MRC");

  useEffect(() => {
    const user = Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(user => {
        setAuthUser(user.attributes.email);
      })
      .catch(err => console.log("Error while authenticated user : ", err));
  }, []);

  useEffect(() => {
    getAllMainSetup();
  }, []);

  useEffect(() => {
    getEmergencySetup();
    getHolidayList();
  }, [groupName]);

  const getHolidayList = async () => {
    const holidayResult = await API.graphql({
      query: queries.listAAFPHolidayMsgSetups,
      variables: { filter: { group_name: { eq: groupName } } },
    });
    holidayResult.data
      ? setHolidayApiResult(holidayResult.data)
      : setHolidayApiResult([]);
    formik.setFieldValue(
      "updated_holiday_msg_obj_list",
      holidayResult.data.listAAFPHolidayMsgSetups?.items
    );
  };

  const getEmergencySetup = async () => {
    const emergencySetupResult = await API.graphql({
      query: queries.listAAFPEmergencyMsgSetups,
      variables: { filter: { group_name: { eq: groupName } } },
    });

    // const emergencyLatest =
    //   emergencySetupResult.data.listAAFPEmergencyMsgSetups.items.length > 0
    //     ? emergencySetupResult.data.listAAFPEmergencyMsgSetups.items[
    //         emergencySetupResult.data.listAAFPEmergencyMsgSetups.items.length -
    //           1
    //       ].emergency_msg
    //     : "";
    // console.log(emergencyLatest);
    formik.setFieldValue(
      "emergency_msg",
      emergencySetupResult.data.listAAFPEmergencyMsgSetups.items[0] &&
        emergencySetupResult.data.listAAFPEmergencyMsgSetups.items[0] !==
          undefined
        ? emergencySetupResult.data.listAAFPEmergencyMsgSetups.items[0]
            .emergency_msg
        : ""
    );
  };

  const findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index);

  const getAllMainSetup = async () => {
    const allResult = await API.graphql({ query: queries.listAAFPMainSetups });
    const holidayResult = await API.graphql({
      query: queries.listAAFPHolidayMsgSetups,
      variables: { filter: { group_name: { eq: groupName } } },
    });
    console.log("Holiday Result : ", holidayResult);
    let holiday =
      holidayResult.length > 0
        ? formik.setFieldValue("updated_holiday_msg_obj_list", holidayResult)
        : [];
    const emergencySetupResult = await API.graphql({
      query: queries.listAAFPEmergencyMsgSetups,
      variables: { filter: { group_name: { eq: groupName } } },
    });

    formik.setFieldValue(
      "emergency_msg",
      emergencySetupResult.data.listAAFPEmergencyMsgSetups.items[0]
        .emergency_msg
    );
    allResult.data ? setDepartments(allResult.data) : setDepartments([]);
    holidayResult.data
      ? setHolidayApiResult(holidayResult.data)
      : setHolidayApiResult([]);

    // SETTING FIRST OBJECT AS ENTRIES
    for (const [key, value] of Object.entries(
      allResult.data.listAAFPMainSetups.items[0]
    )) {
      formik.setFieldValue(key, value);
    }

    formik.setFieldValue(
      "updated_holiday_msg_obj_list",
      holidayResult.data.listAAFPHolidayMsgSetups?.items
    );
  };

  const formik = useFormik({
    initialValues: {
      dialed_number: "",
      main_greeting: "",
      after_hr_msg: "",
      no_agents_logged_in_flg: false,
      agents_unstaffed_flg: false,
      emergency_msg: "",
      enable_emergency_flg: false,
      extn_num: "",
      menu_optn_msg: "",
      voice_mail_flg: false,
      play_menu_optns_flg: false,
      route_call_to_queue: false,
      queue_msg: "",
      enable_callback_flg: false,
      updated_holiday_msg_obj_list: [
        {
          holiday_msg: "",
          holiday_start_dt: "",
          holiday_end_dt: "",
          holiday_type: "",
          active_flg: false,
        },
      ],
      holiday_msg: "",
      holiday_start_dt: "",
      holiday_end_dt: "",
      holiday_type: "",
      active_flg: false,
      spcl_condtn_msg: "",
      enable_spcl_condtn_flg: false,
    },
    enableReinitialize: true,
    onSubmit: async function (values) {
      setLoading(true);
      try {
        const formDataMainSetup = {
          dialed_number: values.dialed_number,
          main_greeting: values.main_greeting,
          after_hr_msg: values.after_hr_msg,
          enable_emergency_flg: values.enable_emergency_flg,
          no_agents_logged_in_flg: values.no_agents_logged_in_flg,
          agents_unstaffed_flg: values.agents_unstaffed_flg,
          enable_callback_flg: values.enable_callback_flg,
          enable_spcl_condtn_flg: values.enable_spcl_condtn_flg,
          spcl_condtn_msg: values.spcl_condtn_msg,
          route_call_to_queue: values.route_call_to_queue,
          queue_msg: values.queue_msg,
          extn_num: values.extn_num,
          play_menu_optns_flg: values.play_menu_optns_flg,
          menu_optn_msg: values.menu_optn_msg,
          voice_mail_flg: values.voice_mail_flg,
          last_update_date: new Date().toISOString(),
          last_update_by: authUser,
        };

        const formDataEmergencySetup = {
          emergency_msg: values.emergency_msg,
          active_flg: values.active_flg,
          group_name: groupName,
          id: new Date().toISOString(),
          last_update_date: new Date().toISOString(),
          last_update_by: authUser,
        };

        const mainSetupResult = await API.graphql({
          query: updateAAFPMainSetup,
          variables: { input: formDataMainSetup },
        });

        const emergencySetupResult = await API.graphql({
          query: createAAFPEmergencyMsgSetup,
          variables: { input: formDataEmergencySetup },
        });

        formik.values.updated_holiday_msg_obj_list.forEach(async items => {
          if (!items.holiday_type) {
            try {
              items.createdAt = new Date().toISOString();
              items.updatedAt = new Date().toISOString();
              items.id = new Date().toISOString();
              items.last_update_by = authUser;
              items.last_update_date = new Date().toISOString();
              const holidaySetupResult = await API.graphql({
                query: createAAFPHolidayMsgSetup,
                variables: { input: items },
              });
            } catch (er) {
              console.log("Error updating holidays : ", er);
            }
          }
        });

        setLoading(false);
      } catch (er) {
        setLoading(false);
      }
    },
  });

  return (
    <div className="aafp-contactcenter-app">
      <Loader loading={loading} />
      <Header
        departments={departments}
        formik={formik}
        holidayResult={holidayApiResult}
        setGroupName={setGroupName}
      />
      <section className="w-full h-full mt-5 mb-10">
        <div className="container lg:container md:container sm:container mx-auto px-4">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap justify-center">
              <Primary formik={formik} />
              <Agent formik={formik} />
              <Emergency formik={formik} />
              <Routing formik={formik} />
              <Queue formik={formik} />
              <Holiday
                formik={formik}
                holidayResult={holidayApiResult}
                groupName={groupName}
              />
              <SpecialCondition formik={formik} />
            </div>
            <div className="action-btn w-full flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 w-1/5 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default withAuthenticator(App);
