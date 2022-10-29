import React from "react";

const Status = ({ type, center }) => {
	const statusColors = new Map([
		["Pendiente", " bg-green-400 "],
		["Progreso", " bg-yellow-400 "],
		["Terminada", " bg-red-400 "],
	]);

	return (
		<div
			className={`${
				center && "m-auto"
			} py-1 w-28 md:w-32 bg-[#296073] text-white text-sm rounded-lg flex items-center justify-evenly shadow-md shadow-black/30`}
		>
			{type}
			<div
				className={
					"w-4 h-4 rounded-full border-white border-2 shadow-md shadow-black/30" +
					statusColors.get(type)
				}
			></div>
		</div>
	);
};

export default Status;
