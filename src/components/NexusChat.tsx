
import { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "./ui/button";

const startGreeting = "Hallo! Ich bin Nexus, dein digitaler Agentur-Chatbot. Frag mich alles rund um Webdesign, digitale Strategie & mehr!";

interface Message {
  user: "user" | "bot";
  text: string;
}

const exampleResponse = (input: string) => {
  // Hier könnten irgendwann KI-Antworten stehen.
  if (input.toLowerCase().includes("leistungen")) {
    return "Unsere Leistungen umfassen u.a. UI & UX Design, digitale Strategie, Social Media und mehr.";
  }
  if (input.toLowerCase().includes("kontakt")) {
    return "Du erreichst uns per E-Mail an hallo@visionagentur.de oder über das Kontaktformular auf der Website.";
  }
  if (input.toLowerCase().includes("preise")) {
    return "Unsere Preise sind individuell und abhängig vom Projektumfang. Für ein maßgeschneidertes Angebot kontaktiere uns gerne!";
  }
  return "Danke für deine Nachricht! Unser Experte meldet sich schnellstmöglich oder du erhältst sofort eine Antwort, sobald Nexus schlauer wird 😊";
};

const NexusChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ user: "bot", text: startGreeting }]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { user: "user", text: input }];
    setMessages(newMsgs);
    setInput("");
    setTimeout(() => {
      setMessages([...newMsgs, { user: "bot", text: exampleResponse(input) }]);
    }, 600);
  };

  return (
    <>
      {/* Schwebender Button */}
      {!open && (
        <button
          className="fixed z-50 bottom-6 right-6 bg-turquoise text-black rounded-full p-3 shadow-lg hover:bg-lime transition-all flex items-center"
          onClick={() => setOpen(true)}
          aria-label="Nexus Chatbot öffnen"
        >
          <Bot className="w-7 h-7" />
        </button>
      )}
      {/* Chatfenster Overlay */}
      {open && (
        <div className="fixed z-50 bottom-4 right-4 w-80 max-w-[90vw] bg-black/90 backdrop-blur-lg rounded-2xl border border-turquoise shadow-2xl flex flex-col">
          <div className="flex items-center px-5 py-3 border-b border-turquoise/30">
            <Bot className="mr-2 text-turquoise" />
            <span className="font-bold text-lg text-turquoise">Nexus</span>
            <button
              className="ml-auto text-foreground/70 hover:text-magenta font-bold"
              onClick={() => setOpen(false)}
              aria-label="Schließen"
            >
              ×
            </button>
          </div>
          <div
            className="flex-1 overflow-y-auto px-5 py-4 space-y-3 text-sm max-h-72"
            ref={chatRef}
            style={{ scrollbarGutter: "stable" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.user === "user" ? "justify-end" : "justify-start"}`}
              >
                <span className={`rounded-2xl px-4 py-2 ${msg.user === "user"
                  ? "bg-turquoise text-black" : "bg-dark text-turquoise border border-turquoise/30"
                } max-w-[80%] break-words`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-turquoise/20 px-4 py-3"
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="flex-1 px-3 py-2 rounded-lg bg-dark text-white border border-border focus:outline-none"
              placeholder="Stelle deine Frage…"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-turquoise text-black hover:bg-lime"
              aria-label="Absenden"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default NexusChat;
