import { Poppins, Quicksand } from "next/font/google";

import localFont from "next/font/local";
const jour = localFont({ src: "./fonts/Le Jour Serif.ttf" });
const raccosetta = localFont({ src: "./fonts/Raccosetta.ttf" });
const britanica = localFont({ src: "./fonts/britanica-light-expanded.ttf" });
const cruell = localFont({
  src: "./fonts/cruelldemo-wyelv.otf",
});
const ezanity = localFont({
  src: "./fonts/Ezanity-Regular.otf",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "600"],
});

export const Fonts = {
  poppins,
  quicksand,
  jour,
  ezanity,
  britanica,
  cruell,
  raccosetta,
};
