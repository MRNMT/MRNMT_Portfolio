import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Experience = () => {
  const sectionRef = useRef();
  const [countersVisible, setCountersVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      setCountersVisible(true);
    }
  });

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [countersVisible, end, duration]);

    return <span>{count}</span>;
  };

  const experiences = [
    {
      company: 'CodeTribe Academy / mLab',
      role: 'Full-Stack Developer Trainee & Intern',
      year: '2025 - 2026',
      type: 'current',
      description: 'Completing intensive full-stack development training at CodeTribe Academy, focusing on modern web technologies and software development best practices, followed by an internship at mLab starting July 1, 2025.',
      responsibilities: [
        'Developing responsive web applications using HTML, CSS, and JavaScript',
        'Building full-stack applications with React, Node.js, and MongoDB',
        'Implementing RESTful APIs and database integration',
        'Collaborating on team projects using Git and Agile methodologies',
        'Learning industry best practices and modern development tools'
      ],
      skills: [
        'React.js, Node.js, Express.js',
        'MongoDB, Firebase, RESTful APIs',
        'HTML5, CSS3, JavaScript (ES6+)',
        'Git, GitHub, Agile Development',
        'Responsive Design, UI/UX Principles'
      ],
      achievements: [
        'Built multiple full-stack applications',
        'Contributed to team projects and code reviews',
        'Gained hands-on experience with modern tech stack'
      ]
    },
    {
      company: 'LVH 2025 Hackathon',
      role: 'Second Place Winner',
      year: '2025',
      type: 'achievement',
      description: 'Won second place in the LVH 2025 Hackathon (Limpopo Varsity Hackathon), demonstrating advanced skills in collaborative coding, problem-solving, and innovation under time constraints.',
      responsibilities: [
        'Led a team to develop innovative solutions for given challenges',
        'Applied advanced programming skills in a competitive environment',
        'Demonstrated ability to work under pressure and meet deadlines',
        'Collaborated effectively with team members',
        'Presented project to judges and audience'
      ],
      skills: [
        'Problem-solving and critical thinking',
        'Team leadership and communication',
        'Rapid prototyping and innovation',
        'Programming languages (JavaScript, Python)',
        'Project presentation and pitching'
      ],
      achievements: [
        'Second place winner out of multiple teams',
        'Successfully delivered project within 48-hour timeframe',
        'Demonstrated strong technical and soft skills'
      ]
    },
    {
      company: 'Telkom 10x Hackathon Polokwane',
      role: 'Hacker',
      year: '2025',
      type: 'experience',
      description: 'Participated as a hacker in the Telkom 10x Hackathon held in Polokwane, showcasing skills in rapid prototyping and innovative problem-solving in a competitive environment.',
      responsibilities: [
        'Developed innovative solutions for given challenges',
        'Applied programming skills in a competitive hackathon environment',
        'Collaborated with team members on project development',
        'Demonstrated ability to work under pressure and meet deadlines',
        'Learned from peers and mentors in a fast-paced setting'
      ],
      skills: [
        'Problem-solving and critical thinking',
        'Team collaboration and communication',
        'Programming languages (JavaScript, Python)',
        'Time management and project planning',
        'Innovation and rapid prototyping'
      ],
      achievements: [
        'Successfully completed hackathon project',
        'Gained experience in competitive programming environment',
        'Networked with industry professionals'
      ]
    },
    {
      company: 'NEC XON',
      role: 'Technical Support Specialist',
      year: '2022',
      type: 'experience',
      description: 'Delivered comprehensive technical support for retail technology solutions at NEC XON, specializing in price tag installation and maintenance across enterprise environments.',
      responsibilities: [
        'Led price tag installation projects with precision and efficiency',
        'Provided technical support for retail technology solutions and POS systems',
        'Maintained operational excellence in fast-paced enterprise environments',
        'Collaborated with cross-functional teams to ensure seamless technology deployments',
        'Delivered comprehensive training and support to retail staff'
      ],
      skills: [
        'Retail technology systems and POS solutions',
        'Hardware installation and configuration',
        'Technical troubleshooting and support',
        'Customer service and training delivery',
        'Project coordination and team collaboration'
      ],
      achievements: [
        'Successfully completed multiple installation projects',
        'Received positive feedback from clients',
        'Developed strong technical support skills'
      ],
      references: [
        { name: 'Joel Phatlane', contact: '078 389 3087' },
        { name: 'Nico Botha', contact: '072 255 3393' }
      ]
    },
    {
      company: 'TVH 22 Hackathon',
      role: 'Participant',
      year: '2022',
      type: 'experience',
      description: 'Participated in the TVH 22 Hackathon as a first-year Computer Science student at Tshwane University of Technology, gaining valuable experience in collaborative coding and problem-solving.',
      responsibilities: [
        'Collaborated with a team to develop innovative solutions',
        'Applied programming skills in a competitive hackathon environment',
        'Demonstrated ability to work under pressure and meet deadlines',
        'Learned from peers and mentors in a fast-paced setting',
        'Contributed to team project development'
      ],
      skills: [
        'Problem-solving and critical thinking',
        'Team collaboration and communication',
        'Programming languages (JavaScript, Python)',
        'Time management and project planning',
        'Basic software development practices'
      ],
      achievements: [
        'Gained first hackathon experience',
        'Learned collaborative development practices',
        'Developed foundational programming skills'
      ]
    }
  ];

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'RESTful APIs', level: 80 }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Firebase', level: 60 },
        { name: 'Agile/Scrum', level: 75 }
      ]
    }
  ];

  const featuredProjects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and modern CSS.',
      tech: ['React', 'CSS3', 'Framer Motion'],
      link: '/projects'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '/projects'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      tech: ['React', 'Firebase', 'Material-UI'],
      link: '/projects'
    }
  ];

  return (
    <main>
      <section ref={sectionRef} className="experience-section" id="experience">
        <div className="experience-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-description">
            A timeline of my professional growth, achievements, and continuous learning in the world of technology.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="stats-overview">
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={countersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="stat-icon">
                <i className="fa fa-calendar"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  <AnimatedCounter end={3} />
                  <span>+</span>
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={countersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-icon">
                <i className="fa fa-project-diagram"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  <AnimatedCounter end={15} />
                  <span>+</span>
                </div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={countersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="stat-icon">
                <i className="fa fa-trophy"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  <AnimatedCounter end={3} />
                </div>
                <div className="stat-label">Hackathons Participated</div>
              </div>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={countersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stat-icon">
                <i className="fa fa-medal"></i>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  <AnimatedCounter end={1} />
                </div>
                <div className="stat-label">Hackathon Win</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-dot"></div>
                  <div className="timeline-meta">
                    <h3 className="timeline-company">{exp.company}</h3>
                    <span className="timeline-role">{exp.role}</span>
                    <span className="timeline-year">{exp.year}</span>
                  </div>
                </div>

                <div className="timeline-body">
                  <p className="timeline-description">{exp.description}</p>

                  <div className="timeline-details">
                    <div className="detail-section">
                      <h4>Key Responsibilities</h4>
                      <ul>
                        {exp.responsibilities.slice(0, expandedItems.has(index) ? exp.responsibilities.length : 2).map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                      {exp.responsibilities.length > 2 && (
                        <button
                          className="expand-btn"
                          onClick={() => toggleExpanded(index)}
                        >
                          {expandedItems.has(index) ? 'Show Less' : `Show ${exp.responsibilities.length - 2} More`}
                        </button>
                      )}
                    </div>

                    <div className="detail-section">
                      <h4>Skills Applied</h4>
                      <div className="skill-tags">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    {exp.achievements && (
                      <div className="detail-section">
                        <h4>Achievements</h4>
                        <ul>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.references && (
                      <div className="detail-section">
                        <h4>References</h4>
                        <div className="reference-list">
                          {exp.references.map((ref, i) => (
                            <div key={i} className="reference-item">
                              <span className="ref-name">{ref.name}</span>
                              <span className="ref-contact">{ref.contact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="skills-overview">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{category.category}</h4>
                <div className="skill-bars">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-bar">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3>Featured Projects</h3>
          <p className="projects-intro">
            Here are some of the projects I've worked on. Check out my full portfolio for more details.
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <Link to={project.link} className="project-link">
                    View Project <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
