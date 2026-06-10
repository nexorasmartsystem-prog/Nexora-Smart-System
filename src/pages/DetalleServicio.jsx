import { Link } from "react-router-dom";

// 1. IMPORTACIÓN DE IMÁGENES
import baseFondo from "../assets/base.png";
import edificioHero from "../assets/edificio-hero.png";
import vorteriaCloud from "../assets/solucion-videoporteria.png";
import controlAcceso from "../assets/solucion-acceso.png";
import recepcionDigital from "../assets/solucion-recepcion.png";

// NUEVAS IMPORTACIONES DE LOGOS
import logoDahua from "../assets/logodahua.png";
import logoHikvision from "../assets/logohikvision.png";

function DetalleEdificios() {
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
          <div className="w-full h-full bg-gradient-to-b from-[#020507]/95 via-[#020507]/80 to-[#020507]"></div>
        </div>
      </div>

      {/* --- NAVEGACIÓN SUPERIOR ACTUALIZADA --- */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full">
        <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-semibold text-sm">
          ← Volver a Servicios
        </Link>
        
        {/* NUEVO BOTÓN DE ACCIÓN RÁPIDA EN LA PARTE SUPERIOR */}
        <a 
          href="https://wa.me/573024156428?text=Hola,%20quiero%20modernizar%20mi%20edificio%20ahora%20con%20Nexora"
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 border-2 border-[#5EDEF7] px-5 py-2 rounded-xl bg-[#5EDEF7]/10 backdrop-blur-sm hover:bg-[#5EDEF7] hover:text-black transition-all duration-300 group"
        >
            <span className="text-xs font-black uppercase tracking-widest">Moderniza tu edificio ahora</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </nav>

      {/* --- SECCIÓN 1: HERO --- */}
      <header className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <span className="text-[#0778DE] font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            Soluciones Corporativas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-white uppercase">
            Moderniza tu Edificio, <br/>
            <span className="text-[#0778DE]">Optimiza</span> tu Presupuesto.
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-xl font-light leading-relaxed">
            Reduce drásticamente los gastos fijos de administración implementando tecnología de vanguardia en control de acceso, videoportería y automatización operativa.
          </p>
          <a 
            href="#analisis-ahorro"
            className="px-8 py-4 bg-transparent border-2 border-[#0778DE] text-white font-bold rounded-xl hover:bg-[#0778DE] transition-all text-sm md:text-base tracking-wide uppercase"
          >
            Ver cómo ahorrar →
          </a>
        </div>
        
        <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#1E3A5F] shadow-[0_0_30px_rgba(7,120,222,0.2)] group relative">
          <img 
            src={edificioHero} 
            alt="Edificio Inteligente Nexora" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020507]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#0A1628]/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#1E3A5F]">
            <span className="text-4xl">🏢</span>
            <div>
              <span className="text-white font-bold text-sm block">Integración Total</span>
              <span className="text-gray-300 text-xs font-light">Seguridad y Confort en un solo sistema</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN 2: ANÁLISIS DE AHORRO --- */}
      <section id="analisis-ahorro" className="relative z-10 w-full bg-[#0A1628]/50 border-y border-[#1E3A5F] py-16 md:py-24 my-10 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wide">
              El Peso de la Vigilancia Física
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 bg-[#020507]/60 border border-[#1E3A5F] rounded-3xl p-8 flex flex-col items-center text-center shadow-inner group hover:border-red-600 transition-colors">
              <span className="text-red-500 font-black text-6xl md:text-7xl mb-2">65%</span>
              <p className="text-gray-300 font-bold tracking-wide uppercase text-sm mb-4">Del Presupuesto</p>
              <p className="text-gray-400 text-xs font-light">
                Es el porcentaje promedio del recaudo de administración destinado a seguridad física tradicional.
              </p>
            </div>

            <div className="md:col-span-8 bg-[#020507]/40 border border-[#1E3A5F] rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-widest text-[#5EDEF7]">Potencial de Optimización</h3>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center justify-between text-xs mb-1.5 px-1">
                    <span className="text-gray-300 font-semibold uppercase tracking-wider">Gastos Actuales</span>
                    <span className="text-white font-black text-lg">100%</span>
                  </div>
                  <div className="w-full h-10 bg-gray-900 rounded-full overflow-hidden border border-gray-700 p-1">
                    <div className="h-full bg-gradient-to-r from-red-900 via-orange-700 to-yellow-500 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between text-xs mb-1.5 px-1">
                    <span className="text-[#5EDEF7] font-semibold uppercase tracking-wider">Con Nexora Ingeniería</span>
                    <span className="text-[#5EDEF7] font-black text-lg">AHORRO HASTA 30%</span>
                  </div>
                  <div className="w-full h-10 bg-gray-900 rounded-full overflow-hidden border border-[#1E3A5F] p-1 flex">
                    <div className="h-full bg-gradient-to-r from-[#0047FF] to-[#0778DE] rounded-full w-[70%]"></div>
                    <div className="h-full w-[30%] bg-[#5EDEF7]/10 rounded-r-full border-l-2 border-dashed border-[#5EDEF7]/40 flex items-center justify-center">
                        <span className="text-[#5EDEF7] font-bold text-xs uppercase text-center leading-none">Menos<br/>Costos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: LAS SOLUCIONES TÉCNICAS --- */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 flex-grow">
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="group flex flex-col bg-[#0A1628]/70 backdrop-blur-md border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-[#0778DE] transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-60 overflow-hidden bg-black">
              <img src={vorteriaCloud} alt="Videoportería" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-[#5EDEF7] font-extrabold text-xl md:text-2xl mb-1 tracking-wide uppercase">Videoportería Cloud</h3>
              <ul className="text-gray-300 text-sm space-y-2.5 flex-grow font-light mt-4">
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Llama directamente al Smartphone.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Comunicación HD bidireccional.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Apertura remota de puertas.</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="group flex flex-col bg-[#0A1628]/70 backdrop-blur-md border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-[#0778DE] transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-60 overflow-hidden bg-black">
              <img src={controlAcceso} alt="Control Acceso" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-[#5EDEF7] font-extrabold text-xl md:text-2xl mb-1 tracking-wide uppercase">Control de Acceso</h3>
              <ul className="text-gray-300 text-sm space-y-2.5 flex-grow font-light mt-4">
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Lectura de Tags vehiculares.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Biometría facial de alta precisión.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Gestión de residentes centralizada.</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="group flex flex-col bg-[#0A1628]/70 backdrop-blur-md border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-[#0778DE] transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-60 overflow-hidden bg-black">
              <img src={recepcionDigital} alt="Recepción Digital" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-[#5EDEF7] font-extrabold text-xl md:text-2xl mb-1 tracking-wide uppercase">Recepción Digital</h3>
              <ul className="text-gray-300 text-sm space-y-2.5 flex-grow font-light mt-4">
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Casilleros digitales para paquetería.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Códigos QR para visitantes.</li>
                <li className="flex items-start gap-2"><span className="text-[#0778DE] font-bold mt-0.5">•</span> Automatización operativa total.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- SECCIÓN 4: LOGOS DE MARCAS ACTUALIZADOS --- */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto bg-[#0A1628]/30 border border-[#1E3A5F] rounded-3xl p-10 mt-20 backdrop-blur-sm text-center">
          <span className="text-gray-400 font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-12 block">
            Equipos de Alta Ingeniería Respaldados por líderes mundiales
          </span>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-16 md:gap-24">
            
            {/* Logo Dahua */}
            <div className="w-48 md:w-56 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img src={logoDahua} alt="Dahua Technology" className="w-full h-auto object-contain" />
            </div>
            
            {/* Divisor visual */}
            <div className="h-12 w-px bg-gray-700 hidden sm:block"></div>
            
            {/* Logo Hikvision */}
            <div className="w-48 md:w-56 filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300">
                <img src={logoHikvision} alt="Hikvision" className="w-full h-auto object-contain" />
            </div>
          </div>

          <p className="text-gray-500 text-[10px] md:text-xs font-light mt-12 max-w-xl mx-auto leading-relaxed uppercase tracking-widest">
            Sistemas abiertos y escalables garantizados por Dahua Technology y Hikvision Digital Technology.
          </p>
        </div>

      </main>

      {/* --- SECCIÓN 5: CTA FINAL --- */}
      <section className="relative z-10 w-full bg-[#0778DE] py-16 md:py-20 mt-16 shadow-[0_0_50px_rgba(7,120,222,0.3)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">¿Listo para reducir cuotas?</h2>
          <a 
            href="https://wa.me/573024156428?text=Hola,%20quisiera%20agendar%20un%20diagnóstico%20operativo%20y%20estudio%20de%20ahorro%20gratuito%20para%20mi%20edificio"
            target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] uppercase tracking-widest text-sm md:text-base"
          >
            📊 Solicitar Estudio de Ahorro Gratuito
          </a>
        </div>
      </section>

      <div className="relative z-10 text-center py-6 bg-[#020507]">
        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-700">Nexora Smart Systems S.A.S - 2024</p>
      </div>

    </div>
  );
}

export default DetalleEdificios;