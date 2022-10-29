import React from "react";

const THead = ({ children }) => {
	return (
		<thead className="bg-[#b2dbea] h-10 sticky top-0">
			<tr className="text-black/60 space-x-1">{children}</tr>
		</thead>
	);
};

export default THead;
