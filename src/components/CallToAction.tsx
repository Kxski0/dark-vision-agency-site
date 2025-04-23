
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import * as React from "react";

interface CallToActionProps {
  onRequestDialog: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onRequestDialog }) => {
  const benefits = [
    "Professioneller Webauftritt",
    "Mehr Kundenanfragen",
    "Höhere Conversion-Rate",
    "Individuelle Designlösungen"
  ];

  return (
    <section className="py-20 md:py-32 relative bg-black/90">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-dark to-black/80 z-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Bereit für den <span className="text-turquoise">digitalen Erfolg</span>?
          </h2>
          <p className="text-lg text-foreground/80 mb-12">
            Werden Sie Teil der digitalen Vorreiter – starten Sie Ihr Projekt mit uns und gewinnen Sie neue Kunden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-11 max-w-xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center rounded-xl bg-dark/80 border border-border/25 shadow-sm py-3 px-5 gap-2 justify-center hover:bg-turquoise/10 transition-all">
                <CheckCircle className="h-5 w-5 mr-2 text-lime" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-magenta to-turquoise text-white text-lg font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-magenta/30 transition-all shadow"
            onClick={onRequestDialog}
          >
            Jetzt Projekt starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
