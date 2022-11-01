import React, { useState } from "react";
import Form from "../components/form/FormLayout";
import FormInput from "../components/form/FormInput";
import BtnAdd from "../components/global/BtnAdd";
import NavBar from "../components/global/NavBar";
import Table from "../components/global/table/Table";
import Th from "../components/global/table/Th";
import THead from "../components/global/table/THead";
import Tr from "../components/global/table/Tr";

const Empleados = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
		sector: "",
	});
	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeHolder: "Nombre(s) APaterno AMaterno",
			label: "Nombre completo",
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeHolder: "ejemplo@ej.com",
			label: "Correo electronico",
		},
		{
			id: 3,
			name: "password",
			type: "password",
			placeHolder: "**********",
			label: "Contraseña",
		},
		{
			id: 4,
			name: "cpassword",
			type: "password",
			placeHolder: "**********",
			label: "Confirmar contraseña",
		},
	];
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

				<BtnAdd />
			</div>
		</>
	);
};

export default Empleados;
