import React from 'react'

const Team = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              O Elenco
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">O time que representa o Colo-Colo</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Foto do Elenco Atual */}
          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/elenco-atual.svg" 
              alt="Elenco Atual do Colo-Colo" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4">⚽<br/>Elenco Atual<br/>Colo-Colo</div>';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Elenco Atual</h3>
              <p className="text-lg text-gray-200">O time que continua escrevendo a história do clube</p>
            </div>
          </div>
          
          {/* Grid com Time Histórico e Informações */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Time Histórico */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src="/images/time-historico.jpg" 
                alt="Time Histórico do Colo-Colo" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-2xl font-bold text-center px-4">📸<br/>Time Histórico</div>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-1">Time Histórico</h4>
                <p className="text-sm text-gray-200">Lendas que marcaram época</p>
              </div>
            </div>
            
            {/* Informações do Elenco */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="text-3xl">⚽</span>
                Sobre o Elenco
              </h4>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  O Colo-Colo mantém uma tradição de formar e desenvolver talentos através de sua renomada 
                  escola de futebol, uma das mais respeitadas do Chile.
                </p>
                <p>
                  O elenco atual combina experiência de jogadores veteranos com a energia e talento de jovens 
                  promessas, mantendo o padrão de excelência que caracteriza o clube há quase um século.
                </p>
                <p>
                  Cada jogador que veste a camisa alvinegra carrega o peso e a honra de representar o clube 
                  mais tradicional do Chile, seguindo os passos das grandes lendas que marcaram a história do Colo-Colo.
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

