import { useState, useEffect } from "react";
import NavBar from "../components/global/NavBar";
import BtnAdd from "../components/global/BtnAdd";
import FormTask from "../components/tareas/FormTask";
import TableTask from "../components/tareas/TableTask";
import Layout from "../components/global/Layout";
import { db } from "./../firebase/firebaseConfig";
import {
	arrayRemove,
	arrayUnion,
	doc,
	getDoc,
	updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logout from "../components/global/Logout";
import { v4 as uuidv4 } from "uuid";

const Tareas = () => {
	const [showFormTask, setShowFormTask] = useState(false);
	const [editTask, setEditTask] = useState({});
	const { currentUser } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			//getSectorTask
			try {
				let newTasks = [];
				const sectors = await currentUser.sectores;
				sectors.forEach(async (sector, i) => {
					let docRef = doc(db, "sectors", sector);
					let docSnap = await getDoc(docRef);
					newTasks = [...newTasks, ...docSnap.data().tasks];
					if (i == sectors.length - 1) setTasks(newTasks);
				});
			} catch (err) {
				console.log(err);
			}
		};
		getTasks();
	}, []);

	const handleCloseForm = () => {
		setShowFormTask(false);
		setEditTask({});
	};
	const handleEditTask = async (newTask) => {
		//update from state
		let auxArray = tasks.map((task) =>
			task.id === editTask.id ? newTask : task
		);
		//update from database
		try {
			await updateDoc(doc(db, "sectors", editTask.sector), {
				tasks: arrayRemove(editTask),
			});
			await updateDoc(doc(db, "sectors", newTask.sector), {
				tasks: arrayUnion(newTask),
			});
		} catch (err) {
			console.log(err);
		}
		setTasks(auxArray);
		handleCloseForm();
	};
	const handleCreateTask = async (newTask) => {
		//Add to state
		newTask.id = uuidv4();
		newTask.status = "Pendiente";
		setTasks([...tasks, newTask]);

		//Add to database
		try {
			await updateDoc(doc(db, "sectors", newTask.sector), {
				tasks: arrayUnion(newTask),
			});
		} catch (err) {
			console.log(err);
		}
		handleCloseForm();
	};
	const handleDeleteTask = async () => {
		//Delete from state
		let auxArray = tasks.filter((el) => el.id !== editTask.id);
		setTasks(auxArray);
		//Delete from database
		try {
			await updateDoc(doc(db, "sectors", editTask.sector), {
				tasks: arrayRemove(editTask),
			});
		} catch (err) {
			console.log(err);
		}
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
				<TableTask
					tasks={tasks}
					handleClickTask={handleClickTask}
					handleSortTasks={handleSortTasks}
				/>
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
