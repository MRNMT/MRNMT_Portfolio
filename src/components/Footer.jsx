import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer className="footer" style={{
      background: 'var(--nav-bg, #112240)',
      color: 'var(--text-secondary, #8892b0)',
      padding: '2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border-color, #333)',
      marginTop: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div className="logo" style={{
            backgroundColor: 'var(--accent, #64ffda)',
            color: 'var(--background, #0a192f)',
            fontWeight: '700',
            fontSize: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'monospace',
          }}>
            MRNMT
          </div>
          <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/MRNMT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.5rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nelson-madileng-4b64a928b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.5rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/Nelson08830316" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.5rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <nav style={{ marginBottom: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <li><Link to="/" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>About</Link></li>
            <li><Link to="/skills" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Skills</Link></li>
            <li><Link to="/experience" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Experience</Link></li>
            <li><Link to="/projects" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Projects</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Contact</Link></li>
          </ul>
        </nav>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>&copy; 2025 Nelson Mafape Tshwarelo Madileng (MRNMT). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
