import React from "react";
import {
  Header,
  Navigation,
  HeroSection,
  AboutSection,
  FactoryOverview,
  ProductionCapacitySection,
  MachinerySection,
  ETPSection,
  LabSection,
  CertificationsSection,
  ContactSection,
  Footer,
} from "../../components/sections";

export const Desktop = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background Image */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        alt="Background"
        src="/webpageback-1.png"
      />
      
      <Header />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FactoryOverview />
      <ProductionCapacitySection />
      <MachinerySection />
      <ETPSection />
      <LabSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
