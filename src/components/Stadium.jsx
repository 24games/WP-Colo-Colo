import React from 'react'

const Stadium = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          O Estádio Monumental
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🏟️ Estádio Monumental David Arellano</h3>
            <p className="mb-4">
              O <strong>Estádio Monumental David Arellano</strong> é muito mais do que um simples estádio de futebol. 
              É a casa sagrada do Colo-Colo, um templo onde milhões de torcedores já viveram momentos inesquecíveis 
              de alegria, emoção e paixão.
            </p>
            <p className="mb-4">
              Inaugurado em 20 de setembro de 1975, o Monumental foi construído para ser o maior e mais moderno 
              estádio do Chile. Com uma capacidade atual de aproximadamente <strong>47.000 espectadores</strong>, 
              o estádio recebeu o nome em homenagem a David Arellano, fundador e primeiro capitão do Colo-Colo, 
              que faleceu tragicamente em 1927 durante uma turnê do clube pela Europa.
            </p>
            <p>
              O Monumental não é apenas um local de jogos; é um símbolo de identidade, tradição e orgulho. 
              Suas arquibancadas já testemunharam conquistas históricas, incluindo a preparação para a 
              Copa Libertadores de 1991. A atmosfera durante os jogos é eletrizante, com a torcida criando 
              um ambiente único que poucos estádios no mundo conseguem igualar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">📊 Características</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Capacidade:</strong> ~47.000 espectadores</li>
                <li><strong>Localização:</strong> Macul, Santiago, Chile</li>
                <li><strong>Inauguração:</strong> 20 de setembro de 1975</li>
                <li><strong>Dimensões do campo:</strong> 105m x 68m</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">⭐ Significado</h4>
              <p className="text-gray-700">
                O Estádio Monumental é reconhecido como um dos estádios mais importantes da América do Sul. 
                Além de sediar os jogos do Colo-Colo, o estádio também recebe partidas da seleção chilena 
                e grandes eventos esportivos, consolidando seu papel como um ícone do futebol chileno.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
            <p className="text-gray-800">
              <strong>💡 Curiosidade:</strong> A atmosfera do Monumental durante os jogos do Colo-Colo é 
              considerada uma das mais intensas do continente. Os cânticos da torcida, conhecida como 
              "Los Garra Blanca", criam um ambiente único que inspira os jogadores e intimida os adversários.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stadium

