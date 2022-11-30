import React from "react";

const Queue = ({ formik }) => {
  return (
    <div className="queue-setup my-20 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Queue Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 grid items-start grid-cols-[110px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Enable Callback:
          </label>
          <input
            className="ml-4"
            id="enableCallBack"
            name="enableCallBack"
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Queue Prompt:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="queueMsg"
            name="queueMsg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Queue Prompt"
          />
        </div>
      </div>
    </div>
  );
};

export { Queue };
