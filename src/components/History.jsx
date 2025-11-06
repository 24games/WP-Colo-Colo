import React from 'react'

const History = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Historia del Colo-Colo
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Un viaje épico a través de las décadas</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Fundación */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-3xl font-bold text-black">La Fundación y los Primeros Años</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                El Colo-Colo fue fundado el <span className="font-semibold text-black">19 de abril de 1925</span> por un grupo de jugadores liderados por <span className="font-semibold">David Arellano</span>, 
                que se separaron del Magallanes tras desacuerdos. El nombre "Colo-Colo" fue elegido en homenaje a 
                un importante líder mapuche, reflejando la identidad chilena del club desde sus primeros días. 
                Los colores negro y blanco fueron adoptados como símbolo de elegancia y tradición.
              </p>
              <p>
                En los primeros años, el Colo-Colo rápidamente se estableció como una fuerza dominante en el fútbol chileno. 
                El club conquistó su primer título nacional en <span className="font-semibold">1937</span> y, desde entonces, nunca dejó de crecer. 
                La década de 1940 fue especialmente marcante, con el club conquistando varios títulos consecutivos y 
                consolidando su hegemonía en el fútbol chileno.
              </p>
            </div>
          </div>
          
          {/* Décadas de Glória */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-l-4 border-gray-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-3xl font-bold text-black">Décadas de Gloria y Transformación</h3>
            </div>
            
            {/* Imagem do Estádio Monumental */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://cdn.conmebol.com/wp-content/uploads/2016/08/monumentalchile1.jpg" 
                alt="Estadio Monumental David Arellano" 
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.src = 'https://ebco.cl/assets/projects/proyectos/estadio-monumental-y-casa-alba-1.jpg';
                }}
              />
            </div>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A lo largo de las décadas siguientes, el Colo-Colo pasó por varias fases de transformación. En las décadas de <span className="font-semibold">1960 
                y 1970</span>, el club continuó dominando el escenario nacional, mientras comenzaba a hacer historia en competencias 
                internacionales. La construcción del <span className="font-semibold">Estadio Monumental</span> en la década de 1970 marcó un nuevo capítulo en la historia 
                del club, proporcionando un hogar digno para sus millones de hinchas.
              </p>
              <p>
                La década de <span className="font-semibold text-black">1990</span> fue el auge del Colo-Colo. Con un equipo talentoso y bien estructurado, el club alcanzó 
                conquistas históricas que hasta hoy son recordadas con orgullo por toda la nación chilena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History
