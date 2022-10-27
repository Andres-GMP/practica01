import React from "react";
import { Icon } from "@iconify/react";

const BtnAddTask = ({ setShowFormTask }) => {
	return (
		<button
			onClick={() => setShowFormTask(true)}
			className="fixed w-14 h-14 shadow-md shadow-black/30 rounded-lg bg-[#FF6C3E] text-2xl font-bold text-white right-5 bottom-5 grid place-content-center"
		>
			<Icon icon="ic:twotone-add" width={40} />
		</button>
	);
};

export default BtnAddTask;
