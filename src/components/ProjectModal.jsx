import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="modal-content"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'var(--card-bg, #1a1a1a)',
              color: 'var(--text-primary, #fff)',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              zIndex: 1001,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0, color: 'var(--accent, #00d4ff)' }}>{project.title}</h2>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  color: 'var(--text-primary, #fff)',
                }}
              >
                ×
              </button>
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              />
            )}
            <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>{project.description}</p>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent, #00d4ff)' }}>Tech Stack:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack?.map((tech, index) => (
                  <li
                    key={index}
                    style={{
                      background: 'var(--accent, #00d4ff)',
                      color: '#000',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--accent, #00d4ff)',
                    color: '#000',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--bg-secondary, #2a2a2a)',
                    color: 'var(--text-primary, #fff)',
                    padding: '0.5rem 1rem',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
