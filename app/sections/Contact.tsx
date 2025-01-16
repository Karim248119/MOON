import Button from "@/components/Button";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Typo from "@/components/Typo";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import Title from "@/components/Title";
import { toTop2 } from "@/lib/Animations";
export default function Contact() {
  const socialLinks = ["facebook", "instagram", "twitter"];
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef as React.RefObject<Element>, 0.7);
  return (
    <div
      ref={sectionRef}
      className="bg-primary  px-52 flex w-full h-[100vh] items-center relative"
    >
      <div className="w-2/3">
        <div className="flex flex-col w-full ">
          <Title inView={isInView} className="text-[150px] leading-none ">
            GET IN
          </Title>
          <Title inView={isInView} className="text-[150px] leading-none ml-48 ">
            touch
          </Title>
        </div>
        <Button
          title="Enter your email here"
          className="w-1/2 ml-52 text-lg normal-case"
          inView={isInView}
        />
      </div>
      <div className="w-1/3 flex flex-col justify-between h-[50%] text-sm">
        <motion.h3 {...toTop2} animate={isInView && toTop2.animate}>
          <Typo vatiant="raccosetta" className="text-xl">
            Stay in touch with us if you want to know more about our products or
            services.
          </Typo>
        </motion.h3>
        <div>
          <Title inView={isInView} className="text-3xl ">
            faq
          </Title>
          <motion.p {...toTop2} animate={isInView && toTop2.animate}>
            If you have any questions about our products or services, please
            don't hesitate to ask.
          </motion.p>
        </div>
        <div>
          <Title inView={isInView} className="text-3xl">
            Social links
          </Title>
          <div className="flex flex-col text-sm">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                target="_blank"
                className=" hover:text-white transition-all duration-300"
                {...toTop2}
                animate={isInView && toTop2.animate}
                transition={{ duration: 0.4 * (index + 1), delay: 0 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
