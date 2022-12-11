import React from "react";
import { useAppDataContext } from "../AppDataContext/AppDataContext";

const Agent = ({ formik }) => {
  const context = useAppDataContext()

  return (
    <div className="w-1/5 sm:w-full lg:w-1/5 md:w-1/5 mx-2">
      <div className="panel action-card panel-default shadow-md">
        <div className="panel-heading">
          <h3 className="block text-gray-700 text-xs font-bold">Agent Setup</h3>
        </div>
        <div className="panel-body">
          <div className="flex flex-col">
          <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="agents unstaffed message"
              >
                Agents Not Available Message
              </label>
              <input
                type="text"
                id="no_agents_logged_in_msg"
                name="no_agents_logged_in_msg"
                value={formik.values.no_agents_logged_in_msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Agents not available message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>

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
            <div className="form-group mb-4">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="agents unstaffed message"
              >
                Agents Not Staffed Message
              </label>
              <input
                type="text"
                id="agents_unstaffed_msg"
                name="agents_unstaffed_msg"
                value={formik.values.agents_unstaffed_msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Agents not staffed message"
                className="w-full border border-slate-300 rounded py-1 px-2 text-gray-700 "
              />
            </div>
            <div className="form-group mb-4 flex">
              <label
                className="block text-gray-700 text-xs font-semibold mb-1"
                htmlFor="agents unstaffed message"
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
