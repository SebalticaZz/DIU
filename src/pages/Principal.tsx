import { useState } from "react";
import Filtros from "../components/Filtros";
import { useNavigate } from "react-router-dom";
import EventoType from "../type/Evento";

type EventosPorMes = {
  [mes: string]: EventoType[];
};

const colores = {
  colorCampus: "#00815C",
  colorModalidad: "#005E90",
};

const formatearCampus = (campusList: string[]) => {
  if (campusList.length === 1) return campusList[0];
  const campusListCopy = [...campusList];
  const ultimaSede = campusListCopy.pop();
  return `${campusListCopy.join(", ")} y ${ultimaSede}`;
};

const eventosPorMes: EventosPorMes = {
  Septiembre: [
    {
      dia: 17,
      diaSemana: "Viernes",
      titulo: "Muestra costumbrista 2024",
      modalidad: "Presencial",
      campus: ["San Joaquín"],
      tematica: "Cultura, Arte y Recreación",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/evento_costumbrista.png",
      //
      fechaInicio: "17/09/2024",
      fechaTermino: "17/09/2024",
      horaInicio: "10:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Patio Central",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su campus San Joaquín, invita a toda la comunidad a participar en la "Muestra costumbrista 2024", un evento que celebra nuestras tradiciones y cultura chilena en el marco de las Fiestas Patrias.',
      descripcion2:
        "Esta actividad se llevará a cabo el viernes 17 de septiembre, a partir de las 10:00 horas, en el Campus San Joaquín, donde podrán disfrutar de una variedad de actividades tradicionales, música en vivo y gastronomía típica chilena.",
    },
    {
      dia: 29,
      diaSemana: "Martes",
      titulo: "Módulo interactivo «Naturaleza a tu pinta»",
      modalidad: "Presencial",
      campus: ["Vitacura"],
      tematica: "Vinculación con el Medio",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/naturaleza.png",
      //
      fechaInicio: "29/09/2024",
      fechaTermino: "29/09/2024",
      horaInicio: "12:00pm",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Patio Central",
      descripcion1:
        'La Universidad Técnica Federico Santa María, en colaboración con su campus Vitacura, invita a participar en el módulo interactivo "Naturaleza a tu pinta". Este evento está diseñado para fomentar el vínculo con el medio ambiente a través de actividades prácticas y educativas.',
      descripcion2:
        "Esta actividad se realizará el martes 29 de septiembre, de manera presencial en el campus Vitacura. Está abierta a todo público y ofrecerá una experiencia única para conocer y explorar la naturaleza de forma entretenida e interactiva.",
    },
  ],
  Octubre: [
    {
      dia: 1,
      diaSemana: "Martes",
      titulo: "Ferias laborales 2024",
      modalidad: "Online",
      campus: ["Plataforma Online"],
      tematica: "Vinculación con el Medio",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/evento_ferialab.png",
      //
      fechaInicio: "01/10/2024",
      fechaTermino: "01/10/2024",
      horaInicio: "09:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Plataforma Online",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su Dirección de Relaciones Estudiantiles, invita a toda la comunidad a participar en las "Ferias laborales 2024", un evento que busca conectar a estudiantes y egresados con empresas líderes en el mercado.',
      descripcion2:
        "Esta actividad se llevará a cabo el martes 1 de octubre, a partir de las 09:00 horas, en la Plataforma Online de la USM, donde podrán disfrutar de charlas, talleres y ofertas laborales exclusivas para la comunidad universitaria.",
    },
    {
      dia: 11,
      diaSemana: "Viernes",
      titulo: "Encuentro Alumni USM",
      modalidad: "Presencial",
      campus: ["Viña del Mar"],
      tematica: "Vinculación con el Medio",
      tematicaColor: "#005E90",
      publico: "Ex-Alumnos",
      publicoColor: "#005E90",
      imagen: "/evento_encuentroalumno.png",
      //
      fechaInicio: "11/10/2024",
      fechaTermino: "11/10/2024",
      horaInicio: "10:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Viña del Mar",
      descripcion1:
        'La Universidad Técnica Federico Santa María, invita a todos los ex-alumnos a participar en el "Encuentro Alumni USM", un evento que busca reunir a la comunidad de egresados de la universidad.',
      descripcion2:
        "Esta actividad se llevará a cabo el viernes 11 de octubre, a partir de las 10:00 horas, en el campus Viña del Mar, donde podrán disfrutar de charlas, talleres y actividades recreativas exclusivas para los ex-alumnos de la USM.",
    },
    {
      dia: 24,
      diaSemana: "Jueves",
      titulo: "Charla WSP «Conoce la empresa, sus oportunidades y más»",
      modalidad: "Presencial",
      campus: ["San Joaquín"],
      tematica: "Innovación",
      tematicaColor: "#005E90",
      publico: "Estudiantes",
      publicoColor: "#005E90",
      imagen: "/inovacion.png",
      //
      fechaInicio: "24/10/2024",
      fechaTermino: "24/10/2024",
      horaInicio: "15:00pm",
      horaTermino: "17:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Auditorio Campus San Joaquín",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su Dirección de Relaciones Estudiantiles, invita a todos los estudiantes a participar en la charla "Conoce la empresa, sus oportunidades y más", organizada por la empresa WSP.',
      descripcion2:
        "Esta actividad se llevará a cabo el jueves 24 de octubre, a partir de las 15:00 horas, en el Auditorio del Campus San Joaquín, donde podrán conocer más sobre la empresa, sus proyectos y oportunidades laborales.",
    },
  ],
  Noviembre: [
    {
      dia: 12,
      diaSemana: "Martes",
      titulo: "Concurso «Mi tesis en 180 segundos»",
      modalidad: "Presencial",
      campus: ["San Joaquín"],
      tematica: "Investigación",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/tesis180.png",
      //
      fechaInicio: "12/11/2024",
      fechaTermino: "12/11/2024",
      horaInicio: "09:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Auditorio Campus San Joaquín",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su Dirección de Relaciones Estudiantiles, invita a toda la comunidad a participar en el concurso "Mi tesis en 180 segundos", un evento que busca difundir la investigación y proyectos de tesis de los estudiantes.',
      descripcion2:
        "Esta actividad se llevará a cabo el martes 12 de noviembre, a partir de las 09:00 horas, en el Auditorio del Campus San Joaquín, donde podrán conocer más sobre los proyectos de tesis de los estudiantes de la USM.",
    },
    {
      dia: 15,
      diaSemana: "Viernes",
      titulo: "32ª Feria de Software USM",
      modalidad: "Presencial",
      campus: ["San Joaquín", "Viña del Mar", "Casa Central Valparaíso"],
      tematica: "Docencia",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/feria_software.png",
      //
      fechaInicio: "15/11/2024",
      fechaTermino: "15/11/2024",
      horaInicio: "09:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Patio Central",
      descripcion1:
        "La Universidad Técnica Federico Santa María, a través de su Dirección de Relaciones Estudiantiles, invita a toda la comunidad a participar en la 32ª Feria de Software USM, un evento que busca difundir los proyectos y desarrollos de los estudiantes de la universidad.",
      descripcion2:
        "Esta actividad se llevará a cabo el viernes 15 de noviembre, a partir de las 09:00 horas, en el Patio Central de la USM, donde podrán disfrutar de una variedad de proyectos de software y tecnología desarrollados por los estudiantes.",
    },
    {
      dia: 17,
      diaSemana: "Domingo",
      titulo: "Daniel Muñoz y Los Marujos se presentan en la Gala Folclórica USM",
      modalidad: "Presencial",
      campus: ["Casa Central Valparaíso"],
      tematica: "Cultura, Arte y Recreación",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/daniel_munos.png",
      //
      fechaInicio: "17/11/2024",
      fechaTermino: "17/11/2024",
      horaInicio: "19:00pm",
      horaTermino: "20:30pm",
      consultas: "cultura@usm.cl",
      lugar: "Teatro Aula Magna Campus",
      descripcion1: "La Universidad Técnica Federico Santa María, a través de su Dirección de Cultura, invita a toda la comunidad a participar en el evento de los Marujos que se presentan en la Gala Folcrórica USM, un evento que busca difundir y promover la música y danza folclórica chilena.",
      descripcion2: "Esta actividad se llevará a cabo el domingo 17 de noviembre, a partir de las 19:00 horas, en el Teatro Aula Magna del Campus San Joaquín, donde podrán disfrutar de un espectáculo de música y danza folclórica a cargo de Daniel Muñoz y Los Marujos.",
    },
    {
      dia: 23,
      diaSemana: "Sábado",
      titulo: "Encuentro Alumni 2024 Departamento de Informática",
      modalidad: "Presencial",
      campus: ["Casa Central Valparaíso"],
      tematica: "Vinculación con el Medio",
      tematicaColor: "#005E90",
      publico: "Ex-Alumnos",
      publicoColor: "#005E90",
      imagen: "/alumni_informatica.png",
      //
      fechaInicio: "23/11/2024",
      fechaTermino: "23/11/2024",
      horaInicio: "10:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Casa Central Valparaíso",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su Departamento de Informática, invita a todos los ex-alumnos a participar en el "Encuentro Alumni 2024", un evento que busca reunir a la comunidad de egresados de la carrera de Informática.',
      descripcion2:
        "Esta actividad se llevará a cabo el sábado 23 de noviembre, a partir de las 10:00 horas, en la Casa Central Valparaíso, donde podrán disfrutar de charlas, talleres y actividades recreativas exclusivas para los ex-alumnos de la carrera de Informática.",
    },
  ],
  Diciembre: [
    {
      dia: 16,
      diaSemana: "Lunes",
      titulo: "Día de la astronomía en la USM",
      modalidad: "Presencial",
      campus: ["Casa Central Valparaíso"],
      tematica: "Docencia",
      tematicaColor: "#005E90",
      publico: "Abierto a todo público",
      publicoColor: "#005E90",
      imagen: "/charla_astronomia.png",
      //
      fechaInicio: "16/12/2024",
      fechaTermino: "16/12/2024",
      horaInicio: "10:00am",
      horaTermino: "18:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Casa Central Valparaíso",
      descripcion1:
        'La Universidad Técnica Federico Santa María, invita a toda la comunidad a participar en el "Día de la astronomía en la USM", un evento que busca difundir la astronomía y la ciencia espacial.',
      descripcion2:
        "Esta actividad se llevará a cabo el lunes 16 de diciembre, a partir de las 10:00 horas, en la Casa Central Valparaíso, donde podrán disfrutar de charlas, talleres y actividades recreativas relacionadas con la astronomía.",
    },
    {
      dia: 19,
      diaSemana: "Miércoles",
      titulo: 'Charla "The mathematical language of Galileo Galilei"',
      modalidad: "Presencial",
      campus: ["San Joaquín"],
      tematica: "Investigación",
      tematicaColor: "#005E90",
      publico: "Comunidad Universitaria",
      publicoColor: "#005E90",
      imagen: "/charla_matematica.png",
      //
      fechaInicio: "19/12/2024",
      fechaTermino: "19/12/2024",
      horaInicio: "15:00pm",
      horaTermino: "17:00pm",
      consultas: "relacionesestudiantiles@usm.cl",
      lugar: "Auditorio Campus San Joaquín",
      descripcion1:
        'La Universidad Técnica Federico Santa María, a través de su Dirección de Relaciones Estudiantiles, invita a toda la comunidad universitaria a participar en la charla "The mathematical language of Galileo Galilei", organizada por el Departamento de Matemáticas.',
      descripcion2:
        "Esta actividad se llevará a cabo el miércoles 19 de diciembre, a partir de las 15:00 horas, en el Auditorio del Campus San Joaquín, donde podrán conocer más sobre la vida y obra de Galileo Galilei y su aporte a las matemáticas.",
    },
  ],
};

