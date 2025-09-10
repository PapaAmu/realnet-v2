// src/components/AnalyticsTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Enhanced analytics utility functions
export const trackEvent = (eventName, eventCategory = 'engagement', eventLabel = null, value = null) => {
  if (window.gtag) {
    const eventData = {
      event_category: eventCategory,
      event_label: eventLabel,
      value: value
    };
    
    // Remove null values
    Object.keys(eventData).forEach(key => {
      if (eventData[key] === null) {
        delete eventData[key];
      }
    });
    
    window.gtag('event', eventName, eventData);
    console.log('Analytics Event:', eventName, eventData);
  }
};

export const trackConversion = (conversionType, value = null) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'conversions',
      event_label: conversionType,
      value: value
    });
    console.log('Conversion tracked:', conversionType);
  }
};

export const trackOutboundLink = (url, linkText = null) => {
  trackEvent('outbound_link', 'navigation', linkText || url);
};

export const trackFormSubmission = (formName, formPage = null) => {
  trackConversion('form_submission', formName);
  trackEvent('form_submit', 'forms', formPage || window.location.pathname);
};

// Helper function to categorize pages for analytics
const getPageCategory = (pathname) => {
  if (pathname === '/') return 'homepage';
  if (pathname.includes('/features/web-development')) return 'web-development';
  if (pathname.includes('/features/mobile-app-development')) return 'mobile-development';
  if (pathname.includes('/features/software-development')) return 'software-development';
  if (pathname.includes('/features/hosting')) return 'hosting';
  if (pathname.includes('/resources')) return 'resources';
  if (pathname.includes('/contact')) return 'contact';
  if (pathname.includes('/quotation') || pathname.includes('/quote')) return 'quotation';
  return 'other';
};

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
        
        // Enhanced GA4 configuration
        window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
          page_path: window.location.pathname,
          page_title: document.title,
          transport_type: 'beacon',
          // Enhanced measurement settings
          enhanced_measurement: {
            scrolls: true,
            outbound_clicks: true,
            site_search: true,
            video_engagement: true,
            file_downloads: true
          },
          // Custom dimensions for SEO tracking
          custom_map: {
            'custom_dimension_1': 'page_category',
            'custom_dimension_2': 'user_type'
          },
          // User engagement settings
          engagement_time_msec: 100,
          send_page_view: true
        });
        
        console.log('Google Analytics initialized with ID:', import.meta.env.VITE_GA_TRACKING_ID);
      }
      
      // Enhanced page view tracking with custom dimensions
      const pageCategory = getPageCategory(location.pathname);
      
      window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
        // Custom dimensions
        page_category: pageCategory,
        content_group1: pageCategory // Content grouping for reporting
      });
      
      // Track specific page events
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        event_category: 'navigation',
        event_label: pageCategory
      });
      
      console.log('Page view tracked:', location.pathname, 'Category:', pageCategory);
    }
    
    // Enhanced analytics tracking
    const handleAnalytics = () => {
      // Track time spent on page (after 10 seconds)
      const timeTracker = setTimeout(() => {
        trackEvent('engaged_session', 'engagement', location.pathname, 10);
      }, 10000);
      
      // Track scroll depth
      const handleScroll = () => {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        // Track significant scroll milestones
        if (scrollPercentage >= 75) {
          trackEvent('scroll_depth', 'engagement', '75%', scrollPercentage);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup function
      return () => {
        clearTimeout(timeTracker);
        window.removeEventListener('scroll', handleScroll);
      };
    };
    
    const cleanup = handleAnalytics();
    return cleanup;
  }, [location]);
  
  return null;
};

export default AnalyticsTracker;