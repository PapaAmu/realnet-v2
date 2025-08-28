// src/components/AnalyticsTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize Google Analytics
    if (import.meta.env.VITE_GA_TRACKING_ID) {
      // Load Google Analytics script
      if (!window.gtag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_TRACKING_ID}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
          page_path: window.location.pathname,
          transport_type: 'beacon'
        });
      }
      
      // Track page views
      window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
    
    // Track other analytics events (optional)
    const handleAnalytics = () => {
      // You can add custom events here
      console.log('Page viewed:', location.pathname);
    };
    
    handleAnalytics();
  }, [location]);
  
  return null;
};

export default AnalyticsTracker;