import { useState } from "react";
import { Link } from "react-router-dom";

//Importa las fotos personalizadas
import personalizacctv1 from "../assets/personalizacctv1.png"
import personalizacctv2 from "../assets/personalizacctv2.png"
import personalizacctv3 from "../assets/personalizacctv3.png"
import personalizacctv4 from "../assets/personalizacctv4.png"

// Importa tu fondo base
import baseFondo from "../assets/base.png";

// Aquí importarás tus imágenes reales para CCTV
// Por ahora dejamos las importaciones base para que no te arroje error
import dahua_4ch from "../assets/DAHUA_4CH.png";
import dahua_8ch from "../assets/DAHUA_8CH.png";
import dahua_16ch from "../assets/DAHUA_16CH.png";
import dahua_32ch from "../assets/DAHUA_32CH.png";
import hik_4ch from "../assets/HIK_4CH.png";
import hik_8ch from "../assets/HIK_8CH.png";
import hik_16ch from "../assets/HIK_16CH.png";
import hik_32ch from "../assets/HIK_32CH.png";

function CatalogoCCTV() {
  // 1. ESTADO DEL FILTRO: 'todos' es el valor inicial
  const [filtroActivo, setFiltroActivo] = useState("todos");

  // 2. BASE DE DATOS DE TU CATÁLOGO CCTV
  // La clave es la propiedad "categoria" que conecta con los botones.
  const productos = [
    {
      id: 1,
      categoria: "4-canales",
      titulo: "Kit Dahua 4 Canales HD",
      precio: "$1.199.000",
      img: dahua_4ch, 
      specs: [
        "1 DVR Dahua de 4 Canales HD.",
        "2 Cámaras tipo Domo para interior HD.",
        "2 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 2,
      categoria: "4-canales",
      titulo: "Kit Dahua 4 Canales Full HD",
      precio: "$1.399.000",
      img: dahua_4ch, 
      specs: [
        "1 DVR Dahua de 4 Canales Full HD.",
        "2 Cámaras tipo Domo para interior Full HD.",
        "2 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 3,
      categoria: "4-canales",
      titulo: "Kit Dahua 4 Canales Full HD  con reconocimiento facial",
      precio: "$1.459.000",
      img: dahua_4ch, 
      specs: [
        "1 DVR Dahua de 4 Canales Full HD con reconocimiento facial.",
        "2 Cámaras tipo Domo para interior Full HD.",
        "2 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 4,
      categoria: "4-canales",
      titulo: "Kit Hikvision 4 Canales HD",
      precio: "$1.399.000",
      img: hik_4ch, 
      specs: [
        "1 DVR Hikvision de 4 Canales HD.",
        "2 Cámaras tipo Domo para interior HD.",
        "2 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 5,
      categoria: "4-canales",
      titulo: "Kit Hikvision 4 Canales Full HD",
      precio: "$1.769.000",
      img: hik_4ch, 
      specs: [
        "1 DVR Hikvision de 4 Canales Full HD.",
        "2 Cámaras tipo Domo para interior Full HD.",
        "2 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 6,
      categoria: "4-canales",
      titulo: "Kit Hikvision 4 Canales Full HD con reconocimiento facial",
      precio: "$1.999.000",
      img: hik_4ch, 
      specs: [
        "1 DVR Hikvision de 4 Canales Full HD con reconocimiento facial.",
        "2 Cámaras tipo Domo para interior Full HD.",
        "2 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 8 días de Grabación).",
        "4 Fuentes de poder.",
        "4 Video Balun.",
        "4 Cajas de paso",
        "25 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 25m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 7,
      categoria: "8-canales",
      titulo: "Kit Dahua 8 Canales HD",
      precio: "$2.099.000",
      img: dahua_8ch, 
      specs: [
        "1 DVR Dahua de 8 Canales HD.",
        "4 Cámaras tipo Domo para interior HD.",
        "4 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 5 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 8,
      categoria: "8-canales",
      titulo: "Kit Dahua 8 Canales Full HD",
      precio: "$2.779.000",
      img: dahua_8ch, 
      specs: [
        "1 DVR Dahua de 8 Canales Full HD.",
        "4 Cámaras tipo Domo para interior Full HD.",
        "4 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 10 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 9,
      categoria: "8-canales",
      titulo: "Kit Dahua 8 Canales Full HD  con reconocimiento facial",
      precio: "$2.889.000",
      img: dahua_8ch, 
      specs: [
        "1 DVR Dahua de 8 Canales Full HD con reconocimiento facial.",
        "4 Cámaras tipo Domo para interior Full HD.",
        "4 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 10 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 10,
      categoria: "8-canales",
      titulo: "Kit Hikvision 8 Canales HD",
      precio: "$2.399.000",
      img: hik_8ch, 
      specs: [
        "1 DVR Hikvision de 8 Canales HD.",
        "4 Cámaras tipo Domo para interior HD.",
        "4 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 500 GB (Almacena hasta 5 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 11,
      categoria: "8-canales",
      titulo: "Kit Hikvision 8 Canales Full HD",
      precio: "$3.499.000",
      img: hik_8ch, 
      specs: [
        "1 DVR Hikvision de 8 Canales Full HD.",
        "4 Cámaras tipo Domo para interior Full HD.",
        "4 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 10 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 12,
      categoria: "8-canales",
      titulo: "Kit Hikvision 8 Canales Full HD con reconocimiento facial",
      precio: "$3.899.000",
      img: hik_8ch, 
      specs: [
        "1 DVR Hikvision de 8 Canales Full HD con reconocimiento facial.",
        "4 Cámaras tipo Domo para interior Full HD.",
        "4 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 10 días de Grabación).",
        "8 Fuentes de poder.",
        "8 Video Balun.",
        "8 Cajas de paso",
        "40 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 40m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 13,
      categoria: "16-canales",
      titulo: "Kit Dahua 16 Canales HD",
      precio: "$4.199.000",
      img: dahua_16ch, 
      specs: [
        "1 DVR Dahua de 16 Canales HD.",
        "10 Cámaras tipo Domo para interior HD.",
        "6 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 6 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 14,
      categoria: "16-canales",
      titulo: "Kit Dahua 16 Canales Full HD",
      precio: "$4.999.000",
      img: dahua_16ch, 
      specs: [
        "1 DVR Dahua de 16 Canales Full HD.",
        "10 Cámaras tipo Domo para interior Full HD.",
        "6 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 4 TB (Almacena hasta 12 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 15,
      categoria: "16-canales",
      titulo: "Kit Dahua 16 Canales Full HD  con reconocimiento facial",
      precio: "$5.199.000",
      img: dahua_16ch, 
      specs: [
        "1 DVR Dahua de 16 Canales Full HD con reconocimiento facial.",
        "10 Cámaras tipo Domo para interior Full HD.",
        "6 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 4 TB (Almacena hasta 10 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 16,
      categoria: "16-canales",
      titulo: "Kit Hikvision 16 Canales HD",
      precio: "$4.899.000",
      img: hik_16ch, 
      specs: [
        "1 DVR Hikvision de 16 Canales HD.",
        "10 Cámaras tipo Domo para interior HD.",
        "6 Cámaras tipo Bala para exterior HD.",
        "1 Disco Duro de 2 TB (Almacena hasta 6 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 17,
      categoria: "16-canales",
      titulo: "Kit Hikvision 16 Canales Full HD",
      precio: "$6.399.000",
      img: hik_16ch, 
      specs: [
        "1 DVR Hikvision de 16 Canales Full HD.",
        "10 Cámaras tipo Domo para interior Full HD.",
        "6 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 4 TB (Almacena hasta 12 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 18,
      categoria: "16-canales",
      titulo: "Kit Hikvision 16 Canales Full HD con reconocimiento facial",
      precio: "$7.699.000",
      img: hik_16ch, 
      specs: [
        "1 DVR Hikvision de 16 Canales Full HD con reconocimiento facial.",
        "10 Cámaras tipo Domo para interior Full HD.",
        "6 Cámaras tipo Bala para exterior Full HD.",
        "1 Disco Duro de 4 TB (Almacena hasta 10 días de Grabación).",
        "16 Fuentes de poder.",
        "16 Video Balun.",
        "16 Cajas de paso",
        "60 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 60m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 19,
      categoria: "32-canales",
      titulo: "Kit Dahua 32 Canales HD",
      precio: "$9.199.000",
      img: dahua_32ch, 
      specs: [
        "1 DVR Dahua de 32 Canales HD.",
        "22 Cámaras tipo Domo para interior HD.",
        "10 Cámaras tipo Bala para exterior HD.",
        "2 Disco Duro de 4 TB (Almacena hasta 15 días de Grabación).",
        "32 Fuentes de poder.",
        "32 Video Balun.",
        "32 Cajas de paso",
        "300 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 300m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 20,
      categoria: "32-canales",
      titulo: "Kit Dahua 32 Canales Full HD  con reconocimiento facial",
      precio: "$10.399.000",
      img: dahua_32ch, 
      specs: [
        "1 DVR Dahua de 32 Canales Full HD con reconocimiento facial.",
        "22 Cámaras tipo Domo para interior Full HD.",
        "10 Cámaras tipo Bala para exterior Full HD.",
        "2 Disco Duro de 4 TB (Almacena hasta 15 días de Grabación).",
        "32 Fuentes de poder.",
        "32 Video Balun.",
        "32 Cajas de paso",
        "300 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 300m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 21,
      categoria: "32-canales",
      titulo: "Kit Hikvision 32 Canales HD",
      precio: "$10.599.000",
      img: hik_32ch, 
      specs: [
        "1 DVR Hikvision de 32 Canales HD.",
        "22 Cámaras tipo Domo para interior HD.",
        "10 Cámaras tipo Bala para exterior HD.",
        "2 Disco Duro de 4 TB (Almacena hasta 15 días de Grabación).",
        "32 Fuentes de poder.",
        "32 Video Balun.",
        "32 Cajas de paso",
        "300 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 300m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 22,
      categoria: "32-canales",
      titulo: "Kit Hikvision 32 Canales Full HD",
      precio: "$13.199.000",
      img: hik_32ch, 
      specs: [
        "1 DVR Hikvision de 32 Canales Full HD.",
        "22 Cámaras tipo Domo para interior Full HD.",
        "10 Cámaras tipo Bala para exterior Full HD.",
        "2 Disco Duro de 4 TB (Almacena hasta 15 días de Grabación).",
        "32 Fuentes de poder.",
        "32 Video Balun.",
        "32 Cajas de paso",
        "300 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 300m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    },
    {
      id: 23,
      categoria: "32-canales",
      titulo: "Kit Hikvision 32 Canales Full HD con reconocimiento facial",
      precio: "$15.999.000",
      img: hik_32ch, 
      specs: [
        "1 DVR Hikvision de 32 Canales Full HD con reconocimiento facial.",
        "22 Cámaras tipo Domo para interior Full HD.",
        "10 Cámaras tipo Bala para exterior Full HD.",
        "2 Disco Duro de 4 TB (Almacena hasta 15 días de Grabación).",
        "32 Fuentes de poder.",
        "32 Video Balun.",
        "32 Cajas de paso",
        "300 metros de cable UTP Cat 5e",
        "Configuración para visualización en celular (App).",
        "Instalación profesional (hasta 300m de cable sin canalización).",
        "1 año de garantía en equipos.",
        "6 meses de garantía en instalación."
      ]
    }
  ];

  // 3. LÓGICA DE FILTRADO
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
        
        {/* TÍTULO CAMBIADO A CCTV */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0778DE] mb-4 tracking-wide uppercase">
            Catálogo CCTV y Seguridad
          </h1>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Selecciona la capacidad de tu sistema de videovigilancia para proteger tu hogar o negocio con la mejor tecnología.
          </p>
        </div>

        {/* 4. BOTONES DE FILTRO (Actualizados a los canales) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFiltroActivo("todos")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "todos" ? "bg-[#0778DE] text-white shadow-[0_0_15px_#0778DE]" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFiltroActivo("4-canales")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "4-canales" ? "bg-[#0778DE] text-white shadow-[0_0_15px_#0778DE]" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            4 Canales
          </button>
          <button 
            onClick={() => setFiltroActivo("8-canales")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "8-canales" ? "bg-[#0778DE] text-white shadow-[0_0_15px_#0778DE]" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            8 Canales
          </button>
          <button 
            onClick={() => setFiltroActivo("16-canales")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "16-canales" ? "bg-[#0778DE] text-white shadow-[0_0_15px_#0778DE]" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            16 Canales
          </button>
          <button 
            onClick={() => setFiltroActivo("32-canales")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filtroActivo === "32-canales" ? "bg-[#0778DE] text-white shadow-[0_0_15px_#0778DE]" : "border border-gray-600 text-gray-400 hover:border-[#0778DE] hover:text-[#0778DE]"}`}
          >
            32 Canales
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
                Entendemos que la seguridad no es un juego. Si requieres sistemas con cámaras PTZ, reconocimiento facial, control de acceso integrado o un diseño a la medida para tu conjunto residencial o empresa, nuestros ingenieros te ayudarán.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img src={personalizacctv1} alt="Proyecto CCTV 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img src={personalizacctv2} alt="Proyecto CCTV 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img src={personalizacctv3} alt="Proyecto CCTV 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1E3A5F] hover:border-[#5EDEF7] transition-colors shadow-lg">
                  <img src={personalizacctv4} alt="Proyecto CCTV 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <a 
                href="https://wa.me/573024156428?text=Hola,%20quisiera%20asesoría%20para%20un%20proyecto%20de%20CCTV%20a%20la%20medida"
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
                  
                  <h3 className="text-[#0778DE] font-black text-sm md:text-base uppercase tracking-widest mb-4">
                    Especificaciones del Pack:
                  </h3>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-200 text-sm md:text-base font-light">
                        <span className="text-[#0778DE] font-bold">›</span> {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
                    <a 
                      href={`https://wa.me/573024156428?text=Hola,%20me%20interesa%20el%20${item.titulo}%20por%20un%20valor%20de%20${item.precio}`}
                      target="_blank" rel="noreferrer"
                      className="px-10 py-4 bg-[#0778DE] text-white font-black rounded-xl hover:bg-[#0666be] hover:shadow-[0_10px_20px_rgba(7,120,222,0.3)] transition-all flex items-center gap-3 uppercase text-xs md:text-sm tracking-widest shrink-0"
                    >
                      🚀 ¡Lo quiero ahora!
                    </a>
                    
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

export default CatalogoCCTV;