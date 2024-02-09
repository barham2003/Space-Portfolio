"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatePosition({
  children,
  toRight,
  className,
}: {
  children: React.ReactNode;
  toRight: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ x: toRight ? -3000 : 3000 }}
      animate={{ x: 0, transition: { type: "tween", duration: 1 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
