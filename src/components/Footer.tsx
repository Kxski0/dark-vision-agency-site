
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/5 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-space bg-clip-text text-transparent bg-gradient-to-r from-turquoise to-magenta mb-6">
              VISION
            </h3>
            <p className="text-foreground/70 mb-6">
              We create cutting-edge web experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-turquoise transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-turquoise transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-turquoise transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-turquoise transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
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
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-turquoise transition-colors">
                  Media Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-turquoise shrink-0 mt-1" />
                <span className="text-foreground/70">
                  123 Design Street, Creative City, 10100
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-turquoise" />
                <span className="text-foreground/70">
                  +1 (123) 456 7890
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-turquoise" />
                <span className="text-foreground/70">
                  hello@visionagency.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Vision Web Design Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
