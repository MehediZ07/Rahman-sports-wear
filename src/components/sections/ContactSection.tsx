import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactSection = (): JSX.Element => {
  return (
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
  );
};