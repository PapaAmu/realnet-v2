// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WebsiteDevelopment from "./Pages/WebDevelopment/WebDevelopment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MobileAppDevelopment from "./Pages/MobileAppDevelopment";
import WebSoftware from "./Pages/WebSoftware";
import HostingAndEmail from "./Pages/HostingAndEmail";
import Contact from "./Pages/Contact";
import CookieConsent from "./Components/CookieConsent";
import NotFoundPage from "./Pages/NotFoundPage";
import AnalyticsTracker from "./Components/AnalyticsTracker";
import WebProjects from "./Pages/WebDevelopment/WebProjects";
import Quotation from "./Pages/Quotation";
import Resources from "./Pages/Resources";
import AboutUs from "./Pages/AboutUs";
import POPIA from "./Pages/POPIA";
import Breadcrumbs from "./Components/Breadcrumbs";
import StarterWebsiteQuote from "./Pages/WebDevelopment/StarterWebsiteQuote";
import EcommerceWebsiteQuote from "./Pages/WebDevelopment/EcommerceWebsiteQuote";
import AdvancedWebsiteQuote from "./Pages/WebDevelopment/AdvancedWebsiteQuote";

const App = () => {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Navbar />
      <Breadcrumbs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/web-development" element={<WebsiteDevelopment />} />
        <Route path="/features/web-development/starter-website-quote" element={<StarterWebsiteQuote />} />
        <Route path="/features/web-development/ecommerce-website-quote" element={<EcommerceWebsiteQuote />} />
        <Route path="/features/web-development/custom-website-quote" element={<AdvancedWebsiteQuote />} />
        <Route path="/features/web-development/live-projects" element={<WebProjects />} />
        <Route path="/features/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/features/software-development" element={<WebSoftware />} />
        <Route path="/features/hosting-and-mails" element={<HostingAndEmail />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/new-project/request-quotation" element={<Quotation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/popia-act" element={<POPIA />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <CookieConsent />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
