import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { useForm, ValidationError } from '@formspree/react';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const sectionRef = useRef();
  const [state, handleSubmit] = useForm("mqarbjab");

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  if (state.succeeded) {
    return (
      <main>
        <section ref={sectionRef} className="section contact-section" id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">Thanks for your message! I'll respond as soon as possible.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section ref={sectionRef} className="section contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
              </div>
              <h3>Phone</h3>
              <p>+27 764 694 671</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
              </div>
              <h3>Email</h3>
              <p>nelsonmadileng57@gmail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <FaWhatsapp style={{ fontSize: '1.5rem', color: 'var(--accent)' }} />
              </div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/message/2YIUYPO7FQO2F1" target="_blank" rel="noopener noreferrer">
                  Message me
                </a>
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
                <ValidationError 
                  prefix="Full Name" 
                  field="fullName"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" className="btn btn-primary contact-submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
