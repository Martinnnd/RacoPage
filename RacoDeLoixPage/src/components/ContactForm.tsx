import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-white">
      {/* Título y descripción */}
      <h2 className="text-2xl font-bold mb-2 tracking-wide">CONTACTO</h2>
      <p className="text-gray-700 text-center max-w-lg mb-1">
        Comunicate con nosotros vía mail o WhatsApp y te daremos una respuesta lo más rápida posible.
        Siempre atentos a todas tus necesidades. <br /> 
        <span className="font-semibold">Atte. RACO DE LOIX</span>
      </p>
      <p className="text-sm text-gray-600 mb-6">Te responderemos lo antes posible.</p>

      {/* Datos de contacto */}
      <div className="text-center mb-6">
        <p className="font-medium">📞 11 3491 4584 / +54 11 3491 4584</p>
        <p className="font-medium">📧 racodeloix2020@gmail.com</p>
        <p className="font-medium">📍 Fitz Roy 1489, Palermo</p>
      </div>

      {/* Formulario */}
      <form className="w-full max-w-xl">
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Nombre"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Mensaje"
          rows={5}
          className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded font-semibold tracking-wider hover:bg-gray-900 transition"
        >
          ENVIAR MENSAJE
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
