import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const Projects = () => {
  const sectionRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  const projects = [
    {
      id: 1,
      title: 'Task Tracker',
      description: 'A simple and efficient task tracking app for managing your to-dos with add, edit, delete, and mark complete features.',
      image: 'https://via.placeholder.com/400x250?text=Task+Tracker',
      techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
      liveLink: 'https://task-4-4-starter-tan.vercel.app/',
      githubLink: 'https://github.com/MRNMT/task-tracker',
    },
    {
      id: 2,
      title: 'Converter Hub',
      description: 'Multi-purpose number converter supporting binary, decimal, hexadecimal, and more conversions with a clean UI.',
      image: 'https://via.placeholder.com/400x250?text=Converter+Hub',
      techStack: ['React', 'Vite', 'JavaScript'],
      liveLink: 'https://converter-hub-one.vercel.app/',
      githubLink: 'https://github.com/MRNMT/converter-hub',
    },
    {
      id: 3,
      title: 'Workshop Display',
      description: 'Dynamic display and management of workshop objects with filtering, searching, and interactive features.',
      image: 'https://via.placeholder.com/400x250?text=Workshop+Display',
      techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
      liveLink: 'https://workshop-object-display-lac.vercel.app/',
      githubLink: 'https://github.com/MRNMT/workshop-display',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        ref={sectionRef}
        className="section"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                cursor: 'pointer',
                background: 'var(--card-bg)',
                padding: '1.5rem',
                borderRadius: '10px',
                marginBottom: '1rem',
                border: '1px solid var(--border-color)',
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                  }}
                  loading="lazy"
                />
              )}
              <h3 style={{ color: 'var(--accent, #00d4ff)', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary, #ccc)', marginBottom: '1rem', lineHeight: 1.5 }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--text-primary, #fff)', margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Tech Stack:</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.techStack.map((tech, index) => (
                    <li key={index}>
                      <span className="btn btn-sm btn-primary" style={{ padding: '0.25rem 0.6rem', borderRadius: '12px' }}>
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1rem' }}
                  >
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1rem' }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      </motion.section>
    </motion.main>
  );
};

export default Projects;
