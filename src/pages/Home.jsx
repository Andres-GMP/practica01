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
          text="Inicio"
          pathSource="admin"
        />

        <ButtonBack
          pathImg={<Icon icon="bi:pin-angle-fill" width={50} />}
          text="Tareas"
          pathSource="admin/tareas"
        />

        <ButtonBack
          pathImg={<Icon icon="bxs:user" width={50} />}
          text="Empleado"
          pathSource="admin/empleados"
        ></ButtonBack>
      </Layout>
    </>
  );
};

export default Home;
