---
tags: [penasia, combate, morte, numeros]
---
# 12 · Golpe de Misericórdia — números

Pergunta do Pedro: "gosto da ideia de matar alguém com um hit, mas no sistema antigo tinha que praticamente tirar 20 três vezes seguidas" (1 em 8.000).

Todas as chances abaixo são **exatas** (contagem de todas as combinações de dados, sem simulação). Regras usadas, tiradas de `combate.md` e `balanca.md`:

- Ataque: Coração do atacante contra o dado da Guarda; **maior ou igual acerta**.
- **Margem final** = Coração − Guarda − Proteção, +3 se o alvo está sem Fôlego.
- Degraus: d4 · d6 · d8 · d10 · d12 · **2d12** (acima do d12: dois d12, fica o maior).
- Proteção típica = **1** (couro). Tabelas com Proteção 0 e 2 aparecem quando mudam a conclusão.

---

## 1. O que a regra atual faz

### 1.1 Matar com um golpe a partir de saudável: **0%**

Nenhuma linha da Tabela Brutal derruba sozinha, e um 7+ dá só uma Grave. Saudável até morto leva **no mínimo três golpes de margem 7+**: Grave, depois outra Grave que transborda para Mortal (À Beira), e por fim a Misericórdia. É o "tirar 20 três vezes" do livro antigo, com outro nome.

**Chance de um golpe dar margem 7+** (Proteção 1):

| Atacante ↓ / Guarda → | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| **d6** | 0% | 0% | 0% | 0% | 0% |
| **d8** | 0% | 0% | 0% | 0% | 0% |
| **d10** | 7.5% | 5.0% | 3.8% | 3.0% | 2.5% |
| **d12** | 20.8% | 13.9% | 10.4% | 8.3% | 6.9% |
| **2d12** | 36.5% | 24.3% | 18.2% | 14.6% | 12.2% |

> Achado lateral: **um d8 nunca chega a 7+ contra quem usa couro** (8 − 1 − 1 = 6). Com Proteção 0, o d8 chega a 7+ só tirando 8 contra um 1 (1,0% a 3,1%).

Com Proteção 0 e 2, para comparar:

| Proteção | d10 vs d8 | d12 vs d10 | 2d12 vs d10 |
|:--|:-:|:-:|:-:|
| 0 | 7.5% | 12.5% | 21.2% |
| 1 | 3.8% | 8.3% | 14.6% |
| 2 | 1.2% | 5.0% | 9.0% |

**Três 7+ seguidos** (o caminho mais curto de saudável a morto, Proteção 1):

| Atacante ↓ / Guarda → | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| **d10** | 1 em 2.400 | 1 em 8.000 | 1 em 19.000 | 1 em 37.000 | 1 em 64.000 |
| **d12** | 1 em 110 | 1 em 370 | 1 em 890 | 1 em 1.700 | 1 em 3.000 |
| **2d12** | 1 em 21 | 1 em 70 | 1 em 170 | 1 em 320 | 1 em 550 |

Um guerreiro d10 contra Guarda d6 está **exatamente** no 1 em 8.000 do livro antigo. A sensação do Pedro está certa.

### 1.2 Acabar com quem já está À Beira: depende de uma regra que o livro não diz

O texto diz "margem 7+ contra ele mata", mas não diz **se quem está À Beira ainda defende** nem **se conta como sem Fôlego** (+3). As três leituras dão números muito diferentes.

**(a) Defende com a Guarda e conta como sem Fôlego (+3)** (Proteção 1):

| Atacante ↓ / Guarda → | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| **d6** | 4.2% | 2.8% | 2.1% | 1.7% | 1.4% |
| **d8** | 18.8% | 12.5% | 9.4% | 7.5% | 6.2% |
| **d10** | 35.0% | 25.0% | 18.8% | 15.0% | 12.5% |
| **d12** | 45.8% | 37.5% | 29.2% | 23.3% | 19.4% |
| **2d12** | 69.8% | 58.9% | 46.2% | 36.9% | 30.8% |

**(b) Não defende (caído, não age) e +3**: só depende do atacante.

| Atacante | d6 | d8 | d10 | d12 | 2d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| Mata | 33% | 50% | 60% | 67% | 89% |

**(c) Defende e sem o +3**: igual à primeira tabela de 7+ (d10 vs d8 = 3,8%).

Na leitura (a), um d10 contra Guarda d8 acaba com o caído em **1 de cada 5 golpes**. Na (b), em **mais da metade**. Isso não é "raro mas alcançável", é execução garantida em duas rodadas. A expressão "aproxima a morte" (golpes abaixo de 7+) também não tem número: quantas marcas, e o que acontece na última?

