import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Hello, I'm Nelson Mafape Tshwarelo Madileng (MRNMT)</p>
        <h1 className="hero-title">Software Developer</h1>
        <p className="hero-description">
          Transforming pixelated, bite-sized components into seamless digital UI/UX.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          <div className="social-icons">
            <a href="https://github.com/MRNMT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/nelson-madileng-4b64a928b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z"/>
              </svg>
            </a>
            <a href="https://wa.me/message/2YIUYPO7FQO2F1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.1 1.6 5.85L0 24l6.3-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A9.5 9.5 0 012.5 12c0-5.2 4.3-9.5 9.5-9.5 2.5 0 4.8 1 6.5 2.8a9.3 9.3 0 012.8 6.7c0 5.2-4.3 9.5-9.5 9.5zM12 17.5c-.8 0-1.5-.2-2.1-.6l-.3-.2-2.1.6.2-2-.2-.3c-.4-.6-.6-1.3-.6-2.1 0-2.8 2.3-5 5-5s5 2.2 5 5-2.3 5-5 5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.webp" alt="Nelson Mafape Tshwarelo Madileng (MRNMT)" />
      </div>
    </section>
  );
};

export default Hero;
