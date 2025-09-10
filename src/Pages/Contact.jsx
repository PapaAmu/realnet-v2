import React, { useState } from "react";
import { motion } from "framer-motion";
import bg_image from "../assets/images/bg_image.png";
import { trackFormSubmission, trackEvent } from "../components/AnalyticsTracker";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { toast } from "react-toastify";

// Custom loader component with advanced animations
const AdvancedLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Main spinner */}
      <motion.div
        className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              x: [0, 20 * Math.cos((i * 2 * Math.PI) / 3)],
              y: [0, 20 * Math.sin((i * 2 * Math.PI) / 3)],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        </motion.div>
      ))}
      
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 border-2 border-white rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute inset-0 border border-white rounded-full"
        animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        
        // Track successful contact form submission
        trackFormSubmission('contact_form', '/contact-us');
        trackEvent('contact_submitted', 'conversions', formData.subject, 1);
        
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xs"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full translate-x-1/3 translate-y-1/3 filter blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch With Us
          </h2>
          <p className="text-lg md:text-sm text-gray-700 max-w-3xl mx-auto">
            Have a project in mind or questions about our app development
            services? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project or questions..."
                ></textarea>
              </div>

              <motion.button
                whileHover={isLoading ? {} : { scale: 1.02 }}
                whileTap={isLoading ? {} : { scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden"
              >
                <motion.span
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  Send Message
                </motion.span>
                
                {isLoading && <AdvancedLoader />}
                
                {/* Animated progress bar that fills from left to right */}
                {isLoading && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white/50"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Matsau Street, Ivory Park</p>
                    <p className="text-gray-600">Midrand Gauteng, 1689</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-pink-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(+27) 64 038-8883</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amber-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">lukhele@realnet-web.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Follow Us
              </h3>

              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://web.facebook.com/profile.php?id=61565067420433"
                  className="bg-blue-100 text-blue-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <FaFacebook className="text-2xl" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="#"
                  className="bg-blue-100 text-blue-700 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://instagram.com/realnet_web"
                  className="bg-pink-100 text-pink-600 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Business Hours
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">
                    Monday - Friday
                  </span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
            className="fill-white/90"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;