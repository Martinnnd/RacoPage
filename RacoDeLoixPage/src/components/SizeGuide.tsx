// ✅ Componente genérico para cada tabla de talles
const SizeTable = ({ title, columns, rows }: { title: string; columns: string[]; rows: any[] }) => {
  return (
    <div className="p-4 w-[45%] bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, i) => (
              <th key={i} className="p-2 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell: string | number, j: number) => (
                <td key={j} className="p-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-600 mt-1">
        * Todas las medidas están expresadas en centímetros aproximados.
      </p>
    </div>
  );
};

// ✅ Datos de todas las prendas y talles
const sizeData = [
    {
        title: "Campera Denim (Jean Chocolate)",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 68, 67, 70],
            ["M", 71, 70, 74],
            ["L/XL", 74, 73, 78],
        ],
    },
    {
        title: "Polar",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 66, 61, 76],
            ["M", 68, 62, 74],
            ["L/XL", 70, 63, 78],
        ],
    },
    {
        title: "Suéter/Knitwear",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S/M", 64, 61, 76],
            ["L/XL", 66, 63, 81],
        ],
    },
    {
        title: "Pantalón Deportivo",
        columns: ["Talle", "Largo", "Cintura", "Cintura Estirada", "Ancho Pierna"],
        rows: [
            ["S", 102, 36, 53, 38],
            ["M", 104, 38, 54, 38],
            ["L", 106, 40, 56, 40],
        ],
    },
    {
        title: "Campera Deportiva",
        columns: ["Talle", "Largo", "Ancho Siza", "Manga + Hombro"],
        rows: [
            ["S", 70, 61, 84],
            ["M", 71, 63, 85],
            ["L/XL", 73, 65, 86],
        ],
    },
    {
        title: "ZIP HOOD & BUZO CREMA ESS BOXY Fit",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 60, 60, 75],
            ["M", 64, 65, 80],
            ["L/XL", 68, 70, 85],
        ],
    },
    {
        title: "Buzos MID ZIP & POLO (Boxy)",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 63, 60, 75],
            ["M", 67, 65, 80],
            ["L/XL", 70, 70, 85],
        ],
    },
    {
        title: "Jeans Baggy",
        columns: ["Talle", "Largo", "Cintura Ajustable", "Cadera", "Entrepierna"],
        rows: [
            ["S", 107, 42, 61, 37],
            ["M", 109, 43, 62, 38],
            ["L", 111, 44, 63, 39],
            ["XL", 113, 45, 64, 40],
        ],
    },
    {
        title: "Remeras y Musculosas (Sin mangas) BOXY FIT",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 66, 55, 48],
            ["M", 68, 58, 49],
            ["L/XL", 70, 61, 51],
        ],
    },
    {
        title: "Chombas (Boxy)",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 64, 56, 48],
            ["M", 67, 62, 50],
            ["L/XL", 70, 65, 52],
        ],
    },
    {
        title: "Camisa Boxy Fit",
        columns: ["Talle", "Largo", "Ancho", "Manga + Hombro"],
        rows: [
            ["S", 64, 60, 50],
            ["M", 66, 62, 52],
            ["L", 68, 65, 53],
        ],
    },
    {
        title: "Short de Baño",
        columns: ["Talle", "Largo", "Cintura", "Cintura Estirada", "Ancho Pierna"],
        rows: [
            ["S", 46, 36, 46, 36],
            ["M", 48, 37, 48, 37],
            ["L", 50, 38, 50, 38],
        ],
    },
];


// ✅ Componente principal con título
const SizeGuide = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      <p className="font-jakarta text-center text-xs mb-12 neon-red-outline">
        Guía de talles
      </p>

      {/* 🔥 Contenedor de tablas en dos columnas */}
      <div className="flex flex-wrap justify-between gap-6">
        {sizeData.map((item, i) => (
          <SizeTable key={i} title={item.title} columns={item.columns} rows={item.rows} />
        ))}
      </div>
    </div>
  );
};

export default SizeGuide;
