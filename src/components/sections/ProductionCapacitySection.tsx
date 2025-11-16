import React from "react";

export const ProductionCapacitySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Factory Image */}
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Factory Production"
              src="/rectangle-20.png"
            />
          </div>
          
          {/* Right side - Content */}
          <div>
            <div className="space-y-8 md:space-y-12">
              {/* Production Capacity */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  PRODUCTION CAPACITY
                  <br />
                  <span className="text-lg md:text-xl lg:text-2xl font-normal text-gray-600">PER DAY</span>
                </h2>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-gray-700">
                  <div>
                    <span className="font-semibold">30,000 Pieces</span>
                    <br />
                    <span>of Basic T shirts &</span>
                  </div>
                  <div>
                    <span className="font-semibold">5,000 Pieces</span>
                    <br />
                    <span>of Polo Shirts.</span>
                  </div>
                </div>
              </div>

              {/* Product Range */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  PRODUCT RANGE
                </h3>
                <div className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  All kinds of
                  <br />
                  T- shirts, Polo shirts,
                  <br />
                  Tank Top, Vest, Shorts, Pyjama,
                  <br />
                  Sweat Shirt, Hoodies etc.
                </div>
              </div>

              {/* Banker */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  BANKER
                </h3>
                <div className="space-y-4 text-sm md:text-base lg:text-lg text-gray-700">
                  <div>
                    <div className="font-semibold text-gray-800">Dhaka Bank Ltd.</div>
                    <div className="text-sm md:text-base">Narayanganj Branch</div>
                    <div>50, S.M Maleh Road, Tanbazar</div>
                    <div>Narayanganj-1400, Bangladesh</div>
                    <div className="font-medium">SWIFT: DHBLBDDH105</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-800">Shahjalal Islami Bank PLC.</div>
                    <div className="text-sm md:text-base">Foreign Exchange Branch, Humayun Court</div>
                    <div>(Ground & 1st Floor), 21 Motijheel C/A,</div>
                    <div>Dhaka-1000, Bangladesh</div>
                    <div className="font-medium">SWIFT: SJBLBDDHMHK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};