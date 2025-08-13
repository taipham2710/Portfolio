import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'taipham.dev@gmail.com',
      link: 'mailto:taipham.dev@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Điện thoại',
      value: '+84 703423072',
      link: 'tel:+84703423072'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Địa chỉ',
      value: 'Hồ Chí Minh, Việt Nam',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/taipham2710/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/taipham2710',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/TaiPham2710',
      color: '#1da1f2'
    }
  ]

  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="section-title">Liên hệ</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Thông tin liên lạc</h2>
          <p className="contact-description">
            Tôi luôn sẵn sàng lắng nghe ý tưởng mới và cơ hội hợp tác. 
            Hãy liên hệ với tôi qua bất kỳ phương thức nào dưới đây.
          </p>
          
          <div className="contact-info-list">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="contact-info-item">
                  <div className="contact-icon">
                    <Icon />
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="social-links-section">
            <h3>Theo dõi tôi</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <Icon />
                    <span>{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Gửi tin nhắn</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Họ và tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Tiêu đề</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Nhập tiêu đề tin nhắn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nội dung tin nhắn *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Nhập nội dung tin nhắn của bạn"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Đang gửi...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Gửi tin nhắn
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="contact-cta">
        <h2>Bạn có dự án muốn thực hiện?</h2>
        <p>Hãy để lại thông tin và tôi sẽ liên hệ lại trong vòng 24 giờ</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Xem portfolio</button>
          <button className="btn btn-secondary">Tải CV</button>
        </div>
      </div>
    </div>
  )
}

export default Contact 