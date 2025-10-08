import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaMobile, FaServer, FaCloud, FaQuestionCircle, FaEnvelope, FaShoppingCart, FaRocket, FaStar } from 'react-icons/fa';
import { trackInternalLinkClick, trackCTAClick } from './AnalyticsTracker';

const RelatedContent = ({ currentPage }) => {
  // Enhanced content with better SEO descriptions and new pages
  const allContent = {
    'web-development': {
      title: 'Website Development Services',
      description: 'Custom website development, responsive design, and business website solutions in South Africa',
      icon: <FaCode />,
      path: '/features/web-development',
      category: 'service',
      ariaLabel: 'Learn more about our website development services'
    },
    'starter-website': {
      title: 'Starter Website Packages',
      description: 'Affordable starter websites for small businesses and entrepreneurs in South Africa',
      icon: <FaRocket />,
      path: '/features/web-development/starter-website-quote',
      category: 'service',
      ariaLabel: 'Get quote for starter website package'
    },
    'ecommerce-website': {
      title: 'E-commerce Development',
      description: 'Online store development with payment integration and inventory management',
      icon: <FaShoppingCart />,
      path: '/features/web-development/ecommerce-website-quote',
      category: 'service',
      ariaLabel: 'Learn about e-commerce website development'
    },
    'custom-website': {
      title: 'Custom Website Solutions',
      description: 'Advanced custom website development with unique features and integrations',
      icon: <FaStar />,
      path: '/features/web-development/custom-website-quote',
      category: 'service',
      ariaLabel: 'Explore custom website development options'
    },
    'web-projects': {
      title: 'Our Web Development Projects',
      description: 'Portfolio of successful website projects and case studies from South African clients',
      icon: <FaCode />,
      path: '/features/web-development/live-projects',
      category: 'portfolio',
      ariaLabel: 'View our web development portfolio'
    },
    'mobile-development': {
      title: 'Mobile App Development',
      description: 'iOS and Android mobile application development for businesses in South Africa',
      icon: <FaMobile />,
      path: '/features/mobile-app-development',
      category: 'service',
      ariaLabel: 'Discover mobile app development services'
    },
    'software-development': {
      title: 'Software Development',
      description: 'Custom software solutions and web applications tailored to your business needs',
      icon: <FaServer />,
      path: '/features/software-development',
      category: 'service',
      ariaLabel: 'Learn about custom software development'
    },
    'hosting': {
      title: 'Web Hosting & Business Email',
      description: 'Reliable web hosting, domain registration, and professional business email solutions',
      icon: <FaCloud />,
      path: '/features/hosting-and-mails',
      category: 'service',
      ariaLabel: 'Explore hosting and email services'
    },
    'resources': {
      title: 'Resources & Guides',
      description: 'Web development tips, digital marketing guides, and technology insights for businesses',
      icon: <FaQuestionCircle />,
      path: '/resources',
      category: 'content',
      ariaLabel: 'Browse our resources and guides'
    },
    'quote': {
      title: 'Request a Free Quote',
      description: 'Get a personalized project estimate and free consultation for your digital solution',
      icon: <FaEnvelope />,
      path: '/new-project/request-quotation',
      category: 'cta',
      ariaLabel: 'Request a free project quote'
    },
    'contact': {
      title: 'Contact Our Team',
      description: 'Get in touch with our web development experts for project discussions and support',
      icon: <FaEnvelope />,
      path: '/contact-us',
      category: 'contact',
      ariaLabel: 'Contact our development team'
    }
  };

  // Enhanced related content mapping with new pages
  const relatedContentMap = {
    'home': ['web-development', 'mobile-development', 'resources', 'quote'],
    'web-development': ['starter-website', 'ecommerce-website', 'custom-website', 'web-projects'],
    'starter-website-quote': ['web-development', 'ecommerce-website', 'quote', 'resources'],
    'ecommerce-website-quote': ['web-development', 'custom-website', 'hosting', 'quote'],
    'custom-website-quote': ['web-development', 'ecommerce-website', 'software-development', 'quote'],
    'web-projects': ['web-development', 'starter-website', 'ecommerce-website', 'quote'],
    'mobile-development': ['web-development', 'software-development', 'quote', 'resources'],
    'software-development': ['web-development', 'mobile-development', 'hosting', 'quote'],
    'hosting': ['web-development', 'software-development', 'contact', 'quote'],
    'resources': ['web-development', 'mobile-development', 'software-development', 'quote'],
    'quote': ['web-development', 'mobile-development', 'contact', 'resources'],
    'contact': ['web-development', 'mobile-development', 'quote', 'resources'],
    'about': ['web-development', 'mobile-development', 'resources', 'contact'],
    'popia': ['web-development', 'resources', 'contact', 'quote']
  };

  // Handle link clicks with analytics
  const handleLinkClick = (item, linkType = 'internal') => {
    if (linkType === 'internal') {
      trackInternalLinkClick(item.title, item.path);
    } else {
      trackCTAClick(item.title, 'related-content');
    }
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
    <section 
      className="py-16 bg-gradient-to-r from-gray-50 to-gray-100"
      aria-labelledby="related-content-heading"
      data-section="related-content"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 
            id="related-content-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Explore Our <span className="text-orange-600">Other Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more ways we can help grow your business with our comprehensive digital solutions in South Africa.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          role="list"
          aria-label="Related services and pages"
        >
          {displayContent.map((item, index) => (
            <motion.div
              key={item.path}
              variants={fadeIn}
              className="group"
              role="listitem"
            >
              <Link 
                to={item.path}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-orange-300 h-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                aria-label={item.ariaLabel}
                onClick={() => handleLinkClick(item, 'internal')}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors duration-200"
                      aria-hidden="true"
                    >
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
                  
                  <div 
                    className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          data-section="related-cta"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your digital presence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/new-project/request-quotation"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Get a free quote for your project"
              onClick={() => trackCTAClick('Get Free Quote', 'related-content-bottom')}
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Contact our team for more information"
              onClick={() => trackCTAClick('Contact Us', 'related-content-bottom')}
            >
              Contact Us
            </Link>
          </div>
          
          {/* Additional SEO-friendly text */}
          <div className="mt-8 text-sm text-gray-500 max-w-2xl mx-auto">
            <p>
              Serving businesses across South Africa with professional web development, mobile apps, 
              and digital solutions since 2023. Based in Midrand, Gauteng.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedContent;