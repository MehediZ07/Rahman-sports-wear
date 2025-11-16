import React from "react";
import { DataTable } from "../ui/DataTable";

const sewingMachineryColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/3" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/4" },
];

const sewingMachineryData = [
  { slNo: "1", machines: "Over Lock", specification: "Pegasus, Japan", totalMachines: "129" },
  { slNo: "2", machines: "Cylinder Bed Lock Stitch", specification: "Pegasus, Japan", totalMachines: "60" },
  { slNo: "3", machines: "Flat Bed Lock Stitch", specification: "Pegasus, Japan", totalMachines: "22" },
  { slNo: "4", machines: "Plane Machine", specification: "Juki & Brother, Japan", totalMachines: "51" },
  { slNo: "5", machines: "Feed Of The ARM", specification: "Brother, Japan", totalMachines: "22", highlighted: true },
  { slNo: "6", machines: "Rib Cutter", specification: "Cheng Feng, China", totalMachines: "06" },
  { slNo: "7", machines: "Button Hole & Button Stitch", specification: "Brother, Japan", totalMachines: "03" },
  { slNo: "8", machines: "Elastic Attaching Machine", specification: "Kansai, Japan", totalMachines: "03" },
  { slNo: "9", machines: "Bar TAK", specification: "Juki, Japan", totalMachines: "02" },
  { slNo: "10", machines: "Eyelet", specification: "China", totalMachines: "02" },
];

const sewingMachineryTotal = {
  slNo: "",
  machines: "",
  specification: "TOTAL",
  totalMachines: "300",
};

export const SewingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left side - Yarn/Fabric Image */}
          <div className="order-2 lg:order-1">
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Fabric and Yarn"
              src="/rectangle-19.png"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Memberships */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                MEMBERSHIPS
              </h2>
              <div className="space-y-2 text-sm md:text-base text-gray-700">
                <div>• Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA).</div>
                <div>• Bangladesh Garment Manufacturers & Exporters Association (BGMEA).</div>
                <div>• Export Promotion Bureau Bangladesh (EPB).</div>
                <div>• Narayanganj Chamber of Commerce & Industries (NCCI).</div>
              </div>
            </div>
            
            {/* Machinery Section Title */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                MACHINERIES OF GARMENTS UNIT
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                MACHINERIES IN SEWING SECTION
              </h3>
            </div>
          </div>
        </div>
        
        {/* Table */}
        <div className="mt-8 md:mt-12">
          <DataTable
            columns={sewingMachineryColumns}
            data={sewingMachineryData}
            totalRow={sewingMachineryTotal}
          />
        </div>
      </div>
    </section>
  );
};