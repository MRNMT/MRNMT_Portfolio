import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { motion } from 'framer-motion';

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
                A passionate full-stack engineer with experience in building scalable web applications and seamless user experiences. Skilled in JavaScript, React, Node.js, Python, and more, I enjoy crafting efficient and elegant solutions to complex problems. Transforming pixelated, bite-sized components into seamless digital UI/UX.
              </p>
              <p>
                Currently pursuing Computer Science at Tshwane University of Technology, I have gained hands-on experience through internships, hackathons, and personal projects. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Hackathon Wins</span>
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
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Full-Stack Developer Trainee & Intern</h4>
                  <span className="company">CodeTribe Academy / mLab</span>
                  <span className="period">2025 - 2026</span>
                </div>
                <p className="experience-description">Completing intensive full-stack development training at CodeTribe Academy, focusing on modern web technologies and software development best practices, followed by an internship at mLab starting July 1, 2025, contributing to innovative tech projects and gaining practical experience in software development until March 31, 2026.</p>
                <ul className="achievements">
                  <li>Developed responsive web applications using HTML, CSS, and JavaScript</li>
                  <li>Built full-stack applications with React, Node.js, and MongoDB</li>
                  <li>Implemented RESTful APIs and database integration</li>
                  <li>Created responsive designs with modern CSS frameworks</li>
                  <li>Collaborated on team projects using Git and Agile methodologies</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Second Place Winner</h4>
                  <span className="company">LVH 2025 Hackathon</span>
                  <span className="period">2025</span>
                </div>
                <p className="experience-description">Won second place in the LVH 2025 Hackathon (Limpopo Varsity Hackathon), which was my third hackathon participation, as a Computer Science student at Tshwane University of Technology. Demonstrated advanced skills in collaborative coding, problem-solving, and innovation under time constraints.</p>
                <ul className="achievements">
                  <li>Led a team to develop innovative solutions for given challenges</li>
                  <li>Applied advanced programming skills in a competitive hackathon environment</li>
                  <li>Demonstrated ability to work under pressure and meet deadlines</li>
                  <li>Learned from peers and mentors in a fast-paced setting</li>
                  <li>Achieved second place recognition for project excellence</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Hacker</h4>
                  <span className="company">Telkom 10x Hackathon Polokwane</span>
                  <span className="period">2025</span>
                </div>
                <p className="experience-description">Participated as a hacker in the Telkom 10x Hackathon held in Polokwane, showcasing skills in rapid prototyping and innovative problem-solving in a competitive environment.</p>
                <ul className="achievements">
                  <li>Developed innovative solutions for given challenges</li>
                  <li>Applied programming skills in a competitive hackathon environment</li>
                  <li>Demonstrated ability to work under pressure and meet deadlines</li>
                  <li>Collaborated with team members on project development</li>
                  <li>Learned from peers and mentors in a fast-paced setting</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Technical Support Specialist</h4>
                  <span className="company">NEC XON</span>
                  <span className="period">2022</span>
                </div>
                <p className="experience-description">Delivered comprehensive technical support for retail technology solutions at NEC XON, specializing in price tag installation and maintenance across enterprise environments. Gained hands-on experience with operational workflows and retail technology implementations.</p>
                <ul className="achievements">
                  <li>Led price tag installation projects with precision and efficiency across retail environments</li>
                  <li>Provided technical support for retail technology solutions and POS systems</li>
                  <li>Maintained operational excellence in fast-paced enterprise environments</li>
                  <li>Collaborated with cross-functional teams to ensure seamless technology deployments</li>
                  <li>Delivered comprehensive training and support to retail staff on new systems</li>
                </ul>
              </div>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Participant</h4>
                  <span className="company">TVH 22 Hackathon</span>
                  <span className="period">2022</span>
                </div>
                <p className="experience-description">Participated in the TVH 22 Hackathon as a first-year Computer Science student at Tshwane University of Technology, gaining valuable experience in collaborative coding and problem-solving under time constraints.</p>
                <ul className="achievements">
                  <li>Collaborated with a team to develop innovative solutions for given challenges</li>
                  <li>Applied programming skills in a competitive hackathon environment</li>
                  <li>Demonstrated ability to work under pressure and meet deadlines</li>
                  <li>Learned from peers and mentors in a fast-paced setting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services-section">
            <h3>What I Do</h3>
            <p className="services-intro">
              I offer a comprehensive range of web development and design services to help bring your ideas to life. Each service is tailored to meet your specific needs and goals.
            </p>

            <div className="services-grid">
              <div
                className={`service-card ${activeService === 1 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 1 ? null : 1)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <h4 className="service-title">Full-Stack Web Development</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 1 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Building robust, scalable web applications using modern technologies like React, Node.js, and cloud platforms.</p>
                {activeService === 1 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>Custom web application development</li>
                        <li>API design and implementation</li>
                        <li>Database architecture and optimization</li>
                        <li>Performance optimization and SEO</li>
                        <li>Responsive design for all devices</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Express</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">PostgreSQL</span>
                        <span className="tech-tag">AWS</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`service-card ${activeService === 2 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 2 ? null : 2)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-palette"></i>
                  </div>
                  <h4 className="service-title">UI/UX Design</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 2 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Creating intuitive, beautiful user interfaces that provide exceptional user experiences and drive engagement.</p>
                {activeService === 2 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>User research and analysis</li>
                        <li>Wireframing and prototyping</li>
                        <li>Visual design and branding</li>
                        <li>Usability testing and iteration</li>
                        <li>Design system creation</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">Figma</span>
                        <span className="tech-tag">Adobe XD</span>
                        <span className="tech-tag">Sketch</span>
                        <span className="tech-tag">InVision</span>
                        <span className="tech-tag">Principle</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`service-card ${activeService === 3 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 3 ? null : 3)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-lightbulb"></i>
                  </div>
                  <h4 className="service-title">Technical Consulting</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 3 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Providing expert guidance on technology choices, architecture decisions, and development best practices.</p>
                {activeService === 3 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>Technology stack recommendations</li>
                        <li>Code review and optimization</li>
                        <li>Architecture planning and design</li>
                        <li>Performance auditing</li>
                        <li>Team training and mentoring</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">DevOps</span>
                        <span className="tech-tag">Cloud Architecture</span>
                        <span className="tech-tag">Agile</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`service-card ${activeService === 4 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 4 ? null : 4)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-tasks"></i>
                  </div>
                  <h4 className="service-title">Project Management</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 4 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Leading development projects from concept to deployment with efficient planning and execution.</p>
                {activeService === 4 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>Project planning and scoping</li>
                        <li>Timeline and milestone management</li>
                        <li>Risk assessment and mitigation</li>
                        <li>Stakeholder communication</li>
                        <li>Quality assurance and testing</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">Jira</span>
                        <span className="tech-tag">Trello</span>
                        <span className="tech-tag">Asana</span>
                        <span className="tech-tag">Slack</span>
                        <span className="tech-tag">Git</span>
                        <span className="tech-tag">CI/CD</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`service-card ${activeService === 5 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 5 ? null : 5)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-mobile-alt"></i>
                  </div>
                  <h4 className="service-title">Mobile App Development</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 5 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Developing native and cross-platform mobile applications for iOS and Android devices.</p>
                {activeService === 5 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>Native iOS/Android development</li>
                        <li>Cross-platform solutions</li>
                        <li>App store optimization</li>
                        <li>Push notifications and analytics</li>
                        <li>Offline functionality</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">React Native</span>
                        <span className="tech-tag">Flutter</span>
                        <span className="tech-tag">Swift</span>
                        <span className="tech-tag">Kotlin</span>
                        <span className="tech-tag">Firebase</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`service-card ${activeService === 6 ? 'active' : ''}`}
                onClick={() => setActiveService(activeService === 6 ? null : 6)}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                  <h4 className="service-title">E-commerce Solutions</h4>
                  <div className="service-toggle">
                    <i className={`fa fa-chevron-${activeService === 6 ? 'up' : 'down'}`}></i>
                  </div>
                </div>
                <p className="service-description">Building secure, scalable e-commerce platforms with payment integration and inventory management.</p>
                {activeService === 6 && (
                  <div className="service-details">
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        <li>Custom e-commerce platforms</li>
                        <li>Payment gateway integration</li>
                        <li>Inventory and order management</li>
                        <li>Customer portal development</li>
                        <li>Analytics and reporting</li>
                      </ul>
                    </div>
                    <div className="service-tech">
                      <h5>Technologies:</h5>
                      <div className="tech-tags">
                        <span className="tech-tag">Shopify</span>
                        <span className="tech-tag">WooCommerce</span>
                        <span className="tech-tag">Stripe</span>
                        <span className="tech-tag">PayPal</span>
                        <span className="tech-tag">BigCommerce</span>
                      </div>
                    </div>
                    <div className="service-cta">
                      <button className="btn btn-primary">Get Started</button>
                      <button className="btn btn-outline">Learn More</button>
                    </div>
                  </div>
                )}
              </div>
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
