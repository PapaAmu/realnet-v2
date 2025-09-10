// src/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title = "Web & Mobile Development Services | REALNET WEB SOLUTIONS",
  description = "Professional web development, mobile app development, and software solutions",
  canonicalUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = ["web development", "mobile apps", "software development", "hosting"],
  ogImage = "/default-og-image.jpg",
  structuredData,
  noIndex = false,
  article = null // For blog posts: { publishedTime, modifiedTime, authors }
}) => {
  const location = useLocation();
  const isBrowser = typeof window !== 'undefined';
  const currentUrl = canonicalUrl || (isBrowser ? window.location.origin + location.pathname : 'https://realnet-web.co.za');
  const siteName = "REALNET WEB SOLUTIONS";
  const twitterHandle = "@realnetweb";

  // Default Organization Schema
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
            "description": "Custom website development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Hosting",
            "description": "Reliable web hosting services"
          }
        }
      ]
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
        }
      };
    }
    return null;
  };

  const jsonLd = structuredData || defaultStructuredData;
  const serviceSchema = getServiceSchema();

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${isBrowser ? window.location.origin : "https://realnet-web.co.za"}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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
    </Helmet>
  );
};

export default SEO;