import React from "react";

//High Order Compoent
const Layout = ({ children }) => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-5/6 h-3/4 bg-[#008E9B] flex flex-col p-3 rounded-lg justify-center max-w-lg">
				{children}
			</div>
		</div>
	);
};

export default Layout;
