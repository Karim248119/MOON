import { toTop } from "@/lib/Animations";
import React from "react";
import Typo from "./Typo";
import { motion } from "framer-motion";
export default function Title({
  children,
  inView,
  className,
}: {
  children: React.ReactNode;
  inView: boolean;
  className?: string;
}) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        {...toTop}
        animate={inView && toTop.animate}
        className={`text-white uppercase ${className}`}
      >
        <Typo>{children}</Typo>
      </motion.h2>
    </div>
  );
}
