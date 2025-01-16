import React from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import { toTop } from "@/lib/Animations";

export default function About() {
  return (
    <div className="bg-primary h-[60vh] p-20 flex items-start relative">
      <div className="w-[20vw] flex flex-col gap-10 items-center">
        <motion.h2 className="mt-1" {...toTop} transition={{ delay: 1.5 }}>
          <Typo vatiant="raccosetta">About us</Typo>
        </motion.h2>
        <div className=" absolute -bottom-0 -left-10 border-secondary border-r-4 w-[15vw] aspect-square rounded-full flex justify-end items-center">
          <motion.div className="w-8 -mr-4">
            <Image src={IMGS.sun} alt="sun" className="w-full" />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col">
        <motion.div {...toTop} transition={{ delay: 1.3 }}>
          <Typo className="text-accent text-6xl">
            MAKING YOUR BEST DREAMS COME TRUE
          </Typo>
        </motion.div>
        <div className="flex flex-col w-2/3">
          <motion.p
            className="mt-10 text-sm w-2/3"
            {...toTop}
            transition={{ delay: 2 }}
          >
            At MOON, we are the stewards of creativity and convenience. Our goal
            is to transform your residential, retail, hospitality, entertainment
            and other spaces into a unique and magical environment that draws
            attention and creates a fairy tale in the real world. Thanks to our
            lamps, you can achieve unique comfort in your room and get a little
            closer to your dreams.
          </motion.p>
          <motion.div
            className="mt-5 text-sm self-end "
            {...toTop}
            transition={{ delay: 2.5 }}
          >
            <Typo vatiant="raccosetta" className="text-xl">
              Also with this lamp your photo
              <br /> shoots will reach a new level.
            </Typo>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
