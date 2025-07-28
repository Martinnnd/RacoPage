import ProductCard from "./ProductCard";

const products = [
  {
    title: "BUZO RACO ESS (Crema)",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,47",
    imageUrl: "/buzo.png",
    hoverImageUrl: "/buzoBack.jpg",
  },
  {
    title: "REMERA LAYERED SLEEVE BORDO",
    price: "$49.900,00",
    transferPrice: "$42.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $8.316,67",
    imageUrl: "/remera.jpeg",
    hoverImageUrl: "/remeraBack.jpeg",
    outOfStock: true,
  },
  {
    title: "JOGGING BAGGY CREAM",
    price: "$79.900,00",
    transferPrice: "$67.915,00 con Transferencia",
    installments: "6 cuotas sin interés de $13.316,67",
    imageUrl: "/jogging.jpeg",
    hoverImageUrl: "/joggingBack.jpg",
  },
  {
    title: "NON-STITCH ZIP HOOD (Boxy Black)",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/buzoBlack.jpeg",
    hoverImageUrl: "/buzoBlackBack.jpg",
  },
  {
    title: "JOGGING BAGGY BLACK",
    price: "$79.900,00",
    transferPrice: "$67.915,00 con Transferencia",
    installments: "6 cuotas sin interés de $13.316,67",
    imageUrl: "/joggingBlack.jpeg",
    hoverImageUrl: "/joggingBlackBack.jpeg",
  },
  {
    title: "CAMPERA TRACKSUIT GREEN",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/zipVerde.jpeg",
    hoverImageUrl: "/zipVerdeBack.jpg",
  },
  {
    title: "PANTALON TRACKSUIT GREEN",
    price: "$84.900,00",
    transferPrice: "$72.165,00 con Transferencia",
    installments: "6 cuotas sin interés de $14.150,00",
    imageUrl: "/joggingVerde.jpeg",
    hoverImageUrl: "/joggingVerdeBack.jpg"
  },
  {
    title: "CAMPERA DENIM PUFF",
    price: "$189.900,00",
    transferPrice: "$161.415,00 con Transferencia",
    installments: "6 cuotas sin interés de $31.650,00",
    imageUrl: "/puffer.jpeg",
    hoverImageUrl: "/pufferBack.jpeg",
  },
  {
    title: "KNITWEAR (Blue)",
    price: "$94.900,00",
    transferPrice: "$80.665,00 con Transferencia",
    installments: "6 cuotas sin interés de $15.816,67",
    imageUrl: "/knitwear.png",
    hoverImageUrl: "/knitwearBack.jpeg",
  },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8 justify-center max-w-7xl mx-auto">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Products;
