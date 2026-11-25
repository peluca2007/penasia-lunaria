---
tags: [penasia, magia, magia lenta, ritual, grande obra]
status: proposta (nada aplicado nos capítulos)
base: magia.md, personagem.md (Essência), classes/mago.md, defesa_v5.md, pesquisa_moshoku.md
contas: scratchpad/lenta.js, l2.js, surv.js (node)
---
# Magia lenta v1

A ideia: no Moshoku, magia grande custa 6 Ações. No Penasia o turno tem 1 Ação. Então **o tempo vira turnos**: quanto mais turnos, mais forte, e mais tempo o inimigo tem para quebrar.

```
 Rápida   [Ação] → sai
 Lenta    [Ação] ······ [Ação] → sai
 Ritual   [passo] ··· [passo] ··· [passo] ··· → sai
                          ↑ ponto de não retorno (depois do 3º)
```

---

## A. A regra (20 linhas)

```md
### Magia lenta

1. **Rápida:** 1 Ação. Como hoje: custo 0 a 5, força +2 por custo.
2. **Lenta:** começa na Ação. Sai na Ação do seu próximo turno.
3. Pague toda a Essência **no começo**.
4. A Lenta sai com **o dobro**: força +4 por custo num alvo, **ou** força normal em toda a zona.
5. **Ritual:** 3 a 6 passos. Cada passo é 1 Ação. Custa 5, sempre.
6. O Ritual sai com força +4 **por passo**, em **todos** na zona. Aliado que fica, leva.
7. Você faz o 1º e o último passo. Por rodada, **até 2 passos**: o seu e o de 1 aliado na zona. O aliado gasta a Ação e diz a frase do passo.
8. **Sinal:** em todo turno de preparo, diga o que muda na cena. Todos veem a etiqueta.
9. O sinal vira **coisa da cena**: serve para Aproveitar e para o Cenário que ataca.
10. **Quebra:** golpe em você que passa o seu dado por **4 ou mais** desfaz a magia. Aberto: conta contra 3.
11. Desfez: a Essência paga some, e **a etiqueta volta em você** (tabela B).
12. **Ponto de não retorno:** no Ritual, depois do 3º passo. Aí a quebra não desfaz: role o Rasgo (d6 + 5) e siga.
13. **Grande Obra:** Ritual de 5 ou 6 passos. A zona muda para sempre.
14. Proteger, Salto e Cobrir salvam a magia: o golpe que vai para o aliado não quebra nada.
15. **Antes da luta**, escondido: comece a Lenta, ou faça até 2 passos do Ritual.
16. Cada sinal escondido: o mestre rola a Inveja do vigia contra a sua Preguiça. Ele vence (empate: ele), a luta começa.
17. Lenta pronta antes da luta sai na sua 1ª Ação.
18. Custo maior que a Essência? O resto sai da Vida, como hoje.
19. **No seu Domínio**, magia com a etiqueta da sua Lei só quebra com margem **5+**.
20. Uma magia lenta por vez. Dado 1 ao soltar: Rasgo, como sempre.
```

---

## B. O que desanda (a etiqueta volta em você)

| Etiqueta | Desanda | Efeito |
|:--|:--|:--|
| <span class="dot ira"></span>Ira | **Queima** | Você perde Vida = o custo. |
| <span class="dot lux"></span>Luxúria | **Encanta** | Você não ataca quem te quebrou, na próxima rodada. |
| Preguiça | **Congela** | Você perde o próximo Movimento. |
| <span class="dot gul"></span>Gula | **Devora** | Você perde a Essência que restava. |
| <span class="dot gan"></span>Ganância | **Rasga** | A carta some até o fim da cena (nem deitada volta). |
| <span class="dot inv"></span>Inveja | **Cega** | Até o fim da próxima rodada, ataques e Inveja um dado abaixo. |
| Orgulho | **Humilha** | Você fica Desafiado por quem te quebrou. |

É o mesmo efeito que a etiqueta faz no inimigo, virado para você. Nada novo para decorar.

---

