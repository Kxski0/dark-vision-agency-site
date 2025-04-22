import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";
import NGLogo from "./NGLogo";

const socialLinks = [
  {
    label: "Facebook",
    icon: Facebook,
    href: "#",
    info: "Folgen Sie uns auf Facebook für aktuelle News und Projekte.",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "#",
    info: "Abonnieren Sie unseren Twitter-Kanal für spannende Einblicke.",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "#",
    info: "Sehen Sie unsere Arbeiten und Designs auf Instagram.",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "#",
    info: "Vernetzen Sie sich auf LinkedIn mit unserem Team.",
  },
];

const Footer = () => {
  const [activePopover, setActivePopover] = React.useState<string | null>(null);

  return (
    <footer className="bg-black/50 border-t border-white/5 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <NGLogo size={32} />
              <h3 className="text-2xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-turquoise to-magenta ml-2">
                NEXUS GENERATION
              </h3>
            </div>
            <p className="text-foreground/70 mb-6">
              Wir schaffen zukunftssichere Web-Erlebnisse, die Unternehmen voranbringen und Nutzer begeistern.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, info }, idx) => (
                <Popover key={label} open={activePopover === label} onOpenChange={open => setActivePopover(open ? label : null)}>
                  <PopoverTrigger asChild>
                    <div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={href}
                            tabIndex={0}
                            aria-label={label}
                            className="text-foreground/60 hover:text-turquoise transition-colors focus:outline-none"
                            onClick={e => {
                              e.preventDefault();
                              setActivePopover(label);
                            }}
                          >
                            <Icon size={20} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">{`Mehr über ${label}`}</TooltipContent>
                      </Tooltip>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 text-sm" side="top">
                    <div className="font-semibold text-lg mb-1">{label}</div>
                    <div className="mb-2">{info}</div>
                    <a
                      href={href}
                      className="text-turquoise underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jetzt öffnen &rarr;
                    </a>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Schnellzugriff</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Start
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Leistungen</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Digitale Strategie
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Medienintegration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-3 text-turquoise shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5C21 16.19 12 21 12 21s-9-4.81-9-10.5C3 6.357 7.03 3 12 3s9 3.357 9 7.5z" /><circle cx="12" cy="10.5" r="2.5" /></svg>
                <span className="text-foreground/70">
                  Musterstraße 123, Kreativstadt, 10100
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-turquoise" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V20a2 2 0 0 1-2.18 2c-3.3-.36-6.43-1.87-8.82-4.26S2.36 7.48 2 4.18A2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72c.12.81.31 1.61.55 2.38a2 2 0 0 1-.45 2.11l-1.27 1.27c1.17 2.7 3.17 4.7 5.87 5.87l1.27-1.27a2 2 0 0 1 2.11-.45c.77.24 1.57.43 2.38.55A2 2 0 0 1 22 16.92z" /></svg>
                <span className="text-foreground/70">
                  +49 (123) 456 7890
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-turquoise" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 6-8.97 6.64a2 2 0 0 1-2.36 0L2 6" /></svg>
                <span className="text-foreground/70">
                  hallo@visionagentur.de
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Nexus Generation Webdesign Agentur. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