const Principal = () => {
  // Estados para los filtros
  const [mes, setMes] = useState<string>("");
  const [modalidad, setModalidad] = useState<string>("");
  const [campus, setCampus] = useState<string>("");
  const [tematica, setTematica] = useState<string>("");
  const [publico, setPublico] = useState<string>("");

  const navigate = useNavigate();

  const handleVerDetalles = (evento: EventoType) => {
    navigate("/evento", { state: evento });
  };

  const filtrarEventos = () => {
    const mesesFiltrados: EventosPorMes = {};

    Object.keys(eventosPorMes).forEach((mesKey) => {
      const eventosFiltrados = eventosPorMes[mesKey].filter((evento) => {
        return (
          (mes ? mesKey === mes : true) &&
          (modalidad ? evento.modalidad === modalidad : true) &&
          (campus === "Varios"
            ? evento.campus.length > 1
            : campus
            ? evento.campus.includes(campus)
            : true) &&
          (tematica ? evento.tematica === tematica : true) &&
          (publico ? evento.publico === publico : true)
        );
      });

      if (eventosFiltrados.length > 0) {
        mesesFiltrados[mesKey] = eventosFiltrados;
      }
    });

    return mesesFiltrados;
  };

  // Filtrar eventos según los filtros seleccionados
  const eventosFiltrados = filtrarEventos();

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    setMes("");
    setModalidad("");
    setCampus("");
    setTematica("");
    setPublico("");
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
      <div className="w-full max-h-[320px] overflow-hidden relative">
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
        <div className="w-1/6 bg-gray-300 p-4 flex flex-col gap-6 sticky top-0 h-screen">
          {/* Componentes de filtros */}
          <Filtros
            mes={mes}
            setMes={setMes}
            modalidad={modalidad}
            setModalidad={setModalidad}
            campus={campus}
            setCampus={setCampus}
            tematica={tematica}
            setTematica={setTematica}
            publico={publico}
            setPublico={setPublico}
          />

          <button
            onClick={limpiarFiltros}
            className="bg-red-500 text-white px-4 py-2 rounded w-3/4 mx-auto"
          >
            Limpiar filtros
          </button>
        </div>

        {/* Contenedor de eventos filtrados */}
        <div className="w-4/5 px-8 py-6 flex flex-col gap-6">
        {(mes || modalidad || campus || tematica || publico) && (
          <div className="flex items-center gap-2 mb-4 text-xl">
            <span className="text-gray-700 font-semibold">Filtros:</span>
            {mes && <span className="bg-sky-500 text-white py-1 px-3 rounded-md">{mes}</span>}
            {modalidad && <span className="bg-sky-500 text-white py-1 px-3 rounded-md">{modalidad}</span>}
            {campus && <span className="bg-sky-500 text-white py-1 px-3 rounded-md">{campus}</span>}
            {tematica && <span className="bg-sky-500 text-white py-1 px-3 rounded-md">{tematica}</span>}
            {publico && <span className="bg-sky-500 text-white py-1 px-3 rounded-md">{publico}</span>}
          </div>
        )}
        {Object.keys(eventosFiltrados).length > 0 ? (
          Object.keys(eventosFiltrados).map((mesKey) => (
            <div
              key={mesKey}
              className="flex flex-col items-center w-full gap-6"
            >
              {/* Título del mes */}
              <div className="w-full flex">
                <h2 className="border-l-4 border-[#E5B300] font-sans text-3xl font-semibold pl-3">
                  {mesKey}
                </h2>
              </div>

              {/* Lista de eventos del mes */}
              {eventosFiltrados[mesKey].map((evento, index) => (
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
                        {Array.isArray(evento.campus) &&
                          !evento.campus.includes("Plataforma Online") && (
                            <button
                              className="py-[2px] px-[18px] rounded-md text-white font-medium"
                              style={{ backgroundColor: colores.colorCampus }}
                            >
                              {formatearCampus(evento.campus)}
                            </button>
                          )}
                        {evento.campus && (
                          <button
                            className="py-[2px] px-[18px] rounded-md text-white font-medium"
                            style={{ backgroundColor: colores.colorModalidad }}
                          >
                            {evento.modalidad}
                          </button>
                        )}
                      </div>
                      <div className="w-full h-full flex justify-end items-end">
                        <div className="py-4">
                          <button
                            onClick={() => handleVerDetalles(evento)}
                            className="bg-[#E5B300] px-6 py-2 text-white font-bold font-mont rounded-sm"
                          >
                            Ver detalles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 font-mont text-xl mt-10">
            No hay eventos para los filtros seleccionados.
          </div>
        )}
        </div>
      </div>
      <div className="w-full">
        <img src="footer.png" alt="" />
      </div>
    </div>
  );
};

export default Principal;
