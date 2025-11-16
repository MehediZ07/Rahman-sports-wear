import React from "react";
import {
  Header,
  Navigation,
  HeroSection,
  AboutSection,
  FactoryOverview,
  MachinerySection,
  CertificationsSection,
  ContactSection,
  Footer,
} from "../../components/sections";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FactoryOverview />
      <MachinerySection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
