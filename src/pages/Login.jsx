import FormInput from "./../components/login/FormInput";
import Layout from "./../components/login/Layout";
import Hr from "./../components/login/Hr";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

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
						name="id"
						title="INGRESE SUS DATOS"
						placeholder="NUMERO"
						type="text"
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
