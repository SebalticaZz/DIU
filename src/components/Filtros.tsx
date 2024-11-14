import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

type FiltrosProps = {
  mes: string;
  setMes: React.Dispatch<React.SetStateAction<string>>;
  modalidad: string;
  setModalidad: React.Dispatch<React.SetStateAction<string>>;
  campus: string;
  setCampus: React.Dispatch<React.SetStateAction<string>>;
  tematica: string;
  setTematica: React.Dispatch<React.SetStateAction<string>>;
  publico: string;
  setPublico: React.Dispatch<React.SetStateAction<string>>;
  busqueda: string;
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
};

// Estilo personalizado para los selects
const CustomSelect = styled(Select)({
  width: "90%",
  height: "60px",
  textAlign: "left",
  "& .MuiSelect-select": {
    paddingLeft: "15px",
  },
  backgroundColor: "#ffffff", // Establece el fondo blanco
  "& .MuifilledInput-notchedOutline": {
    borderColor: "black", // Cambia el color del borde si es necesario
  },
  "&:hover .MuifilledInput-notchedOutline": {
    borderColor: "blue", // Cambia el color del borde al hacer hover
  },
  "&.Mui-focused .MuifilledInput-notchedOutline": {
    borderColor: "blue", // Cambia el color del borde cuando está enfocado
  },
});

const Filtros: React.FC<FiltrosProps> = ({
  mes,
  setMes,
  campus,
  setCampus,
  tematica,
  setTematica,
  publico,
  setPublico,
  modalidad,
  setModalidad,
  busqueda,
  setBusqueda,
}) => {
  return (
    <div className="w-full p-6">
      <div className="flex items-center gap-2 mb-4">
        <SearchIcon style={{ fontSize: "24px", color: "#000" }} />
        <h2 className="font-bold text-lg">Barra de búsqueda</h2>
      </div>
      <TextField
        fullWidth
        variant="filled"
        label="Buscar por título del evento"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe el título del evento"
        InputProps={{
          style: {
            height: "60px",
            paddingLeft: "15px",
            backgroundColor: "#ffffff",
            width: "90%",
          },
          endAdornment: (
            <InputAdornment position="end">
              {busqueda && (
                <ClearIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setBusqueda("")}
                />
              )}
            </InputAdornment>
          ),
        }} 
      />

      <h2 className="flex items-center gap-2 font-bold text-lg mb-4 mt-4">
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

      {/* Selects de Material-UI para los filtros */}
      <div className="flex flex-col gap-6">
        <FormControl fullWidth variant="filled">
          <InputLabel>Mes</InputLabel>
          <CustomSelect
            value={mes}
            onChange={(e) => setMes(e.target.value as string)}
            label="Mes"
          >
            <MenuItem value="">
              {" "}
              <em>Ninguno</em>{" "}
            </MenuItem>
            <MenuItem value="Enero">Enero</MenuItem>
            <MenuItem value="Febrero">Febrero</MenuItem>
            <MenuItem value="Marzo">Marzo</MenuItem>
            <MenuItem value="Abril">Abril</MenuItem>
            <MenuItem value="Mayo">Mayo</MenuItem>
            <MenuItem value="Junio">Junio</MenuItem>
            <MenuItem value="Julio">Julio</MenuItem>
            <MenuItem value="Agosto">Agosto</MenuItem>
            <MenuItem value="Septiembre">Septiembre</MenuItem>
            <MenuItem value="Octubre">Octubre</MenuItem>
            <MenuItem value="Noviembre">Noviembre</MenuItem>
            <MenuItem value="Diciembre">Diciembre</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth variant="filled">
          <InputLabel>Modalidad</InputLabel>
          <CustomSelect
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value as string)}
            label="Modalidad"
          >
            <MenuItem value="">
              {" "}
              <em>Ninguno</em>{" "}
            </MenuItem>
            <MenuItem value="Presencial">Presencial</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
            <MenuItem value="Mixta">Mixta</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth variant="filled">
          <InputLabel>Campus</InputLabel>
          <CustomSelect
            value={campus}
            onChange={(e) => setCampus(e.target.value as string)}
            label="Campus"
          >
            <MenuItem value="">
              {" "}
              <em>Ninguno</em>{" "}
            </MenuItem>
            <MenuItem value="Casa Central Valparaíso">
              Casa Central Valparaíso
            </MenuItem>
            <MenuItem value="San Joaquín">San Joaquín</MenuItem>
            <MenuItem value="Vitacura">Vitacura</MenuItem>
            <MenuItem value="Viña del Mar">Viña del Mar</MenuItem>
            <MenuItem value="Concepción">Concepción</MenuItem>
            <MenuItem value="Varios">Varios</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth variant="filled">
          <InputLabel>Temática</InputLabel>
          <CustomSelect
            value={tematica}
            onChange={(e) => setTematica(e.target.value as string)}
            label="Temática"
          >
            <MenuItem value="">
              {" "}
              <em>Ninguno</em>{" "}
            </MenuItem>
            <MenuItem value="Cultura, Arte y Recreación">
              Cultura, Arte y Recreación
            </MenuItem>
            <MenuItem value="Vinculación con el Medio">
              Vinculación con el Medio
            </MenuItem>
            <MenuItem value="Investigación">Investigación</MenuItem>
            <MenuItem value="Docencia">Docencia</MenuItem>
            <MenuItem value="Innovación">Innovación</MenuItem>
          </CustomSelect>
        </FormControl>

        <FormControl fullWidth variant="filled">
          <InputLabel>Público</InputLabel>
          <CustomSelect
            value={publico}
            onChange={(e) => setPublico(e.target.value as string)}
            label="Público"
          >
            <MenuItem value="">
              {" "}
              <em>Ninguno</em>{" "}
            </MenuItem>
            <MenuItem value="Estudiantes">Estudiantes</MenuItem>
            <MenuItem value="Académicos">Académicos</MenuItem>
            <MenuItem value="Abierto a todo público">
              Abierto a todo público
            </MenuItem>
            <MenuItem value="Ex-Alumnos">Ex-Alumnos</MenuItem>
          </CustomSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default Filtros;
