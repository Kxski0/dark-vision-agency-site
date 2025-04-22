
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreFeatures from "../components/CoreFeatures";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import NexusChat from "../components/NexusChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <CoreFeatures />
      <Services />
      <CallToAction />
      <Footer />
      <NexusChat />
    </div>
  );
};

export default Index;
