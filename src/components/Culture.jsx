import React from 'react'

const Culture = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Cultura e Hinchada
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">La pasión que trasciende el fútbol</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Card Principal */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white p-10 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">💪</span>
                <h3 className="text-3xl md:text-4xl font-bold">La Pasión de los Hinchas</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  La hinchada del Colo-Colo, conocida como <strong className="text-white text-xl">"Los Garra Blanca"</strong> (La Garra Blanca), 
                  es una de las más apasionadas y organizadas de Sudamérica. Con millones de hinchas repartidos 
                  por todo Chile y el mundo, el Colo-Colo posee una base de fanáticos que trasciende generaciones y 
                  clases sociales.
                </p>
                <p>
                  El apoyo fervoroso de la hinchada es una característica marcante del club. En los partidos en el Estadio Monumental, 
                  las tribunas se transforman en un mar de negro y blanco, con cánticos que resuenan por toda la ciudad. 
                  La energía y la pasión de los hinchas son palpables, creando una atmósfera única que pocos clubes en el 
                  mundo logran igualar.
                </p>
              </div>
            </div>
          </div>
          
          {/* Grid de Informações */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎵</span>
                <h4 className="text-2xl font-bold text-black">Rituales y Tradiciones</h4>
              </div>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  Los rituales de la hinchada del Colo-Colo son parte fundamental de la identidad del club. Los cánticos 
                  tradicionales, las banderas gigantes, los fuegos artificiales y las coreografías en las tribunas 
                  crean un espectáculo visual y sonoro impresionante.
                </p>
                <p>
                  Cada partido en el Monumental es una celebración, una fiesta donde miles de personas se unen en torno 
                  a una pasión común. Estos rituales no son solo entretenimiento; son expresiones de identidad 
                  y pertenencia que fortalecen los lazos entre los hinchas y el club.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇱</span>
                <h4 className="text-2xl font-bold text-black">Identidad Nacional</h4>
              </div>
              <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <p>
                  El Colo-Colo representa mucho más que un club de fútbol para los chilenos. Es un símbolo 
                  de resistencia, orgullo e identidad nacional. El club está presente en la vida cotidiana de 
                  millones de personas, influyendo no solo en el deporte, sino también en la cultura, la música y la 
                  vida social del país.
                </p>
                <p>
                  Las conquistas del Colo-Colo se celebran como victorias nacionales, y los jugadores del club 
                  son tratados como héroes. El club trasciende el fútbol y se convierte en parte de la historia y de la 
                  memoria colectiva del pueblo chileno.
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
                  El Colo-Colo no es solo un club; es una institución 
                  que moldea la identidad chilena. Sus colores, su himno, sus símbolos y su historia están 
                  profundamente arraigados en la cultura nacional, haciendo del club una parte indisoluble del 
                  alma del pueblo chileno.
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
