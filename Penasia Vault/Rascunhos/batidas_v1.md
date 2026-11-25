---
tags: [penasia, combate, duelo, batidas, veterano, dominio]
status: proposta (nada aplicado nos capítulos)
base: defesa_v5.md (Movimento/Ação/Reação, Firmar, Aberto)
contas: scratchpad/batidas.js (node)
---
# As 3 Batidas, v1

As Batidas **não são a base do jogo**. Elas viram um momento especial: um duelo 1×1 ou contra o chefe.

**A ideia que deixa tudo simples:** as 3 cartinhas **são** o seu turno da v5.

```
 CARTA     É O QUE NA v5        O QUE FAZ NA BATIDA
 [A]  ->   a sua Ação           ataca
 [E]  ->   a sua Reação         defende com um pecado de Reação (Aparo, Danço, Cedo, Aguento)
 [D]  ->   o seu Movimento      Firma só nesta batida (qualquer pecado)
```

Cada um usa cada carta **1 vez**. Não tem contador novo. Não tem laço (o "Esquivar > Atacar > Defender" saiu).

---

## 1. Três desenhos

### 1a. Talento de classe: **Três Tempos** (Veterano)

Por que o Veterano: a frase dele já é "tem o golpe certo, porque viu o seu antes de você". Ele já lê o inimigo (Leitor de Gente, Virada) e é a classe da **estabilidade** (face Firme). As Batidas são a leitura dele virando jogo.

```md
**Três Tempos** (talento do Veterano)
1. No seu turno, com 1 inimigo na sua zona (ou o chefe): entorte a ficha e diga "Três tempos."
2. Você e ele pegam as 3 cartas (A, E, D) e põem em fila, viradas para baixo.
3. **Leitura:** antes de pôr as suas, você vira 1 carta dele à sua escolha.
4. Revelem e resolvam da batida 1 à 3 (regras do choque, seção 2).
5. As Batidas gastam o seu Movimento, a sua Ação e a sua Reação. E as dele também.
6. Limite: 1 vez por cena. A ficha só endireita no seu próximo turno.
```

Custo: a ficha torta (sem Virada nesta rodada). Ganho: ver 1 carta. Ver 1 carta põe o seu **D** no **A** dele 67% das vezes (às cegas: 33%).

### 1b. Domínio: **O Compasso** (Lei de Orgulho)

```md
**O Compasso** · Lei: "Aqui se luta a dois, no compasso."
1. Abra o Domínio (Ação). Escolha 1 inimigo na zona: ele é o seu par.
2. Toda rodada, você e o par lutam nas 3 Batidas. Ninguém tem leitura.
3. Os outros na zona não atacam vocês dois. Lutam entre eles, normal.
4. Preço: a sua carta D firma **só em Orgulho** (Imponho). Todos sabem.
5. Âncora: 10 Vida, Firme em Aguentar. Um aliado de fora pode bater nela.
6. Sai do Compasso: a Âncora quebra, um dos dois fica À Beira, ou a cena acaba.
```

### 1c. Manobra de duelo: **Desafio de Três**

```md
**Desafio de Três** (qualquer herói)
1. Ação: aponte 1 inimigo na sua zona e diga "Três tempos, só eu e você."
2. Na próxima rodada, vocês dois lutam nas Batidas, sem leitura.
3. O alvo pode recusar: aí ele fica Desafiado (v5, linha 24).
4. Contra o chefe: as Batidas usam 1 dos golpes dele. Os outros golpes vão para a mesa, normal.
5. 1 vez por cena para cada herói.
```

---

## 2. O choque (batida a batida)

Regra de uma linha: **só rola quem tem A.** Sem A na batida, ninguém rola.

| Batida | O que acontece | Dados |
|:--|:--|:-:|
| **A × A** (ataque contra ataque) | Os dois rolam o pecado de ataque. Maior acerta o outro. **Empate: os dois acertam** (é a regra da v5: empate é do ataque). | 2 |
| **A × E** | Teste normal da v5: ataque contra a Reação dele. O efeito do pecado vale (Fere, Abre, Tomba, Aguenta). | 2 |
| **A × D** | Teste normal contra o dado firme dele, **um dado acima** (ele leu certo). | 2 |
| **E × E** (os dois esquivam) | Ninguém rola. Os dois no ar. | 0 |
| **D × D** (os dois defendem) | Ninguém rola. Olho no olho. | 0 |
| **E × D**, **D × E** | Ninguém rola. Ninguém atacou. | 0 |

- Quem ficou **Aberto** numa batida (por Abre) não usa a carta da próxima: não rola, e quem ataca sobe um dado.
- Por rodada: **no máximo 2 testes**, igual a uma rodada sem Batidas. Às cegas: 1,67 testes e 1,33 batidas vazias (conta em node).
- Choque A × A acontece 1 vez em 3, às cegas.

