# 🚀 Como Iniciar

## Passo 1: Instalar Dependências
```bash
npm install
```

## Passo 2: Rodar em Desenvolvimento
```bash
npm run dev
```

Acesse: http://localhost:5173

## Passo 3: Build para Produção
```bash
npm run build
```

## Passo 4: Deploy
Opção 1 (Vercel - Recomendado):
```bash
npm i -g vercel
vercel
```

Opção 2 (Netlify):
Arraste a pasta `dist/` para https://app.netlify.com/drop

## 📝 O que Editar Antes do Lançamento

### 1. Informações de Contato
**Arquivo:** `src/components/Contact.jsx`
- Telefone: Linha 32
- Email: Linha 36
- WhatsApp: Linha 49

**Arquivo:** `src/components/Footer.jsx`
- Telefone: Linha 37
- Email: Linha 40

### 2. SEO e Meta Tags
**Arquivo:** `src/components/SEO.jsx`
- Canonical URL: Linha 13
- OG URL: Linha 14
- OG Image: Linha 13

**Arquivo:** `index.html`
- Title e meta tags já otimizados

### 3. Imagens
Substitua as imagens do Unsplash por fotos reais:
- `src/components/Hero.jsx` - Linha 11
- `src/components/About.jsx` - Linha 11
- `src/components/Footer.jsx` - Linha 7 (logo)

### 4. Dados Estruturados
**Arquivo:** `src/components/SEO.jsx`
- Informações do LocalBusiness: Linhas 41-56
- Informações do Service: Linhas 57-72

## 🎯 Checklist Rápido

- [ ] Atualizar telefone
- [ ] Atualizar email
- [ ] Atualizar WhatsApp
- [ ] Substituir imagens por fotos reais
- [ ] Atualizar localização
- [ ] Testar formulário de contato
- [ ] Testar responsividade
- [ ] Verificar meta tags
- [ ] Fazer deploy
- [ ] Adicionar ao Google Search Console

## 📞 Suporte

Para dúvidas sobre SEO, leia `SEO_INSTRUCOES.md`

Para documentação completa, leia `README.md`
