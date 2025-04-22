
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Hero = () => {
  const [open, setOpen] = React.useState(false);

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
              onClick={() => setOpen(true)}
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

      {/* Dialog für Email */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2 text-turquoise">Schreiben Sie uns Ihre Anfrage</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <label htmlFor="mail" className="block text-sm mb-1 text-muted-foreground">Ihre E-Mail</label>
              <Input id="mail" type="email" placeholder="your@email.com" autoFocus required />
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm mb-1 text-muted-foreground">Ihre Nachricht</label>
              <Textarea id="msg" placeholder="Ihre Anfrage ..." required rows={5} />
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Schließen
              </Button>
              <Button type="submit" disabled>
                Absenden
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">Aktuell nur Vorschau – Absenden ist nicht aktiviert.</div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
