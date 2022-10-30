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
import Logout from "../components/global/Logout";

const Tareas = () => {
	const [showFormTask, setShowFormTask] = useState(false);
	const [editTask, setEditTask] = useState({});
	const { currentUser } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [prueba, setPrueba] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			//getAdminSectors
			let docRef = doc(db, "users", currentUser.uid);
			let docSnap = await getDoc(docRef);

			//getSectorTask
			const sectors = await docSnap.data().sectores;
			console.log(sectors);

			const newTasks = [];
			await sectors.forEach(async (sector, i) => {
				docRef = doc(db, "sectors", sector);
				docSnap = await getDoc(docRef);
				let array = docSnap.data().tasks;
				newTasks.push(...array);
				if (sectors.length === i + 1) setTasks(newTasks);
			});
			console.log("first");
		};
		currentUser.uid && getTasks();
	}, [currentUser.uid]);

	const handleCloseForm = () => {
		setShowFormTask(false);
		setEditTask({});
	};
	const handleEditTask = (newTask) => {
		let auxArray = tasks.map((task) =>
			task.id === editTask.id ? newTask : task
		);
		setTasks(auxArray);
		handleCloseForm();
	};
	const handleCreateTask = (newTask) => {
		newTask.id = tasks.length + 1;
		newTask.status = "Pendiente";
		setTasks([...tasks, newTask]);
		handleCloseForm();
	};
	const handleDeleteTask = () => {
		let auxArray = tasks.filter((el) => el.id !== editTask.id);
		setTasks(auxArray);
		handleCloseForm();
	};
	const handleSortTasks = (column, isAsc) => {
		let auxArray = [...tasks];
		auxArray.sort((a, b) => {
			if (a[column] > b[column]) return 1;
			if (a[column] < b[column]) return -1;
			return 0;
		});
		!isAsc && auxArray.reverse();
		setTasks(auxArray);
	};
	const handleClickTask = (taskData) => {
		setEditTask(taskData);
		setShowFormTask(true);
	};

	return (
		<>
			<NavBar title={"TAREAS"} />
			<Layout>
				{tasks.length !== 0 && (
					<TableTask
						tasks={tasks}
						handleClickTask={handleClickTask}
						handleSortTasks={handleSortTasks}
					/>
				)}

				<Logout />
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
