import React from 'react'

const Culture = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Cultura e Torcida
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">A paixão que transcende o futebol</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Card Principal */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">💪</span>
                <h3 className="text-3xl md:text-4xl font-bold">A Paixão dos Torcedores</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  A torcida do Colo-Colo, conhecida como <strong className="text-white text-xl">"Los Garra Blanca"</strong> (A Garra Branca), 
                  é uma das mais apaixonadas e organizadas da América do Sul. Com milhões de torcedores espalhados 
                  por todo o Chile e pelo mundo, o Colo-Colo possui uma base de fãs que transcende gerações e 
                  classes sociais.
                </p>
                <p>
                  O apoio fervoroso da torcida é uma característica marcante do clube. Nos jogos no Estádio Monumental, 
                  as arquibancadas se transformam em um mar de preto e branco, com cânticos que ecoam por toda a cidade. 
                  A energia e a paixão dos torcedores são palpáveis, criando uma atmosfera única que poucos clubes no 
                  mundo conseguem igualar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Grid de Informações */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎵</span>
                <h4 className="text-2xl font-bold text-black">Rituais e Tradições</h4>
              </div>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  Os rituais da torcida do Colo-Colo são parte fundamental da identidade do clube. Os cânticos 
                  tradicionais, as bandeiras gigantes, os fogos de artifício e as coreografias nas arquibancadas 
                  criam um espetáculo visual e sonoro impressionante.
                </p>
                <p>
                  Cada jogo no Monumental é uma celebração, uma festa onde milhares de pessoas se unem em torno 
                  de uma paixão comum. Esses rituais não são apenas entretenimento; são expressões de identidade 
                  e pertencimento que fortalecem os laços entre os torcedores e o clube.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇱</span>
                <h4 className="text-2xl font-bold text-black">Identidade Nacional</h4>
              </div>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  O Colo-Colo representa muito mais do que um clube de futebol para os chilenos. É um símbolo 
                  de resistência, orgulho e identidade nacional. O clube está presente na vida cotidiana de 
                  milhões de pessoas, influenciando não apenas o esporte, mas também a cultura, a música e a 
                  vida social do país.
                </p>
                <p>
                  As conquistas do Colo-Colo são celebradas como vitórias nacionais, e os jogadores do clube 
                  são tratados como heróis. O clube transcende o futebol e se torna parte da história e da 
                  memória coletiva do povo chileno.
                </p>
              </div>
            </div>
          </div>
          
          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🌟</span>
              <div>
                <p className="text-gray-900 text-xl font-semibold mb-2">Impacto Cultural</p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  O Colo-Colo não é apenas um clube; é uma instituição 
                  que molda a identidade chilena. Suas cores, seu hino, seus símbolos e sua história estão 
                  profundamente enraizados na cultura nacional, fazendo do clube uma parte indissociável da 
                  alma do povo chileno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture

