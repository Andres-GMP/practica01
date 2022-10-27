import React from "react";
import Th from "./Th";
import Tr from "./Tr";

const Table = ({ tasks, setEditTask, setShowFormTask, sortTable }) => {
	return (
		<div>
			<table className="w-full border-spacing-2 md:mt-10 md:shadow-md md:shadow-zinc-700/50">
				<thead className="bg-[#0089BA]/30 h-10">
					<tr className="text-black/60 space-x-1">
						<Th size="w-6/12" title="Nombre" sortTable={sortTable} />
						<Th size="w-2/12" title="Sector" sortTable={sortTable} center />
						<Th size="w-4/12" title="Estado" sortTable={sortTable} center />
					</tr>
				</thead>
				<tbody>
					{tasks &&
						tasks.map((task) => (
							<Tr
								key={task.id}
								taskData={task}
								setEditTask={setEditTask}
								setShowFormTask={setShowFormTask}
							/>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
