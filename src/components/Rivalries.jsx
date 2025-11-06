import React from 'react'

const Rivalries = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Rivalidades
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Enfrentamientos que definen la pasión del fútbol chileno</p>
        </div>
        
        <div className="space-y-8 animate-slide-up">
          {/* Superclásico - Destaque */}
          <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://scontent.fssa9-1.fna.fbcdn.net/v/t39.30808-6/433117561_1325380551624953_3760851706289677166_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_ohc=gqXRGKgBoXsQ7kNvwHPamo6&_nc_oc=AdlnuZxJ_QtiyJXnacixW95-FoaTGy8PiSlfXbXvsfl_gAXpmgc58QM6mUjVeYVxSJY&_nc_zt=23&_nc_ht=scontent.fssa9-1.fna&_nc_gid=PW2s-i58_VS1ZeRm54ZBHA&oh=00_AfgjfKFf2xCdiYZujUC6E2-PAEyOqmDVcT7O4d4qZP5QCQ&oe=69127467" 
                alt="Superclásico Chileno" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10 p-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">⚔️</span>
                <h3 className="text-3xl md:text-4xl font-bold">El Superclásico Chileno</h3>
              </div>
              <p className="text-2xl font-semibold mb-6 text-red-100">Colo-Colo vs Universidad de Chile</p>
              <div className="space-y-4 text-lg text-red-50 leading-relaxed">
                <p>
                  La rivalidad entre el <strong className="text-white">Colo-Colo</strong> y la <strong className="text-white">Universidad de Chile</strong> 
                  (conocida como "La U") es considerada una de las más intensas y apasionadas del fútbol sudamericano. 
                  Este enfrentamiento, bautizado como <strong className="text-white text-xl">"Superclásico Chileno"</strong>, va mucho más allá de un simple partido de fútbol.
                </p>
                <p>
                  El Superclásico representa un choque de identidades: el Colo-Colo, club tradicional y popular, contra 
                  la Universidad de Chile, representante de la clase media e intelectual. Cuando estos dos gigantes se 
                  enfrentan, Chile prácticamente se detiene. Millones de personas siguen el partido, y las calles se llenan de 
                  hinchas vistiendo los colores de sus clubes.
                </p>
                <p>
                  La tensión y la emoción de estos enfrentamientos son indescriptibles. Cada gol, cada jugada, cada decisión del 
                  árbitro se siente con máxima intensidad. El Superclásico no es solo un partido; es un evento cultural 
                  que define la identidad futbolística chilena y continúa siendo el enfrentamiento más esperado y 
                  significativo del calendario deportivo del país.
                </p>
              </div>
            </div>
          </div>
          
          {/* Outras Rivalidades */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              Otras Rivalidades Importantes
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Además del enfrentamiento con la Universidad de Chile, el Colo-Colo mantiene rivalidades históricas con otros 
              clubes chilenos, como la <span className="font-semibold">Universidad Católica</span> y el <span className="font-semibold">Audax Italiano</span>. Estos enfrentamientos regionales y nacionales 
              también generan gran expectativa y pasión, pero ninguno de ellos alcanza la magnitud e intensidad del 
              Superclásico contra La U.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rivalries
