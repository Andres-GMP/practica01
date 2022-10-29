import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		navigate("/login");
	};
	return (
		<>
			<button
				onClick={handleLogout}
				className="bg-red-500 w-20 h-10 rounded-md grid place-content-center hover:bg-red-400 transition-all shadow-lg shadow-black/30"
			>
				<Icon icon="heroicons-outline:logout" color="white" width={25} />
			</button>
		</>
	);
};

export default Logout;
