import { Icon } from "@iconify/react";

export const LayoutFormTask = ({ children, handleCloseForm }) => {
	return (
		<div
			onClick={handleCloseForm}
			className="w-full h-screen fixed left-0 backdrop-blur-sm top-0 z-1 flex justify-center items-center cursor-pointer z-20"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white p-4 rounded-md w-4/6 shadow-lg shadow-black/30 max-w-sm cursor-default fixed overflow-hidden"
			>
				{children}
			</div>
		</div>
	);
};

export const TitleFormTask = ({ title }) => {
	return (
		<>
			<h1 className="text-blue-500 font-bold text-xl text-center mt-1">
				{title}
			</h1>
			<h2 className="text-center text-cyan-700 text-sm font-semibold">
				No: 001
			</h2>
		</>
	);
};

export const ErrorFormTask = () => {
	return (
		<div className="bg-red-500 w-full  absolute top-0 left-0">
			<span className="text-sm text-white text-center block">
				Debes llenar todos los campos
			</span>
		</div>
	);
};

export const InputFormTask = ({ border, handleChange, value }) => {
	return (
		<>
			<label className="block mt-2">Descripción:</label>
			<input
				className={"block border-2  rounded-md w-full p-1 mt-2" + border}
				type="text"
				placeholder="Describa aquí su tarea"
				name="description"
				onChange={handleChange}
				value={value}
			/>
		</>
	);
};

export const SelectFormTask = ({ handleChange, value }) => {
	return (
		<div className="w-4/6">
			<label className="block mt-2">Sector:</label>
			<select
				className="block border-2 border-blue-500 rounded-md w-full py-1 mt-2"
				name="sector"
				onChange={handleChange}
				value={value}
			>
				<option value="AB">AB</option>
				<option value="BC">BC</option>
			</select>
		</div>
	);
};

export const SubmitFormTask = ({ bg }) => {
	return (
		<button
			className={
				"flex justify-center rounded-md items-center w-10 self-end h-10 shadow-md shadow-black/30 " +
				bg
			}
		>
			<Icon icon="fluent-mdl2:accept-medium" color="white" width={25} />
		</button>
	);
};

export const DeleteFormTask = ({ handleDeleteTask }) => {
	return (
		<>
			<div className="w-full h-[2px] bg-black/60 flex justify-center items-center relative my-6 ">
				<span className="text-xl bg-white px-1 text-blue-500">Ó</span>
			</div>
			<button
				onClick={handleDeleteTask}
				className="flex justify-center rounded-md items-center w-full self-end h-8  bg-red-600 mt-2 shadow-md shadow-black/30"
			>
				<span className="text-white font-semibold">Eliminar</span>
			</button>
		</>
	);
};
