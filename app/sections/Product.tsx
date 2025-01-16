import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { scaleX, toTop, toTop2 } from "@/lib/Animations";
import Title from "@/components/Title";

export default function Product() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  return (
    <div
      ref={sectionRef}
      className="bg-primary h-[100vh] w-full px-20 py-10 flex flex-col items-center relative"
    >
      <div className=" overflow-hidden ">
        <motion.h2
          {...toTop}
          animate={isInView && toTop.animate}
          className=" flex items-center gap-10 -mt-2"
        >
          <motion.span
            {...scaleX}
            animate={isInView && scaleX.animate}
            className="w-28 h-[1px] bg-white/50"
          ></motion.span>
          <Typo className="uppercase text-8xl">Our Moon</Typo>
        </motion.h2>
      </div>
      <Title inView={isInView} className="text-8xl">
        Products
      </Title>

      <div className="flex flex-col gap-10 justify-center  w-[30vw] aspect-square rounded-full  p-10  border-b-4 border-r-4 border-secondary ">
        <motion.p
          className="w-1/2 text-sm"
          {...toTop2}
          animate={isInView && toTop2.animate}
        >
          We know how important product quality is these days. Therefore, our
          lamps are made from the best materials and their design is unique.
        </motion.p>
        <motion.div
          {...toTop2}
          animate={isInView && toTop2.animate}
          transition={{ duration: 1.2 }}
        >
          <Typo vatiant="raccosetta" className="text-lg place-self-end">
            Each lamp is unique in its own way, as <br /> the design of the
            print is formed <br /> depending on your wishes.
          </Typo>
        </motion.div>
        <motion.div className="w-8 -mb-4 -ml-4">
          <Image src={IMGS.bsun} alt="sun" className="w-full" />
        </motion.div>
      </div>
      <Image
        src={IMGS.cmoon2}
        alt="cmoon"
        height={200}
        width={200}
        className=" absolute bottom-32 left-20 "
      />
      <Image
        src={IMGS.cmoon}
        alt="cmoon"
        height={200}
        width={200}
        className=" absolute bottom-64 right-20 scale-x-[-1]"
      />
    </div>
  );
}
