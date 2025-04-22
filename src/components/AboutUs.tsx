
import { Button } from "./ui/button";
import * as React from "react";

interface AboutUsProps {
  onRequestProject: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onRequestProject }) => (
  <section id="ueber-uns" className="bg-dark py-20 md:py-32 border-t border-border/30">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-magenta">Über uns</span>
      </h2>
      <p className="text-lg text-foreground font-space mb-2">
        Digital denken. Design leben.
      </p>
      <p className="text-base text-foreground/90 mb-5">
        Wir sind eine moderne Webdesign-Agentur mit dem Fokus auf Performance, Nutzererlebnis und Ästhetik. Für uns ist gutes Design nicht nur schön – es verkauft. Unsere Mission: Marken sichtbar machen, Vertrauen aufbauen und Websites schaffen, die Ergebnisse liefern.
      </p>
      <p className="text-base text-foreground/80 mb-5">
        Mit einem kreativen Team aus Designern, Entwicklern und Strategen vereinen wir Ästhetik mit Funktion. Jedes Projekt ist einzigartig – und das sieht man. Wir gestalten digitale Auftritte, die nicht nur Eindruck hinterlassen, sondern Menschen überzeugen und Conversions steigern.
      </p>
      <p className="text-base text-foreground/80 mb-8">
        Bereit, dein Online-Erlebnis neu zu definieren?
      </p>
      <Button
        size="lg"
        className="bg-gradient-to-r from-magenta to-turquoise text-white hover:shadow-lg hover:shadow-magenta/25 transition-all"
        onClick={onRequestProject}
      >
        Projekt starten
      </Button>
    </div>
  </section>
);

export default AboutUs;
