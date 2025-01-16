import { IMGS } from "@/lib/imgs";
import Image from "next/image";
import React from "react";
import Typo from "./Typo";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center ">
      <Image src={IMGS.logo} alt="logo" width={50} className=" scale-x-[-1]" />
      <Typo vatiant="jour" className="text-3xl -ml-5 -mb-1 text-white">
        MOON
      </Typo>
    </Link>
  );
}
