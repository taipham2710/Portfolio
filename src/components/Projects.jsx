import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const Projects = ({ onContactCtaClick }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      titleKey: 'projects.iotProjectTitle',
      descriptionKey: 'projects.iotProjectDesc',
      image: '/Portfolio/devops-iot.jpg',
      technologies: ['Git', 'Github', 'Github Actions', 'K3s', 'Docker', 'Loki', 'EMQX', 'Prometheus', 'Grafana', 'Ansible', 'NodeJs', 'React', 'FastAPI'],
      github: 'https://github.com/taipham2710/Agent-RasPi',
      live: null,
      featured: true
    },
    {
      id: 2,
      titleKey: 'projects.openNebulaProjectTitle',
      descriptionKey: 'projects.openNebulaProjectDesc',
      image: '/Portfolio/opennebula.jpg',
      technologies: ['OpenNebula', 'RTMP', 'Ansible', 'Ubuntu'],
      github: 'https://github.com/taipham2710/one-deploy',
      live: null,
      featured: false
    }
  ]

  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="section-title">{t('projects.title')}</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="featured-badge">{t('projects.featured')}</div>}
            
            <div className="project-image">
              <img src={project.image} alt={t(project.titleKey)} />
              <div className="project-overlay">
                <div className="project-links">
                  <button 
                    className="project-link view-details"
                    onClick={() => {
                      setSelectedProject(project)
                      setIsModalOpen(true)
                    }}
                    title={t('projects.viewDetails')}
                  >
                    <FaEye />
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{t(project.titleKey)}</h3>
              <p className="project-description">{t(project.descriptionKey)}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <h2>{t('projects.ctaTitle')}</h2>
        <p>{t('projects.ctaDesc')}</p>
        <button className="btn btn-primary" onClick={onContactCtaClick}>{t('projects.ctaBtn')}</button>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProject(null)
        }}
      />
    </div>
  )
}

export default Projects