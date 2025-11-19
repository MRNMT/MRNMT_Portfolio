import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const Privacy = () => {
  const sectionRef = useRef();

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  return (
    <main>
      <section ref={sectionRef} className="section">
        <h1>Privacy Policy</h1>
        <p>This site complies with data protection laws (POPIA). Your personal data is collected lawfully and transparently.</p>
        <p>We only collect necessary information (e.g. name, email) and never share your data without consent.</p>
        <p>Your rights include access, correction, objection, and deletion of your data upon request.</p>
        <p>Data may be stored temporarily and securely. We do not transfer data outside South Africa unless permitted by law.</p>
        <p>For more details, refer to our Data Protection Impact Assessment (DPIA).</p>
      </section>
      <footer className="footer">
        <a href="/privacy">Privacy Policy</a> |
        <a href="/contact">Contact Us</a>
        <p>&copy; 2025 Nelson Mafape Tshwarelo Madileng (MRNMT). All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Privacy;
