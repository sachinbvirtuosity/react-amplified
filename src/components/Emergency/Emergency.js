import React from "react";

const Emergency = ({ formik }) => {
  return (
    <div className="w-1/5 sm:w-full lg:w-1/5 md:w-1/5 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">
            Emergency Setup
          </h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="emergency condition prompt"
              >
                Emergency Condition Prompt:
              </label>
              <textarea
                rows="4"
                id="emergency_msg"
                name="emergency_msg"
                value={formik.values.emergency_msg ?? ''}
                onChange={
                  formik.handleChange
                }
                onBlur={formik.handleBlur}
                placeholder="Emergency Message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="emergency turned on"
              >
                Emergency Turned On:
              </label>
              <input
                type="checkbox"
                id="enable_emergency_flg"
                name="enable_emergency_flg"
                checked={formik.values.enable_emergency_flg ?? false}
                onChange={
                  formik.handleChange
                }
                className="border border-slate-300 mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Emergency };
