import React from "react";

const Header = ({ departments }) => {
  console.log("Departments: ", departments)
  const { listAAFPMainSetups } = departments;
  return (
    <div className="flex mr-auto justify-end">
      {listAAFPMainSetups.items.map((x, i) => {
        return (
          <button key={i} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">{x.group_name}</button>
        )
      })}
    </div>
  );
};

export { Header };
