import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaCertificate, FaExternalLinkAlt, FaStar, FaTrophy, FaRocket, FaCloud, FaCode, FaShieldAlt } from 'react-icons/fa'

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { t } = useTranslation()

  const certificates = [
    {
      id: 'coursera-devops-prereq',
      title: 'DevOps Prerequisite Course',
      issuer: 'KodeKloud (Coursera)',
      date: '27/08/2025',
      descriptionKey: 'certs.devopsPrereqDesc',
      url: 'https://coursera.org/share/c29386851cbd2b2012e6b4a67788c7aa',
      featured: false,
      category: 'devops',
      image: '/Portfolio/devops-prerequisite.png'
    },
    {
      id: 'coursera-git-basics-devops',
      title: 'Git Basics for DevOps',
      issuer: 'KodeKloud (Coursera)',
      date: '28/08/2025',
      descriptionKey: 'certs.gitBasicsDesc',
      url: 'https://coursera.org/share/1e9e0f215e1dca7477035e93abf3c560',
      featured: false,
      category: 'devops',
      image: '/Portfolio/git-basic-for-devops.png'
    },
    {
      id: 'coursera-jenkins-basic-devops',
      title: 'Jenkins for Beginners',
      issuer: 'KodeKloud (Coursera)',
      date: '09/09/2025',
      descriptionKey: 'certs.jenkinsBeginnerDesc',
      url: 'https://coursera.org/share/46eddacac8d4bdcdb9935463c2051cfd',
      featured: false,
      category: 'devops',
      image: '/Portfolio/jenkins-basic-for-devops.png'
    },
    {
      id: 'coursera-docker-basic-devops',
      title: 'Docker Basics for DevOps',
      issuer: 'KodeKloud (Coursera)',
      date: '13/09/2025',
      descriptionKey: 'certs.dockerBasicsDesc',
      url: 'https://coursera.org/share/c96023c5cb740448a825b11c0e8d5ed1',
      featured: false,
      category: 'devops',
      image: '/Portfolio/docker-basic-for-devops.png'
    }
  ]

  const categories = [
    { id: 'all', name: t('certs.all'), icon: FaTrophy, count: certificates.length },
    { id: 'devops', name: t('certs.devops'), icon: FaShieldAlt, count: certificates.filter(c => c.category === 'devops').length },
    { id: 'cloud', name: t('certs.cloud'), icon: FaCloud, count: 0 },
    { id: 'frontend', name: t('certs.frontend'), icon: FaCode, count: 0 },
  ]

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory)

  const totalCertificates = certificates.length
  const featuredCount = certificates.filter(c => c.featured).length
  const issuersCount = new Set(certificates.map(c => c.issuer)).size

  return (
    <div className="certificates">
      <div className="certificates-header">
        <h1 className="section-title">{t('certs.title')}</h1>
        <p className="section-subtitle">{t('certs.subtitle')}</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="filter-section">
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="filter-icon" />
              <span>{category.name}</span>
              <span className="category-count">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Display */}
      {filteredCertificates.length > 0 ? (
        <div className="certificates-grid">
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className={`certificate-card${cert.featured ? ' featured' : ''}`}>
              {/* Certificate Image */}
              {cert.image && (
                <div className="certificate-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-overlay">
                    <div className="certificate-actions">
                      <a
                        className="action-btn"
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={t('certs.viewCert')}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  {cert.featured && <span className="featured-badge">{t('projects.featured')}</span>}
                </div>
                <div className="certificate-issuer">{cert.issuer}</div>
                <div className="certificate-date">{cert.date}</div>
                <p className="certificate-description">{t(cert.descriptionKey)}</p>
                <div className="certificate-footer">
                  <a
                    className="repo-link"
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('certs.viewCert')} <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="coming-soon-section">
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <FaRocket />
            </div>
            <h2>{t('certs.coming')}</h2>
            <p>{t('certs.comingDesc')}</p>
            <div className="coming-soon-cta">
              <p>{t('certs.seeProjects')}</p>
              <a
                className="btn btn-primary"
                href="https://github.com/taipham2710/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('certs.seeProjects')}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="stats-overview">
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <div className="stat-content">
            <h3>{totalCertificates}</h3>
            <p>{t('certs.statsTotal')}</p>
          </div>
        </div>
        <div className="stat-card">
          <FaStar className="stat-icon" />
          <div className="stat-content">
            <h3>{featuredCount}</h3>
            <p>{t('certs.statsFeatured')}</p>
          </div>
        </div>
        <div className="stat-card">
          <FaCertificate className="stat-icon" />
          <div className="stat-content">
            <h3>{issuersCount}</h3>
            <p>{t('certs.statsIssuers')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates 