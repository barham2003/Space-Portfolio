"use client";
import { motion } from "framer-motion";
import React, { useDebugValue } from "react";

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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100, transition: { delay: 0.2, duration: 1 } }}
      id={id}
      className={className}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.section>
  );
}
