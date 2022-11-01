import React from "react";

const FormSelect = (props) => {
	const { label, errorMessage, values, ...inputProps } = props;
	return (
		<>
			<label className="block mt-2">{label}:</label>

			<select
				className="block border-2 border-blue-500 rounded-md w-full py-1 mt-2 peer/select"
				{...inputProps}
			>
				{values?.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
			<span className="hidden peer-invalid/select:block text-sm text-red-600 ml-1 ">
				{errorMessage}
			</span>
		</>
	);
};

export default FormSelect;
