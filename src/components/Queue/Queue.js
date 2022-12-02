import React from "react";

const Queue = ({ formik }) => {
  return (
    <div className="w-1/4 sm:w-full lg:w-1/4 md:w-1/4 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">Queue Setup</h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="queue prompt"
              >
                Queue Prompt:
              </label>
              <input
                type="text"
                id="queue_msg"
                name="queue_msg"
                value={formik.values.queue_msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Queue Message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700"
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="agents not available"
              >
                Enable Callback:
              </label>
              <input
                type="checkbox"
                id="enable_callback_flg"
                name="enable_callback_flg"
                checked={formik.values.enable_callback_flg}
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

export { Queue };
