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
	const [testData, setTestData] = useState([]);
	const [sectorName, setSectorName] = useState("");
	useEffect(() => {
		const getTasks = async () => {
			//getUserSector
			let docRef = doc(db, "users", currentUser.uid);
			let docSnap = await getDoc(docRef);

			//getSectorTask
			const currentSector = await docSnap.data().sector;
			docRef = doc(db, "sectors", currentSector.id);
			docSnap = await getDoc(docRef);

			//setTasks
			let newData = [];
			docSnap.data().tasks.forEach((el) => {
				if (el.status !== "Pendiente") return;
				el.sector = currentSector.name;
				newData.push(el);
			});
			setTestData(newData);
			setSectorName(currentSector.name);
		};
		currentUser.uid && getTasks();
	}, [currentUser.uid]);

	return (
		<>
			<NavBar title="TAREAS" />
			<Layout>
				<LayoutTaskemployee>
					<TitleTaskEmployee title={sectorName} />
					{testData.length !== 0 &&
						testData.map(({ id, description, sector, status }) => (
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
