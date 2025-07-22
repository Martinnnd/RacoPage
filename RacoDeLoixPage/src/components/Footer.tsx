import { FaInstagram, FaPinterest, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y redes sociales */}
        <div>
          <img src="/LogoRaco.jpg" alt="Logo" className="mb-4 h-6" />
          <div className="flex gap-4 text-xl">
            <FaInstagram className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">About</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Contact Form</li>
            <li className="hover:underline cursor-pointer">Shipping Policy</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Internships</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Return & Exchange Policy</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Cookie Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Service</li>
            <li className="hover:underline cursor-pointer">Legal Notice</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-sm mb-3 uppercase">Subscribe to our newsletter</h4>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border border-white bg-black text-white placeholder-gray-400 focus:outline-none mb-4"
          />
          <button className="w-full bg-white text-black font-semibold py-2 text-sm uppercase">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;