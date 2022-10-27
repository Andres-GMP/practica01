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
	const handleCloseForm = () => {
		setShowFormTask(false);
		setEditTask({});
	};
	const handleEditTask = (newTask) => {
		let auxArray = testData.map((task) =>
			task.id === editTask.id ? newTask : task
		);
		setTestData(auxArray);
		handleCloseForm();
	};
	const handleCreateTask = (newTask) => {
		newTask.id = testData.length + 1;
		newTask.status = "Pendiente";
		setTestData([...testData, newTask]);
		handleCloseForm();
	};
	const handleDeleteTask = () => {
		let auxArray = testData.filter((el) => el.id !== editTask.id);
		setTestData(auxArray);
		handleCloseForm();
	};
	const handleSortTasks = (column, isAsc) => {
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
			<NavBar title={"TAREAS"} />
			<Layout>
				<Table
					tasks={testData}
					setEditTask={setEditTask}
					setShowFormTask={setShowFormTask}
					handleSortTasks={handleSortTasks}
				/>
				{showFormTask && (
					<FormTask
						handleCloseForm={handleCloseForm}
						handleEditTask={handleEditTask}
						handleCreateTask={handleCreateTask}
						handleDeleteTask={handleDeleteTask}
						editTask={editTask}
					/>
				)}
				<BtnAddTask setShowFormTask={setShowFormTask} />
			</Layout>
		</>
	);
};

export default Tareas;
