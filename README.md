# Garimpada da Net

Vitrine de afiliados de tecnologia, áudio e produtos gamer, reformulada em Next.js e pronta para publicação na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validar e publicar

```bash
npm run build
```

Na Vercel, importe o repositório e mantenha as configurações automáticas de Next.js.

## Atualizar produtos

Os produtos ficam no array `products` em `app/page.tsx`. Para cada item, altere nome, categoria, destaque, imagem, descrição e link de afiliado. Confira os links antes de publicar: o HTML original usava o mesmo endereço do Mercado Livre em todos os cards.

Preços não são exibidos de propósito, pois podem mudar no marketplace. O rodapé informa que disponibilidade e valores são definidos pelo vendedor.
