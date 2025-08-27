import React, { useState } from 'react'
import { FaCertificate, FaExternalLinkAlt, FaStar, FaTrophy, FaRocket } from 'react-icons/fa'

const Certificates = () => {
  const certificates = [
    {
      id: 'coursera-devops-prereq',
      title: 'DevOps Prerequisite Course',
      issuer: 'KodeKloud (Coursera)',
      date: '27/08/2025',
      details: 'Hoàn thành khóa nền tảng DevOps (~14 giờ): Linux, CLI, TCP/IP, Networking, Systems Administration.',
      url: 'https://coursera.org/share/c29386851cbd2b2012e6b4a67788c7aa',
      featured: true,
    },
  ]

  const totalCertificates = certificates.length
  const featuredCount = certificates.filter(c => c.featured).length
  const issuersCount = new Set(certificates.map(c => c.issuer)).size

  return (
    <div className="certificates">
      <div className="certificates-header">
        <h1 className="section-title">Chứng chỉ & Thành tích</h1>
        <p className="section-subtitle">Các chứng nhận chuyên môn và thành tích trong sự nghiệp</p>
      </div>

      {/* Latest Certificates */}
      {certificates.length > 0 && (
        <div className="certificates-grid" style={{ marginBottom: '2rem' }}>
          {certificates.map((cert) => (
            <div key={cert.id} className={`certificate-card${cert.featured ? ' featured' : ''}`}>
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
      )}

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            <FaRocket />
          </div>
          <h2>Coming Soon!</h2>
          <p>Tôi đang trong quá trình học tập và tích lũy chứng chỉ chuyên môn. Hãy quay lại sau để xem những thành tích mới nhất!</p>
          <div className="coming-soon-features">
            <div className="feature-item">
              <FaTrophy className="feature-icon" />
              <span>Chứng chỉ Cloud (AWS, Azure, GCP)</span>
            </div>
            <div className="feature-item">
              <FaCertificate className="feature-icon" />
              <span>Chứng chỉ Frontend & Backend</span>
            </div>
            <div className="feature-item">
              <FaStar className="feature-icon" />
              <span>Chứng chỉ DevOps & Security</span>
            </div>
          </div>
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