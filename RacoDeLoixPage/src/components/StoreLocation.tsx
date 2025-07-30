import React from "react";

const StoreLocation: React.FC = () => {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/storeLocation.png" // 🔥 Reemplaza con la ruta correcta de tu imagen
        alt="Raco de Loix Palermo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔥 Overlay gradiente negro SOLO abajo */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Contenido */}
      <div className="absolute bottom-10 left-10 text-white max-w-lg z-10">
        <p className="text-xs uppercase mb-2">FITZ ROY 1489, PALERMO</p>
        <h2 className="text-3xl font-bold mb-4">RACO DE LOIX STORE</h2>

        <div className="flex gap-4">
          <a
            href="https://maps.google.com/?q=Fitz+Roy+1489+Palermo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition"
          >
            Ir Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
