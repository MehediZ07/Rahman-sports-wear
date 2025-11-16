import React from "react";
import { DataTable } from "../ui/DataTable";

const finishingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/2" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const finishingData = [
  { slNo: "1", machines: "Metal Detector", specification: "Hashima, China", totalMachines: "02" },
  { slNo: "2", machines: "Thread Sucking Machine", specification: "Bangladesh", totalMachines: "12", highlighted: true },
  { slNo: "3", machines: "Steam Iron", specification: "Silver Star, Korea", totalMachines: "36" },
];

export const FinishingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Finishing Machinery"
              src="/rectangle-22.png"
            />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Finishing Section
            </h2>
            <DataTable columns={finishingColumns} data={finishingData} rowHeight="compact" />
          </div>
        </div>
      </div>
    </section>
  );
};