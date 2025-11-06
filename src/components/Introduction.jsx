import React from 'react'

const Introduction = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Introdução ao Colo-Colo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Uma jornada através da história e paixão</p>
        </div>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              Fundado em <span className="font-bold text-black">19 de abril de 1925</span>, o <strong className="text-black text-xl">Colo-Colo</strong> é muito mais do que um simples clube de futebol. 
              É uma instituição que representa a essência do futebol chileno e se consolidou como o clube mais tradicional 
              e relevante do país. Com quase um século de história, o Colo-Colo não apenas conquistou títulos, mas também 
              se tornou parte fundamental da identidade cultural chilena.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              Com uma base de fãs massiva que ultrapassa milhões de torcedores em todo o Chile, o Colo-Colo é o clube mais 
              popular do país. Sua torcida, conhecida como <span className="font-semibold italic">"Los Albos"</span> ou <span className="font-semibold italic">"El Cacique"</span>, é uma das mais apaixonadas e 
              dedicadas do continente sul-americano. O clube não é apenas um time de futebol, mas sim um símbolo de 
              orgulho nacional que une pessoas de todas as classes sociais e regiões do Chile.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              O impacto cultural do Colo-Colo vai muito além das quatro linhas do campo. O clube influencia a música, 
              a arte, a política e a vida social chilena. Seus jogos são eventos que mobilizam o país inteiro, e suas 
              conquistas são celebradas como vitórias nacionais. O Colo-Colo representa a resistência, a paixão e a 
              determinação do povo chileno, sendo uma parte indissociável da história e da cultura do Chile.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

