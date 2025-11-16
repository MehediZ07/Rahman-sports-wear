import React from "react";

const certificationLogos = [
  { src: "/isolation-mode-1.svg", className: "w-[220px] h-[78px]" },
  { src: "/isolation-mode.svg", className: "w-[212px] h-14" },
  { src: "/isolation-mode-4.svg", className: "w-[219px] h-[71px]" },
  { src: "/isolation-mode-3.svg", className: "w-[90px] h-[88px]" },
];

export const CertificationsSection = (): JSX.Element => {
  return (
    <section className="py-20 bg-[#fff3df]">
      <div className="container mx-auto px-20 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            BUSINESS REGISTRATION NO. <span className="text-[#cf181f]">003809235-0204</span>
          </h2>
        </div>
        
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-[#cf181f] mb-12">
            CERTIFICATIONS
          </h3>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            {certificationLogos.map((logo, index) => (
              <img
                key={`cert-${index}`}
                className={logo.className}
                alt="Certification"
                src={logo.src}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#cf181f] mb-8">
            MEMBERSHIPS
          </h3>
          <div className="text-2xl text-gray-700 space-y-2 max-w-4xl mx-auto">
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