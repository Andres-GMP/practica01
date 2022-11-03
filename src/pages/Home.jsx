import React from "react";
import Layout from "../components/MenuNavigation/Layout";
import ButtonBack from "../components/MenuNavigation/ButtonBack";
import { Icon } from "@iconify/react";

const Home = () => {
  return (
    <>
      <Layout>
        <ButtonBack
          pathImg={
            <Icon icon="ant-design:home-filled" className="w-full h-full" />
          }
          text="Inicio"
          pathSource="admin"
        />

        <ButtonBack
          pathImg={<Icon icon="bi:pin-angle-fill" className="w-full h-full" />}
          text="Tareas"
          pathSource="admin/tareas"
        />

        <ButtonBack
          pathImg={<Icon icon="bxs:user" className="w-full h-full" />}
          text="Empleado"
          pathSource="admin/empleados"
        ></ButtonBack>
      </Layout>
    </>
  );
};

export default Home;
