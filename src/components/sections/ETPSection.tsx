import React from "react";
import { DataTable } from "../ui/DataTable";
import { SlideInLeft, SlideInRight } from "../ui/AnimatedSection";

const etpColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/3" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/2" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const etpData = [
  { slNo: "1", machines: "ETP", specification: "Biological, Pantarai", totalMachines: "1" },
];

export const ETPSection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <SlideInLeft>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="ETP Control Room"
              src="/rectangle-26.png"
            />
          </SlideInLeft>
          <SlideInRight delay={0.2}>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              DESCRIPTION OF ETP
            </h2>
            <DataTable
              columns={etpColumns}
              data={etpData}
            />
            <div className="mt-6 space-y-4 text-base text-gray-700 md:text-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full"></div>
                <div>Biological wastewater treatment for textile discharge with fine screen.</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full"></div>
                <div>CAS technology, final clarifier with lamella packs, dissolved oxygen increase system, laboratory equipment, PantApp and inverters for all blowers.</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full"></div>
                <div>Total flow: 1800 m3/day.</div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};