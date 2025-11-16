import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 md:mb-12 lg:mb-16 text-center">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <form className="space-y-4 md:space-y-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 md:h-14 bg-gray-200 border-none text-base md:text-lg lg:text-xl px-4 md:px-6"
                />
              </div>
              
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 md:h-14 bg-gray-200 border-none text-base md:text-lg lg:text-xl px-4 md:px-6"
                />
              </div>
              
              <div className="relative">
                <Textarea
                  placeholder="Message"
                  className="w-full h-32 md:h-40 bg-gray-200 border-none text-base md:text-lg lg:text-xl px-4 md:px-6 py-3 md:py-4 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 text-black text-base md:text-lg lg:text-xl font-semibold px-6 md:px-8 py-2 md:py-3 h-auto"
              >
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Address */}
          <div className="bg-gray-200 p-4 md:p-6 lg:p-8 rounded-lg">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#cf181f] mb-2 md:mb-3 lg:mb-4">
                  Address
                </h3>
              </div>
              
              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">
                  Office & Garments Unit
                </h4>
                <p className="text-sm md:text-base lg:text-xl text-gray-700">
                  Plot B-369,370,371,<br/>
                  BSCIC I/E, Shasongaon,Fatullah<br/>
                  Narayanganj-1420, Bangladesh.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 md:mb-2">
                  Knitting & Dyeing Unit
                </h4>
                <p className="text-sm md:text-base lg:text-xl text-gray-700">
                  Purbo Keodhala, Madanpur<br/>
                  Bandar, Narayanganj.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16 space-y-2 md:space-y-4">
          <div className="flex justify-center mb-2 md:mb-4">
            <img
              className="w-6 h-6 md:w-8 md:h-8"
              alt="Email Icon"
              src="/4092561-envelope-mail-mobile-ui-message-email-icon-1.svg"
            />
          </div>
          <div className="text-sm md:text-lg lg:text-2xl text-gray-700 space-y-1 md:space-y-2">
            <div>rsw@dhaka.net</div>
            <div>+880-2-997746612 +880-2-997746913</div>
            <div>rahmansportswear@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};