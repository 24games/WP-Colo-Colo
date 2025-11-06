import React from 'react'

const Rivalries = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Rivalidades
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Confrontos que definem a paixão do futebol chileno</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Superclásico - Destaque */}
          <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">⚔️</span>
                <h3 className="text-3xl md:text-4xl font-bold">O Superclásico Chileno</h3>
              </div>
              <p className="text-2xl font-semibold mb-6 text-red-100">Colo-Colo vs Universidad de Chile</p>
              <div className="space-y-4 text-lg text-red-50 leading-relaxed">
                <p>
                  A rivalidade entre o <strong className="text-white">Colo-Colo</strong> e a <strong className="text-white">Universidad de Chile</strong> 
                  (conhecida como "La U") é considerada uma das mais intensas e apaixonadas do futebol sul-americano. 
                  Este confronto, batizado de <strong className="text-white text-xl">"Superclásico Chileno"</strong>, vai muito além de uma simples partida de futebol.
                </p>
                <p>
                  O Superclásico representa um choque de identidades: o Colo-Colo, clube tradicional e popular, contra 
                  a Universidad de Chile, representante da classe média e intelectual. Quando esses dois gigantes se 
                  enfrentam, o Chile praticamente para. Milhões de pessoas acompanham o jogo, e as ruas se enchem de 
                  torcedores vestindo as cores de seus clubes.
                </p>
                <p>
                  A tensão e a emoção desses confrontos são indescritíveis. Cada gol, cada lance, cada decisão do 
                  árbitro é sentida com intensidade máxima. O Superclásico não é apenas um jogo; é um evento cultural 
                  que define a identidade futebolística chilena e continua sendo o confronto mais aguardado e 
                  significativo do calendário esportivo do país.
                </p>
              </div>
            </div>
          </div>
          
          {/* Outras Rivalidades */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              Outras Rivalidades Importantes
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Além do confronto com a Universidad de Chile, o Colo-Colo mantém rivalidades históricas com outros 
              clubes chilenos, como o <span className="font-semibold">Universidad Católica</span> e o <span className="font-semibold">Audax Italiano</span>. Esses confrontos regionais e nacionais 
              também geram grande expectativa e paixão, mas nenhum deles alcança a magnitude e a intensidade do 
              Superclásico contra La U.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rivalries

