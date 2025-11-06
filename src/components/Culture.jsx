import React from 'react'

const Culture = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Cultura e Torcida
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">💪 A Paixão dos Torcedores</h3>
            <p className="mb-4">
              A torcida do Colo-Colo, conhecida como <strong>"Los Garra Blanca"</strong> (A Garra Branca), 
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
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">🎵 Rituais e Tradições</h4>
              <p className="text-gray-700 mb-3">
                Os rituais da torcida do Colo-Colo são parte fundamental da identidade do clube. Os cânticos 
                tradicionais, as bandeiras gigantes, os fogos de artifício e as coreografias nas arquibancadas 
                criam um espetáculo visual e sonoro impressionante.
              </p>
              <p className="text-gray-700">
                Cada jogo no Monumental é uma celebração, uma festa onde milhares de pessoas se unem em torno 
                de uma paixão comum. Esses rituais não são apenas entretenimento; são expressões de identidade 
                e pertencimento que fortalecem os laços entre os torcedores e o clube.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-black mb-3">🇨🇱 Identidade Nacional</h4>
              <p className="text-gray-700 mb-3">
                O Colo-Colo representa muito mais do que um clube de futebol para os chilenos. É um símbolo 
                de resistência, orgulho e identidade nacional. O clube está presente na vida cotidiana de 
                milhões de pessoas, influenciando não apenas o esporte, mas também a cultura, a música e a 
                vida social do país.
              </p>
              <p className="text-gray-700">
                As conquistas do Colo-Colo são celebradas como vitórias nacionais, e os jogadores do clube 
                são tratados como heróis. O clube transcende o futebol e se torna parte da história e da 
                memória coletiva do povo chileno.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
            <p className="text-gray-800 text-lg">
              <strong>🌟 Impacto Cultural:</strong> O Colo-Colo não é apenas um clube; é uma instituição 
              que molda a identidade chilena. Suas cores, seu hino, seus símbolos e sua história estão 
              profundamente enraizados na cultura nacional, fazendo do clube uma parte indissociável da 
              alma do povo chileno.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Culture

