import { useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // ⛔️ Cerrar menús al cambiar de sección
  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
    setCartOpen(false);
  }, [location.pathname]);

  // Detectar scroll solo en Home, en otras páginas siempre negro
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <>
      {/* 🔴 Topbar roja */}
      <div className="w-full bg-red-600 text-white text-xs py-1 font-semibold uppercase tracking-wide">
        <div className="marquee-container">
          <div className="marquee-track">
            <span className="mx-4">6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA</span>
            <span className="mx-4">6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA</span>
            <span className="mx-4">6 CUOTAS SIN INTERES · ENVIOS GRATIS A PARTIR DE 120000 · 20% OFF EN EFECTIVO / 15% OFF EN TRANSFERENCIA</span>
          </div>
        </div>
      </div>

      {/* 🟢 Header principal */}
      <header className={`fixed top-0 w-full z-20 mb-7 transition-all duration-300 ${scrolled ? "bg-black shadow-md" : "bg-transparent"}`}>
        <nav className={`flex items-center justify-between px-4 mt-3 md:px-8 transition-all duration-300 ${scrolled ? "h-20" : "h-28"}`}>
          {/* 🍔 Botón hamburguesa */}
          <button onClick={() => setMenuOpen(true)} className="text-2xl text-white mr-2">
            <FaBars />
          </button>

          {/* 🔍 Buscador */}
          <div className="mx-2 w-52 sm:w-60 md:w-72">
            <div className="flex items-center border border-white text-white rounded-md px-3 py-1 transition-colors duration-300 focus-within:ring-2 focus-within:ring-white">
              <input type="text" placeholder="¿Qué estás buscando?" className="bg-transparent w-full outline-none text-sm placeholder-white" />
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
          </div>

          {/* 🟡 Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/LogoRaco2.jpg" alt="Logo" className={`object-contain transition-all duration-300 glow ${scrolled ? "h-12" : "h-16"}`} />
          </div>

          {/* 👤🛒 Iconos derecha */}
          <div className="flex items-center gap-4 text-xl ml-auto">
            <Link to="/login">
              <FaUser className="text-white cursor-pointer" />
            </Link>
            <FaShoppingCart
              className="text-white cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </nav>
      </header>

      {/* ✅ Menú lateral principal */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-40 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <div className="p-4 border-b border-gray-300 font-bold text-lg flex justify-between items-center">
          <button onClick={() => setMenuOpen(false)} className="text-black text-xl">✖</button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-sm font-medium uppercase">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Inicio
            </Link>
          </li>

          {/* 👉 Productos abre submenú */}
          <li
            className="cursor-pointer flex justify-between items-center"
            onClick={() => { setSubmenuOpen(true); setMenuOpen(false); }}
          >
            <span>Productos</span>
            <FaChevronRight />
          </li>

          <li>
            <Link to="/talles" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Guía de Talles
            </Link>
          </li>

          <li>
            <Link to="/contacto" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Contacto
            </Link>
          </li>

          <li>
            <Link to="/racobot" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Racobot
            </Link>
          </li>

          <li>
            <Link to="/preguntas" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Preguntas Frecuentes
            </Link>
          </li>

          <li>
            <Link to="/como-comprar" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Cómo Comprar
            </Link>
          </li>

          <li>
            <Link to="/politica" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              Política de Cambios
            </Link>
          </li>

          <li>
            <Link to="/nosotros" onClick={() => setMenuOpen(false)} className="block cursor-pointer">
              About Us
            </Link>
          </li>
        </ul>
      </aside>

      {/* ✅ SUBMENÚ desde la IZQUIERDA (reemplaza al menú principal) */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform ${submenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
          <span>PRODUCTOS</span>
          <button onClick={() => { setSubmenuOpen(false); setMenuOpen(true); }} className="text-black text-xl">
            <FaChevronLeft />
          </button>
        </div>

        <ul className="flex flex-col gap-3 p-4 text-sm text-gray-700 uppercase">
          <li className="cursor-pointer">
            <Link
              to="/productos"
              className="block w-full h-full"
              onClick={() => setSubmenuOpen(false)} // 👈 cerrar submenú al navegar
            >
              Ver todos los productos
            </Link>
          </li>
          <li className="cursor-pointer">DROP THIS IS COOL</li>
          <li className="cursor-pointer">DROP DAUNTLESS DREAMERS</li>
          <li className="cursor-pointer">BUZOS / ABRIGOS</li>
          <li className="cursor-pointer">REMERAS</li>
          <li className="cursor-pointer">CAMISAS & CHOMBAS</li>
          <li className="cursor-pointer">PANTS & SHORTS</li>
          <li className="cursor-pointer">ACCESORIOS</li>
        </ul>
      </aside>

      {/* 🛒 Carrito lateral */}
      <aside className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-40 transform ${cartOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
          <span>CARRITO</span>
          <button onClick={() => setCartOpen(false)} className="text-xl text-gray-600">✖</button>
        </div>

        <div className="p-4 border-b text-sm text-center text-gray-700">Gastá $125.000,00 más y obtené envío gratis</div>
        <div className="p-8 text-center text-gray-500">Tu carrito está vacío.</div>

        <div className="absolute bottom-0 w-full p-4 border-t text-sm">
          <div className="flex justify-between font-semibold mb-2">
            <span>Subtotal</span><span>$0.00</span>
          </div>
          <button className="w-full bg-black text-white py-2 font-bold uppercase tracking-wide">Finalizar compra</button>
        </div>
      </aside>

      {/* 🔲 Overlays */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" />}
      {cartOpen && <div onClick={() => setCartOpen(false)} className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" />}
      {submenuOpen && <div onClick={() => setSubmenuOpen(false)} className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm" />}
    </>
  );
};

export default Header;
