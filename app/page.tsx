"use client";
import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Product from "./sections/Product";
import Product2 from "./sections/Product2";
import Product3 from "./sections/Product3";
import Product4 from "./sections/Product4";
import Contact from "./sections/Contact";
import Slider from "./sections/Slider";
import { motion } from "framer-motion";
import { rise, toTop } from "@/lib/Animations";
import { useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  return (
    <main className="text-white">
      <Navbar />
      <Hero showContent={showContent} setShowContent={setShowContent} />
      {showContent && (
        <motion.div
          className="absolute mt-[100vh]"
          {...rise}
          animate={showContent && rise.animate}
        >
          <About />
          <Product />
          <Product2 />
          <Product3 />
          <Product4 />
          <Slider />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}
