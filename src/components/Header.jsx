import React from 'react'

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Efeito de fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
        <div className="inline-block mb-6">
          <span className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
            Clube de Futebol Chileno
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Tudo sobre o Colo-Colo
          </span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90">
            História, Conquistas e Cultura
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
          Descubra tudo sobre o clube mais tradicional do Chile
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
        </div>
      </div>
    </header>
  )
}

export default Header

