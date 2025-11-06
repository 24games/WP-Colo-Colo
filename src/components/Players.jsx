import React from 'react'

const Players = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Principales Jugadores de la Historia
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Leyendas que marcaron la historia del club</p>
        </div>
        
        <div className="space-y-6 animate-slide-up">
          {/* Carlos Caszely */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="https://imagenes.elpais.com/resizer/v2/PK4UTWKOOHZXRFCLCZBUHQZPBM.jpg?auth=2385db231c8c4e4959ad7c083b61cc9eb381a3a1cae982542a66df07826374ca&width=1200" 
                    alt="Carlos Caszely" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/carlos-caszely.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Carlos Caszely</h3>
                  <span className="text-sm font-semibold text-gray-500 italic">"El Rey del Gol"</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Considerado uno de los mayores ídolos de la historia del Colo-Colo, Carlos Caszely es el mayor goleador de la historia del club, 
                  marcando más de <span className="font-bold text-black">200 goles</span>. Fue fundamental en las conquistas de los años <span className="font-semibold">1970 y 1980</span>. 
                  Su pasión y dedicación al club lo transformaron en un símbolo eterno del Colo-Colo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Elías Figueroa */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-gray-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="https://lendasdofutebol.com/wp-content/uploads/2021/12/elias-figueroa-350x260-1-optimized.jpg" 
                    alt="Elías Figueroa" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/elias-figueroa.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Elías Figueroa</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Considerado uno de los mejores defensores de la historia del fútbol sudamericano, Elías Figueroa 
                  defendió los colores del Colo-Colo con maestría. Su elegancia en la cancha, liderazgo y capacidad 
                  técnica lo hicieron una leyenda no solo del club, sino del fútbol mundial. Figueroa es 
                  recordado como uno de los mayores defensores que vistió la camiseta alvinegra.
                </p>
              </div>
            </div>
          </div>
          
          {/* Arturo Vidal */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-black hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chile_VS._Australia_%2813%29_2017-6-25_Arturo_Vidal.jpg/250px-Chile_VS._Australia_%2813%29_2017-6-25_Arturo_Vidal.jpg" 
                    alt="Arturo Vidal" 
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/arturo-vidal.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⭐</span>
                  <h3 className="text-3xl font-bold text-black">Arturo Vidal</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Arturo Vidal comenzó su carrera en las divisiones inferiores del Colo-Colo y rápidamente se 
                  destacó como uno de los mayores talentos del fútbol chileno. Tras brillar en el club, Vidal 
                  conquistó títulos importantes en Europa y se convirtió en una pieza fundamental de la selección 
                  chilena que ganó <span className="font-semibold">dos Copas América consecutivas</span>. Su trayectoria es un ejemplo del 
                  poder formador del Colo-Colo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Outros Jogadores */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border-l-4 border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">⭐</span>
              <h3 className="text-3xl font-bold text-black">Otros Grandes Nombres</h3>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                La historia del Colo-Colo está llena de grandes jugadores que marcaron época. Nombres como 
                <strong className="text-black"> Marcelo Barticciotto</strong>, <strong className="text-black">Leonel Sánchez</strong>, 
                <strong className="text-black"> Esteban Paredes</strong>, <strong className="text-black">Matías Fernández</strong> y 
                <strong className="text-black"> Alexis Sánchez</strong> (que también pasó por las divisiones inferiores) son solo algunos 
                ejemplos de talentos que vistieron la camiseta del club y dejaron su marca en la historia.
              </p>
              <p>
                El Colo-Colo siempre ha sido reconocido por su capacidad de formar y desarrollar jóvenes talentos. 
                La escuela de fútbol del club es una de las más respetadas de Chile y ha sido fundamental para 
                el desarrollo de generaciones de jugadores que no solo brillaron en el club, sino que también 
                representaron a la selección chilena en competencias internacionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Players
