---
tags: [penasia, combate, defesa, guarda, reação]
status: proposta (nada aplicado nos capítulos)
---
# Defesa v1: três desenhos

Base fixa (ideias do Pedro, não reabrir):

- Turno = **Movimento + Ação**. Fora do turno, **1 Reação por rodada**.
- Me bateram? Gasto a Reação e rolo **qualquer pecado** contra o dado do atacante. Sem custo de recurso.
- Reação já gasta? O próximo golpe é **gratuito**: eu não rolo defesa.
- Cada pecado, quando defende, tem um **bônus próprio**.
- 3 tipos de defesa: **só reação**, **reação ou ação** (ambas), **só ação** (preparada antes).
- Orgulho é neutro na Roda. As 3 Batidas ficam fora da base.

Os 3 tipos, iguais nos três desenhos:

| Tipo | Pecados | Por quê |
|:--|:--|:--|
| Só reação | Ira (Aparar), Luxúria (Dançar) | É reflexo: um golpe, uma resposta. |
| Ambas | Preguiça (Ceder), Gula (Aguentar) | Dá para ceder ou aguentar na hora ou já se plantar. |
| Só ação | Inveja (Antecipar), Ganância (Calcular), Orgulho (Impor) | Precisa ver antes, pesar a zona ou desafiar antes. |

Fichas de exemplo (as mesmas nos três desenhos):

- **Lia** (heroína): Inveja d10, Luxúria d8, Ganância d8, Ira d6, Gula d6, Preguiça d4, Orgulho d4. Espada (+3), Malha (armadura 2). Vida 16.
- **Ruivo** (inimigo): Ira d8, Preguiça d8, Gula d6, Luxúria d6, resto d4. Espada (+3).
- **Fria** (inimiga): Ganância d8, Inveja d8, Luxúria d6, Ira d6, resto d4. Espada (+3).
- Dano em Lia = número do atacante + 3 − 2 = **número + 1**.

Lembrete da Roda: Ira > Luxúria, Preguiça · Luxúria > Preguiça, Ganância · Preguiça > Ganância, Inveja · Ganância > Inveja, Gula · Inveja > Gula, Ira · Gula > Ira, Luxúria. Orgulho fora.

---

## Como a Roda continua valendo (a conta)

O problema antigo: se o defensor escolhe o pecado **depois** de ver o pecado do atacante, ele sempre foge da Roda (82% contra 91% no placar do chefe).

Conta nova (Python, 4.000 duelos, fichas sorteadas d10·d8·d8·d6·d6·d4·d4, atacante escolhe o melhor pecado):

| Quem escolhe quando | Golpe acerta | Atacante ganha a Roda | Defensor ganha a Roda |
|:--|:-:|:-:|:-:|
| Guarda declarada no fim do turno (hoje) | 56% | **54%** | 10% |
| **Defensor fala primeiro** (a cada golpe, antes do atacante escolher) | 56% | **51%** | 10% |
| Postura + improviso com −1 degrau | 56% | **50%** | 11% |
| Defensor escolhe depois, livre | 54% | **23%** | 46% |

Leitura: a Roda morre só no último caso. Nos outros três ela fica quase igual a hoje. Por isso todos os desenhos abaixo usam uma das três primeiras linhas.

E o "trava a mesa" de escolher a cada golpe? Com **1 Reação por rodada**, cada jogador escolhe no máximo **1 vez por rodada**. O teto da reação resolve o problema que fez a Guarda nascer.

---

## Desenho A: "Uma Guarda" (o mais simples)

### Regra do turno

```
SEU TURNO:  [Movimento]  [Ação]  -> no fim, mostre a sua GUARDA (qualquer pecado)
TURNO DELE: golpe 1 -> gaste a Reação: role a Guarda
            golpe 2 -> sem Reação: o golpe ACERTA (ele só rola o dano)
```

1. No fim do turno, escolha a sua Guarda: **qualquer pecado**. A ficha fica à vista.
2. Te bateram: gaste a Reação e role a Guarda contra o atacante.
3. Sem Reação: o golpe acerta sozinho. O atacante rola só para o dano.
4. **Firmar** (gasta a Ação): a Guarda vale contra **todos** os golpes até o seu turno, **+1 degrau**, sem gastar a Reação.
5. Guarda "só ação" só pode ser escolhida se você Firmar. Guarda "só reação" não pode ser Firmada.
6. A Reação volta no começo do seu turno.

