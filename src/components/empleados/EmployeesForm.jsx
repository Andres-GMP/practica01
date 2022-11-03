import React, { useState } from "react";
import FormDelete from "../global/form/FormDelete";
import FormInput from "../global/form/FormInput";
import FormLayout from "../global/form/FormLayout";
import FormSubmit from "../global/form/FormSubmit";

const EmployeesForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
		sector: "",
	});
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const inputs = [
		{
			id: 1,
			name: "name",
			type: "text",
			placeHolder: "Nombre(s) APaterno AMaterno",
			label: "Nombre completo",
			errorMessage: "Debes introduce un nombre!",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeHolder: "ejemplo@ej.com",
			label: "Correo electronico",
			errorMessage: "Debes introducir un email!",
			required: true,
		},
		{
			id: 3,
			name: "password",
			type: "password",
			placeHolder: "**********",
			label: "Contraseña",
			errorMessage: "La contraseña debe tener al menos 8 caracteres",
			required: true,
		},
		{
			id: 4,
			name: "cpassword",
			type: "password",
			placeHolder: "**********",
			label: "Confirmar contraseña",
			errorMessage: "Las contraseñas no coinciden",
			required: true,
		},
	];
	return (
		<FormLayout title="Agregar Empleado">
			<form action="">
				{inputs?.map((input) => (
					<FormInput
						key={input.uid}
						{...input}
						value={form[input.name]}
						onChange={handleChange}
						errorpeer=""
					/>
				))}
				<FormSubmit bg=" bg-green-500 " />
			</form>
			<FormDelete />
		</FormLayout>
	);
};

export default EmployeesForm;
