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
            Conclusión
          </span>
        </h2>
        
        <div className="space-y-6 text-xl leading-relaxed text-gray-200 mb-12">
          <p>
            El <strong className="text-white text-2xl">Colo-Colo</strong> no es solo un club de fútbol. Es una institución que representa 
            la esencia del fútbol chileno, una parte vital de la cultura y la historia de Chile. Desde su 
            fundación en <span className="font-semibold">1925</span>, el club ha sido mucho más que un equipo que juega fútbol; ha sido un 
            símbolo de orgullo, resistencia e identidad nacional.
          </p>
          <p>
            Con sus <span className="font-bold text-white">33 conquistas</span> del Campeonato Chileno, su histórica <span className="font-bold text-yellow-300">Copa Libertadores de 1991</span>, sus 
            millones de hinchas apasionados y su rica tradición, el Colo-Colo continuará siendo el mayor 
            símbolo del fútbol de Chile por muchas décadas. El club trasciende el deporte y se convierte en parte 
            de la memoria colectiva y la identidad cultural del pueblo chileno.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <p className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¡Vive la historia del Colo-Colo y continúa siguiendo las futuras conquistas!
          </p>
          <p className="text-xl text-gray-200 leading-relaxed">
            El legado del Cacique continúa vivo, y cada nuevo partido, cada nueva conquista, escribe un capítulo más 
            en la gloriosa historia de este club inmortal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
