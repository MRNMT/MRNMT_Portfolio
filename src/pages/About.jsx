import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const About = () => {
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
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS']
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
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
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
      technologies: ['JavaScript', 'Python', 'DevOps', 'Cloud Architecture', 'Agile']
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
      technologies: ['Jira', 'Trello', 'Asana', 'Slack', 'Git', 'CI/CD']
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
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
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
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'BigCommerce']
    }
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for scalable architecture.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced development time by 30%',
        'Implemented automated testing'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'WebCraft Studios',
      period: '2019 - 2020',
      description: 'Focused on front-end development and learning modern web technologies.',
      achievements: [
        'Built responsive web applications',
        'Collaborated on team projects',
        'Learned React and Node.js'
      ]
    }
  ];

  return (
    <main>
      <section ref={sectionRef} className="section about-section" id="about">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate full-stack engineer with expertise in building scalable web applications and creating exceptional user experiences.
          </p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I am a passionate full-stack engineer with experience in building scalable web applications and seamless user experiences.
                Skilled in JavaScript, React, Node.js, Python, and more, I enjoy crafting efficient and elegant solutions to complex problems.
              </p>
              <p>
                With over 4 years of experience in web development, I have worked on diverse projects ranging from small business websites
                to large-scale enterprise applications. I believe in writing clean, maintainable code and staying up-to-date with the latest
                technologies and best practices.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                <i className="fa fa-user-circle"></i>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h3>Experience</h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="services-section">
            <h3>What I Do</h3>
            <p className="services-intro">
              I offer a comprehensive range of web development and design services to help bring your ideas to life.
              Each service is tailored to meet your specific needs and goals.
            </p>

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
                    <h4 className="service-title">{service.title}</h4>
                    <div className="service-toggle">
                      <i className={`fa fa-chevron-${activeService === service.id ? 'up' : 'down'}`}></i>
                    </div>
                  </div>

                  <p className="service-description">{service.description}</p>

                  {activeService === service.id && (
                    <div className="service-details">
                      <div className="service-features">
                        <h5>What's Included:</h5>
                        <ul>
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-tech">
                        <h5>Technologies:</h5>
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
          </div>
        </div>

        <div className="about-cta">
          <a href="/resume.pdf" download className="btn btn-primary btn-large">Download Resume</a>
          <button className="btn btn-outline btn-large">Get In Touch</button>
        </div>
      </section>
    </main>
  );
};

export default About;
