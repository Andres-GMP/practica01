import { useState } from "react";
import NavBar from "../components/global/NavBar";
import Tr from "../components/tareas/Tr";
import Th from "../components/tareas/Th";
import BtnAddTask from "../components/tareas/BtnAddTask";

const Tareas = () => {
	const [testData, setTestData] = useState([
		{
			id: 1,
			name: "Irrigar surcos.",
			sector: "AB",
			status: "Pendiente",
		},
		{
			id: 2,
			name: "Podar los plantios",
			sector: "AB",
			status: "Progreso",
		},
		{
			id: 3,
			name: "Limpiar surcos",
			sector: "AB",
			status: "Terminada",
		},
		{
			id: 4,
			name: "Piscar los olivos",
			sector: "AB",
			status: "Pendiente",
		},
		{
			id: 5,
			name: "Conteo de uvas ",
			sector: "AB",
			status: "Terminada",
		},
	]);
	return (
		<>
			<NavBar title={"Tareas"} />
			<div className="max-w-2xl m-auto ">
				<table className="w-full border-spacing-2 md:mt-10 md:shadow-md md:shadow-zinc-700/50">
					<thead className="bg-[#0089BA]/30 h-10">
						<tr className="text-black/60 space-x-1">
							<Th size="w-6/12" title="Nombre" />
							<Th size="w-2/12" title="Sector" center />
							<Th size="w-4/12" title="Estado" center />
						</tr>
					</thead>
					<tbody>
						{testData &&
							testData.map((task) => (
								<Tr
									key={task.id}
									name={task.name}
									sector={task.sector}
									status={task.status}
								/>
							))}
					</tbody>
				</table>
				<BtnAddTask />
			</div>
		</>
	);
};

export default Tareas;
