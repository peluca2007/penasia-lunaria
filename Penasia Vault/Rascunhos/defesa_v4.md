---
tags: [penasia, combate, defesa, reação, firmar]
status: proposta (nada aplicado nos capítulos)
base: defesa_v3.md + decisões do mediador (rodada 3)
contas: scratchpad/defesa4.js (números) e scratchpad/ex4.js (dados dos exemplos)
---
# Defesa v4

O que mudou desde a v3:

- **Trava nova.** O Firme defende os **2 primeiros** golpes. Do 3º em diante: Aberto.
- **Firme, a Reação não te defende.** Ela fica para Proteger e golpe livre. (A maior dúvida do simples.)
- **Chefe:** golpes por rodada = metade dos heróis, para cima. Vida da fase = 10 por herói.
- **Bando:** 1 golpe livre por rodada, de graça.
- **Sem laço:** Revide e golpe livre não disparam Fere, Abre nem Revide. Fere: 1 vez por rodada em cada alvo.
- **Nomes:** Lê → **Pressente**. Usa → **Aproveita**. Cai → **Tomba**.
- **3 momentos de filme**, sem contador novo.
- **Roda fora da frente:** no cartão, só "quem me sobe". A roda inteira vai para o apêndice.

```
 GOLPES EM VOCÊ NA RODADA

 sem Firme:   1º [Reação]   2º [Aberto]   3º [Aberto]   ...
 Firme:       1º [Firme ]   2º [Firme ]   3º [Aberto]   ...   + Reação livre para Proteger
```

Fichas dos exemplos:

| Quem | Dados | Arma | Armadura | Vida |
|:--|:--|:-:|:-:|:-:|
| **Lia** (heroína) | Inveja d10 · Luxúria d8 · Ganância d8 · Ira d6 · Gula d6 · Preguiça d4 · Orgulho d4 | espada +3 | malha 2 | 16 |
| **Breu** (herói, mago) | Preguiça d8 · Luxúria d6 · resto d4 | cajado +1 | nada | 12 |
| **Tomé** (herói) | Ira d10 · Gula d8 · resto d6 | machado +4 | placas 3 | 18 |
| **Nina** (heroína) | Ganância d10 · Inveja d8 · resto d6 | arco +2 | couro 1 | 14 |
| **Ruivo** (rival) | Ira d10 · Preguiça d8 · Luxúria d6 · Gula d6 · Inveja d6 · Ganância d4 · Orgulho d4 | espada +3 | couro 1 | 35 |
| **Fria** (rival) | Ganância d10 · Gula d8 · Luxúria d8 · Inveja d6 · Ira d6 · Preguiça d4 · Orgulho d4 | espada +3 | couro 1 | 35 |
| **Rato** (bando) | d6 em tudo | faca +3 | nada | bando |
| **Mó** (chefe) | Gula d10 · Ira d10 · resto d6 | clava +4 | nada | 40 na fase |

Dano = número do dado + arma − armadura.

---

## A. A regra (para colar em combate.md)

