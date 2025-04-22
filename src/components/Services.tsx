
import { DesignPenLine, MonitorSmartphone, Code, MessageSquare, Palette, Tv } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI Design",
      icon: <DesignPenLine className="h-8 w-8" />,
      description: "User interfaces that are intuitive, visually stunning, and engineered for engagement."
    },
    {
      title: "UX Design",
      icon: <MonitorSmartphone className="h-8 w-8" />,
      description: "Seamless user experiences that guide visitors to meaningful interactions and conversions."
    },
    {
      title: "Digital Strategy",
      icon: <Code className="h-8 w-8" />,
      description: "Data-driven approaches that align your digital presence with business objectives."
    },
    {
      title: "Social Media",
      icon: <MessageSquare className="h-8 w-8" />,
      description: "Strategic social media planning and design that builds community and drives engagement."
    },
    {
      title: "Design Concept",
      icon: <Palette className="h-8 w-8" />,
      description: "Comprehensive brand and design systems that ensure consistency across all touchpoints."
    },
    {
      title: "Media Integration",
      icon: <Tv className="h-8 w-8" />,
      description: "Seamless incorporation of video, audio, and interactive elements that enhance messaging."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative bg-gradient-to-b from-dark to-black/90">
      {/* Gradient background effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-turquoise/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-lime/10 rounded-full filter blur-[120px]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our <span className="text-magenta">Services</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your brand in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-turquoise/50 transition-all duration-300 group hover:translate-y-[-5px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-6 group-hover:from-turquoise/20 group-hover:to-magenta/20 transition-all duration-300">
                <div className="text-foreground/80 group-hover:text-turquoise transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
