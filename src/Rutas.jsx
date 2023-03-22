import reactLogo from "./assets/react.svg";

import { BrowserRouter as BRouter, Routes, Route, Link } from 'react-router-dom';

import Incio from "./paginas/Inicio";

function Rutas() {
  return (
    <BRouter>
      <Routes>
        
          <Route exact path="/" element={<Incio/>} />
          
        
      </Routes>
    </BRouter>
  );
}

export default Rutas;
