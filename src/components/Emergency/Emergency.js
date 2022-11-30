import React from "react";

const Emergency = ({ formik }) => {
  return (
    <div className="emergency-setup my-20 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Emergency Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 grid items-start grid-cols-[150px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Emergency turned on:
          </label>
          <input
            className="ml-4"
            id="emergencyTurnedOn"
            name="emergencyTurnedOn"
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Emergency Condition Prompt:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emergencyConditionMsg"
            name="emergencyConditionMsg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Emergency Condition Prompt"
          />
        </div>
      </div>
    </div>
  );
};

export { Emergency };
