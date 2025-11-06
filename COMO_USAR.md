# 🚀 Como Usar a Landing Page do Colo-Colo

## ⚡ Início Rápido

### Opção 1: Usando o Script Automático (Recomendado)

**No Windows:**
- Clique duas vezes no arquivo `iniciar.bat`
- OU execute no PowerShell: `.\iniciar.ps1`

### Opção 2: Manualmente

1. **Abra o terminal** na pasta do projeto

2. **Instale as dependências** (se ainda não instalou):
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   - O Vite mostrará uma mensagem como:
     ```
     ➜  Local:   http://localhost:5173/
     ```
   - Clique no link ou copie e cole no navegador

## ⚠️ IMPORTANTE

- **NÃO abra o arquivo `index.html` diretamente no navegador**
- O servidor de desenvolvimento **DEVE estar rodando** para a página funcionar
- Use sempre o endereço fornecido pelo Vite (geralmente `http://localhost:5173/`)

## 🛠️ Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma versão de produção (pasta `dist`)
- `npm run preview` - Visualiza a versão de produção

## 🔧 Solução de Problemas

### Página em branco?
1. Verifique se o servidor está rodando (deve aparecer uma mensagem no terminal)
2. Certifique-se de estar acessando `http://localhost:5173/` e não o arquivo HTML
3. Abra o console do navegador (F12) para ver erros
4. Tente parar o servidor (Ctrl+C) e iniciar novamente

### Erro ao instalar dependências?
```bash
npm cache clean --force
npm install
```

### Porta 5173 já está em uso?
O Vite tentará usar outra porta automaticamente. Veja a mensagem no terminal.

## 📝 Estrutura do Projeto

```
WP Colo-Colo/
├── src/
│   ├── components/     # Componentes React
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Ponto de entrada
│   └── index.css       # Estilos Tailwind
├── index.html          # HTML principal
├── package.json        # Dependências
└── vite.config.js      # Configuração do Vite
```

## ✅ Status

Se você está vendo esta mensagem, o projeto está configurado corretamente!

Para iniciar, execute: `npm run dev`

