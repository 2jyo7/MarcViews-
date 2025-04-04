"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const RainbowTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative inline-block overflow-hidden">
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-4xl md:text-6xl font-extrabold text-center
        bg-[length:300%_300%] bg-clip-text text-transparent 
        drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] rainbow-text"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RainbowTitle;
