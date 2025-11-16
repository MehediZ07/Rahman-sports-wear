import React, { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTRACT", href: "#contract" },
];

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
		<div className="container px-4 py-4 mx-auto md:px-8 lg:px-20 md:py-6 lg:py-8">
			<div className="flex items-center justify-between">
				<img
				className="w-[120px] h-[48px] md:w-[160px] md:h-[64px] lg:w-[211px] lg:h-[85px]"
				alt="Rahman Sport Wear Logo"
				src="/isolation-mode-2.svg"
				/>
				
				{/* Desktop menu */}
				<div className="hidden gap-4 md:flex lg:gap-12">
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
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-black hover:text-[#cf181f] transition-colors"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{isMenuOpen ? (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					) : (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					)}
					</svg>
				</button>
				</div>
			</div>
			
			{/* Mobile dropdown menu */}
			{isMenuOpen && (
				<div className="pb-4 mt-4 border-t border-gray-200 md:hidden">
				<div className="flex flex-col pt-4 space-y-3">
					{navLinks.map((link, index) => (
					<a
						key={`mobile-nav-${index}`}
						href={link.href}
						onClick={() => setIsMenuOpen(false)}
						className="font-semibold text-black text-lg tracking-[2px] hover:text-[#cf181f] transition-colors py-2"
					>
						{link.label}
					</a>
					))}
				</div>
				</div>
			)}
		</div>
    </nav>
  );
};