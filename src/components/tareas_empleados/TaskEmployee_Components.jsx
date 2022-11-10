import React from "react";
import Logout from "../global/Logout";

export const TitleTaskEmployee = ({ title }) => {
	return (
		<div className="sticky top-0 bg-[#ADC5CF] py-1">
			<h1 className="text-center text-4xl text-[#0081CF] font-bold drop-shadow-lg mt-4 ">
				{title}
			</h1>
		</div>
	);
};
export const TasksEmployeeLayout = ({ children }) => {
	return <div className="w-full m-auto">{children}</div>;
};

export const TaskData = ({ name, value, width }) => {
	return (
		<>
			<div className={width}>
				<span className="text-[#008F7A]">
					<b> {"   " + name}</b>
				</span>
				<span className="text-[#ADC5CF]">{"   " + value}</span>
			</div>
		</>
	);
};

export const LogoutEmployee = () => {
	return (
		<>
			<div className="fixed left-0 bottom-5 w-full flex items-center justify-center">
				<Logout />
			</div>
		</>
	);
};

export const LayoutTaskemployee = ({ children }) => {
	return (
		<>
			<div className="pb-20">{children}</div>
			<style>{"body { background-color: #ADC5CF; }"}</style>
		</>
	);
};
