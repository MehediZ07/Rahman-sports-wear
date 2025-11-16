import React from "react";

export const FactoryOverview = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <img
          className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg"
          alt="Factory Overview"
          src="/rectangle-4.png"
        />
      </div>
    </section>
  );
};