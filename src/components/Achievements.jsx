import React from 'react'

const Achievements = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Principais Conquistas
        </h2>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">🏆 Copa Libertadores da América</h3>
            <p className="text-lg">1 título (1991) - Único clube chileno a conquistar este troféu</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">🏅 Campeonato Chileno (Primera División)</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">33 títulos</p>
              <p className="text-gray-700">O clube com mais títulos nacionais na história do Chile</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">🥇 Copa Chile</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">13 títulos</p>
              <p className="text-gray-700">Segundo maior campeão da competição</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">🌎 Recopa Sul-Americana</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">1 título (1992)</p>
              <p className="text-gray-700">Conquistada após a vitória na Libertadores</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-black mb-3">⭐ Supercopa do Chile</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">2 títulos</p>
              <p className="text-gray-700">Títulos conquistados em 2017 e 2018</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-800 text-lg">
              <strong>Destaque:</strong> O Colo-Colo é o clube mais vencedor da história do futebol chileno, 
              com um total de mais de 50 títulos oficiais entre competições nacionais e internacionais. 
              Sua hegemonia no cenário nacional é inquestionável, e sua conquista da Copa Libertadores 
              em 1991 permanece como o maior feito do futebol chileno em competições continentais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

