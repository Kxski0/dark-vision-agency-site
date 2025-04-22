
import { Rocket, Lightbulb, Code } from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      title: "Future Concept",
      icon: <Rocket className="h-10 w-10 text-turquoise" />,
      description: "Forward-thinking design solutions that anticipate tomorrow's digital trends and user expectations."
    },
    {
      title: "The Big Ideas",
      icon: <Lightbulb className="h-10 w-10 text-lime" />,
      description: "Strategic creative concepts that elevate your brand and create memorable user experiences."
    },
    {
      title: "Creative Solutions",
      icon: <Code className="h-10 w-10 text-magenta" />,
      description: "Innovative development approaches that solve complex problems with elegant simplicity."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core <span className="text-turquoise">Competencies</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We combine strategic thinking with cutting-edge design and technology to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark border border-border/50 rounded-2xl p-8 hover:border-turquoise/50 transition-all group relative overflow-hidden"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/5 to-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6 relative">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 relative group-hover:text-glow">{feature.title}</h3>
              
              <p className="text-foreground/70 relative">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
