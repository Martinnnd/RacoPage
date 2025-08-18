import ProductCard from "./ProductCard";

type Variant = "home" | "minimal";

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

const Products: React.FC<ProductsProps> = ({ showTitle = false, variant = "listing" }) => {
  const isHome = variant === "home";

  /** Clases del contenedor (ancho) */
  const containerClasses = isHome
    ? "relative mx-auto w-full max-w-[1900px]"
    : "relative mx-auto w-full max-w-[1750px]"; // más ancho para catálogo

  /** Clases del grid */
  const gridClasses = isHome
    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    : // catálogo: 2→3→4→5 columnas con separaciones verticales aireadas
      "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-16";

  if (isHome) {
    return (
      <section
        className="relative px-4 py-10"
        style={{
          // si querés volver a activar el fondo, descomentá
          // backgroundImage: "url('/heroTalles.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0  backdrop-blur-sm" />
        <div className={containerClasses}>
          {showTitle && (
            <h2 className="font-jakarta text-5xl font-extrabold text-center my-6 mb-16 relative neon-title">
              NEW DROP
            </h2>
          )}

          <div className={gridClasses}>
            {products.map((p) => (
              <ProductCard key={p.id} {...p} variant="default" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /** Variante listing (catálogo minimal) */
  return (
    <section className="px-4 md:px-8 lg:px-10 py-10">
      <div className={containerClasses}>
        {showTitle && (
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px] font-semibold tracking-wide">NEW ARRIVALS</h2>
            <button className="text-sm underline underline-offset-4 hover:opacity-70">
              VER TODO
            </button>
          </div>
        )}

        <div className={gridClasses}>
          {products.map((p, i) => (
            <ProductCard
              key={p.id + i}
              {...p}
              variant="minimal"       // 👈 estilo catálogo
              badge={i < 8 ? "NEW IN" : undefined} // opcional: marcar los primeros como "NEW IN"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
