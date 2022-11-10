import { useState, useEffect, useContext } from "react";
import FormLayout from "../global/form/FormLayout";
import FormInput from "../global/form/FormInput";
import FormSelect from "../global/form/FormSelect";
import FormSubmit from "../global/form/FormSubmit";
import FormDelete from "../global/form/FormDelete";
import AuthContext from "../../context/AuthContext";

const FormTask = ({
	handleCloseForm,
	handleCreateTask,
	handleEditTask,
	handleDeleteTask,
	editTask,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [form, setForm] = useState({ description: "", sector: "AB" });
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (Object.keys(editTask).length !== 0) {
			setIsEditing(true);
			setForm(editTask);
		}
	}, []);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.description || !form.sector) {
			return;
		}
		if (isEditing) handleEditTask(form);
		else handleCreateTask(form);
	};
	return (
		<>
			<FormLayout
				title={(isEditing ? "EDITAR" : "AGREGAR") + " TAREA"}
				handleCloseForm={handleCloseForm}
			>
				<form onSubmit={handleSubmit}>
					<FormInput
						label="Descripción"
						name="description"
						value={form?.description}
						onChange={handleChange}
						errorMessage="Escribe una descripción!"
						errorpeer="peer-invalid/description:data-[focused=true]:block"
						datapeer="peer/description"
						required
					/>
					<FormSelect
						label="Sector"
						name="sector"
						values={currentUser?.sectores}
						value={form?.sector}
						onChange={handleChange}
						errorMessage="Seleccione un sector!"
						required
					/>
					<FormSubmit bg={!isEditing ? " bg-[#019054] " : " bg-yellow-500 "} />
				</form>
				{isEditing && <FormDelete onClick={handleDeleteTask} />}
			</FormLayout>
		</>
	);
};

export default FormTask;
