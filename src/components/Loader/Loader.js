import React from "react";
import "./loader.css";

const Loader = props => {
  const { loading } = props;
  return <>{loading && <div className="cover-spin"></div>}</>;
};

export { Loader };
