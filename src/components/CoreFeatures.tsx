
import { Rocket, Lightbulb, Code } from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      title: "Future Concept",
      icon: <Rocket className="h-10 w-10 text-turquoise" />,
      description: "Visionäres Design, das morgen schon heute möglich macht."
    },
    {
      title: "The Big Ideas",
      icon: <Lightbulb className="h-10 w-10 text-lime" />,
      description: "Kreative Konzepte, die Ihre Marke unvergesslich machen."
    },
    {
      title: "Creative Solutions",
      icon: <Code className="h-10 w-10 text-magenta" />,
      description: "Innovative Lösungen für komplexe Herausforderungen im Web."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Unsere <span className="text-turquoise">Kernkompetenzen</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Strategie, Design und Technologie – für außergewöhnliche Web-Erlebnisse, die verkaufen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark border border-border/50 rounded-2xl p-8 hover:border-turquoise/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/5 to-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6 relative">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative group-hover:text-glow">{feature.title}</h3>
              <p className="text-foreground/70 relative">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
