import React from "react";
import { Link } from "react-router-dom";

// Button to navigate
const ButtonBack = ({ text, pathSource, pathImg }) => {
  return (
    <>
      <Link
        to={pathSource}
        className="w-80 h-36  grid grid-rows-2 content-center  rounded-lg bg-white shadow-lg justify-center m-5 text-color9 bg-[#ffffff]
      "
      >
        {pathImg}
        <span>{text}</span>
      </Link>
    </>
  );
};

export default ButtonBack;
