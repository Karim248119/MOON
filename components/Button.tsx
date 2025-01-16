import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { scaleX, toTop2 } from "@/lib/Animations";
export default function Button({
  title,
  className,
  onClick,
  inView,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
  inView?: boolean;
}) {
  return (
    <motion.button
      {...toTop2}
      animate={inView && toTop2.animate}
      onClick={onClick}
      className={`flex flex-col gap-1 mt-3 capitalize self-end group ${className}`}
    >
      <span>{title}</span>
      <motion.div
        {...scaleX}
        animate={inView && scaleX.animate}
        className=" w-[calc(100%-30px)] self-end flex flex-1 items-center opacity-50  group-hover:mr-[30px] duration-300"
      >
        <div className="w-full h-[1px] bg-white -mr-1" />
        <Image src={IMGS.arr} alt="arrow" className="w-2" />
      </motion.div>
    </motion.button>
  );
}