### Os 7 pecados

| Defesa | Pecado | Tipo | Bônus |
|:--|:--|:--|:--|
| Aparar | Ira | só reação | Venceu: o atacante perde 2 Vida. Exige arma ou escudo. |
| Ceder | Preguiça | ambas | O golpe que acerta faz metade do dano. Você fica Caído. |
| Aguentar | Gula | ambas | O golpe que acerta faz −2 de dano. Firmado: perde 1 Vida. |
| Antecipar | Inveja | só ação | Venceu: seu próximo ataque nele sobe 1 degrau. |
| Dançar | Luxúria | só reação | Venceu: troque de zona sem golpe livre. |
| Calcular | Ganância | só ação | Em zona com etiqueta: +2 de armadura. |
| Impor | Orgulho | só ação | Ninguém ganha a Roda contra você. Quem erra fica Desafiado. |

Valor dos bônus (Ruivo d10 contra Lia d8, dano esperado por golpe): sem bônus 5,1 · Ceder 2,6 (mas Caído) · Aguentar 3,8 · Calcular 3,8 · Impor 3,75 (tira a Roda) · Aparar devolve 0,7 · Antecipar 35% de ganhar o degrau.

### Exemplos

**1. Dois atacantes contra Lia (ela tem a Reação).** Guarda de Lia: Dançar (Luxúria d8).
- Ruivo vê a Guarda e bate com Ira (domina Luxúria): d8 vira **d10**. Sai **7**. Lia rola d8: **5**. Acertou: dano **8**. (Chance de acertar: 65%.)
- Fria bate. Lia já gastou a Reação: **acerta sozinho**. Fria rola d8 só para o dano: **4** → dano **5**.
- Lia perde 13. Na média: 5,1 + 5,5 = **10,6 Vida por rodada**.

**2. Lia sem Reação.** É o golpe da Fria acima: 100% de acerto, dano esperado 5,5. Se ela ainda tivesse a Reação, com Dançar seria 56% e 3,75.

**3. Lia Firmou Antecipar (Inveja d10 → d12).** Ela não atacou neste turno.
- Ruivo bate com Preguiça (domina Inveja) d10: **7**. Lia d12: **5**. Acertou: dano 8. (Chance: 46%.)
- Fria bate com Ganância d10: **4**. Lia d12: **9**. Defendeu. Antecipar: o próximo ataque de Lia na Fria sobe 1 degrau.
- A Reação de Lia **sobrou** (pode Proteger um aliado).
- Média: 3,7 + 3,7 = **7,3 por rodada** (contra 10,6 sem Firmar). Preço: o ataque que ela não deu (cerca de 5 de dano).

### Iniciativa (Rápido / Lento / Bloco)

- Antes da 1ª rodada todo mundo mostra uma Guarda.
- **Rápido** age antes dos inimigos: pode Firmar e já pegar o bloco inimigo protegido.
- **Lento** pega o bloco inimigo antes de agir: na 1ª rodada só tem a Reação. É o preço de ser lento.
- Surpreendido: começa sem Reação na 1ª rodada (ideia do Moshoku).

### Magia lenta (custo 6 = 2 turnos)

- Turno 1: **Tecer** (gasta a Ação). Turno 2: soltar (gasta a Ação).
- Tecendo, você não pode Firmar. Defende só com a Reação.
- **A magia cai se você levar uma Ferida** (golpe de 12+).
- Conta (mago sem armadura, 2 atacantes d10): com espada (+3) a magia sobrevive **64%**; com arma pesada (+5), **37%**. A Reação quase não ajuda aqui: um 9 ou 10 passa de qualquer d8.

### Riscos

- O 2º golpe a 100% é duro: cercado sofre muito (10,6 por rodada contra 2 inimigos).
- Chefe com 1 Reação apanha demais: 3 heróis acertam **2,6 golpes por rodada** (hoje 1,9). Chefe precisa de 1 Reação por herói.
- É quase a regra de hoje: pouca coisa nova, mas também pouca coisa a aprender.
- Inveja, Ganância e Orgulho só servem Firmados: quem tem d10 nelas é empurrado a não atacar.

---

## Desenho B: "Quem defende fala primeiro" (equilibrado)

### Regra do turno

```
SEU TURNO:  [Movimento]  [Ação]        (Preparar é uma Ação)
TURNO DELE: ele diz o alvo -> VOCÊ diz o pecado da defesa -> ele escolhe o pecado dele -> os dois rolam
            golpe 2 sem Reação -> ele rola contra 3
```

