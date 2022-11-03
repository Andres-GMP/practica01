import React from "react";
import { useState } from "react";

const FormInput = (props) => {
	const { label, errorMessage, datapeer, errorpeer, ...inputProps } = props;
	const [focused, setFocused] = useState(false);
	console.log(inputProps.name);
	return (
		<>
			<label className="block mt-2">{label}:</label>
			<input
				className="block border-2 rounded-md w-full p-1 mt-2 border-blue-500 peer/input"
				{...inputProps}
				onBlur={() => {
					setFocused(true);
				}}
			/>
			<span
				data-focused={focused.toString()}
				className="hidden peer-invalid/input:data-[focused=true]:block text-sm text-red-600 ml-1"
			>
				{errorMessage}
			</span>
		</>
	);
};

export default FormInput;
