import React from "react";
import { DataTable } from "../ui/DataTable";

const certificationLogos = [
  { src: "/isolation-mode-1.svg", className: "w-[220px] h-[78px]" },
  { src: "/isolation-mode.svg", className: "w-[212px] h-14" },
  { src: "/isolation-mode-4.svg", className: "w-[219px] h-[71px]" },
  { src: "/isolation-mode-3.svg", className: "w-[90px] h-[88px]" },
];

const turnoverColumns = [
  { key: "year", header: "YEAR", width: "w-1/2" },
  { key: "amount", header: "US $ (IN MILLION)", width: "w-1/2" },
];

const turnoverData = [
  { year: "2022-2023", amount: "17.26" },
  { year: "2021-2022", amount: "10.29", highlighted: true },
  { year: "2020-2021", amount: "21.40" },
];

export const CertificationsSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-[#fff3df]">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        
        {/* Business Registration */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3 lg:mb-4">
            BUSINESS REGISTRATION NO. <span className="text-[#cf181f]">003809235-0204</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left side - Certifications (60%) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-6 md:mb-8">
              CERTIFICATIONS
            </h3>
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 lg:gap-8 flex-wrap mb-8 md:mb-12">
              {certificationLogos.map((logo, index) => (
                <img
                  key={`cert-${index}`}
                  className="w-[60px] h-[25px] md:w-[80px] md:h-[30px] lg:w-[100px] lg:h-[40px] object-contain"
                  alt="Certification"
                  src={logo.src}
                />
              ))}
            </div>
            
            {/* Yearly Turnover */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#cf181f] mb-4 md:mb-6">
                YEARLY TURN OVER
                <br />
                <span className="text-base md:text-lg lg:text-xl font-normal text-gray-700">(LAST THREE YEARS)</span>
              </h3>
              <div className="max-w-md mx-auto lg:mx-0">
                <DataTable columns={turnoverColumns} data={turnoverData} />
              </div>
            </div>
          </div>
          
          {/* Right side - Factory Image (40%) */}
          <div className="lg:col-span-2 flex justify-center">
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Factory Production"
              src="/rectangle-18.png"
            />
          </div>
        </div>
        
        {/* Memberships */}
        <div className="text-center mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-6 md:mb-8">
            MEMBERSHIPS
          </h3>
          <div className="text-sm md:text-lg lg:text-xl text-gray-700 space-y-2 md:space-y-3 max-w-4xl mx-auto">
            <div>• Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA).</div>
            <div>• Bangladesh Garment Manufacturers & Exporters Association (BGMEA).</div>
            <div>• Export Promotion Bureau Bangladesh (EPB).</div>
            <div>• Narayanganj Chamber of Commerce & Industries (NCCI).</div>
          </div>
        </div>
      </div>
    </section>
  );
};