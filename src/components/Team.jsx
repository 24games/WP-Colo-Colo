import React from 'react'

const Team = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              El Plantel del Colo-Colo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Conoce a los jugadores que hacen la historia del club</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Foto do Elenco Atual */}
          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://www.opovo.com.br/_midias/jpg/2022/04/06/750x500/1_elenco_colo_colo-18483451.jpg" 
              alt="Plantel Actual del Colo-Colo" 
              className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = '/images/elenco-atual.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Plantel Actual</h3>
              <p className="text-lg text-gray-200">El equipo que continúa escribiendo la historia del club</p>
            </div>
          </div>
          
          {/* Grid com Time Histórico e Informações */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Histórico */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKfJd_mbjHvpQBncC1W8fG_kCX68dXkLqlQ&s" 
                alt="Equipo Histórico del Colo-Colo" 
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-2xl font-bold text-center px-4">📸<br/>Equipo Histórico</div>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-1">Equipo Histórico</h4>
                <p className="text-sm text-gray-200">Leyendas que marcaron época</p>
              </div>
            </div>
            
            {/* Informações do Elenco */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="text-3xl">⚽</span>
                Sobre el Plantel
              </h4>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  El Colo-Colo mantiene una tradición de formar y desarrollar talentos a través de su renombrada 
                  escuela de fútbol, una de las más respetadas de Chile.
                </p>
                <p>
                  El plantel actual combina la experiencia de jugadores veteranos con la energía y el talento de jóvenes 
                  promesas, manteniendo el estándar de excelencia que caracteriza al club desde hace casi un siglo.
                </p>
                <p>
                  Cada jugador que viste la camiseta alvinegra carga con el peso y el honor de representar al club 
                  más tradicional de Chile, siguiendo los pasos de las grandes leyendas que marcaron la historia del Colo-Colo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
