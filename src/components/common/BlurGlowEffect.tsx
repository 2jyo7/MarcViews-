"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const BlurGlowEffect = ({
  children,
  direction = "left",
}: {
  children: ReactNode;
  direction?: "left" | "right";
}) => {
  return (
    <motion.div
      initial={{
        x: direction === "left" ? -50 : 50, // Left or Right
        y: -20, // Slight upward start
        opacity: 0,
        filter: "blur(5px)", // Start with blur
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)", // Remove blur
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(100, 180, 125, 1)", // Intense Magenta Glow
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
        repeat: 5,
      }}
      whileHover={{
        scale: 1.1, // Slight zoom on hover
      }}
      className="shadow-lg bg-white p-6 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default BlurGlowEffect;
