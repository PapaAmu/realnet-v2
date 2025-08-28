import React from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaGithub,
  FaArrowRight,
  FaHeart
} from "react-icons/fa";

const Footer = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="pt-16 relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.pinimg.com/736x/56/76/5f/56765fd8f4d40b2550b4ad70de14f41f.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {/* Primary gradient overlay */}
        <div className="absolute -top-40 -left-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 sm:-left-80">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-black to-black/90"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        
        {/* Secondary gradient element */}
        <div className="absolute top-0 right-0 transform-gpu overflow-hidden blur-3xl sm:top-10 sm:right-10">
          <div
            className="aspect-[1155/678] w-[50.1875rem] bg-gradient-to-br from-blue-500/15 to-cyan-500/15"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        
        {/* Tertiary gradient element */}
        <div className="absolute bottom-0 left-0 transform-gpu overflow-hidden blur-3xl sm:-bottom-20 sm:left-10">
          <div
            className="aspect-[1155/678] w-[40.1875rem] bg-gradient-to-tr from-pink-500/10 to-orange-500/10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="flex justify-between items-center gap-12 md:flex-row flex-col mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Get our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">beautiful newsletter</span> straight to your inbox.
            </h3>
            <p className="text-gray-400 mt-2">Stay updated with our latest services and offers</p>
          </div>
          <div className="flex items-center mt-6 md:mt-0 gap-4">
            <div className="relative w-full md:w-64">
              <FaEnvelope className="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 text-gray-300 bg-gray-700/80 backdrop-blur-sm outline-none border border-gray-600 focus:border-orange-500 shadow-sm rounded-lg transition-colors duration-300"
              />
            </div>
            <motion.button 
              className="py-3 px-5 font-medium text-sm text-center text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-lg shadow-lg flex items-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Subscribe <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 justify-between mb-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.ul className="space-y-4 text-gray-300" variants={fadeIn}>
            <h4 className="text-orange-400 font-semibold pb-2 text-lg">Resources</h4>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Support</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Documentation</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Pricing</span>
              </a>
            </li>
          </motion.ul>
          
          <motion.ul className="space-y-4 text-gray-300" variants={fadeIn}>
            <h4 className="text-orange-400 font-semibold pb-2 text-lg">About</h4>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Terms</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">POPIA</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">About RealNet</span>
              </a>
            </li>
          </motion.ul>
          
          <motion.ul className="space-y-4 text-gray-300" variants={fadeIn}>
            <h4 className="text-orange-400 font-semibold pb-2 text-lg">Explore</h4>
            <li>
              <a
                href="/features/web-development"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Website Development</span>
              </a>
            </li>
            <li>
              <a
                href="/features/mobile-app-development"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Mobile App Development</span>
              </a>
            </li>
            <li>
              <a
                href="/features/software-development"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Software Development</span>
              </a>
            </li>
            <li>
              <a
                href="/features/hosting-and-mails"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Hosting & Business Emails</span>
              </a>
            </li>
          </motion.ul>
          
          <motion.ul className="space-y-4 text-gray-300" variants={fadeIn}>
            <h4 className="text-orange-400 font-semibold pb-2 text-lg">Company</h4>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Pricing</span>
              </a>
            </li>
            <li>
              <a
                href="contact-us"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-150 hover:text-orange-400 flex items-center gap-1 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200">Careers</span>
              </a>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div 
          className="py-8 border-t border-gray-700/50 flex items-center justify-between sm:flex-row flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © 2025 RealNet Web Solutions (PTY) - Made with <FaHeart className="text-red-500 mx-1" /> in South Africa
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            <motion.a 
              href="#" 
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaInstagram className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaFacebook className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;