import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import nnwImg from "../../assets/images/projects/nnw.webp";
import ritsImg from "../../assets/images/projects/rits.webp";
import nosweleImg from "../../assets/images/projects/noswele.webp";
import shongweImg from "../../assets/images/projects/shongwe.webp";
import preciousImg from "../../assets/images/projects/precious.webp";
import siyahlaselaImg from "../../assets/images/projects/siyahlasela.webp";

const WebProjects = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Project data with your actual websites
  const projectsData = [
    {
      id: 1,
      title: "RITS-SA",
      description: "Professional services website with clean design and responsive layout.",
      url: "https://rits-sa.co.za/",
      image: ritsImg,
      category: "Tech Business",
      featured: true
    },
    {
      id: 2,
      title: "Noswele Express PTY",
      description: "Online store for a variety of products with e-commerce functionality.",
      url: "https://nosweleexpress.co.za/",
      image: nosweleImg,
      category: "E-commerce",
      featured: true
    },
    {
      id: 3,
      title: "Shongwe Optometrists",
      description: "Eye care professional website with appointment information.",
      url: "https://shongweoptometrists.co.za/",
      image: shongweImg,
      category: "Healthcare",
      featured: false
    },
    {
      id: 4,
      title: "NNW Engineering",
      description: "Engineering services website showcasing projects and capabilities.",
      url: "https://nnwengineering.co.za/",
      image: nnwImg,
      category: "Engineering",
      featured: true
    },
    {
      id: 5,
      title: "Precious Eagle Nest",
      description: "Luxury accommodation website with booking information.",
      url: "https://preciouseaglenest.co.za/",
      image: preciousImg,
      category: "Hospitality",
      featured: false
    },
    {
      id: 6,
      title: "Siyahlasela Organisation",
      description: "Non-profit organization website promoting community initiatives.",
      url: "https://siyahlasela.org.za/",
      image: siyahlaselaImg,
      category: "Non-Profit",
      featured: true
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Open project in modal with iframe
  const openProject = (project) => {
    setSelectedProject(project);
    setIframeLoaded(false);
  };

  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-20">
      {/* Header Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-[url(https://i.pinimg.com/1200x/b8/05/35/b80535a7d8dabb5eb080ba7ab8d619f0.jpg)] bg-cover bg-center mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full text-sm font-semibold">
                Our Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Websites We've{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">
                Developed
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our collection of professionally developed websites for South African businesses and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  {/* Website preview with your actual image */}
                  <div className="w-full h-48 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white truncate">
                        {project.title}
                      </h3>
                      {/* <p className="text-orange-300 text-sm">{project.category}</p> */}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {/* <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3> */}
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    
                    <button className="text-orange-400 hover:text-orange-300 transition-colors flex items-center text-sm">
                      Preview <FaExternalLinkAlt className="ml-2 text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal with Iframe */}
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
              </div>
              <div className="flex items-center">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mr-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg flex items-center transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Open Live Site
                </a>
                <button 
                  onClick={closeProject}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading website preview...</p>
                  </div>
                </div>
              )}
              
              <iframe
                src={selectedProject.url}
                className="w-full h-full"
                frameBorder="0"
                title={selectedProject.title}
                onLoad={() => setIframeLoaded(true)}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-orange-600 to-purple-600 text-white relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start <span className="text-white">Your Project</span>?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let's work together to create a stunning website that represents your brand and drives growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                Get Your Free Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-sm hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebProjects;