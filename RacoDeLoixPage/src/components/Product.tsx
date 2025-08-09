import ProductCard from "./ProductCard";

type Variant = "home" | "listing";

const products = [
  {
    id: "buzo-ess-crema",
    title: "BUZO RACO ESS (Crema)",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,47",
    imageUrl: "/buzo.png",
    hoverImageUrl: "/buzoBack.jpg",
  },
  {
    id: "remera-layered-bordo",
    title: "REMERA LAYERED SLEEVE BORDO",
    price: "$49.900,00",
    transferPrice: "$42.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $8.316,67",
    imageUrl: "/remera.jpeg",
    hoverImageUrl: "/remeraBack.jpeg",
    outOfStock: true,
  },
  {
    id: "jogging-cream",
    title: "JOGGING BAGGY CREAM",
    price: "$79.900,00",
    transferPrice: "$67.915,00 con Transferencia",
    installments: "6 cuotas sin interés de $13.316,67",
    imageUrl: "/jogging.jpeg",
    hoverImageUrl: "/joggingBack.jpg",
  },
  {
    id: "non-stitch-zip-hood",
    title: "NON-STITCH ZIP HOOD (Boxy Black)",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/buzoBlack.jpeg",
    hoverImageUrl: "/buzoBlackBack.jpg",
  },
  {
    id: "jogging-baggy-black",
    title: "JOGGING BAGGY BLACK",
    price: "$79.900,00",
    transferPrice: "$67.915,00 con Transferencia",
    installments: "6 cuotas sin interés de $13.316,67",
    imageUrl: "/joggingBlack.jpeg",
    hoverImageUrl: "/joggingBlackBack.jpeg",
  },
  {
    id: "campera-tracksuit-green",
    title: "CAMPERA TRACKSUIT GREEN",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/zipVerde.jpeg",
    hoverImageUrl: "/zipVerdeBack.jpg",
  },
  {
    id: "pantalon-tracksuit-green",
    title: "PANTALON TRACKSUIT GREEN",
    price: "$84.900,00",
    transferPrice: "$72.165,00 con Transferencia",
    installments: "6 cuotas sin interés de $14.150,00",
    imageUrl: "/joggingVerde.jpeg",
    hoverImageUrl: "/joggingVerdeBack.jpg"
  },
  {
    id: "campera-denin-puff",
    title: "CAMPERA DENIM PUFF",
    price: "$189.900,00",
    transferPrice: "$161.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $31.650,00",
    imageUrl: "/puffer.jpeg",
    hoverImageUrl: "/pufferBack.jpeg",
  },
  {
    id: "campera-tracksuit-green",
    title: "CAMPERA TRACKSUIT GREEN",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/zipVerde.jpeg",
    hoverImageUrl: "/zipVerdeBack.jpg",
  },
  {
    id: "remera-layered-bordo",
    title: "REMERA LAYERED SLEEVE BORDO",
    price: "$49.900,00",
    transferPrice: "$42.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $8.316,67",
    imageUrl: "/remera.jpeg",
    hoverImageUrl: "/remeraBack.jpeg",
    outOfStock: true,
  },
  {
    id: "remera-layered-bordo",
    title: "REMERA LAYERED SLEEVE BORDO",
    price: "$49.900,00",
    transferPrice: "$42.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $8.316,67",
    imageUrl: "/remera.jpeg",
    hoverImageUrl: "/remeraBack.jpeg",
    outOfStock: true,
  },
  {
    id: "remera-layered-bordo",
    title: "REMERA LAYERED SLEEVE BORDO",
    price: "$49.900,00",
    transferPrice: "$42.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $8.316,67",
    imageUrl: "/remera.jpeg",
    hoverImageUrl: "/remeraBack.jpeg",
    outOfStock: true,
  },
];

interface ProductsProps {
  showTitle?: boolean;
  /** "home" = 4 columnas + fondo; "listing" = 3 columnas sin fondo */
  variant?: Variant;
}

// /** Cinta que se “full-bleed” a todo el ancho de la pantalla */
// const TapeStrip = () => (
//   <div
//     className="
//       relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
//       w-screen h-6 md:h-8 lg:h-10 overflow-hidden mb-8
//     "
//   >
//     <div className="diagonal-tape w-[200%] h-full" />
//   </div>
// );

// const Products: React.FC<ProductsProps> = ({ showTitle = false }) => {
//   return (
//     <section
//       className="relative px-4 py-10"
//       style={{
//         backgroundImage: "url('/heroTalles.jpg')", // Cambiá la ruta a la imagen que quieras
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Overlay oscuro para dar contraste */}
//       <div className="absolute inset-0 bg-black/20" />

//       <div className="relative max-w-7xl mx-auto">
//         {showTitle && (
//           <>
//             {/* <TapeStrip /> */}
//             <h2 className="font-jakarta text-5xl font-extrabold text-center my-6 neon-text">
//               New Drop
//             </h2>
//             {/* <TapeStrip /> */}
//           </>
//         )}

//         {/* Grid de productos */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
//           {products.map((product) => (
//             <ProductCard key={product.id} {...product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const Products: React.FC<ProductsProps> = ({ showTitle = false, variant = "listing" }) => {
  const isHome = variant === "home";

  // clases del grid según la variante
  const gridClasses = isHome
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8";

  // contenedor más ancho en home
  const containerClasses = isHome
    ? "relative mx-auto w-full max-w-[1600px]" // usa más ancho pero no full
    : "relative mx-auto w-full max-w-7xl";     // ancho estándar

  // Wrapper: con imagen de fondo SÓLO en Home
  if (isHome) {
    return (
      <section
        className="relative px-4 py-10"
        style={{
          backgroundImage: "url('/heroTalles.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        <div className={containerClasses}>
          {showTitle && (
            <h2 className="font-jakarta text-5xl font-extrabold text-center my-6 mb-16 relative neon-title">
              NEW DROP
            </h2>
          )}

          <div className={gridClasses}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variante "listing" (Productos): sin fondo y 3 columnas
  return (
    <section className="px-4 py-10">
      <div className={containerClasses}>
        {showTitle && (
          <h2 className="font-jakarta text-5xl font-extrabold text-center mb-12 neon-text">
            New Drop
          </h2>
        )}

        <div className={gridClasses}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
