// src/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// Page-specific SEO configurations
const pageConfigs = {
  '/': {
    title: "Web & Mobile Development Company | REALNET WEB SOLUTIONS",
    description: "Professional web development, mobile app development, and custom software solutions in South Africa. Get responsive websites, e-commerce solutions, and business applications.",
    keywords: ["web development company", "mobile app developers", "software development", "website design", "e-commerce development", "South Africa"]
  },
  '/features/web-development': {
    title: "Website Development Services | Custom Web Solutions South Africa",
    description: "Professional website development services including responsive design, e-commerce solutions, and custom web applications. Get your business online with REALNET.",
    keywords: ["website development", "web design", "responsive websites", "e-commerce development", "web developers South Africa"]
  },
  '/features/web-development/starter-website-quote': {
    title: "Starter Website Quote | Affordable Business Websites South Africa",
    description: "Get a free quote for your starter business website. Professional, responsive designs at affordable prices. Perfect for small businesses in South Africa.",
    keywords: ["starter website", "business website quote", "affordable web design", "small business website"]
  },
  '/features/web-development/ecommerce-website-quote': {
    title: "E-commerce Website Quote | Online Store Development South Africa",
    description: "Get a custom quote for your e-commerce website. Professional online store development with payment integration and inventory management.",
    keywords: ["e-commerce website", "online store development", "e-commerce quote", "South Africa e-commerce"]
  },
  '/features/web-development/custom-website-quote': {
    title: "Custom Website Quote | Advanced Web Development Solutions",
    description: "Get a quote for custom website development with advanced features, integrations, and scalable architecture for growing businesses.",
    keywords: ["custom website development", "advanced web solutions", "enterprise website", "custom web applications"]
  },
  '/features/web-development/live-projects': {
    title: "Our Web Development Projects | Portfolio & Case Studies",
    description: "View our portfolio of successful web development projects. See how we've helped businesses in South Africa with custom web solutions.",
    keywords: ["web development portfolio", "website projects", "case studies", "our work"]
  },
  '/features/mobile-app-development': {
    title: "Mobile App Development | iOS & Android Apps South Africa",
    description: "Professional mobile app development for iOS and Android. Create engaging mobile experiences for your customers with our expert development team.",
    keywords: ["mobile app development", "iOS development", "Android apps", "mobile applications South Africa"]
  },
  '/features/software-development': {
    title: "Software Development | Custom Business Applications South Africa",
    description: "Custom software development solutions for businesses. Streamline operations with tailored web applications and business software.",
    keywords: ["software development", "custom applications", "business software", "web applications"]
  },
  '/features/hosting-and-mails': {
    title: "Web Hosting & Business Email | Reliable Hosting Solutions South Africa",
    description: "Reliable web hosting and professional business email solutions. Fast, secure hosting with 99.9% uptime guarantee for South African businesses.",
    keywords: ["web hosting", "business email", "domain hosting", "South Africa hosting"]
  },
  '/contact-us': {
    title: "Contact Us | Web Development Company South Africa",
    description: "Get in touch with REALNET WEB SOLUTIONS for web development, mobile apps, and software solutions. Let's discuss your project requirements.",
    keywords: ["contact web developers", "get in touch", "project consultation"]
  },
  '/new-project/request-quotation': {
    title: "Free Project Quote | Web & Mobile Development Pricing",
    description: "Get a free, no-obligation quote for your web or mobile development project. Transparent pricing for businesses in South Africa.",
    keywords: ["project quote", "development pricing", "free consultation"]
  },
  '/resources': {
    title: "Web Development Resources & Guides | REALNET",
    description: "Learn about web development, mobile apps, and digital marketing with our comprehensive resources and guides for business owners.",
    keywords: ["web development resources", "digital guides", "tech articles"]
  },
  '/about-us': {
    title: "About REALNET WEB SOLUTIONS | Web Development Company",
    description: "Learn about REALNET WEB SOLUTIONS - a professional web development company serving South African businesses with digital solutions.",
    keywords: ["about us", "our company", "web development team"]
  },
  '/popia-act': {
    title: "POPI Act Compliance | Data Protection South Africa",
    description: "Understand POPI Act compliance for your website. We help South African businesses implement data protection and privacy measures.",
    keywords: ["POPI Act", "data protection", "privacy compliance", "South Africa"]
  }
};

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords,
  ogImage = "/og-image.jpg",
  structuredData,
  noIndex = false,
  article = null
}) => {
  const location = useLocation();
  const isBrowser = typeof window !== 'undefined';
  const currentUrl = canonicalUrl || (isBrowser ? window.location.origin + location.pathname : 'https://realnet-web.co.za');
  const siteName = "REALNET WEB SOLUTIONS";
  const twitterHandle = "@realnetweb";

  // Get page-specific config or use defaults
  const pageConfig = pageConfigs[location.pathname] || {};
  const seoTitle = title || pageConfig.title || "Web & Mobile Development Services | REALNET WEB SOLUTIONS";
  const seoDescription = description || pageConfig.description || "Professional web development, mobile app development, and software solutions";
  const seoKeywords = keywords || pageConfig.keywords || ["web development", "mobile apps", "software development", "hosting"];

  // Enhanced Organization Schema
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "alternateName": "REALNET",
    "description": "Professional web development, mobile app development, and software solutions for South African businesses",
    "url": isBrowser ? window.location.origin : "https://realnet-web.co.za",
    "logo": `${isBrowser ? window.location.origin : "https://realnet-web.co.za"}/logo.png`,
    "foundingDate": "2023",
    "numberOfEmployees": "2-10",
    "sameAs": [
      "https://twitter.com/realnet_web",
      "https://www.linkedin.com/company/realnet-web-solutions-pty",
      "https://web.facebook.com/profile.php?id=61565067420433",
      "https://instagram.com/realnet_web"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+27-64-038-8883",
      "email": "lukhele@realnet-web.co.za",
      "contactType": "Customer Service",
      "areaServed": "ZA",
      "availableLanguage": ["English", "Afrikaans"],
      "contactOption": "TollFree"
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Matsau Street, Ivory Park",
      "addressLocality": "Midrand",
      "addressRegion": "Gauteng",
      "postalCode": "1689",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-25.9083",
      "longitude": "28.1162"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Custom website development and responsive web design services",
            "areaServed": "ZA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile application development",
            "areaServed": "ZA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Hosting",
            "description": "Reliable web hosting and domain registration services",
            "areaServed": "ZA"
          }
        }
      ]
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "24"
    }
  };

  // Service Schema for service pages
  const getServiceSchema = () => {
    if (location.pathname.includes('/features/')) {
      const serviceType = location.pathname.split('/').pop();
      const serviceName = serviceType.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
          "@type": "Organization",
          "name": siteName
        },
        "areaServed": "ZA",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": currentUrl
        },
        "description": seoDescription
      };
    }
    return null;
  };

  const jsonLd = structuredData || defaultStructuredData;
  const serviceSchema = getServiceSchema();

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://realnet-web.co.za"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords.join(", ")} />
      <meta name="author" content="REALNET WEB SOLUTIONS" />
      <meta name="geo.region" content="ZA-GT" />
      <meta name="geo.placename" content="Midrand" />
      <meta name="geo.position" content="-25.9083;28.1162" />
      <meta name="ICBM" content="-25.9083, 28.1162" />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${isBrowser ? window.location.origin : "https://realnet-web.co.za"}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZA" />
      <meta property="og:country-name" content="South Africa" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${isBrowser ? window.location.origin : "https://realnet-web.co.za"}${ogImage}`} />
      
      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#FF9E5E" />
      
      {/* Favicon links */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      {/* Additional SEO enhancements */}
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
    </Helmet>
  );
};

export default SEO;