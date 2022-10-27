import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const FormTask = ({
	setShowFormTask,
	handleEditTask,
	handleCreateTask,
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
		<div
			onClick={() => setShowFormTask(false)}
			className="w-full h-screen absolute left-0 backdrop-blur-sm top-0 z-1 flex justify-center items-center cursor-pointer z-20"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white p-4 rounded-md w-4/6 shadow-lg shadow-black/30 max-w-sm cursor-default fixed overflow-hidden"
			>
				{error && (
					<div className="bg-red-500 w-full  absolute top-0 left-0">
						<span className="text-sm text-white text-center block">
							Debes llenar todos los campos
						</span>
					</div>
				)}
				<h1 className="text-blue-500 font-bold text-xl text-center mt-1">
					{isEditing ? "EDITAR" : "AGREGAR"} TAREA
				</h1>
				<h2 className="text-center text-cyan-700 text-sm font-semibold">
					No: 001
				</h2>
				<form onSubmit={handleSubmit}>
					<label className="block mt-2">Descripción:</label>
					<input
						className={
							"block border-2  rounded-md w-full p-1 mt-2" +
							(error ? " border-red-500 " : " border-blue-500 ")
						}
						type="text"
						placeholder="Describa aquí su tarea"
						name="description"
						onChange={handleChange}
						value={form.description}
					/>
					<div className="flex justify-between items-center">
						<div className="w-4/6">
							<label className="block mt-2">Sector:</label>
							<select
								className="block border-2 border-blue-500 rounded-md w-full py-1 mt-2"
								name="sector"
								onChange={handleChange}
								value={form.sector}
							>
								<option value="AB">AB</option>
								<option value="BC">BC</option>
							</select>
						</div>

						<button className="flex justify-center rounded-md items-center w-12 self-end h-12 bg-[#019054] shadow-md shadow-black/30">
							<Icon icon="fluent-mdl2:accept-medium" color="white" width={30} />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormTask;
