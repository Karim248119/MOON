import React from "react";
import { motion } from "framer-motion";
export default function InfiniteSlider({
  children,
  direction = "left",
  duration = 20,
}: {
  children: React.ReactNode;
  direction?: "right" | "left";
  duration?: number;
}) {
  return (
    <motion.div
      className="flex w-full gap-20"
      animate={{ x: direction === "left" ? ["-100%", "0%"] : ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: duration,
      }}
    >
      {children}
      {children}
      {children}
      {children}
    </motion.div>
  );
}
