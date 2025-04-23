import React, { useState } from "react";
import { PenLine, MonitorSmartphone, Code, MessageSquare, Palette, Tv } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI Design",
      icon: <PenLine className="h-8 w-8" />,
      description: "Modernes, intuitives Design für herausragende Nutzererlebnisse.",
      details: "Wir entwickeln ästhetisch ansprechende, benutzerfreundliche Oberflächen mit klarer visueller Hierarchie. Unsere Designs sind responsiv und passen sich perfekt an alle Bildschirmgrößen an – vom Desktop bis zum Smartphone."
    },
    {
      title: "UX Design",
      icon: <MonitorSmartphone className="h-8 w-8" />,
      description: "Kluge Nutzerführung & Interaktion, die konvertiert.",
      details: "Durch umfassende Nutzerforschung und Verhaltensstudien optimieren wir jeden Interaktionspunkt. Wir reduzieren Reibungsverluste und sorgen für intuitive Benutzerführung, die zu höheren Konversionsraten führt."
    },
    {
      title: "Digitale Strategie",
      icon: <Code className="h-8 w-8" />,
      description: "Digitale Maßnahmen, die zu Ihren Geschäftszielen passen.",
      details: "Wir analysieren Ihr Geschäftsmodell und entwickeln maßgeschneiderte digitale Strategien, die messbare Ergebnisse liefern. Vom Content-Management bis zur Suchmaschinenoptimierung – wir decken alle relevanten digitalen Kanäle ab."
    },
    {
      title: "Social Media",
      icon: <MessageSquare className="h-8 w-8" />,
      description: "Starke Präsenz und Community-Aufbau auf allen Kanälen.",
      details: "Unsere Social-Media-Experten entwickeln plattformspezifische Inhalte, die Ihre Zielgruppe begeistern. Wir steigern Ihre Reichweite durch organische Strategien und gezieltes Community Management."
    },
    {
      title: "Designkonzept",
      icon: <Palette className="h-8 w-8" />,
      description: "Markantes Corporate Design für durchgängige Wiedererkennung.",
      details: "Wir schaffen visuelle Identitäten, die Ihre Marke unverwechselbar machen. Von der Farbpalette bis zur Typografie – jedes Element wird sorgfältig ausgewählt, um Ihre Unternehmenswerte zu kommunizieren."
    },
    {
      title: "Medienintegration",
      icon: <Tv className="h-8 w-8" />,
      description: "Videos, Animationen & interaktive Inhalte für maximale Wirkung.",
      details: "Bewegtbild und interaktive Elemente steigern die Nutzerbindung. Wir integrieren nahtlos Videos, Animationen und interaktive Inhalte, die Ihre Botschaft lebendig werden lassen und Nutzer länger auf Ihrer Seite halten."
    }
  ];

  const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  const [openedIdx, setOpenedIdx] = useState<number | null>(null);

  // Die Anzahl der Spalten je nach Screen festlegen
  const getGridCols = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;      // sm
    if (window.innerWidth < 1024) return 2;     // md
    return 3;                                   // lg
  };

  // Ermittle, ob eine Karte in der letzten "Reihe" liegt (damit das Popup nach oben klappt)
  const isLastRow = (idx: number) => {
    const cols = getGridCols();
    const rows = Math.ceil(services.length / cols);
    const cardRow = Math.floor(idx / cols) + 1;
    return cardRow === rows;
  };

  // Responsive prüfen: Spaltenzahl als State (damit auch bei Resize dynamisch)
  const [cols, setCols] = React.useState(getGridCols());
  React.useEffect(() => {
    const handleResize = () => setCols(getGridCols());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fokusiert das Popup, damit es IMMER komplett sichtbar bleibt (notfalls Overlay über andere Karten)
  const getPopupPositionClass = (idx: number) => {
    if (cols === 1) return "left-1/2 -translate-x-1/2 "; // Mobil & schmal
    if (isLastRow(idx)) return "bottom-full mb-3";
    return "top-full mt-3";
  };

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-dark">
      {/* Animierte, bewegende Hintergrund-Lichter */}
      {/* Neue, auf Sicht gut bewegende Animationen (keyframes direkt im <style>) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-turquoise/15 rounded-full filter blur-[120px] pointer-events-none animate-floating-light-1"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-lime/15 rounded-full filter blur-[120px] pointer-events-none animate-floating-light-2"></div>
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-magenta/10 rounded-full filter blur-[150px] pointer-events-none animate-floating-light-3"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/5 h-1/5 bg-turquoise/10 rounded-full filter blur-[100px] pointer-events-none animate-floating-light-4"></div>
      <style>
        {`
        @keyframes floating-light-1 {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
          40%     { transform: translateY(-54px) translateX(-10px) scale(1.12);}
          70%     { transform: translateY(-100px) translateX(6px) scale(0.97);}
        }
        @keyframes floating-light-2 {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
          50%     { transform: translateY(50px) translateX(56px) scale(1.16);}
          80%     { transform: translateY(80px) translateX(10px) scale(1.04);}
        }
        @keyframes floating-light-3 {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
          60%     { transform: translateY(28px) translateX(48px) scale(1.25);}
          85%     { transform: translateY(-36px) translateX(-18px) scale(1.1);}
        }
        @keyframes floating-light-4 {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
          30%     { transform: translateY(34px) translateX(-38px) scale(0.93);}
          65%     { transform: translateY(85px) translateX(18px) scale(1.04);}
        }
        .animate-floating-light-1 { animation: floating-light-1 16s ease-in-out infinite alternate; }
        .animate-floating-light-2 { animation: floating-light-2 22s ease-in-out infinite alternate-reverse; }
        .animate-floating-light-3 { animation: floating-light-3 14s ease-in-out infinite alternate; }
        .animate-floating-light-4 { animation: floating-light-4 19s ease-in-out infinite alternate-reverse; }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Unsere <span className="text-magenta">Leistungen</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Alles, was Sie für einen erfolgreichen digitalen Auftritt brauchen – aus einer Hand.
          </p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => { if (!isTouch) setOpenedIdx(index); }}
              onMouseLeave={() => { if (!isTouch) setOpenedIdx(null); }}
              onClick={() => { if (isTouch) setOpenedIdx(openedIdx === index ? null : index); }}
            >
              <div
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-turquoise/50 transition-all duration-300 hover:translate-y-[-5px] cursor-pointer relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-6 group-hover:from-turquoise/20 group-hover:to-magenta/20 transition-all duration-300">
                  <div className="text-foreground/80 group-hover:text-turquoise transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
              {/* Popup: immer sichtbar und oberhalb der Karte, mit zIndex */}
              <div
                className={`
                  absolute left-0 right-0 z-50
                  ${openedIdx === index ? "opacity-100 animate-fade-in pointer-events-auto" : "opacity-0 pointer-events-none"}
                  transition-all duration-200 ease-in-out
                  ${getPopupPositionClass(index)}
                `}
                style={{
                  minWidth: 240,
                  maxWidth: 340,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "left",
                }}
              >
                <div
                  className="bg-[#101826]/95 border border-turquoise/40 rounded-xl text-foreground p-4 shadow-2xl font-inter"
                  style={{
                    color: "#fff",
                    textShadow: "0 0 16px #191922, 0 2px 18px rgba(0,0,0,0.36)",
                    backdropFilter: "blur(6px)",
                    fontSize: 16,
                    boxShadow: "0 10px 32px rgba(10, 239, 255, 0.22)",
                    background: "rgba(22, 30, 46, 0.92)",
                    zIndex: 60,
                  }}
                >
                  <h4 className="font-bold text-lg mb-2 text-turquoise">{service.title}</h4>
                  <p>{service.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
