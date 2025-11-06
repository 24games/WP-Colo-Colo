import React from 'react'

const Achievements = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Principales Conquistas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Una trayectoria de glorias y victorias</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Destaque Principal - Libertadores */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="relative z-10 p-10">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png/250px-328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png" 
                  alt="Trofeo Copa Libertadores" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Copa Libertadores de América</h3>
                  <p className="text-xl text-gray-200 mb-4">1 título (1991) - El Título Más Importante</p>
                  <p className="text-lg text-gray-300 mb-4">Único club chileno en conquistar este trofeo histórico</p>
                  
                  {/* Texto sobre a conquista de 1991 */}
                  <div className="space-y-3 text-lg text-gray-200 leading-relaxed mt-4 pt-4 border-t border-white/20">
                    <p>
                      El año <span className="font-bold text-white">1991</span> quedó marcado en la historia del fútbol chileno como el momento en que el Colo-Colo conquistó 
                      la <strong className="text-yellow-300">Copa Libertadores de América</strong>, el título más prestigioso del continente. 
                      Bajo el mando del técnico croata <span className="font-semibold">Mirko Jozić</span>, el Colo-Colo derrotó al Olimpia de Paraguay en la final, 
                      convirtiéndose en el primer y único club chileno en conquistar este trofeo hasta hoy.
                    </p>
                    <p>
                      Esta conquista no fue solo un título deportivo, sino un momento de unión nacional. Miles de 
                      chilenos celebraron en las calles, y el logro del Colo-Colo fue reconocido como una victoria de todo el país. 
                      El club también participó del <span className="font-semibold">Mundial de Clubes de la FIFA</span> en el mismo año, enfrentando equipos europeos y 
                      consolidando su nombre en el escenario internacional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de Conquistas */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://footballpredictions.net/storage/131/5250792.png" 
                    alt="Campeonato Chileno" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">🏅</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Campeonato Chileno</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-gray-900">33</p>
                <p className="text-lg text-gray-600">títulos - Mayor campeón nacional</p>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Copa_Chile.png" 
                    alt="Copa Chile" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">🥇</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Copa Chile</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-gray-900">13</p>
                <p className="text-lg text-gray-600">títulos conquistados</p>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2022/03/recopa.png" 
                    alt="Recopa Sudamericana" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">🌎</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Recopa Sudamericana</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-gray-900">1</p>
                <p className="text-lg text-gray-600">título (1992)</p>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Supercopa_de_Chile.png?20221104124340" 
                    alt="Supercopa de Chile" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Supercopa de Chile</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-gray-900">2</p>
                <p className="text-lg text-gray-600">títulos (2017 y 2018)</p>
              </div>
            </div>
          </div>
          
          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">✨</span>
              <div>
                <p className="text-gray-900 text-xl font-semibold mb-2">Destacado Histórico</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  El Colo-Colo es el club más ganador de la historia del fútbol chileno, 
                  con un total de más de <strong className="text-black">50 títulos oficiales</strong> entre competencias nacionales e internacionales. 
                  Su hegemonía en el escenario nacional es incuestionable, y su conquista de la Copa Libertadores 
                  en 1991 permanece como el mayor logro del fútbol chileno en competencias continentales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
