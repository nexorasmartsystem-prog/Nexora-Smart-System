import React from "react";
import { Link, useParams } from "react-router-dom";

export default function DetalleServicio() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 bg-[#020507]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0778DE] capitalize mb-6">{id.replace("-", " ")}</h1>
      <p className="text-xl text-[#AAB3C0] max-w-2xl text-center mb-10 font-light">Aquí irá la información técnica detallada de este servicio.</p>
      <Link to="/" className="px-8 py-3 border-2 border-[#0778DE] text-[#0778DE] font-semibold hover:bg-[#0778DE] hover:text-white rounded-full transition-colors duration-300">
        ← Volver al inicio
      </Link>
    </div>
  );
}