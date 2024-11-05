import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock } from '@fortawesome/free-regular-svg-icons';
import { faDoorOpen, faPersonBooth, faMapPin, faBook,faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Evento = () => {
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
                    src="/evento_hidrogeno.jpg"
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
                            <h1 style={{ color: "white", textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)" }} className="max-w-[65vw] border-l-4 border-yellow-500 pl-[30px] text-white font-mont font-bold text-[36px] self-center">
                                Seminario «Una mirada al hidrógeno y el amoníaco como vectores energéticos en Chile»
                            </h1>
                            <img className="absolute w-72 top-8 right-12 rounded-xl shadow-sm shadow-black" src="/evento_hidrogeno_completa.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-[60vh] flex">

                <div className="w-4/6 h-full flex flex-col gap-8">
                    <ul className="w-full flex gap-1 py-[25px] pl-[45px] font-mont text-[14px]">
                        <li className="text-[#005E90] border-l-4 border-[#005E90] pl-2">Inicio</li>
                        <li>»</li>
                        <li className="text-[#005E90]">Eventos</li>
                        <li>»</li>
                        <li className="text-stone-700 font-bold">Seminario “Una mirada al hidrógeno y el amoníaco como vectores energéticos en Chile”</li>
                    </ul>
                    <div className="w-full h-full pl-[60px] flex flex-col font-mont text-[14px] text-[#3B424C] gap-4">

                        <p>La Universidad Técnica Federico Santa María, a través de su Departamento de Ingeniería Mecánica, les invita cordialmente a participar del seminario "Una mirada al hidrógeno y el amoníaco como vectores energéticos en Chile".</p>
                        <p>Esta actividad se realizará el martes 5 noviembre, a las 10:30 horas, en el Salón de Actos del Edificio T del Campus Casa Central Valparaíso.</p>

                    </div>
                </div>
                <div className="w-2/6 flex items-end">
                
                    <div className="flex flex-col w-full pl-12 gap-6 mt-72">
                        <div className="w-full ">
                            <h2 className="font-mont font-bold text-2xl text-stone-700 border-l-4 border-[#E5B300] pl-4">Detalles del Evento</h2>
                        </div>
                        <div className="w-full">
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faCalendarCheck} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Fecha:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>05/11/2024</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faCalendarCheck} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Fecha termino:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>05/11/2024</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faClock} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Hora de inicio:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>10:30</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faClock} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Hora de término:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>12:30</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faDoorOpen} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Público:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>Profesores</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faPersonBooth} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Modalidad:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>Mixta</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faMapPin} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Ubicación:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>Campus Casa Central Valparaíso</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faMapMarkerAlt} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Lugar:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>Salon de actos T</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faBook} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Temática:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'>Investigación</div>
                                </div>
                            </div>
                            <div className="flex w-[80%] px-2 py-4 items-center border-b-[1px] border-gray-400 border-opacity-25">
                                <div className="flex items-center"><FontAwesomeIcon className='text-[#E5B300] text-xl my-auto' icon={faEnvelope} aria-hidden="true" /></div>
                                <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className='text-[#005E90] font-bold text-[15px] font-mont my-auto'>Consultas a:</div>
                                    <div className='text-[#3B424C] text-[15px] font-mont font-medium my-auto'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Evento


