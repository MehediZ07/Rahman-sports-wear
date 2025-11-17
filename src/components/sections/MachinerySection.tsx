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

// Knitting Section Data
const knittingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/3" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/2" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const knittingData = [
  { slNo: "1", machines: "Knitting Machine", specification: "Jiunn Long, Fukuhama, Weltex-- Taiwan & China", totalMachines: "37" },
];

// Dyeing Section Data
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
  { slNo: "7", machines: "Dyeing Machine", capacity: "600 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "8", machines: "Dyeing Machine", capacity: "800 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "9", machines: "Dyeing Machine", capacity: "1000 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "10", machines: "Dyeing Machine", capacity: "2000 Kgs", specification: "Canlar, Turkey", totalMachines: "1 Set" },
  { slNo: "11", machines: "Dyeing Machine", capacity: "25 Kgs", specification: "West Global, Turkey", totalMachines: "1 Set" },
  { slNo: "12", machines: "Dyeing Machine", capacity: "50 Kgs", specification: "West Global, Turkey", totalMachines: "1 Set" },
];

// Dyeing Finishing Section Data
const dyeingFinishingData = [
  { slNo: "1", machines: "Dyeing Heat setting Stenter", specification: "Ehwha, KOREA", totalMachines: "2 Set" },
  { slNo: "2", machines: "Compactor", specification: "Santex, Switzerland", totalMachines: "1 Set" },
  { slNo: "3", machines: "Compactor", specification: "Bianco, Italy", totalMachines: "1 Set", highlighted: true },
  { slNo: "4", machines: "Rope Opener & Slitting Line", specification: "Bianco, Italy", totalMachines: "1 Set" },
  { slNo: "5", machines: "DE threading Machine", specification: "Bianco, Italy", totalMachines: "1 Set" },
  { slNo: "6", machines: "Bag Sewing Machine", specification: "Bianco, Italy", totalMachines: "1 Set" },
];

// Dyeing Utility Data
const dyeingUtilityData = [
  { slNo: "1", machines: "Steam Boiler", specification: "Erensan, KOREA", totalMachines: "1 Set" },
  { slNo: "2", machines: "Diathermic Oil Boiler", specification: "Erensan, KOREA", totalMachines: "1 Set" },
  { slNo: "3", machines: "Gas Generator", specification: "Caterpillar, CHINA", totalMachines: "1 Set" },
  { slNo: "4", machines: "Diesel Generator", specification: "Tempest, UK", totalMachines: "1 Set", highlighted: true },
  { slNo: "5", machines: "Compressor", specification: "ADEKOM, China", totalMachines: "1 Set" },
  { slNo: "6", machines: "Compressor", specification: "Multiair", totalMachines: "1 Set" },
  { slNo: "7", machines: "Air Dryer", specification: "ADEKOM, China", totalMachines: "1 Set" },
  { slNo: "8", machines: "Air Dryer", specification: "Multiair", totalMachines: "1 Set" },
];

export const MachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          
          {/* Sewing Section - Text Left (50%), Image Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                MACHINERIES IN SEWING SECTION
              </h2>
              <DataTable columns={sewingColumns} data={sewingData} totalRow={sewingTotal} />
            </div>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Sewing Machinery"
                src="/rectangle-18.png"
              />
            </div>
          </div>

          {/* Cutting Section - Image Left (50%), Text Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Cutting Machinery"
                src="/rectangle-20.png"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                MACHINERIES IN CUTTING SECTION
              </h3>
              <DataTable columns={cuttingColumns} data={cuttingData} totalRow={cuttingTotal} />
            </div>
          </div>

          {/* Utility Machinery - Text Left (50%), Image Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                UTILITY MACHINERY
              </h3>
              <DataTable columns={cuttingColumns} data={utilityData} totalRow={utilityTotal} rowHeight="compact" />
            </div>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Utility Machinery"
                src="/rectangle-22.png"
              />
            </div>
          </div>

          {/* Knitting Unit - Image Left (50%), Text Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Knitting Machinery"
                src="/rectangle-19.png"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                MACHINERIES OF KNITTING UNIT
              </h3>
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                MACHINERIES IN KNITTING SECTION
              </h4>
              <DataTable columns={knittingColumns} data={knittingData} rowHeight="compact" />
            </div>
          </div>

          {/* Dyeing Unit - Text Left (50%), Image Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                MACHINERIES OF DYEING UNIT
              </h3>
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                MACHINERIES IN DYEING SECTION
              </h4>
              <DataTable columns={dyeingColumns} data={dyeingData} rowHeight="compact" />
            </div>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Dyeing Machinery"
                src="/rectangle-25.png"
              />
            </div>
          </div>

          {/* Dyeing Finishing Section - Image Left (50%), Text Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Finishing Machinery"
                src="/rectangle-26.png"
              />
            </div>
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                MACHINERIES IN FINISHING SECTION
              </h4>
              <DataTable columns={cuttingColumns} data={dyeingFinishingData} rowHeight="compact" />
            </div>
          </div>

          {/* Dyeing Utility Machinery - Text Left (50%), Image Right (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                UTILITY MACHINERY
              </h4>
              <DataTable columns={cuttingColumns} data={dyeingUtilityData} rowHeight="compact" />
            </div>
            <div>
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                alt="Dyeing Utility"
                src="/rectangle-24.png"
              />
            </div>
          </div>

          {/* Client Satisfaction - Image Left (50%), Text Right (50%) */}
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
              <div className="text-center lg:text-left">
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
    </section>
  );
};