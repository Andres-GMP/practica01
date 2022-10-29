import React from "react";
import { Link } from "react-router-dom";

// Button to navigate
const ButtonBack = ({ text, pathSource, pathImg }) => {
  return (
    <>
      <Link to={pathSource} className="w-full h-40 flex content-center ">
        {pathImg}
        <span>{text}</span>
      </Link>
    </>
  );
};

export default ButtonBack;
