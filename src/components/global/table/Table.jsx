import React from "react";

const Table = ({ children }) => {
	return (
		<>
			<table className="w-full border-spacing-2 md:mt-10 md:shadow-md md:shadow-zinc-700/50 mb-10">
				{children}
			</table>
		</>
	);
};

export default Table;
