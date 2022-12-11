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
import React, { useCallback, useEffect, useState } from "react";

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

  const handleSubmit = async function (values) {
    context.turnLoadingOn();
    try {
      const formDataMainSetup = {
        id: values.id ? values.id : undefined,
        group_name: values.group_name ? values.group_name : undefined,
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
        voice_mail_mesg: values.voice_mail_mesg,
        last_update_date: new Date().toISOString(),
        last_update_by: context.authUser,
      };

      const mainSetupResult = await API.graphql({
        query: updateAAFPMainSetup,
        variables: { input: {group_name: formDataMainSetup.group_name, ...formDataMainSetup }},
      })

      formik.values.updated_holiday_msg_obj_list.listAAFPHolidayMsgSetups.items.forEach(async item => {
        if (!item.holiday_type) {
          try {
            item.createdAt = new Date().toISOString();
            item.updatedAt = new Date().toISOString();
            item.id = '';
            item.last_update_by = authUser;
            item.last_update_date = new Date().toISOString();
            const holidaySetupResult = await API.graphql({
              query: createAAFPHolidayMsgSetup,
              variables: { input: item },
            });
          } catch (er) {
            console.log("Error updating holidays : ", er);
          }
        }
      });
      context.turnLoadingOff();
    } catch (e) {
      context.turnLoadingOff();
      console.log(`Error onSubmit: ${JSON.stringify(e)}`)
    }
  }

  const formik = useFormik({
    initialValues: {
      id: context.mainData ? context.mainData[0]?.id : '',
      main_greeting: context.mainData ? context.mainData[0]?.main_greeting : '',
      after_hr_msg: context.mainData ? context.mainData[0]?.after_hr_msg : '',
      no_agents_logged_in_flg: context.mainData ? context.mainData[0]?.no_agents_logged_in_flg : false,
      agents_unstaffed_flg: context.mainData ? context.mainData[0]?.agents_unstaffed_flg : false,
      emergency_msg: context.mainData ? context.mainData[0]?.emergency_msg : '',
      enable_emergency_flg: context.mainData ? context.mainData[0]?.active_flg : false,
      extn_num: context.mainData ? context.mainData[0]?.extn_num : '',
      menu_optn_msg: context.mainData ? context.mainData[0]?.menu_optn_msg : '',
      voice_mail_flg: context.mainData ? context.mainData[0]?.voice_mail_flg : false,
      voice_mail_mesg: context.mainData ? context.mainData[0]?.voice_mail_mesg : '',
      play_menu_optns_flg: context.mainData ? context.mainData[0]?.play_menu_optns_flg : false,
      route_call_to_queue: context.mainData ? context.mainData[0]?.route_call_to_queue : '',
      queue_msg: context.mainData ? context.mainData[0]?.queue_msg : '',
      enable_callback_flg: context.mainData ? context.mainData[0]?.enable_callback_flg : false,
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
      enable_spcl_condtn_flg: context.mainData ? context.mainData[0]?.enable_spcl_condtn_flg : false,
    },
    enableReinitialize: true,
    onSubmit: handleSubmit
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
