import React from "react";
import ScrollToTop from "react-scroll-to-top";
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
      
      {/* Scroll to Top Button */}
      <ScrollToTop 
        smooth 
        component={
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
          }}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 4L12 20M12 4L6 10M12 4L18 10" 
                stroke="white" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        }
        style={{
          background: "linear-gradient(135deg, #cf181f 0%, #ff4757 100%)",
          borderRadius: "50%",
          boxShadow: "0 8px 25px rgba(207, 24, 31, 0.3)",
          border: "none",
          width: "42px",
          height: "42px",
          opacity: "0.7",
          transition: "opacity 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.7"}
      />
    </div>
  );
};
