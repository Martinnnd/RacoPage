import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: "url('/public/heroContact.jpg')", // 🖼️ Ruta de tu imagen
      }}
    >
      <div className="max-w-3xl mx-auto backdrop-blur-sm bg-black/50 text-white p-10 rounded-xl shadow-xl">
        {/* Título y descripción */}
        <h2 className="text-3xl font-bold mb-3 tracking-wider text-center">CONTACTO</h2>
        <p className="text-gray-300 text-center mb-2">
          Comunicate con nosotros vía mail o WhatsApp y te daremos una respuesta lo más rápida posible.
          Siempre atentos a todas tus necesidades. <br />
          <span className="font-semibold">Atte. RACO DE LOIX</span>
        </p>
        <p className="text-sm text-gray-400 text-center mb-6">
          Te responderemos lo antes posible.
        </p>

        {/* Datos de contacto */}
        <div className="text-center text-sm text-gray-300 mb-6 space-y-1">
          <p>📞 11 3491 4584 / +54 11 3491 4584</p>
          <p>📧 racodeloix2020@gmail.com</p>
          <p>📍 Fitz Roy 1489, Palermo</p>
        </div>

        {/* Formulario */}
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="flex-1 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
          />

          <textarea
            placeholder="Mensaje"
            rows={5}
            className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded font-semibold tracking-wider hover:bg-gray-100 transition"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
