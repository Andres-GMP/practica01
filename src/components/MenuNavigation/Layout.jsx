import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex content-between justify-center grid-cols-3 grid-rows-5 bg-[#008E9B] bg-opacity-50 p-2">
      <header className="row-start-1 col-span-3 h-14 items-center">
        {children}
      </header>
    </div>
  );
};

export default Layout;
