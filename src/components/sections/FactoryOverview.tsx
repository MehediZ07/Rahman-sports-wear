import React from "react";
import { motion } from "framer-motion";
import { FadeInUp } from "../ui/AnimatedSection";

export const FactoryOverview = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="w-full aspect-[1440/952] object-cover rounded-lg shadow-lg"
            alt="Factory Overview"
            src="/rectangle-4.png"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-start p-3 xs:p-4 sm:p-6 md:p-8 lg:p-16">
            <FadeInUp delay={0.3}>
              <div className="text-white space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-full">
                {/* Production Capacity */}
                <div>
                  <h2 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-4xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 leading-tight">
                    PRODUCTION CAPACITY PER DAY
                  </h2>
                  <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl space-y-1 leading-tight">
                    <div>
                      <span className="text-[#cf181f] font-bold">30,000</span> Pieces of Basic T shirts &
                    </div>
                    <div>
                      <span className="text-[#cf181f] font-bold">5,000</span> Pieces of Polo Shirts.
                    </div>
                  </div>
                </div>
                
                {/* Product Range */}
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 leading-tight">
                    PRODUCT RANGE
                  </h3>
                  <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    <div className="block lg:hidden">
                      All kinds of T-shirts, Polo Shirts, Tank Top, Vest, Shorts, Pyjama, Sweat Shirt, Hoodies etc.
                    </div>
                    <div className="hidden lg:block">
                      All kinds of<br />
                      T-shirts, Polo Shirts, Tank Top,<br />
                      Vest, Shorts, Pyjama, Sweat Shirt,<br />
                      Hoodies<br />
                      etc.
                    </div>
                  </div>
                </div>
                
                {/* Yearly Turnover */}
                <div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 leading-tight">
                    YEARLY TURN OVER (LAST 3 YEARS)
                  </h3>
                  <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl space-y-0.5 xs:space-y-1 leading-tight">
                    <div className="font-semibold">US $ (IN MILLION)</div>
                    <div>2022-2023 - 17.26</div>
                    <div>2023-2024 - 10.29</div>
                    <div>2024-2025 - 21.40</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </motion.div>
      </div>
    </section>
  );
};