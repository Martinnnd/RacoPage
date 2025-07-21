import React, { useState } from "react";

interface ProductCardProps {
  title: string;
  price: string;
  transferPrice: string;
  installments: string;
  imageUrl: string;
  hoverImageUrl?: string;
  outOfStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  transferPrice,
  installments,
  imageUrl,
  hoverImageUrl,
  outOfStock = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl}
          alt={title}
          className="w-full object-cover transition-all duration-300"
        />
        {outOfStock && (
          <span className="absolute top-2 left-2 rounded-2xl bg-black text-white text-xs px-2 py-1 uppercase">
            Sin stock
          </span>
        )}
      </div>
      <div className="mt-3 px-3 py-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm font-bold text-black">{price}</p>
        <p className="text-sm text-gray-600">{transferPrice}</p>
        <p className="text-sm text-gray-600">{installments}</p>
      </div>
    </div>
  );
};

export default ProductCard;
