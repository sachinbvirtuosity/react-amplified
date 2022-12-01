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
  const [holidayList, setHolidayList] = useState([{ holiday: "1" }]);
  const listOfHolidays = [
    { value: "newYear", label: "New Year's Day" },
    { value: "martinLutherKingDay", label: "Martin Luther King, Jr. Day" },
    { value: "memorialDay", label: "Memorial Day" },
    { value: "independenceDay", label: "Independence Day" },
    { value: "laborDay", label: "Labor Day" },
    { value: "thanksGivingDay", label: "Thanksgiving Day" },
    { value: "christmasDay", label: "Christmas Day" },
    { value: "dayAfterThanksGiving", label: "Day after Thanksgiving" },
  ];

  const holidayRef = React.createRef(null);
  const handleAddHolidayList = newEle => {
    setHolidayList(prevState => [...prevState, { holiday: "" }]);
    if (holidayRef.current) {
      holidayRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleRemoveHolidayList = index => {
    const list = [...holidayList];
    list.splice(index, 1);
    setHolidayList(list);
  };

  return (
    <div className="holiday-setup my-20 border p-10 mt-7 shadow-md">
      <div className="flex card-header justify-center">
        <div className="header-text w-full">
          <h2 className="text-center font-bold text-2xl">Holiday Setup</h2>
        </div>
        <div className="action-btn">
          <button
            onClick={handleAddHolidayList}
            className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          >
            Add
          </button>
        </div>
      </div>
      <hr className="border-line mt-2" />
      {holidayList.map((items, index) => {
        return (
          <>
            <div
              className={`grid grid-cols-2 gap-4 holiday-grid ${
                index > 0 ? "border-top mt-7 pt-5" : ""
              }`}
              key={index}
            >
              {index >= 1 && (
                <div className="text-end">
                  <button
                    onClick={() => handleRemoveHolidayList(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
                  >
                    Remove
                  </button>
                </div>
              )}

              <div className="mt-4" ref={holidayRef}>
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
                  isClearable={true}
                  options={listOfHolidays}
                  isSearchable={isSearchable}
                  name="holiday"
                  id="holiday"
                  placeholder="Select"
                  value={formik.values.name}
                  onChange={d => formik.setFieldValue("holiday", d.label)}
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
                  showTimeSelect
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
                  showTimeSelect
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
          </>
        );
      })}
    </div>
  );
};

export { Holiday };
