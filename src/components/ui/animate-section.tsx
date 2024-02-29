"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AnimateSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100, transition: { delay: 0.5, duration: 1 } }}
      id={id}
      className={className}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}
