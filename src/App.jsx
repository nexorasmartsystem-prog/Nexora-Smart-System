import logo from "./assets/logo.png";

function App() {
  return (
    <div className="bg-[#0B0F14] min-h-screen text-white">

      {/* Pantalla principal */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6">

        <img
          src={logo}
          alt="Nexora Smart Systems"
          className="h-[70vh] object-contain mb-8"
        />

        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          Nexora Smart Systems
        </h1>

        <p className="mt-4 text-2xl text-[#65E7FD] text-center">
          Tecnología inteligente para un hogar conectado
        </p>

      </section>

      {/* Quiénes somos */}
      <section className="max-w-5xl mx-auto px-8 pb-24">

        <h2 className="text-4xl font-bold text-[#65E7FD] mb-8">
          Quiénes somos
        </h2>

        <p className="text-[#AAB3C0] text-lg leading-9">
          En Nexora Smart Systems transformamos hogares y espacios mediante
          soluciones tecnológicas innovadoras. Nos especializamos en
          automatización residencial, seguridad electrónica, control de acceso,
          redes y conectividad, ofreciendo proyectos personalizados con los más
          altos estándares de calidad, diseño y confiabilidad.
        </p>

      </section>

    </div>
  );
}

export default App;