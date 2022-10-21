import React from "react";

//Presentational component
const Hr = () => {
	return (
		<div className="w-3/4 flex gap-2 self-center justify-between mt-2">
			<div className="w-[45%] h-[2px] bg-black/20"></div>
			<div className="w-1 h-1 bg-black/20 rounded-full"></div>
			<div className="w-[45%] h-[2px] bg-black/20"></div>
		</div>
	);
};

export default Hr;
