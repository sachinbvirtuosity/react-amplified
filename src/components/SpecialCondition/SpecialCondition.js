import React from "react";

const SpecialCondition = ({ formik }) => {
  return (
    <div className="special-condition-setup my-10 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Special Condition</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 grid items-start grid-cols-[180px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="enableSpecialCondition"
          >
            Enable special condition:
          </label>
          <input
            className="ml-4"
            id="enableSpecialCondition"
            name="enableSpecialCondition"
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
        <div className="mt-4 grid items-start grid-cols-[180px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="specialCondition"
          >
            Special Condition Prompt:
          </label>
          <input
            className="ml-4"
            id="specialCondition"
            name="specialCondition"
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export { SpecialCondition };
