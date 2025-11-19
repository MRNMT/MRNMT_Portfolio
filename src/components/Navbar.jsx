import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMobileMenu}>MRNMT</Link>
      </div>
      <button
        className="hamburger"
        onClick={toggleMobileMenu}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          flexDirection: 'column',
          cursor: 'pointer',
          padding: '0.5rem',
          '@media (max-width: 768px)': { display: 'flex' },
        }}
      >
        <span style={{ width: '25px', height: '3px', background: 'var(--text-primary, #fff)', margin: '3px 0', transition: '0.3s' }}></span>
        <span style={{ width: '25px', height: '3px', background: 'var(--text-primary, #fff)', margin: '3px 0', transition: '0.3s' }}></span>
        <span style={{ width: '25px', height: '3px', background: 'var(--text-primary, #fff)', margin: '3px 0', transition: '0.3s' }}></span>
      </button>
      <nav className="nav-desktop">
        <ul className="nav-links">
          <li><NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to="/skills" onClick={closeMobileMenu}>Skills</NavLink></li>
          <li><NavLink to="/experience" onClick={closeMobileMenu}>Experience</NavLink></li>

          <li><NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMobileMenu}>Blog</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-primary, #0a0a0a)',
              borderTop: '1px solid var(--border-color, #333)',
              zIndex: 999,
              '@media (min-width: 769px)': { display: 'none' },
            }}
          >
            <ul className="nav-links-mobile" style={{ listStyle: 'none', padding: '1rem 0', margin: 0 }}>
              <li><NavLink to="/" end onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>About</NavLink></li>
              <li><NavLink to="/skills" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Skills</NavLink></li>
              <li><NavLink to="/experience" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Experience</NavLink></li>

              <li><NavLink to="/projects" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Projects</NavLink></li>
              <li><NavLink to="/blog" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Blog</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMobileMenu} style={{ display: 'block', padding: '1rem', color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>Contact</NavLink></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="navbar-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div className="social-links" style={{ display: 'flex', gap: '0.5rem' }}>
          <a href="https://github.com/MRNMT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-primary, #fff)', fontSize: '1.2rem' }}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/nelson-madileng-4b64a928b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-primary, #fff)', fontSize: '1.2rem' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Nelson08830316" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: 'var(--text-primary, #fff)', fontSize: '1.2rem' }}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <button onClick={() => dispatch(toggleTheme())} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Let's Talk</Link>
      </div>
    </header>
  );
};

export default Navbar;
