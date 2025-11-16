import React from "react";

export const MachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="space-y-12 md:space-y-20 lg:space-y-32">
          {/* Cutting Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <img
                className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                alt="Cutting Section"
                src="/rectangle-18.png"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4 lg:mb-6">
                Machineries in Cutting Section
              </h3>
              <div className="text-sm md:text-base lg:text-xl space-y-1 md:space-y-2">
                <div>1 | Fabric Inspection Machine | Bangladesh | 04</div>
                <div>2 | Cutting Machine | KM, Japan | 12</div>
              </div>
            </div>
          </div>

          {/* Additional Machinery Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-19.png"
            />
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-21.png"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-20.png"
            />
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-26.png"
            />
          </div>

          {/* Utility Machinery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4 lg:mb-6">
                Utility Machinery
              </h3>
            </div>
            <div className="order-1 lg:order-2">
              <img
                className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                alt="Utility Machinery"
                src="/rectangle-22.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Lab Machinery"
              src="/rectangle-24.png"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-3 lg:mb-4">
                Machineries of LAB
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">chart</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2 md:mb-3 lg:mb-4">
                ETP
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">chart</p>
            </div>
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg order-1 md:order-2"
              alt="ETP"
              src="/rectangle-25.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};