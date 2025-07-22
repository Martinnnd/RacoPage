// ChatbotButton.tsx
import { FaCommentDots } from "react-icons/fa";

const ChatbotButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all z-50"
      aria-label="Chatbot"
    >
      <FaCommentDots className="text-2xl" />
    </button>
  );
};

export default ChatbotButton;
