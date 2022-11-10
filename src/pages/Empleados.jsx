import React, { useEffect, useState } from "react";
import BtnAdd from "../components/global/BtnAdd";
import NavBar from "../components/global/NavBar";
import Table from "../components/global/table/Table";
import Th from "../components/global/table/Th";
import THead from "../components/global/table/THead";
import Tr from "../components/global/table/Tr";
import EmployeesForm from "../components/empleados/EmployeesForm";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const Empleados = () => {
	const [showForm, setShowForm] = useState(true);
	const [employees, setEmployees] = useState(true);
	const handleCloseForm = (e) => {
		setShowForm(false);
	};
	useEffect(() => {
		const getUsers = async () => {
			let q = query(collection(db, "users"), where("admin", "==", false));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((el) => {
				console.log(el);
			});
		};
		getUsers();
	}, []);
	return (
		<>
			<NavBar title="Empleados" />
			<div className="max-w-2xl m-auto">
				{showForm && <EmployeesForm handleCloseForm={handleCloseForm} />}
				<BtnAdd
					onClick={() => {
						setShowForm(true);
					}}
				/>
			</div>
		</>
	);
};

export default Empleados;
