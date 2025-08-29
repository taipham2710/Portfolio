import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  // EmailJS config (send directly to your email)
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const useEmailJS = Boolean(EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { t } = useTranslation()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!useEmailJS) {
      setError(t('contact.notConfigured'))
      return
    }

    try {
      setIsSubmitting(true)
      const params = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message
      }
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
      )
      if (res?.status === 200) {
        setSuccess(t('contact.sentOk'))
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setError(t('contact.sentFail'))
      }
    } catch (err) {
      setError(t('contact.sentError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      titleKey: 'contact.emailTitle',
      value: 'taipham.dev@gmail.com',
      link: 'mailto:taipham.dev@gmail.com'
    },
    {
      icon: FaPhone,
      titleKey: 'contact.phoneTitle',
      value: '+84 703423072',
      link: 'tel:+84703423072'
    },
    {
      icon: FaMapMarkerAlt,
      titleKey: 'contact.addressTitle',
      value: 'Ho Chi Minh City, Vietnam',
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
        <h1 className="section-title">{t('contact.title')}</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>{t('contact.info')}</h2>
          <p className="contact-description">
            {t('contact.desc')}
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
                    <h3>{t(info.titleKey)}</h3>
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
            <h3>{t('contact.follow')}</h3>
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
          <h2>{t('contact.formTitle')}</h2>
          {error && (
            <div className="form-alert" style={{color: '#dc2626', marginBottom: '1rem'}}>{error}</div>
          )}
          {success && (
            <div className="form-alert" style={{color: '#16a34a', marginBottom: '1rem'}}>{success}</div>
          )}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePh')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPh')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.subjectPh')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t('contact.messagePh')}
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
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  {t('contact.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Contact 