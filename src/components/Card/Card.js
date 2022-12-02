import React from "react";

const Card = props => {
  const { title } = props;
  return (
    <div className="panel action-card panel-default shadow-md">
      <div className="panel-heading">
        <h3 className="block text-gray-700 text-sm font-bold">{title}</h3>
      </div>
      <div className="panel-body">
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export { Card };
