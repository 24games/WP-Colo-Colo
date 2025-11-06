import React from 'react'

const Conclusion = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      
      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Conclusão
          </span>
        </h2>
        
        <div className="space-y-6 text-xl leading-relaxed text-gray-200 mb-12">
          <p>
            O <strong className="text-white text-2xl">Colo-Colo</strong> não é apenas um clube de futebol. É uma instituição que representa 
            a essência do futebol chileno, uma parte vital da cultura e da história do Chile. Desde sua 
            fundação em <span className="font-semibold">1925</span>, o clube tem sido muito mais do que um time que joga futebol; tem sido um 
            símbolo de orgulho, resistência e identidade nacional.
          </p>
          <p>
            Com suas <span className="font-bold text-white">33 conquistas</span> do Campeonato Chileno, sua histórica <span className="font-bold text-yellow-300">Copa Libertadores de 1991</span>, seus 
            milhões de torcedores apaixonados e sua rica tradição, o Colo-Colo continuará sendo o maior 
            símbolo do futebol do Chile por muitas décadas. O clube transcende o esporte e se torna parte 
            da memória coletiva e da identidade cultural do povo chileno.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <p className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Viva a história do Colo-Colo e continue acompanhando as futuras conquistas!
          </p>
          <p className="text-xl text-gray-200 leading-relaxed">
            O legado do Cacique continua vivo, e cada novo jogo, cada nova conquista, escreve mais um 
            capítulo na gloriosa história deste clube imortal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Conclusion

