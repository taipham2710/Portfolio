import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const Projects = ({ onContactCtaClick }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'DevOps cho tái cấu hình IoT',
      description: 'Triển khai tự động hóa build, cập nhật và giám sát cho thiết bị IoT (ESP32, Raspberry Pi) với pipeline CI/CD, container hóa, và giám sát real-time.',
      image: '/Portfolio/devops-iot.jpg',
      technologies: ['Git', 'Github', 'Github Actions', 'K3s', 'Docker', 'Loki', 'EMQX', 'Prometheus', 'Grafana', 'Ansible', 'NodeJs', 'React', 'FastAPI'],
      github: 'https://github.com/taipham2710/Agent-RasPi',
      live: null,
      featured: true
    },
    {
      id: 2,
      title: 'Triển khai hạ tầng ảo hoá và dịch vụ streaming với OpenNebula',
      description: 'Triển khai môi trường ảo hóa và phân phối luồng media RTMP đa node trong mạng nội bộ, đảm bảo hiệu suất và khả năng mở rộng.',
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
        <h1 className="section-title">Dự án của tôi</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="featured-badge">Featured</div>}
            
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <button 
                    className="project-link view-details"
                    onClick={() => {
                      setSelectedProject(project)
                      setIsModalOpen(true)
                    }}
                    title="Xem chi tiết"
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
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
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
        <h2>Bạn có dự án muốn thực hiện?</h2>
        <p>Hãy liên hệ với tôi để thảo luận về ý tưởng của bạn</p>
        <button className="btn btn-primary" onClick={onContactCtaClick}>Liên hệ ngay</button>
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