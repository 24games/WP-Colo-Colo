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
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="relative z-10 p-10">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png/250px-328-3287452_copa-libertadores-primer-trofeo-hd-png-download.png" 
                  alt="Taça Copa Libertadores" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Copa Libertadores da América</h3>
                  <p className="text-xl text-gray-200 mb-4">1 título (1991) - O Título Mais Importante</p>
                  <p className="text-lg text-gray-300 mb-4">Único clube chileno a conquistar este troféu histórico</p>
                  
                  {/* Texto sobre a conquista de 1991 */}
                  <div className="space-y-3 text-lg text-gray-200 leading-relaxed mt-4 pt-4 border-t border-white/20">
                    <p>
                      O ano de <span className="font-bold text-white">1991</span> ficou marcado na história do futebol chileno como o momento em que o Colo-Colo conquistou 
                      a <strong className="text-yellow-300">Copa Libertadores da América</strong>, o título mais prestigioso do continente. 
                      Sob o comando do técnico croata <span className="font-semibold">Mirko Jozić</span>, o Colo-Colo derrotou o Olimpia do Paraguai na final, 
                      tornando-se o primeiro e único clube chileno a conquistar esse troféu até hoje.
                    </p>
                    <p>
                      Essa conquista não foi apenas um título esportivo, mas sim um momento de união nacional. Milhares de 
                      chilenos celebraram nas ruas, e o feito do Colo-Colo foi reconhecido como uma vitória de todo o país. 
                      O clube ainda participou do <span className="font-semibold">Mundial de Clubes da FIFA</span> no mesmo ano, enfrentando equipes europeias e 
                      consolidando seu nome no cenário internacional.
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
                <p className="text-lg text-gray-600">títulos - Maior campeão nacional</p>
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
                    alt="Recopa Sul-Americana" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">🌎</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Recopa Sul-Americana</h3>
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
                    alt="Supercopa do Chile" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className="text-4xl hidden">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-black">Supercopa do Chile</h3>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-gray-900">2</p>
                <p className="text-lg text-gray-600">títulos (2017 e 2018)</p>
              </div>
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

