import React from "react";

export const AboutSection = (): JSX.Element => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#cf181f] mb-8">
              RAHMAN SPORT WEAR LTD.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              As a 100% export oriented factory, Rahman Sport Wear Ltd. has
              established itself as a capable and competitive player in the RMG world.
              Commencing operations in 2008, it has grown to accommodate over 1000
              employees across various departments. Primary operations include
              knitting, dyeing, sewing and finishing. Driven by vision and
              persistence, Rahman Sports Wear Ltd. is committed to achieving greater
              milestones and continuing to make a meaningful impact on the RMG sector
              in the years ahead.
            </p>
          </div>
          <div>
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              alt="Factory Building"
              src="/rectangle-2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};