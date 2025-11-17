import React from "react";
import { DataTable } from "../ui/DataTable";
import { motion } from "framer-motion";

const knittingColumns = [
  { key: "slNo", header: "SL. NO", width: "w-16" },
  { key: "machines", header: "MACHINES", width: "w-1/3" },
  { key: "specification", header: "SPECIFICATION & BRAND", width: "w-1/2" },
  { key: "totalMachines", header: "TOTAL NO. OF MACHINES", width: "w-1/6" },
];

const knittingData = [
  { slNo: "1", machines: "Knitting Machine", specification: "Jiunn Long, Fukuhama, Weltex-- Taiwan & China", totalMachines: "37" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const KnittingMachinerySection = (): JSX.Element => {
  return (
    <section className="py-8 md:py-12 lg:py-20">
      <div className="container px-4 mx-auto md:px-8 lg:px-20">
        <motion.div 
          className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              alt="Knitting Machinery"
              src="/rectangle-21.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Machineries in Knitting Section
            </h2>
            <DataTable columns={knittingColumns} data={knittingData} rowHeight="compact" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};