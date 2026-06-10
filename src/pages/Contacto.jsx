import { Link } from "react-router-dom";
import baseFondo from "../assets/base.png";

function Contacto() {
  return (
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- CAPA DE FONDO FIJA --- */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${baseFondo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#020507]/95 via-[#020507]/80 to-[#020507]/95"></div>
        </div>
      </div>

      {/* --- NAVEGACIÓN SUPERIOR --- */}
      <nav className="relative z-20 flex flex-col md:flex-row items-center justify-end px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full gap-4">
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 mr-auto">
          <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
          <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
          <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
          {/*<li className="hover:text-white cursor-pointer transition-colors">Proyectos</li>
          {/* Resaltamos la página actual en azul */}
          <li className="text-white border-b-2 border-[#0778DE] pb-1">Contacto</li>
        </ul>

        {/* Botón de WhatsApp integrado en el menú superior */}
        <a 
          href="https://wa.me/573024156428?text=Hola,%20quiero%20cotizar%20un%20proyecto" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-2 border-2 border-[#0778DE] text-white rounded-full text-sm font-bold hover:bg-[#0778DE] hover:shadow-[0_0_20px_rgba(7,120,222,0.5)] transition-all hidden md:flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Chatea con nosotros
        </a>
      </nav>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-12 flex-grow flex flex-col justify-center">
        
        {/* Título de la página */}
        <div className="text-center mb-16">
          <span className="text-[#0778DE] font-black text-sm uppercase tracking-[0.3em] mb-3 block">Conecta con Ingeniería</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
            ESTAMOS PARA <span className="text-[#5EDEF7]">AYUDARTE</span>
          </h1>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-base md:text-lg">
            ¿Tienes un proyecto en mente? Nuestro equipo de ingenieros está listo para asesorarte. Escríbenos y diseñaremos la solución inteligente perfecta para ti.
          </p>
        </div>

        {/* GRID DE TARJETAS DE CONTACTO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* TARJETA 1: WHATSAPP (Destacada) */}
          <a 
            href="https://wa.me/573024156428?text=Hola,%20me%20gustaría%20recibir%20asesoría%20para%20un%20proyecto" 
            target="_blank" rel="noreferrer"
            className="group flex flex-col items-center text-center bg-[#0778DE]/10 backdrop-blur-md border-2 border-[#0778DE] rounded-3xl p-10 hover:bg-[#0778DE] transition-all duration-500 hover:-translate-y-2 shadow-[0_0_30px_rgba(7,120,222,0.15)] hover:shadow-[0_0_40px_rgba(7,120,222,0.5)]"
          >
            <div className="w-20 h-20 bg-[#0778DE] text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:bg-white group-hover:text-[#0778DE]">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <h2 className="text-[#5EDEF7] font-black text-2xl uppercase tracking-wider mb-2 group-hover:text-white transition-colors">Vía WhatsApp</h2>
            <p className="text-gray-300 font-light mb-6 group-hover:text-white/90">Respuesta rápida y asesoría comercial instantánea.</p>
            <span className="mt-auto px-8 py-3 bg-white text-[#0778DE] font-bold rounded-full text-sm uppercase tracking-widest group-hover:bg-[#020507] group-hover:text-white transition-colors">Iniciar Chat</span>
          </a>

          {/* TARJETA 2: EMAIL & UBICACIÓN */}
          <div className="flex flex-col gap-8">
            {/* EMAIL */}
            <a href="mailto:nexorasmartsystem@gmail.com" className="group flex items-center text-left bg-[#0A1628]/60 backdrop-blur-md border border-[#1E3A5F] rounded-3xl p-8 hover:border-[#5EDEF7] transition-colors flex-grow">
              <div className="w-14 h-14 bg-[#020507] text-[#0778DE] rounded-full flex items-center justify-center shrink-0 mr-6 border border-[#1E3A5F] group-hover:bg-[#5EDEF7] group-hover:text-[#020507] transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Correo Electrónico</h3>
                <p className="text-[#5EDEF7] font-light text-sm hover:underline">nexorasmartsystem@gmail.com</p>
              </div>
            </a>
            
            {/* UBICACIÓN */}
            <div className="flex items-center text-left bg-[#0A1628]/60 backdrop-blur-md border border-[#1E3A5F] rounded-3xl p-8 flex-grow">
              <div className="w-14 h-14 bg-[#020507] text-[#0778DE] rounded-full flex items-center justify-center shrink-0 mr-6 border border-[#1E3A5F]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Dirección Central</h3>
                <p className="text-gray-400 font-light text-sm">Calle 8 sur #3A - 07<br/>Bogotá, Colombia</p>
              </div>
            </div>
          </div>

          {/* TARJETA 3: HORARIOS & REDES SOCIALES */}
          <div className="flex flex-col gap-8 lg:col-span-1 md:col-span-2 lg:mt-0">
            {/* HORARIOS */}
            <div className="flex items-center text-left bg-[#0A1628]/60 backdrop-blur-md border border-[#1E3A5F] rounded-3xl p-8 flex-grow">
              <div className="w-14 h-14 bg-[#020507] text-[#0778DE] rounded-full flex items-center justify-center shrink-0 mr-6 border border-[#1E3A5F]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Horarios de Atención</h3>
                <p className="text-gray-400 font-light text-sm">Lunes a Sábado<br/><span className="text-[#5EDEF7] font-medium">7:00 AM - 8:00 PM</span></p>
              </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex flex-col justify-center bg-[#0A1628]/60 backdrop-blur-md border border-[#1E3A5F] rounded-3xl p-8 flex-grow">
              <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6 text-center">Síguenos en Redes</h3>
              <div className="flex items-center justify-center gap-6">
                
                {/* Instagram */}
                <a href="https://www.instagram.com/nexorass_col?igsh=ZjVpZmt1Ym13anZk" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#020507] text-gray-400 rounded-full flex items-center justify-center border border-[#1E3A5F] hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/search/top?q=Nexora%20Smart%20System" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#020507] text-gray-400 rounded-full flex items-center justify-center border border-[#1E3A5F] hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER SENCILLO --- */}
      <div className="relative z-10 text-center py-6 bg-[#020507] border-t border-[#1E3A5F]/50 mt-auto">
        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-700">Nexora Smart Systems S.A.S - 2024 - Todos los derechos reservados</p>
      </div>

    </div>
  );
}

export default Contacto;