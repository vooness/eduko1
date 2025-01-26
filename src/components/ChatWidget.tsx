// components/ChatWidget.tsx
import React, { useState } from "react";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // Odeslání zprávy na /api/chat
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Přidáme zprávu uživatele do lokálního chatu
    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

    // Zavoláme vlastní API
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: inputValue }),
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { sender: "bot", text: data.botReply }]);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Tlačítko pro otevření/zavření widgetu */}
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          EDUKO Bot
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white text-black rounded-lg shadow-lg flex flex-col">
          {/* Hlavička */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <span className="font-bold">EDUKO ChatBot</span>
            <button onClick={toggleWidget} className="text-white font-bold">×</button>
          </div>

          {/* Chat zóna */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block p-2 rounded-md ${
                    msg.sender === "user"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Vstupní řádek */}
          <div className="p-2 border-t border-gray-300 flex">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              className="flex-1 border border-gray-300 rounded-l px-2"
              placeholder="Napište dotaz..."
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-2 rounded-r"
            >
              Odeslat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
