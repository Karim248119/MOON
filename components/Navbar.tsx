import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React from "react";
import Typo from "./Typo";
import { Fonts } from "@/lib/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className={`absolute top-0 left-0 w-full flex justify-between px-20 py-5 text-white text-xs z-50 ${Fonts.quicksand.className}`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={IMGS.logo}
          alt="logo"
          width={50}
          className=" scale-x-[-1]"
        />
        <Typo vatiant="jour" className="text-3xl -ml-5 -mb-1">
          MOON
        </Typo>
      </Link>
      <div className="flex flex-col">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#models">Models</a>
      </div>
      <a href="#delivery">Delivery</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
