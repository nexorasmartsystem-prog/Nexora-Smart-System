import React from "react";
import { Link } from "react-router-dom";

// Importamos únicamente la imagen que seleccionaste como fondo completo
import fondoNosotros from "../assets/fondonosotros.png";

export default function Nosotros() {
  return (
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col justify-between selection:bg-[#0778DE]/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Contenedor que cubre el 100% de la pantalla (fixed hace que el fondo se quede quieto al hacer scroll) */}
    <div className="fixed inset-0 z-0 w-full h-full">
    <div 
        className="w-full h-full"
        style={{
        backgroundImage: `url(${fondoNosotros})`,
        backgroundPosition: 'center', // Centra la imagen
        backgroundSize: 'cover',      // Fuerza a cubrir toda la pantalla sin espacios vacíos
        backgroundRepeat: 'no-repeat'
        }}
    >
        {/* Capa de degradado técnico para que el texto sea legible y no esté tan oscuro */}
        <div className="w-full h-full bg-gradient-to-b from-[#020507]/40 via-[#020507]/20 to-[#020507]/60"></div>
    </div>
    </div>
      {/* CAPA DE FONDO GLOBAL CON TU IMAGEN (No superpuesta) 
      <div className="absolute inset-0 z-0">
        <img 
          src={fondoNosotros} 
          alt="Fondo Nexora" 
          className="w-full h-full object-contain object-center p-8 opacity-85 filter brightness-100 select-none pointer-events-none" 
        />
        {/* Capa de degradado técnico para fundir el fondo con el entorno oscuro *
        <div className="absolute inset-0 bg-gradient-to-b from-[#020507]/40 via-[#020507]/20 to-[#020507]/40"></div>
      </div>/}

      {/* BARRA DE NAVEGACIÓN (Se eliminó el logo central) */}
      <nav className="relative z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full gap-4 border-b border-gray-800/30">
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
          <li className="hover:text-white cursor-pointer transition-colors"><Link to="/">Inicio</Link></li>
          <li className="text-white border-b-2 border-[#0778DE] pb-1 cursor-pointer"><Link to="/nosotros">Nosotros</Link></li>
          <li className="hover:text-white cursor-pointer transition-colors">Servicios</li>
          <li className="hover:text-white cursor-pointer transition-colors">Proyectos</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
        </ul>

        {/* BOTÓN CON LOGO DE WHATSAPP */}
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

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 py-16 flex-grow flex flex-col justify-center">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-wide mb-6 text-white/70 uppercase">
            NUESTRA MISIÓN,<br />
            TU FUTURO <br />
            CONECTADO.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl font-light">
            Descubre quiénes somos y cómo transformamos espacios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Solo botón Único con redirección al WhatsApp configurado */}
            <a 
              href="https://wa.me/573006020186" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0047FF] to-[#0778DE] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(7,120,222,0.4)] text-base tracking-wide"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.973 0c3.184.001 6.177 1.242 8.426 3.496 2.248 2.253 3.487 5.244 3.484 8.425-.006 6.625-5.347 11.973-11.92 11.973-2.004-.001-3.973-.504-5.714-1.463L0 24zm6.541-3.73l.363.216c1.548.92 3.615 1.405 5.068 1.406 5.41 0 9.814-4.403 9.817-9.817.002-2.623-1.019-5.089-2.877-6.95C17.052 3.265 14.594 2.24 11.976 2.24c-5.41 0-9.816 4.403-9.819 9.819-.001 1.543.415 3.05 1.204 4.39l.246.418-1.01 3.69 3.786-.993zM16.522 13.56c-.29-.145-1.72-.848-1.986-.946-.266-.097-.459-.145-.654.145-.193.29-.747.946-.917 1.14-.17.193-.341.217-.631.072-.29-.145-1.223-.45-2.33-1.439-.86-.767-1.442-1.716-1.61-2.006-.17-.29-.018-.446.127-.59.13-.13.29-.34.435-.51.145-.17.193-.29.29-.483.097-.193.048-.361-.024-.505-.072-.144-.654-1.577-.896-2.158-.236-.569-.475-.492-.654-.501-.17-.008-.364-.01-.559-.01s-.51.072-.776.36c-.266.29-1.017.994-1.017 2.424s1.042 2.809 1.188 3.002c.145.193 2.051 3.132 4.969 4.389.694.3 1.236.479 1.658.613.698.222 1.334.191 1.838.116.56-.083 1.72-.702 1.962-1.382.242-.679.242-1.261.17-1.381-.071-.12-.266-.193-.556-.338z"/>
              </svg>
              Habla con un Experto →
            </a>
          </div>
        </div>

        {/* Panel Inferior de Cristal (Historia y Misión) */}
        <div className="w-full bg-[#0A1628]/60 border border-[#1E3A5F]/75 rounded-2xl backdrop-blur-xl p-8 md:p-10 grid md:grid-cols-2 gap-10 shadow-[0_20px_50px_rgba(2,11,20,0.8)] relative z-20">
          
          {/* Historia */}
          <div className="flex gap-6 group">
            {/* Icono Novedoso: Microchip e Integración de Sistemas Hardware */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#020507] to-[#0A1628] border border-[#0778DE]/40 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#5EDEF7] transition-all duration-300">
              <svg className="w-7 h-7 text-[#5EDEF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Nuestra Historia</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Nacimos en Bogotá hace mas de 8 años con la firme convicción de llevar la seguridad y la automatización al siguiente nivel. Como integradores profesionales, hemos transformado espacios residenciales y corporativos, combinando un riguroso diseño técnico en planos con una ejecución impecable en campo. Teniendo aliados estrategicos como Sonoff, Dahua, Hikvision, intelbras entre otros.
              </p>
            </div>
          </div>

          {/* Misión y Visión */}
          <div className="flex gap-6 group">
            {/* Icono Novedoso: Red de Conexión Global y Nodos de Automatización */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#020507] to-[#0A1628] border border-[#0778DE]/40 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#0778DE] transition-all duration-300">
              <svg className="w-7 h-7 text-[#0778DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Misión y Visión</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Nuestra misión es diseñar e implementar sistemas inteligentes integrales. Utilizando equipos de vanguardia en CCTV, domótica y control de acceso, garantizamos a nuestros clientes proyectos entregados a todo costo que superan sus expectativas de confort y protección.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* BARRA INFERIOR DE BENEFICIOS */}
      <div className="relative z-10 w-full bg-[#020B14]/80 border-t border-[#1E3A5F]/40 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#1E3A5F]/30">
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Mayor Seguridad<br/>y Control</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Automatización<br/>de Procesos</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Comodidad para<br/>Residentes</span></div>
          <div className="flex flex-col items-center justify-center gap-2 px-2"><span className="text-gray-300/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Reducción de<br/>Costos</span></div>
        </div>
      </div>
    </div>
  );
}