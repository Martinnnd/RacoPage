import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string; // 🔥 agregamos id para redirección
  title: string;
  price: string;
  transferPrice: string;
  installments: string;
  imageUrl: string;
  hoverImageUrl?: string;
  outOfStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  transferPrice,
  installments,
  imageUrl,
  hoverImageUrl,
  outOfStock = false,
}) => {
  return (
    <Link to={`/producto/${id}`}>
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md cursor-pointer">
        <div className="relative group h-[500px]">
          {/* Imagen principal */}
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />

          {/* Imagen al hacer hover */}
          {hoverImageUrl && (
            <img
              src={hoverImageUrl}
              alt={`${title} - Hover`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
            />
          )}

          {/* Etiqueta sin stock */}
          {outOfStock && (
            <span className="absolute top-2 left-2 rounded-2xl bg-black text-white text-xs px-2 py-1 uppercase z-10">
              Sin stock
            </span>
          )}
        </div>

        {/* Información del producto */}
        <div className="mt-3 px-3 py-2">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm font-bold text-black">{price}</p>
          <p className="text-sm text-gray-600">{transferPrice}</p>
          <p className="text-sm text-gray-600">{installments}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
