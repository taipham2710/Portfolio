import React, { useState } from 'react'
import { FaCertificate, FaDownload, FaExternalLinkAlt, FaStar, FaTrophy, FaRocket } from 'react-icons/fa'

const Certificates = () => {
  return (
    <div className="certificates">
      <div className="certificates-header">
        <h1 className="section-title">Chứng chỉ & Thành tích</h1>
        <p className="section-subtitle">Các chứng nhận chuyên môn và thành tích trong sự nghiệp</p>
      </div>

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
            <button className="btn btn-primary">Xem dự án</button>
          </div>
        </div>
      </div>

      {/* Placeholder Stats */}
      <div className="stats-overview">
        <div className="stat-card">
          <FaTrophy className="stat-icon" />
          <div className="stat-content">
            <h3>0</h3>
            <p>Chứng chỉ</p>
          </div>
        </div>
        <div className="stat-card">
          <FaStar className="stat-icon" />
          <div className="stat-content">
            <h3>0</h3>
            <p>Chứng chỉ nổi bật</p>
          </div>
        </div>
        <div className="stat-card">
          <FaCertificate className="stat-icon" />
          <div className="stat-content">
            <h3>0</h3>
            <p>Tổ chức cấp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates 