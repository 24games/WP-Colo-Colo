import React from 'react'

const Rivalries = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Rivalidades
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-red-900 mb-4">⚔️ O Superclásico Chileno: Colo-Colo vs Universidad de Chile</h3>
            <p className="mb-3">
              A rivalidade entre o <strong className="text-black">Colo-Colo</strong> e a <strong className="text-black">Universidad de Chile</strong> 
              (conhecida como "La U") é considerada uma das mais intensas e apaixonadas do futebol sul-americano. 
              Este confronto, batizado de <strong>"Superclásico Chileno"</strong>, vai muito além de uma simples partida de futebol.
            </p>
            <p className="mb-3">
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
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3">Outras Rivalidades Importantes</h3>
            <p>
              Além do confronto com a Universidad de Chile, o Colo-Colo mantém rivalidades históricas com outros 
              clubes chilenos, como o Universidad Católica e o Audax Italiano. Esses confrontos regionais e nacionais 
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

