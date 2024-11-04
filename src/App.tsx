import "./App.css";
import "./components/Filtros.tsx";
import Filtros from "./components/Filtros.tsx";

type Evento = {
  dia: number;
  diaSemana: string;
  titulo: string;
  modalidad: string;
  modalidadColor: string;
  imagen: string;
  subModalidad?: string;
  subModalidadColor?: string;
};

type EventosPorMes = {
  [mes: string]: Evento[];
};

const eventosPorMes: EventosPorMes = {
  Septiembre: [
    {
      dia: 17,
      diaSemana: "Viernes",
      titulo: "Muestra costumbrista 2024",
      modalidad: "Presencial",
      modalidadColor: "#005E90",
      imagen: "/evento_costumbrista.png",
    },
  ],
  Octubre: [
    {
      dia: 1,
      diaSemana: "Martes",
      titulo: "Ferias laborales 2024",
      modalidad: "Online",
      modalidadColor: "#005E90",
      imagen: "/evento_ferialab.png",
    },
    {
      dia: 11,
      diaSemana: "Viernes",
      titulo: "Encuentro Alumni USM",
      modalidad: "Sede Viña",
      modalidadColor: "bg-emerald-600",
      subModalidad: "Presencial",
      subModalidadColor: "#005E90",
      imagen: "/evento_encuentroalumno.png",
    },
  ],
  Noviembre: [
    {
      dia: 12,
      diaSemana: "Martes",
      titulo: "Concurso «Mi tesis en 180 segundos»",
      modalidad: "Presencial",
      modalidadColor: "#005E90",
      imagen: "/tesis180.png",
      // tematica: investigacion
      // publico: abierto
      // campus san joaquin
    },
    {
      dia: 15,
      diaSemana: "Viernes",
      titulo: "32ª Feria de Software USM",
      modalidad: "Presencial",
      modalidadColor: "#005E90",
      imagen: "/feria_software.png",
      // tematica: docencia
      // publico: abierto
      // 3 campus, san joaquin, viña y concepcion
    },
    {
      dia: 23,
      diaSemana: "Sábado",
      titulo: "Encuentro Alumni 2024 Departamento de Informática",
      modalidad: "Presencial",
      modalidadColor: "#005E90",
      imagen: "/alumni_informatica.png",
      // tematica: vinculación con el medio
      // publico: ex-alumnos
      // Campus Casa Central Valparaíso
    }
  ]
};

