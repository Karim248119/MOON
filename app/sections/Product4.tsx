import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import Button from "@/components/Button";
import { useInView } from "@/hooks/useInView";
import { rolling, toTop, toTop2 } from "@/lib/Animations";
import Title from "@/components/Title";
export default function Product4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  const isLeaving = useInView(sectionRef as React.RefObject<Element>, 0.9);
  return (
    <div
      ref={sectionRef}
      className="w-full grid grid-cols-12 h-[90vh] bg-primary px-52 py-20 gap-10"
    >
      <div className="h-full flex justify-center col-span-4">
        <motion.div>
          <Image
            src={IMGS.p10}
            alt="p"
            className=" w-full aspect-[1/1.4] rounded-full object-cover"
          />
        </motion.div>
      </div>
      <div className="h-full flex flex-col gap-5 col-span-6 relative">
        <div className="flex gap-5 items-center">
          <Title inView={isInView} className={`text-6xl duration-300`}>
            hang moob
          </Title>
          <motion.p
            className="text-xs flex-1"
            {...toTop2}
            animate={isInView && toTop2.animate}
          >
            They offer a beautiful and warm light that complements your decor
            and your guests. Perfect for your dining room or living room.
          </motion.p>
        </div>
        <motion.div
          {...rolling}
          animate={isInView && rolling.animate}
          className="w-1/2 aspect-[1/1]"
        >
          <Image
            src={IMGS.p9}
            alt="p"
            className=" w-full h-full rounded-full object-cover "
          />
        </motion.div>
      </div>

      <div className="h-full w-full flex flex-col justify-between col-span-2">
        <motion.div>
          <Image
            src={IMGS.p8}
            alt="p"
            className=" w-full aspect-[1/1.4] rounded-t-full object-cover"
          />
        </motion.div>
        <div>
          <Button title="order now" className="w-full" inView={isInView} />
        </div>
      </div>
    </div>
  );
}
