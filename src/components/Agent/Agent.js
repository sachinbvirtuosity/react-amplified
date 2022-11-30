import React from "react";

const Agent = ({ formik }) => {
  return (
    <div className="agent-setup my-20 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Agent Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 flex">
          <label className="block text-gray-700 text-sm font-bold" htmlFor="username">
            Agents not available:
          </label>
          <input
            className="ml-4"
            id="agentsNotAvailable"
            name="agentsNotAvailable"
            type="checkbox"
            onChange={formik.handleChange}
          />
        </div>
        <div className="mt-4 flex">
          <label className="block text-gray-700 text-sm font-bold" htmlFor="username">
            Agents not staffed:
          </label>
          <input
            className="ml-4"
            id="agentsNotStaffed"
            name="agentsNotStaffed"
            type="checkbox"
            onChange={formik.handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export { Agent };
