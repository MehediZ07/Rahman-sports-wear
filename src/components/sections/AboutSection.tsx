import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left side - Content (50%) */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-4 md:mb-6 lg:mb-8">
              RAHMAN SPORT WEAR LTD.
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
              As a 100% export oriented factory, Rahman Sport Wear Ltd. has established itself as a capable and 
              competitive player in the RMG world. Commencing operations in 2008, it has grown to 
              accommodate over 1000 employees across various departments. Primary operations include 
              knitting, dyeing, sewing and finishing. Driven by vision and persistence, Rahman Sports Wear Ltd. is 
              committed to achieving greater milestones and continuing to make a meaningful impact on the 
              RMG sector in the years ahead.
            </p>
          </div>
          
          {/* Right side - Image (50%) */}
          <div>
            <img
              className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
              alt="Factory Building"
              src="/rectangle-2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};