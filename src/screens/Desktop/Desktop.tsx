import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTRACT", href: "#contract" },
];

const certificationLogos = [
  { src: "/isolation-mode-1.svg", className: "w-[220px] h-[78px]" },
  { src: "/isolation-mode.svg", className: "w-[212px] h-14" },
  { src: "/isolation-mode-4.svg", className: "w-[219px] h-[71px]" },
  { src: "/isolation-mode-3.svg", className: "w-[90px] h-[88px]" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <div className="w-full h-1 bg-[#cf181f]" />
      
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-r from-white via-white to-transparent">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Factory Background"
            src="/rectangle-3.png"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-20 py-20">
          <div className="max-w-2xl">
            <div className="space-y-6 text-black">
              <h1 className="text-4xl font-semibold">
                YEAR OF ESTABLISHMENT- <span className="text-[#cf181f]">2008</span>
              </h1>
              
              <div className="text-4xl font-semibold">
                TOTAL EMPLOYEE- <span className="text-[#cf181f]">1038</span>
              </div>
              
              <div className="text-4xl font-semibold">
                NUMBER OF SEWING LINES- <span className="text-[#cf181f]">18</span>
              </div>
              
              <div className="text-3xl space-y-2">
                <div className="font-semibold">TOTAL FLOOR SPACE</div>
                <div className="text-2xl">
                  Garments Unit <span className="text-[#cf181f] font-medium">60500</span> SQFT<br/>
                  Knitting & Dyeing Unit <span className="text-[#cf181f] font-medium">253328</span> SQFT
                </div>
                <div className="text-xl text-gray-600">
                  (Company Owned Land & Building.)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Factory Overview */}
      <section className="py-20">
        <div className="container mx-auto px-20">
          <img
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            alt="Factory Overview"
            src="/rectangle-4.png"
          />
        </div>
      </section>

      {/* Machinery Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-20">
          <div className="space-y-32">
            {/* Cutting Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  alt="Cutting Section"
                  src="/rectangle-18.png"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Machineries in Cutting Section
                </h3>
                <div className="text-xl space-y-2">
                  <div>1 | Fabric Inspection Machine | Bangladesh | 04</div>
                  <div>2 | Cutting Machine | KM, Japan | 12</div>
                </div>
              </div>
            </div>

            {/* Additional Machinery Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Machinery"
                src="/rectangle-19.png"
              />
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Machinery"
                src="/rectangle-21.png"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Machinery"
                src="/rectangle-20.png"
              />
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Machinery"
                src="/rectangle-26.png"
              />
            </div>

            {/* Utility Machinery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Utility Machinery
                </h3>
              </div>
              <div>
                <img
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  alt="Utility Machinery"
                  src="/rectangle-22.png"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="Lab Machinery"
                src="/rectangle-24.png"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-black mb-4">
                  Machineries of LAB
                </h3>
                <p className="text-xl text-gray-600">chart</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-black mb-4">
                  ETP
                </h3>
                <p className="text-xl text-gray-600">chart</p>
              </div>
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                alt="ETP"
                src="/rectangle-25.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#fff3df]">
        <div className="container mx-auto px-20 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              BUSINESS REGISTRATION NO. <span className="text-[#cf181f]">003809235-0204</span>
            </h2>
          </div>
          
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-[#cf181f] mb-12">
              CERTIFICATIONS
            </h3>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              {certificationLogos.map((logo, index) => (
                <img
                  key={`cert-${index}`}
                  className={logo.className}
                  alt="Certification"
                  src={logo.src}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#cf181f] mb-8">
              MEMBERSHIPS
            </h3>
            <div className="text-2xl text-gray-700 space-y-2 max-w-4xl mx-auto">
              <div>Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA).</div>
              <div>Bangladesh Garment Manufacturers & Exporters Association (BGMEA).</div>
              <div>Export Promotion Bureau Bangladesh (EPB).</div>
              <div>Narayanganj Chamber of Commerce & Industries (NCCI).</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-20">
          <h2 className="text-4xl font-bold text-black mb-16 text-center">
            Contact Us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="w-full h-14 bg-gray-200 border-none text-xl px-6"
                  />
                </div>
                
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full h-14 bg-gray-200 border-none text-xl px-6"
                  />
                </div>
                
                <div className="relative">
                  <Textarea
                    placeholder="Message"
                    className="w-full h-40 bg-gray-200 border-none text-xl px-6 py-4 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-gray-200 hover:bg-gray-300 text-black text-xl font-semibold px-8 py-3 h-auto"
                >
                  SUBMIT
                </Button>
              </form>
            </div>

            {/* Address */}
            <div className="bg-gray-200 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-[#cf181f] mb-4">
                    Address
                  </h3>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                    Office & Garments Unit
                  </h4>
                  <p className="text-xl text-gray-700">
                    Plot B-369,370,371,<br/>
                    BSCIC I/E, Shasongaon,Fatullah<br/>
                    Narayanganj-1420, Bangladesh.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                    Knitting & Dyeing Unit
                  </h4>
                  <p className="text-xl text-gray-700">
                    Purbo Keodhala, Madanpur<br/>
                    Bandar, Narayanganj.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center mt-16 space-y-4">
            <div className="flex justify-center mb-4">
              <img
                className="w-8 h-8"
                alt="Email Icon"
                src="/4092561-envelope-mail-mobile-ui-message-email-icon-1.svg"
              />
            </div>
            <div className="text-2xl text-gray-700 space-y-2">
              <div>rsw@dhaka.net</div>
              <div>+880-2-997746612 +880-2-997746913</div>
              <div>rahmansportswear@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-20 text-center">
          <p className="text-gray-600">
            © 2024 Rahman Sport Wear Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
