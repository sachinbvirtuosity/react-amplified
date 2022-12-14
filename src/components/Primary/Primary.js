import React from "react";

const Primary = ({ formik }) => {
  return (
    <div className="w-1/4 sm:w-full lg:w-1/4 md:w-1/4 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">
            Primary Setup
          </h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="welcome message"
              >
                Welcome Prompt:
              </label>
              <textarea
                rows="4"
                id="main_greeting"
                name="main_greeting"
                value={formik.values.main_greeting}
                onChange={formik.handleChange}
                //onBlur={formik.handleBlur}
                placeholder="Welcome Message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="welcome message"
              >
                After Hour Prompt:
              </label>
              <textarea
                rows="4"
                id="after_hr_msg"
                name="after_hr_msg"
                value={formik.values.after_hr_msg}
                onChange={formik.handleChange}
                placeholder="After hours message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Primary };
