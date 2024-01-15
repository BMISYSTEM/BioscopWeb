import React from "react";
import { motion } from "framer-motion";

const Veneficios = () => {
  return (
    <motion.section className="flex flex-col gap-5 p-2">
      {/* rows informativos */}
      <motion.div 
      initial={{ x: 100,opacity:0,display:'hidden'}}
      transition={{
        duration: .7
      }}
      whileInView={{ x: 0,opacity:1}}
      className="flex flex-row gap-10 justify-between items-center ">
        {/* imagen */}
        <div className="w-full h-96 bg-indigo-600"></div>
        {/* texto descripcion */}
        <div className="w-full h-96 bg-red-200"></div>
      </motion.div>
      {/* rows informativos */}
      <motion.div
      initial={{ x: -100,opacity:0,display:'hidden' }}
      transition={{
        duration: .7
      }}
      whileInView={{ x: 0,opacity:1}}
      className="flex flex-row gap-10 justify-between items-center ">
        {/* texto descripcion */}
        <div className="w-full h-96 bg-red-200"></div>
        {/* imagen */}
        <div className="w-full h-96 bg-indigo-600"></div>
      </motion.div>
    </motion.section>
  );
};

export default Veneficios;
