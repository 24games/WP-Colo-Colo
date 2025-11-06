import React from 'react'

const History = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              História do Colo-Colo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Uma jornada épica através das décadas</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Fundação */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-3xl font-bold text-black">A Fundação e os Primeiros Anos</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                O Colo-Colo foi fundado em <span className="font-semibold text-black">19 de abril de 1925</span> por um grupo de jogadores liderados por <span className="font-semibold">David Arellano</span>, 
                que se separaram do Magallanes após desentendimentos. O nome "Colo-Colo" foi escolhido em homenagem a 
                um importante líder mapuche, refletindo a identidade chilena do clube desde seus primeiros dias. 
                As cores preto e branco foram adotadas como símbolo de elegância e tradição.
              </p>
              <p>
                Nos primeiros anos, o Colo-Colo rapidamente se estabeleceu como uma força dominante no futebol chileno. 
                O clube conquistou seu primeiro título nacional em <span className="font-semibold">1937</span> e, desde então, nunca mais parou de crescer. 
                A década de 1940 foi especialmente marcante, com o clube conquistando vários títulos consecutivos e 
                consolidando sua hegemonia no futebol chileno.
              </p>
            </div>
          </div>
          
          {/* Décadas de Glória */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-l-4 border-gray-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-3xl font-bold text-black">Décadas de Glória e Transformação</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Ao longo das décadas seguintes, o Colo-Colo passou por várias fases de transformação. Nas décadas de <span className="font-semibold">1960 
                e 1970</span>, o clube continuou a dominar o cenário nacional, enquanto começava a fazer história em competições 
                internacionais. A construção do <span className="font-semibold">Estádio Monumental</span> na década de 1970 marcou um novo capítulo na história 
                do clube, proporcionando uma casa digna para seus milhões de torcedores.
              </p>
              <p>
                A década de <span className="font-semibold text-black">1990</span> foi o auge do Colo-Colo. Com uma equipe talentosa e bem estruturada, o clube alcançou 
                conquistas históricas que até hoje são lembradas com orgulho por toda a nação chilena.
              </p>
            </div>
          </div>
          
          {/* Copa Libertadores - Destaque */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-2xl">🏆</div>
                <h3 className="text-3xl md:text-4xl font-bold">A Copa Libertadores de 1991</h3>
              </div>
              <p className="text-2xl font-semibold mb-4 text-yellow-300">O Título Mais Importante</p>
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  O ano de <span className="font-bold text-white">1991</span> ficou marcado na história do futebol chileno como o momento em que o Colo-Colo conquistou 
                  a <strong className="text-yellow-300 text-xl">Copa Libertadores da América</strong>, o título mais prestigioso do continente. 
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
    </section>
  )
}

export default History

