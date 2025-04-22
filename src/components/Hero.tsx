
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-turquoise/20 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-magenta/20 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-turquoise font-space tracking-wider mb-4">DIGITALE WELTEN, EINZIGARTIG GESTALTET</p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-turquoise via-white to-lime">
              Webdesign, das<br/>begeistert und verkauft.
            </span>
            <br />
            <span className="text-glow text-turquoise">Ihr digitaler Vorsprung</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl">
            Wir gestalten und entwickeln moderne Webauftritte, die Ihre Marke stärken und neue Kunden gewinnen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-turquoise to-lime text-black hover:text-white hover:shadow-lg hover:shadow-turquoise/25 transition-all group"
            >
              Jetzt starten
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 hover:border-magenta hover:text-magenta transition-all"
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