## C. Os 3 níveis

Conta base: conjurador d8 contra defesa d8, sem Roda. Empate: o ataque acerta. Magia ignora armadura. Guerreiro de referência: d8 + espada 3 − couro 1 = **4,3 por Ação**.

Sobrevive (de defesa_v5): sozinho e Firme **45%** · com aliado Protegendo **74%** · ninguém ataca **100%**.

| Nível | Tempo | Custo | Força | Alvo | Dano médio | Contra atacar |
|:--|:--|:-:|:--|:--|:--|:--|
| **Rápida** | 1 Ação | 0–5 | +2 por custo | 1 | custo 2: **5,4** | 1 ataque = 4,3 → **1,26×** |
| **Lenta** (1 alvo) | 2 turnos | 1–5 | +4 por custo | 1 | custo 4: **12,2** cheia · 9,0 protegida · 5,5 sozinho | 2 ataques = 8,6 → **1,41× / 1,05× / 0,64×** |
| **Lenta** (zona) | 2 turnos | 1–5 | +2 por custo | zona | custo 4, 3 alvos: **23,1** cheia · 17,1 protegida · 10,4 sozinho | 2 ataques = 8,6 → **2,7× / 2,0× / 1,2×** |
| **Ritual** | 3–6 passos | 5 | +4 por passo | zona | 3 passos, 3 alvos: **29,8** (22,1 protegida) | 3 ataques = 12,9 → **2,3× / 1,7×** |
| **Grande Obra** | 5–6 passos | 5 | +4 por passo | zona, e muda a cena | 6 passos, 3 alvos: **50,1** · 1 chefe Firme d10: **13,4** | 6 ataques = 25,9 → **1,9×** · no chefe **0,5×** |

A comparação justa da Lenta é com **2 Rápidas** que gastam a mesma Essência (2 × custo 2 = **10,9**):

| Lenta custo 4, 1 alvo | Cheia | Protegida | Sozinho |
|:--|:-:|:-:|:-:|
| Contra 2 Rápidas | 1,12× | 0,83× | 0,50× |

Leitura curta:

- **Lenta num alvo** só vale quando ninguém bate no mago (emboscada, inimigo ocupado). Sozinho, rende metade.
- **Lenta na zona** é o motivo de esperar: contra 3 inimigos, rende o dobro, mesmo protegida.
- **Ritual** é para multidão e para mudar a cena. **Não mata chefe**: no chefe Firme rende metade de atacar.
- Na quebra, o grupo perde a Essência **e** a etiqueta desanda. Esperar custa.

---

## D. Sinais de cena (1 por turno de preparo)

O jogador diz em voz alta. O mestre pode completar. **Turno 1** muda o ar · **turno 2** muda as coisas · **turno 3+** muda as pessoas.

| Etiqueta | Turno 1: o ar | Turno 2: as coisas | Turno 3+: as pessoas |
|:--|:--|:--|:--|
| Ira | O ar esquenta. Cheira a ferro. | As velas se dobram para você. | O suor ferve na pele de todos. |
| Luxúria | Um perfume doce, sem fonte. | Os panos se mexem sem vento. | Os inimigos olham para você, sem querer. |
| Preguiça | O som fica abafado. | A geada sobe pelas pedras. | A respiração de todos sai em fumaça, devagar. |
| Gula | Cheiro de coisa podre. | O pão da mesa embolora. | A boca de todos seca. Dá fome. |
| Ganância | Tilintar de moeda, longe. | O metal da sala treme na sua direção. | As armas puxam a mão de quem segura. |
| Inveja | A luz fica verde. | As sombras apontam para você. | Cada um vê, num reflexo, o que mais quer. |
| Orgulho | Silêncio total. | A poeira para no ar. | Os joelhos dos inimigos pesam. |

Por que o sinal importa:

- O inimigo **vê a etiqueta** e pode Firmar no pecado que domina. É a chance dele.
- O sinal é **coisa da cena**: a coluna congelada serve para Aproveitar (Ganância) e para o Cenário que ataca. O preparo ajuda o grupo antes de sair.

