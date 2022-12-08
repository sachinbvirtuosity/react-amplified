import React, { useCallback, useEffect, useState } from "react";
import { API } from "aws-amplify";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.min.css";
import addIcon from "../../assets/img/add.png";
import removeIcon from "../../assets/img/remove.png";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import { createAAFPHolidayMsgSetup, deleteAAFPHolidayMsgSetup } from "../../graphql/mutations";
import { useAppDataContext } from "../AppDataContext/AppDataContext";

const Holiday = ({ formik, holidayResult, groupName }) => {
  const context = useAppDataContext()
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [holidayList, setHolidayList] = useState(context.holidayData);
  const [holidayModal, setHolidayModal] = useState(false);
  const [newHolidayMessage, setNewHolidayMessage] = useState();

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
 
  // useEffect(() => {
  //   formik.setFieldValue("updated_holiday_msg_obj_list", context.holidayData?.listAAFPHolidayMsgSetups?.items);
  // }, [context.holidayData]);

  // useEffect(() => {
  //   setHolidayList(holidayResult.listAAFPHolidayMsgSetups?.items);
  // }, [holidayResult]);

  const handleAddHolidayList = useCallback(async (e) => {
    //const holidayListFiltered  = context.holidayData?.listAAFPHolidayMsgSetups?.items?.filter(holiday => holiday.holiday_type === formik.values.holiday_type.label)

    //if (!holidayListFiltered.length > 0) {
      const newHolidayMessage = formik.values.holiday_start_dt
        ? {
          holiday_msg: formik.values.holiday_msg,
          holiday_type: formik.values.holiday_type.label,
          holiday_start_dt: new Date(formik.values.holiday_start_dt).toISOString(),
          holiday_end_dt: new Date(formik.values.holiday_end_dt).toISOString(),
          active_flg: formik.values.active_flg,
          group_name: groupName,
        }
        : undefined
      
      if (!newHolidayMessage) return
      
      try {
        const holidaySetupResult = await API.graphql({
          query: createAAFPHolidayMsgSetup,
          variables: { input: newHolidayMessage },
        })

      //   if (holidaySetupResult){
      //     setHolidayList(prevState => [
      //       ...prevState,
      //       {
      //         holiday_msg: formik.values.holiday_msg,
      //         holiday_type: formik.values.holiday_type.label,
      //         holiday_start_dt: new Date(
      //           formik.values.holiday_start_dt
      //         ).toISOString(),
      //         holiday_end_dt: new Date(formik.values.holiday_end_dt).toISOString(),
      //         active_flg: formik.values.active_flg,
      //         group_name: groupName,
      //       },
      //     ]);
      //   }
      } catch(e) {
        console.log(`Error:${JSON.stringify(e)}`);
      }
      
    //}

    if (holidayRef.current) {
      holidayRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  const handleRemoveHolidayList = useCallback(async deleteId => {
    try {
      const deleteItem = {
        id: deleteId
      }
      const holidayDeleteResult = await API.graphql({
        query: deleteAAFPHolidayMsgSetup,
        variables: { input: deleteItem },
      })
    } catch(error){
      console.log(`Error: ${JSON.stringify(error)}`)
    }
  }, []);

  const showModal = useCallback(() => {
    const { setFieldValue } = formik;
    setFieldValue("holiday_msg", "");
    setFieldValue("holiday_start_dt", "");
    setFieldValue("holiday_end_dt", "");
    setFieldValue("holiday_type", "");
    setFieldValue("active_flg", false);
    setHolidayModal(true);
  }, []);

  const hideModal = useCallback(() => {
    setHolidayModal(false);
  }, []);

  return (
    <>
      <div className="w-5/12 sm:w-full lg:w-5/12 md:w-5/12 mx-2">
        <div className="panel action-card panel-default shadow-md">
          <div className="panel-heading flex">
            <h3 className="block text-gray-700 text-xs font-bold w-4/6">
              Holiday Setup
            </h3>
            <span className="ml-auto">
              <a href={void 0} onClick={showModal} className="cursor-pointer">
                <img src={addIcon} className="w-5" />
              </a>
            </span>
          </div>
          <div className="panel-body">
            <table className="table-fixed text-xs holiday-table w-full">
              <thead>
                <tr>
                  <th className="border-b dark:border-slate-600 font-xs p-2 pl-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Message
                  </th>
                  <th className="border-b dark:border-slate-600 font-xs p-2 pl-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Holiday
                  </th>
                  <th className="border-b dark:border-slate-600 font-xs p-2 pl-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Start Date
                  </th>
                  <th className="border-b dark:border-slate-600 font-xs p-2 pl-2 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    End Date
                  </th>
                  <th className="border-b dark:border-slate-600 font-xs p-1 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Active
                  </th>
                  <th className="border-b dark:border-slate-600 font-xs p-1 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {context.holidayData?.listAAFPHolidayMsgSetups?.items ? (
                  context.holidayData.listAAFPHolidayMsgSetups.items.map((items, index) => {
                    return (
                      <tr
                        className="text-ellipsis overflow-hidden text-center"
                        key={index}
                      >
                        <td className="text-ellipsis overflow-hidden text-center">
                          <p data-tip={items.holiday_msg}>
                            {items.holiday_msg}
                          </p>
                          <ReactTooltip
                            multiline={true}
                            effect={"float"}
                            place="top"
                          />
                        </td>
                        <td className="text-ellipsis overflow-hidden text-center">
                          <p data-tip={items.holiday_type}>
                            {items.holiday_type}
                          </p>
                          <ReactTooltip
                            multiline={true}
                            effect={"float"}
                            place="top"
                          />
                        </td>
                        <td className="text-ellipsis overflow-hidden text-center">
                          {moment(items.holiday_start_dt).format("yyyy-mm-dd")}
                        </td>
                        <td className="text-ellipsis overflow-hidden text-center">
                          {moment(items.holiday_end_dt).format("yyyy-mm-dd")}
                        </td>
                        <td className="text-ellipsis overflow-hidden text-center">
                          {items.active_flg ? "Yes" : "No"}
                        </td>
                        <td>
                          <span>
                            <a
                              href={void 0}
                              className="cursor-pointer"
                              onClick={() => handleRemoveHolidayList(items.id)}
                            >
                              <img src={removeIcon} className="w-5" />
                            </a>
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="font-semibold text-md text-center"
                    >
                      No Holiday Added
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={`${holidayModal ? "" : "hidden"}`}>
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
        <div
          id="holidayModalModal"
          tabIndex={-1}
          aria-hidden={holidayModal ? "visible" : "hidden"}
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto m-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Holiday Setup
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="holidayModal"
                  onClick={hideModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="holiday-container">
                  <div className="form-group mb-4 flex">
                    <label
                      className="w-1/4 block text-gray-700 text-xs font-semibold mb-1 m-auto"
                      htmlFor="holiday prompt"
                    >
                      Holiday Prompt:
                    </label>
                    <input
                      type="text"
                      id="holiday_msg"
                      name="holiday_msg"
                      placeholder="Holiday Message"
                      value={formik.values.holiday_msg}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-3/4 border border-slate-300 rounded py-1 px-2 text-gray-700"
                    />
                  </div>
                  <div className="form-group mb-4 flex">
                    <label
                      className="w-1/4 block text-gray-700 text-xs font-semibold mb-1 m-auto"
                      htmlFor="holiday"
                    >
                      Holiday:
                    </label>
                    <Select
                      className="w-3/4"
                      classNamePrefix="select"
                      isDisabled={false}
                      isLoading={context.loading}
                      isClearable={true}
                      options={listOfHolidays}
                      isSearchable={true}
                      name="holiday_type"
                      id="holiday_type"
                      placeholder="Select"
                      value={formik.values.holiday_type}
                      //value={holidayResult.items}
                      //onChange={d => formik.setFieldValue("holiday_type", d)}
                      onChange={(e) => {
                        setNewHolidayMessage(Object.assign({holiday_type: e}, newHolidayMessage))
                        formik.setFieldValue("holiday_type", e)
                      }}
                    />
                  </div>
                  <div className="form-group mb-4 flex">
                    <label
                      className="w-1/4 block text-gray-700 text-xs font-semibold mb-1 m-auto"
                      htmlFor="holiday start date"
                    >
                      Start Date:
                    </label>
                    <DatePicker
                      selected={startDate}
                      id="holiday_start_dt"
                      name="holiday_start_dt"
                      onChange={e => {
                        //setStartDate(e.date);
                        setNewHolidayMessage(Object.assign({holiday_start_dt: e}, newHolidayMessage))
                        formik.setFieldValue("holiday_start_dt", e);
                      }}
                      minDate={moment().toDate()}
                      placeholderText="Select"
                      showTimeSelect={false}
                      value={formik.values.holiday_start_dt}
                      selectsStart
                      startDate={startDate}
                      popperPlacement="top-start"
                      popperModifiers={[
                        {
                          name: "arrow",
                          options: {
                            padding: ({ popper, reference, placement }) => ({
                              right:
                                Math.min(popper.width, reference.width) - 120,
                            }),
                          },
                        },
                      ]}
                      className="shadow appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="form-group mb-4 flex">
                    <label
                      className="w-1/4 block text-gray-700 text-xs font-semibold mb-1 m-auto"
                      htmlFor="holiday end date"
                    >
                      End Date:
                    </label>
                    <DatePicker
                      selected={endDate}
                      id="holiday_end_dt"
                      name="holiday_end_dt"
                      // onChange={date => {
                      //   setEndDate(date);
                      //   formik.setFieldValue("holiday_end_dt", date);
                      // }}
                      onChange={(e) => {
                        setNewHolidayMessage(Object.assign({holiday_end_dt: e}, newHolidayMessage))
                        formik.setFieldValue("holiday_end_dt", e)
                      }}
                      placeholderText="Select"
                      showTimeSelect={false}
                      selectsEnd
                      value={formik.values.holiday_end_dt}
                      endDate={endDate}
                      minDate={startDate}
                      popperModifiers={[
                        {
                          name: "arrow",
                          options: {
                            padding: ({ popper, reference, placement }) => ({
                              right:
                                Math.min(popper.width, reference.width) - 120,
                            }),
                          },
                        },
                      ]}
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="form-group mb-4 flex">
                    <label
                      className="block w-1/4 text-gray-700 text-xs font-semibold mb-1"
                      htmlFor="active"
                    >
                      Active:
                    </label>
                    <input
                      type="checkbox"
                      id="active_flg"
                      name="active_flg"
                      checked={formik.values.active_flg}
                      onChange={(e) => formik.handleChange(e)}
                      className="border border-slate-300 mx-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => {
                    handleAddHolidayList();
                    hideModal();
                  }}
                  data-modal-toggle="holidayModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  data-modal-toggle="holidayModal"
                  type="button"
                  onClick={() => setHolidayModal(false)}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Holiday };
