import { useState } from "react";
import NavBar from "../components/global/NavBar";
import Layout from "../components/global/Layout";
import TaskEmployee from "../components/tareas_empleados/TaskEmployee";
import {
	LayoutTaskemployee,
	LogoutEmployee,
	TitleTaskEmployee,
} from "../components/tareas_empleados/TaskEmployee_Components";

const TareasEmpleado = () => {
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
			status: "Pendiente",
		},
		{
			id: 3,
			description: "Limpiar surcos",
			sector: "AB",
			status: "Pendiente",
		},
		{
			id: 4,
			description: "Piscar los olivos",
			sector: "AB",
			status: "Pendiente",
		},
	]);
	return (
		<>
			<NavBar title="TAREAS" />
			<Layout>
				<LayoutTaskemployee>
					<TitleTaskEmployee title="AB" />
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
