//import { INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER } from "@aws-amplify/core";
import React, { useCallback } from "react";
import { useAppDataContext } from "../AppDataContext/AppDataContext";


const Header = ({ departments, formik, holidayResult, setGroupName }) => {
  const context = useAppDataContext();
  const setFieldData = data => {
    const { setFieldValue } = formik;
    for (const [key, value] of Object.entries(data)) {
      setFieldValue(key, value);
    }
  };

  const handleDepartmentClick = useCallback((event, group_name) => {
    event.preventDefault();
    context.setSelectedDepartment_GroupName(group_name)
  },[])

  return (
    <header className="flex border-b-2 bg-white p-5">
      <div className="w-1/6">
        <h2 className="font-medium text-lg">AAFP Contact Center</h2>
      </div>
      <ul className="w-5/6 flex-1 flex justify-end">
        {departments?.map((item, index) => {
          const selectedDepartmentStyle = context.selectedDepartmentGroupName === item.group_name;
          return (
            <li className="mr-3" key={`${item.group_name}-${index}`}>
              <a
                className={`inline-block cursor-pointer border border-blue-500 py-1 px-3 ${selectedDepartmentStyle ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold rounded`}
                onClick={(event) => handleDepartmentClick(event, item.group_name)}
              >
                {item.group_name}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export { Header };
