import React from 'react'

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, page) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(page)
    } else {
      // Fallback si onNavigate no está disponible
      if (page === 'privacy') {
        window.location.hash = 'politica-privacidad'
      } else if (page === 'terms') {
        window.location.hash = 'terminos-condiciones'
      }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full mx-auto"></div>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-gray-400 text-center mb-6">
          Esta página es exclusivamente informativa, sin fines de lucro o comerciales. 
          No posee ningún propósito de generar retorno financiero y busca únicamente proporcionar 
          contenido histórico y educativo sobre el club Colo-Colo.
        </p>
        
        {/* Enlaces legales */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
          <a 
            href="#politica-privacidad" 
            onClick={(e) => handleLinkClick(e, 'privacy')}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base underline decoration-gray-600 hover:decoration-white"
          >
            Política de Privacidad
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="#terminos-condiciones" 
            onClick={(e) => handleLinkClick(e, 'terms')}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base underline decoration-gray-600 hover:decoration-white"
          >
            Términos y Condiciones
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © 2025 - Landing Page Informativa sobre el Colo-Colo
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
