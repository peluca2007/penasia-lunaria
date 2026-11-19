# Penasia

Livro de regras do sistema de RPG **Penasia**, publicado como site estático.

Feito com [Astro](https://astro.build): cada capítulo é uma página leve, sem JavaScript, e só a página de ferramentas (Roda interativa e calculadora de chances) carrega um script pequeno.

## Rodar no computador

```sh
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Editar o livro

Os capítulos ficam em `src/pages/`, um arquivo `.md` por capítulo. É texto comum em Markdown: edite e salve.

- Etiquetas de status: `<span class="st consenso">consenso</span>` (também `fechado`, `proposta`, `aberto`).
- Nota do revisor: um bloco `<div class="rev">` com o texto dentro, separado por linhas em branco.
- As figuras (Roda e mapa) são geradas por `node scripts/figuras.mjs`.

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe este repositório.
2. A Vercel reconhece o Astro sozinha: não precisa mudar nenhuma configuração.
3. Cada `git push` na branch `main` publica uma versão nova.

## Folhear e Central

- `/livro` é o livro em páginas para folhear, com setas, índice e papel dia/noite.
- `/central` mostra o progresso do livro, as decisões, as ideias e o diário.
- Os dados ficam em `src/data/central.json`.
- Para escrever na Central, rode `npm run dev`. No site publicado ela é só leitura.

## Imagens nos capítulos

- Coloque os arquivos em `public/img/` (de preferência `.webp`, até ~1600 px de largura).
- Markup nos `.md`: `<figure class="fig"><img src="/img/x.webp" alt="..." loading="lazy"><figcaption>Legenda</figcaption></figure>`.
- Variantes: `fig larga` (largura total), `fig pagina` (página inteira, começa em página nova, a imagem cobre a página) e `fig lado` (flutua à direita, metade da largura, só no modo contínuo; no folhear vira `fig` normal).
- No folhear a figura nunca é cortada: `break-inside: avoid` e altura máxima igual à altura útil da página menos a legenda.
- Sempre escreva `alt`. Em `fig pagina` use imagem na proporção de retrato (cerca de 560×672), pois ela é recortada com `object-fit: cover`.

## Preto, branco e pecado

- O livro é preto e branco. Cada capítulo pode ter `pecado:` no frontmatter (`ira`, `luxuria`, `preguica`, `ganancia`, `inveja`, `gula`, `orgulho`, `todos` ou `nenhum`): isso troca a cor (`--cor`) e o ornamento (`public/img/estilo/<pecado>.svg`).
- O começo de cada `.md` (o `chap`, o título e a `lede`) vira sozinho uma página de abertura negra (`src/lib/abertura.js`).
- Nas classes, a linha técnica da `lede` vira subtítulo e a frase "Em uma frase." da caixa vira a abertura.
- Visual xerox (Mörk Borg, Shadowdark, DCC): preto absoluto e papel, grão em SVG, títulos góticos tortos (Pirata One), rótulos em Anton, texto em Spectral. A cor do pecado só aparece como bloco chapado (texto sobre a cor é sempre preto).
- A gravura de cada abertura vem de `src/data/gravuras.js` (arquivos em `public/img/estilo/`, créditos em `CREDITOS.md`). Ela substitui a primeira figura da página e é tingida com a cor do pecado.
- `abertura: curta` no frontmatter faz uma abertura de faixa, sem página inteira (usada na Referência rápida).
- Legenda igual ao `alt` é escondida.
