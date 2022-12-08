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
  //createAAFPEmergencyMsgSetup,
  createAAFPHolidayMsgSetup,
  updateAAFPHolidayMsgSetup,
  updateAAFPMainSetup,
  //updateAAFPEmergencyMsgSetup,
} from "./graphql/mutations";
import { Amplify, API } from "aws-amplify";
import aws_exports from "./aws-exports";
import React, { useEffect, useState } from "react";

import { useAppDataContext } from "./components/AppDataContext/AppDataContext";

import { Loader } from "./components/Loader";
import * as queries from "./graphql/queries";
import Select from "react-select";
import DatePicker from "react-datepicker";
import addIcon from "./assets/img/add.png";

import "react-datepicker/dist/react-datepicker.min.css";

Amplify.configure(aws_exports);

function App({ signOut, user }) {
  const context = useAppDataContext();
  const authUser = context.useAuthData();

  
  const formik = useFormik({
    initialValues: {
      dialed_number: context.mainData ? context.mainData[0]?.dialed_number : '',
      main_greeting: context.mainData ? context.mainData[0]?.main_greeting : '',
      after_hr_msg: context.mainData ? context.mainData[0]?.after_hr_msg : '',
      no_agents_logged_in_flg: context.mainData ? context.mainData[0]?.no_agents_logged_in_flg : '',
      agents_unstaffed_flg: context.mainData ? context.mainData[0]?.agents_unstaffed_flg : '',
      emergency_msg: context.emergencyData ? context.emergencyData[0]?.emergency_msg : '',
      enable_emergency_flg: context.emergencyData ? context.emergencyData[0]?.active_flg : '',
      extn_num: context.mainData ? context.mainData[0]?.extn_num : '',
      menu_optn_msg: context.mainData ? context.mainData[0]?.menu_optn_msg : '',
      voice_mail_flg: context.mainData ? context.mainData[0]?.voice_mail_flg : '',
      play_menu_optns_flg: context.mainData ? context.mainData[0]?.play_menu_optns_flg : '',
      route_call_to_queue: context.mainData ? context.mainData[0]?.route_call_to_queue : '',
      queue_msg: context.mainData ? context.mainData[0]?.queue_msg : '',
      enable_callback_flg: context.mainData ? context.mainData[0]?.enable_callback_flg : '',
      updated_holiday_msg_obj_list: context.mainData ? context.holidayData : [
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
      spcl_condtn_msg: context.mainData ? context.mainData[0]?.spcl_condtn_msg : '',
      enable_spcl_condtn_flg: context.mainData ? context.mainData[0]?.enable_spcl_condtn_flg : '',
    },
    enableReinitialize: false,
    onSubmit: async function (values) {
      context.turnLoadingOn();
      try {
        const formDataMainSetup = {
          id: values.id ? context.mainData[0].id : undefined,
          dialed_number: values.dialed_number,
          main_greeting: values.main_greeting,
          after_hr_msg: values.after_hr_msg,
          enable_emergency_flg: values.enable_emergency_flg,
          emergency_msg: values.emergency_msg,
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
          last_update_by: context.authUser,
          group_name: context.mainData.groupName,
        };

        // const formDataEmergencySetup = {
        //   id: context.emergencyData?.id ? context.emergencyData.id : undefined,
        //   emergency_msg: values.emergency_msg,
        //   active_flg: values.active_flg,
        //   group_name: context.mainData[0].group_name,
        //   //phone_dialed: context.mainData[0].dialed_number,
        //   last_update_date: new Date().toISOString(),
        //   last_update_by: authUser,
        // };

        const mainSetupResult = await API.graphql({
          query: updateAAFPMainSetup,
          variables: { input: {id: formDataMainSetup.id, ...formDataMainSetup }},
        })

        formik.values.updated_holiday_msg_obj_list.forEach(async items => {
          if (!items.holiday_type) {
            try {
              items.createdAt = new Date().toISOString();
              items.updatedAt = new Date().toISOString();
              //items.id = new Date().toISOString();
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

        
        context.turnLoadingOff();
      } catch (er) {
        context.turnLoadingOff();
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue(
      "updated_holiday_msg_obj_list",
      context.holidayData
    );
  }, [context.holidayData])

  useEffect(() => {
    formik.setFieldValue(
      "emergency_msg",
        context.emergencyData !== undefined
        ? context.emergencyData .emergency_msg
        : ""
    );
  }, [context.emergencyData])
  
  useEffect(() => {
    if(context.mainData){
      for (const [key, value] of Object.entries(
        context.mainData[0]
      )) {
        formik.setFieldValue(key, value);
      }
    }
  }, [context.mainData])

  return (
    <div className="aafp-contactcenter-app">
      <Loader loading={context.loading} />
      <Header
        departments={context.departments}
        formik={formik}
        holidayResult={context.holidayData}
        setDialedNum={context.setSelectedDepartmentPhone}
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
                holidayResult={context.holidayData}
                dialedNumber={context.selectedDepartmentGroupName}
              />
              <SpecialCondition formik={formik} />
            </div>
            <div className="action-btn w-full flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-1/5 text-white font-bold py-2 px-4 rounded">
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
