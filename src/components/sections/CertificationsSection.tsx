import React from "react";

const certificationLogos = [
  { src: "/isolation-mode-1.svg", className: "w-[220px] h-[78px]" },
  { src: "/isolation-mode.svg", className: "w-[212px] h-14" },
  { src: "/isolation-mode-4.svg", className: "w-[219px] h-[71px]" },
  { src: "/isolation-mode-3.svg", className: "w-[90px] h-[88px]" },
];

export const CertificationsSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-[#fff3df]">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 text-center">
        <div className="mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3 lg:mb-4">
            BUSINESS REGISTRATION NO. <span className="text-[#cf181f]">003809235-0204</span>
          </h2>
        </div>
        
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-6 md:mb-8 lg:mb-12">
            CERTIFICATIONS
          </h3>
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-16 flex-wrap">
            {certificationLogos.map((logo, index) => (
              <img
                key={`cert-${index}`}
                className="w-[80px] h-[30px] md:w-[120px] md:h-[45px] lg:w-[220px] lg:h-[78px] object-contain"
                alt="Certification"
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-4 md:mb-6 lg:mb-8">
            MEMBERSHIPS
          </h3>
          <div className="text-sm md:text-lg lg:text-2xl text-gray-700 space-y-1 md:space-y-2 max-w-4xl mx-auto">
            <div>Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA).</div>
            <div>Bangladesh Garment Manufacturers & Exporters Association (BGMEA).</div>
            <div>Export Promotion Bureau Bangladesh (EPB).</div>
            <div>Narayanganj Chamber of Commerce & Industries (NCCI).</div>
          </div>
        </div>
      </div>
    </section>
  );
};