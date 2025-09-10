import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobile, FaServer, FaCloud, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const RelatedContent = ({ currentPage }) => {
  // Define all available content with SEO-friendly descriptions
  const allContent = {
    'web-development': {
      title: 'Website Development Services',
      description: 'Custom websites, e-commerce solutions, and responsive web design',
      icon: <FaCode />,
      path: '/features/web-development',
      category: 'service'
    },
    'web-projects': {
      title: 'Our Web Development Projects',
      description: 'View our portfolio of successful website projects',
      icon: <FaCode />,
      path: '/features/web-development/live-projects',
      category: 'portfolio'
    },
    'mobile-development': {
      title: 'Mobile App Development',
      description: 'iOS and Android app development services',
      icon: <FaMobile />,
      path: '/features/mobile-app-development',
      category: 'service'
    },
    'software-development': {
      title: 'Software Development',
      description: 'Custom software and web application solutions',
      icon: <FaServer />,
      path: '/features/software-development',
      category: 'service'
    },
    'hosting': {
      title: 'Web Hosting & Email',
      description: 'Reliable hosting and business email solutions',
      icon: <FaCloud />,
      path: '/features/hosting-and-mails',
      category: 'service'
    },
    'resources': {
      title: 'Resources & Guides',
      description: 'Web development tips, guides, and industry insights',
      icon: <FaQuestionCircle />,
      path: '/resources',
      category: 'content'
    },
    'quote': {
      title: 'Request a Quote',
      description: 'Get a free consultation and project estimate',
      icon: <FaEnvelope />,
      path: '/new-project/request-quotation',
      category: 'cta'
    },
    'contact': {
      title: 'Contact Us',
      description: 'Get in touch with our development team',
      icon: <FaEnvelope />,
      path: '/contact-us',
      category: 'contact'
    }
  };

  // Define related content for each page
  const relatedContentMap = {
    'home': ['web-development', 'mobile-development', 'resources', 'quote'],
    'web-development': ['web-projects', 'mobile-development', 'software-development', 'hosting'],
    'web-projects': ['web-development', 'quote', 'contact', 'resources'],
    'mobile-development': ['web-development', 'software-development', 'quote', 'resources'],
    'software-development': ['web-development', 'mobile-development', 'hosting', 'quote'],
    'hosting': ['web-development', 'software-development', 'contact', 'quote'],
    'resources': ['web-development', 'mobile-development', 'software-development', 'quote'],
    'quote': ['web-development', 'mobile-development', 'contact', 'resources'],
    'contact': ['web-development', 'mobile-development', 'quote', 'resources']
  };

  // Get related content for current page
  const relatedItems = relatedContentMap[currentPage] || ['web-development', 'mobile-development', 'resources', 'quote'];
  const relatedContent = relatedItems.map(key => allContent[key]).filter(Boolean);

  // Limit to 4 items maximum
  const displayContent = relatedContent.slice(0, 4);

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

  if (displayContent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-orange-600">Other Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more ways we can help grow your business with our comprehensive digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayContent.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group"
            >
              <Link 
                to={item.path}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-orange-300 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors duration-200">
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-gray-600 mb-6">
            Ready to get started on your project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/new-project/request-quotation"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedContent;
