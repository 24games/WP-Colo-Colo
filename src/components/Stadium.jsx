import React from 'react'

const Stadium = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              El Estadio Monumental
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">La casa sagrada del Colo-Colo</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Imagem Principal do Estádio */}
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://cdn.conmebol.com/wp-content/uploads/2016/08/monumentalchile1.jpg" 
              alt="Estadio Monumental David Arellano" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = 'https://ebco.cl/assets/projects/proyectos/estadio-monumental-y-casa-alba-1.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Estadio Monumental David Arellano</h3>
              <p className="text-lg text-gray-200">La casa sagrada del Colo-Colo</p>
            </div>
          </div>
          
          {/* Card Principal */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  El <strong className="text-white text-xl">Estadio Monumental David Arellano</strong> es mucho más que un simple estadio de fútbol. 
                  Es la casa sagrada del Colo-Colo, un templo donde millones de hinchas han vivido momentos inolvidables 
                  de alegría, emoción y pasión.
                </p>
                <p>
                  Inaugurado el <span className="font-semibold">20 de septiembre de 1975</span>, el Monumental fue construido para ser el mayor y más moderno 
                  estadio de Chile. Con una capacidad actual de aproximadamente <strong className="text-white">47.000 espectadores</strong>, 
                  el estadio recibió el nombre en homenaje a <span className="font-semibold">David Arellano</span>, fundador y primer capitán del Colo-Colo, 
                  que falleció trágicamente en 1927 durante una gira del club por Europa.
                </p>
                <p>
                  El Monumental no es solo un lugar de partidos; es un símbolo de identidad, tradición y orgullo. 
                  Sus tribunas ya han sido testigo de conquistas históricas, incluyendo la preparación para la 
                  Copa Libertadores de 1991. La atmósfera durante los partidos es electrizante, con la hinchada creando 
                  un ambiente único que pocos estadios en el mundo logran igualar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Imagem do Interior */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://ebco.cl/assets/projects/proyectos/estadio-monumental-y-casa-alba-1.jpg" 
              alt="Interior del Estadio Monumental" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xl font-semibold">Vista del interior del Monumental</p>
            </div>
          </div>
          
          {/* Grid de Informações */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h4 className="text-2xl font-bold text-black">Características</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Capacidad:</span>
                  <span>~47.000 espectadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Ubicación:</span>
                  <span>Macul, Santiago, Chile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Inauguración:</span>
                  <span>20 de septiembre de 1975</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Dimensiones:</span>
                  <span>105m x 68m</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⭐</span>
                <h4 className="text-2xl font-bold text-black">Significado</h4>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                El Estadio Monumental es reconocido como uno de los estadios más importantes de Sudamérica. 
                Además de albergar los partidos del Colo-Colo, el estadio también recibe partidos de la selección chilena 
                y grandes eventos deportivos, consolidando su papel como un ícono del fútbol chileno.
              </p>
            </div>
          </div>
          
          {/* Curiosidade */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <p className="text-gray-900 text-xl font-semibold mb-2">Curiosidad</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  La atmósfera del Monumental durante los partidos del Colo-Colo es 
                  considerada una de las más intensas del continente. Los cánticos de la hinchada, conocida como 
                  <span className="font-semibold italic"> "Los Garra Blanca"</span>, crean un ambiente único que inspira a los jugadores e intimida a los adversarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stadium
