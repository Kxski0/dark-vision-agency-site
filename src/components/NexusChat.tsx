import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

// Bot und User als erlaubte Werte ("bot" | "user"), statt string!
type Message = {
  user: "bot" | "user";
  text: string;
};

const NexusChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      user: "bot",
      text: "Hallo, ich bin Nexus! Ich beantworte dir gerne alle Fragen rund um diese Webseite, unsere Leistungen und technische Möglichkeiten. Was möchtest du wissen?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const question = input;
    setMessages((msgs) => [...msgs, { user: "user", text: question }]);
    setInput("");
    // Simulierter Bot-Antwort-Flow auf Deutsch
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          user: "bot",
          text:
            "Danke für deine Frage! Leider kann ich diese gerade nicht beantworten. Aber unser Team meldet sich zeitnah bei dir.",
        },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-full bg-card border border-white/10 rounded-xl shadow-xl flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-magenta to-turquoise p-4">
        <h4 className="text-xl font-bold text-white">Nexus Chat</h4>
        <span className="text-white text-xs opacity-80">Dein persönlicher Web-Agent</span>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80 bg-card">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex mb-2 ${msg.user === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg px-3 py-2 max-w-[80%] ${
                msg.user === "bot"
                  ? "bg-turquoise/10 text-turquoise mr-auto"
                  : "bg-magenta/10 text-magenta ml-auto"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form
        onSubmit={handleSend}
        className="flex p-3 border-t bg-background/30 border-white/10 space-x-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Stelle mir eine Frage …"
          className="flex-1 px-3 py-2 rounded-lg bg-card border border-white/10 text-foreground focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-magenta to-turquoise text-white h-10 w-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default NexusChat;
