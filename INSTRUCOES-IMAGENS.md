# 📸 Instruções para Adicionar Imagens

## 📁 Onde Colocar as Imagens

Todas as imagens devem ser colocadas na pasta: `public/images/`

## 🖼️ Imagens Necessárias

### Logo
- **`logo-colo-colo.png`** ou **`logo-colo-colo.svg`**
  - Logo oficial do Colo-Colo
  - Tamanho recomendado: 400x400px
  - Formato: PNG com fundo transparente ou SVG

### Jogadores
- **`carlos-caszely.jpg`**
  - Foto de Carlos Caszely
  - Tamanho recomendado: 800x800px (quadrado)
  
- **`elias-figueroa.jpg`**
  - Foto de Elías Figueroa
  - Tamanho recomendado: 800x800px (quadrado)
  
- **`arturo-vidal.jpg`**
  - Foto de Arturo Vidal
  - Tamanho recomendado: 800x800px (quadrado)

### Estádio
- **`estadio-monumental.jpg`**
  - Foto externa do Estádio Monumental
  - Tamanho recomendado: 1920x1080px (landscape)
  
- **`estadio-interior.jpg`**
  - Foto do interior do estádio
  - Tamanho recomendado: 1920x1080px (landscape)

### Elenco
- **`elenco-atual.jpg`**
  - Foto do elenco atual do time
  - Tamanho recomendado: 1920x1080px (landscape)
  
- **`time-historico.jpg`**
  - Foto de um time histórico do Colo-Colo
  - Tamanho recomendado: 1920x1080px (landscape)

### Conquistas
- **`libertadores-1991.jpg`**
  - Foto da conquista da Copa Libertadores 1991
  - Tamanho recomendado: 1920x1080px (landscape)
  
- **`trofeus.jpg`**
  - Foto dos troféus do clube
  - Tamanho recomendado: 1920x1080px (landscape)

## 💡 Dicas Importantes

### Qualidade das Imagens
- Use imagens de alta qualidade (mínimo 1200px de largura)
- Formato recomendado: JPG para fotos, PNG/SVG para logos
- Otimize as imagens antes de adicionar (use ferramentas como TinyPNG ou ImageOptim)

### Nomenclatura
- Use nomes em minúsculas
- Separe palavras com hífens (ex: `carlos-caszely.jpg`)
- Não use espaços ou caracteres especiais

### Onde Encontrar Imagens
- Site oficial do Colo-Colo
- Wikimedia Commons
- Banco de imagens esportivas
- Redes sociais oficiais do clube
- Arquivos históricos do clube

## ⚠️ Fallback Automático

Se uma imagem não for encontrada, o sistema automaticamente exibirá:
- Um placeholder com as iniciais do jogador/clube
- Um gradiente elegante com ícone
- O conteúdo continuará funcionando normalmente

## ✅ Verificação

Após adicionar as imagens:
1. Execute `npm run dev`
2. Acesse `http://localhost:5173/`
3. Verifique se as imagens aparecem corretamente
4. Se alguma imagem não aparecer, verifique o console do navegador (F12)

## 📝 Estrutura Final

```
public/
  images/
    logo-colo-colo.png
    carlos-caszely.jpg
    elias-figueroa.jpg
    arturo-vidal.jpg
    estadio-monumental.jpg
    estadio-interior.jpg
    elenco-atual.jpg
    time-historico.jpg
    libertadores-1991.jpg
    trofeus.jpg
```

