import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileView, setMobileView] = useState("main"); // 'main' or 'features'
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setMobileView("main");
  };

  const showFeatures = () => {
    setMobileView("features");
  };

  const showMainMenu = () => {
    setMobileView("main");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    setMobileView("main");
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const featureMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const hoverEffect = {
    scale: 1.05,
    color: "#fb923c",
    transition: { duration: 0.2, ease: "easeOut" }
  };

  const tapEffect = {
    scale: 0.95,
    transition: { duration: 0.1 }
  };

  return (
    <div>
      <motion.nav 
        className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-md ${scrolled ? 'bg-black/90' : 'bg-black/70'} transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center text-white font-bold text-xl flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src="/logo.png" 
                className="h-10 invert" 
                alt="Logo" 
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
              <span>
                REAL<span className="text-orange-400">NET</span>
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-white font-medium relative">
              <motion.a 
                href="/" 
                className={`relative py-2 transition ${activeLink === 'home' ? 'text-orange-400' : 'hover:text-orange-400'}`}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                onClick={() => setActiveLink('home')}
              >
                Home
                {activeLink === 'home' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>

              {/* Features Dropdown */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  className={`flex items-center gap-1 py-2 transition ${isDropdownOpen ? 'text-orange-400' : 'hover:text-orange-400'}`}
                  whileTap={tapEffect}
                >
                  Solutions
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 bg-black/95 rounded-md shadow-lg border border-gray-700 z-50 backdrop-blur-md"
                    >
                      <ul className="py-2 text-sm text-gray-300">
                        {[
                          { href: "/features/web-development", text: "Website Development" },
                          { href: "/features/mobile-app-development", text: "Mobile App Development" },
                          { href: "/features/software-development", text: "Software Development" },
                          { href: "/features/hosting-and-mails", text: "Hosting & Business Email" }
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <a
                              href={item.href}
                              className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-400 transition-all duration-200"
                              onClick={() => setActiveLink('features')}
                            >
                              {item.text}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.a 
                href="#pricing" 
                className={`relative py-2 transition ${activeLink === 'pricing' ? 'text-orange-400' : 'hover:text-orange-400'}`}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                onClick={() => setActiveLink('pricing')}
              >
                Pricing
                {activeLink === 'pricing' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>

              <motion.a 
                href="/contact-us" 
                className={`relative py-2 transition ${activeLink === 'contact' ? 'text-orange-400' : 'hover:text-orange-400'}`}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                onClick={() => setActiveLink('contact')}
              >
                Contact
                {activeLink === 'contact' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            </div>

            {/* Desktop Button */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/#joinsection"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold flex items-center"
                whileHover={{ 
                  background: "linear-gradient(to right, #ec4899, #f97316)",
                  transition: { duration: 0.3 }
                }}
              >
                GET QUOTE
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  &nbsp;→
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="text-white focus:outline-none p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  // Close Icon
                  <motion.svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  // Hamburger Icon
                  <motion.svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <motion.button
              onClick={toggleMenu}
              className="absolute top-5 right-6 text-white focus:outline-none p-2 z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Main Navigation */}
            <AnimatePresence mode="wait">
              {mobileView === "main" && (
                <motion.div
                  key="main-menu"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="relative w-80 p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500"
                >
                  <div className="bg-black/95 rounded-2xl p-8 flex flex-col items-center space-y-6 backdrop-blur-md">
                    <motion.h3 
                      className=" text-2xl font-bold mb-4 uppercase bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      MENU
                    </motion.h3>
                    
                    {/* Nav Items */}
                    {[
                      { href: "/", text: "Home", id: "home" },
                      { href: "#", text: "Solutions", id: "features", action: showFeatures },
                      { href: "#pricing", text: "Pricing", id: "pricing" },
                      { href: "/contact-us", text: "Contact", id: "contact" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.action ? undefined : item.href}
                        onClick={item.action ? item.action : () => handleLinkClick(item.id)}
                        className={`text-xl font-medium w-full text-center py-3 rounded-lg transition-all ${activeLink === item.id ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400' : 'text-white hover:text-orange-400'}`}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.text}
                      </motion.a>
                    ))}

                    {/* CTA Button */}
                    <motion.a
                      href="/#joinsection"
                      onClick={toggleMenu}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white font-semibold w-full text-center"
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        background: "linear-gradient(to right, #ec4899, #f97316)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      FREE QUOTE
                    </motion.a>
                  </div>
                </motion.div>
              )}

              {/* Features Submenu */}
              {mobileView === "features" && (
                <motion.div
                  key="features-menu"
                  variants={featureMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="relative w-80 p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500"
                >
                  <div className="bg-black/95 rounded-2xl p-8 flex flex-col items-center space-y-6 backdrop-blur-md">
                    {/* Back Button */}
                    <motion.button
                      onClick={showMainMenu}
                      className="self-start flex items-center text-orange-400 mb-2"
                      whileHover={{ x: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </motion.button>
                    
                    <motion.h3 
                      className=" uppercase text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Our services
                    </motion.h3>
                    
                    {/* Feature Items */}
                    {[
                      { href: "/features/web-development", text: "Website Development" },
                      { href: "/features/mobile-app-development", text: "Mobile App Development" },
                      { href: "/features/software-development", text: "Software Development" },
                      { href: "/features/hosting-and-mails", text: "Hosting & Business Email" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        onClick={toggleMenu}
                        className="text-xl font-medium w-full text-center py-3 rounded-lg text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-500/20 hover:text-orange-400 transition-all"
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.text}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;