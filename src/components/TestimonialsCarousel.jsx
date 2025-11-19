import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Developer at TechCorp',
      message: 'Nelson\'s work on our project was outstanding. His full-stack skills and attention to detail made the difference.',
      image: 'https://via.placeholder.com/80x80?text=JD',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager at Innovate Inc.',
      message: 'Exceptional collaborator with strong problem-solving abilities. Highly recommend for any development team.',
      image: 'https://via.placeholder.com/80x80?text=JS',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'CTO at StartupX',
      message: 'Nelson delivered high-quality code on time and exceeded expectations. A true professional.',
      image: 'https://via.placeholder.com/80x80?text=MJ',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoSlide(false);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoSlide]);

  return (
    <div className="testimonials-carousel" style={{
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      overflow: 'hidden',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="testimonial-slide"
          style={{
            padding: '2rem',
            background: 'var(--card-bg, #1a1a1a)',
            textAlign: 'center',
            color: 'var(--text-primary, #fff)',
          }}
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              marginBottom: '1rem',
              border: '3px solid var(--accent, #64ffda)',
            }}
          />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1rem', fontStyle: 'italic' }}>
            "{testimonials[currentIndex].message}"
          </p>
          <h4 style={{ color: 'var(--accent, #64ffda)', marginBottom: '0.25rem' }}>
            {testimonials[currentIndex].name}
          </h4>
          <p style={{ color: 'var(--text-secondary, #8892b0)', margin: 0, fontSize: '0.9rem' }}>
            {testimonials[currentIndex].role}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="carousel-arrow prev"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'var(--text-primary, #fff)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          zIndex: 10,
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.5)'}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="carousel-arrow next"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'var(--text-primary, #fff)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          zIndex: 10,
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.8)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.5)'}
      >
        ›
      </button>

      {/* Navigation Dots */}
      <div className="carousel-dots" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1rem',
      }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: currentIndex === index ? 'var(--accent, #64ffda)' : 'var(--text-secondary, #8892b0)',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
