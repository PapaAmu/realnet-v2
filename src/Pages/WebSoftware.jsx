import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaDesktop, 
  FaServer, 
  FaDatabase, 
  FaPaintBrush, 
  FaTools, 
  FaRocket,
  FaShoppingCart,
  FaUsers,
  FaShieldAlt,
  FaCloud,
  FaMobile,
  FaGlobe,
  FaCogs,
  FaChartLine,
  FaSync
} from "react-icons/fa";

const WebSoftware = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Services data
  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailor-made web applications built to solve your specific business challenges and streamline operations.",
      icon: <FaCode className="text-3xl" />
    },
    {
      title: "Responsive Web Design",
      description: "Websites that look and function perfectly across all devices, from desktops to smartphones.",
      icon: <FaDesktop className="text-3xl" />
    },
    {
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with secure payment processing, inventory management, and customer portals.",
      icon: <FaShoppingCart className="text-3xl" />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces designed to maximize user satisfaction and conversion rates.",
      icon: <FaPaintBrush className="text-3xl" />
    },
    {
      title: "API Development",
      description: "Custom API development and seamless integration with third-party services and platforms.",
      icon: <FaCogs className="text-3xl" />
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, security patches, and performance optimization to keep your web application running smoothly.",
      icon: <FaTools className="text-3xl" />
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Our designers create wireframes and prototypes focused on creating exceptional user experiences."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers build your web application using the latest technologies and coding best practices."
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing across browsers and devices to ensure flawless performance and security."
    },
    {
      step: "05",
      title: "Deployment",
      description: "We handle the complete deployment process, including server configuration and domain setup."
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Continuous support, security updates, and feature enhancements based on user feedback."
    }
  ];

  // Tech stack
  const techStack = [
    { name: "React", icon: <FaCode /> },
    { name: "Node.js", icon: <FaServer /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "PHP", icon: <FaCogs /> },
    { name: "Laravel", icon: <FaCloud /> },
    { name: "Python", icon: <FaGlobe /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Hero Section with Code Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-sm font-semibold">Web Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">Web Solutions</span> That Drive Growth
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We build powerful, scalable web applications that drive business growth, enhance productivity, and deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Project
                </button>
                <button className="px-6 py-3 border border-orange-500 text-orange-300 font-semibold rounded-lg shadow-sm hover:bg-orange-500/10 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl shadow-2xl transform rotate-3 border border-orange-500/20">
                <div className="bg-gray-800 rounded-2xl p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-orange-400">function <span className="text-pink-400">developWebApp</span>() {"{"}</div>
                    <div className="ml-4 text-green-400">// Custom solutions for your business</div>
                    <div className="ml-4 text-blue-400">const</div>
                    <div className="ml-8 text-yellow-200">innovation</div>
                    <div className="ml-8 text-yellow-200">creativity</div>
                    <div className="ml-8 text-yellow-200">expertise</div>
                    <div className="text-orange-400">{"}"}</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-pink-500 p-1 rounded-xl shadow-lg transform -rotate-6 z-10">
                <div className="bg-gray-800 rounded-lg p-2">
                  <FaRocket className="text-4xl text-orange-300" />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-pink-500 to-orange-500 p-1 rounded-xl shadow-lg transform rotate-6 z-10">
                <div className="bg-gray-800 rounded-lg p-2">
                  <FaGlobe className="text-4xl text-pink-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-orange-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">Web Based Software</span> Solutions
            </h2>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              Comprehensive web application development solutions for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-white">{service.title}</h3>
                  <p className="text-gray-400 text-center">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">Development</span> Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to transform your idea into a successful web application.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-pink-500 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-20'}`}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-500/20 hover:shadow-xl transition-all duration-300 relative">
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg lg:block">
                      {index + 1}
                    </div>
                    <div className="text-4xl font-bold text-orange-500/30 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies to build high-performance, scalable web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-orange-500/20 hover:border-orange-500/40 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4 text-orange-500 group-hover:text-pink-400 text-3xl">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-orange-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your <span className="text-white">Web Application</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let's turn your idea into a powerful web solution with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Get Your Free Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-sm hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebSoftware;