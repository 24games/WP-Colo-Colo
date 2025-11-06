// Script de verificação
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando estrutura do projeto...\n');

const arquivosNecessarios = [
  'package.json',
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'index.html',
  'src/main.jsx',
  'src/App.jsx',
  'src/index.css',
  'src/components/Header.jsx',
  'src/components/Introduction.jsx',
  'src/components/History.jsx',
  'src/components/Achievements.jsx',
  'src/components/Rivalries.jsx',
  'src/components/Stadium.jsx',
  'src/components/Players.jsx',
  'src/components/Culture.jsx',
  'src/components/Future.jsx',
  'src/components/Conclusion.jsx',
  'src/components/Footer.jsx'
];

let todosOk = true;

arquivosNecessarios.forEach(arquivo => {
  const caminho = path.join(__dirname, arquivo);
  if (fs.existsSync(caminho)) {
    console.log(`✅ ${arquivo}`);
  } else {
    console.log(`❌ ${arquivo} - FALTANDO!`);
    todosOk = false;
  }
});

if (todosOk) {
  console.log('\n✅ Todos os arquivos necessários estão presentes!');
  console.log('📝 Execute: npm run dev');
} else {
  console.log('\n❌ Alguns arquivos estão faltando!');
}

