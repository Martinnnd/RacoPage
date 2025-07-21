import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-8 justify-center max-w-7xl mx-auto">
      <ProductCard
        title="BUZO RACO ESS (Crema)"
        price="$94.900,00"
        transferPrice="$80.665,00 con Transferencia"
        installments="6 cuotas sin interés de $15.816,47"
        imageUrl="/buzo.png"
        hoverImageUrl="/buzoBack.jpg"
      />
      <ProductCard
        title="REMERA LAYERED SLEEVE BORDO"
        price="$49.900,00"
        transferPrice="$42.415,00 con Transferencia"
        installments="6 cuotas sin interés de $8.316,67"
        imageUrl="/remera.jpeg"
        outOfStock={true}
        hoverImageUrl="/remeraBack.jpeg"
      />
      <ProductCard
        title="JOGGING BAGGY CREAM"
        price="$79.900,00"
        transferPrice="$67.915,00 con Transferencia"
        installments="6 cuotas sin interés de $13.316,67"
        imageUrl="/jogging.jpeg"
        hoverImageUrl="/joggingBack.jpg"
      />
    </div>
  );
};

export default Products;
