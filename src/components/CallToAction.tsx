
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "Professional web presence",
    "Increased customer engagement",
    "Higher conversion rates",
    "Custom-tailored design solutions"
  ];

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-dark to-black/80 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your <span className="text-turquoise">digital presence</span>?
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8">
            Join the ranks of forward-thinking businesses elevating their brand with our expert web design services.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-lime" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-magenta to-turquoise text-white hover:shadow-lg hover:shadow-magenta/25 transition-all"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
