import InfiniteSlider from "@/components/InfiniteSlider";
import Typo from "@/components/Typo";
import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <div className="h-[90vh] pt-20 bg-primary flex flex-col  justify-center relative">
      <div className=" absolute left-0 right-0 z-20 ">
        <InfiniteSlider>
          <Typo className="text-9xl uppercase text-accent text-nowrap">
            Making your best dreams come true
          </Typo>
        </InfiniteSlider>
        <InfiniteSlider direction="right">
          <Typo className="text-9xl uppercase text-secondary text-nowrap ">
            Making your best dreams come true
          </Typo>
        </InfiniteSlider>
        <InfiniteSlider>
          <Typo className="text-9xl uppercase text-accent text-nowrap">
            Making your best dreams come true
          </Typo>
        </InfiniteSlider>
      </div>
      <Image
        alt="sliderimg"
        src={IMGS.slider}
        className="w-[50vh] aspect-square rounded-full absolute left-1/2 -translate-x-1/2 object-cover z-10"
      />
    </div>
  );
}
