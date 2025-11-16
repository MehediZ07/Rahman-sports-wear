import React from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTRACT", href: "#contract" },
];

export const Navigation = (): JSX.Element => {
  return (
    <nav className="container mx-auto px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-8">
      <div className="flex items-center justify-between">
        <img
          className="w-[120px] h-[48px] md:w-[160px] md:h-[64px] lg:w-[211px] lg:h-[85px]"
          alt="Rahman Sport Wear Logo"
          src="/isolation-mode-2.svg"
        />
        <div className="hidden md:flex gap-4 lg:gap-12">
          {navLinks.map((link, index) => (
            <a
              key={`nav-${index}`}
              href={link.href}
              className="font-semibold text-black text-sm md:text-base lg:text-lg tracking-[2px] lg:tracking-[3.6px] hover:text-[#cf181f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-black hover:text-[#cf181f]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};