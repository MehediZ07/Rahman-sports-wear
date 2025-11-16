import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[700px] bg-gradient-to-r from-white via-white to-transparent">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          alt="Factory Background"
          src="/rectangle-3.png"
        />
      </div>
      
      <div className="container relative z-10 px-4 py-8 mx-auto md:px-8 lg:px-20 md:py-12 lg:py-20">
        <div className="h-full max-w-full lg:pt-20 md:max-w-3xl lg:max-w-2xl">
          <div className="space-y-3 text-black md:space-y-4 lg:space-y-6">
            <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl">
              YEAR OF ESTABLISHMENT- <span className="text-[#cf181f]">2008</span>
            </h1>
            
            <div className="text-lg font-semibold md:text-2xl lg:text-4xl">
              TOTAL EMPLOYEE- <span className="text-[#cf181f]">1038</span>
            </div>
            
            <div className="text-lg font-semibold md:text-2xl lg:text-4xl">
              NUMBER OF SEWING LINES- <span className="text-[#cf181f]">18</span>
            </div>
            
            <div className="space-y-1 text-base md:text-xl lg:text-3xl md:space-y-2">
              <div className="font-semibold">TOTAL FLOOR SPACE</div>
              <div className="text-sm md:text-lg lg:text-2xl">
                Garments Unit <span className="text-[#cf181f] font-medium">60500</span> SQFT<br/>
                Knitting & Dyeing Unit <span className="text-[#cf181f] font-medium">253328</span> SQFT
              </div>
              <div className="text-sm text-gray-600 md:text-base lg:text-xl">
                (Company Owned Land & Building.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};