import React, { useState } from 'react'
import { FaCertificate, FaExternalLinkAlt, FaStar, FaTrophy, FaRocket, FaCloud, FaCode, FaShieldAlt } from 'react-icons/fa'

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const certificates = [
    {
      id: 'coursera-devops-prereq',
      title: 'DevOps Prerequisite Course',
      issuer: 'KodeKloud (Coursera)',
      date: '27/08/2025',
      details: 'Hoàn thành khóa nền tảng DevOps (~14 giờ): Linux, CLI, TCP/IP, Networking, Systems Administration.',
      url: 'https://coursera.org/share/c29386851cbd2b2012e6b4a67788c7aa',
      featured: false,
      category: 'devops',
      image: '/Portfolio/devops-prerequisite.png' // Hình ảnh chứng chỉ
    },
  ]

  const categories = [
    { id: 'all', name: 'Tất cả', icon: FaTrophy, count: certificates.length },
    { id: 'devops', name: 'DevOps & Security', icon: FaShieldAlt, count: certificates.filter(c => c.category === 'devops').length },
    { id: 'cloud', name: 'Cloud (AWS, Azure, GCP)', icon: FaCloud, count: 0 },
    { id: 'frontend', name: 'Frontend & Backend', icon: FaCode, count: 0 },
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
        <h1 className="section-title">Chứng chỉ & Thành tích</h1>
        <p className="section-subtitle">Các chứng nhận chuyên môn và thành tích trong sự nghiệp</p>
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
                        title="Xem chứng chỉ"
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
                  {cert.featured && <span className="featured-badge">Featured</span>}
                </div>
                <div className="certificate-issuer">{cert.issuer}</div>
                <div className="certificate-date">{cert.date}</div>
                <p className="certificate-description">{cert.details}</p>
                <div className="certificate-footer">
                  <a
                    className="repo-link"
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem chứng chỉ <FaExternalLinkAlt />
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
            <h2>Coming Soon!</h2>
            <p>Chưa có chứng chỉ nào trong danh mục này. Tôi đang trong quá trình học tập và tích lũy chứng chỉ chuyên môn!</p>
            <div className="coming-soon-cta">
              <p>Bạn muốn xem portfolio dự án của tôi?</p>
              <a
                className="btn btn-primary"
                href="https://github.com/taipham2710/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Xem dự án
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
            <p>Chứng chỉ</p>
          </div>
        </div>
        <div className="stat-card">
          <FaStar className="stat-icon" />
          <div className="stat-content">
            <h3>{featuredCount}</h3>
            <p>Chứng chỉ nổi bật</p>
          </div>
        </div>
        <div className="stat-card">
          <FaCertificate className="stat-icon" />
          <div className="stat-content">
            <h3>{issuersCount}</h3>
            <p>Tổ chức cấp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates 