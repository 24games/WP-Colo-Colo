# Instruções para Executar a Landing Page

## ⚠️ IMPORTANTE: Não abra o index.html diretamente no navegador!

A landing page usa React e Vite, que precisam processar os arquivos antes de exibir no navegador. Abrir o `index.html` diretamente não funcionará.

## 📋 Passos para Executar:

### 1. Instalar as Dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
Após instalar as dependências, execute:
```bash
npm run dev
```

### 3. Acessar no Navegador
O Vite irá iniciar um servidor local. Você verá uma mensagem como:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Acesse o endereço mostrado (geralmente `http://localhost:5173/`) no seu navegador.

## 🔧 Solução de Problemas

### Se a página estiver em branco:
1. Verifique se todas as dependências foram instaladas: `npm install`
2. Verifique se o servidor está rodando: `npm run dev`
3. Abra o console do navegador (F12) para ver se há erros
4. Certifique-se de estar acessando o endereço fornecido pelo Vite, não o arquivo HTML diretamente

### Para criar uma versão de produção:
```bash
npm run build
```

Isso criará uma pasta `dist` com os arquivos otimizados para produção.

