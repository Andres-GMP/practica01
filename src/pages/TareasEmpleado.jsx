import { useEffect, useState, useContext } from "react";
import NavBar from "../components/global/NavBar";
import Layout from "../components/global/Layout";
import {
	LayoutTaskemployee,
	LogoutEmployee,
	TitleTaskEmployee,
} from "../components/tareas_empleados/TaskEmployee_Components";
import TaskEmployee from "../components/tareas_empleados/TaskEmployee";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import AuthContext from "../context/AuthContext";

const TareasEmpleado = () => {
	const { currentUser } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [sectorName, setSectorName] = useState("");
	useEffect(() => {
		const getTasks = async () => {
			//getSectorTask
			const currentSector = await currentUser.sector;
			const docRef = doc(db, "sectors", currentSector);
			const docSnap = await getDoc(docRef);

			//setTasks
			docSnap.data().tasks.forEach((el) => {
				if (el.status !== "Pendiente") return;
				setTasks((prev) => [...prev, el]);
			});
			setSectorName(currentSector);
		};
		currentUser.uid && getTasks();
	}, [currentUser.uid]);

	return (
		<>
			<NavBar title="TAREAS" />
			<Layout>
				<LayoutTaskemployee>
					<TitleTaskEmployee title={sectorName} />
					{tasks.length !== 0 &&
						tasks.map(({ id, description, sector, status }) => (
							<TaskEmployee
								key={id}
								description={description}
								sector={sector}
								status={status}
							/>
						))}
					<LogoutEmployee />
				</LayoutTaskemployee>
			</Layout>
		</>
	);
};

export default TareasEmpleado;
