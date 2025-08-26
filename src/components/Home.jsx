import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'

const Home = ({ onViewProjectsClick }) => {
  const [showCVDropdown, setShowCVDropdown] = useState(false)

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

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Xin chào! Tôi là
              <span className="highlight"> Phạm Tấn Tài</span>
            </h1>
            <p className="hero-subtitle">
              DevOps Engineer
            </p>
            <p className="hero-description">
              Là một sinh viên công nghệ thông tin định hướng theo mảng DevOps, 
              tôi mong muốn có được cơ hội thực tập trong môi trường thực tế để học
              hỏi và nâng cao kỹ năng về Linux, CI/CD, containerization, triển khai hệ thống. 
              Từ đó phát triển thành một DevOps Engineer chuyên nghiệp.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onViewProjectsClick}>Xem dự án</button>
              <div className="cv-dropdown">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                >
                  Tải CV
                </button>
                {showCVDropdown && (
                  <div className="cv-dropdown-menu">
                    {cvOptions.map((cv, index) => (
                      <button
                        key={index}
                        className="cv-option"
                        onClick={() => handleCVDownload(cv.url, cv.filename)}
                      >
                        {cv.name}
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
                <div className="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>DevOps Engineer</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <FaArrowDown className="scroll-icon" />
          <span>Cuộn xuống để khám phá</span>
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
          <p>Dự án hoàn thành</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>Năm kinh nghiệm</p>
        </div>
      </div>
    </div>
  )
}

export default Home 