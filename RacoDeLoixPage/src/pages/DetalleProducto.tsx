import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/productsData";

const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <div className="p-10">Producto no encontrado</div>;

  return (
    <div className="mx-auto p-6 mt-16 flex flex-col lg:flex-row gap-10">
      
      {/* 📸 CONTENEDOR DE IMAGENES (IZQUIERDA) */}
      <div className="flex-[2] flex gap-4">
        
        {/* Miniaturas verticales */}
        <div className="flex flex-col gap-3 w-24">
          {product.images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                currentIndex === i ? "border-black" : "border-transparent"
              } hover:opacity-80 transition`}
            />
          ))}
        </div>

        {/* Imagen principal con altura controlada */}
        <div className="flex-1 flex justify-center items-center overflow-hidden rounded-lg shadow-md max-h-[700px]">
          <img
            src={product.images[currentIndex]}
            alt={product.title}
            className="max-h-[1000px] w-full object-center rounded-lg"
          />
        </div>
      </div>

      {/* 📝 INFORMACIÓN (DERECHA) */}
      <div className="flex-[1] flex flex-col justify-start pl-10">
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
              className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
            >
              {sizeObj.size}
            </button>
          ))}
        </div>

        <ul className="text-sm text-gray-700 space-y-1 mb-6">
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

        <button className="w-full bg-black text-white py-4 uppercase font-bold tracking-wider rounded-xl hover:bg-gray-800 transition">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
