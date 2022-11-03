import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="w-full h-screen flex justify-center bg-[#008E9B] bg-opacity-50 flex-col items-center p-2">
			{/* <header className="row-start-1 col-span-3 h-14 items-center"></header> */}
			{children}
		</div>
	);
};

export default Layout;
