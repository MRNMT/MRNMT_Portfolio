import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setSubmitting, resetForm } from '../store/contactSlice';
import { useIntersectionObserver } from '../utils/animations';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  const { formData, isSubmitting } = useSelector((state) => state.contact);

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSubmitting(true));

    // Replace with your EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        alert('Thank you for your message! I will get back to you soon.');
        dispatch(resetForm());
        dispatch(setSubmitting(false));
      }, (error) => {
        alert('Failed to send the message. Please try again later.');
        dispatch(setSubmitting(false));
      });
  };

  return (
    <main>
      <section ref={sectionRef} className="section contact-section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>+27 764 694 671</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>nelsonmadileng57@gmail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-whatsapp"></i>
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
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
