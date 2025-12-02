import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import { motion } from 'framer-motion';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const isContentHeavyPage = location.pathname === '/experience';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="app-parallax-bg" style={{
        position: 'relative',
        minHeight: '100vh',
      }}>
        <div className="parallax-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isContentHeavyPage ? 'rgba(10, 25, 47, 0.95)' : 'rgba(10, 25, 47, 0.8)',
          zIndex: 1,
        }}></div>
        <main style={{ flex: 1, position: 'relative', zIndex: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <motion.button
        className="back-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--accent, #64ffda)',
          color: 'var(--background, #0a192f)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(100, 255, 218, 0.3)',
          transition: 'all 0.3s ease',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 6px 20px rgba(100, 255, 218, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </div>
  );
}

export default App;