1. Não existe Guarda parada. Te bateram: o atacante diz o alvo.
2. Você gasta a Reação e **diz primeiro** o pecado da defesa (tipo reação ou ambas).
3. Só depois o atacante escolhe o pecado dele. A Roda vale.
4. Sem Reação: o atacante rola contra **3**. Você não rola.
5. **Preparar** (gasta a Ação): ponha um dado de defesa (tipo ambas ou só ação) na ficha. Ele vale contra **todos** os golpes até o seu turno, **+1 degrau**, e não gasta a Reação.
6. Com defesa preparada, a Reação fica livre: Proteger, Revidar, Antítese.
7. Todo mundo destrava a Reação no **começo da rodada** (vira a ficha junto).

### Os 7 pecados

| Defesa | Pecado | Tipo | Bônus |
|:--|:--|:--|:--|
| Aparar | Ira | só reação | Venceu: o atacante leva 2 de dano. Exige arma ou escudo. |
| Ceder | Preguiça | ambas | O golpe faz metade do dano e não deixa dado na mesa. Você fica Caído. Preparado: a metade vale só no 1º golpe. |
| Aguentar | Gula | ambas | O golpe faz −2 de dano e você ganha 1 de recurso. Preparado: perde 1 Vida. |
| Antecipar | Inveja | só ação | Cada defesa vencida: +1 degrau no seu próximo ataque contra ele. |
| Dançar | Luxúria | só reação | Venceu: troque de zona sem golpe livre, e o atacante fica Exposto. |
| Calcular | Ganância | só ação | Em zona com etiqueta: +2 de armadura. |
| Impor | Orgulho | só ação | Ninguém ganha a Roda contra você. Quem atacar outro na sua zona desce 1 degrau. |

Prova de equilíbrio (Lia d8 contra Ruivo d10, e o 2º golpe contra 3):
- Dançar: 5,1 + 4,9 = **10,0** por rodada.
- Aguentar: 3,8 + 4,9 = **8,7**.
- Ceder: 2,6 + 6,0 (Caído dá +1 degrau ao 2º) = **8,6**.
- Ceder parece forte, mas o Caído cobra no 2º golpe.

### Exemplos

**1. Dois atacantes contra Lia (ela tem a Reação).**
- Ruivo escolhe Lia. **Lia fala primeiro:** "Aguentar, Gula d6". Ruivo não tem pecado que domine a Gula (Ganância e Inveja dele são d4). Bate com Preguiça d8, neutro: **7**. Lia d6: **5**. Acertou: dano 8 − 2 = **6**. Lia ganha 1 de recurso. (Chance: 69%.)
- Fria escolhe Lia. Sem Reação: Fria rola d8 contra 3: **4**. Acertou: dano **5**. (Chance: 75%.)
- Lia perde 11. Média: 3,1 + 4,9 = **8,0 por rodada**.

**2. Lia sem Reação.** Golpe da Fria acima: 75% de acerto, dano esperado 4,9. Se a Fria tirar 1 ou 2, ela tropeça e erra.

**3. Lia Preparou Antecipar (Inveja d10 → d12).** Ela não atacou.
- Ruivo: Preguiça d10, **7** contra d12 **5**: dano 8 (46%).
- Fria: Ganância d10, **4** contra d12 **9**: defendeu, e o próximo ataque de Lia nela sobe 1 degrau.
- A Reação sobrou: Lia usa para Proteger o aliado mago.
- Média: **7,3 por rodada** e a Reação livre.

### O dilema do Pedro, com números (vale para A, B e C)

"A melhor defesa da Lia é só de ação (Inveja d10). Se ela não preparou, gasta a Reação numa defesa pior. E se vem o 2º?"

| Caso | O que Lia faz | Vida perdida (média) | Ela atacou? |
|:--|:--|:-:|:-:|
| 1 inimigo, não preparou | Reação: Aguentar d6 | 3,1 | sim |
| 1 inimigo, preparou | Antecipar d12 | 3,7 | **não** |
| 2 inimigos, não preparou | Reação no 1º, 2º contra 3 | 8,0 | sim |
| 2 inimigos, preparou | Antecipar d12 nos dois | 7,3 + Reação livre | **não** |

