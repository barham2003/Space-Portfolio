"use client";
import React from "react";
import { motion } from "framer-motion";
export default function AnimateDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
