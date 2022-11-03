import React, { useState } from "react";
import Form from "../components/global/form/FormLayout";
import FormInput from "../components/global/form/FormInput";
import BtnAdd from "../components/global/BtnAdd";
import NavBar from "../components/global/NavBar";
import Table from "../components/global/table/Table";
import Th from "../components/global/table/Th";
import THead from "../components/global/table/THead";
import Tr from "../components/global/table/Tr";
import EmployeesForm from "../components/empleados/EmployeesForm";

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
						<Tr tableData={["Juan manolo", "Ab"]} />
						<Tr tableData={["Juan manolo", "Ab"]} />
						<Tr tableData={["Juan manolo", "Ab"]} />
						<Tr tableData={["Juan manolo", "Ab"]} />
						<Tr tableData={["Juan manolo", "Ab"]} />
						<Tr tableData={["Juan manolo", "Ab"]} />
					</tbody>
				</Table>
				<EmployeesForm />
				<BtnAdd />
			</div>
		</>
	);
};

export default Empleados;