```md
### A defesa

1. **Rodada** é a rodada de todos: cada um age uma vez.
2. No seu turno: **Movimento + Ação**. Fora dele: **1 Reação por rodada**. Ela volta no começo da rodada.
3. Quem ataca diz só o alvo. **O alvo fala primeiro**: "Reação: Danço!", "Estou Firme" ou nada.
4. Depois quem ataca escolhe o pecado. Os dois rolam. Maior ganha. **Empate: o ataque acerta.**
5. Defendeu: o seu pecado faz o efeito dele (tabela dos 7).
6. Sem defesa, você está **Aberto**: não rola; quem ataca rola **um dado acima** e acerta com **3 ou mais**.

**Firme**
7. **Firmar**: gaste o Movimento (você não anda). Escolha um pecado: é o seu dado firme até o seu próximo turno.
8. Firmar com a Ação no lugar do Movimento: o dado firme fica um dado acima.
9. O dado firme defende os **2 primeiros golpes** em você na rodada. Do 3º em diante, cada golpe vem Aberto.
10. Firme, a sua Reação **não defende você**. Ela fica para Proteger ou para o golpe livre.
11. Andou, Tombou ou foi empurrado: o dado firme sai.

**Um dado acima**
12. d4 → d6 → d8 → d10 → d12 → 2d6. Cada coisa a favor sobe um dado; cada coisa contra desce um.
13. Tudo soma, com teto de **2 acima**. Aberto conta 1. A Roda não entra no Aberto: ali você não tem pecado.
14. **Roda**: o pecado que domina o outro sobe um dado, no ataque e na defesa. Orgulho e opostos: ninguém sobe.

**Junto**
15. **Proteger** (Reação): um golpe num aliado perto vem para você. A mesma Reação defende (ou o dado firme, se você está Firme).
16. **Salto na frente** (sem Reação): o golpe vem para você; defende com o dado firme ou chega Aberto. Depois, você fica Aberto no próximo golpe em você. Aberto, você não salta.
17. **Cobrir** (Ação): até o seu próximo turno, todo golpe num aliado perto pode vir para você.
18. **Golpe livre**: saiu do lado de um inimigo? Ele pode gastar a Reação e te atacar na hora.
19. Revide e golpe livre não disparam Fere, Abre nem outro Revide. **Fere** vale 1 vez por rodada em cada alvo.

**Cena**
20. **O ombro de quem sobrou**: um aliado ficou À Beira? O próximo ataque de outro herói em quem o derrubou sobe um dado. 1 vez por cena.
21. **O cenário que ataca**: diga antes o que quebra. O seu ataque sobe um dado, e a coisa some da cena.

**Estados**
22. **Aberto** vale 1 golpe e some no fim do seu próximo turno. Não acumula.
23. **Caído**: Aberto no próximo golpe e sem dado firme. Levantar gasta o Movimento.
24. **Desafiado**: até o fim do seu próximo turno, atacar outro que não quem te desafiou é um dado abaixo.
25. Quem ataca um Aberto narra: acertou, diz onde pega; errou, diz o que deu errado.

**Magia lenta**
26. Começa numa Ação e sai na Ação do seu próximo turno. Um golpe que passa o seu dado por **4 ou mais** desfaz a magia.
27. Sozinho e Firme, contra 2 golpes, o mago segura a magia **no máximo ~metade** das vezes. Magia lenta pede um amigo do lado.

**Inimigos**
28. **Bando**: sem Reação e sem Firme; todo golpe nele é Aberto. 1 ataque e 1 golpe livre por rodada, sem gastar nada.
29. **Rival**: 2 Reações por rodada. Firma como um herói.
30. **Chefe**: sempre Firme no pecado da fase, em todos os golpes. 1 Reação (golpe livre).
31. Golpes do chefe por rodada: **metade dos heróis, para cima** (2 heróis: 1 · 3 ou 4: 2 · 5 ou 6: 3).
32. Vida da fase do chefe: **10 por herói**.
```

32 linhas de regra.

---

## B. Os 7

| Pecado | Defesa | Quando | Palavra | Efeito | Fala: deu certo | Fala: deu errado |
|:--|:--|:--|:--|:--|:--|:--|
| Ira | Aparar | só Reação | **Fere** | Venceu: quem bateu perde 2 Vida (1 vez por rodada nele). Precisa de arma ou escudo. | "Aço no aço, e o corte volta para você." | "Minha lâmina chega tarde. A dele não." |
| Luxúria | Dançar | só Reação | **Abre** | Venceu: quem bateu fica Aberto no próximo golpe nele. | "Eu giro. Você abraça o vazio." | "Giro para o lado errado e encontro o golpe." |
| Preguiça | Ceder | os dois | **Tomba** | Acertou: metade do dano, e você fica Caído. | "Eu me deixo ir. O golpe passa por cima." | "Vou ao chão. Doeu menos, mas estou na poeira." |
| Gula | Aguentar | os dois | **Aguenta** | Acertou: −2 de dano. | "Pode bater. Eu fico de pé." | "Entra fundo. Mas eu ainda estou aqui." |
| Inveja | Antecipar | só Firme | **Pressente** | Venceu: o seu próximo ataque nele sobe um dado. | "Eu vi esse golpe antes de você pensar nele." | "Eu vi o golpe certo. Você mudou no meio." |
| Ganância | Calcular | só Firme | **Aproveita** | Só com etiqueta: acertou, +2 de armadura. Diga o que levou o golpe. | "A coluna paga o preço. Eu não." | "A coluna racha, e o resto chega em mim." |
| Orgulho | Impor | só Firme | **Desafia** | Venceu: quem bateu fica Desafiado. Um aliado perto gasta a Reação para Ajudar: Impor sobe um dado. | "Ajoelhe. Ou me olhe nos olhos." | "Ele não baixou os olhos. Baixou a espada." |

