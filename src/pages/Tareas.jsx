import { useState, useEffect } from "react";
import NavBar from "../components/global/NavBar";
import BtnAdd from "../components/global/BtnAdd";
import FormTask from "../components/tareas/FormTask";
import TableTask from "../components/tareas/TableTask";
import Layout from "../components/global/Layout";
import { auth, db } from "./../firebase/firebaseConfig";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";

const Tareas = () => {
	const [showFormTask, setShowFormTask] = useState(false);
	const [editTask, setEditTask] = useState({});
	const { currentUser } = useContext(AuthContext);
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
	console.log(currentUser.uid);

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
	const handleClickTask = (taskData) => {
		setEditTask(taskData);
		setShowFormTask(true);
	};

	return (
		<>
			<NavBar title={"TAREAS"} />
			<Layout>
				{testData && (
					<TableTask
						tasks={testData}
						handleClickTask={handleClickTask}
						handleSortTasks={handleSortTasks}
					/>
				)}

				{showFormTask && (
					<FormTask
						handleCloseForm={handleCloseForm}
						handleEditTask={handleEditTask}
						handleCreateTask={handleCreateTask}
						handleDeleteTask={handleDeleteTask}
						editTask={editTask}
					/>
				)}
				<BtnAdd onClick={() => setShowFormTask(true)} />
			</Layout>
		</>
	);
};

export default Tareas;