---

## 2. Três variantes

### V1 · Misericórdia apertada (só conserta o acabamento)

**Regra.** Quem está À Beira mantém a última Guarda declarada e **não conta como sem Fôlego** para este golpe. Margem 7+ mata. Qualquer outro acerto deixa 1 **Marca da Pesagem** (herança das falhas persistentes).

**Custo/condição.** Estar À Beira. Uma Ação inteira gasta em quem já caiu, em vez de num inimigo de pé.

**Chance** = a primeira tabela de 7+: d10 vs d8 **3,8% (1 em 27)**; d12 vs d10 **8,3% (1 em 12)**; d8 e d6 **nunca** (só marcam).

**Na mesa.** Protege o caído sem torná-lo imortal. Mas **não entrega o que o Pedro pediu**: matar alguém de pé com um golpe continua sendo 0%. Serve de base para qualquer das outras duas.

### V2 · Execução (golpe preparado com custo)

**Regra.** No turno anterior você **Mira** o alvo (+1 degrau) e anuncia a Execução. No golpe, gasta **1 recurso** da classe e é obrigado a apostar **Tudo ou Nada** (1 aposta; 2 com arma pesada). Se a **margem final for 9+**, o golpe é **Fatal**. Errou? Fica Exposto, como em qualquer aposta.

**Custo/condição.** Um turno inteiro telegrafado (o alvo vê a Mira e pode trocar a Guarda, Cobrir, fugir), 1 recurso, risco de Exposto.

**Chance de Fatal** (Proteção 1):

| Atacante ↓ / Guarda → | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| d8 padrão | 0% | 0% | 0% | 0% | 0% |
| d8 pesada | 4.2% | 2.8% | 2.1% | 1.7% | 1.4% |
| d10 padrão | 7.5% | 5.0% | 3.8% | 3.0% | 2.5% |
| d10 pesada | 18.8% | 12.5% | 9.4% | 7.5% | 6.2% |
| d12 padrão | 20.8% | 13.9% | 10.4% | 8.3% | 6.9% |
| d12 pesada | 35.0% | 25.0% | 18.8% | 15.0% | 12.5% |

Chance de **errar e ficar Exposto** (arma padrão): d10 vs d8 35%, d12 vs d10 37,5%.

**Na mesa.** É o momento do carrasco: todo mundo vê chegando. Tático e justo, porque o alvo tem um turno para responder. Ponto fraco: é planejado, não é o "hit" inesperado que faz a mesa gritar. E dados baixos (d8 com arma padrão, d6) nunca conseguem.

### V3 · Golpe Fatal (crítico que escala) — **recomendada**

**Regra.** Quando o seu Coração sai **no máximo do dado**, ele **explode**: role de novo e some (e de novo, se sair máximo outra vez). A soma serve **só para checar o Fatal**: se **soma − Guarda − Proteção (+3 se sem Fôlego) ≥ 16**, o golpe é Fatal. Se não chegar a 16, o golpe se resolve normalmente com o primeiro resultado (a explosão não mexe no resto do dano; sem isso, ela subiria os 7+ comuns em 4 a 10 pontos e desequilibraria as simulações já feitas).

**Custo/condição.** Nenhum. É sorte pura, mas sorte **construída**: dado maior explode com mais força, armadura e Guarda alta protegem, e deixar o alvo sem Fôlego antes ajuda.

**Chance de Fatal por golpe** (Proteção 1):

| Atacante ↓ / Guarda → | d4 | d6 | d8 | d10 | d12 |
|:--|:-:|:-:|:-:|:-:|:-:|
| **d6** | 0.41% | 0.33% | 0.27% | 0.23% | 0.20% |
| **d8** | 1.1% | 0.88% | 0.71% | 0.60% | 0.52% |
| **d10** | 1.8% | 1.5% | 1.2% | 1.1% | 0.95% |
| **d12** | 3.8% | 3.1% | 2.5% | 2.1% | 1.9% |
| **2d12** | 11.1% | 9.4% | 7.7% | 6.7% | 5.9% |

Em "1 em X": d6 vs d8 **1 em 370**; d8 vs d8 **1 em 140**; d10 vs d8 **1 em 80**; d12 vs d10 **1 em 47**.

Modificadores (d10 vs d8, para comparar com 1,2%):

| Situação | Chance |
|:--|:-:|
| Alvo sem armadura (Prot. 0) | 1.7% |
| Alvo de placas (Prot. 2) | 0.94% |
| Alvo sem Fôlego (+3) | 2.9% |
| Tudo ou Nada, 1 aposta | 1.0% |
| Tudo ou Nada, 2 apostas com arma pesada | 1.3% |

