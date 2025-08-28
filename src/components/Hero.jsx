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
              className="text-3xl font-bold tracking-tight sm:text-6xl lg:text-5xl text-white"
            >
              Quality Development Of
            </motion.h1>

            {/* Middle Line with Typed Animation */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="block text-orange-400 font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-9xl leading-tight"
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
              className="text-3xl font-bold tracking-tight sm:text-6xl lg:text-5xl text-white"
            >
              That Build Your Business
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="mx-auto mt-20 mb-8 max-w-2xl text-lg text-slate-300"
            >
              "Empowering Businesses with Dignity and Digital Excellence."
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
                className="rounded-lg px-6 py-3 font-medium bg-orange-400 text-slate-900 hover:bg-orange-300 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Get Started
              </motion.a>
              <motion.button
                className="rounded-lg border px-6 py-3 font-medium border-orange-400 text-orange-400 hover:bg-slate-700 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
