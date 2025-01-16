import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import Button from "@/components/Button";
import { useInView } from "@/hooks/useInView";
import { toTop, toTop2 } from "@/lib/Animations";
import Title from "@/components/Title";
export default function Product3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  return (
    <div
      ref={sectionRef}
      className="w-full grid grid-cols-12 h-[90vh] bg-primary px-52 py-20 gap-10"
    >
      <div className="h-full flex flex-col gap-5 col-span-6">
        <div className="flex gap-5 items-center">
          <Title inView={isInView} className="text-6xl">
            small moon
          </Title>
          <motion.p
            {...toTop2}
            animate={isInView && toTop2.animate}
            className="text-xs flex-1"
          >
            They offer a beautiful and warm light that complements your decor
            and your guests. Perfect for your dining room or living room.
          </motion.p>
        </div>
        <motion.div>
          <Image
            src={IMGS.p5}
            alt="p"
            className=" w-full aspect-[2/1] rounded-tr-[150px] rounded-bl-[150px] object-cover"
          />
        </motion.div>
      </div>
      <div className="h-full flex justify-center col-span-4">
        <motion.div>
          <Image
            src={IMGS.p6}
            alt="p"
            className=" w-full aspect-[1/1.4] rounded-br-[150px] rounded-tl-[150px]  object-cover"
          />
        </motion.div>
      </div>
      <div className="h-full w-full flex flex-col justify-between col-span-2">
        <motion.div>
          <Image
            src={IMGS.p7}
            alt="p"
            className=" w-full aspect-[1/1.4] rounded-full rounded-tl-none object-cover"
          />
        </motion.div>
        <div>
          <Button title="order now" className="w-full" inView={isInView} />
        </div>
      </div>
    </div>
  );
}
