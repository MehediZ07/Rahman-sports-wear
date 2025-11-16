import React from "react";
import { DataTable } from "../ui/DataTable";

const labMachineryColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/2" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/4" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const labMachineryData = [
  { slNo: "1", machines: "Spectrophotometer", specification: "Nashpro", totalMachines: "1" },
  { slNo: "2", machines: "Auto Dispensing Machine: EZ DOSER", specification: "Nashpro", totalMachines: "1" },
  { slNo: "3", machines: "ECO DYER", specification: "Nashpro", totalMachines: "1" },
  { slNo: "4", machines: "Laboratory Mini Dryer", specification: "Nashpro", totalMachines: "1" },
  { slNo: "5", machines: "Electrolux Washing Machine", specification: "Nashpro", totalMachines: "1", highlighted: true },
  { slNo: "6", machines: "Drying oven/Incubator", specification: "Nashpro", totalMachines: "1" },
  { slNo: "7", machines: "Colour Fastness to wash tester", specification: "Nashpro", totalMachines: "1" },
  { slNo: "8", machines: "Electronic Crockmeter", specification: "Nashpro", totalMachines: "1" },
  { slNo: "9", machines: "SDC ISO GREY SCALE", specification: "Nashpro", totalMachines: "1" },
];

export const LabSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Lab Images */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-lg md:text-xl text-gray-700">
              Here are some images from inside our lab.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="flex justify-center">
              <img
                className="w-full max-w-[300px] h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                alt="Lab Equipment 1"
                src="/rectangle-24.png"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-[300px] h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                alt="Lab Equipment 2"
                src="/rectangle-26.png"
              />
            </div>
            <div className="flex justify-center">
              <img
                className="w-full max-w-[300px] h-[200px] md:h-[250px] object-cover rounded-lg shadow-lg"
                alt="Lab Equipment 3"
                src="/rectangle-22.png"
              />
            </div>
          </div>
        </div>

        {/* Lab Machinery Section */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cf181f] mb-2">
              MACHINERIES OF LAB
            </h2>
          </div>
          
          <DataTable
            columns={labMachineryColumns}
            data={labMachineryData}
          />
        </div>

        {/* Quality Assurance Message */}
        <div className="mt-8 md:mt-12 bg-gray-100 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Quality Assurance & Testing
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our state-of-the-art laboratory ensures every product meets international quality standards through comprehensive testing and quality control processes.
          </p>
        </div>
      </div>
    </section>
  );
};