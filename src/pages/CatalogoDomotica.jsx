import { useState } from "react";
import { Link } from "react-router-dom";

//Importa las fotos personalizadas
import personaliza1 from "../assets/personaliza1.png"
import personaliza2 from "../assets/personaliza2.png"
import personaliza3 from "../assets/personaliza3.png"
import personaliza4 from "../assets/personaliza4.png"



// Importa tu fondo base
import baseFondo from "../assets/base.png";

// Aquí importarás tus 12 imágenes reales
import combo1 from "../assets/combo1.png";
import combo2 from "../assets/combo2.png";
import combo3 from "../assets/combo3.png";
import combo4 from "../assets/combo4.png";
import combo5 from "../assets/combo5.png";
import combo6 from "../assets/combo6.png";
import combo7 from "../assets/combo7.png";
import combo8 from "../assets/combo8.png";
import combo9 from "../assets/combo9.png";
import combo10 from "../assets/combo10.png";

function CatalogoDomotica() {
  // 1. ESTADO DEL FILTRO: 'todos' es el valor inicial
  const [filtroActivo, setFiltroActivo] = useState("todos");

  // 2. BASE DE DATOS DE TU CATÁLOGO
  // Aquí pondrás tus 12 combos. La clave es la propiedad "categoria".
  const productos = [
    {
      id: 1,
      categoria: "1-alcoba",
      titulo: "Combo Nexora ONE",
      precio: "$790.000",
      // img: combo1, (Descomenta esto cuando tengas la imagen)
      img: combo1, // Imagen de prueba
      specs: [
        "Automatiza el espacio que mas desees.",
        "Controla hasta 3 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "4 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."

      ]
    },
    {
      id: 2,
      categoria: "1-alcoba",
      titulo: "Combo Nexora Start Apartamento 1 Alcoba",
      precio: "$999.000",
      img: combo2,
      specs: [
        "Automatiza hasta 4 espacios.",
        "Controla hasta 5 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "NO hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 3,
      categoria: "1-alcoba",
      titulo: "Combo Nexora Nexus Apartamento 1 Alcoba",
      precio: "$1.750.000",
      img: combo5,
      specs: [
        "Automatiza hasta 4 espacios.",
        "Controla hasta 5 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 4,
      categoria: "1-alcoba",
      titulo: "Combo Nexora Infinity Apartamento 1 Alcoba",
      precio: "$2.789.000",
      img: combo8,
      specs: [
        "Automatiza hasta 4 espacios.",
        "Controla hasta 5 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "2 Camaras IP internas",
        "1 Camara IP externa",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 5,
      categoria: "2-alcobas",
      titulo: "Combo Nexora Start Apartamento 2 Alcobas",
      precio: "$1.189.000",
      img: combo3,
      specs: [
        "Automatiza hasta 5 espacios.",
        "Controla hasta 7 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "NO hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 6,
      categoria: "2-alcobas",
      titulo: "Combo Nexora Nexus Apartamento 2 Alcobas",
      precio: "$2.249.000",
      img: combo6,
      specs: [
        "Automatiza hasta 5 espacios.",
        "Controla hasta 7 luces.",
        "Sensor Magnetico para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 7,
      categoria: "2-alcobas",
      titulo: "Combo Nexora Infinity Apartamento 2 Alcobas",
      precio: "$3.799.000",
      img: combo9,
      specs: [
        "Automatiza hasta 5 espacios.",
        "Controla hasta 7 luces.",
        "2 Sensores Magneticos para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "4 Camaras IP internas",
        "1 Camara IP externa",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 8,
      categoria: "3-alcobas",
      titulo: "Combo Nexora Start Apartamento 3 Alcobas",
      precio: "$1.559.000",
      img: combo4,
      specs: [
        "Automatiza hasta 6 espacios.",
        "Controla hasta 10 luces.",
        "2 Sensores Magneticos para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "NO hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 9,
      categoria: "3-alcobas",
      titulo: "Combo Nexora Nexus Apartamento 3 Alcobas",
      precio: "$3.079.000",
      img: combo7,
      specs: [
        "Automatiza hasta 6 espacios.",
        "Controla hasta 10 luces.",
        "2 Sensores Magneticos para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    {
      id: 10,
      categoria: "3-alcobas",
      titulo: "Combo Nexora Infinity Apartamento 3 Alcobas",
      precio: "$4.579.000",
      img: combo10,
      specs: [
        "Automatiza hasta 6 espacios.",
        "Controla hasta 10 luces.",
        "3 Sensores Magneticos para puertas o ventanas.",
        "1 Asistente de voz (Alexa/Google).",
        "5 escenas personalizadas(Modo cine, Modo visita, Modo descanso, Modo seguro, etc.",
        "2 Enchufes inteligentes",
        "4 Camaras IP internas",
        "1 Camara IP externa",
        "Hay cambios fisicos en los interruptores",
        "Capacitación inicial de funcionamiento.",
        "Acompañamiento virtual por 1 mes.",
        "Instalación profesional",
        "1 año de garantia en equipos.",
        "6 meses de garantia en instalacion."
      ]
    },
    // ... Puedes agregar las otras 9 imágenes siguiendo este mismo formato
  ];

  // 3. LÓGICA DE FILTRADO
  // Si el filtro es "todos", muestra todo. Si no, filtra por la categoría elegida.
  const productosFiltrados = filtroActivo === "todos" 
    ? productos 
    : productos.filter(producto => producto.categoria === filtroActivo);

  return (
    <div className="relative w-full min-h-screen bg-[#020507] text-white overflow-x-hidden flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* FONDO */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <div className="w-full h-full" style={{ backgroundImage: `url(${baseFondo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="w-full h-full bg-gradient-to-b from-[#020507]/95 via-[#020507]/80 to-[#020507]/95"></div>
        </div>
      </div>

      {/* MENÚ SUPERIOR BÁSICO PARA REGRESAR */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 max-w-[1600px] mx-auto w-full">
        <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-semibold">
          ← Volver a Servicios
        </Link>
      </nav>

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-8 flex-grow">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0778DE] mb-4 tracking-wide uppercase">
            Catálogo de Domótica
          </h1>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Selecciona el tipo de espacio que deseas automatizar para ver nuestras soluciones diseñadas a medida.
          </p>
        </div>

        {/* 4. BOTONES DE FILTRO */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFiltroActivo("todos")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "todos" ? "bg-[#0778DE] text-white" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFiltroActivo("1-alcoba")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "1-alcoba" ? "bg-[#0778DE] text-white" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            Apto 1 Alcoba
          </button>
          <button 
            onClick={() => setFiltroActivo("2-alcobas")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "2-alcobas" ? "bg-[#0778DE] text-white" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            Apto 2 Alcobas
          </button>
          <button 
            onClick={() => setFiltroActivo("3-alcobas")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "3-alcobas" ? "bg-[#0778DE] text-white" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            Apto 3 Alcobas
          </button>
          {/* BOTÓN PERSONALIZA */}
          <button 
            onClick={() => setFiltroActivo("personaliza")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border-2 uppercase ${filtroActivo === "personaliza" ? "bg-white text-black border-white shadow-[0_0_15px_#fff]" : "border-[#5EDEF7] text-[#5EDEF7] hover:bg-[#5EDEF7] hover:text-black"}`}
          >
            ✨ Personaliza tu combo
          </button>
        </div>

        {/* GRILLA DE RESULTADOS */}
        <div className="flex flex-col gap-8">
          
          {/* VISTA PARA PERSONALIZA TU COMBO */}
          {filtroActivo === "personaliza" ? (
            <div className="bg-gradient-to-br from-[#0A1628] to-[#020507] border-2 border-dashed border-[#5EDEF7] rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase">¿Tienes un proyecto especial?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light">
                Sabemos que cada hogar es único. Si buscas una automatización a medida para casas, locales comerciales o requerimientos específicos, nuestros ingenieros diseñarán el combo perfecto para ti.
              </p>
              
              {/* Aquí podrías poner una galería de fotos de equipos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                
                {/* Foto 1 */}
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img 
                    src={personaliza1} 
                    alt="Proyecto personalizado 1" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                {/* Foto 2 */}
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img 
                    src={personaliza2} 
                    alt="Proyecto personalizado 2" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                {/* Foto 3 */}
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img 
                    src={personaliza3} 
                    alt="Proyecto personalizado 3" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                {/* Foto 4 */}
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img 
                    src={personaliza4} 
                    alt="Proyecto personalizado 4" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>

              </div>

              <a 
                href="https://wa.me/573024156428?text=Hola,%20quisiera%20personalizar%20un%20combo%20de%20domótica%20según%20mis%20necesidades"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#5EDEF7] text-black font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(94,222,247,0.5)] uppercase tracking-widest"
              >
                <span className="text-2xl">⚡</span> ¡Habla con un Ingeniero!
              </a>
            </div>
          ) : (
            // VISTA DE COMBOS NORMALES
            productosFiltrados.map((item) => (
              <div key={item.id} className="bg-[#0A1628]/60 backdrop-blur-md border border-[#1E3A5F] rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-[#0778DE] transition-all duration-500 group">
                
                <div className="w-full md:w-2/5 h-72 md:h-auto bg-black/40 shrink-0 p-6 flex items-center justify-center overflow-hidden">
                  <img src={item.img} alt={item.titulo} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="p-8 flex flex-col justify-center flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#5EDEF7] transition-colors">{item.titulo}</h2>
                    <span className="px-3 py-1 bg-[#0778DE]/20 text-[#5EDEF7] text-[10px] font-black rounded-full uppercase tracking-tighter">
                      {item.categoria.replace("-", " ")}
                    </span>
                  </div>
                  
                  {/* TÍTULO DE ESPECIFICACIONES MÁS GRANDE */}
                  <h3 className="text-[#0778DE] font-black text-sm md:text-base uppercase tracking-widest mb-4">
                    Especificaciones del Pack:
                  </h3>
                  
                  {/* TEXTO DE LA LISTA MÁS GRANDE Y LEGIBLE */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-200 text-sm md:text-base font-light">
                        <span className="text-[#0778DE] font-bold">›</span> {spec}
                      </li>
                    ))}
                  </ul>

                  {/* CONTENEDOR DEL BOTÓN Y EL PRECIO (LADO A LADO) */}
                  <div className="mt-auto flex flex-col md:flex-row items-start md:items-center gap-6">
                    <a 
                      href={`https://wa.me/573024156428?text=Hola,%20me%20interesa%20el%20${item.titulo}%20por%20un%20valor%20de%20${item.precio}`}
                      target="_blank" rel="noreferrer"
                      className="px-10 py-4 bg-[#0778DE] text-white font-black rounded-xl hover:bg-[#0666be] hover:shadow-[0_10px_20px_rgba(7,120,222,0.3)] transition-all flex items-center gap-3 uppercase text-xs md:text-sm tracking-widest shrink-0"
                    >
                      🚀 ¡Lo quiero ahora!
                    </a>
                    
                    {/* PRECIO MÁS GRANDE AL LADO DEL BOTÓN */}
                    {/* Contenedor para el precio: ocupa el espacio restante y centra el texto */}
                    <div className="flex-grow text-center md:text-right md:pr-4"> 
                        <div className="text-white text-3xl md:text-4xl font-black tracking-tight inline-block">
                        {item.precio}
                        </div>
                    </div>
                    </div>

                </div>
              </div>
            ))
          )}

          {/* Mensaje de seguridad */}
          <div className="text-center mt-12 opacity-40">
            <p className="text-[10px] uppercase tracking-widest font-bold">Nexora Smart Systems S.A.S - 2024 - Todos los derechos reservados</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default CatalogoDomotica;    