**Etiqueta** (Ganância): uma coisa da cena que o mestre já disse em voz alta (coluna, mesa, escudo no chão).

Por que os nomes novos:

- **Pressente**: é o que o corpo faz na cena. "Lê" soa como olhar a ficha.
- **Aproveita**: Ganância tira proveito do lugar. "Usa" soa como gastar um item.
- **Tomba**: um corpo que cai, de propósito. "Cai" se confundia com cair **À Beira** (e o "ombro de quem sobrou" usa À Beira).

---

## C. Cartão de bolso

```
1. Rodada: todos agem uma vez. Seu turno: Movimento + Ação.
2. Fora do turno: 1 Reação por rodada.  Ex.: "Reação: Danço!"
3. Firmar: gaste o Movimento.  Ex.: "Firmo: Antecipo."  Defende os 2 primeiros golpes.
4. Firme, a Reação não te defende: ela Protege. Do 3º golpe: Aberto.
5. Te atacaram: fale primeiro. Ele escolhe o pecado. Maior ganha. Empate: ele.
6. Aberto: você não rola. Ele rola um dado acima e acerta com 3.
7. Só Reação: "Aparo!" "Danço!" · Só Firme: "Antecipo." "Calculo." "Imponho." · Os dois: "Cedo." "Aguento."
8. Roda: quem domina sobe um dado. Quem me sobe: na ficha, ao lado do pecado. Teto: 2 acima.
```

Na ficha, ao lado de cada pecado (curto):

```
Ira ← Inveja, Gula        Ganância ← Luxúria, Preguiça
Luxúria ← Gula, Ira       Inveja ← Preguiça, Ganância
Preguiça ← Ira, Luxúria   Gula ← Ganância, Inveja
Orgulho ← ninguém
```

A roda inteira (e os opostos) fica no apêndice.

---

## D. Exemplos com dados

### D1. Um contra um

| # | Quem | Fala | Dados | Rolou | Resultado | Narração |
|:-:|:--|:--|:--|:--|:--|:--|
| 1 | Ruivo → Lia | Lia: **"Reação: Danço!"** (Luxúria d8) | Ira domina Luxúria: d10 → **d12** × d8 | 6 × **7** | Defendeu. **Abre**: Ruivo Aberto. | "A espada corta o ar onde eu estava." |
| 2 | Lia → Ruivo | Ruivo está Aberto | Inveja d10 → **d12** × 3 | **9** | Acertou. 9 + 3 − 1 = **11**. Ruivo 35 → 24. | Lia: "No ombro, por trás." |

Conta: o Ruivo acertava 71% (dano 6,3). Se a Lia Aguentasse (Gula d6 → d8, Gula domina Ira), ele acertava 65% e o dano caía para 3,8. Aguentar dói menos; Dançar arrisca para abrir.

### D2. Três atacantes, Lia Firme

Turno da Lia: Movimento: **"Firmo: Antecipo."** (Inveja d10). Ação: atacou.

| # | Quem | Lia | Dados | Rolou | Resultado | Narração |
|:-:|:--|:--|:--|:--|:--|:--|
| 1 | Rato | Firme (1º golpe) | Ganância domina Inveja: d6 → **d8** × d10 | 4 × **7** | Defendeu. **Pressente**: próximo ataque dela no Rato sobe um. | "Eu vi a faca antes de ela sair do cinto." |
| 2 | Ruivo | Firme (2º golpe) | Preguiça domina Inveja: d8 → **d10** × d10 | **6** × 6 | **Empate: acertou.** 6 + 3 − 2 = **7**. Lia 16 → 9. | Ruivo: "Pego a coxa." |
| 3 | Fria | **Aberta** (3º golpe; a Reação não defende quem está Firme) | Ganância d10 → **d12** × 3 | **5** | Acertou. 5 + 3 − 2 = **6**. Lia 9 → 3. | Fria: "Na costela, por baixo do braço." |

