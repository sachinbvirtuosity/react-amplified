//import { INTERNAL_AWS_APPSYNC_REALTIME_PUBSUB_PROVIDER } from "@aws-amplify/core";
import React from "react";
import { useAppDataContext } from "../AppDataContext/AppDataContext";


const Header = ({ departments, formik, holidayResult, setGroupName }) => {
  const context = useAppDataContext();

  const setFieldData = data => {
    const { setFieldValue } = formik;
    for (const [key, value] of Object.entries(data)) {
      setFieldValue(key, value);
    }
  };

  const handleDepartmentClick = (event, dialed_number, group_name) => {
    event.preventDefault();
    context.setSelectedDepartment_Phone(dialed_number)
    context.setSelectedDepartment_GroupName(group_name)
  }

  return (
    <header className="flex border-b-2 bg-white p-5">
      <div className="w-1/6">
        <h2 className="font-medium text-lg">AAFP Contact Center</h2>
      </div>
      <ul className="w-5/6 flex-1 flex justify-end">
        {departments?.map((item, index) => {
          return (
            <li className="mr-3" key={`${item.group_name}-${index}`}>
              <a
                className="inline-block cursor-pointer border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                onClick={(event) => handleDepartmentClick(event, item.dialed_number, item.group_name)}
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
