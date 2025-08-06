import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/productsData";
import ProductSlider from "../components/ProductSlider";
import SizeGuide from "../components/SizeGuide"; // ✅ Importa la guía de talles

const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false); // ✅ estado para modal

  if (!product) return <div className="p-10">Producto no encontrado</div>;

  return (
    <div className="mx-auto p-4 mt-20 relative">
      
      {/* ✅ SECCIÓN DETALLE PRODUCTO */}
      <div className="flex flex-col lg:flex-row gap-x-24 mb-16">
        
        {/* 📸 CONTENEDOR IMÁGENES */}
        <div className="flex-[3] flex gap-5">
          <div className="flex flex-col gap-3 w-48">
            {product.images.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setCurrentIndex(i)}
                className={`w-48 h-48 object-cover rounded-md cursor-pointer border-2 ${
                  currentIndex === i ? "border-black" : "border-transparent"
                } hover:opacity-80 transition`}
              />
            ))}
          </div>

          <div className="flex-1 flex justify-start items-center">
            <img
              src={product.images[currentIndex]}
              alt={product.title}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 📝 INFORMACIÓN DEL PRODUCTO */}
        <div className="flex-[2] flex flex-col justify-start lg:pl-10 mr-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-2xl font-semibold mb-1">{product.price}</p>
          <p className="text-gray-600 text-lg mb-1">{product.transferPrice}</p>
          <p className="text-sm text-gray-500 mb-1">Precio sin impuestos: {product.priceWithoutTaxes}</p>
          <p className="text-sm text-gray-500 mb-4">{product.installments}</p>

          {product.shipping && (
            <p className="text-sm text-green-700 font-medium mb-6">{product.shipping}</p>
          )}

          {/* 🔹 Talles */}
          <h3 className="font-semibold mb-2">Talles disponibles:</h3>
          <div className="flex gap-3 mb-3">
            {product.sizes.map((sizeObj: any) => (
              <button
                key={sizeObj.size}
                className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
              >
                {sizeObj.size}
              </button>
            ))}
          </div>

          {/* ✅ Botón Guía de Talles */}
          <button
            onClick={() => setShowSizeGuide(true)}
            className="flex items-center gap-2 text-gray-700 mb-6 hover:text-gray-400 transition cursor-pointer"
          >
            📏 Guía de talles
          </button>

          <button className="w-full bg-black text-white py-4 uppercase font-bold tracking-wider rounded-xl hover:bg-gray-800 transition">
            Agregar al carrito
          </button>

          <ul className="text-sm text-gray-700 space-y-1 mb-6 mt-6">
            {product.sizes.map((s: any) => (
              <li key={s.size}>
                <strong>{s.size}:</strong> {s.dimensions} {s.note && <em>({s.note})</em>}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
          <p className="italic text-gray-600 mb-4">{product.fit}</p>

          {product.extras?.uniqueDesign && (
            <p className="text-gray-800 font-medium mb-4">{product.extras.uniqueDesign}</p>
          )}

          {product.stockNote && (
            <p className="text-red-600 text-sm mb-4">{product.stockNote}</p>
          )}
        </div>
      </div>

      {/* ✅ SECCIÓN PRODUCT SLIDER */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">🔥 También te puede interesar</h2>
        <ProductSlider />
      </div>

      {/* ✅ MODAL DE GUÍA DE TALLES */}
      {showSizeGuide && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex justify-center items-start pt-10 z-50">
          <div className="bg-white w-11/12 lg:w-3/4 h-[80vh] overflow-y-auto p-6 rounded-lg shadow-xl relative">
            
            {/* Botón cerrar */}
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
            >
              ✕
            </button>
            <SizeGuide /> {/* ✅ Aquí insertamos tu componente existente */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
