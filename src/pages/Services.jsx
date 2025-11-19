import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const Services = () => {
  const sectionRef = useRef();
  const [activeService, setActiveService] = useState(null);

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  const services = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      icon: 'fa-code',
      description: 'Building robust, scalable web applications using modern technologies like React, Node.js, and cloud platforms.',
      features: [
        'Custom web application development',
        'API design and implementation',
        'Database architecture and optimization',
        'Performance optimization and SEO',
        'Responsive design for all devices'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'],
      pricing: 'Starting from $2,500'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: 'fa-palette',
      description: 'Creating intuitive, beautiful user interfaces that provide exceptional user experiences and drive engagement.',
      features: [
        'User research and analysis',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing and iteration',
        'Design system creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      pricing: 'Starting from $1,500'
    },
    {
      id: 3,
      title: 'Technical Consulting',
      icon: 'fa-lightbulb',
      description: 'Providing expert guidance on technology choices, architecture decisions, and development best practices.',
      features: [
        'Technology stack recommendations',
        'Code review and optimization',
        'Architecture planning and design',
        'Performance auditing',
        'Team training and mentoring'
      ],
      technologies: ['JavaScript', 'Python', 'DevOps', 'Cloud Architecture', 'Agile'],
      pricing: 'Starting from $150/hour'
    },
    {
      id: 4,
      title: 'Project Management',
      icon: 'fa-tasks',
      description: 'Leading development projects from concept to deployment with efficient planning and execution.',
      features: [
        'Project planning and scoping',
        'Timeline and milestone management',
        'Risk assessment and mitigation',
        'Stakeholder communication',
        'Quality assurance and testing'
      ],
      technologies: ['Jira', 'Trello', 'Asana', 'Slack', 'Git', 'CI/CD'],
      pricing: 'Starting from $100/hour'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      icon: 'fa-mobile-alt',
      description: 'Developing native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'Native iOS/Android development',
        'Cross-platform solutions',
        'App store optimization',
        'Push notifications and analytics',
        'Offline functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting from $3,500'
    },
    {
      id: 6,
      title: 'E-commerce Solutions',
      icon: 'fa-shopping-cart',
      description: 'Building secure, scalable e-commerce platforms with payment integration and inventory management.',
      features: [
        'Custom e-commerce platforms',
        'Payment gateway integration',
        'Inventory and order management',
        'Customer portal development',
        'Analytics and reporting'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'BigCommerce'],
      pricing: 'Starting from $3,000'
    }
  ];

  return (
    <main>
      <section ref={sectionRef} className="section services-section" id="services">
        <div className="services-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-description">
            I offer a comprehensive range of web development and design services to help bring your ideas to life.
            Each service is tailored to meet your specific needs and goals.
          </p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="service-header">
                <div className="service-icon">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-toggle">
                  <i className={`fa fa-chevron-${activeService === service.id ? 'up' : 'down'}`}></i>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              {activeService === service.id && (
                <div className="service-details">
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-tech">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>



                  <div className="service-cta">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline">Learn More</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss your requirements and create something amazing together.</p>
          <button className="btn btn-primary btn-large">Contact Me</button>
        </div>
      </section>
    </main>
  );
};

export default Services;
