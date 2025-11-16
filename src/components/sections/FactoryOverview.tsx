import React from "react";

export const FactoryOverview = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="relative">
          <img
            className="w-full aspect-[1440/952] object-cover rounded-lg shadow-lg"
            alt="Factory Overview"
            src="/rectangle-4.png"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-start p-8 md:p-12 lg:p-16">
            <div className="text-white space-y-6 md:space-y-8">
              {/* Production Capacity */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  PRODUCTION CAPACITY PER DAY
                </h2>
                <div className="text-lg md:text-xl lg:text-2xl space-y-2">
                  <div>
                    <span className="text-[#cf181f] font-bold">30,000</span> Pieces of<br />
                    Basic T shirts &
                  </div>
                  <div>
                    <span className="text-[#cf181f] font-bold">5,000</span> Pieces of<br />
                    Polo Shirts.
                  </div>
                </div>
              </div>
              
              {/* Product Range */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  PRODUCT RANGE
                </h3>
                <div className="text-base md:text-lg lg:text-xl">
                  All kinds of<br />
                  T- shirts, Polo Shirts, Tank Top,<br />
                  Vest, Shorts, Pyjama, Sweat Shirt,<br />
                  Hoodies<br />
                  etc.
                </div>
              </div>
              
              {/* Yearly Turnover */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  YEARLY TURN OVER (LAST 3 YEARS)
                </h3>
                <div className="text-base md:text-lg lg:text-xl space-y-1">
                  <div className="font-semibold">US $ (IN MILLION)</div>
                  <div>2022-2023 - 17.26</div>
                  <div>2023-2024 - 10.29</div>
                  <div>2024-2025 - 21.40</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};