"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const ZoomingEffect = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "reverse", // Smooth back and forth zooming
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomingEffect;