Regra de bolso para a mesa: **preparar só vale quando 2 ou mais vão te bater.** Contra 1, gaste a Reação e ataque.

### Iniciativa

- **Rápido** prepara antes do bloco inimigo. **Lento** não: na 1ª rodada só tem a Reação.
- Como todos viram a Reação no começo da rodada, não tem conta de "quando volta".
- Surpreendido: sem Reação na 1ª rodada.

### Magia lenta (custo 6 = 2 turnos)

- Turno 1: **Tecer** (Ação). Turno 2: soltar (Ação). Todos veem o fio: a mesa sabe o que vem.
- **A magia cai se um golpe acertar com margem 4+** (sucesso forte).
- Conta (mago d8, atacantes d10): 1 atacante, a magia sobrevive **74%**. 2 atacantes, **44%**. Um aliado que Proteja o mago com a Reação dele volta para 74%.
- Isso faz a Reação do aliado valer: proteger o mago é a jogada.

### Riscos

- A mesa precisa da ordem certa: **alvo → defesa → pecado do atacante**. Quem inverte quebra a Roda.
- Chefe com 1 Reação: 3 heróis acertam 2,3 golpes por rodada (hoje 1,9). Proposta: **chefe tem 1 Reação por herói**; rival 2; bando não usa Reação (defende sempre com o dado do bando).
- Quem tem o d10 num pecado "só ação" se sente obrigado a Preparar. Se o playtest reclamar, Orgulho/Impor pode virar "ambas".
- Ceder + Caído precisa de "Caído" escrito no capítulo (hoje o nome existe sem regra).

---

## Desenho C: "Postura e improviso" (mais tático)

### Regra do turno

```
SEU TURNO:  [Movimento ou PARAR]  [Ação ou FECHAR]  -> fim: mostre a POSTURA
TURNO DELE: golpe -> Reação com a Postura (cheia + bônus)
                     ou outro pecado de reação: -1 degrau, sem bônus
            preparado e venceu por 4+ -> gaste a Reação: golpe livre de volta
```

1. No fim do turno, mostre a **Postura**: qualquer pecado.
2. Te bateram: gaste a Reação e role a Postura (dado cheio e bônus).
3. Ou **improvise**: outro pecado de reação ou ambas, **−1 degrau e sem bônus**, escolhido depois do atacante.
4. Sem Reação: o atacante rola contra **3**.
5. **Parar** (gasta o Movimento): a Postura vale contra todos os golpes, sem gastar a Reação.
6. **Fechar** (gasta a Ação): igual a Parar e **+1 degrau**.
7. Preparado e venceu uma defesa por 4+: gaste a Reação num **golpe livre** contra quem errou.
8. Rápido pode **Segurar** a Ação para usar no bloco inimigo.

### Os 7 pecados

| Defesa | Pecado | Tipo | Bônus | Se preparada |
|:--|:--|:--|:--|:--|
| Aparar | Ira | só reação | Venceu: o atacante leva 2. | não pode |
| Ceder | Preguiça | ambas | Metade do dano. Você fica Caído. | E não deixa dado na mesa. |
| Aguentar | Gula | ambas | −2 de dano. | E +1 recurso por golpe aguentado; perde 1 Vida. |
| Antecipar | Inveja | só ação | Venceu: +1 degrau no próximo ataque nele. | Duas vitórias: golpe livre. |
| Dançar | Luxúria | só reação | Venceu: troque de zona; o atacante fica Exposto. | não pode |
| Calcular | Ganância | só ação | Zona com etiqueta: +2 de armadura. | E vale para um aliado na zona contra tiro. |
| Impor | Orgulho | só ação | Ninguém ganha a Roda contra você. | Quem atacar outro na zona: −1 degrau. |

Por que o improviso não quebra a Roda: o −1 degrau come o +1 que o defensor ganharia fugindo. Na conta, o atacante continua com a Roda em **50%** dos golpes (hoje 54%).

### Exemplos

**1. Dois atacantes contra Lia, sem preparo.** Postura de Lia: Antecipar (só ação). Ela andou, então não Parou: a Postura não serve como Reação.
- Ruivo bate com Ira d8. Lia **improvisa** Aguentar: Gula d6, −1 degrau = d4, mas Gula domina Ira, +1 = **d6**, sem bônus. Ruivo **7**, Lia **5**: dano **8** (69%).
- Fria: sem Reação, d8 contra 3: **4** → dano **5** (75%).
- Lia perde 13. Média: 4,5 + 4,9 = **9,4 por rodada**. Este é o dilema do Pedro no pior caso: ela tinha a defesa boa e não pôde usar.

