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
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              MACHINERIES OF LAB
            </h2>
            <DataTable
              columns={labMachineryColumns}
              data={labMachineryData}
            />
          </div>
          <div>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Lab Equipment"
              src="/rectangle-25.png"
            />
          </div>
        </div>
      </div>
    </section>
  );

};