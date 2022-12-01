import React from "react";

const Routing = ({ formik }) => {
  return (
    <div className="routing-setup my-20 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Routing Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 grid items-start grid-cols-[140px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Route Call to Queue:
          </label>
          <input
            className="ml-4"
            id="routingCallToQueue"
            name="routingCallToQueue"
            onChange={formik.handleChange}
            checked={formik.values.routingCallToQueue}
            type="checkbox"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Call routing extension number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="callRoutingExtNumber"
            name="callRoutingExtNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.callRoutingExtNumber}
            type="text"
            placeholder="Call routing extension number"
          />
        </div>
        <div className="mt-4 grid items-start grid-cols-[140px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Play options menu:
          </label>
          <input
            className="ml-4"
            id="platOptionsMenu"
            name="platOptionsMenu"
            onChange={formik.handleChange}
            checked={formik.values.platOptionsMenu}
            type="checkbox"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Menu options prompt:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="menuOptionsMsg"
            name="menuOptionsMsg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.menuOptionsMsg}
            type="text"
            placeholder="Menu options prompt"
          />
        </div>
        <div className="mt-4 grid items-start grid-cols-[140px_minmax(30px,30px)]">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Enable Voice Mail:
          </label>
          <input
            className="ml-4"
            id="enableVoiceMail"
            name="enableVoiceMail"
            checked={formik.values.enableVoiceMail}
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export { Routing };
