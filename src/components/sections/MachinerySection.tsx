import React from "react";

export const MachinerySection = (): JSX.Element => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-20">
        <div className="space-y-32">
          {/* Cutting Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Cutting Section"
                src="/rectangle-18.png"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Machineries in Cutting Section
              </h3>
              <div className="text-xl space-y-2">
                <div>1 | Fabric Inspection Machine | Bangladesh | 04</div>
                <div>2 | Cutting Machine | KM, Japan | 12</div>
              </div>
            </div>
          </div>

          {/* Additional Machinery Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-19.png"
            />
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-21.png"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-20.png"
            />
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Machinery"
              src="/rectangle-26.png"
            />
          </div>

          {/* Utility Machinery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Utility Machinery
              </h3>
            </div>
            <div>
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Utility Machinery"
                src="/rectangle-22.png"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Lab Machinery"
              src="/rectangle-24.png"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                Machineries of LAB
              </h3>
              <p className="text-xl text-gray-600">chart</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-black mb-4">
                ETP
              </h3>
              <p className="text-xl text-gray-600">chart</p>
            </div>
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="ETP"
              src="/rectangle-25.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};