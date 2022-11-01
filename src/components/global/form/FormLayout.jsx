import React from "react";

const FormLayout = ({ handleCloseForm, children, title }) => {
	return (
		<div
			onClick={handleCloseForm}
			className="w-full h-screen fixed left-0 backdrop-blur-sm top-0 z-1 flex justify-center items-center cursor-pointer z-20"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white p-4 rounded-md w-4/6 shadow-lg shadow-black/30 max-w-sm cursor-default fixed overflow-hidden mt-4 max-h-[70%] overflow-y-scroll"
			>
				<h1 className="text-blue-500 font-bold text-xl text-center mt-1">
					{title}
				</h1>
				{children}
			</div>
		</div>
	);
};

export default FormLayout;
