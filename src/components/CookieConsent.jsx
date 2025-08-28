import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    // Set all cookies to accepted
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    // Save user's selected preferences
    localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
    setShowConsent(false);
  };

  const togglePreference = (preference) => {
    setCookiePreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Don't render if consent has been given or if not showing
  if (!showConsent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 xl:left-16 xl:right-16 z-50"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-6 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-full mr-4">
                <FaCookieBite className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">We value your privacy</h3>
            </div>
            <button
              onClick={() => setShowConsent(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. You can customize your preferences below.
          </p>

          {/* Details Toggle */}
          <button 
            onClick={toggleDetails}
            className="flex items-center text-orange-500 font-medium mb-4"
          >
            {showDetails ? (
              <>
                <span>Hide cookie preferences</span>
                <FaChevronUp className="ml-2" />
              </>
            ) : (
              <>
                <span>Customize your preferences</span>
                <FaChevronDown className="ml-2" />
              </>
            )}
          </button>

          {/* Cookie Preferences Details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Necessary Cookies</h4>
                        <p className="text-sm text-gray-600">Essential for the website to function properly. Cannot be disabled.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={cookiePreferences.necessary}
                          disabled
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Analytics Cookies</h4>
                        <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={cookiePreferences.analytics}
                          onChange={() => togglePreference('analytics')}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Marketing Cookies</h4>
                        <p className="text-sm text-gray-600">Used to track visitors across websites for advertising purposes.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={cookiePreferences.marketing}
                          onChange={() => togglePreference('marketing')}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Preferences Cookies */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Preferences Cookies</h4>
                        <p className="text-sm text-gray-600">Allow the website to remember choices you make.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={cookiePreferences.preferences}
                          onChange={() => togglePreference('preferences')}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAcceptSelected}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-xl shadow-sm hover:bg-gray-50 transition-colors duration-200 flex-1"
            >
              Accept Selected
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAcceptAll}
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex-1"
            >
              Accept All
            </motion.button>
          </div>

          {/* Policy Link */}
          <p className="text-xs text-gray-500 mt-4">
            By using our website, you agree to our <a href="#" className="text-orange-500 hover:underline">Cookie Policy</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;