import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import RelatedContent from "./RelatedContent";
import SEO from "./../SEO";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaMobile,
  FaCloud,
  FaShoppingCart,
  FaArrowRight
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiLaravel,
  SiMongodb,
  SiTypescript,
  SiPhp,
} from "react-icons/si";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = [
    "Web Development",
    "Mobile Apps",
    "E-commerce",
    "Email Solutions",
  ];

  // Tech icons to display
  const techIcons = [
    { name: "Laravel", icon: <SiLaravel className="text-red-500 text-xl md:text-2xl lg:text-3xl" />, color: "text-red-500" },
    { name: "React", icon: <FaReact className="text-blue-400 text-xl md:text-2xl lg:text-3xl" />, color: "text-blue-400" },
    { name: "PHP", icon: <SiPhp className="text-purple-400 text-xl md:text-2xl lg:text-3xl" />, color: "text-purple-400" },
    { name: "Docker", icon: <FaDocker className="text-blue-300 text-xl md:text-2xl lg:text-3xl" />, color: "text-blue-300" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-300 text-xl md:text-2xl lg:text-3xl" />, color: "text-teal-300" },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-500 text-xl md:text-2xl lg:text-3xl" />, color: "text-green-500" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl md:text-2xl lg:text-3xl" />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl md:text-2xl lg:text-3xl" />, color: "text-blue-500" },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl md:text-2xl lg:text-3xl" />, color: "text-blue-600" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl md:text-2xl lg:text-3xl" />, color: "text-green-600" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700 text-xl md:text-2xl lg:text-3xl" />, color: "text-blue-700" },
  ];

  // Generate random positions for floating icons
  const generateRandomPositions = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 90, // 0-90% of container width
      y: Math.random() * 90, // 0-90% of container height
      delay: Math.random() * 2, // Random delay for animation
      duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
    }));
  };

  const [iconPositions] = useState(generateRandomPositions(techIcons.length));

  return (
    <>
      <SEO
        title="Web & Mobile Development Company South Africa | REALNET WEB SOLUTIONS"
        description="Professional web development, mobile app development, and custom software solutions in Johannesburg & Pretoria. Get responsive websites, e-commerce stores, and business applications with 24/7 support."
        keywords={[
          "web development company",
          "mobile app developers South Africa",
          "software development company",
          "website design Johannesburg",
          "e-commerce development",
          "responsive web design",
          "custom web applications",
          "business website development",
          "mobile app development Pretoria",
          "web hosting South Africa"
        ]}
        ogImage="/home-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Web & Mobile Development Company South Africa | REALNET WEB SOLUTIONS",
          "description": "Professional web development, mobile app development, and custom software solutions in Johannesburg & Pretoria",
          "url": "https://realnet-web.co.za",
          "primaryImageOfPage": "https://realnet-web.co.za/home-og-image.jpg",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://realnet-web.co.za"
              }
            ]
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "REALNET WEB SOLUTIONS",
            "description": "Professional web development, mobile app development, and software solutions for South African businesses",
            "url": "https://realnet-web.co.za",
            "logo": "https://realnet-web.co.za/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Matsau Street, Ivory Park",
              "addressLocality": "Midrand",
              "addressRegion": "Gauteng",
              "postalCode": "1689",
              "addressCountry": "ZA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-25.9083",
              "longitude": "28.1162"
            },
            "telephone": "+27-64-038-8883",
            "email": "lukhele@realnet-web.co.za",
            "areaServed": "ZA",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "-25.9083",
                "longitude": "28.1162"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development",
                    "description": "Custom website development and responsive web design services for South African businesses",
                    "areaServed": "ZA"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "iOS and Android mobile application development for businesses across South Africa",
                    "areaServed": "ZA"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Development",
                    "description": "Online store development with payment integration and inventory management",
                    "areaServed": "ZA"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Hosting & Email",
                    "description": "Reliable web hosting and professional business email solutions",
                    "areaServed": "ZA"
                  }
                }
              ]
            }
          }
        }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 mt-14"
        data-section="hero"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Enhanced Code Editor Background with Green Text */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="text-green-400 font-mono text-xs md:text-sm whitespace-nowrap"
                style={{
                  position: "absolute",
                  left: `${i % 2 === 0 ? 5 : 55}%`,
                  top: `${i * 4}%`,
                }}
                animate={{
                  y: [0, windowSize.height],
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 20 + (i % 10),
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "linear",
                }}
              >
                {i % 5 === 0 && "<div className='container mx-auto px-4'>"}
                {i % 5 === 1 && "function calculateTotal() {"}
                {i % 5 === 2 && "  const userData = await fetchAPI();"}
                {i % 5 === 3 && "  return processData(userData);"}
                {i % 5 === 4 && "}"}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scattered floating tech icons */}
        <div className="absolute inset-0 overflow-hidden">
          {techIcons.map((tech, index) => {
            const position = iconPositions[index];
            return (
              <motion.div
                key={index}
                className={`absolute ${tech.color} bg-gray-800/30 backdrop-blur-sm rounded-xl p-2 flex items-center justify-center`}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  width: '3rem',
                  height: '3rem',
                }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: position.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: position.delay
                }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: 'rgba(30, 30, 30, 0.7)',
                  transition: { duration: 0.2 }
                }}
                title={tech.name}
                aria-label={`${tech.name} technology`}
              >
                {tech.icon}
              </motion.div>
            );
          })}
        </div>

        {/* Animated background elements */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,165,0,0.2) 0px, transparent 80px)`
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-20px-20px" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                We Create
              </h1>

              <div className="h-20 md:h-24 lg:h-28">
                <ReactTyped
                  strings={[
                    "Digital Experiences",
                    "Business Solutions",
                    "Web Applications",
                    "Mobile Platforms",
                    "Innovative Systems"
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                  backDelay={1500}
                  showCursor={true}
                  cursorChar="|"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
                />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                That Drive Growth
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              Professional digital solutions for South African businesses. From responsive websites to custom applications, we transform your vision into reality with cutting-edge technology and expert development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="/new-project/request-quotation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-orange-500/30 transition-all duration-300 text-sm md:text-base"
                aria-label="Start your web development project with a free quote"
              >
                Start Your Project
              </motion.a>

              <motion.a
                href="/features/web-development/live-projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-3 rounded-xl border border-orange-500 text-orange-400 font-medium hover:bg-orange-500/10 transition-all duration-300 text-sm md:text-base"
                aria-label="View our portfolio of web development projects"
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Services indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              <div className="relative w-full">
                <motion.div
                  animate={{
                    background: `linear-gradient(90deg, ${services.map((_, i) =>
                      i === activeService ? '#070442' : 'rgba(0, 121, 181, 0.8)'
                    ).join(', ')})`
                  }}
                  className="flex rounded-md p-1 bg-gray-800 overflow-x-auto"
                  role="tablist"
                  aria-label="Our development services"
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${index === activeService
                        ? 'text-white bg-blue-900'
                        : 'text-gray-400 hover:text-orange-300'
                        }`}
                      role="tab"
                      aria-selected={index === activeService}
                      aria-controls={`service-${index}`}
                    >
                      {service}
                    </button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual element */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              {/* Main card */}
              <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-gray-700 shadow-xl">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-xs md:text-sm">dashboard.jsx</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex space-x-3 md:space-x-4">
                    <div className="flex-1 bg-gray-900 rounded-lg p-3 md:p-4">
                      <div className="h-3 md:h-4 bg-gray-700 rounded w-3/4 mb-2 md:mb-3"></div>
                      <div className="h-2 md:h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="w-1/3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg p-3 md:p-4 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-3 md:p-4">
                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="h-2 md:h-3 bg-gray-700 rounded"></div>
                      <div className="h-2 md:h-3 bg-gray-700 rounded"></div>
                      <div className="h-2 md:h-3 bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-16 md:h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-10 md:h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Tech icons row */}
                  <div className="flex justify-between flex-wrap gap-2">
                    {techIcons.slice(0, 5).map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className={`${tech.color} bg-gray-800 p-1 md:p-2 rounded-lg flex items-center justify-center`}
                        title={tech.name}
                        aria-label={tech.name}
                      >
                        {tech.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mt-4">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>
    

      {/* Related Content Section */}
      <RelatedContent currentPage="home" />
    </>
  );
};

export default Home;