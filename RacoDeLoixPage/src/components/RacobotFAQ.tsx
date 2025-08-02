import { useState } from "react";

const RacobotFAQ: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "¡Hola! Soy Racobot, tu asistente virtual de Raco de Loix. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // ✅ Función para enviar mensaje al backend
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setTyping(true);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      setTimeout(() => {
        setTyping(false);
        setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
      }, 1000);
    } catch (error) {
      setTyping(false);
      setMessages(prev => [...prev, { role: "assistant", content: "❌ Ocurrió un error al responder." }]);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 bg-white min-h-[80vh]">
      {/* 🟢 Encabezado */}
      <h2 className="text-2xl font-bold mb-1 tracking-wide">ENCUENTRA SOPORTE</h2>
      <p className="uppercase font-semibold text-sm text-gray-700 mb-1">🤖 Racobot</p>
      <p className="text-gray-600 text-center max-w-lg mb-5">
        Nuestro asistente virtual responde preguntas frecuentes sobre <b>pedidos, envíos, cambios y más.</b><br />
        ¡Escribí tu consulta abajo y Racobot te responderá!
      </p>

      {/* 🟢 Contenedor del Chat */}
      <div className="w-full max-w-lg border rounded shadow-lg flex flex-col" style={{ height: "500px" }}>
        {/* Header del Chat */}
        <div className="bg-black text-white p-3 border-b flex items-center gap-2 rounded-t">
          <span className="font-semibold">Racobot</span>
        </div>

        {/* 🟢 Mensajes */}
        <div className="flex-1 p-3 overflow-y-auto bg-gray-50 text-sm">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`px-3 py-2 rounded-lg max-w-xs ${
                  msg.role === "user"
                    ? "bg-black text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* 🟢 Indicador de "escribiendo..." */}
          {typing && (
            <div className="text-left text-gray-500 animate-pulse mt-1">
              <div className="inline-block px-3 py-1 rounded-lg bg-gray-200">...</div>
            </div>
          )}
        </div>

        {/* 🟢 Input de Mensaje */}
        <form onSubmit={sendMessage} className="border-t flex items-center p-2 bg-white">
          <input
            type="text"
            placeholder="Escribí tu pregunta..."
            className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-black text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-black text-white px-4 py-2 rounded-r text-sm hover:bg-gray-900">
            ➤
          </button>
        </form>
      </div>
    </section>
  );
};

export default RacobotFAQ;
