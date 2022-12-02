import React from "react";

const Header = ({ departments, formik, holidayResult, setGroupName }) => {
  const setFieldData = data => {
    const { setFieldValue } = formik;
    for (const [key, value] of Object.entries(data)) {
      setFieldValue(key, value);
    }
  };

  return (
    <header className="flex border-b-2 bg-white p-5">
      <div className="w-1/6">
        <h2 className="font-medium text-lg">AAFP Contact Center</h2>
      </div>
      <ul className="w-5/6 flex-1 flex justify-end">
        {departments.listAAFPMainSetups?.items?.map((items, index) => {
          return (
            <li className="mr-3" key={index}>
              <a
                className="inline-block cursor-pointer border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                onClick={e => {
                  e.preventDefault();
                  setFieldData(items);
                  setGroupName(items.group_name);
                }}
              >
                {items.group_name}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export { Header };
