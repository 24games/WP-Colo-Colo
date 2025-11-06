# 📸 Guia Visual Passo a Passo

## 🎯 OBJETIVO: Fazer a Landing Page funcionar

---

## PASSO 1: Abrir o Terminal

### Windows:
1. Pressione `Windows + R`
2. Digite: `cmd` ou `powershell`
3. Pressione Enter

### Ou mais fácil:
- Clique duas vezes no arquivo: **`INICIAR-AGORA.bat`**

---

## PASSO 2: Navegar até a Pasta do Projeto

No terminal, digite:
```bash
cd "C:\Users\PC BRANCO\Downloads\WhitePage\WP Colo-Colo"
```

**OU** se já estiver na pasta, pule para o Passo 3.

---

## PASSO 3: Instalar Dependências (se necessário)

Digite:
```bash
npm install
```

Aguarde terminar. Você verá algo como:
```
added 215 packages
```

---

## PASSO 4: Iniciar o Servidor

Digite:
```bash
npm run dev
```

---

## PASSO 5: Ver a Mensagem do Vite

Você DEVE ver algo assim:
```
VITE v5.4.21  ready in 269 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**IMPORTANTE:** Se você NÃO ver essa mensagem, há um problema!

---

## PASSO 6: Abrir no Navegador

### Opção A - Automático:
- O script `INICIAR-AGORA.bat` abre automaticamente

### Opção B - Manual:
1. Copie o endereço: `http://localhost:5173/`
2. Cole no navegador (Chrome, Firefox, Edge, etc.)
3. Pressione Enter

---

## PASSO 7: Verificar se Funcionou

### ✅ FUNCIONOU se você ver:
- Um cabeçalho preto com o título "Tudo sobre o Colo-Colo"
- Texto sobre o clube
- Seções com informações

### ❌ NÃO FUNCIONOU se você ver:
- Página completamente branca
- Erro 404
- Mensagem de erro

---

## 🐛 Se NÃO Funcionou:

### 1. Abra o Console do Navegador
- Pressione **F12**
- Vá na aba **Console**
- Veja se há erros em vermelho

### 2. Me diga:
- O que aparece na tela?
- Há erros no Console?
- Qual é a mensagem exata do erro?

### 3. Verifique o Terminal
- O servidor ainda está rodando?
- Há mensagens de erro no terminal?

---

## 📋 Checklist Rápido:

- [ ] Node.js está instalado? (`node --version`)
- [ ] Estou na pasta correta?
- [ ] Executei `npm install`?
- [ ] Executei `npm run dev`?
- [ ] Vi a mensagem do Vite com o endereço?
- [ ] Acessei `http://localhost:5173/` no navegador?
- [ ] O servidor ainda está rodando no terminal?

---

## 🆘 Ainda Não Funciona?

Execute estes comandos na ordem:

```bash
# 1. Parar processos Node (se houver)
taskkill /F /IM node.exe

# 2. Limpar cache
npm cache clean --force

# 3. Reinstalar
npm install

# 4. Iniciar
npm run dev
```

---

## 💡 Dica Final:

**NÃO feche o terminal enquanto estiver usando a página!**

O servidor precisa estar rodando para a página funcionar.

