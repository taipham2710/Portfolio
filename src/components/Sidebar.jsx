import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaHome, FaUser, FaCode, FaCertificate, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Sidebar = ({ currentTab, setCurrentTab, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const menuItems = [
    { id: 'home', label: t('nav.home'), icon: FaHome },
    { id: 'about', label: t('nav.about'), icon: FaUser },
    { id: 'projects', label: t('nav.projects'), icon: FaCode },
    { id: 'certificates', label: t('nav.certificates'), icon: FaCertificate },
    { id: 'contact', label: t('nav.contact'), icon: FaEnvelope },
  ]

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId)
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="logo">Portfolio</h2>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun size={20} color="currentColor" /> : <FaMoon size={20} color="currentColor" />}
          </button>
          <button
            className="theme-toggle"
            onClick={() => i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
            aria-label="Toggle language"
            style={{ marginLeft: '0.5rem' }}
          >
            {i18n.language === 'vi' ? 'EN' : 'VI'}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-button ${currentTab === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <Icon className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <p className="footer-text">{t('footer.copyright')}</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar 