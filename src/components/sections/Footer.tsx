import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="py-4 md:py-6 lg:py-8 bg-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 text-center">
        <p className="text-sm md:text-base text-gray-600">
          © 2024 Rahman Sport Wear Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};