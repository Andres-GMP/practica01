import React from "react";
import Layout from "../components/MenuNavigation/Layout";
import ButtonBack from "../components/MenuNavigation/ButtonBack";
import { Icon } from "@iconify/react";

const Home = () => {
	return (
		<>
			<Layout>
				<ButtonBack
					pathImg={<Icon icon="ant-design:home-filled" width={50} />}
					text="Sectores"
					pathSource="sectores"
				/>

				<ButtonBack
					pathImg={<Icon icon="bi:pin-angle-fill" width={50} />}
					text="Tareas"
					pathSource="tareas"
				/>

				<ButtonBack
					pathImg={<Icon icon="bxs:user" width={50} />}
					text="Empleado"
					pathSource="empleados"
				></ButtonBack>
			</Layout>
		</>
	);
};

export default Home;
