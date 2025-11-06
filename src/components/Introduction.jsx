import React from 'react'

const Introduction = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto animate-slide-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Introducción al Colo-Colo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Un viaje a través de la historia y la pasión</p>
        </div>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              Fundado el <span className="font-bold text-black">19 de abril de 1925</span>, el <strong className="text-black text-xl">Colo-Colo</strong> es mucho más que un simple club de fútbol. 
              Es una institución que representa la esencia del fútbol chileno y se ha consolidado como el club más tradicional 
              y relevante del país. Con casi un siglo de historia, el Colo-Colo no solo ha conquistado títulos, sino que también 
              se ha convertido en parte fundamental de la identidad cultural chilena.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              Con una base de fanáticos masiva que supera millones de hinchas en todo Chile, el Colo-Colo es el club más 
              popular del país. Su hinchada, conocida como <span className="font-semibold italic">"Los Albos"</span> o <span className="font-semibold italic">"El Cacique"</span>, es una de las más apasionadas y 
              dedicadas del continente sudamericano. El club no es solo un equipo de fútbol, sino un símbolo de 
              orgullo nacional que une a personas de todas las clases sociales y regiones de Chile.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl leading-relaxed">
              El impacto cultural del Colo-Colo va mucho más allá de las cuatro líneas de la cancha. El club influye en la música, 
              el arte, la política y la vida social chilena. Sus partidos son eventos que movilizan todo el país, y sus 
              conquistas se celebran como victorias nacionales. El Colo-Colo representa la resistencia, la pasión y la 
              determinación del pueblo chileno, siendo una parte indisoluble de la historia y la cultura de Chile.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
