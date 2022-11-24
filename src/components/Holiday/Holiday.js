import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Holiday = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="holiday-setup my-20">
      <h2 className="text-center font-bold text-2xl">Holiday Setup</h2>
      <hr className="border-line mt-2" />
      <div className="grid grid-cols-2 gap-4">
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Holiday Prompt:
          </label>
          <input
            class="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="incomingno"
            type="text"
            placeholder="Holiday Prompt"
          />
        </div>
        <div className="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
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
          />
        </div>
        <div className="mt-7">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Start Date:
          </label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-7">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            End Date:
          </label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mt-4 flex">
          <label class="block text-gray-700 text-sm font-bold" for="username">
            Active:
          </label>
          <input className="ml-4" id="incomingno" type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export { Holiday };
