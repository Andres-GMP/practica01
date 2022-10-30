import FormInput from "./../components/login/FormInput";
import Layout from "./../components/login/Layout";
import Hr from "./../components/login/Hr";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const { email, password } = Object.fromEntries(formData.entries());
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const nextPage = async () => {
			const docRef = doc(db, "users", currentUser.uid);
			const docSnap = await getDoc(docRef);
			navigate(docSnap.data().admin ? "/admin/tareas" : "/tareas");
		};

		currentUser && nextPage();
	}, [currentUser]);

	return (
		<>
			<Layout>
				<h1 className="text-4xl tracking-wider text-center text-white font-bold">
					EMPRESA
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col w-full h-3/5 justify-evenly"
				>
					<FormInput
						name="email"
						title="INGRESE SU CORREO"
						placeholder="Correo"
						type="email"
					/>
					<FormInput
						name="password"
						title="CONTRASEÑA"
						placeholder="***************"
						type="password"
					/>
					<button className="bg-[#019054] text-white text-xl rounded-lg py-2 px-12 font-bold w-fit self-center shadow-lg shadow-black/20">
						ENTRAR
					</button>
				</form>
				<Hr />
				<a
					onClick={async (e) => {
						e.preventDefault();
						console.log(currentUser);
						let x = [
							{
								id: uuidv4(),
								description: "Irrigar surcos.",

								status: "Terminada",
							},
							{
								id: uuidv4(),
								description: "Deshierbar",

								status: "Pendiente",
							},
							{
								id: uuidv4(),
								description: "Limpiar surcos",

								status: "Pendiente",
							},
							{
								id: uuidv4(),
								description: "Piscar los olivos",

								status: "Progreso",
							},
							{
								id: uuidv4(),
								description: "Piscar el maiz",

								status: "Pendiente",
							},
							{
								id: uuidv4(),
								description: "Piscar fresas",

								status: "Pendiente",
							},
						];

						await setDoc(doc(db, "sectors", "AB"), {
							tasks: x,
						});
					}}
					href=""
					className="self-center mt-2 text-white/70 font-semibold tracking-wider"
				>
					¿Olvidaste tu contraseña?
				</a>
			</Layout>
		</>
	);
};

export default Login;
