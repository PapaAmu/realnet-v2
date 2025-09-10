// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";
import WebsiteDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import WebSoftware from "./Pages/WebSoftware";
import HostingAndEmail from "./Pages/HostingAndEmail";
import Contact from "./Pages/Contact";
import CookieConsent from "./components/CookieConsent";
import NotFoundPage from "./Pages/NotFoundPage";
import SEO from "./SEO";
import AnalyticsTracker from "./components/AnalyticsTracker";
import WebProjects from "./Pages/WebDevelopment/WebProjects";
import Quotation from "./Pages/Quotation";
import Resources from "./Pages/Resources";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <AnalyticsTracker />

        {/* Default SEO configuration for the entire app */}
        <SEO
          title="Web & Mobile Development Services | REALNET WEB SOLUTIONS"
          description="Professional web development, mobile app development, and software solutions. Custom websites, applications, and hosting services in South Africa."
          canonicalUrl={
            typeof window !== "undefined"
              ? window.location.href
              : "https://realnet-web.co.za"
          }
          ogType="website"
          twitterCard="summary_large_image"
          keywords={[
            "web development south africa",
            "mobile apps pretoria",
            "software development",
            "hosting services",
            "website design gauteng",
            "app developers za",
          ]}
        />

        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/features/web-development"
            element={
              <>
                <SEO
                  title="Website Development Services South Africa | Custom Web Solutions | REALNET"
                  description="Professional custom website development services in Pretoria. Responsive, modern websites built with React, Node.js, and cutting-edge technologies for South African businesses. Free consultation available."
                  canonicalUrl="https://realnet-web.co.za/features/web-development"
                  ogType="service"
                  keywords={[
                    "web development south africa",
                    "website design pretoria",
                    "react development",
                    "custom websites za",
                    "ecommerce development",
                    "wordpress development johannesburg",
                  ]}
                />
                <WebsiteDevelopment />
              </>
            }
          />

          <Route
            path="/features/web-development/live-projects"
            element={
              <>
                <SEO
                  title="Our Web Development Projects | REALNET"
                  description="View our portfolio of professional website development projects for South African businesses. E-commerce, business websites, web applications and more."
                  canonicalUrl="https://realnet-web.co.za/features/web-development/live-projects"
                  ogType="service"
                  keywords={[
                    "web development south africa",
                    "website design pretoria",
                    "fullstack development",
                    "custom websites za",
                    "ecommerce development",
                    "Website development johannesburg",
                  ]}
                />
                <WebProjects />
              </>
            }
          />

          <Route
            path="/features/mobile-app-development"
            element={
              <>
                <SEO
                  title="Mobile App Development South Africa | iOS & Android Apps | REALNET"
                  description="Expert mobile app development for iOS and Android in South Africa. Cross-platform and native applications built with React Native, Flutter, and Swift. Serving Pretoria, Johannesburg, and Cape Town."
                  canonicalUrl="https://realnet-web.co.za/features/mobile-app-development"
                  ogType="service"
                  keywords={[
                    "mobile app development south africa",
                    "iOS apps pretoria",
                    "Android apps johannesburg",
                    "React Native development",
                    "app developers cape town",
                    "mobile applications za",
                  ]}
                />
                <MobileAppDevelopment />
              </>
            }
          />

          <Route
            path="/features/software-development"
            element={
              <>
                <SEO
                  title="Custom Software Development South Africa | Web Applications | REALNET"
                  description="Custom software development services for South African businesses. Scalable web applications, APIs, and backend systems tailored to your specific needs. Enterprise solutions available."
                  canonicalUrl="https://realnet-web.co.za/features/software-development"
                  ogType="service"
                  keywords={[
                    "software development south africa",
                    "web applications pretoria",
                    "API development",
                    "backend systems",
                    "enterprise software",
                    "custom solutions johannesburg",
                  ]}
                />
                <WebSoftware />
              </>
            }
          />

          <Route
            path="/features/hosting-and-mails"
            element={
              <>
                <SEO
                  title="Web Hosting & Email Services South Africa | Reliable Hosting | REALNET"
                  description="Professional web hosting, domain registration, and business email solutions in South Africa. Fast, secure, and reliable hosting infrastructure with 99.9% uptime guarantee."
                  canonicalUrl="https://realnet-web.co.za/features/hosting-and-mails"
                  ogType="service"
                  keywords={[
                    "web hosting south africa",
                    "email hosting pretoria",
                    "domain registration",
                    "cloud hosting za",
                    "vps hosting johannesburg",
                    "business email solutions",
                  ]}
                />
                <HostingAndEmail />
              </>
            }
          />

          <Route
            path="/contact-us"
            element={
              <>
                <SEO
                  title="Contact Us | Get in Touch With Our Development Team | REALNET"
                  description="Contact our development team in Pretoria to discuss your project requirements. Get a free consultation and quote for your web or mobile app project. Serving clients across South Africa."
                  canonicalUrl="https://realnet-web.co.za/contact-us"
                  ogType="article"
                  keywords={[
                    "contact web developers",
                    "quote pretoria",
                    "consultation south africa",
                    "project inquiry",
                    "get started",
                    "free estimate za",
                  ]}
                />
                <Contact />
              </>
            }
          />

          <Route
            path="/new-project/request-quotation"
            element={
              <>
                <SEO
                  title="Free Quotation | Website & Mobile App Development"
                  description="Expert mobile app development for iOS and Android in South Africa. Cross-platform and native applications built with React Native, Flutter, and Swift. Serving Pretoria, Johannesburg, and Cape Town."
                  canonicalUrl="https://realnet-web.co.za/new-project/request-quotation"
                  ogType="service"
                  keywords={[
                    "Website & app development south africa",
                    "iOS apps pretoria",
                    "Android apps johannesburg",
                    "React Native development",
                    "app developers cape town",
                    "mobile applications za",
                  ]}
                />
                <Quotation />
              </>
            }
          />

          <Route
            path="/resources"
            element={
              <>
                <SEO
                  title="Web Development Resources & Guides | REALNET WEB SOLUTIONS"
                  description="Expert insights, guides, and resources for web development, mobile apps, SEO, and digital marketing in South Africa. Stay updated with the latest industry trends and best practices."
                  canonicalUrl="https://realnet-web.co.za/resources"
                  ogType="website"
                  keywords={[
                    "web development resources",
                    "mobile app guides", 
                    "SEO tips south africa",
                    "digital marketing resources",
                    "web design guides",
                    "programming tutorials"
                  ]}
                />
                <Resources />
              </>
            }
          />

          {/* Catch all route - must be last */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <CookieConsent />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
