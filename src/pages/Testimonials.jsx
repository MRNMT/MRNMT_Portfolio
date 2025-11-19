import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const Testimonials = () => {
  const sectionRef = useRef();

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  return (
    <main>
      <section ref={sectionRef} className="section" id="testimonials">
        <h2>Testimonials</h2>
        <p>What clients and colleagues say about working with me.</p>
        <TestimonialsCarousel />
      </section>
    </main>
  );
};

export default Testimonials;
