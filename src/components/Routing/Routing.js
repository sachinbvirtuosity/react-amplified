import React from "react";

const Routing = ({ formik }) => {
  return (
    <div className="w-1/4 sm:w-full lg:w-1/4 md:w-1/4 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">
            Routing Setup
          </h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="call routing extn number"
              >
                Call Routing Extension Number:
              </label>
              <input
                type="text"
                id="extn_num"
                name="extn_num"
                value={formik.values.extn_num}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Extension Number"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700"
              />
            </div>
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="menu options prompt"
              >
                Menu Options Prompt:
              </label>
              <input
                type="text"
                id="menu_optn_msg"
                name="menu_optn_msg"
                placeholder="Menu Option Message"
                value={formik.values.menu_optn_msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700"
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="play options menu"
              >
                Play Options Menu:
              </label>
              <input
                type="checkbox"
                id="play_menu_optns_flg"
                name="play_menu_optns_flg"
                checked={formik.values.play_menu_optns_flg}
                onChange={formik.handleChange}
                className="border border-slate-300 mx-2"
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="routing call to queue"
              >
                Route Call to Queue:
              </label>
              <input
                type="checkbox"
                id="route_call_to_queue"
                name="route_call_to_queue"
                checked={formik.values.route_call_to_queue}
                onChange={formik.handleChange}
                className="border border-slate-300 mx-2"
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="enable voice mail"
              >
                Enable Voice Mail:
              </label>
              <input
                type="checkbox"
                id="voice_mail_flg"
                name="voice_mail_flg"
                checked={formik.values.voice_mail_flg}
                onChange={formik.handleChange}
                className="border border-slate-300 mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Routing };
