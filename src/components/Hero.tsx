
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";

interface HeroProps {
  onRequestDialog: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestDialog }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-turquoise/20 rounded-full filter blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-magenta/20 rounded-full filter blur-[100px] animate-pulse-glow" />
      </div>
      <div className="container mx-auto px-4 md:px-8 py-14 md:py-28 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-turquoise text-base md:text-lg font-space tracking-widest mb-5 uppercase letter-spacing-wide opacity-90">
            DIGITALE WELTEN, EINZIGARTIG GESTALTET
          </p>
          <div className="bg-black/30 rounded-2xl shadow-xl p-6 md:p-10 mb-4 w-full max-w-3xl border border-white/10 backdrop-blur-md">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-turquoise via-white to-lime">
                Webdesign, das<br />begeistert und verkauft.
              </span>
              <br />
              <span className="text-glow text-turquoise block mt-2">Ihr digitaler Vorsprung</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-2 max-w-2xl mx-auto">
              Wir gestalten und entwickeln moderne Webauftritte, die Ihre Marke stärken und neue Kunden gewinnen.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-turquoise to-lime text-black hover:text-white hover:shadow-lg hover:shadow-turquoise/30 transition-all group font-bold"
              onClick={onRequestDialog}
            >
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-black hover:border-turquoise/80 transition-all font-bold"
              onClick={onRequestDialog}
            >
              Projekte ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
