import React from "react";
import "./loader.css";

const Loader = props => {
  const { loading } = props;
  const result = loading
    ? (<div className="cover-spin"></div>)
    : (<></>)
  return result;
};

export { Loader };
