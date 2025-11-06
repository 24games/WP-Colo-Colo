import React from 'react'

const Players = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Principais Jogadores da História
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Lendas que marcaram a história do clube</p>
        </div>
        
        <div className="space-y-6 animate-slide-up">
          {/* Carlos Caszely */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="/images/carlos-caszely.svg" 
                    alt="Carlos Caszely" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white text-4xl font-bold">CC</div>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Carlos Caszely</h3>
                  <span className="text-sm font-semibold text-gray-500 italic">"El Rey del Gol"</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Considerado um dos maiores ídolos da história do Colo-Colo, Carlos Caszely é o maior artilheiro da história do clube, 
                  marcando mais de <span className="font-bold text-black">200 gols</span>. Foi fundamental nas conquistas dos anos <span className="font-semibold">1970 e 1980</span>. 
                  Sua paixão e dedicação ao clube o transformaram em um símbolo eterno do Colo-Colo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Elías Figueroa */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-gray-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="/images/elias-figueroa.svg" 
                    alt="Elías Figueroa" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-4xl font-bold">EF</div>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Elías Figueroa</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Considerado um dos melhores zagueiros da história do futebol sul-americano, Elías Figueroa 
                  defendeu as cores do Colo-Colo com maestria. Sua elegância em campo, liderança e capacidade 
                  técnica fizeram dele uma lenda não apenas do clube, mas do futebol mundial. Figueroa é 
                  lembrado como um dos maiores defensores que já vestiu a camisa alvinegra.
                </p>
              </div>
            </div>
          </div>
          
          {/* Arturo Vidal */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="/images/arturo-vidal.svg" 
                    alt="Arturo Vidal" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white text-4xl font-bold">AV</div>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Arturo Vidal</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Arturo Vidal começou sua carreira nas categorias de base do Colo-Colo e rapidamente se 
                  destacou como um dos maiores talentos do futebol chileno. Após brilhar no clube, Vidal 
                  conquistou títulos importantes na Europa e se tornou uma peça fundamental da seleção 
                  chilena que venceu <span className="font-semibold">duas Copas América consecutivas</span>. Sua trajetória é um exemplo do 
                  poder formador do Colo-Colo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Outros Jogadores */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-l-4 border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">⭐</span>
              <h3 className="text-3xl font-bold text-black">Outros Grandes Nomes</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A história do Colo-Colo é repleta de grandes jogadores que marcaram época. Nomes como 
                <strong className="text-black"> Marcelo Barticciotto</strong>, <strong className="text-black">Leonel Sánchez</strong>, 
                <strong className="text-black"> Esteban Paredes</strong>, <strong className="text-black">Matías Fernández</strong> e 
                <strong className="text-black"> Alexis Sánchez</strong> (que também passou pelas categorias de base) são apenas alguns 
                exemplos de talentos que vestiram a camisa do clube e deixaram sua marca na história.
              </p>
              <p>
                O Colo-Colo sempre foi reconhecido por sua capacidade de formar e desenvolver jovens talentos. 
                A escola de futebol do clube é uma das mais respeitadas do Chile e tem sido fundamental para 
                o desenvolvimento de gerações de jogadores que não apenas brilharam no clube, mas também 
                representaram a seleção chilena em competições internacionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Players

