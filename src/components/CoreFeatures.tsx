
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
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
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
              className="group relative overflow-hidden bg-black/40 border border-border/30 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:border-turquoise/60 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/10 to-magenta/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-muted/80 to-card/20 shadow transition group-hover:from-turquoise/20 group-hover:to-magenta/10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-turquoise transition">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
