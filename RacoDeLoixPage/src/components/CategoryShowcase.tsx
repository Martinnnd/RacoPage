import { useState } from "react";
import ImageCard from "./ImageCard";

const CategoryShowCase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    { imageUrl: "/newDrop.jpg", title: "NEW DROP" },
    { imageUrl: "/buzos.jpg", title: "BUZOS / ABRIGOS" },
    { imageUrl: "/pants.jpg", title: "PANTS & SHORTS" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ${
            hoveredIndex !== null && hoveredIndex !== index
              ? "grayscale opacity-90"
              : "opacity-100"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ImageCard {...cat} />
        </div>
      ))}
    </section>
  );
};

export default CategoryShowCase;
