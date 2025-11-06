import React from 'react'

const Achievements = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Principais Conquistas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Uma trajetória de glórias e vitórias</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Destaque Principal - Libertadores */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">🏆</span>
                <h3 className="text-3xl md:text-4xl font-bold">Copa Libertadores da América</h3>
              </div>
              <p className="text-xl text-gray-200 mb-2">1 título (1991)</p>
              <p className="text-lg text-gray-300">Único clube chileno a conquistar este troféu histórico</p>
            </div>
          </div>
          
          {/* Grid de Conquistas */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🏅</span>
                <h3 className="text-2xl font-bold text-black">Campeonato Chileno</h3>
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-3">33</p>
              <p className="text-lg text-gray-600">títulos - Maior campeão nacional</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🥇</span>
                <h3 className="text-2xl font-bold text-black">Copa Chile</h3>
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-3">13</p>
              <p className="text-lg text-gray-600">títulos conquistados</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🌎</span>
                <h3 className="text-2xl font-bold text-black">Recopa Sul-Americana</h3>
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-3">1</p>
              <p className="text-lg text-gray-600">título (1992)</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">⭐</span>
                <h3 className="text-2xl font-bold text-black">Supercopa do Chile</h3>
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-3">2</p>
              <p className="text-lg text-gray-600">títulos (2017 e 2018)</p>
            </div>
          </div>
          
          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">✨</span>
              <div>
                <p className="text-gray-900 text-xl font-semibold mb-2">Destaque Histórico</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  O Colo-Colo é o clube mais vencedor da história do futebol chileno, 
                  com um total de mais de <strong className="text-black">50 títulos oficiais</strong> entre competições nacionais e internacionais. 
                  Sua hegemonia no cenário nacional é inquestionável, e sua conquista da Copa Libertadores 
                  em 1991 permanece como o maior feito do futebol chileno em competições continentais.
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

