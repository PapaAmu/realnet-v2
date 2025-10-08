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
    console.log('📊 Analytics Event:', eventName, eventData);
  }
};

export const trackConversion = (conversionType, value = null) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'conversions',
      event_label: conversionType,
      value: value
    });
    console.log('🎯 Conversion tracked:', conversionType);
  }
};

export const trackOutboundLink = (url, linkText = null) => {
  trackEvent('outbound_link', 'navigation', linkText || url);
};

export const trackFormSubmission = (formName, formPage = null) => {
  trackConversion('form_submission', formName);
  trackEvent('form_submit', 'forms', formPage || window.location.pathname);
};

// SEO-specific tracking functions
export const trackSEOMetrics = (pageTitle, pageCategory) => {
  if (window.gtag) {
    // Track page load performance
    const loadTime = Math.round(performance.now());
    window.gtag('event', 'page_load', {
      event_category: 'performance',
      event_label: pageTitle,
      value: loadTime
    });

    // Track SEO engagement
    window.gtag('event', 'seo_engagement', {
      event_category: 'seo',
      event_label: pageCategory,
      custom_map: {
        'dimension1': 'page_load_time',
        'dimension2': 'user_engagement'
      }
    });

    console.log('🔍 SEO Metrics Tracked:', { pageTitle, pageCategory, loadTime });
  }
};

export const trackScrollDepth = (depthPercentage) => {
  if (window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: 'scroll_percentage',
      value: depthPercentage
    });
    
    // Track specific scroll milestones
    if (depthPercentage >= 25) trackEvent('scroll_25', 'engagement');
    if (depthPercentage >= 50) trackEvent('scroll_50', 'engagement');
    if (depthPercentage >= 75) trackEvent('scroll_75', 'engagement');
    if (depthPercentage >= 90) trackEvent('scroll_90', 'engagement');
  }
};

export const trackTimeOnPage = (seconds, pagePath) => {
  if (window.gtag) {
    window.gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: pagePath,
      value: seconds
    });

    // Track engagement milestones
    if (seconds >= 30) trackEvent('engaged_30s', 'engagement', pagePath);
    if (seconds >= 60) trackEvent('engaged_60s', 'engagement', pagePath);
    if (seconds >= 120) trackEvent('engaged_2min', 'engagement', pagePath);
    if (seconds >= 300) trackEvent('engaged_5min', 'engagement', pagePath);
  }
};

export const trackContentInteraction = (contentType, contentTitle, action = 'view') => {
  if (window.gtag) {
    window.gtag('event', 'content_interaction', {
      event_category: 'content',
      event_label: contentType,
      content_title: contentTitle,
      action: action
    });
  }
};

export const trackInternalLinkClick = (linkText, destinationPage) => {
  if (window.gtag) {
    window.gtag('event', 'internal_link_click', {
      event_category: 'navigation',
      event_label: linkText,
      destination_page: destinationPage
    });
  }
};

export const trackCTAClick = (ctaText, ctaLocation, ctaType = 'primary') => {
  if (window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'conversions',
      event_label: ctaText,
      cta_location: ctaLocation,
      cta_type: ctaType
    });
  }
};

// Helper function to categorize pages for analytics
const getPageCategory = (pathname) => {
  if (pathname === '/') return 'homepage';
  if (pathname.includes('/features/web-development')) {
    if (pathname.includes('/starter-website-quote')) return 'starter-website-quote';
    if (pathname.includes('/ecommerce-website-quote')) return 'ecommerce-website-quote';
    if (pathname.includes('/custom-website-quote')) return 'custom-website-quote';
    if (pathname.includes('/live-projects')) return 'web-projects';
    return 'web-development';
  }
  if (pathname.includes('/features/mobile-app-development')) return 'mobile-development';
  if (pathname.includes('/features/software-development')) return 'software-development';
  if (pathname.includes('/features/hosting')) return 'hosting';
  if (pathname.includes('/resources')) return 'resources';
  if (pathname.includes('/contact')) return 'contact';
  if (pathname.includes('/quotation') || pathname.includes('/quote')) return 'quotation';
  if (pathname.includes('/about-us')) return 'about';
  if (pathname.includes('/popia-act')) return 'popia';
  return 'other';
};

// Helper to get page type for content grouping
const getPageType = (pathname) => {
  if (pathname === '/') return 'homepage';
  if (pathname.includes('/features/')) return 'service-page';
  if (pathname.includes('/quote') || pathname.includes('/quotation')) return 'quote-page';
  if (pathname.includes('/contact')) return 'contact-page';
  if (pathname.includes('/resources')) return 'resource-page';
  if (pathname.includes('/about') || pathname.includes('/popia')) return 'info-page';
  return 'other-page';
};

const AnalyticsTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (import.meta.env.VITE_GA_TRACKING_ID) {
        // Load Google Analytics script if not already loaded
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
          
          // Enhanced GA4 configuration with SEO tracking
          window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
            page_path: window.location.pathname,
            page_title: document.title,
            page_location: window.location.href,
            transport_type: 'beacon',
            // Enhanced measurement settings
            enhanced_measurement: true,
            // SEO-specific custom dimensions
            custom_map: {
              'dimension1': 'page_category',
              'dimension2': 'page_type',
              'dimension3': 'content_group',
              'dimension4': 'user_engagement_level'
            },
            // Set custom dimensions
            page_category: getPageCategory(location.pathname),
            page_type: getPageType(location.pathname),
            content_group: getPageCategory(location.pathname),
            // User engagement settings
            engagement_time_msec: 100,
            send_page_view: true
          });
          
          console.log('✅ Google Analytics initialized with ID:', import.meta.env.VITE_GA_TRACKING_ID);
        }
      }
    };

    // Enhanced page view tracking with SEO metrics
    const trackPageView = () => {
      const pageCategory = getPageCategory(location.pathname);
      const pageType = getPageType(location.pathname);
      
      if (window.gtag) {
        // Enhanced page view configuration
        window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
          page_path: location.pathname + location.search,
          page_title: document.title,
          page_location: window.location.href,
          // Custom dimensions for SEO analysis
          page_category: pageCategory,
          page_type: pageType,
          content_group1: pageCategory,
          content_group2: pageType
        });
        
        // Track detailed page view event
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname,
          page_category: pageCategory,
          page_type: pageType,
          event_category: 'navigation',
          event_label: pageCategory
        });

        // Track SEO metrics
        trackSEOMetrics(document.title, pageCategory);
        
        console.log('📄 Page view tracked:', {
          path: location.pathname,
          category: pageCategory,
          type: pageType,
          title: document.title
        });
      }
    };

    // Enhanced user engagement tracking
    const trackUserEngagement = () => {
      let pageLoadTime = Date.now();
      let maxScrollDepth = 0;
      let timeOnPage = 0;

      // Track time spent on page
      const timeTracker = setInterval(() => {
        timeOnPage += 1;
        
        // Track engagement milestones
        if (timeOnPage === 10) {
          trackEvent('engaged_session', 'engagement', location.pathname, 10);
        }
        if (timeOnPage === 30) {
          trackTimeOnPage(30, location.pathname);
        }
        if (timeOnPage === 60) {
          trackTimeOnPage(60, location.pathname);
        }
      }, 1000);

      // Track scroll depth with enhanced precision
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = Math.round(
          (scrollTop / (documentHeight - windowHeight)) * 100
        );

        // Only track if scroll depth increased
        if (scrollPercentage > maxScrollDepth) {
          maxScrollDepth = scrollPercentage;
          trackScrollDepth(scrollPercentage);
        }

        // Track specific content sections based on scroll position
        trackContentSections(scrollTop);
      };

      // Track when specific content sections come into view
      const trackContentSections = (scrollTop) => {
        const sections = {
          'hero': document.querySelector('[data-section="hero"]'),
          'services': document.querySelector('[data-section="services"]'),
          'portfolio': document.querySelector('[data-section="portfolio"]'),
          'testimonials': document.querySelector('[data-section="testimonials"]'),
          'cta': document.querySelector('[data-section="cta"]')
        };

        Object.entries(sections).forEach(([sectionName, element]) => {
          if (element && isElementInViewport(element) && !element.dataset.tracked) {
            element.dataset.tracked = 'true';
            trackContentInteraction('section_view', sectionName, 'view');
          }
        });
      };

      // Check if element is in viewport
      const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };

      // Track internal link clicks
      const handleInternalLinkClick = (event) => {
        const link = event.target.closest('a');
        if (link && link.href && link.href.includes(window.location.origin)) {
          const linkText = link.textContent?.trim() || link.getAttribute('aria-label') || 'Unknown Link';
          const destination = new URL(link.href).pathname;
          trackInternalLinkClick(linkText, destination);
        }
      };

      // Track CTA clicks
      const handleCTAClick = (event) => {
        const cta = event.target.closest('button, [role="button"], .btn, [class*="cta"], [class*="button"]');
        if (cta) {
          const ctaText = cta.textContent?.trim() || cta.getAttribute('aria-label') || 'Unknown CTA';
          const ctaLocation = getCTALocation(cta);
          trackCTAClick(ctaText, ctaLocation);
        }
      };

      // Helper to determine CTA location
      const getCTALocation = (ctaElement) => {
        // Traverse up the DOM to find section context
        let parent = ctaElement.parentElement;
        while (parent) {
          if (parent.getAttribute('data-section')) {
            return parent.getAttribute('data-section');
          }
          if (parent.classList.contains('section') || parent.classList.contains('container')) {
            return parent.id || 'general';
          }
          parent = parent.parentElement;
        }
        return 'unknown';
      };

      // Add event listeners
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('click', handleInternalLinkClick);
      document.addEventListener('click', handleCTAClick);

      // Track page performance
      const trackPerformance = () => {
        if ('performance' in window) {
          const navTiming = performance.getEntriesByType('navigation')[0];
          if (navTiming) {
            const loadTime = Math.round(navTiming.loadEventEnd - navTiming.navigationStart);
            trackEvent('page_load_time', 'performance', location.pathname, loadTime);
          }
        }
      };

      // Wait for page to fully load before tracking performance
      if (document.readyState === 'complete') {
        trackPerformance();
      } else {
        window.addEventListener('load', trackPerformance);
      }

      // Cleanup function
      return () => {
        clearInterval(timeTracker);
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleInternalLinkClick);
        document.removeEventListener('click', handleCTAClick);
        window.removeEventListener('load', trackPerformance);
        
        // Track final time on page when leaving
        if (timeOnPage > 5) {
          trackTimeOnPage(timeOnPage, location.pathname);
        }
      };
    };

    // Initialize analytics and start tracking
    initGoogleAnalytics();
    
    // Small delay to ensure GA is loaded
    const timeoutId = setTimeout(() => {
      trackPageView();
      const cleanupEngagement = trackUserEngagement();
      
      // Return cleanup function for React
      return () => {
        if (cleanupEngagement) cleanupEngagement();
        clearTimeout(timeoutId);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default AnalyticsTracker;