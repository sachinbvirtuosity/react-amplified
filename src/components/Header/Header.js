import React from "react";
import { demoData } from "./data";

const Header = ({ departments, formik }) => {
  debugger;
  //console.log("Departments: ", departments);
  console.log("Header Component", departments);

  const setFieldData = data => {
    formik.setFieldValue("incomingNumber", data.dialed_number);
    formik.setFieldValue("welcomeMsg", data.main_greeting);
    formik.setFieldValue("afterHour", data.after_hr_msg);
    formik.setFieldValue("agentsNotAvailable", data.no_agents_logged_in_flg);
    formik.setFieldValue("agentsNotStaffed", data.agents_unstaffed_flg);
    formik.setFieldValue("emergencyTurnedOn", data.enable_emergency_flg);
    formik.setFieldValue("emergencyConditionMsg", data.emergency_msg);
    formik.setFieldValue("routingCallToQueue", data.route_call_to_queue);
    formik.setFieldValue("callRoutingExtNumber", data.extn_num);
    formik.setFieldValue("platOptionsMenu", data.play_menu_optns_flg);
    formik.setFieldValue("menuOptionsMsg", data.menu_optn_msg);
    formik.setFieldValue("enableVoiceMail", data.voice_mail_flg);
    formik.setFieldValue("enableCallBack", data.enable_callback_flg);
    formik.setFieldValue("queueMsg", data.queue_msg);
    formik.setFieldValue("holidayMsg", data.holiday_msg);
    formik.setFieldValue("holiday", data.holiday_type);
    formik.setFieldValue("sDate", data.holiday_start_dt);
    formik.setFieldValue("eDate", data.holiday_end_dt);
    formik.setFieldValue("active", data.active_flg);
    formik.setFieldValue("enableSpecialCondition", data.enable_spcl_condtn_flg);
    formik.setFieldValue("specialCondition", data.spcl_condtn_msg);
  };

  return (
    <div className="flex mr-auto justify-end">
      {departments.listAAFPMainSetups?.items?.map((x, i) => {
        return (
          <button
            key={i}
            onClick={() => setFieldData(x)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
          >
            {x.group_name}
          </button>
        );
      })}
    </div>
  );
};

export { Header };
