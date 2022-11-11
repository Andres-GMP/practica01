import FormInput from "./../components/login/FormInput";
import { useState } from "react";
import Layout from "./../components/login/Layout";
import Hr from "./../components/login/Hr";
import Error from "../components/login/Error";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { currentUser } = useContext(AuthContext);
	//handleChance para detectar cuando el input esta vacio (Ni idea de como hacerlo)
	const [error, setError] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (currentUser.id) return;
		const formData = new FormData(e.target);
		const { email, password } = Object.fromEntries(formData.entries());
		try {
			setError(false);
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			setError(true);
		}
	};
	// Validacion de acceso a cuentas Logueadas
	useEffect(() => {
		if (!currentUser.uid) return;
		if (!location.state || currentUser.admin !== location.state.admin) {
			navigate(currentUser.admin ? "/admin" : "/tareas");
			return;
		}
		navigate(location.state.from);
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

					{error && <Error message="Datos no validos" />}

					<button className="bg-[#019054] text-white text-xl rounded-lg py-2 px-12 font-bold w-fit self-center shadow-lg shadow-black/20">
						ENTRAR
					</button>
				</form>
				<Hr />
				<a
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
