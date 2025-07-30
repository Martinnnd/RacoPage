import { FaInstagram, FaPinterest,   FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12 h-[400px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y redes sociales */}
        <div>
          <img src="/LogoRaco.jpg" alt="Logo" className="mb-4 h-6" />
          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">Categorías</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Inicio</li>
            <li className="hover:underline cursor-pointer">Productos</li>
            <li className="hover:underline cursor-pointer">Guía de talles</li>
            <li className="hover:underline cursor-pointer">Contacto</li>
            <li className="hover:underline cursor-pointer">Preguntas Frecuentes</li>
            <li className="hover:underline cursor-pointer">Cómo Comprar</li>
            <li className="hover:underline cursor-pointer">Política de Cambios</li>
            <li className="hover:underline cursor-pointer">About us</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">Contactános</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">541134914584</li>
            <li className="hover:underline cursor-pointer">11 3491 4584</li>
            <li className="hover:underline cursor-pointer">racodeloix2020@gmail.com</li>
            <li className="hover:underline cursor-pointer">Fitz Roy 1489, Palermo</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">Suscribite a nuestro newsletter</h4>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border border-white bg-black text-white placeholder-gray-400 focus:outline-none mb-4"
          />
          <button className="w-full bg-white text-black font-semibold py-2 text-sm uppercase">
            Suscribite
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;