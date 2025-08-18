import React from "react";
import { Link } from "react-router-dom";

type CardVariant = "default" | "minimal";

interface ProductCardProps {
  id: string;                 // para redirección
  title: string;
  price: string;
  transferPrice: string;
  installments: string;
  imageUrl: string;
  hoverImageUrl?: string;
  outOfStock?: boolean;
  isNew?: boolean;            // opcional (si lo querés seguir usando)
  variant?: CardVariant;      // 👈 NUEVO
  badge?: string;             // 👈 NUEVO (ej: "NEW IN")
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
  isNew = false,
  variant = "default",
  badge,
}) => {
  const isMinimal = variant === "minimal";

  return (
    <Link to={`/producto/${id}`}>
      <div
        className={
          isMinimal
            ? // estilo catálogo (minimal)
              "w-full"
            : // estilo card clásico (default)
              "w-full max-w-sm rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        }
      >
        {/* Imagen */}
        <div
          className={
            isMinimal
              ? "relative group aspect-[4/5] overflow-hidden rounded-md bg-white"
              : "relative group h-[480px] overflow-hidden"
          }
        >
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
          />

          {hoverImageUrl && (
            <img
              src={hoverImageUrl}
              alt={`${title} - Hover`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100 scale-105"
            />
          )}

          {/* Etiquetas */}
          {outOfStock && (
            <span className="absolute top-3 left-3 rounded-xl bg-black text-white text-xs px-3 py-1 uppercase z-10 shadow-md">
              Sin stock
            </span>
          )}

          {/* Badge “NEW IN” (u otro texto) sólo si no está sin stock */}
          {badge && !outOfStock && (
            <span
              className={
                isMinimal
                  ? "absolute top-3 left-3 rounded-md bg-black text-white text-[11px] px-2 py-1 uppercase z-10"
                  : "absolute top-3 right-3 rounded-xl bg-green-600 text-white text-xs px-3 py-1 uppercase z-10 shadow-md"
              }
            >
              {badge}
            </span>
          )}

          {/* Por compatibilidad si venías usando isNew */}
          {isNew && !outOfStock && !badge && (
            <span className="absolute top-3 right-3 rounded-xl bg-green-600 text-white text-xs px-3 py-1 uppercase z-10 shadow-md">
              Nuevo
            </span>
          )}
        </div>

        {/* Información */}
        {isMinimal ? (
          // 📌 Layout tipo catálogo
          <div className="mt-2 px-1">
            <h3 className="text-[13px] font-medium text-gray-900 truncate">
              {title}
            </h3>
            <p className="text-[12px] text-gray-700 mt-1">{price}</p>
          </div>
        ) : (
          // 📌 Layout clásico con toda la info
          <div className="bg-white mt-3 px-4 py-3 text-center">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {title}
            </h3>
            <p className="text-lg font-bold text-black mt-1">{price}</p>
            <p className="text-sm text-gray-600">{transferPrice}</p>
            <p className="text-sm text-gray-600">{installments}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
