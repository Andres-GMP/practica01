import React from "react";
import { Link } from "react-router-dom";

// Button to navigate
const ButtonBack = ({ text, pathSource, pathImg }) => {
  return (
    <>
      <Link
        to={pathSource}
        className="md:w-80 w-32 md:h-36 h-32 flex flex-col items-center rounded-lg gap-2 bg-white shadow-lg justify-center m-5 text-color9 bg-[#ffffff]
      "
      >
        {pathImg}
        <span>{text}</span>
      </Link>
    </>
  );
};

export default ButtonBack;
