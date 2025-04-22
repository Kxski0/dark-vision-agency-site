
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreFeatures from "../components/CoreFeatures";
import Services from "../components/Services";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import NexusChat from "../components/NexusChat";
import AboutUs from "../components/AboutUs";
import EmailDialog from "../components/EmailDialog";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Handler an Kinder-Komponenten für alle CTAs geben
  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <div className="min-h-screen bg-dark text-foreground overflow-hidden">
      <Navbar onKontaktClick={handleOpenDialog} />
      <Hero onRequestDialog={handleOpenDialog} />
      <CoreFeatures />
      <Services />
      <AboutUs onRequestProject={handleOpenDialog} />
      <CallToAction onRequestDialog={handleOpenDialog} />
      <Footer />
      <NexusChat />
      <EmailDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;
