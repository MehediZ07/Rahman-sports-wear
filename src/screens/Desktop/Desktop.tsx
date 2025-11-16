import React from "react";
import {
  Header,
  Navigation,
  HeroSection,
  AboutSection,
  FactoryOverview,
  SewingMachinerySection,
  CuttingMachinerySection,
  KnittingMachinerySection,
  DyeingMachinerySection,
  FinishingMachinerySection,
  UtilityMachinerySection,
  ETPSection,
  LabSection,
  CertificationsSection,
  ContactSection,
  Footer,
} from "../../components/sections";

export const Desktop = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen">
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
      <SewingMachinerySection />
      <CuttingMachinerySection />
      <KnittingMachinerySection />
      <DyeingMachinerySection />
      <FinishingMachinerySection />
      <UtilityMachinerySection />
      <ETPSection />
      <LabSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
