
import React, { useState } from "react";
import { X, Bot } from "lucide-react";

// Hier könnte eine OpenAI Anbindung rein, aktuell aber Demo-Antworten!
const welcomeMessages = [
  "Willkommen bei NEXUS GENERATION – wie kann ich dir für dein nächstes Webprojekt helfen?",
  "Hey! Du hast Fragen rund um Webdesign, UX oder digitale Strategie? Frag mich!",
  "Hi, ich bin dein digitaler Assistent für alles rund um unsere Leistungen & Projekte. Was möchtest du wissen?",
];

const sampleAnswers = [
  "Unsere Agentur bietet individuelles Webdesign, zeitgemäßes UX und smarte Strategien für Unternehmen jeder Größe.",
  "Du möchtest mehr über unsere Leistungen oder einen Kostenvoranschlag? Sag Bescheid!",
  "Wir beraten gern zu Trends, Technologien und helfen bei der Entwicklung deiner digitalen Markenidentität.",
];

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const NexusChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: getRandom(welcomeMessages) }
  ]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    // "KI": Dummy-Antwort. Hier könntest du später eine echte API verwenden!
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: getRandom(sampleAnswers) }
      ]);
    }, 900);
    setInput("");
  }

  return (
    <>
      {/* Floating Toggle Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-turquoise text-black rounded-full p-4 shadow-lg border-2 border-white hover:bg-magenta hover:text-white transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Chat öffnen"
        >
          <Bot size={26} />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 w-[370px] max-w-[95vw] z-50 bg-black/90 rounded-2xl shadow-xl border border-turquoise flex flex-col">
          <div className="flex items-center px-4 py-2 border-b border-turquoise/80 bg-black/80 rounded-t-2xl">
            <Bot size={22} className="text-turquoise mr-2" />
            <span className="font-semibold text-turquoise">Nexus Chat</span>
            <button
              className="ml-auto text-foreground/80 hover:text-magenta"
              onClick={() => setOpen(false)}
              aria-label="Chat schließen"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 max-h-[300px] custom-scrollbar">
            {messages.map((msg, i) =>
              <div key={i} className={`text-sm ${msg.from === "bot" ? "text-turquoise text-left" : "text-foreground text-right"}`}>
                <div className={`inline-block px-3 py-2 rounded-xl ${msg.from === "bot" ? "bg-turquoise/10" : "bg-magenta/20"}`}>
                  {msg.text}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center p-2 border-t border-turquoise/30 bg-black/80 rounded-b-2xl">
            <input
              className="flex-1 bg-transparent outline-none px-2 py-1 text-foreground placeholder:text-foreground/60"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" ? handleSend() : undefined}
              placeholder="Frage stellen..."
              autoFocus
            />
            <button
              className="ml-2 px-3 py-1 bg-turquoise text-black rounded-lg font-semibold hover:bg-magenta hover:text-white transition-all"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              Senden
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NexusChat;
