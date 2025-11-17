import React from "react";
import { DataTable } from "../ui/DataTable";
import { motion } from "framer-motion";

const finishingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/2" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/3" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const finishingData = [
  { slNo: "1", machines: "Dyeing Heat setting Stenter", specification: "Ehwha, KOREA", totalMachines: "2 Set" },
  { slNo: "2", machines: "Compactor", specification: "Santex, Switzerland", totalMachines: "1 Set" },
  { slNo: "3", machines: "Compactor", specification: "Bianco, Italy", totalMachines: "1 Set", highlighted: true },
  { slNo: "4", machines: "Rope Opener & Slitting Line", specification: "Bianco, Italy", totalMachines: "1 Set" },
  { slNo: "5", machines: "DE threading Machine", specification: "Bianco, Italy", totalMachines: "1 Set" },
  { slNo: "6", machines: "Bag Sewing Machine", specification: "Bianco, Italy", totalMachines: "1 Set" },
];

export const FinishingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Finishing Machinery"
              src="/rectangle-22.png"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Finishing Section
            </h2>
            <DataTable columns={finishingColumns} data={finishingData} rowHeight="compact" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};