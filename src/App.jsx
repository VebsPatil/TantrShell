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
import TrainingPage from './pages/TrainingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
