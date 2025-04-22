
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import NGLogo from "./NGLogo";

interface NavbarProps {
  onKontaktClick: () => void;
}

const Navbar = ({ onKontaktClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-dark/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <NGLogo size={36} />
          <span className="text-2xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-turquoise to-magenta">
            NEXUS GENERATION
          </span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground/80 hover:text-turquoise transition-all">
            Start
          </a>
          <a href="#services" className="text-foreground/80 hover:text-turquoise transition-all">
            Leistungen
          </a>
          <a href="#" className="text-foreground/80 hover:text-turquoise transition-all">
            Portfolio
          </a>
          <a href="#ueber-uns" className="text-foreground/80 hover:text-turquoise transition-all">
            Über uns
          </a>
          <Button
            variant="outline"
            className="border-turquoise text-turquoise hover:bg-turquoise hover:text-black transition-all"
            onClick={onKontaktClick}
          >
            Kontakt
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-turquoise transition-colors"
            aria-label="Menü umschalten"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-border/50 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Start
            </a>
            <a
              href="#services"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#ueber-uns"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </a>
            <Button
              variant="outline"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-black transition-all w-full"
              onClick={() => {
                setIsMenuOpen(false);
                onKontaktClick();
              }}
            >
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