Desenho:

```
 batida:     1        2        3
 Lia:       [A]      [D]      [E]
 Ruivo:     [E]      [A]      [D]
            ataque   ataque   vazia
            dela     dele     (ninguém rola)
```

---

## 3. Exemplos com dados (desenho 1a, Três Tempos)

Fichas da v5. **Lia** é Veterana aqui: Inveja d10, espada +3, malha 2, Vida 16. **Ruivo**: rival, Ira d10, Preguiça d8, espada +3, couro 1, Vida 35.

### Ex. 1 · Leitura certa

Lia entorta a ficha: "Três tempos." Leitura: vira a carta 2 do Ruivo. É **A**. Ela põe **D** ali.

| Batida | Lia × Ruivo | Dados | Rolou | Resultado |
|:-:|:--|:--|:--|:--|
| 1 | **A** × E (Ruivo: "Aparo!", Ira d10) | Inveja domina Ira: d10 → **d12** × d10 | **9** × 5 | Acertou. 9 + 3 − 1 = **11**. Ruivo 35 → 24. |
| 2 | D × **A** (Ruivo ataca de Ira d10) | Lia firme em Inveja d10: leitura +1, Roda +1 = **2d6** (teto) × d10 | 3 + 5 = **8** × 7 | Defendeu. **Pressente**: o próximo ataque dela no Ruivo sobe um dado. |
| 3 | E × D | ninguém rola | — | Os dois recuam um passo. |

Contas: batida 1, a Lia acerta 63% (dano médio 6,4). Batida 2, o Ruivo acerta 40%; sem a leitura (d12) seriam 46%.

### Ex. 2 · Choque A × A e duas batidas vazias

Rodada seguinte (a ficha endireitou; Três Tempos já foi usado na cena, então é o **Desafio de Três** do 1c, sem leitura). Os dois põem **A, E, D**, na mesma ordem.

| Batida | Lia × Ruivo | Dados | Rolou | Resultado |
|:-:|:--|:--|:--|:--|
| 1 | **A × A** | Lia Inveja d10 + Pressente = **d12**. Ruivo Preguiça d8, Preguiça domina Inveja = **d10** | **6** × **6** | **Empate: os dois acertam.** Lia: 6 + 3 − 1 = **8**, Ruivo 24 → 16. Ruivo: 6 + 3 − 2 = **7**, Lia 16 → 9. |
| 2 | E × E | ninguém rola | — | Os dois no ar. |
| 3 | D × D | ninguém rola | — | Olho no olho. |

Conta do choque d12 × d10: Lia acerta 63%, Ruivo 46%, os dois 8%.

---

## 4. Risco de travar a mesa

| Risco | Como evitar |
|:--|:--|
| A mesa fica parada enquanto dois escolhem cartas. | Só 1×1, e 1 vez por cena (1a e 1c). O resto da mesa joga a rodada normal **enquanto** os dois põem as cartas. |
| O jogador demora para escolher. | O mestre conta até 5. Sem escolha: a fila fica **A, E, D**. |
| O mestre tem que pensar a ordem do chefe. | Role 1d6: 1 AED · 2 ADE · 3 EAD · 4 EDA · 5 DAE · 6 DEA. |
| Batida vazia parece perda de tempo. | Batida vazia não rola nada: é só uma frase (seção 5). Leva 3 segundos. |
| Regra nova para aprender. | Uma linha: "só rola quem tem A". O resto é a v5. |

---

## 5. Frases dos choques

- **A × A:** "Aço contra aço. Os dois pulsos tremem." · Empate: "Os dois acertam. Os dois sangram."
- **E × E:** "Os dois pulam para o mesmo lado. Por um segundo, só ar." · "Vocês se esquivam de nada. Alguém ri."
- **D × D:** "Escudo erguido, pés plantados. Ninguém se mexe." · "Dois muros se olhando."
- **E × D:** "Um gira, o outro espera. A batida passa vazia."
- **A × D, leitura certa:** "Eu sabia que vinha por aí."
- **A × E, defendeu:** "Ele corta o lugar onde eu estava."

---

## 6. Recomendação

**Três Tempos, no Veterano (1a).**
É a cara da classe (ler o inimigo), tem custo claro (ficha torta) e limite (1 por cena).
A leitura de 1 carta dá o "eu vi antes" sem regra extra: 67% contra 33% às cegas.
O Compasso (1b) fica para depois, como Lei de Domínio de Orgulho.
O Desafio de Três (1c) é bom para testar na mesa antes de decidir.
