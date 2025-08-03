import { useParams } from "react-router-dom";
import { products } from "../data/productsData";

const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10">Producto no encontrado</div>;

  return (
    <div className="max-w mx-auto p-10 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* 📸 Contenedor de imágenes */}
      <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        {product.images.slice(0, 2).map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <img
              src={img}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* 📝 Información */}
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-2xl font-semibold mb-2">{product.price}</p>
        <p className="text-gray-600 text-lg mb-2">{product.transferPrice}</p>
        <p className="text-sm text-gray-500 mb-6">{product.installments}</p>

        {/* 🔹 Talles */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Talle:</h3>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Descripción */}
        <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

        {/* 🔹 Botón */}
        <button className="w-full bg-black text-white py-4 uppercase font-bold tracking-wider hover:bg-gray-800 transition">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
