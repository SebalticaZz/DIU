import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Principal from "./pages/Principal";
import Evento from "./pages/Evento";


const App = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/evento" element={<Evento/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App