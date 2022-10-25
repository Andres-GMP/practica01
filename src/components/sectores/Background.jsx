import React from "react";

//High Order Compoent
const Background = ({ children }) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full h-full bg-[#008E9B] bg-opacity-50 flex flex-col p-3justify-center">
                {children}
            </div>
        </div>
    );
};

export default Background;
