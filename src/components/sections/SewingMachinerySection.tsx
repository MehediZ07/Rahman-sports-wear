import React from "react";
import { DataTable } from "../ui/DataTable";
import { motion } from "framer-motion";

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

export const SewingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              ease: "backOut",
              scale: { type: "spring", stiffness: 100 }
            }}
          >
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Sewing Machinery"
              src="/rectangle-18.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Sewing Section
            </h2>
            <DataTable columns={sewingColumns} data={sewingData} totalRow={sewingTotal} rowHeight="compact" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};