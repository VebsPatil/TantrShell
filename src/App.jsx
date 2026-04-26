import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import SocialSidebars from './components/SocialSidebars';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import CareersPage from './pages/CareersPage';


/* Product Deploy Pages */
import HospitalManagementPage from './pages/products/HospitalManagementPage';
import SchoolERPPage from './pages/products/SchoolERPPage';
import EcommercePage from './pages/products/EcommercePage';
import HRManagementPage from './pages/products/HRManagementPage';
import BookingEnginePage from './pages/products/BookingEnginePage';
import BillingPage from './pages/products/BillingPage';
import CRMPage from './pages/products/CRMPage';
import AISupportBotPage from './pages/products/AISupportBotPage';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaded} />}
      <GrainOverlay />
      <Cursor />
      <Navbar visible={loaded} />
      <SocialSidebars />

      <main>
        <Routes>
          <Route path="/" element={<HomePage loaded={loaded} />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/careers" element={<CareersPage />} />


          {/* Product Deploy Pages */}
          <Route path="/products/hospital-management" element={<HospitalManagementPage />} />
          <Route path="/products/school-erp" element={<SchoolERPPage />} />
          <Route path="/products/ecommerce" element={<EcommercePage />} />
          <Route path="/products/hr-management" element={<HRManagementPage />} />
          <Route path="/products/booking-engine" element={<BookingEnginePage />} />
          <Route path="/products/billing" element={<BillingPage />} />
          <Route path="/products/crm" element={<CRMPage />} />
          <Route path="/products/ai-support-bot" element={<AISupportBotPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
