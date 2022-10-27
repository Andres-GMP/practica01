import { useState } from "react";
import { Icon } from "@iconify/react";

const Th = ({ title, size, handleSortTasks, center }) => {
	const [isAsc, setIsAsc] = useState(false);
	const columns = new Map([
		["Nombre", "description"],
		["Estado", "status"],
		["Sector", "sector"],
	]);
	return (
		<th className={"p-1" + size}>
			<button
				className={"flex items-center " + (center && "m-auto")}
				onClick={(e) => {
					handleSortTasks(columns.get(title), isAsc);
					setIsAsc(!isAsc);
				}}
			>
				{isAsc ? (
					<Icon icon="ic:outline-arrow-drop-down" width={25} color="white" />
				) : (
					<Icon icon="ic:outline-arrow-drop-up" width={25} color="white" />
				)}
				<span>{title}</span>
			</button>
		</th>
	);
};

export default Th;
