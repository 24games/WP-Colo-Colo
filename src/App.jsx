import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import History from './components/History.jsx'
import Achievements from './components/Achievements.jsx'
import Rivalries from './components/Rivalries.jsx'
import Stadium from './components/Stadium.jsx'
import Players from './components/Players.jsx'
import Team from './components/Team.jsx'
import Culture from './components/Culture.jsx'
import Future from './components/Future.jsx'
import Conclusion from './components/Conclusion.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsAndConditions from './components/TermsAndConditions.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Detectar la página desde la URL
    const hash = window.location.hash.slice(1)
    if (hash === 'politica-privacidad' || hash === 'privacy-policy') {
      setCurrentPage('privacy')
    } else if (hash === 'terminos-condiciones' || hash === 'terms-conditions') {
      setCurrentPage('terms')
    } else {
      setCurrentPage('home')
    }

    // Escuchar cambios en el hash
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1)
      if (newHash === 'politica-privacidad' || newHash === 'privacy-policy') {
        setCurrentPage('privacy')
      } else if (newHash === 'terminos-condiciones' || newHash === 'terms-conditions') {
        setCurrentPage('terms')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Función para navegar
  const navigateTo = (page) => {
    if (page === 'privacy') {
      window.location.hash = 'politica-privacidad'
      setCurrentPage('privacy')
    } else if (page === 'terms') {
      window.location.hash = 'terminos-condiciones'
      setCurrentPage('terms')
    } else {
      window.location.hash = ''
      setCurrentPage('home')
    }
  }

  // Renderizar según la página actual
  if (currentPage === 'privacy') {
    return <PrivacyPolicy />
  }

  if (currentPage === 'terms') {
    return <TermsAndConditions />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Introduction />
      <History />
      <Achievements />
      <Rivalries />
      <Stadium />
      <Players />
      <Team />
      <Culture />
      <Future />
      <Conclusion />
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App

