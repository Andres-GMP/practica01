import React from "react";
import { useState } from "react";

const SectorBox = ({ sector, numTrabajadores, numTareas }) => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className=" bg-white flex flex-col p-5 mx-auto my-20 rounded-lg justify-center items-center shadow-xl drop-shadow-2xl">
            <h1 className="text-4xl tracking-wider text-center text-cyan-700 font-bold">{sector}</h1>
            <label className="text-cyan-500 font-semibold tracking-wider mt-5">Número de trabajadores: <label className="text-black">{numTrabajadores}</label></label>
            <label className="text-cyan-500 font-semibold tracking-wider mt-5">Número de tareas: <label className="text-black">{numTareas}</label></label>
            <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-100 focus:border focus:p-2 self-end mt-5 border"
                onClick={() => setNavbar(!navbar)}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={` absolute left-5 top-[78%] ${navbar ? "block" : "hidden"}`}>
                <label className="mx-1 hover:cursor-pointer border" onClick={(e) => { e.preventDefault(); window.location.href = "http://localhost:3000/home"; }}>Agregar</label>
                <label className="mx-1 hover:cursor-pointer border" onClick={(e) => { e.preventDefault(); window.location.href = "http://localhost:3000/home"; }}>Editar</label>
                <label className="mx-1 hover:cursor-pointer border" onClick={(e) => { e.preventDefault(); window.location.href = "http://localhost:3000/home"; }}>Borrar</label>
            </div>
        </div>
    );
}

export default SectorBox;