import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.min.css";

const Holiday = ({ formik }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="holiday-setup my-20 border p-10 mt-7 shadow-md">
      <h2 className="text-center font-bold text-2xl">Holiday Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Holiday Prompt:
          </label>
          <input
            className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="holidayMsg"
            name="holidayMsg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder="Holiday Prompt"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Holiday:
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="holiday"
            id="holiday"
            value={formik.values.name}
            onChange={d => formik.setFieldValue("holiday", d.value)}
          />
        </div>
        <div className="mt-7">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Start Date:
          </label>
          <DatePicker
            selected={startDate}
            id="sDate"
            name="sDate"
            onChange={date => {
              setStartDate(date);
              formik.setFieldValue("sDate", date);
            }}
            value={formik.values.sdate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            popperPlacement="top-start"
            popperModifiers={[
              {
                name: "arrow",
                options: {
                  padding: ({ popper, reference, placement }) => ({
                    right: Math.min(popper.width, reference.width) - 120,
                  }),
                },
              },
            ]}
            className="shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-7">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            End Date:
          </label>
          <DatePicker
            selected={endDate}
            id="eDate"
            name="eDate"
            onChange={date => {
              setEndDate(date);
              formik.setFieldValue("eDate", date);
            }}
            selectsEnd
            value={formik.values.name}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            popperModifiers={[
              {
                name: "arrow",
                options: {
                  padding: ({ popper, reference, placement }) => ({
                    right: Math.min(popper.width, reference.width) - 120,
                  }),
                },
              },
            ]}
            className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4 flex">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="active"
          >
            Active:
          </label>
          <input
            className="ml-4"
            id="active"
            name="active"
            onChange={formik.handleChange}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export { Holiday };
