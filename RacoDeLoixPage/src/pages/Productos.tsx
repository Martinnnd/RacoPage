import Filters from "../components/Filters";
import Products from "../components/Product";

export default function Productos() {
  return (
    <div className="flex px-4 md:px-8 mt-16 gap-8">
      {/* Columna de filtros */}
      <div className="w-1/5 ">
        <Filters />
      </div>

      {/* Columna de productos */}
      <div className="w-4/5">
        <Products />
      </div>
    </div>
  );
}

