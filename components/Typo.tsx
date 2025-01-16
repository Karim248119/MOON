import { Fonts } from "@/lib/fonts";
import React from "react";

export default function Typo({
  className,
  children,
  vatiant,
}: {
  className?: string;
  children: React.ReactNode;
  vatiant?: "ezanity" | "raccosetta" | "britanica" | "jour";
}) {
  return (
    <div
      className={`${
        vatiant === "raccosetta"
          ? Fonts.raccosetta.className
          : vatiant === "britanica"
          ? Fonts.britanica.className
          : vatiant === "jour"
          ? Fonts.jour.className
          : Fonts.ezanity.className
      } ${vatiant ? Fonts[vatiant].className : ""}  ${className}`}
    >
      {children}
    </div>
  );
}
