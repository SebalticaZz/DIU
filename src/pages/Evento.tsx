import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faDoorOpen,
  faPersonBooth,
  faMapPin,
  faBook,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import EventoType from "../type/Evento";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const formatearCampus = (campusList: string[]) => {
  if (campusList.length === 1) return campusList[0];
  const campusListCopy = [...campusList];
  const ultimaSede = campusListCopy.pop();
  return `${campusListCopy.join(", ")} y ${ultimaSede}`;
};

const Evento = () => {
  const location = useLocation();
  const evento = location.state as EventoType;

  if (!evento) {
    return <div>No se encontró información del evento.</div>;
  }

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInscribirse = () => {
    setNombre("");
    setCorreo("");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      <div className="w-full relative overflow-hidden max-h-[450px]">
        <img
          src={evento.imagen}
          alt=""
          className="w-full h-full object-left-bottom"
        />
        {/* Overlay para oscurecer la imagen de fondo */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-700 via-gray-700/85 to-black"></div>

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
            <div className="flex justify-between align-middle relative">
              <h1
                style={{
                  color: "white",
                  textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)",
                }}
                className="max-w-[65vw] border-l-4 border-yellow-500 pl-[30px] text-white font-mont font-bold text-[36px] self-center"
              >
                {evento.titulo}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[60vh] flex">
        <div className="w-9/12 h-full flex flex-col gap-8">
          <ul className="w-full flex gap-1 py-[25px] pl-[45px] font-mont text-[14px]">
            <li className="text-[#005E90] border-l-4 border-[#005E90] pl-2">
              Inicio
            </li>
            <li>»</li>
            <li className="text-[#005E90]">
              <Link to="/" className="text-[#005E90]">
                Eventos
              </Link>
            </li>
            <li>»</li>
            <li className="text-stone-700 font-bold">{evento.titulo}</li>
          </ul>
          <div className="w-full h-full pl-[60px] flex flex-col font-mont text-[20px] text-[#3B424C] gap-4">
            <p className="text-start">{evento.descripcion1}</p>
            <p className="text-start">{evento.descripcion2}</p>
          </div>
          <div className="w-full flex justify-center mt-10 text-[20px]">
            <div className="w-1/2 p-6 rounded-lg ">
              <h3 className="font-mont font-semibold text-lg mb-4 flex text-[20px]">
                Inscríbete al evento para recibir un recordatorio:
              </h3>
              <p className="text-pink-600 text-sm mb-4 flex text-[20px]">
                (*) campos obligatorios
              </p>

              <div className="flex flex-col items-start mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre <span className="text-pink-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-[275px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                />
              </div>

              <div className="flex flex-col items-start mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="correo"
                >
                  Correo Electrónico <span className="text-pink-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-[275px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="correo"
                  type="email"
                  placeholder="Correo Electrónico"
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                />
              </div>

              <div className="flex justify-end space-x-4 mt-10 mr-20">
                <Link
                  to="/"
                  className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Volver
                </Link>
                <button
                  type="button"
                  onClick={handleInscribirse}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded inline-flex items-center"
                >
                  Inscribirse
                  <span className="ml-2">→</span>
                </button>
              </div>

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <h3 className="text-lg font-bold mb-4">
                      Te inscribiste correctamente!
                    </h3>
                    <button
                      onClick={handleCloseModal}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-3/12 flex items-end relative">
          <img
            className="absolute p- w-72 -top-12 left-12 rounded-xl shadow-sm shadow-black"
            src={evento.imagen}
            alt=""
          />
          <div className="flex flex-col w-[80%] pl-12 gap-6 mt-72">
            <div className="w-full">
              <h2 className="text-start font-mont font-bold text-2xl text-stone-700 border-l-4 border-[#E5B300] pl-4">
                Detalles del Evento
              </h2>
            </div>
            <div className="w-full text-start">
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faCalendarCheck}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Fecha inicio:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.fechaInicio}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faCalendarCheck}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Fecha termino:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.fechaTermino}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faClock}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Hora de inicio:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.horaInicio}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faClock}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Hora de término:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.horaTermino}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faDoorOpen}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Público:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.publico}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faPersonBooth}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Modalidad:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.modalidad}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faMapPin}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Ubicación:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    Campus {formatearCampus(evento.campus)}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faMapMarkerAlt}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Lugar:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.lugar}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faBook}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Temática:
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.tematica}
                  </div>
                </div>
              </div>
              <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-[#E5B300] text-xl my-auto"
                    icon={faEnvelope}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 pl-4">
                  <div className="text-[#005E90] font-bold text-[15px] font-mont my-auto">
                    Consultas:{" "}
                  </div>
                  <div className="text-[#3B424C] text-[15px] font-mont font-medium my-auto">
                    {evento.consultas}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img className="w-full" src="footer.png" alt="" />
      </div>
    </div>
  );
};

export default Evento;
