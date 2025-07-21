import { useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para cambiar el fondo del header
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50); // podés ajustar el 50 a gusto
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Topbar roja */}
            <div className="w-full bg-red-600 text-white text-xs py-1 font-semibold uppercase tracking-wide">
                <div className="marquee-container">
                    <div className="marquee-track">
                        <span className="mx-4">
                            6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA
                        </span>
                        <span className="mx-4">
                            6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA
                        </span>
                        <span className="mx-4">
                            6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA
                        </span>
                    </div>
                </div>
            </div>

            {/* Header principal con scroll dinámico */}
            <header className={`fixed top-0 w-full z-20 pt-6 transition-all duration-300 ${scrolled ? "bg-black shadow-md" : "bg-transparent"
                }`}>
                <nav className="flex items-center justify-between px-4 h-26 md:px-8 relative text-white">
                    {/* Botón hamburguesa */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-2xl text-white"
                    >
                        <FaBars />
                    </button>

                    {/* Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <img
                            src="/LogoRaco.jpg"
                            alt="Logo"
                            className="h-16 object-contain glow"
                        />
                    </div>

                    {/* Íconos derecha */}
                    <div className="flex items-center gap-4 text-xl ml-auto">
                        <FaUser className="text-white cursor-pointer" />
                        <FaShoppingCart
                            className="text-white cursor-pointer"
                            onClick={() => setCartOpen(true)}
                        />
                    </div>
                </nav>
            </header>

            {/* Menú lateral desplegable */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300`}
            >
                <div className="p-4 border-b border-gray-300 font-bold text-lg flex justify-between items-center">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-black text-xl"
                    >
                        ✖
                    </button>
                </div>
                <ul className="flex flex-col gap-4 p-4 text-sm font-medium uppercase">
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">Summer Sales</li>
                    <li className="cursor-pointer">Collections</li>
                    <li className="cursor-pointer">Stores</li>
                    <li className="cursor-pointer">FAQs</li>
                </ul>
            </aside>

            {/* Carrito lateral derecho */}
            <aside
                className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-40 transform ${cartOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300`}
            >
                <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
                    <span>CARRITO</span>
                    <button
                        onClick={() => setCartOpen(false)}
                        className="text-xl text-gray-600"
                    >
                        ✖
                    </button>
                </div>

                <div className="p-4 border-b text-sm text-center text-gray-700">
                    Gastá $125.000,00 más y obtené envío gratis
                </div>

                <div className="p-8 text-center text-gray-500">
                    Tu carrito está vacío.
                </div>

                <div className="absolute bottom-0 w-full p-4 border-t text-sm">
                    <div className="flex justify-between font-semibold mb-2">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                    </div>
                    <button className="w-full bg-black text-white py-2 font-bold uppercase tracking-wide">
                        Finalizar compra
                    </button>
                </div>
            </aside>

            {/* Overlay oscuro izquierda*/}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-30 bg-transparent bg-opacity-40 backdrop-blur-sm"
                />
            )}

            {/* Overlay oscuro derecha */}
            {cartOpen && (
                <div
                    onClick={() => setCartOpen(false)}
                    className="fixed inset-0 bg-opacity-40 z-30 backdrop-blur-sm"
                ></div>
            )}
        </>
    );
};

export default Header;
