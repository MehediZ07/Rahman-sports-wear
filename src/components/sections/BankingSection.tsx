import React from "react";

export const BankingSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Right side - Banking Info (60%) */}
          <div className="lg:col-span-3 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
              BANKER
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-sm md:text-base lg:text-lg text-gray-700">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-800 text-lg mb-2">Dhaka Bank Ltd.</div>
                <div className="space-y-1">
                  <div>Narayanganj Branch</div>
                  <div>50, S.M Maleh Road, Tanbazar</div>
                  <div>Narayanganj-1400, Bangladesh</div>
                  <div className="font-medium text-[#cf181f] mt-2">SWIFT: DHBLBDDH105</div>
                </div>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-800 text-lg mb-2">Shahjalal Islami Bank PLC.</div>
                <div className="space-y-1">
                  <div>Foreign Exchange Branch, Humayun Court</div>
                  <div>(Ground & 1st Floor), 21 Motijheel C/A,</div>
                  <div>Dhaka-1000, Bangladesh</div>
                  <div className="font-medium text-[#cf181f] mt-2">SWIFT: SJBLBDDHMHK</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Left side - Image (40%) */}
          <div className="lg:col-span-2 lg:order-1">
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Banking Partnership"
              src="/rectangle-21.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};