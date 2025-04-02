"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
const WiggleEffect = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        rotate: [0, -3, 3, -3, 0], // Wiggle effect
        scale: 1.05,
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="shadow-lg bg-white p-6 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default WiggleEffect;
