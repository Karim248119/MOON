import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import Button from "@/components/Button";
import { useInView } from "@/hooks/useInView";
import { toTop, toTop2 } from "@/lib/Animations";
import Title from "@/components/Title";
export default function Product2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-10 h-[90vh] bg-primary px-52 py-20 gap-10"
    >
      <div className="h-full flex justify-center col-span-2">
        <motion.div>
          <Image
            src={IMGS.p4}
            alt="p"
            className=" w-full aspect-[1/1.4] rounded-full object-cover"
          />
        </motion.div>
      </div>
      <div className="h-full flex flex-col gap-5 col-span-3">
        <Title inView={isInView} className="text-6xl">
          Table moon
        </Title>
        <motion.div>
          <Image
            src={IMGS.p1}
            alt="p"
            className=" w-full aspect-[1/1.3] rounded-tr-[150px] rounded-bl-[150px] object-cover"
          />
        </motion.div>
      </div>
      <div className="flex justify-center col-span-2">
        <motion.p
          {...toTop2}
          animate={isInView && toTop2.animate}
          className="text-xs"
        >
          Our table lamps are made from durable materials, and they are perfect
          for your dining room or living room. They offer a beautiful and warm
          light that complements your decor and your guests.
        </motion.p>
      </div>
      <div className="h-full flex flex-col justify-center col-span-3">
        <motion.video
          src="https://videos.pexels.com/video-files/8262768/8262768-uhd_1440_2732_25fps.mp4"
          autoPlay
          loop
          muted
          className=" h-[95%] aspect-[1/1.45] rounded-tl-[200px] object-cover"
        />
        <div className="w-full flex justify-end">
          <Button title="order now" className="w-2/3" inView={isInView} />
        </div>
      </div>
    </div>
  );
}