A Reação da Lia sobrou: ela ainda pode **Proteger** o Breu nesta rodada.

Próximo turno da Lia, no Rato: bando é sempre Aberto (um acima) + Pressente (um acima) = d10 → **2d6**, teto. Contra 3. Sai 4 + 4 = **8**. Acertou: lacaios caem.

Conta da rodada (dano médio na Lia): **Firme 14,5** · sem Firmar, Reação no Ruivo 18,3. Firmar salvou **3,8** (o dado firme dela, d10, é maior que a Reação, d8).

### D3. Magia interrompida

Turno do Breu. Ação: começa a **Chama**. Movimento: **"Firmo: Cedo."** (Preguiça d8).

| # | Quem | Breu | Dados | Rolou | Resultado | Narração |
|:-:|:--|:--|:--|:--|:--|:--|
| 1 | Fria | Firme (1º) | Luxúria domina Preguiça: d8 → **d10** × d8 | 4 × **6** | Defendeu. A Chama segue. | "Eu me curvo; a lâmina passa sobre o fogo." |
| 2 | Ruivo | Firme (2º, dado cheio) | Ira domina Preguiça: d10 → **d12** × d8 | **9** × 3 | Passou por 6 (4 ou mais): **a Chama se desfaz.** **Tomba**: 9 + 3 = 12, metade **6**. Breu 12 → 6, Caído. | Ruivo: "Na mão que segura o fogo." |

E se a Lia **Saltasse na frente** do golpe 2? O golpe ia para ela, e a Chama seguia. Lia fica Aberta no próximo golpe nela.

Conta (a Chama sobrevive à rodada):

| Situação | Sobrevive |
|:--|:-:|
| 1 atacante, Breu Firme | 74% |
| 2 atacantes que **não** dominam Preguiça | **45%** (teto) |
| 2 atacantes, um domina | 41% |
| 2 atacantes, os dois dominam | 35% |
| 2 atacantes, Lia Protege ou Salta no 2º | **74%** |
| Breu sem Firmar | 37% |
| 3 atacantes, Breu Firme | 23% |

Aviso: o teto é **45%** porque Tomba derruba o mago, e Caído perde o dado firme. Com Aguentar no lugar de Ceder, o teto seria 54%. (A v3 dizia 48%; aquela conta esqueceu o Caído e tinha a trava antiga.)

### D4. Chefe contra 4 heróis, 1 rodada

**Mó**, fase 1: Gula. Firme em **Aguentar d10**, sempre. Vida da fase: 4 × 10 = **40**. 4 heróis: **2 golpes** por rodada.

Ordem: Rápidos (Lia, Nina) · Inimigos (Mó) · Lentos (Tomé, Breu).

| # | Quem | Fala | Dados | Rolou | Resultado | Narração |
|:-:|:--|:--|:--|:--|:--|:--|
| 1 | Lia → Mó | Mó: Firme | Inveja domina Gula: d10 → **d12** × d10 | **8** × 4 | Acertou. 8 + 3 = 11, Aguenta −2 = **9**. Mó 40 → 31. | "Entro por baixo do braço que desce." |
| 2 | Nina → Mó | Mó: Firme | Ganância domina Gula: d10 → **d12** × d10 | 3 × **8** | Defendeu. | "A flecha quebra na barriga de couro." |
| 3 | Mó → Tomé | Tomé: **"Reação: Aparo!"** (Ira d10) | Gula domina Ira: d10 → **d12** × d10 | 5 × **7** | Defendeu. **Fere**: Mó perde 2. Mó 31 → 29. | "Machado na clava; a lasca volta no pulso dele." |
| 4 | Mó → Breu | Breu: **"Reação: Cedo!"** (Preguiça d8) | Ira domina Preguiça: d10 → **d12** × d8 | **7** × 2 | Acertou. 7 + 4 = 11, **Tomba**: metade **5**. Breu 12 → 7, Caído. | "Me jogo no chão; a clava raspa as costas." |
| 5 | Tomé → Mó | Tomé: "Corto a corda do lustre!" (diz antes) | Gula domina Ira: Mó d10 → **d12**. Cenário: Tomé d10 → **d12** | **9** × 6 | Acertou. 9 + 4 = 13, −2 = **11**. Mó 29 → 18. O lustre some. | "O lustre desce, e o machado desce junto." |
| 6 | Breu → Mó | Movimento: levanta. Ação: ataca. Opostos: ninguém sobe | Preguiça d8 × d10 | 6 × **9** | Defendeu. | "O cajado bate e volta, como em pedra." |

