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
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { auth } from "./../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Empleados = () => {
	const [showForm, setShowForm] = useState(false);
	const [employees, setEmployees] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const handleCloseForm = (e) => {
		setShowForm(false);
	};
	useEffect(() => {
		const getEmployees = async () => {
			let q = query(collection(db, "users"), where("admin", "==", false));
			const querySnapshot = await getDocs(q);
			setEmployees([]);
			querySnapshot.forEach((el) =>
				setEmployees((prev) => [...prev, el.data()])
			);
		};
		currentUser.uid && getEmployees();
	}, [currentUser.uid]);
	const createEmployee = async (e, newEmployee) => {
		e.preventDefault();
		// auth
		// 	.createUser({
		// 		email: "user@example.com",
		// 		emailVerified: false,
		// 		phoneNumber: "+11234567890",
		// 		password: "secretPassword",
		// 		displayName: "Johsn Doe",
		// 		photoURL: "http://www.example.com/12345678/photo.png",
		// 		disabled: false,
		// 	})
		// 	.then((userRecord) => {
		// 		// See the UserRecord reference doc for the contents of userRecord.
		// 		console.log("Successfully created new user:", userRecord.uid);
		// 	})
		// 	.catch((error) => {
		// 		console.log("Error creating new user:", error);
		// 	});
		// try {
		// 	const res = await createUserWithEmailAndPassword(
		// 		auth,
		// 		newEmployee.email,
		// 		newEmployee.password
		// 	);
		// 	const newUserRef = doc(collection(db, "users", res.user.id));
		// 	newEmployee.id = res.user.id;
		// 	setDoc(newUserRef, newEmployee);
		// } catch (err) {
		// 	console.log(err);
		// }

		//add to state
		setEmployees([...employees, newEmployee]);

		//add to databse
		handleCloseForm();
	};
	return (
		<>
			<NavBar title="Empleados" />
			<div className="max-w-2xl m-auto">
				<Table>
					<THead>
						<Th title="Empleado" />
						<Th title="Sector" center />
					</THead>
					<tbody>
						{employees.length !== 0 &&
							employees?.map((employee) => (
								<Tr
									tableData={[employee.name, employee.sector]}
									onClick={() => setShowForm(true)}
								/>
							))}
					</tbody>
				</Table>
				{showForm && (
					<EmployeesForm
						handleCloseForm={handleCloseForm}
						handleSubmit={createEmployee}
					/>
				)}
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