function App() {
  return (
    <div className="w-full h-full">
      {/* Barra superior de navegación */}
      <div className="w-full bg-[#005E90] px-6 flex justify-between items-center">
        {/* Opciones de accesibilidad y cambio de idioma */}
        <div>
          <ul className="flex items-center gap-5 font-bold text-[11px] font-mont">
            <li className=" text-white text-opacity-65 cursor-pointer flex items-center">
              Accesibilidad
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-white text-opacity-65 cursor-pointer">EN</li>
            <li className="text-white cursor-pointer">ES</li>
          </ul>
        </div>

        {/* Menú principal con botones de "Sitios de interés", "Información para", y otros */}
        <div>
          <ul className="flex items-center font-bold text-[11px] font-mont">
            <li className="flex items-center text-white text-opacity-65 p-[10px] hover:text-opacity-100 cursor-pointer transition duration-200">
              Sitios de interés
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-white text-opacity-65 p-[10px] hover:text-opacity-100 cursor-pointer transition duration-200">
              Información para
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center text-white text-opacity-65 p-[10px] hover:text-opacity-100 cursor-pointer transition duration-200">
              Servicios
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            {/*Botones de la barra de navegación */}
            <li className="p-[10px]">
              {" "}
              <button className="bg-[#19B5F7] py-[2px] px-[8px] text-white rounded-[4px] border-none">
                USM TV
              </button>
            </li>
            <li className="p-[10px]">
              {" "}
              <button className="bg-[#E5B300] py-[2px] px-[8px] text-white rounded-[4px] border-none">
                Postula aquí
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Encabezado principal con imagen de fondo */}
      <div className="w-full relative">
        <img
          src="https://usm.cl/wp-content/uploads/2021/04/banner-eventos.jpg"
          alt=""
        />
        {/* Overlay para oscurecer la imagen de fondo */}
        <div className="absolute top-0 left-0 bg-black bg-opacity-55 w-full h-full"></div>

        {/* Contenido sobre la imagen de fondo (título y botón) */}
        <div className="w-full h-full absolute left-0 top-0 px-10 py-5">
          <div className="w-full h-full flex flex-col justify-between">
            {/* Logo de la universidad y menú secundario */}
            <div className="w-full flex justify-between items-center">
              <img className="w-64" src="logo-usm.svg" alt="" />
              <ul className="flex gap-4 font-mont text-white text-[14px] font-semibold">
                <li className="flex items-center pr-2">Inicio</li>
                <li className="cursor-pointer flex items-center">
                  Universidad
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="cursor-pointer flex items-center">
                  Admisión
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="cursor-pointer flex items-center">
                  Investigación
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="cursor-pointer flex items-center">
                  Extensión y Cultura
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 2a8 8 0 105.29 14.71l4 4a1 1 0 001.42-1.42l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                  </svg>
                </li>
              </ul>
            </div>

            {/* Título y botón de publicar evento */}
            <div className="flex justify-between align-middle">
              <h1 className="border-l-4 border-yellow-500 pl-[30px] text-white font-mont font-bold text-[32px] self-center text-center">
                Eventos
              </h1>
              <div className="flex">
                <button className="bg-[#E5B300] h-[36px] px-6 text-white font-bold font-mont self-center rounded-sm">
                  Publicar Evento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal dividido en filtros (izquierda) y eventos (derecha) */}
      <div className="w-full flex">
        {/* Columna izquierda: Filtros */}
        <div className="w-1/6 bg-gray-300">
          <Filtros />
        </div>
        {/* Columna derecha: Lista de eventos */}
        <div className="w-5/6 px-8 py-6 flex flex-col gap-6">
          {/* Eventos por mes */}
          {Object.keys(eventosPorMes).map((mes) => (
            <div key={mes} className="flex flex-col items-center w-full gap-6">
              {/* Título del mes */}
              <div className="w-full flex">
                <h2 className="border-l-4 border-[#E5B300] font-sans text-2xl font-semibold pl-2">
                  {mes}
                </h2>
              </div>

              {/* Eventos del mes */}
              {eventosPorMes[mes].map((evento, index) => (
                <div key={index} className="w-full px-8">
                  <div className="w-full h-52 border-gray-400 border-2 border-opacity-30 flex">
                    {/* Columna con la fecha */}
                    <div className="w-1/5 flex flex-col h-full">
                      <div className="border-b-2 border-gray-400 border-opacity-30 py-3 text-gray-500 text-lg font-bold">
                        <p>{evento.diaSemana}</p>
                      </div>
                      <div className="h-full w-full flex justify-center">
                        <p className="text-7xl self-center">{evento.dia}</p>
                      </div>
                    </div>

                    {/* Imagen del evento */}
                    <div className="w-1/5 h-full">
                      <img
                        className="w-full h-full object-cover"
                        src={evento.imagen}
                        alt={evento.titulo}
                      />
                    </div>

                    {/* Detalles del evento */}
                    <div className="w-3/5 h-full py-3 px-5 flex flex-col gap-5">
                      <div className="w-full">
                        <h3 className="text-left font-mont text-xl font-semibold">
                          {evento.titulo}
                        </h3>
                      </div>
                      <div className="flex items-center p-2 gap-2">
                        <button
                          className={`py-[2px] px-[18px] rounded-md text-white font-medium`}
                          style={{ backgroundColor: evento.modalidadColor }}
                        >
                          {evento.modalidad}
                        </button>
                        {/* Submodalidad en caso de que exista */}
                        {evento.subModalidad && (
                          <button
                            className="py-[2px] px-[18px] rounded-md text-white font-medium"
                            style={{
                              backgroundColor: evento.subModalidadColor,
                            }}
                          >
                            {evento.subModalidad}
                          </button>
                        )}
                      </div>
                      <div className="w-full h-full flex justify-end items-end">
                        <div className="py-4">
                          <button className="bg-[#E5B300] px-6 py-2 text-white font-bold font-mont self-center rounded-sm">
                            Ver detalles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Botón para ver más eventos */}
          <div className="py-2 px-8 flex justify-end">
            <button className="bg-sky-500 px-6 py-2 text-white font-bold font-mont rounded-sm self-end">
              Ver más eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
