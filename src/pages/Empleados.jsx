import React from "react";
import BtnAdd from "../components/global/BtnAdd";
import NavBar from "../components/global/NavBar";
import Table from "../components/global/table/Table";
import Th from "../components/global/table/Th";
import THead from "../components/global/table/THead";
import Tr from "../components/global/table/Tr";

const Empleados = () => {
	return (
		<>
			<NavBar title="Empleados" />
			<div className="max-w-2xl m-auto">
				<Table>
					<THead>
						<Th title="Nombre" size="w-10/12" />
						<Th title="Sector" size="w-2/12" center />
					</THead>
					<tbody>
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
						<Tr tableData={["Axel Adrian Enciso Robles", "Ab"]} />
					</tbody>
				</Table>
			</div>
			<BtnAdd />
		</>
	);
};

export default Empleados;
