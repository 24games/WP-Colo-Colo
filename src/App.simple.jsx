// Versão simplificada para teste
import React from 'react'

function AppSimple() {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ 
        backgroundColor: '#000000', 
        color: '#ffffff', 
        padding: '40px', 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>
          Tudo sobre o Colo-Colo
        </h1>
        <p style={{ fontSize: '20px', margin: 0 }}>
          Descubra tudo sobre o clube mais tradicional do Chile
        </p>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
            Introdução ao Colo-Colo
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
            Fundado em 19 de abril de 1925, o <strong>Colo-Colo</strong> é muito mais do que um simples clube de futebol. 
            É uma instituição que representa a essência do futebol chileno e se consolidou como o clube mais tradicional 
            e relevante do país.
          </p>
        </section>
        
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '30px', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
            ✅ Se você está vendo esta página, o React está funcionando!
          </p>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
            Agora vamos carregar a versão completa com todos os componentes...
          </p>
        </div>
      </main>
      
      <footer style={{ 
        backgroundColor: '#1a1a1a', 
        color: '#999', 
        padding: '30px', 
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Esta página é exclusivamente informativa, sem fins lucrativos ou comerciais.
        </p>
      </footer>
    </div>
  )
}

export default AppSimple

