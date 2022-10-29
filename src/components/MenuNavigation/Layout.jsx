import React from "react";


const Layout = ({children})=>{
    return(
        <div className="w-full h-screen flex justify-center items-center grid-cols-3 grid-rows-5">
            <header className="row-start-1 col-span-3 h-14 items-center">
                {children}
            </header>
        </div>
    );
};

export default Layout;