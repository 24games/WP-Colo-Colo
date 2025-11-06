import React from 'react'

const Future = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Futuro y Expectativas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Mirando adelante con ambición y determinación</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Introdução */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed">
              El Colo-Colo continúa siendo una fuerza dominante en el fútbol chileno y está constantemente 
              preparándose para los desafíos futuros. El club mantiene un compromiso firme con el desarrollo 
              de jóvenes talentos a través de su renombrada escuela de fútbol, garantizando que nuevas generaciones 
              de jugadores continúen vistiendo la camiseta alvinegra con orgullo y dedicación.
            </p>
          </div>
          
          {/* Objetivos */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl font-bold text-black">Objetivos y Ambiciones</h3>
            </div>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Retomar la Copa Libertadores:</strong> El club tiene como principal objetivo 
                  volver a conquistar la competencia continental más importante de Sudamérica, repitiendo 
                  el logro histórico de 1991.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Mantener la hegemonía nacional:</strong> Continuar siendo el club más ganador 
                  de Chile, conquistando títulos del Campeonato Chileno y otras competencias nacionales.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Desarrollo de talentos:</strong> Invertir en la formación de jóvenes jugadores 
                  que puedan representar tanto al club como a la selección chilena en competencias internacionales.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Fortalecimiento institucional:</strong> Continuar modernizando la estructura del 
                  club, mejorando las instalaciones y garantizando la sostenibilidad financiera y deportiva.
                </div>
              </li>
            </ul>
          </div>
          
          {/* Visão de Futuro */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🚀</span>
              <div>
                <p className="text-gray-900 text-2xl font-semibold mb-3">Visión de Futuro</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  El Colo-Colo no solo mira al pasado con orgullo, 
                  sino que también proyecta un futuro brillante. Con una base sólida, una hinchada apasionada y una 
                  tradición de excelencia, el club está preparado para continuar escribiendo capítulos gloriosos 
                  en la historia del fútbol chileno y sudamericano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Future
