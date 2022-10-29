import React from "react";
import Layout from "../components/MenuNavigation/Layout";
import ButtonBack from "../components/MenuNavigation/ButtonBack"
import { Icon } from '@iconify/react';

const Home = () => {
	return <>
		<Layout>
			<ButtonBack pathImg={
				<Icon icon="ant-design:home-filled" />
			} text="Inicio" pathSource="/admin">
			</ButtonBack>
			
			<ButtonBack pathImg={
				<Icon icon="bi:pin-angle-fill" />
			} text="Tareas" pathSource="/admin/tareas">
			</ButtonBack>

			<ButtonBack pathImg={
				<Icon icon="bxs:user" />
			} text="Empleado" pathSource="/admin/empleados">
			</ButtonBack>
		</Layout>
	</>

};

export default Home;