---

## E. Exemplos com dados

Fichas de defesa_v5. **Breu**: Preguiça d8, resto d4. Orgulho d4 = **Essência 4**. Vida 12.

### E1. Lenta protegida: sai

Turno 1 do Breu. Ação: começa a **Chama** (Ira, custo 3). Essência 4 → **1**. Sinal: "O ar esquenta. Cheira a ferro." Movimento: **"Firmo: Cedo."** (Preguiça d8).

| # | Quem | Fala | Dados | Rolou | Resultado |
|:-:|:--|:--|:--|:--|:--|
| 1 | Fria → Breu | Breu Firme | Luxúria domina Preguiça: d8 → **d10** × d8 | 5 × **6** | Defendeu. A Chama segue. |
| 2 | Ruivo → Breu | Lia: **"Reação: Protejo!"** e Danço (Luxúria d8) | Ira domina Luxúria: d10 → **d12** × d8 | **8** × 7 | Acertou a **Lia**: 8 + 3 − 2 = **9**. Lia 16 → 7. A Chama segue. |
| 3 | Breu → Ruivo | Solta a Chama, **dobro**: força +12. Ruivo viu o fogo e Aguenta (Gula d6 → **d8**, Gula domina Ira) | d8 × d8 | **6** × 4 | Acertou: 6 + 12 = 18, Aguenta −2 = **16**. Ruivo 35 → 19. Em Brasa. |

Conta: a mesma Chama Rápida dava 6 + 6 − 2 = **10**. A Lia pagou 9 de Vida para o Breu fazer 16. É troca de grupo.

### E2. Lenta sozinha: quebra (Gula devora)

Turno 1 do Breu. Ação: começa a **Fome Fria** (Gula, custo 3). Essência 4 → **1**. Sinal: "Cheiro de coisa podre." Movimento: **"Firmo: Cedo."** (Preguiça d8). A Lia está longe.

| # | Quem | Fala | Dados | Rolou | Resultado |
|:-:|:--|:--|:--|:--|:--|
| 1 | Ruivo → Breu | Breu Firme | Ira domina Preguiça: d10 → **d12** × d8 | **11** × 4 | Passou por **7** (4 ou mais): **quebrou**. Tomba: 11 + 3 = 14, metade **7**. Breu 12 → 5, Caído. |
| 2 | Desanda | Gula **devora** | — | — | Essência 1 → **0**. As 3 pagas somem. Próxima magia sai da Vida. |

Breu: "A fome que eu chamei virou para dentro. Comeu o que restava."

Conta: sozinho e Firme contra 2 golpes, a Lenta sai **45%** das vezes. Se a Lia **Saltasse na frente**, saía **74%**.

### E3. Grande Obra em emboscada: Lago de Gelo

Breu, Nina e Tomé, escondidos. **Lago de Gelo**: Preguiça, Ritual de **5 passos**, força 5 × 4 = **+20** na zona, e a zona vira gelo para sempre. Custo 5: Essência 4 → 0, e **1 Vida** (Breu 12 → 11).

Antes da luta (até 2 passos):

| Passo | Quem | Sinal | Vigia (Rato, Inveja d6) × Breu (Preguiça d8) | Resultado |
|:-:|:--|:--|:--|:--|
| 1 | Breu | "O som fica abafado." | 4 × **6** | Não viu. |
| 2 | Nina: "Risco o círculo com a ponta da flecha." | "A geada sobe pelas pedras." | **5** × 3 | **Viu.** A luta começa. |

Rodada 1. Ordem: Rápidos (Nina) · Inimigos · Lentos (Tomé, Breu).

