import React from "react";
import { Link } from "react-router-dom";

import baseFondo from "../assets/base.png";
import domo from "../assets/domo.png";
import cctv from "../assets/cctv.png";
import control from "../assets/control.png";

export default function Inicio() {
  const tarjetasServicios = [
    { id: "domotica-integral", titulo: "Domótica integral", desc: "Transforma tu entorno con automatización inteligente", img: domo },
    { id: "cctv-y-seguridad", titulo: "CCTV & Seguridad", desc: "Vigilancia continua para tu total tranquilidad", img: cctv },
    { id: "edificios-inteligentes", titulo: "Edificios inteligentes", desc: "Moderniza tu recepción con gestión automatizada", img: control }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col justify-between selection:bg-[#0778DE]/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute inset-0 z-0">
        <img src={baseFondo} alt="Fondo Nexora" className="w-full h-full object-cover object-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020507]/95 via-[#020507]/60 to-transparent/10"></div>
      </div>

      <nav className="relative z-20 flex flex-col md:flex-row items-center justify-between md:justify-end px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full gap-4">
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 mr-auto">
          <li className="text-white border-b-2 border-[#0778DE] pb-1 cursor-pointer"><Link to="/">Inicio</Link></li>
          <li className="hover:text-white cursor-pointer transition-colors"><Link to="/nosotros">Nosotros</Link></li>
          <li className="hover:text-white cursor-pointer transition-colors">Servicios</li>
          <li className="hover:text-white cursor-pointer transition-colors">Proyectos</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
        </ul>
        <a
        href="https://wa.me/573024156428" 
          target="_blank" 
          rel="noreferrer" 
          className="px-6 py-2 border-2 border-[#0778DE] text-white rounded-full text-sm font-bold hover:bg-[#0778DE] transition-all hidden md:flex items-center gap-2 group"
        >
          <svg className="w-4 h-4 fill-current text-[#5EDEF7] group-hover:text-white transition-colors" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.973 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.425-.006 6.625-5.347 11.973-11.92 11.973-2.004-.001-3.973-.504-5.714-1.463L0 24zm6.541-3.73l.363.216c1.548.92 3.615 1.405 5.068 1.406 5.41 0 9.814-4.403 9.817-9.817.002-2.623-1.019-5.089-2.877-6.95C17.052 3.265 14.594 2.24 11.976 2.24c-5.41 0-9.816 4.403-9.819 9.819-.001 1.543.415 3.05 1.204 4.39l.246.418-1.01 3.69 3.786-.993zM16.522 13.56c-.29-.145-1.72-.848-1.986-.946-.266-.097-.459-.145-.654.145-.193.29-.747.946-.917 1.14-.17.193-.341.217-.631.072-.29-.145-1.223-.45-2.33-1.439-.86-.767-1.442-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.435-.51.145-.17.193-.29.29-.483.097-.193.048-.361-.024-.505-.072-.144-.654-1.577-.896-2.158-.236-.569-.475-.492-.654-.501-.17-.008-.364-.01-.559-.01s-.51.072-.776.36c-.266.29-1.017.994-1.017 2.424s1.042 2.809 1.188 3.002c.145.193 2.051 3.132 4.969 4.389.694.3 1.236.479 1.658.613.698.222 1.334.191 1.838.116.56-.083 1.72-.702 1.962-1.382.242-.679.242-1.261.17-1.381-.071-.12-.266-.193-.556-.338z"/>
          </svg>
          Cotiza tu proyecto
        </a>
      </nav>

      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 py-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        <div className="flex flex-col items-start mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-6 text-white/60">
            TECNOLOGÍA QUE <br /><span className="text-[#0778DE]/70">CONECTA,</span> <br /><span className="text-[#0778DE]/70">AUTOMATIZA Y</span> <br /><span className="text-[#0778DE]/70">PROTEGE</span>
          </h1>
          <p className="text-gray-400/80 text-base md:text-lg mb-10 max-w-md font-light">
            Soluciones inteligentes para residencias, oficinas y edificios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a href="https://wa.me/573024156428" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0047FF] to-[#0778DE] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(7,120,222,0.4)] text-sm md:text-base tracking-wide">
              Solicita una asesoría gratuita →
            </a>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-500/50 text-white/80 font-bold rounded-xl hover:border-[#5EDEF7] hover:bg-white/5 transition-all duration-300 text-sm md:text-base tracking-wide">
              Conoce nuestros servicios →
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full max-w-md lg:ml-auto">
          {tarjetasServicios.map((tarjeta) => (
            <Link key={tarjeta.id} to={`/servicio/${tarjeta.id}`} className="group flex items-center gap-5 bg-[#0A1628]/60 border border-[#1E3A5F] p-5 rounded-2xl backdrop-blur-md cursor-pointer hover:border-[#0778DE] hover:-translate-x-3 transition-all duration-300">
              <div className="w-30 h-30 bg-[#020507]/80 rounded-xl flex items-center justify-center shrink-0 border border-gray-700/50 p-2 group-hover:border-[#0778DE] transition-colors">
                <img src={tarjeta.img} alt={tarjeta.titulo} className="w-full h-full object-contain group-hover:scale-115 transition-transform duration-300" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#5EDEF7] font-bold text-base mb-1 uppercase tracking-widest group-hover:text-white transition-colors">{tarjeta.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{tarjeta.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className="relative z-10 w-full bg-[#020B14]/80 border-t border-[#1E3A5F] backdrop-blur-md mt-10">
        <div className="max-w-[1600px] mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#1E3A5F]">
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Mayor Seguridad<br/>y Control</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Automatización<br/>de Procesos</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Comodidad para<br/>Residentes</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Reducción de<br/>Costos</span></div>
        </div>
      </div>
    </div>
  );
}