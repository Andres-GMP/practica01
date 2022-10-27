import { useState } from "react";
import NavBar from "../components/global/NavBar";
import BtnAddTask from "../components/tareas/BtnAddTask";
import FormTask from "../components/tareas/FormTask";
import Layout from "../components/tareas/Layout";
import Table from "../components/tareas/Table";

const Tareas = () => {
	const [showFormTask, setShowFormTask] = useState(false);
	const [editTask, setEditTask] = useState({});
	const [testData, setTestData] = useState([
		{
			id: 1,
			description: "Irrigar surcos.",
			sector: "AB",
			status: "Pendiente",
		},
		{
			id: 2,
			description: "Deshierbar",
			sector: "AB",
			status: "Progreso",
		},
		{
			id: 3,
			description: "Limpiar surcos",
			sector: "RD",
			status: "Terminada",
		},
		{
			id: 4,
			description: "Piscar los olivos",
			sector: "AB",
			status: "Pendiente",
		},
		{
			id: 5,
			description: "Conteo de uvas ",
			sector: "BC",
			status: "Terminada",
		},
	]);
	const handleEditTask = (newTask) => {
		const newTestData = testData.map((task) =>
			task.id === editTask.id ? newTask : task
		);
		setTestData(newTestData);
		setEditTask({});
		setShowFormTask(false);
	};

	const handleCreateTask = (newTask) => {
		newTask.id = testData.length + 1;
		newTask.status = "Pendiente";
		setTestData([...testData, newTask]);
		setShowFormTask(false);
	};

	const sortTable = (column, isAsc) => {
		let auxArray = [...testData];
		auxArray.sort((a, b) => {
			if (a[column] > b[column]) return 1;
			if (a[column] < b[column]) return -1;
			return 0;
		});
		!isAsc && auxArray.reverse();
		setTestData(auxArray);
	};

	return (
		<>
			<NavBar title={"Tareas"} />
			<Layout>
				<Table
					tasks={testData}
					setEditTask={setEditTask}
					setShowFormTask={setShowFormTask}
					sortTable={sortTable}
				/>
				{showFormTask && (
					<FormTask
						setShowFormTask={setShowFormTask}
						handleEditTask={handleEditTask}
						handleCreateTask={handleCreateTask}
						editTask={editTask}
					/>
				)}
				<BtnAddTask setShowFormTask={setShowFormTask} />
			</Layout>
		</>
	);
};

export default Tareas;
