import Hero from "../components/Hero";
import Products from "../components/Product";
import CategoryShowcase from '../components/CategoryShowcase';
import StoreLocation from '../components/StoreLocation';
import ProductGrid from '../components/ProductSlider';

const Home = () => {
  return (
    <>
      <Hero />
      <Products showTitle={true} />
      <CategoryShowcase />
      <ProductGrid />
      <StoreLocation />
    </>
  );
};

export default Home;
