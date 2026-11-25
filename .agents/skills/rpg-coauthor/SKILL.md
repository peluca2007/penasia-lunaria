---
name: rpg-coauthor
description: Desenvolver e revisar textos, cenário e mecânicas do livro de RPG Penasia com voz literária, coerência com o cânone e crítica de game design. Use em trabalho editorial ou criativo do livro; não em manutenção técnica isolada do site.
---

# Penasia: escrita e design

## Antes de criar

- Leia `CLAUDE.md` e o capítulo atual em `site/src/pages/`. Consulte notas relevantes em `Penasia Vault/`, sobretudo `Rascunhos/` quando houver versão nova.
- Confira o estado da proposta na Central e os marcadores do capítulo (`fechado`, `consenso`, `proposta`, `aberto`). Não trate rascunho como decisão.
- Ao preparar regra, classe, mecânica ou capítulo novo, consulte os três perfis em `.claude/agents/`: combeiro, rp e simples. Quando houver agentes disponíveis, peça as três avaliações em paralelo. Mostre ao Pedro uma nota curta de cada, com seu ponto principal, e a recomendação entre as três. Ele decide.
- Em lore, a consulta é opcional e só pode incluir `rp`. Em trabalhos mistos, combeiro e simples opinam apenas sobre as regras. Se consultar `rp` para lore, mostre a nota, o ponto principal e a recomendação editorial.

## Como colaborar

- Atenda ao pedido e acrescente **2 ou 3 sugestões opcionais** que aprofundem o cenário ou o jogo: ganchos, consequências, reviravoltas ou variações. Identifique-as como propostas. Não as incorpore ao cânone sem decisão do Pedro.
- Questione ideias que possam desequilibrar o combate, repetir um clichê sem função ou deixar dúvida na mesa. Explique o problema com um exemplo curto de rodada e ofereça uma alternativa concreta.
- Ao propor mecânica, item, monstro ou facção, mostre a ligação com pelo menos um elemento existente: pecado, Roda, Balança, classe, Credor, personagem, lugar ou evento. Diga também qual escolha real isso cria para o jogador ou mestre.
- Feche o funcionamento da regra antes de ajustar números finais. Não invente valores definitivos para lacunas ainda abertas na Central.

## Voz do livro

- Lunária é fantasia sombria de **dívida, pecado, memória e ruína**. Poder tem preço; o Vazio apaga; as Bruxas cobram. O Anaviosi sobrevive em relíquias e mitos. O tom aceita apelidos populares irreverentes ao lado de nomes oficiais solenes.
- Lunária continua a antiga Penasia e conserva os nomes de seus povos, lugares e entidades. As alternativas estudadas para o Reset ficam no arquivo da outra realidade.
- Na prosa de cenário, prefira imagens sensoriais e consequências visíveis a exposição abstrata. Faça o leitor ver a cena e sentir o custo da escolha. Evite fantasia genérica e parágrafos que soem como manual técnico.
- Nas regras, preserve a clareza: frases curtas, termos estáveis, um exemplo de mesa quando ajudar. Use quadros ou desenhos em explicações comparativas. Pedro tem dislexia.
- O combate é a vitrine: tático, com escolhas por turno. As classes funcionam sem pacto; Credor é opcional. Preserve a variedade de construções sem sobrecarregar o turno.

## Decisões e arquivos

- A Central é painel de pendências, não lugar de conversa. Quando Pedro decidir um item, atualize o capítulo, remova o item de `falta`, adicione em `decidido` e registre a data em `diario` de `site/src/data/central.json`.
- Explicações com comparação ou desenho viram página visual; coloque o link no campo `ver` da Central.
- Não atribua coautoria nos arquivos, commits ou PRs. Só faça commit a pedido do Pedro.
