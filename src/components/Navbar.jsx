import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [mobileView, setMobileView] = useState("main"); // 'main', 'solutions' or 'company'
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Set active link based on current URL
    const pathname = window.location.pathname;
    if (pathname === "/") setActiveLink("home");
    else if (pathname.includes("features")) setActiveLink("solutions");
    else if (pathname.includes("contact-us")) setActiveLink("contact");
    else if (pathname.includes("about-us")) setActiveLink("about");
    else if (pathname.includes("projects")) setActiveLink("projects");
    else if (pathname.includes("popia")) setActiveLink("popia");
    else if (pathname.includes("resources") || pathname.includes("#resources")) setActiveLink("resources");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setMobileView("main");
  };

  const showSolutions = () => {
    setMobileView("solutions");
  };

  const showCompany = () => {
    setMobileView("company");
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

  const subMenuVariants = {
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
        className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-md ${scrolled ? 'bg-black/90' : 'bg-black'} transition-colors duration-300`}
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

              {/* Solutions Dropdown */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  className={`flex items-center gap-1 py-2 transition ${activeLink === 'solutions' || isSolutionsDropdownOpen ? 'text-orange-400' : 'hover:text-orange-400'}`}
                  whileTap={tapEffect}
                >
                  Solutions
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: isSolutionsDropdownOpen ? 180 : 0 }}
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

                {/* Solutions Dropdown Menu */}
                <AnimatePresence>
                  {isSolutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 bg-black/95 rounded-md shadow-lg border border-gray-700 z-50 backdrop-blur-md"
                    >
                      <ul className="py-2 text-sm text-gray-300">
                        {[
                          { href: "/features/web-development", text: "Website Development", id: "solutions" },
                          { href: "/features/mobile-app-development", text: "Mobile App Development", id: "solutions" },
                          { href: "/features/software-development", text: "Software Development", id: "solutions" },
                          { href: "/features/hosting-and-mails", text: "Hosting & Business Email", id: "solutions" }
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
                              onClick={() => setActiveLink(item.id)}
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

              {/* Company Dropdown */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  className={`flex items-center gap-1 py-2 transition ${activeLink === 'contact' || activeLink === 'about' || activeLink === 'projects' || activeLink === 'popia' || isCompanyDropdownOpen ? 'text-orange-400' : 'hover:text-orange-400'}`}
                  whileTap={tapEffect}
                >
                  Company
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: isCompanyDropdownOpen ? 180 : 0 }}
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

                {/* Company Dropdown Menu */}
                <AnimatePresence>
                  {isCompanyDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-black/95 rounded-md shadow-lg border border-gray-700 z-50 backdrop-blur-md"
                    >
                      <ul className="py-2 text-sm text-gray-300">
                        {[
                          { href: "/contact-us", text: "Contact", id: "contact" },
                          { href: "/about-us", text: "About Us", id: "about" },
                          { href: "/features/web-development/live-projects", text: "Projects", id: "projects" },
                          { href: "/popia-act", text: "POPIA", id: "popia" }
                        ].map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <a
                              href={item.href}
                              className={`block px-4 py-2 hover:bg-gray-800 hover:text-orange-400 transition-all duration-200 ${activeLink === item.id ? 'text-orange-400' : ''}`}
                              onClick={() => setActiveLink(item.id)}
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
                href="/resources" 
                className={`relative py-2 transition ${activeLink === 'resources' ? 'text-orange-400' : 'hover:text-orange-400'}`}
                whileHover={hoverEffect}
                whileTap={tapEffect}
                onClick={() => setActiveLink('resources')}
              >
                Resources
                {activeLink === 'resources' && (
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
                href="/new-project/request-quotation"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold flex items-center"
                whileHover={{ 
                  background: "linear-gradient(to right, #ec4899, #f97316)",
                  transition: { duration: 0.3 }
                }}
              >
                FREE QUOTE
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
                      { href: "#", text: "Solutions", id: "solutions", action: showSolutions, hasDropdown: true },
                      { href: "#", text: "Company", id: "company", action: showCompany, hasDropdown: true },
                      { href: "/resources", text: "Resources", id: "resources" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="w-full"
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {item.hasDropdown ? (
                          <div
                            onClick={item.action}
                            className={`flex items-center justify-between text-xl font-medium w-full text-center py-3 rounded-lg transition-all cursor-pointer ${activeLink === item.id ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400' : 'text-white hover:text-orange-400'}`}
                          >
                            <span className="flex-grow">{item.text}</span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ rotate: mobileView !== "main" ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => handleLinkClick(item.id)}
                            className={`flex items-center justify-between text-xl font-medium w-full text-center py-3 rounded-lg transition-all ${activeLink === item.id ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400' : 'text-white hover:text-orange-400'}`}
                          >
                            <span className="flex-grow">{item.text}</span>
                          </a>
                        )}
                      </motion.div>
                    ))}

                    {/* CTA Button */}
                    <motion.a
                      href="/new-project/request-quotation"
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

              {/* Solutions Submenu */}
              {mobileView === "solutions" && (
                <motion.div
                  key="solutions-menu"
                  variants={subMenuVariants}
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
                    
                    {/* Solutions Items */}
                    {[
                      { href: "/features/web-development", text: "Website Development", id: "solutions" },
                      { href: "/features/mobile-app-development", text: "Mobile App Development", id: "solutions" },
                      { href: "/features/software-development", text: "Software Development", id: "solutions" },
                      { href: "/features/hosting-and-mails", text: "Hosting & Business Email", id: "solutions" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        onClick={() => handleLinkClick(item.id)}
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

              {/* Company Submenu */}
              {mobileView === "company" && (
                <motion.div
                  key="company-menu"
                  variants={subMenuVariants}
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
                      Company
                    </motion.h3>
                    
                    {/* Company Items */}
                    {[
                      { href: "/contact-us", text: "Contact", id: "contact" },
                      { href: "/about-us", text: "About Us", id: "about" },
                      { href: "/features/web-development/live-projects", text: "Projects", id: "projects" },
                      { href: "/popia-act", text: "POPIA", id: "popia" }
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        onClick={() => handleLinkClick(item.id)}
                        className={`text-xl font-medium w-full text-center py-3 rounded-lg transition-all ${activeLink === item.id ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400' : 'text-white hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-500/20 hover:text-orange-400'}`}
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