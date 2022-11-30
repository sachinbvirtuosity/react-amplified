import React from "react";

const Primary = ({ formik }) => {
  return (
    <div className="primary-setup border my-20 p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Primary Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Incoming number:
          </label>
          <input
            className={`shadow appearance-none w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.name && formik.errors.name
                ? "border-red-400"
                : "border"
            }`}
            id="incomingNumber"
            name="incomingNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder="Incoming Number"
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-400">{formik.errors.name}</span>
          )}
        </div>
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Welcome Prompt:
          </label>
          <input
            className={`shadow appearance-none w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.name && formik.errors.name
                ? "border-red-400"
                : "border"
            }`}
            type="text"
            id="welcomeMsg"
            name="welcomeMsg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Welcome Prompt"
          />
        </div>
        <div class="mt-4 flex">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            After Hour Prompt:
          </label>
          <input
            className="ml-4"
            id="afterHour"
            name="afterHour"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export { Primary };
