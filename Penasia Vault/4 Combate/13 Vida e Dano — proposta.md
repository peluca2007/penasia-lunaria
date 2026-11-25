# 13 · Vida e Dano — proposta

> Pedido do Pedro: "Eu sinto falta do dano. Eu gosto da vida." Um forte contra um fraco tem que **doer**. Magia tem que **tirar vida**, não Fôlego.

Diagrama: `site/public/img/central/vida-dano.svg`

---

## A ideia em 4 linhas

1. Todo mundo tem uma **barra de Vida** (pontos).
2. Acertou? **Dano = dado da arma + Margem − armadura.**
3. A Vida desce. Em certos pontos, nasce uma **Ferida** (marca no corpo).
4. Vida 0 = **À Beira**. A morte continua sendo cena.

O que **fica igual**: a Roda, a Guarda, o Coração contra a Guarda, a Margem, as Feridas, a Tabela Brutal, a Pesagem.
O que **sai**: Fôlego como barra de vida.

---

## 1. Vida

**Vida = 8 + lados do seu dado de Gula.**

| Gula | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| **Vida** | 12 | 14 | 16 | 18 | 20 |

Gula é o corpo: comer, aguentar, durar. Faz sentido ela dar a vida.
Monstros: lacaio 6, Rival 20, Chefe 40+ por fase.

---

## 2. O ataque, passo a passo

1. **Role** o Coração (seu pecado). O alvo rola a **Guarda** (a Roda vale: quem domina +1 degrau).
2. Coração **menor**? Errou. Nada acontece.
3. Coração **maior ou igual**? Acertou. **Margem** = Coração − Guarda.
4. **Dano** = dado da arma **+ Margem**.
5. Tire a **armadura**. Mínimo 1 de dano se acertou.
6. **Vida desce.** Olhe os limiares de Ferida (seção 5).

O segredo: a **Margem vira dano**. Quem é muito melhor acerta com margem grande, e cada ponto de margem é um ponto de vida a menos.

### Armas

| Arma | Dado de dano | Extra |
|:--|:-:|:--|
| Leve (adaga, punho) | d4 | Pode atacar 2× se a Margem for 4+. |
| Padrão (espada, lança) | d8 | — |
| Pesada (machado, martelo) | d10 | Ignora 1 de armadura. Tudo ou Nada até 2. |
| Besta | d8 | Ignora 1 de armadura. Recarregar custa o Movimento. |

**Tudo ou Nada:** cada aposta = dado −1 degrau e **+2 de dano** se acertar (antes era +2 de margem; dá no mesmo).

---

## 3. Armadura reduz dano

| Armadura | Reduz | Custo |
|:--|:-:|:--|
| Couro | −1 | — |
| Malha | −2 | Esquivar −1 degrau |
| Placas | −3 | Esquivar −2, Luxúria −1, Tabela Brutal contra você −2 |
| Escudo | — | Aparar +1 degrau; 1×/cena transforma um golpe Grave em Leve e racha |

Armadura não te faz errar menos. Ela **come o dano**. Contra golpe fraco, quase anula. Contra golpe forte, só arranha.

---

## 4. Magia causa dano

Mesma conta: **Coração da magia contra a Guarda**, Margem soma.
A magia **ignora armadura** (o fogo passa pela malha). A etiqueta continua dando o efeito extra.

| Magia | Custo em Fios | Dano |
|:--|:-:|:--|
| Fagulha | 0 | d6 + Margem |
| Feitiço | 1–2 | d10 + Margem |
| Grande feitiço | 3–4 | 2d8 + Margem, ou d8 + Margem em área |
| Trama | 5 | 3d8 + Margem |

- Acabaram os Fios? **Pague com a própria Vida**: 2 de Vida por Fio. O mago sangra a magia.
- Etiqueta da Gula: corrói a **Vida máxima** em 1 por acerto (até a cena acabar).
- Concentração: levar uma **Ferida** pede teste de Preguiça. Dano sem Ferida não quebra.

---

## 5. Feridas nascem nos limiares

A barra de Vida tem **2 marcas**. Ao cruzar, você ganha uma Ferida e rola a Tabela Brutal.

