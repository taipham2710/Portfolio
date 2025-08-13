import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'certificates':
        return <Certificates />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
