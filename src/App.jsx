import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importamos las páginas desde su nueva carpeta
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import DetalleServicio from "./pages/DetalleServicio";
import Servicios from "./pages/Servicios";
import CatalogoDomotica from "./pages/CatalogoDomotica";
import CatalogoCCTV from "./pages/CatalogoCCTV";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicio/:id" element={<DetalleServicio />} />
        <Route path="/servicio/domotica-integral" element={<CatalogoDomotica />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/catalogo-cctv" element={<CatalogoCCTV />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;