Tudo ou Nada **quase não ajuda** o Fatal (o dado menor explode menos). Isso é bom: o Fatal fica sendo do dado, e a aposta continua sendo para encurtar a luta.

**Por luta** (estimativa simples, 15 golpes de cada lado):

| Quem bate | Por golpe | Ao menos 1 Fatal na luta |
|:--|:-:|:-:|
| PJs d10 contra Guarda d8, Prot. 1 | 1.25% | 17% (1 luta em 6) |
| PJs d12 contra Guarda d8, Prot. 1 | 2.5% | 32% (1 luta em 3) |
| Inimigos d8 contra Guarda d10 de PJ, Prot. 2 | 0.47% | 7% (1 luta em 14) |
| Inimigos d10 contra Guarda d10 de PJ, Prot. 2 | 0.82% | 12% (1 luta em 8) |

Ou seja: os PJs veem um Fatal **mais ou menos a cada duas sessões**, e quem tem Vício de Ira d12 vê mais. É raro, é alcançável e é visível: o dado sai no máximo, a mesa para, rola de novo.

**2d12 explode quando o dado mantido for 12** (16% das vezes), por isso o salto para 6–11%. Se ficar alto demais no teste, a alternativa é explodir só com **dois 12**.

**Na mesa.** O "hit" do Pedro: ninguém planejou, todo mundo vê o dado subir. Não custa nada e não acrescenta contador. Combina com Penasia porque o d12 do Vício é o dado que mais explode: o seu melhor dado é o que mata (e é a sua prisão).

---

## 3. Recomendação: V3 + o conserto da V1

A V3 é a única que entrega "matar alguém com um golpe" sem planejamento e sem contador novo, numa frequência entre 1 em 50 e 1 em 400 golpes. A V1 continua necessária de qualquer jeito, porque a regra atual não diz se o caído defende, e na leitura mais natural ela vira execução garantida.

Texto proposto para o livro:

> **Golpe Fatal.** Tirou o máximo no Coração? Role o dado de novo e some, de novo se sair máximo. Se a soma passar a Guarda e a Proteção do alvo por 16 ou mais, o golpe é Fatal. Se não, ele vale com o primeiro resultado.
>
> **Golpe de Misericórdia.** Quem está À Beira mantém a última Guarda e não conta como sem Fôlego. Margem 7+ mata; qualquer outro acerto deixa uma Marca da Pesagem.

### O que o Fatal faz, por tipo de alvo

O livro pediu para não voltar ao "morrer por azar de dado" para jogadores: **a morte de um PJ é uma cena**. Por isso o Fatal é tudo para quem é comum, e só um começo de cena para quem tem nome.

| Alvo | Golpe Fatal | Golpe de Misericórdia |
|:--|:--|:--|
| **Lacaio / bando** | Morre. No bando, derruba metade. | Não se aplica: lacaio caído já está fora. |
| **Rival** | Ferida Mortal: cai À Beira. O Mestre escolhe se ele morre ali ou implora. | Mata. |
| **Chefe** | **Nunca morre de um golpe.** Encerra a fase atual na hora (pula para a próxima e troca de pecado). Na última fase, vale como Lesão e liga a Cláusula do Executor. | Só existe quando ele está Quebrado na última fase. Aí, mata: é o golpe final da campanha. |
| **PJ** | **Nunca morre de um golpe.** Ferida Mortal direta, mas com **Último Fôlego**: ele age uma última vez antes de cair À Beira. O escudo pode rachar para baixar o Fatal a 7+ (uso único por cena, como já está no livro). | O inimigo precisa **anunciar** no turno anterior ("o carrasco ergue o machado"). O grupo tem um turno para Cobrir, Proteger, Estancar ou puxar o caído. Se o golpe entra, a **Pesagem começa na hora**, e quem decide o fim continua sendo o jogador. |

Resultado: o PJ pode cair de um golpe só (1 luta em 8 a 14), mas nunca sai da mesa sem uma cena, um turno de aviso e a escolha da Pesagem. O inimigo comum morre na hora, e é aí que o "hit" aparece com mais frequência.

---

## 4. Pontas abertas

- **2d12 explode com um 12 ou só com dois 12?** Um 12 dá 6–11% de Fatal; dois 12 deixariam o 2d12 abaixo do d12 puro.
- **Marcas da Pesagem:** quantas a Misericórdia aguenta (3, como as falhas antigas?) e o que cada uma muda no prato do Pesador.
- **Rival com Fatal:** morre direto ou cai À Beira? A tabela acima deixa com o Mestre.
- **Achado lateral:** d8 contra couro nunca tira 7+. Isso é desejado (só os dados altos ferem grave) ou é um buraco?
