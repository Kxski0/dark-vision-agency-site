
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

  return (
    // KEIN schwarzer overlay-Gradient mehr, sodass Glow sichtbar ist!
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-dark">
      {/* Animierte Hintergrund-Lichter */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-turquoise/15 rounded-full filter blur-[120px] pointer-events-none animate-[float_7s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-lime/15 rounded-full filter blur-[120px] pointer-events-none animate-[float_reverse_8s_ease-in-out_infinite]"></div>
      {/* Animation Keyframes */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float_reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
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
          {services.map((service, index) => {
            const lastRow = isLastRow(index);
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => {
                  if (!isTouch) setOpenedIdx(index);
                }}
                onMouseLeave={() => {
                  if (!isTouch) setOpenedIdx(null);
                }}
                onClick={() => {
                  if (isTouch) setOpenedIdx(openedIdx === index ? null : index);
                }}
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
                {/* Popup-Box für Details: Positioniert sich je nach Zeile nach oben oder unten */}
                <div
                  className={`
                    absolute left-0 right-0 z-30
                    ${openedIdx === index ? "" : "hidden"}
                  `}
                  style={
                    lastRow
                      ? { bottom: "100%", marginBottom: 12, top: "auto", marginTop: 0 }
                      : { top: "100%", marginTop: 12, bottom: "auto", marginBottom: 0 }
                  }
                >
                  <div className="bg-[#101826]/95 border border-turquoise/40 rounded-xl text-foreground p-4 shadow-2xl animate-fade-in font-inter"
                    style={{
                      color: "#fff",
                      textShadow: "0 2px 18px rgba(0,0,0,0.42)",
                      backdropFilter: "blur(6px)",
                      fontSize: 16,
                    }}
                  >
                    <h4 className="font-bold text-lg mb-2 text-turquoise">{service.title}</h4>
                    <p>{service.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