**2. Lia sem Reação.** Golpe da Fria: 75%, dano esperado 4,9.

**3. Lia Parou (não andou) com Antecipar d10.** Ela **ainda atacou** com a Ação.
- Ruivo: Preguiça d10, **7** contra d10 **5**: dano 8 (55%).
- Fria: Ganância d10, **4** contra d10 **9**: Lia venceu por 5. **Contra-golpe**: gasta a Reação num golpe livre na Fria. E o próximo ataque nela sobe 1 degrau.
- Média: 4,4 + 4,4 = **8,8 por rodada**, e ela atacou. Chance de contra-golpe por defesa: 21%.
- Se ela tivesse Fechado (Ação): d12, 7,3 por rodada, mas sem atacar.

### Iniciativa

- **Rápido** pode Segurar a Ação: quando um inimigo te escolher como alvo (antes de ele escolher o pecado), você Fecha ali. Ou ataca quem entrar em contato.
- **Lento** começa com a Postura mostrada antes da luta, e pode Parar no 1º turno.
- Surpreendido: sem Reação e sem Postura (defende com d4) na 1ª rodada.

### Magia lenta (custo 6 = 2 turnos)

- **Tecer conta como Parar:** você defende com o pecado da **etiqueta** da magia contra todos os golpes, sem gastar a Reação.
- Perdeu uma defesa por 4+? A magia cai.
- A Reação fica livre para Antítese ou para improvisar.
- Conta (etiqueta d8): contra 2 atacantes que leem a Roda (d10), a magia sobrevive **54%**. Contra 2 sem a Roda (d8), **71%**.
- Tático: o mago escolhe magia de etiqueta que os inimigos não dominam.

### Riscos

- São 3 regras novas (Postura, improviso, Parar/Fechar) e mais o contra-golpe. É o mais pesado para quem é disléxico ou iniciante.
- **Parar** custa só o Movimento: todo mundo pode ficar parado. Contra isso: zona Perigosa, Empurrar, Haste. Precisa playtest.
- "−1 do improviso com +1 da Roda" é conta de cabeça a cada golpe.
- Contra-golpe com 21% por defesa pode virar loop com classes que já revidam (Brigão, Navalha).
- Chefe: mesma conta do B (1 Reação por herói).

---

## Quadro final

| | A: Uma Guarda | B: Fala primeiro | C: Postura e improviso |
|:--|:--|:--|:--|
| Regras novas | 2 (Reação, Firmar) | 3 (Reação, fala primeiro, Preparar) | 5 |
| Golpe sem Reação | acerta sozinho | contra 3 (75% com d8) | contra 3 |
| Preparar custa | Ação (+1 degrau) | Ação (+1 degrau) | Movimento, ou Ação (+1) |
| Atacante com a Roda | 54% | 51% | 50% |
| Lia contra 2, sem preparo | 10,6 por rodada | 8,0 | 9,4 |
| Lia contra 2, preparada | 7,3 (não atacou) | 7,3 (não atacou) | 8,8 (atacou) |
| Magia lenta sobrevive (2 atacantes) | 64% (espada) | 44% (74% com aliado protegendo) | 54% |
| Defender com qualquer pecado na hora | não (escolhe antes) | **sim** | sim, com −1 |

## Recomendação: **B, "quem defende fala primeiro"**

1. É a ideia do Pedro escrita quase sem mudança: me bateram, gasto a Reação, rolo o pecado que eu quiser.
2. A Roda continua viva: o defensor se compromete antes do atacante, e o atacante ganha a Roda em 51% dos golpes (hoje 54%; escolhendo depois, cairia para 23%).
3. O teto de 1 Reação acaba com o "qual defesa?" a cada golpe: no máximo uma escolha por rodada.
4. Tira a Guarda parada da ficha (uma coisa a menos para lembrar) e dá peso real à Ação de Preparar quando 2 ou mais vêm em você.
5. Pegar do C só o "Parar com o Movimento" como talento de classe ou Domínio, não na base. Antes de aplicar: chefe com 1 Reação por herói, e escrever Caído e Exposto.

Contas: scripts Python no scratchpad da sessão (duelo dado contra dado exato, escada e Roda do `balanca.md`; sorteio de fichas com semente fixa).
