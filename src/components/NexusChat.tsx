
import React, { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";

type Message = {
  user: "bot" | "user";
  text: string;
};

const NexusChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      user: "bot",
      text: "Hallo, ich bin Nexus! Ich beantworte dir gerne alle Fragen rund um diese Webseite, unsere Leistungen und technische Möglichkeiten. Was möchtest du wissen?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const question = input;
    setMessages((msgs) => [...msgs, { user: "user", text: question }]);
    setInput("");
    
    // Intelligente Antworten basierend auf Schlüsselwörtern
    setTimeout(() => {
      const lowerQuestion = question.toLowerCase();
      let response = "";

      if (lowerQuestion.includes("ui design") || lowerQuestion.includes("interface")) {
        response = "Unser UI Design-Team erstellt moderne, intuitive Benutzeroberflächen, die nicht nur gut aussehen, sondern auch funktional sind. Wir legen besonderen Wert auf Responsive Design für alle Bildschirmgrößen und aktuelle Design-Trends.";
      } 
      else if (lowerQuestion.includes("ux design") || lowerQuestion.includes("nutzererlebnis")) {
        response = "Beim UX Design konzentrieren wir uns auf das gesamte Nutzererlebnis. Durch umfangreiche Nutzerforschung und Tests optimieren wir jeden Interaktionspunkt, um ein nahtloses Erlebnis zu schaffen, das zu höheren Konversionsraten führt.";
      }
      else if (lowerQuestion.includes("strategie") || lowerQuestion.includes("digitale strategie")) {
        response = "Unsere digitale Strategie basiert auf einer gründlichen Analyse deiner Geschäftsziele. Wir entwickeln maßgeschneiderte Lösungen, die organisches Wachstum und messbare Ergebnisse liefern - von SEO bis hin zu Content-Marketing.";
      }
      else if (lowerQuestion.includes("social") || lowerQuestion.includes("media") || lowerQuestion.includes("social media")) {
        response = "Unser Social Media-Team entwickelt plattformspezifische Strategien für Facebook, Instagram, LinkedIn und TikTok. Wir erstellen ansprechende Inhalte, bauen Communities auf und steigern deine Online-Präsenz durch gezielte Kampagnen.";
      }
      else if (lowerQuestion.includes("design") || lowerQuestion.includes("designkonzept")) {
        response = "Wir schaffen einzigartige visuelle Identitäten, die deine Marke unverwechselbar machen. Vom Logo bis zur Typografie entwickeln wir ein konsistentes Designkonzept, das deine Unternehmenswerte perfekt kommuniziert.";
      }
      else if (lowerQuestion.includes("medien") || lowerQuestion.includes("video") || lowerQuestion.includes("animation")) {
        response = "Wir integrieren Videos, Animationen und interaktive Inhalte, die deine Botschaft lebendig werden lassen. Diese Medienelemente steigern die Nutzerbindung und halten Besucher länger auf deiner Seite.";
      }
      else if (lowerQuestion.includes("kontakt") || lowerQuestion.includes("erreichen")) {
        response = "Du kannst uns jederzeit über unser Kontaktformular, per E-Mail an info@nexus-agency.de oder telefonisch unter +49 30 12345678 erreichen. Wir freuen uns darauf, von dir zu hören!";
      }
      else if (lowerQuestion.includes("preis") || lowerQuestion.includes("kosten")) {
        response = "Unsere Preise variieren je nach Projektumfang und deinen individuellen Anforderungen. Wir erstellen dir gerne ein maßgeschneidertes Angebot nach einem ersten kostenlosen Beratungsgespräch.";
      }
      else if (lowerQuestion.includes("team") || lowerQuestion.includes("mitarbeiter")) {
        response = "Unser Team besteht aus erfahrenen Designern, Entwicklern, Strategen und Content-Spezialisten. Jeder von uns bringt jahrelange Erfahrung in der digitalen Branche mit und arbeitet leidenschaftlich an innovativen Lösungen.";
      }
      else if (lowerQuestion.includes("hallo") || lowerQuestion.includes("hey") || lowerQuestion.includes("hi")) {
        response = "Hallo! Schön, dass du da bist. Wie kann ich dir heute helfen? Du kannst mich alles zu unseren digitalen Dienstleistungen fragen.";
      }
      else {
        // Abwechslungsreiche allgemeine Antworten
        const generalResponses = [
          "Danke für deine Frage! Wir bieten umfassende digitale Lösungen von UI/UX Design über digitale Strategie bis hin zu Social Media. Möchtest du zu einem bestimmten Bereich mehr erfahren?",
          "Interessante Frage! Wir sind eine Full-Service-Digitalagentur mit Fokus auf moderne Webtechnologien und ansprechendes Design. Kann ich dir zu einem unserer Leistungsbereiche mehr Details geben?",
          "Das ist ein spannendes Thema! Unsere Experten verbinden kreatives Design mit technischer Exzellenz für optimale digitale Ergebnisse. Zu welchem unserer Services möchtest du mehr wissen?",
          "Gute Frage! Wir helfen Unternehmen dabei, im digitalen Raum erfolgreich zu sein. Von der Konzeption bis zur Umsetzung begleiten wir dich bei jedem Schritt. Was interessiert dich besonders?"
        ];
        
        const randomIndex = Math.floor(Math.random() * generalResponses.length);
        response = generalResponses[randomIndex];
      }

      setMessages((msgs) => [
        ...msgs,
        {
          user: "bot",
          text: response,
        },
      ]);
    }, 1200);
  };

  // Button, wenn Chat geschlossen ist:
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-magenta to-turquoise text-white rounded-full shadow-xl flex items-center justify-center px-4 py-2 gap-2 hover:scale-105 transition-transform"
        aria-label="Nexus Chat öffnen"
      >
        <Send size={20} />
        <span className="font-bold text-lg">Nexus</span>
      </button>
    );
  }

  // Geöffnetes Chat-Fenster:
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-full bg-card border border-white/10 rounded-xl shadow-xl flex flex-col overflow-hidden animate-fade-in">
      <div className="bg-gradient-to-r from-magenta to-turquoise p-4 flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold text-white">Nexus Chat</h4>
          <span className="text-white text-xs opacity-80">
            Dein persönlicher Web-Agent
          </span>
        </div>
        <button
          className="ml-2 hover:bg-white/20 rounded-full p-1 transition"
          onClick={() => setOpen(false)}
          aria-label="Nexus Chat schließen"
        >
          <X size={22} className="text-white" />
        </button>
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
