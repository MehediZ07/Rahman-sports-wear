import React from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTRACT", href: "#contract" },
];

export const Navigation = (): JSX.Element => {
  return (
    <nav className="container mx-auto px-20 py-8">
      <div className="flex items-center justify-between">
        <img
          className="w-[211px] h-[85px]"
          alt="Rahman Sport Wear Logo"
          src="/isolation-mode-2.svg"
        />
        <div className="flex gap-12">
          {navLinks.map((link, index) => (
            <a
              key={`nav-${index}`}
              href={link.href}
              className="font-semibold text-black text-lg tracking-[3.6px] hover:text-[#cf181f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};