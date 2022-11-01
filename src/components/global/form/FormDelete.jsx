import React from "react";

const FormDelete = ({ onClick }) => {
	return (
		<>
			<div className="w-full h-[2px] bg-black/60 flex justify-center items-center relative my-6 ">
				<span className="text-xl bg-white px-1 text-blue-500">Ó</span>
			</div>
			<button
				onClick={onClick}
				className="flex justify-center rounded-md items-center w-full self-end h-8  bg-red-600 mt-2 shadow-md shadow-black/30"
			>
				<span className="text-white font-semibold">Eliminar</span>
			</button>
		</>
	);
};

export default FormDelete;