| # | Quem | Fala | Dados | Rolou | Resultado |
|:-:|:--|:--|:--|:--|:--|
| 1 | Nina | Passo 3: "Finco a flecha no gelo e não solto." | — | — | **Ponto de não retorno.** |
| 2 | Ruivo → Breu | Breu: **"Reação: Cedo!"** (Preguiça d8) | Ira domina Preguiça: d10 → **d12** × d8 | **10** × 5 | Margem 5, mas já passou o ponto: **não desfaz**. Rasgo: d6 + 5 = 2 + 5 = **7**, Fios Presos (Essência já era 0). Tomba: 13, metade **6**. Breu 11 → 5, Caído. |
| 3 | Breu | Movimento: levanta. Ação: passo 4. | — | — | "A respiração de todos sai em fumaça." |

Rodada 2. Breu, passo 5 (o último), solta. Rola **uma vez**; cada alvo defende.

| Alvo | Defesa | Dados | Rolou | Resultado |
|:--|:--|:--|:--|:--|
| Ruivo | Danço (Luxúria d6 → **d8**, domina Preguiça) | Breu d8 × d8 | 5 × **7** | Defendeu. Abre: Breu Aberto. |
| Fria | Danço (Luxúria d8 → **d10**) | d8 × d10 | **5** × 4 | Acertou: 5 + 20 = **25**. Fria 35 → 10. Congela o Movimento. |
| 4 Ratos | bando: Aberto, acerta com 3+ | d8 | **5** | Os 4 caem. |

A zona agora é **Lago de Gelo**: coisa da cena para sempre (Ceder nele, Aproveitar o gelo, Cenário que ataca).

Conta: o grupo gastou **5 Ações** (Breu 3, Nina 2). 5 ataques de guerreiro dão **21,6** em média. A Obra deu **25** na Fria, limpou o bando e mudou a cena. Sem a Nina, os passos 2 e 3 levavam mais uma rodada de risco.

---

## F. Riscos

1. **Lenta num alvo, sozinho, rende metade.** É de propósito (defesa_v5: "magia lenta pede um amigo"). Mas um jogador iniciante pode tentar e se frustrar. O cartão precisa dizer: "Lenta = zona, ou com amigo do lado."
2. **Ritual de 3 passos em 3 alvos rende 1,7× protegido.** É o ponto mais forte. Se pesar na mesa: força **+3 por passo** em vez de +4.
3. **Eco do Mago + Lenta dobro.** Ecoar um 10 com força +16 = **26** num golpe. Decidir: a Lenta ecoa ou não. Sugestão: ecoa, é o momento uau, e já custa 2 turnos e 4 Essência.
4. **Fogo amigo.** O Ritual pega aliados na zona. Bom para história, mas o mestre precisa avisar no último passo.
5. **Concentração.** magia.md hoje diz: "sofrer uma Ferida pede teste de Preguiça". Esta regra troca isso por **margem 4+**. Não podem valer as duas.
6. **Antítese.** O sinal mostra a etiqueta: a contramágica fica fácil contra Lenta. Sugestão: Antítese só no turno em que a magia **sai**.
7. **Rolagem de vigia** (linha 16) é uma rolagem nova fora de combate. Se pesar, o mestre decide sem dado.
8. **Domínio margem 5+** sobe a Lenta sozinha de 45% para **55%**, e com 1 atacante de 74% para **81%**. Bom, sem quebrar.

---

## G. Recomendação

- **Adotar os 3 níveis** com uma frase de cartão: *"Rápida: agora. Lenta: o dobro, no próximo turno. Ritual: a zona inteira, em passos."*
- **Lenta: dobro num alvo ou a zona.** A zona é o que faz esperar valer a pena. O dobro é para emboscada e para o chefe distraído.
- **Ritual custa 5, sempre.** Sem tabela: o tamanho vem dos passos. Até 2 passos por rodada, para o grupo jogar junto sem pular o risco.
- **A etiqueta volta em você** na quebra. Usa o que a mesa já sabe (Ira queima, Gula devora...).
- **Sinal obrigatório e vira coisa da cena.** É o que o Pedro pediu: cada turno de preparo muda a cena, e o grupo usa isso.
- Testar na mesa com o **risco 2** (Ritual de 3 passos) e o **risco 3** (eco) antes de fechar.
- Antes de levar ao Pedro: passar pelos 3 agentes (combeiro, rp, simples).
