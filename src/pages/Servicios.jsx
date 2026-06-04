import { Link } from "react-router-dom";

// Importamos solo la imagen de fondo base
import baseFondo from "../assets/base.png";

// Importamos las imágenes de las tarjetas
// Asegúrate de que los nombres coincidan exactamente en tu carpeta assets
import domoticaImg from "../assets/domotica-servicios.png";
import cctvImg from "../assets/cctv-servicios.png";
import controlImg from "../assets/control-servicios.png";

function Servicios() {
  // Datos de las tarjetas
  const serviciosData = [
    {
      id: "domotica-integral", 
      titulo: "DOMÓTICA INTEGRAL",
      subtitulo: "Control Total de Tu Entorno",
      img: domoticaImg,
      caracteristicas: [
        "Automatización de iluminación",
        "Cerraduras inteligentes",
        "Sistemas de audio/video",
        "Escenas personalizadas"
      ],
      btnText: "Explorar Domótica →"
    },
    {
      id: "cctv-y-seguridad",
      titulo: "CCTV Y SEGURIDAD",
      subtitulo: "Vigilancia y Protección 24/7",
      img: cctvImg,
      caracteristicas: [
        "Cámaras IP de alta resolución",
        "Monitoreo remoto en vivo",
        "Alertas y detección de intrusiones",
        "Alarmas remotas"
      ],
      btnText: "Conocer Seguridad →"
    },
    {
      id: "edificios-inteligentes",
      titulo: "EDIFICIOS INTELIGENTES",
      subtitulo: "Modernización y Eficiencia",
      img: controlImg,
      caracteristicas: [
        "Gestión de instalaciones automatizada",
        "Control de acceso",
        "Comunicaciones integradas",
        "Automatizacion de puertas de garage"
      ],
      btnText: "Ver Soluciones →"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- 1. CAPA DE FONDO (Solo usamos base.png) --- */}
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
          {/* Degradado para que las tarjetas resalten y el texto sea legible */}
          <div className="w-full h-full bg-gradient-to-b from-[#020507]/90 via-[#020507]/70 to-[#020507]/95"></div>
        </div>
      </div>

      {/* --- 2. NAVEGACIÓN LIMPIA (Sin logo) --- */}
      <nav className="relative z-20 flex flex-col md:flex-row items-center justify-end px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full gap-4">
        
        {/* Enlaces alineados a la izquierda del espacio disponible */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 mr-auto">
          <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
          <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
          {/* Resaltamos la página actual en azul */}
          <li className="text-white border-b-2 border-[#0778DE] pb-1">Servicios</li>
          <li className="hover:text-white cursor-pointer transition-colors">Proyectos</li>
          <li className="hover:text-white cursor-pointer transition-colors">Contacto</li>
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
          Cotiza tu proyecto
        </a>
      </nav>

      {/* --- 3. CONTENIDO PRINCIPAL (TARJETAS) --- */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex-grow flex flex-col justify-center">
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviciosData.map((servicio) => (
            <div 
              key={servicio.id} 
              className="group flex flex-col bg-[#0A1628]/70 backdrop-blur-md border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-[#0778DE] hover:shadow-[0_0_30px_rgba(7,120,222,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagen Superior */}
              <div className="w-full h-56 overflow-hidden bg-black">
                <img 
                  src={servicio.img} 
                  alt={servicio.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-[#5EDEF7] font-extrabold text-xl md:text-2xl mb-1 tracking-wide">
                  {servicio.titulo}
                </h2>
                <h3 className="text-white/80 font-medium text-sm md:text-base mb-6">
                  {servicio.subtitulo}
                </h3>
                
                <ul className="text-gray-300 text-sm space-y-2 mb-8 flex-grow">
                  {servicio.caracteristicas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#0778DE] font-bold mt-0.5">•</span> 
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/servicio/${servicio.id}`} 
                  className="mt-auto self-start px-6 py-2.5 border border-[#0778DE] text-white rounded-full text-sm font-semibold hover:bg-[#0778DE] hover:shadow-[0_0_15px_rgba(7,120,222,0.4)] transition-all"
                >
                  {servicio.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Texto inferior */}
        <div className="text-center mt-12 mb-8">
          <p className="text-gray-400/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Soluciones detalladas para cada una de tus necesidades.<br/>
            Nuestro equipo de ingenieros está listo para diseñar tu sistema ideal.
          </p>
        </div>

      </main>
    </div>
  );
}

export default Servicios;