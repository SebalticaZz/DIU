import "./App.css";
import "./components/Filtros.tsx";
import Filtros from "./components/Filtros.tsx";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-[#005E90] px-6 flex justify-between items-center">
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

      <div className="w-full relative">
        <img
          src="https://usm.cl/wp-content/uploads/2021/04/banner-eventos.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-55 w-full h-full"></div>

        <div className="w-full h-full absolute left-0 top-0 px-10 py-5">
          <div className="w-full h-full flex flex-col justify-between">
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
      <div className="w-full flex">
        <div className="w-1/6 bg-gray-300">
          <Filtros />
        </div>
        <div className="w-5/6 px-8 py-6 flex flex-col gap-6">
          <div className="flex flex-col items-center w-full gap-6">
            <div className="w-full flex">
              <h2 className="border-l-4 border-[#E5B300] font-sans text-2xl font-semibold pl-2">
                Septiembre
              </h2>
            </div>
            <div className="w-full px-8">
              <div className="w-full h-52 border-gray-400 border-2 border-opacity-30 flex">
                <div className="w-1/5 flex flex-col h-full">
                  <div className="border-b-2 border-gray-400 border-opacity-30 py-3 text-gray-500 text-lg font-bold">
                    <p>Viernes</p>
                  </div>
                  <div className="h-full w-full flex justify-center">
                    <p className="text-7xl self-center">17</p>
                  </div>
                </div>
                <div className="w-1/5 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="/evento_costumbrista.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 h-full py-3 px-5 flex flex-col gap-5">
                  <div className="w-full">
                    <h3 className="text-left font-mont text-xl font-semibold">
                      Muestra costumbrista 2024
                    </h3>
                  </div>
                  <div className="flex items-center p-2 gap-2">
                    <button className="bg-[#005E90] py-[2px] px-[18px] rounded-md text-white font-medium">
                      Presencial
                    </button>
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
          </div>

          <div className="flex flex-col items-center w-full gap-6">
            <div className="w-full flex">
              <h2 className="border-l-4 border-[#E5B300] font-sans text-2xl font-semibold pl-2">
                Octubre
              </h2>
            </div>
            <div className="w-full px-8">
              <div className="w-full h-52 border-gray-400 border-2 border-opacity-30 flex">
                <div className="w-1/5 flex flex-col h-full">
                  <div className="border-b-2 border-gray-400 border-opacity-30 py-3 text-gray-500 text-lg font-bold">
                    <p>Martes</p>
                  </div>
                  <div className="h-full w-full flex justify-center">
                    <p className="text-7xl self-center">1</p>
                  </div>
                </div>
                <div className="w-1/5 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="/evento_ferialab.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 h-full py-3 px-5 flex flex-col gap-5">
                  <div className="w-full">
                    <h3 className="text-left font-mont text-xl font-semibold">
                      Ferias laborales 2024
                    </h3>
                  </div>
                  <div className="flex items-center p-2 gap-2">
                    <button className="bg-[#005E90] py-[2px] px-[18px] rounded-md text-white font-medium">
                      Online
                    </button>
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
            <div className="w-full px-8">
              <div className="w-full h-52 border-gray-400 border-2 border-opacity-30 flex">
                <div className="w-1/5 flex flex-col h-full">
                  <div className="border-b-2 border-gray-400 border-opacity-30 py-3 text-gray-500 text-lg font-bold">
                    <p>Viernes</p>
                  </div>
                  <div className="h-full w-full flex justify-center">
                    <p className="text-7xl self-center">11</p>
                  </div>
                </div>
                <div className="w-1/5 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="/evento_encuentroalumno.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 h-full py-3 px-5 flex flex-col gap-5">
                  <div className="w-full">
                    <h3 className="text-left font-mont text-xl font-semibold">
                      Encuentro Alumni USM
                    </h3>
                  </div>
                  <div className="flex items-center p-2 gap-2">
                    <button className="bg-emerald-600 py-[2px] px-[18px] rounded-md text-white font-medium">
                      Sede Viña
                    </button>
                    <button className="bg-[#005E90] py-[2px] px-[18px] rounded-md text-white font-medium">
                      Presencial
                    </button>
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
          </div>

          <div className="py-2 px-8 flex justify-end">
            <button className="bg-sky-500 px-6 py-2 text-white font-bold font-mont self-center rounded-sm self-end">
              Ver más eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