Fim da rodada: Mó 18 / 40.

Conta: cada herói leva **1,7 golpe** do chefe por fase (com 4 heróis). Esta mesa, com a Roda a favor, tira 18,6 por rodada: a fase dura umas **2 rodadas** (a conta-base, heróis d8 sem Roda, dá 3,3).

Pressão por herói (golpes = metade dos heróis, para cima; dano médio por herói, por fase):

| Heróis | Golpes do chefe | Dano em cada herói, por fase | Com 1 golpe fixo |
|:-:|:-:|:-:|:-:|
| 2 | 1 | 8,5 | 8,5 |
| 3 | 2 | **11,3** | 5,7 |
| 4 | 2 | 8,5 | 4,3 |
| 5 | 3 | 10,2 | 3,4 |
| 6 | 3 | 8,5 | 2,8 |

Fica quase igual para toda mesa (8,5 a 11,3). Mesa de 3 é a mais dura: +33%.

---

## Contas que conferem as decisões

**Trava do Firme** (atacantes d10, Lia d8; Vida perdida por rodada):

| Golpes | Só Reação | Firme (Reação não te defende) | Salva | Se a Reação somasse | Salva |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 5,1 | 5,1 | 0 | 5,1 | 0 |
| 2 | 12,2 | 10,2 | **2,0** | 10,2 | 2,0 |
| 3 | 19,3 | 17,3 | **2,0** | 15,3 | 4,0 |
| 4 | 26,4 | 24,4 | **2,0** | 22,4 | 4,0 |

Firmar salva **2 fixos** com 2 golpes ou mais. Vale, mas não é obrigatório: o preço é não andar. Com a Ação (dado acima), salva 3,4.

**Salto na frente:** golpe d10 no Breu Aberto = 8,75. Na Lia Firme = 5,1. Lia Aberta depois custa 2,0. O grupo ganha 1,7. Não quebra. "Aberto, você não salta" impede o salto de graça (sem ele, quem já está no 3º golpe saltava sem custo).

**Ombro de quem sobrou:** um dado acima num ataque d8 × d8 = +1,35 de dano. É 4% da Vida de um rival. Só 1 vez por cena, e só com um aliado À Beira. Não quebra.

**Bando, golpe livre:** em Lia com Reação 2,3; Aberta 4,9. Fere: devolve 0,7 por golpe defendido.

---

## E. O que muda, por arquivo

**combate.md**

- l.10 lede "como se guardar" → "como se defender".
- l.16 "1 Movimento, 1 Ação e, no fim, a sua Guarda" → "Movimento + Ação. Fora dele, 1 Reação."
- l.18–32 seção A Guarda → regra A (linhas 1–14) e tabela B.
- l.36 caixa "Por que a Guarda vem antes" → "Por que você fala primeiro".
- l.44–45 recurso: sai "Fecha a Guarda", "trocar a Guarda", "Proteger". Revidar fica, com a linha 19.
- l.59 "contra a Guarda do alvo" → "contra a defesa do alvo".
- l.62 Fechar a Guarda → Firmar (linhas 7–11).
- l.63 Cobrir → linha 17. Entra o Salto (linha 16).
- l.70 golpe livre → linha 18.
- l.74 e l.82 Fintar: reescrever (pergunta 5).
- l.83 Desafiar → estado Desafiado (linha 24).
- l.84 Cegar 4+ → "perde a Reação desta rodada".
- l.89 Tudo ou Nada "Exposto" → "Aberto".
- l.104 Lamaçal "Esquivar" → "Ceder um dado abaixo".
- l.128 "O dado fica na mesa": decidir (pergunta 3).
- l.143 À Beira: citar o ombro de quem sobrou (linha 20).
- l.150–152 Malha, Placas, Escudo: "Esquivar" → Ceder; Escudo "Proteger 1 vez por rodada" → a decidir.
- l.154 Haste: golpe livre gasta a Reação.
- l.230 Bando → linha 28. l.232 Chefe → linhas 30–32; "a Guarda que servia" → "o pecado firme".
- l.236 simulação de 91%: refazer com a v4.
- Novo: "Cena" (linhas 20–21) e "Magia lenta" (linhas 26–27).

