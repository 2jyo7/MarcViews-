"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PopUpEffect = ({
  children,
  delay = 0, // Default delay, dynamic per component
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Triggers when 20% of the element is visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }} // Only delay is dynamic
    >
      {children}
    </motion.div>
  );
};

export default PopUpEffect;
