import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { motion } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef();

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  const skills = [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'React / Next.js', level: 85 },
    { name: 'Node.js / Express', level: 80 },
    { name: 'Python / Django', level: 75 },
    { name: 'SQL / NoSQL Databases', level: 85 },
  ];

  return (
    <main>
      <section ref={sectionRef} className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-primary, #fff)' }}>{skill.name}</span>
                <span style={{ color: 'var(--accent, #00d4ff)' }}>{skill.level}%</span>
              </div>
              <div className="skill-bar" style={{ background: 'var(--bg-secondary, #2a2a2a)', height: '10px', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: 'var(--accent)',
                    borderRadius: '5px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
