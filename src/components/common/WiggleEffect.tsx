"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const WiggleEffect = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        rotate: [0, -2, 2, -2, 0], // Subtler wiggle effect
        scale: [1, 1.02, 1.05, 1.02, 1],
      }}
      transition={{
        duration: 10, // Shorter duration for smoothness
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror", // Creates a smoother back-and-forth motion
      }}
      className="shadow-lg bg-white p-6 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default WiggleEffect;
