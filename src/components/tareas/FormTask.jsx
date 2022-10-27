import { useState, useEffect } from "react";
import {
	ErrorFormTask,
	InputFormTask,
	LayoutFormTask,
	SelectFormTask,
	SubmitFormTask,
	DeleteFormTask,
	TitleFormTask,
} from "./FormTask_Components";

const FormTask = ({
	handleCloseForm,
	handleCreateTask,
	handleEditTask,
	handleDeleteTask,
	editTask,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState(false);
	const [form, setForm] = useState({ description: "", sector: "AB" });

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
		form.description !== "" && error && setError(false);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.description || !form.sector) {
			setError(true);
			return;
		}
		if (isEditing) handleEditTask(form);
		else handleCreateTask(form);
	};

	return (
		<LayoutFormTask handleCloseForm={handleCloseForm}>
			{error && <ErrorFormTask />}
			<TitleFormTask title={(isEditing ? "EDITAR" : "AGREGAR") + " TAREA"} />
			<form onSubmit={handleSubmit}>
				<InputFormTask
					border={error ? " border-red-500 " : " border-blue-500 "}
					handleChange={handleChange}
					value={form.description}
				/>
				<div className="flex justify-between items-center">
					<SelectFormTask handleChange={handleChange} value={form.sector} />
					<SubmitFormTask
						bg={!isEditing ? " bg-[#019054] " : " bg-yellow-500 "}
					/>
				</div>
			</form>
			{isEditing && <DeleteFormTask handleDeleteTask={handleDeleteTask} />}
		</LayoutFormTask>
	);
};

export default FormTask;
