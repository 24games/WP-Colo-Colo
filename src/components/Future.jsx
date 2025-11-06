import React from 'react'

const Future = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Futuro e Expectativas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Olhando adiante com ambição e determinação</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Introdução */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed">
              O Colo-Colo continua sendo uma força dominante no futebol chileno e está constantemente se 
              preparando para os desafios futuros. O clube mantém um compromisso firme com o desenvolvimento 
              de jovens talentos através de sua renomada escola de futebol, garantindo que novas gerações 
              de jogadores continuem a vestir a camisa alvinegra com orgulho e dedicação.
            </p>
          </div>
          
          {/* Objetivos */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎯</span>
              <h3 className="text-3xl font-bold text-black">Objetivos e Ambições</h3>
            </div>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Retomar a Copa Libertadores:</strong> O clube tem como principal objetivo 
                  voltar a conquistar a competição continental mais importante da América do Sul, repetindo 
                  o feito histórico de 1991.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Manter a hegemonia nacional:</strong> Continuar sendo o clube mais vencedor 
                  do Chile, conquistando títulos do Campeonato Chileno e outras competições nacionais.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Desenvolvimento de talentos:</strong> Investir na formação de jovens jogadores 
                  que possam representar tanto o clube quanto a seleção chilena em competições internacionais.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                <div>
                  <strong className="text-black">Fortalecimento institucional:</strong> Continuar modernizando a estrutura do 
                  clube, melhorando as instalações e garantindo a sustentabilidade financeira e esportiva.
                </div>
              </li>
            </ul>
          </div>
          
          {/* Visão de Futuro */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🚀</span>
              <div>
                <p className="text-gray-900 text-2xl font-semibold mb-3">Visão de Futuro</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  O Colo-Colo não apenas olha para o passado com orgulho, 
                  mas também projeta um futuro brilhante. Com uma base sólida, uma torcida apaixonada e uma 
                  tradição de excelência, o clube está preparado para continuar escrevendo capítulos gloriosos 
                  na história do futebol chileno e sul-americano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Future

