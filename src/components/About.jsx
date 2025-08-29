import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCloud, FaCogs, FaDatabase, FaTools } from 'react-icons/fa'

const About = () => {
  const { t } = useTranslation()
  const skills = [
    { name: 'Automation & CI/CD', icon: FaCogs, items: ['GitHub Actions', 'Ansible', 'Jenkins', 'Terraform'] },
    { name: 'Container & Orchestration', icon: FaTools, items: ['Docker', 'K3s/Kubernetes', 'Docker Compose'] },
    { name: 'Cloud & Infrastructure', icon: FaCloud, items: ['AWS', 'OpenNebula', 'Vercel', 'Netlify'] },
    { name: 'Monitoring & Logging', icon: FaDatabase, items: ['Prometheus', 'Grafana', 'Loki', 'EMQX'] }
  ]

  return (
    <div className="about">
      <div className="about-header">
        <h1 className="section-title">{t('about.title')}</h1>
        <p className="section-subtitle">{t('about.subtitle')}</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="about-section">
            <h2>{t('about.intro')}</h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>

          <div className="about-section">
            <h2>{t('about.coreValues')}</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>{t('about.v1Title')}</h3>
                <p>{t('about.v1Desc')}</p>
              </div>
              <div className="value-item">
                <h3>{t('about.v2Title')}</h3>
                <p>{t('about.v2Desc')}</p>
              </div>
              <div className="value-item">
                <h3>{t('about.v3Title')}</h3>
                <p>{t('about.v3Desc')}</p>
              </div>
              <div className="value-item">
                <h3>{t('about.v4Title')}</h3>
                <p>{t('about.v4Desc')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>{t('about.skills')}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2>{t('about.highlightProjects')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Hệ thống DevOps cho IoT 3 tầng</h3>
                <p className="period">17/2/2025 - 7/6/2025</p>
                <p>Tự động hóa build, cập nhật và giám sát cho ESP32 và Raspberry Pi, tích hợp container hóa và monitoring tập trung.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Hạ tầng ảo hóa cho livestream nội bộ</h3>
                <p className="period">7/3/2025 - 26/5/2025</p>
                <p>Triển khai OpenNebula và RTMP streaming trên mạng nội bộ, kiểm thử khả năng phân phối tài nguyên và tính sẵn sàng cao.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About