// components/ChatbotButton.tsx
import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import ChatbotPanel from "./ChatBotPanel";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Panel con animación de aparición/desaparición */}
      <div
        className={`
          fixed bottom-20 right-6 z-50 transform transition-all duration-500 ease-in-out origin-bottom-right
          ${open ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-20"}
        `}
      >
        <ChatbotPanel onClose={() => setOpen(false)} />
      </div>

      {/* Botón flotante negro */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all z-50"
        aria-label="Chatbot"
      >
        <FaCommentDots className="text-2xl" />
      </button>
    </>
  );
};

export default ChatbotButton;
