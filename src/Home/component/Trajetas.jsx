import React from "react";
import { motion } from "framer-motion";

const Trajetas = () => {
  return (
    <motion.div 
    initial={{ y: 100,opacity:0 }}
    transition={{
      duration: .7
    }}
    whileInView={{ y: 0,opacity:1}}
    className="w-60 h-60  bg-slate-200 rounded-xl shadow-2xl flex flex-col border-2 overflow-hidden border-green-500/10">
      {/* imagen */}
      <div className="h-full bg-green-500"></div>
      {/* contenido */}
      <div className="h-1/4 bg-green-800"></div>
      {/* acciones */}
      <div className="h-1/4 bg-red-500"></div>
    </motion.div>
  );
};

export default Trajetas;
