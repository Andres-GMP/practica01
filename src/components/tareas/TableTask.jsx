import React from "react";
import Table from "../global/table/Table";
import THead from "../global/table/THead";
import Status from "../global/Status";
import Tr from "./../global/table/Tr";
import Th from "./../global/table/Th";

const TableTask = ({ tasks, handleClickTask, handleSortTasks }) => {
	return (
		<Table>
			<THead>
				<Th
					size="w-6/12"
					title="Nombre"
					columnName="description"
					onClick={handleSortTasks}
				/>
				<Th
					size="w-2/12"
					title="Sector"
					columnName="sector"
					onClick={handleSortTasks}
					center
				/>
				<Th
					size="w-4/12"
					title="Estado"
					columnName="status"
					onClick={handleSortTasks}
					center
				/>
			</THead>
			<tbody>
				{tasks &&
					tasks.map((task) => (
						<Tr
							key={task.id}
							data={task}
							onClick={handleClickTask}
							tableData={[
								task.description,
								task.sector,
								<Status type={task.status} center />,
							]}
						/>
					))}
			</tbody>
		</Table>
	);
};

export default TableTask;
