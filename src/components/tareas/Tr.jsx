import Status from "./Status";
const Tr = ({ taskData, setEditTask, setShowFormTask }) => {
	return (
		<tr
			className="text-left bg-gray-100 border-b-2 border-b-white hover:bg-sky-100 cursor-pointer"
			onClick={() => {
				setEditTask(taskData);
				setShowFormTask(true);
			}}
		>
			<td className="p-2">{taskData.description}</td>
			<td className="p-2 text-center">{taskData.sector}</td>
			<td className="p-2 text-center">
				<Status type={taskData.status} />
			</td>
		</tr>
	);
};

export default Tr;
