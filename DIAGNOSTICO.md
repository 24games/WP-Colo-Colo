# 🔍 Diagnóstico - Landing Page Colo-Colo

## ✅ Verificações que você deve fazer:

### 1. O servidor está rodando?
- Abra o terminal onde executou `npm run dev`
- Você deve ver uma mensagem como:
  ```
  VITE v5.4.21  ready in XXX ms
  ➜  Local:   http://localhost:5173/
  ```

### 2. Você está acessando o endereço correto?
- **CORRETO**: `http://localhost:5173/`
- **ERRADO**: Abrir o arquivo `index.html` diretamente

### 3. Verifique o Console do Navegador
1. Abra o navegador
2. Pressione **F12** (ou clique com botão direito > Inspecionar)
3. Vá na aba **Console**
4. Veja se há erros em vermelho

### 4. Verifique a Aba Network
1. No DevTools (F12), vá na aba **Network**
2. Recarregue a página (F5)
3. Veja se os arquivos estão carregando (status 200 = OK)

### 5. Limpe o Cache do Navegador
- Pressione **Ctrl + Shift + R** (recarregar forçado)
- Ou **Ctrl + F5**

## 🐛 Problemas Comuns e Soluções:

### Página completamente em branco
**Possíveis causas:**
1. Servidor não está rodando → Execute `npm run dev`
2. Acessando arquivo HTML diretamente → Use `http://localhost:5173/`
3. Erro de JavaScript → Verifique o Console (F12)

### Erro "Cannot find module"
**Solução:**
```bash
npm install
```

### Erro "Port already in use"
**Solução:**
- Pare o servidor (Ctrl+C)
- Ou o Vite tentará usar outra porta automaticamente

### Estilos não aparecem (Tailwind)
**Solução:**
1. Verifique se `src/index.css` existe e tem `@tailwind` directives
2. Verifique se `tailwind.config.js` está configurado
3. Reinicie o servidor

## 📝 O que verificar no Console:

### Se aparecer erro como:
- `Failed to load module` → Problema de importação
- `Cannot read property` → Erro em algum componente
- `Unexpected token` → Erro de sintaxe

**Me envie a mensagem de erro completa!**

## 🧪 Teste Rápido:

1. Abra o terminal
2. Execute: `npm run dev`
3. Aguarde ver: `Local: http://localhost:5173/`
4. Clique no link ou copie e cole no navegador
5. Pressione F12 e veja o Console
6. Me diga o que aparece!

