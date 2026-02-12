// app/components/AnimatedHeading.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl font-bold text-white"
    >
      Welcome to My Portfolio
    </motion.h1>
  );
}
