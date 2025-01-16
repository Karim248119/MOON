import StarsCanvas from "@/components/StarsCanvas";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { fade, scale } from "@/lib/Animations";
import Typo from "@/components/Typo";
import { Fonts } from "@/lib/fonts";
import Button from "@/components/Button";
export default function Hero({
  showContent,
  setShowContent,
}: {
  showContent: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      {...scale}
      animate={showContent && scale.animate}
      className="h-screen w-full fixed  flex justify-between text-white px-52 py-32"
    >
      <motion.div
        {...fade}
        animate={showContent && fade.animate}
        className="linear absolute h-full w-full top-0 left-0 -z-20"
      >
        {/* <Image
          src={IMGS.bg}
          alt="stars"
          className="w-full h-full object-cover"
        /> */}
      </motion.div>
      <div className="radial absolute h-full w-full top-0 left-0 -z-30" />

      <StarsCanvas showContent={showContent} />

      <Image
        src={IMGS.cloud}
        alt="cloud"
        className="w-[60vw] absolute -left-[30vw] -top-[25vh] opacity-30"
      />
      <Image
        src={IMGS.mr}
        alt="mr"
        className="w-[15vw] absolute left-0 top-[5vh] "
      />
      <div className="w-full h-[40%] absolute left-0 bottom-0 -z-10">
        <Image src={IMGS.ms} alt="ms" className="w-full h-full object-top " />
      </div>

      <div className=" uppercase flex flex-col place-self-end">
        <p className="text-xs">Have you ever dreamed about the</p>
        <Typo className="text-[200px] leading-none">
          M<span className={`${Fonts.jour.className}`}>oo</span>N
        </Typo>
        <Typo className="text-6xl self-end">in your</Typo>
        <div className="flex items-center gap-2">
          <Typo className="text-6xl">HandS</Typo>
          <Button
            title="Start Now"
            className="w-full"
            inView={true}
            onClick={() => setShowContent(true)}
          />
        </div>
      </div>

      <Image src={IMGS.moon} alt="moon" className="w-[6vw] place-self-start " />
    </motion.div>
  );
}
