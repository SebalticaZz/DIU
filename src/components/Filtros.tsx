// Filtros.tsx
import React, { useState } from "react";

const Filtros: React.FC = () => {
  // Estados para cada filtro
  const [mes, setMes] = useState<string>("");
  const [modalidad, setModalidad] = useState<string>("");
  const [campus, setCampus] = useState<string>("");
  const [tematica, setTematica] = useState<string>("");
  const [publico, setPublico] = useState<string>("");

  // Función para limpiar todos los filtros
  const limpiarFiltros = () => {
    setMes("");
    setModalidad("");
    setCampus("");
    setTematica("");
    setPublico("");
  };

  return (
    <div className="w-full bg-gray-300 h-full p-6">
      <h2 className="flex items-center gap-2 font-bold text-lg mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 5a1 1 0 011-1h16a1 1 0 01.8 1.6l-5.6 7a1 1 0 01-.8.4H8.6a1 1 0 01-.8-.4l-5.6-7A1 1 0 013 5zm7 7h4a1 1 0 011 1v5a1 1 0 11-2 0v-4h-2v4a1 1 0 11-2 0v-5a1 1 0 011-1z" />
        </svg>
        Filtros
      </h2>
      <div className="flex flex-col gap-6">
        <select
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          className="p-2 border border-black rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Mes</option>
          <option>Enero</option>
          <option>Febrero</option>
          <option>Marzo</option>
          <option>Abril</option>
          <option>Mayo</option>
          <option>Junio</option>
          <option>Julio</option>
          <option>Agosto</option>
          <option>Septiembre</option>
          <option>Octubre</option>
          <option>Noviembre</option>
          <option>Diciembre</option>
        </select>
        <select
          value={modalidad}
          onChange={(e) => setModalidad(e.target.value)}
          className="p-2 border border-black rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Modalidad</option>
          <option>Presencial</option>
          <option>Online</option>
          <option>Mixta</option>
        </select>
        <select
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
          className="p-2 border border-black rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Campus</option>
          <option>Campus Casa Central Valparaíso</option>
          <option>San Joaquín</option>
          <option>Vitacura</option>
          <option>Viña del Mar</option>
          <option>Concepción</option>
          <option>Otro</option>
        </select>
        <select
          value={tematica}
          onChange={(e) => setTematica(e.target.value)}
          className="p-2 border border-black rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Temática</option>
          <option>Cultura, Arte y Recreación</option>
          <option>Vinculación con el Medio</option>
          <option>Investigación</option>
          <option>Docencia</option>
          <option>Innovación</option>
        </select>
        <select
          value={publico}
          onChange={(e) => setPublico(e.target.value)}
          className="p-2 border border-black rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Público</option>
          <option>Alumnos</option>
          <option>Funcionarios</option>
          <option>Abierto a todo público</option>
        </select>
      </div>
      <button
        onClick={limpiarFiltros}
        className="mt-6 px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default Filtros;
