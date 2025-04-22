
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const Navbar = () => {
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
          <span className="text-2xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-turquoise to-magenta">
            VISION
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground/80 hover:text-turquoise transition-all">
            Home
          </a>
          <a href="#services" className="text-foreground/80 hover:text-turquoise transition-all">
            Services
          </a>
          <a href="#" className="text-foreground/80 hover:text-turquoise transition-all">
            Work
          </a>
          <a href="#" className="text-foreground/80 hover:text-turquoise transition-all">
            About
          </a>
          <Button
            variant="outline"
            className="border-turquoise text-turquoise hover:bg-turquoise hover:text-black transition-all"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-turquoise transition-colors"
            aria-label="Toggle menu"
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
              Home
            </a>
            <a
              href="#services"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#"
              className="text-foreground/80 hover:text-turquoise transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Button
              variant="outline"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-black transition-all w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
