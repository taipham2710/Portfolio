import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'

const Home = ({ onViewProjectsClick }) => {
  const [showCVDropdown, setShowCVDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const { t } = useTranslation()

  const cvOptions = [
    {
      name: 'CV Tiếng Việt',
      filename: 'PhamTanTai-DevOps-Intern-VN.pdf',
      url: '/Portfolio/PhamTanTai-DevOps-Intern-VN.pdf'
    },
    {
      name: 'CV English',
      filename: 'PhamTanTai-DevOps-Intern-ENG.pdf',
      url: '/Portfolio/PhamTanTai-DevOps-Intern-ENG.pdf'
    }
  ]

  const handleCVDownload = (cvUrl, filename) => {
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowCVDropdown(false)
  }

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCVDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCVDropdown(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowCVDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [showCVDropdown])

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('home.title')}
              <span className="highlight"> Phạm Tấn Tài</span>
            </h1>
            <p className="hero-subtitle">
              {t('home.role')}
            </p>
            <p className="hero-description">
              {t('home.desc')}
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onViewProjectsClick}>{t('home.viewProjects')}</button>
              <div className="cv-dropdown" ref={dropdownRef}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                >
                  {t('home.downloadCV')}
                </button>
                {showCVDropdown && (
                  <div className="cv-dropdown-menu">
                    {cvOptions.map((cv, index) => (
                      <button
                        key={index}
                        className="cv-option"
                        onClick={() => handleCVDownload(cv.url, cv.filename)}
                      >
                        {index === 0 ? t('home.cvVi') : t('home.cvEn')}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img 
                  src="/Portfolio/avatar.JPG" 
                  alt="Phạm Tấn Tài - DevOps Engineer"
                  className="avatar"
                />
              </div>
                  <div className="profile-info">
                  <h3>DevOps Engineer</h3>
                </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <FaArrowDown className="scroll-icon" />
          <span>{t('home.scroll')}</span>
        </div>
      </div>
      
      <div className="social-links">
        <a href="#" className="social-link" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#" className="social-link" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
      
      <div className="stats-section">
        <div className="stat-item">
          <h3>10+</h3>
          <p>{t('home.statsProjects')}</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>{t('home.statsYears')}</p>
        </div>
      </div>
    </div>
  )
}

export default Home 