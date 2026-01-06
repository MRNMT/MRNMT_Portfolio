import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" style={{
      background: 'var(--nav-bg, #112240)',
      color: 'var(--text-secondary, #8892b0)',
      padding: '3rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border-color, #333)',
      marginTop: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div className="logo" style={{ fontSize: '1.5rem' }}>
            MR NMT
          </div>
          <div className="social-links" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/MRNMT" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.8rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary, #8892b0)'}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/nelson-madileng-4b64a928b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.8rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary, #8892b0)'}>
              <FaLinkedin />
            </a>
            <a href="https://x.com/Nelson08830316" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.8rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary, #8892b0)'}>
              <FaTwitter />
            </a>
            <a href="https://wa.me/message/2YIUYPO7FQO2F1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'var(--text-secondary, #8892b0)', fontSize: '1.8rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary, #8892b0)'}>
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <nav style={{ marginBottom: '2rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <li><Link to="/" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>About</Link></li>
            <li><Link to="/skills" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Skills</Link></li>
            <li><Link to="/experience" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Experience</Link></li>
            <li><Link to="/projects" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Projects</Link></li>
            <li><Link to="/contact" style={{ color: 'var(--text-secondary, #8892b0)', textDecoration: 'none', transition: 'color 0.3s ease', fontWeight: 500 }} onMouseEnter={(e) => e.target.style.color = 'var(--accent, #64ffda)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary, #8892b0)'}>Contact</Link></li>
          </ul>
        </nav>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>&copy; {new Date().getFullYear()} Nelson Mafape Tshwarelo Madileng (MR NMT). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
