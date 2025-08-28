import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const industries = [
    {
      id: 1,
      name: "E-Commerce",
      description: "Custom online stores with secure payment integration and inventory management.",
      icon: "🛒",
      stats: "300% average growth"
    },
    {
      id: 2,
      name: "Healthcare",
      description: "HIPAA-compliant solutions for clinics, telehealth, and medical records management.",
      icon: "🏥",
      stats: "40% faster patient processing"
    },
    {
      id: 3,
      name: "Education",
      description: "E-learning platforms, student management systems, and virtual classroom solutions.",
      icon: "🎓",
      stats: "60% engagement increase"
    },
    {
      id: 4,
      name: "Real Estate",
      description: "Property listing platforms, virtual tours, and agent management systems.",
      icon: "🏠",
      stats: "2x more leads generated"
    },
    {
      id: 5,
      name: "Finance",
      description: "Fintech applications, banking solutions, and financial data visualization tools.",
      icon: "💳",
      stats: "99.9% uptime guarantee"
    },
    {
      id: 6,
      name: "Hospitality",
      description: "Booking systems, hotel management, and customer experience platforms.",
      icon: "🍽️",
      stats: "45% booking increase"
    },
    {
      id: 7,
      name: "Manufacturing",
      description: "Supply chain management, inventory tracking, and production monitoring systems.",
      icon: "🏭",
      stats: "30% efficiency improvement"
    },
    {
      id: 8,
      name: "Startups",
      description: "MVP development, scalable architecture, and investor-ready applications.",
      icon: "🚀",
      stats: "50% faster to market"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mt-2 text-3xl font-extrabold text-orange-500 sm:text-4xl">
            Industries We Cater For
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We deliver tailored digital solutions across diverse sectors, driving growth and innovation.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndustry(industry.id)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              {/* Gradient border wrapper */}
              <div className={`p-[2px] rounded-xl transition-all duration-300 ${
                hoveredIndustry === industry.id 
                  ? 'bg-gradient-to-r from-orange-400 to-pink-500' 
                  : 'border border-gray-200'
              }`}>
                {/* Main card content */}
                <div className="bg-white p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{industry.icon}</span>
                    <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm flex-grow">{industry.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500">{industry.stats}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;