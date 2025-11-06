import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent rounded-full mx-auto"></div>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-gray-400">
          Esta página es exclusivamente informativa, sin fines de lucro o comerciales. 
          No posee ningún propósito de generar retorno financiero y busca únicamente proporcionar 
          contenido histórico y educativo sobre el club Colo-Colo.
        </p>
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © 2025 - Landing Page Informativa sobre el Colo-Colo
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
