import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatbotButton from './components/ChatBotButton';
import Footer from './components/Footer';
import Header from './components/Header';

// 🔹 Páginas
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Talles from "./pages/Talles";
import Contacto from "./pages/Contacto";
import Preguntas from "./pages/Preguntas";
import ComoComprar from "./pages/ComoComprar";
import Politica from "./pages/Politica";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/talles" element={<Talles />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas" element={<Preguntas />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
      <ChatbotButton />
    </Router>
  );
}

export default App;
