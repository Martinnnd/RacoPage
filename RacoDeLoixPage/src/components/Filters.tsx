import React, { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Ícono de tilde

const Filters: React.FC = () => {
    const categories = [
        "DROP THIS IS COOL",
        "DROP DAUNTLESS DREAMERS",
        "BUZOS / ABRIGOS",
        "REMERAS",
        "CAMISAS & CHOMBAS",
        "PANTS & SHORTS",
    ];

    const sizes = [
        { label: "L/XL", count: 12 },
        { label: "S/M", count: 3 },
        { label: "S", count: 41 },
        { label: "M", count: 41 },
        { label: "L", count: 32 },
        { label: "XL", count: 5 },
    ];

    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const toggleSize = (label: string) => {
        setSelectedSizes((prev) =>
            prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
        );
    };

    return (
        <aside className="w-64 p-4 space-y-6">
            {/* 🔹 Categorías */}
            <div>
                <h2 className="text-lg font-semibold mb-12">Productos</h2>
                <ul className="space-y-1">
                    {categories.map((cat, i) => (
                        <li
                            key={i}
                            className="cursor-pointer uppercase text-sm hover:text-gray-500 transition-colors duration-200"
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            <hr />

            {/* 🔹 Filtro Talle */}
            <div>
                <h3 className="font-semibold mb-2 uppercase text-sm">Filtrar por</h3>
                <p className="uppercase text-xs mb-2 text-gray-600">Talle</p>
                <div className="space-y-2">
                    {sizes.map((size, i) => (
                        <label
                            key={i}
                            className="flex items-center text-sm gap-2 cursor-pointer select-none"
                            onClick={() => toggleSize(size.label)}
                        >
                            <span className="w-5 h-5 border border-gray-400 flex items-center justify-center rounded-sm">
                                {selectedSizes.includes(size.label) && (
                                    <FaCheck className="text-black text-xs" />
                                )}
                            </span>
                            {size.label} <span className="text-gray-500">({size.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            <hr />

            {/* 🔹 Rango de Precio */}
            <div>
                <p className="uppercase text-xs mb-2 text-gray-600">Precio</p>
                <div className="flex gap-2 mb-2">
                    <input type="number" className="border px-2 py-1 w-20 rounded-xl text-gray-400" placeholder="Desde" />
                    <input type="number" className="border px-2 py-1 w-24 rounded-xl text-gray-400" placeholder="Hasta" />
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded">
                        ➤
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Filters;
