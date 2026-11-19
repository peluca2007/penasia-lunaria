# Penasia

> **Sistema de RPG de mesa em desenvolvimento.**
> Todo poder é crédito. Toda dívida é cobrada.

Penasia é um RPG de mesa em que o personagem é feito de **sete pecados**, cada um com um dado de d4 a d12. O combate é tático, a morte é uma cena e o poder sobrenatural é um empréstimo que alguém vai cobrar.

## Como nasceu

Penasia foi o cenário da minha **primeira campanha**, a primeira de uma série de histórias que se passam no mesmo mundo. Rodei a campanha com um sistema que já existia, mas ele não combinava com o mundo: ficou desajeitado e feio de jogar. Decidi então criar um **sistema próprio**, feito sob medida para esse mundo.

No caminho a ordem das coisas mudou: o que era para ser só um cenário virou um livro de regras, e o livro ainda está sendo escrito.

## Estado atual

- 🛠️ O sistema ainda está **em desenvolvimento**: nada aqui é versão final e as regras mudam com frequência.
- 🌐 Falta **fazer o site** do livro. Já existe uma primeira versão em `site/`, mas ainda não está publicada.
- 🎲 Nada foi testado em mesa de verdade ainda; a primeira sessão de teste vai mudar coisas.

## O que tem aqui

| Pasta | O que é |
|---|---|
| `site/` | Site do livro, feito com [Astro](https://astro.build). Capítulos em `site/src/pages/*.md` |
| `Penasia Vault/` | Notas de trabalho: auditoria, redesenho, mecânicas, decisões |
| `imagens para o livro/` | Imagens de apoio |
| `ficha-previa.pdf` | Prévia da ficha de personagem |

## Rodar o site

```sh
cd site
npm install
npm run dev
```

Abre em `http://localhost:4321`.
