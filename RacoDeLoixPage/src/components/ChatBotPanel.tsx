// components/ChatbotPanel.tsx
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const ChatbotPanel: React.FC<Props> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false); // 👈 Indicador de "escribiendo..."

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setTyping(true); // 👈 Activa "escribiendo..."

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // Simular un delay de 1 segundo
      setTimeout(() => {
        setTyping(false);
        setMessages([...newMessages, { role: "assistant", content: data.response }]);
      }, 1000);
    } catch (error) {
      setTyping(false);
      setMessages([...newMessages, { role: "assistant", content: "Ocurrió un error al responder 😞" }]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-xl border border-gray-300 rounded-lg flex flex-col z-50">
      <div className="flex justify-between items-center px-4 py-2 border-b bg-black text-white rounded-t-lg">
        <span>RacoBot</span>
        <button onClick={onClose} className="text-white font-bold">✕</button>
      </div>

      <div className="flex-1 p-2 overflow-y-auto text-sm">
        {messages.map((msg, i) => (
          <div key={i} className={`my-1 ${msg.role === "user" ? "text-right" : "text-left text-gray-700"}`}>
            <div className={`inline-block px-2 py-1 rounded ${msg.role === "user" ? "bg-gray-200" : "bg-gray-100"}`}>
              {msg.content}
            </div>
          </div>
        ))}

        {typing && (
          <div className="text-left text-gray-500 animate-pulse mt-1">
            <div className="inline-block px-2 py-1 rounded bg-gray-100">...</div>
          </div>
        )}
      </div>

      <div className="flex p-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-2 py-1 text-sm"
          placeholder="Escribí tu pregunta..."
        />
        <button onClick={sendMessage} className="bg-black text-white px-4 rounded-r text-sm">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatbotPanel;
