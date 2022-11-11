import React from "react";

//Presentational component
const FormInput = ({ title, placeholder, type, name }) => {
	return (
		<>
			<div className="flex flex-col w-full gap-2">
				<label className="text-white font-semibold tracking-wider">
					{title}
				</label>
				<input
					className="rounded-md p-1 shadow-md shadow-black/20 tracking-wider"
					type={type}
					placeholder={placeholder}
					name={name}
					required
				/>
			</div>
		</>
	);
};

export default FormInput;