**referencia.md**

- l.23 "No fim, declare a Guarda" → "Fora dele: 1 Reação".
- l.24 golpe livre → linha 18 (Correr e Arrancada ficam).
- l.31 "dado da Guarda" → "dado da defesa". l.34 degraus → linhas 12–13.
- l.51–63 tabela A Guarda → tabela B curta (Defesa · Quando · Palavra · Efeito).
- l.69 "× Guarda" → "× defesa". l.72 Fechar → Firmar. l.86 Fintar.
- l.131–132 recurso, como em combate.md.
- Novo: o cartão C no topo.

**ficha.astro**

- l.9 lista: Esquivar → Ceder, Desviar → Dançar; somar a palavra (Fere, Abre, Tomba, Aguenta, Pressente, Aproveita, Desafia).
- Ao lado de cada pecado: "← quem me sobe" (C).
- l.51 "Guarda — declare no fim do turno" → "Defesa — Reação ou Firme".
- l.55 nota → linha 7 do cartão.
- l.110 recurso: tirar "Fecha a Guarda", "trocar Guarda", "Proteger".

**Outros**

- `glossario.md` l.22 Guarda → Reação, Firme, Aberto, Caído, Desafiado, Etiqueta.
- `magia.md` l.48 "qualquer Guarda" → "qualquer defesa"; l.52 "Esquivar" → Ceder; somar a linha 27.
- `balanca.md` l.34: "+2 somados" = o mesmo teto da linha 13 (citar).
- Apêndice (novo ou em `balanca.md` l.62): a roda inteira e os opostos.
- `personagem.md` l.65, `classes.md` l.22: "Guarda" → "defesa".
- Classes: "Guarda extra" vira "Toque de classe" (lista da v3, seção 10, continua valendo).
- **Veterano**: a face "Firme" vira **Muralha** (conflito de nome).
- **Vigia**, **Confessor**, **Herdeiro**, **Brigão**, **Avatar**, **Mago**, **Armador**: linhas da v3, seção 10.

---

## F. Perguntas para o Pedro

1. **Firme e Reação.** Firme: a Reação não te defende (salva 2 fixos). Ou: a Reação defende um 3º golpe (salva 4 cercado). **Recomendo: não defende.** Uma regra só, e o tanque não fica forte demais.
2. **Mesa de 3 heróis** leva 33% mais pressão do chefe (11,3 contra 8,5). **Recomendo: aceitar e testar na mesa.** Se doer, o chefe de 3 heróis faz 1 golpe + 1 Ação Rápida sem dano.
3. **"O dado fica na mesa"** (combate.md l.128) ainda vale? Ele soma com Pressente, Abre e ombro e enche o teto rápido. **Recomendo: cortar.** Pressente e Abre já fazem esse papel, com história.
4. **Chefe firme em Ira ou Luxúria** (defesas "só Reação"). **Recomendo: o chefe firma em qualquer pecado.** É uma exceção de uma linha.
5. **Fintar** sem a Guarda. **Recomendo: "o alvo fica Aberto no próximo golpe de um aliado"; margem 4+: no seguinte também.**
6. **Tomba é obrigatório?** Ceder sempre derruba. O mago Firme em Preguiça fica com 45% (com Aguentar, 54%). **Recomendo: manter.** Metade do dano tem que custar algo.
