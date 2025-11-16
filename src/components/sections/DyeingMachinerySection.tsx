import React from "react";
import { DataTable } from "../ui/DataTable";

const dyeingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/4" },
  { key: "capacity", header: "CAPACITY", width: "w-1/6" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const dyeingData = [
  { slNo: "1", machines: "Dyeing Machine", capacity: "15 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "2", machines: "Dyeing Machine", capacity: "25 Kgs", specification: "Canlar, Turkey", totalMachines: "2 Set" },
  { slNo: "3", machines: "Dyeing Machine", capacity: "50 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "4", machines: "Dyeing Machine", capacity: "100 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "5", machines: "Dyeing Machine", capacity: "200 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set", highlighted: true },
  { slNo: "6", machines: "Dyeing Machine", capacity: "400 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
];

export const DyeingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Dyeing Section
            </h2>
            <DataTable columns={dyeingColumns} data={dyeingData} rowHeight="compact" />
          </div>
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Dyeing Machinery"
              src="/rectangle-20.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};