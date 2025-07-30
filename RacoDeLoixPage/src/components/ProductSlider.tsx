import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ProductItem {
  name: string;
  price: string;
  image: string;
  colors?: string[];
  backInStock?: boolean;
}

const products: ProductItem[] = [
  { name: "CAMPERA DENIM PUFF", price: "$189.900,00", image: "/puffer.jpeg", },
  { name: "JOGGING BAGGY CREAM", price: "$79.900,00", image: "/jogging.jpeg", backInStock: true, colors: ["#000", "#fff", "#a5a5a5"] },
  { name: "CAMPERA TRACKSUIT GREEN", price: "$94.900,00", image: "/zipVerde.jpeg", backInStock: true },
  { name: "REMERA LAYERED SLEEVE BORDO", price: "$49.900,00", image: "/remera.jpeg", colors: ["#b30000", "#000"], backInStock: true },
  { name: "KNITWEAR (Blue)", price: "$94.900,00", image: "/knitwear.png", colors: ["#000", "#fff", "#03009e"], backInStock: true },
  { name: "BUZO RACO ESS (Crema)", price: "$94.900,00", image: "/buzo.png" },
];

const ProductSlider: React.FC = () => {
  return (
    <section className="w-full px-4 py-10">
      <p className="font-jakarta text-center text-xs mb-12 neon-red-outline">
        Best Sellers
      </p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },   // tablets
          1024: { slidesPerView: 3 },  // laptops
          1200: { slidesPerView: 4 },  // monitores grandes
          1700: { slidesPerView: 5 },  // pantallas ultra grandes
        }}
        loop={true}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md bg-white mx-auto">

              {/* Imagen del producto */}
              <div className="relative group h-[500px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Etiqueta BACK IN STOCK */}
                {product.backInStock && (
                  <span className="absolute top-2 left-2 bg-white border border-black text-xs font-bold px-2 py-1">
                    BACK IN STOCK
                  </span>
                )}
              </div>

              {/* Información del producto */}
              <div className="mt-3 px-3 py-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm font-bold">{product.price}</p>

                {/* Colores disponibles */}
                {product.colors && (
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((color, cidx) => (
                      <span
                        key={cidx}
                        className="w-4 h-4 rounded-full border border-gray-400"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