| Quando | Ferida | Tabela Brutal |
|:--|:--|:--|
| Vida cai para **metade ou menos** | **Leve** | d10 |
| Um **único golpe de 10+** de dano | **Grave** + Cicatriz (3 palavras) | d10+2 |
| Vida chega a **0** | **Mortal** → À Beira → Pesagem | — |

- Leve: −2 de Vida máxima até descansar.
- Grave: −1 degrau físico, Cicatriz.
- Caixa cheia transborda para a de cima (igual hoje).
- Na Tabela Brutal, todo "−X Fôlego" vira "**−X Vida**".
- **Golpe de Misericórdia:** quem está À Beira e leva golpe de 10+ morre.

Assim o golpe enorme de um forte **marca o corpo**, mesmo que a vítima ainda fique de pé.

---

## 6. E o Fôlego?

Sai como barra. O nome sobra para quem quiser, mas a regra fica assim:

| Antes | Agora |
|:--|:--|
| Golpe de margem 0–3 tira Fôlego | Tira **Vida** |
| +3 de margem contra quem está sem Fôlego | Some. (A metade da Vida já dá Ferida.) |
| Aguentar: perde 1 Fôlego mesmo defendendo | Leva **1 de dano** mesmo defendendo, mas a armadura conta **em dobro** |
| Respirar: +2 Fôlego, 1×/cena | Recupera **d6 Vida**, 1×/cena |
| Mago paga Fios com Fôlego | Paga com **Vida** (2 por Fio) |
| Terreno Perigoso: −2 Fôlego | −2 Vida |

Recursos de classe (Rancor, Mira, Fios) continuam iguais. Eles são a "stamina".

---

## 7. Exemplo: forte contra fraco

**Guerreiro:** Ira d12, Guarda d10, machado (d10), malha (−2), Vida 18.
**Aprendiz:** Coração d4, Guarda d4, adaga (d4), sem armadura, Vida 14.

Golpe do Guerreiro:
- Rola **9**. Aprendiz rola **2**. Margem **7**.
- Machado rola **6**. Dano = 6 + 7 = **13**.
- Aprendiz: 14 → **1**. Cruzou a metade = Ferida **Leve**. Golpe de 10+ = Ferida **Grave**. Está quase morto, com duas marcas no corpo.

Golpe do Aprendiz:
- Precisa tirar mais que o d10 da Guarda. Acerta **1 em 4** vezes.
- Quando acerta: adaga 3 + margem 1 − malha 2 = **2**.

Números (20 mil lutas simuladas):

| | Acerta | Dano médio por acerto | Rodadas | Vitória |
|:--|:-:|:-:|:-:|:-:|
| Guerreiro → Aprendiz | quase sempre | **10** | **2** | **100%** |
| Aprendiz → Guerreiro | 25% | **2** | — | 0% |

O forte bate **5 vezes mais forte**. Isso é dano de verdade.

---

## 8. Exemplo: dois iguais

Dois espadachins: Coração d8, Guarda d8, espada (d8), couro (−1), Vida 16.

- Acerto: cerca de 55% das vezes.
- Dano médio por acerto: **6**.
- Um golpe tira mais ou menos **1/3 da barra**.
- Golpe de 10+ (Ferida Grave) entre iguais: **12%** dos acertos. Raro, mas acontece.
- Luta dura **4 a 5 rodadas**. Cada lado vence 55/45 (quem age primeiro leva uma pequena vantagem).

Com dados d6 e Vida 14: 5 rodadas. Com d10, malha e Vida 18: 5 rodadas.
Em grupo (2 contra 1), cai para **2 a 3 rodadas**.

---

## 9. Ficha: o que muda

- Uma barra: **Vida ___ / ___**, com risco na **metade**.
- Três caixas de Ferida: Leve ☐☐ · Grave ☐ · Mortal ☐.
- Arma: escreva o **dado de dano**.
- Armadura: escreva o **número que reduz**.

## Perguntas em aberto

- Golpe de 10+ como Grave: 10 fixo, ou "metade da sua Vida máxima"?
- Cura fora de combate: descanso curto devolve tudo, ou só metade?
- Chefe: Vida por fase, ou uma barra grande que troca de pecado na metade?
