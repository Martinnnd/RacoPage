import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ChatbotButton from './components/ChatBotButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Talles from "./pages/Talles";
import Contacto from "./pages/Contacto";
import Preguntas from "./pages/Preguntas";
import ComoComprar from "./pages/ComoComprar";
import Politica from "./pages/Politica";
import Nosotros from "./pages/Nosotros";
import Login from './pages/Login';
import Racobot from './pages/Racobot';
import ScrollToTop from './components/ScrollToTop';

// 🔥 Componente auxiliar para condicionar el ChatbotButton
const ChatbotWrapper = () => {
  const location = useLocation();
  const isPreguntasPage = location.pathname === "/preguntas";
  return !isPreguntasPage ? <ChatbotButton /> : null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/talles" element={<Talles />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/racobot" element={<Racobot />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      {/* 🔥 El botón solo aparece si NO estamos en /preguntas */}
      <ChatbotWrapper />
    </Router>
  );
}

export default App;
