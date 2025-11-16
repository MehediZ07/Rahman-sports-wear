import React from "react";
import { DataTable } from "../ui/DataTable";

const utilityColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/2" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const utilityData = [
  { slNo: "1", machines: "Generator (Volvo Penta)", specification: "Gen Pac, Sweden", totalMachines: "02" },
  { slNo: "2", machines: "Boiler", specification: "Power Tech, Bangladesh", totalMachines: "02", highlighted: true },
  { slNo: "3", machines: "Compressor", specification: "SWAN, Thailand", totalMachines: "04" },
];

const utilityTotal = { slNo: "", machines: "", specification: "TOTAL", totalMachines: "08" };

export const UtilityMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Utility Machinery
            </h2>
            <DataTable columns={utilityColumns} data={utilityData} totalRow={utilityTotal} rowHeight="compact" />
          </div>
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Utility Machinery"
              src="/rectangle-24.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};