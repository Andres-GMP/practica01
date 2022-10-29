import React from "react";
import Status from "../global/Status";
import { TaskData } from "./TaskEmployee_Components";

const TaskEmployee = ({ description, sector, status }) => {
	return (
		<div className="flex flex-col w-8/12 m-auto bg-white px-4 py-2 rounded-lg max-w-sm first-of-type:mt-4 mt-2">
			<TaskData name="Tarea:" value={description} width="w-full" />
			<div className="flex justify-between mt-3">
				<TaskData name="Sector:" value={sector} width="w-6/12" />
				<Status type={status} />
			</div>
		</div>
	);
};

export default TaskEmployee;
