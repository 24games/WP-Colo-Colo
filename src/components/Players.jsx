import React from 'react'

const Players = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Principais Jogadores da História
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-3">⭐ Carlos Caszely</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Conhecido como "El Rey del Gol" (O Rei do Gol), Carlos Caszely é considerado um dos maiores 
              ídolos da história do Colo-Colo. Maior artilheiro da história do clube, Caszely marcou mais 
              de 200 gols e foi fundamental nas conquistas dos anos 1970 e 1980. Sua paixão e dedicação ao 
              clube o transformaram em um símbolo eterno do Colo-Colo.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-3">⭐ Elías Figueroa</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Considerado um dos melhores zagueiros da história do futebol sul-americano, Elías Figueroa 
              defendeu as cores do Colo-Colo com maestria. Sua elegância em campo, liderança e capacidade 
              técnica fizeram dele uma lenda não apenas do clube, mas do futebol mundial. Figueroa é 
              lembrado como um dos maiores defensores que já vestiu a camisa alvinegra.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-3">⭐ Arturo Vidal</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Arturo Vidal começou sua carreira nas categorias de base do Colo-Colo e rapidamente se 
              destacou como um dos maiores talentos do futebol chileno. Após brilhar no clube, Vidal 
              conquistou títulos importantes na Europa e se tornou uma peça fundamental da seleção 
              chilena que venceu duas Copas América consecutivas. Sua trajetória é um exemplo do 
              poder formador do Colo-Colo.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-black">
            <h3 className="text-2xl font-bold text-black mb-3">⭐ Outros Grandes Nomes</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              A história do Colo-Colo é repleta de grandes jogadores que marcaram época. Nomes como 
              <strong className="text-black"> Marcelo Barticciotto</strong>, <strong className="text-black">Leonel Sánchez</strong>, 
              <strong className="text-black"> Esteban Paredes</strong>, <strong className="text-black">Matías Fernández</strong> e 
              <strong className="text-black"> Alexis Sánchez</strong> (que também passou pelas categorias de base) são apenas alguns 
              exemplos de talentos que vestiram a camisa do clube e deixaram sua marca na história.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              O Colo-Colo sempre foi reconhecido por sua capacidade de formar e desenvolver jovens talentos. 
              A escola de futebol do clube é uma das mais respeitadas do Chile e tem sido fundamental para 
              o desenvolvimento de gerações de jogadores que não apenas brilharam no clube, mas também 
              representaram a seleção chilena em competições internacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Players

