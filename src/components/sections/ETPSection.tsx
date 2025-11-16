import React from "react";
import { DataTable } from "../ui/DataTable";

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
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            DESCRIPTION OF ETP
          </h2>
        </div>

        {/* ETP Table */}
        <div className="mb-8 md:mb-12">
          <DataTable
            columns={etpColumns}
            data={etpData}
          />
        </div>

        {/* ETP Details */}
        <div className="mb-8 md:mb-12 space-y-4 text-base md:text-lg text-gray-700">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>Biological wastewater treatment for textile discharge with fine screen.</div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>CAS technology, final clarifier with lamella packs, dissolved oxygen increase system, laboratory equipment, PantApp and inverters for all blowers.</div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>Total flow: 1800 m3/day.</div>
          </div>
        </div>

        {/* Environmental Message */}
        <div className="bg-gray-200 rounded-lg p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center leading-relaxed">
            WE PRIORITIZE WATER REUSE, EFFICIENT SLUDGE MANAGEMENT AND CONTINUOUS MONITORING TO MINIMIZE ENVIRONMENTAL IMPACT.
          </h3>
        </div>

        {/* ETP Control Room Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="ETP Control Room"
              src="/rectangle-25.png"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                ETP Control & Monitoring System
              </h4>
              <p className="text-base md:text-lg text-gray-600 mt-4">
                Advanced monitoring and control systems ensure optimal wastewater treatment performance and environmental compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};