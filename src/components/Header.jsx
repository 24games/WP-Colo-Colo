import React from 'react'

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Efeito de fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
        {/* Logo do Colo-Colo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img 
                src="/images/logo-colo-colo.png" 
                alt="Logo Colo-Colo" 
                className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback se a imagem não existir
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className="logo-fallback hidden w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/30 items-center justify-center text-4xl md:text-5xl font-bold absolute inset-0"
              >
                CC
              </div>
            </div>
          </div>
        </div>
        
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

