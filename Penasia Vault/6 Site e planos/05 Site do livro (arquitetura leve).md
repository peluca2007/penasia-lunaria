---
tags: [penasia, site]
---
# Site do livro — arquitetura leve

Baseado na leitura (somente leitura) do livro do Moshoku. Nada lá foi alterado.

## Por que o livro do Moshoku trava
1. **~248 páginas no DOM ao mesmo tempo**, numa única caixa de colunas CSS gigante. Causa principal: toda repintura redesenha tudo.
2. **Paginação medida no navegador**: dezenas de passes de JS com `getBoundingClientRect` (reflow forçado) a cada resize; o livro só aparece depois de `document.fonts.ready`.
3. `perspective` no contêiner de todas as páginas (busca levava 4–8 s antes de corrigirem).
4. `backdrop-filter`, 5.489 linhas de CSS, componente client de 1.851 linhas, conteúdo todo serializado de uma vez.
5. `<img>` sem lazy-load.

## O que copiar
- Página fixa (Carta), 2 colunas, capa de couro, escala para caber + zoom
- Número de página estável, sumário com régua, busca com realce
- Alternar livro/contínuo, papel dia/noite, tela cheia, imprimir/PDF
- Virada de folha curta (~460 ms), respeitando `prefers-reduced-motion`

## Como fazer leve (Penasia)
- **Pré-paginar no build** (JSON de páginas por capítulo). Nada de medir no cliente.
- **Renderizar só a dupla atual ± vizinhas** (virtualização).
- Virada com **uma folha falsa**, só `transform`/`opacity`, `perspective()` dentro do transform. Sem blur.
- Imagens webp + `next/image` lazy; fontes via `next/font`.
- 1–2 listeners, sem framer-motion.
- Modo **leitura contínua** como padrão no celular.

Voltar: [[00 Índice]]
