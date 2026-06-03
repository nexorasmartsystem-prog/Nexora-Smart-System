// Importamos React Router para la navegación
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Importamos los recursos gráficos
import logo from "./assets/Logo.png";
import baseFondo from "./assets/base.png";

// Importamos las nuevas imágenes para las tarjetas
import domo from "./assets/domo.png";
import cctv from "./assets/cctv.png";
import control from "./assets/control.png";

// ============================================================================
// COMPONENTE 1: PÁGINA DE DETALLE DEL SERVICIO
// ============================================================================
function DetalleServicio() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 bg-[#020507]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0778DE] capitalize mb-6">
        {id.replace("-", " ")}
      </h1>
      <p className="text-xl text-[#AAB3C0] max-w-2xl text-center mb-10 font-light">
        Aquí irá la información técnica detallada de este servicio.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 border-2 border-[#0778DE] text-[#0778DE] font-semibold hover:bg-[#0778DE] hover:text-white rounded-full transition-colors duration-300"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}

// ============================================================================
// COMPONENTE 2: PÁGINA PRINCIPAL (INICIO)
// ============================================================================
function Inicio() {
  // Configuración dinámica de las 3 tarjetas solicitadas
  const tarjetasServicios = [
    { 
      id: "domotica-integral", 
      titulo: "Domótica integral", 
      desc: "Transforma tu entorno con automatización inteligente", 
      img: domo 
    },
    { 
      id: "cctv-y-seguridad", 
      titulo: "CCTV y seguridad", 
      desc: "Vigilancia continua para tu total tranquilidad", 
      img: cctv 
    },
    { 
      id: "edificios-inteligentes", 
      titulo: "Edificios inteligentes", 
      desc: "Moderniza tu recepción con gestión automatizada", 
      img: control 
    }
  ];

  return (
    // Aplicamos la fuente Montserrat a todo el contenedor principal
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col justify-between selection:bg-[#0778DE]/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- 1. CAPA DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        {/* Subimos la opacidad al 100% para que el fondo sea totalmente visible */}
        <img 
          src={baseFondo} 
          alt="Fondo Nexora" 
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Ajustamos el degradado: Más oscuro a la izquierda para leer los textos, completamente transparente a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020507]/95 via-[#020507]/60 to-transparent/10"></div>
      </div>

      {/* --- 2. BARRA DE NAVEGACIÓN SUPERIOR --- */}
      <nav className="relative z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full gap-4">
        <div className="flex items-center">
          <img src={logo} alt="Nexora" className="h-10 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(7,120,222,0.5)]" />
        </div>
        
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
          <li className="text-white border-b-2 border-[#0778DE] pb-1 cursor-pointer">Inicio</li>
          <li className="hover:text-white cursor-pointer transition-colors">Nosotros</li>
          <li className="hover:text-white cursor-pointer transition-colors">Servicios</li>
          <li className="hover:text-white cursor-pointer transition-colors">Proyectos</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
        </ul>

        <a 
          href="https://wa.me/573000000000?text=Hola,%20me%20gustaría%20cotizar%20un%20proyecto" 
          target="_blank" rel="noreferrer"
          className="px-6 py-2 border-2 border-[#0778DE] text-white rounded-full text-sm font-bold hover:bg-[#0778DE] hover:shadow-[0_0_20px_rgba(7,120,222,0.5)] transition-all hidden md:flex items-center gap-2"
        >
          📞 Cotiza tu proyecto
        </a>
      </nav>

      {/* --- 3. CONTENIDO PRINCIPAL (DOS COLUMNAS) --- */}
      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 py-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        
        {/* COLUMNA IZQUIERDA: Textos y Botones */}
        <div className="flex flex-col items-start mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
            TECNOLOGÍA QUE <br />
            <span className="text-[#0778DE]">CONECTA,</span> <br />
            <span className="text-[#0778DE]">AUTOMATIZA Y</span> <br />
            <span className="text-[#0778DE]">PROTEGE</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-md font-light">
            Soluciones inteligentes para residencias, oficinas y edificios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0047FF] to-[#0778DE] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(7,120,222,0.4)] text-sm md:text-base tracking-wide">
              Solicita una asesoría gratuita →
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-500 text-white font-bold rounded-xl hover:border-[#5EDEF7] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm text-sm md:text-base tracking-wide">
              Conoce nuestros servicios →
            </button>
          </div>
        </div>

        {/* COLUMNA DERECHA: 3 Tarjetas de Servicios Flotantes */}
        <div className="flex flex-col gap-5 w-full max-w-md lg:ml-auto">
          
          {tarjetasServicios.map((tarjeta) => (
            <Link 
              key={tarjeta.id}
              to={`/servicio/${tarjeta.id}`} 
              className="group flex items-center gap-5 bg-[#0A1628]/60 border border-[#1E3A5F] p-5 rounded-2xl backdrop-blur-md cursor-pointer hover:border-[#0778DE] hover:-translate-x-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(7,120,222,0.25)]"
            >
              {/* Contenedor de la imagen */}
              <div className="w-20 h-20 bg-[#020507]/80 rounded-xl flex items-center justify-center shrink-0 border border-gray-700/50 p-2 group-hover:border-[#0778DE] transition-colors">
                <img 
                  src={tarjeta.img} 
                  alt={tarjeta.titulo} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Textos de la tarjeta */}
              <div className="flex flex-col justify-center">
                <h3 className="text-[#5EDEF7] font-bold text-base mb-1 uppercase tracking-widest group-hover:text-white transition-colors">
                  {tarjeta.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {tarjeta.desc}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </main>

      {/* --- 4. BARRA INFERIOR DE BENEFICIOS --- */}
      <div className="relative z-10 w-full bg-[#020B14]/80 border-t border-[#1E3A5F] backdrop-blur-md mt-10">
        <div className="max-w-[1600px] mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#1E3A5F]">
          
          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <span className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Mayor Seguridad<br/>y Control</span>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <span className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Automatización<br/>de Procesos</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <span className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Comodidad para<br/>Residentes</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 px-2">
            <span className="text-gray-300 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mt-1">Reducción de<br/>Costos</span>
          </div>

        </div>
      </div>

    </div>
  );
}

// ============================================================================
// COMPONENTE 3: APLICACIÓN PRINCIPAL (ENRUTADOR)
// ============================================================================
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicio/:id" element={<DetalleServicio />} />
      </Routes>
    </Router>
  );
}

export default App;