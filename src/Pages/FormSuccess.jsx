import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  FaCheckCircle, 
  FaHome, 
  FaEnvelope, 
  FaPhone, 
  FaClock,
  FaArrowLeft 
} from "react-icons/fa";
import SEO from "../SEO";
import bg_image from "../assets/images/bg_image.png";

const FormSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formType = searchParams.get('type') || 'form';

  // Auto redirect to home after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 30000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const getFormTypeMessage = () => {
    switch (formType) {
      case 'contact':
        return {
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We have received your message and will get back to you within 24 hours."
        };
      case 'starter-quote':
        return {
          title: "Starter Website Quote Submitted!",
          description: "Thank you for your interest in our starter website package. We will review your requirements and contact you within 24 hours with a detailed quote."
        };
      case 'ecommerce-quote':
        return {
          title: "E-commerce Quote Submitted!",
          description: "Thank you for your interest in our e-commerce solutions. We will review your requirements and contact you within 24 hours with a detailed quote."
        };
      case 'custom-quote':
        return {
          title: "Custom Website Quote Submitted!",
          description: "Thank you for your interest in our custom website development services. We will review your requirements and contact you within 24 hours with a detailed quote."
        };
      case 'quotation':
        return {
          title: "Quotation Request Submitted!",
          description: "Thank you for your quotation request. Our team will review your requirements and contact you within 24 hours with a detailed proposal."
        };
      default:
        return {
          title: "Form Submitted Successfully!",
          description: "Thank you for your submission. We have received your information and will get back to you soon."
        };
    }
  };

  const { title, description } = getFormTypeMessage();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <SEO
        title={`${title} | REALNET WEB SOLUTIONS`}
        description="Form submission successful. Thank you for contacting REALNET WEB SOLUTIONS. We will get back to you soon."
        keywords={[
          "form submission successful",
          "thank you page",
          "REALNET WEB SOLUTIONS",
          "contact confirmation",
          "quote submission successful"
        ]}
      />

      <div
        className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20"
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xs"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 filter blur-xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "backOut",
              delay: 0.2 
            }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
              <FaCheckCircle className="text-4xl text-white" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-green-200/50">
              <FaClock className="text-green-500 text-xl mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Response Time</div>
              <div className="text-xs text-gray-600">Within 24 Hours</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-200/50">
              <FaEnvelope className="text-blue-500 text-xl mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Email</div>
              <div className="text-xs text-gray-600">lukhele@realnet-web.co.za</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-purple-200/50">
              <FaPhone className="text-purple-500 text-xl mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-800">Phone</div>
              <div className="text-xs text-gray-600">+27 64 038-8883</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoHome}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaHome className="text-lg" />
              <span>Back to Home</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoBack}
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaArrowLeft className="text-lg" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Auto redirect notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 text-sm text-gray-500"
          >
            You will be automatically redirected to the homepage in 30 seconds
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200/50"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                <div className="font-medium text-gray-800">Review</div>
                <div className="text-gray-600">We review your submission</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                <div className="font-medium text-gray-800">Contact</div>
                <div className="text-gray-600">We reach out within 24 hours</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                <div className="font-medium text-gray-800">Discuss</div>
                <div className="text-gray-600">We discuss your project details</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FormSuccess;