import React from "react";

const Agent = ({ formik }) => {
  return (
    <div className="w-1/5 sm:w-full lg:w-1/5 md:w-1/5 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">Agent Setup</h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="agents not available"
              >
                Agents not available:
              </label>
              <input
                type="checkbox"
                id="no_agents_logged_in_flg"
                name="no_agents_logged_in_flg"
                checked={formik.values.no_agents_logged_in_flg}
                onChange={formik.handleChange}
                className="border border-slate-300 mx-2"
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="welcome message"
              >
                Agents not staffed:
              </label>
              <input
                type="checkbox"
                id="agents_unstaffed_flg"
                name="agents_unstaffed_flg"
                checked={formik.values.agents_unstaffed_flg}
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

export { Agent };
