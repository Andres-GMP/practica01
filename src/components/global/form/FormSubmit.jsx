import React from "react";
import { Icon } from "@iconify/react";

const FormSubmit = ({ bg, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={
				"flex justify-center rounded-md items-center w-full self-end h-8 shadow-md shadow-black/30 mt-5" +
				bg
			}
		>
			<Icon icon="fluent-mdl2:accept-medium" color="white" width={25} />
		</button>
	);
};

export default FormSubmit;
