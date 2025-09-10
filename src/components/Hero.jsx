import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="">
      <div className="relative h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            {/* First Line */}
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl font-light tracking-tight sm:text-6xl lg:text-5xl text-white"
            >
              Quality Development Of
            </motion.h1>

            {/* Middle Line with Typed Animation */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400 font-extrabold tracking-tight text-7xl sm:text-6xl lg:text-9xl leading-tight"
              style={{
                minHeight: "1.2em",
                display: "inline-block",
              }}
            >
              <ReactTyped
                strings={["Software", "Websites", "Solutions"]}
                typeSpeed={150}
                backSpeed={50}
                loop
                backDelay={1800}
                showCursor={true}
              />
            </motion.span>

            {/* Third Line */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="text-3xl font-light tracking-tight sm:text-6xl lg:text-5xl text-white"
            >
              That Build Your Business
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="mx-auto mt-20 mb-4 max-w-3xl text-lg text-orange-400"
            >
              Professional web development, mobile app development, and software solutions for South African businesses.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
              className="mx-auto mb-8 max-w-2xl text-base text-gray-300"
            >
              Serving Pretoria, Johannesburg, Cape Town, and nationwide. From responsive websites to custom mobile apps - we turn your digital vision into reality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 2.5, staggerChildren: 0.3 },
                },
              }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="/#joinsection"
                className="rounded-lg px-6 py-3 font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:bg-orange-300 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Get Started
              </motion.a>
              
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
