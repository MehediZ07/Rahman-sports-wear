import React from "react";
import { DataTable } from "../ui/DataTable";

// Sewing Section Data
const sewingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/3" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/4" },
];

const sewingData = [
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

const sewingTotal = { slNo: "", machines: "", specification: "TOTAL", totalMachines: "300" };

// Cutting Section Data
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

// Finishing Section Data
const finishingData = [
  { slNo: "1", machines: "Metal Detector", specification: "Hashima, China", totalMachines: "02" },
  { slNo: "2", machines: "Thread Sucking Machine", specification: "Bangladesh", totalMachines: "12", highlighted: true },
  { slNo: "3", machines: "Steam Iron", specification: "Silver Star, Korea", totalMachines: "36" },
];

const finishingTotal = { slNo: "", machines: "", specification: "TOTAL", totalMachines: "44" };

// Utility Machinery Data
const utilityData = [
  { slNo: "1", machines: "Generator (Volvo Penta)", specification: "Gen Pac, Sweden", totalMachines: "02" },
  { slNo: "2", machines: "Boiler", specification: "Power Tech, Bangladesh", totalMachines: "02", highlighted: true },
  { slNo: "3", machines: "Compressor", specification: "SWAN, Thailand", totalMachines: "04" },
];

const utilityTotal = { slNo: "", machines: "", specification: "TOTAL", totalMachines: "08" };

export const MachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          
          {/* Sewing Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-8 md:mb-12">
              <div>
                <img
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                  alt="Fabric and Yarn"
                  src="/rectangle-19.png"
                />
              </div>
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    MACHINERIES OF GARMENTS UNIT
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
                    MACHINERIES IN SEWING SECTION
                  </h3>
                </div>
              </div>
            </div>
            <DataTable columns={sewingColumns} data={sewingData} totalRow={sewingTotal} />
          </div>

          {/* Cutting Section */}
          <div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                MACHINERIES IN CUTTING SECTION
              </h3>
            </div>
            <DataTable columns={cuttingColumns} data={cuttingData} totalRow={cuttingTotal} />
          </div>

          {/* Finishing Section */}
          <div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                MACHINERIES IN FINISHING SECTION
              </h3>
            </div>
            <DataTable columns={cuttingColumns} data={finishingData} totalRow={finishingTotal} />
          </div>

          {/* Utility Machinery */}
          <div>
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                UTILITY MACHINERY
              </h3>
            </div>
            <DataTable columns={cuttingColumns} data={utilityData} totalRow={utilityTotal} />
          </div>

          {/* Client Satisfaction Message */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="relative">
                <img
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
                  alt="Factory Floor"
                  src="/rectangle-4.png"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white p-6 md:p-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      we are
                      <br />
                      happy to
                      <br />
                      <span className="text-gray-300">satisfied</span>
                      <br />
                      our
                      <br />
                      client.
                    </h2>
                    <div className="w-16 h-1 bg-[#cf181f] mx-auto mt-6"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    Customer Satisfaction
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Our commitment to quality and excellence ensures that every client receives products that exceed their expectations. We take pride in building long-term partnerships through consistent delivery and superior service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};