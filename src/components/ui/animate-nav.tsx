"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AnimateNav({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.nav
      className={className}
      initial={{ x: 1000 }}
      animate={{ x: -1000, transition: { type: "tween", duration: 1 } }}
    >
      {children}
    </motion.nav>
  );
}
