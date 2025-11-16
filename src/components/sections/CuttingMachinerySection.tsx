import React from "react";
import { DataTable } from "../ui/DataTable";

const cuttingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/2" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const cuttingData = [
  { slNo: "1", machines: "Fabric Inspection Machine", specification: "Bangladesh", totalMachines: "04", highlighted: true },
  { slNo: "2", machines: "Cutting Machine", specification: "KM, Japan", totalMachines: "12" },
];

const cuttingTotal = { slNo: "", machines: "", specification: "TOTAL", totalMachines: "16" };

export const CuttingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Cutting Section
            </h2>
            <DataTable columns={cuttingColumns} data={cuttingData} totalRow={cuttingTotal} rowHeight="compact" />
          </div>
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Knitting Machinery"
              src="/rectangle-19.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};