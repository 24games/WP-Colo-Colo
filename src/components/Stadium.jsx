import React from 'react'

const Stadium = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              O Estádio Monumental
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">A casa sagrada do Colo-Colo</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Imagem Principal do Estádio */}
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/estadio-monumental.jpg" 
              alt="Estádio Monumental David Arellano" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center text-white text-4xl md:text-6xl font-bold">🏟️<br/>Estádio Monumental</div>';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Estádio Monumental David Arellano</h3>
              <p className="text-lg text-gray-200">A casa sagrada do Colo-Colo</p>
            </div>
          </div>
          
          {/* Card Principal */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  O <strong className="text-white text-xl">Estádio Monumental David Arellano</strong> é muito mais do que um simples estádio de futebol. 
                  É a casa sagrada do Colo-Colo, um templo onde milhões de torcedores já viveram momentos inesquecíveis 
                  de alegria, emoção e paixão.
                </p>
                <p>
                  Inaugurado em <span className="font-semibold">20 de setembro de 1975</span>, o Monumental foi construído para ser o maior e mais moderno 
                  estádio do Chile. Com uma capacidade atual de aproximadamente <strong className="text-white">47.000 espectadores</strong>, 
                  o estádio recebeu o nome em homenagem a <span className="font-semibold">David Arellano</span>, fundador e primeiro capitão do Colo-Colo, 
                  que faleceu tragicamente em 1927 durante uma turnê do clube pela Europa.
                </p>
                <p>
                  O Monumental não é apenas um local de jogos; é um símbolo de identidade, tradição e orgulho. 
                  Suas arquibancadas já testemunharam conquistas históricas, incluindo a preparação para a 
                  Copa Libertadores de 1991. A atmosfera durante os jogos é eletrizante, com a torcida criando 
                  um ambiente único que poucos estádios no mundo conseguem igualar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Imagem do Interior */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="/images/estadio-interior.jpg" 
              alt="Interior do Estádio Monumental" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xl font-semibold">Vista do interior do Monumental</p>
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
                  <span className="font-semibold text-black">Capacidade:</span>
                  <span>~47.000 espectadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Localização:</span>
                  <span>Macul, Santiago, Chile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Inauguração:</span>
                  <span>20 de setembro de 1975</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-black">Dimensões:</span>
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
                O Estádio Monumental é reconhecido como um dos estádios mais importantes da América do Sul. 
                Além de sediar os jogos do Colo-Colo, o estádio também recebe partidas da seleção chilena 
                e grandes eventos esportivos, consolidando seu papel como um ícone do futebol chileno.
              </p>
            </div>
          </div>
          
          {/* Curiosidade */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <p className="text-gray-900 text-xl font-semibold mb-2">Curiosidade</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  A atmosfera do Monumental durante os jogos do Colo-Colo é 
                  considerada uma das mais intensas do continente. Os cânticos da torcida, conhecida como 
                  <span className="font-semibold italic"> "Los Garra Blanca"</span>, criam um ambiente único que inspira os jogadores e intimida os adversários.
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

