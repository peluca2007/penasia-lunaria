# PENASIA — Auditoria Completa e Proposta de Redesenho

> Versão 0.1 · Documento de trabalho. Parte 1 audita o livro atual. Parte 2 propõe Penasia como **sistema próprio**, sem depender de D&D.

---

# PARTE 1 — AUDITORIA

## 1.1 Veredito

Penasia hoje é **um patch de D&D 5e com quatro filosofias de design empilhadas**, e elas brigam entre si:

1. **Sobrevivência punitiva** (atributos base 9, falhas persistentes, críticos que mutilam, magia rara).
2. **Anime de poder** (níveis 21–25, Domínio Pessoal, Hit Kill, Sopro Atômico).
3. **Sistema de pacto e pecado** (Dádivas e Condenações, Bruxas, Votos).
4. **D&D de base** (classes, slots, d20, ASI, lista de magias).

A **3 é a alma do livro**. É a única parte que só existe em Penasia. As outras três são empréstimos ou conflitam com ela.

## 1.2 O que é ouro (manter e elevar)

| Elemento | Por que funciona |
|:--|:--|
| As 7 Bruxas como pecados que **criaram a civilização** | Cosmologia original. Cada pecado explica uma instituição (Gula → trabalho, Ganância → reinos). |
| Dádivas = Benção + Voto | Poder com custo narrativo. É o melhor mecanismo do livro. |
| Falhas de morte persistentes | Cria memória do corpo. |
| Inventário por slots (= Força) | Simples e visual. |
| Treino de Interlúdio | Downtime como motor de crescimento. É raro e bom. |
| Voidwalker: Saturação ("copo enchendo") | Metáfora clara de risco/recompensa. |
| Mutações Titânicas | Evolução do corpo como escolha, e a raça tem identidade. |
| Travas de Ascensão (12/16/20/22) | Progressão atrelada a feitos da história, não a XP. |
| Humor de fachada + horror embaixo (Bonzão/Malzão, Putária) | Tom único, se for assumido de propósito. |

## 1.3 Problemas estruturais

### A. Identidade e dependência (crítico)
- Todo o livro assume o chassi do 5e: d20, CA, slots, classes, ASI, 12 classes, "Livro do Jogador".
- Divindades, magias e itens têm nomes de **propriedade alheia** (Shar, Lolth, Vecna, Tiamat, Asmodeus, Hécate, Auril, Anúbis, Baphomet, Mordenkainen, Abi-Dalzim, Tasha…). Para publicar ou compartilhar como sistema, isso precisa sair.
- Resultado: o livro **não funciona sozinho**. Quem não tem o PHB não joga.

### B. Tom desencontrado
- Lore cômico (Bonzão, Malzão, "Putária", "Galdalf, o cachorro") ao lado de regras de horror (decapitação, Impulso Suicida, Morte da Alma).
- Isso pode ser identidade (o mundo é absurdo, o castigo é real), mas hoje **não é escolha, é acidente**. A lore pede riso e a mecânica pede luto.

### C. Matemática quebrada

| # | Problema | Efeito |
|:-:|:--|:--|
| 1 | **Vantagem acumula até 5d20 (maior) e Desvantagem não tem teto** | Com +2 você rola 3d20 e a média do melhor é ≈15. Com +4 (5d20), ≈17. Com 3 desvantagens, ≈6. O d20 vira quase determinístico. Fontes de "Vantagem absoluta" nas Dádivas ignoram o teto. |
| 2 | **Opção A do Ponto de Evolução (+1 atributo) é estritamente dominada** | Muitas Características (Atleta, Ator, Resistente, Mente Afiada, Mestre de Armas…) **já dão +1 atributo** além do benefício próprio. Ninguém escolhe só o atributo. |
| 3 | **Treinos dão +1 atributo em quase todos** (Influência, Arma, Magia, Compreensão, Agilidade, Luta, Resistência, Perícia…) e o Condicionamento Puro dá +1 em 4 semanas e é repetível | Todos chegam ao teto da Trava rapidamente. Personagens homogêneos e a Trava deixa de ser escolha. |
| 4 | **Dois quadros de Ascensão incompatíveis** | Parte 2 diz que o Despertar (2º Predileto) é no **nível 10** e os limites sobem em 10/13/17/21/23. O capítulo "Ascensão e Poder" diz **nível 16** e as Travas em 12/16/20/22. |
| 5 | **Proficiência lenta (+1 a +5) com atributos até 22–24** | O atributo domina todo o resto. Perícias e treino de perícia pesam pouco. |
| 6 | **PD do Domínio acima do limite** | O teto é "PD = nível", mas Prisioneiro do Trono dá **+20**, Vínculo Vital +14, Guardião +12. Um personagem de nível 5 passa de 40 PD com 2 pactos. A "Auditoria do Mestre" vira remendo para uma regra que falha. |
| 7 | **Colapso do Voidwalker quase nunca acontece** | Colapso = Saturação igual ao atributo (18–20). Mas o dano é `(Sat − Limite) × XdY`. Nível 6, limite 7, Sat 12: 5×2d12 ≈ 65 por turno, o que mata um personagem de ≈50 PV muito antes de 18. A regra "de morte" é decorativa. |
| 8 | **Crítico**: 20 natural rola tabela, 19–20 de Dádiva usa regra padrão | Duas regras de crítico no mesmo ataque, e o jogador nem sempre sabe qual. |
| 9 | **CD e bônus** escalam com PD/2, PB e modificadores de formas diferentes em cada subsistema | Não existe uma régua única de "quão difícil é isto?". |

### D. Peso das tabelas
- **13 tabelas de crítico** (d10) + 2 de lesão + 1 de insanidade (d20). Cada ataque crítico gera consulta.
- Várias entradas **encerram o personagem por dado**: Decapitação, Impulso Suicida, Morte da Alma, Globo Ocular Estourado (cego permanente). O jogador perde agência por 1/10 de 5%.
- "Cláusula do Executor" fala em "Boss", que nunca é definido, e está pendurada nas lesões 4–8.

### E. Dádivas e Condenações (o núcleo, mal calibrado)
- **Sem custo enquanto você obedece.** Um Bárbaro com Ira (crítico 19–20, resistência física em combate, PV temporários) paga um Voto que ele já cumpriria por jogar o personagem. Quem quer o poder sem a história escolhe os 3 pares de entidades "fáceis".
- **Desigualdade absurda**: Orgulho (imune a medo e enfeitiçado, +Car na CA) contra Bonzão (não pode atacar primeiro).
- **Punição binária e subjetiva**: o Mestre julga "quebra intencional" e o personagem leva **todas** as penalidades permanentes de uma vez, sem teste. O jogador que erra uma vez perde o personagem, e a punição vira castigo e não história.
- **Sem escada.** Falta o passo intermediário "tentação → falha → queda". O melhor drama (o personagem quase cede) não tem mecânica.
- Vecna cria um paradoxo: tentar resistir à marionete já dispara a punição, e então o jogador nem rola.

### F. Magia: três sistemas e uma contradição
- Mago/Clérigo/etc.: **PM** (mana). Bruxo: **slots de pacto**. Voidwalker: **PM + Saturação**. Avatar: **slots** na tabela da classe, mas listado como **Meio-Conjurador (PM)** no capítulo de magia.
- Magias banidas/modificadas (Bom Fruto, Restauração Menor no 3º, Reviver no 5º) criam uma lista de exceções para memorizar, em vez de uma regra.
- Custo de PM sem relação clara com o preço narrativo que o mundo diz que a magia tem ("dói em Hécate").

### G. Contradições e erros internos

**Lore**
- Putária chama Gula de **"irmã gêmea"**, mas Putária nasce no ano 0 e Gula no ano 20.
- **Elfos Lunares**: criados "no ano 22" e reconstruindo a lua partida "do ano 40 ao 800". A lua só se parte nos anos 60–71 (Arthur × Orgulho).
- Orgulho "acordou recentemente", mas "desapareceu" no ano 71 sem datar a volta.
- Elfos Lunares têm dois blocos idênticos de "A Ascensão e o Massacre".

**Regras**
- Treino de Maestria em Arma, 4ª etapa: **14 semanas** (o total diz 18, provavelmente 4).
- Numeração dos Treinos: **pula do 12 para o 14**. Dádivas: **pula do 17 para o 19**.
- Invocação "Investimento Arriscado": d100 cobre **01–25** e **75–100**. **26–74 não existe.**
- "Maestria Cumulativa" aparece **duas vezes**.
- Referências de página erradas ("pág. 15", "pág. 20").
- Avatar: perde 12 PV e todos os níveis, vira "1 de cada classe", mas a lista de magias o trata como conjurador de nível 6. Isso não fecha com as regras de multiclasse do próprio livro.
- Introdução e "Este volume é uma ferramenta" duplicados.

### H. Origem do Domínio Pessoal
O subsistema (Expansão de Domínio, Choque de Domínios, Hit Kill / Combo Fatal, Julgamento, Sombra Viva, O Infinito, Mímica de Poder) é uma **tradução próxima de Jujutsu Kaisen**. Funciona como homenagem. Mas você pediu **mecânicas nunca vistas**, e esse é o capítulo mais "visto". Proponho reescrever com uma ideia sua (§2.7).

### I. O que falta para ser sistema
Bestiário, itens, economia, exploração/viagem, regras sociais, facções jogáveis, regras de campanha. Sem isso o livro continua um suplemento.

## 1.4 Resumo da auditoria em uma linha por área

| Área | Nota | Ação |
|:--|:-:|:--|
| Lore das Bruxas | A | Manter. Corrigir cronologia. |
| Panteão externo | C | Substituir por entidades próprias. |
| Dádivas/Votos | A− (ideia) / C (balanço) | Virar o motor central. |
| Combate/críticos | C | Trocar tabelas por Cicatrizes. |
| Magia | D | Unificar. |
| Progressão | C | Reescrever. |
| Treino de Interlúdio | B+ | Enxugar e manter. |
| Domínio Pessoal | C | Reescrever com ideia original. |
| Voidwalker | B | Manter como Credor "Vazio". |
| Raças | B | Manter 3 raças-chave. |
| Documento | D | Tirar duplicatas, numeração e referências. |

---

# PARTE 2 — REDESENHO: PENASIA, O SISTEMA

## 2.0 Pilares

> **"Todo poder é crédito. Toda dívida é cobrada."**

1. **Pecado:** os 7 pecados são a estrutura do sistema (atributos, pactos, facções), não só lore.
2. **Preço:** nada é de graça. O custo é visível na mesa, em fichas e no relógio, não só em "interpretação".
3. **Pena:** em português, *pena* é a **pluma** (Anúbis pesa o coração contra ela), a **punição** (pena de morte) e a **piedade** (ter pena). O nome do mundo é o sistema.
4. **O mundo é escrito pela mesa:** conecta com o **Anaviosi** (§2.5).

> **Ponte com Anaviosi.** Anaviosi é o mundo novo, em branco. Penasia é o que ele ainda **não esqueceu**. As Bruxas existem como ecos que os jogadores **redescobrem** ao agir de acordo com cada pecado. Você não perde Penasia: ela volta como lenda que o mundo novo reescreve.

---

## 2.1 O Motor — A Balança

**Sem d20. Sem somar bônus.** Dados contra dados.

- Cada personagem tem 7 **Pecados** (atributos), cada um com um dado de **d4 a d12**.
- Para agir, você rola o dado do **Pecado** relevante: seu **Coração**.
- O Mestre rola a **Pena**: um dado de dificuldade (d4 Trivial · d6 Comum · d8 Difícil · d10 Heroico · d12 Lendário). Contra um NPC, a Pena é o Pecado dele.
- **Coração ≥ Pena = sucesso.** A diferença é a **Margem**.

**Escada de dados no lugar de Vantagem/Desvantagem.**
- Vantagem = seu dado **sobe um degrau** (d6 → d8).
- Desvantagem = **desce um degrau** (d6 → d4).
- Abaixo do d4 você falha sem rolar. Acima do d12 você **rola dois e fica com o maior**.
- Há teto e piso. Nada de empilhar 5d20.

**Extremos (no lugar do crítico):**
- **Coração Cheio** (maior valor do dado): ganha uma **Pena Dourada** (ficha). Pode ser gasta depois para subir um dado.
- **Coração Vazio** (1): sofre **Dívida** (§2.2), ou o Mestre apresenta uma complicação.

| Dado de Pecado | Cenário típico |
|:-:|:--|
| d4 | Fraqueza (gera **Vício**, §2.3) |
| d6 | Comum |
| d8 | Treinado |
| d10 | Excelente |
| d12 | Lendário (máximo mortal) |

**Criação:** distribua `d12, d10, d8, d8, d6, d6, d4` pelos 7 Pecados. O dado mais alto é o seu **Pecado Dominante**, o que revela qual Bruxa "olha" para você.

## 2.2 Os 7 Pecados (atributos) e a Dívida (a moeda do poder)

| Pecado | Domina | Cobra (Cobrança) |
|:--|:--|:--|
| **Ira** | Golpe, violência | Sangue: o Mestre cria um inimigo ou obriga uma luta |
| **Luxúria** | Encanto, graça, corpo | Vínculos: você deve algo a alguém, ou alguém passa a te querer |
| **Gula** | Vigor, apetite, sobrevivência | Corpo: perde Fôlego máximo, fome, carne |
| **Preguiça** | Calma, esquiva, paciência | Tempo: você perde uma ação, uma cena ou semanas de Interlúdio |
| **Inveja** | Olhar, precisão, furto, imitação | Posse: algo que você tem passa para outro |
| **Ganância** | Cálculo, ofício, barganha | Ouro/objeto: deve pagar, ou um item é confiscado |
| **Orgulho** | Vontade, liderança, autoridade | Dignidade: humilhação pública, perda de status |

**Dívida (substitui mana, slots, Saturação e Votos soltos):**
- Qualquer efeito sobrenatural pode ser comprado **a crédito**: você se **Empenha** com uma Bruxa e recebe **Fichas de Dívida**.
- A Dívida tem 3 estágios:

| Dívida | Estado | Regra |
|:-:|:--|:--|
| 0–3 | **Credor Atento** | Sem efeito. |
| 4–6 | **Cobrança** | No início de cada sessão, a Bruxa cobra em **sua moeda** (tabela acima). |
| 7+ | **Execução** | A Bruxa assume uma cena: toma seu personagem, ou o torna **Servo**. |

- **Pagar:** você reduz Dívida por **Pagamentos** (sacrifícios narrativos escolhidos pelo jogador, na moeda da Bruxa).
- **O Vazio (Shar):** é a **Dívida que nunca se paga**. É o 8º credor. Quem empenha com o Vazio ganha poder sem juros, mas **desaparece** do mundo aos poucos (Voidwalker).

> Isso unifica Dádivas, Bruxo, Voidwalker e magia num único eixo: **poder × dívida**.

## 2.3 Contratos, Votos e Quedas (Dádivas reformuladas)

Mantém os pares **Benção + Voto**, com três correções:

1. **Limite de pares = Peso** (nível). Ninguém pega 3 pares de graça no início.
2. **Votos têm medidor**, não alavanca. Cada Voto tem 3 caixas de **Tentação**. Quando a cena oferece algo contra o Voto, o Mestre coloca uma **pluma** na mesa. Você escolhe entre **resistir** (gasta Fôlego ou Pena Dourada) e **ceder** (marca 1 caixa e ganha 1 Pena Dourada).
3. **Escada da Queda:**

| Caixas marcadas | O que acontece |
|:-:|:--|
| 1 | A Benção falha por uma sessão. |
| 2 | Surge o **primeiro efeito** da Punição Suprema. |
| 3 | **Danação**: toda a Punição Suprema. Permanente até Redenção. |

- **Redenção é anunciada de antemão**: cada pacto escreve na criação a **Prova de Redenção** que reverteria a Danação. Isso evita o "o Mestre decide depois".
- As 20 entidades viram **12–14 Credores**, cada um com seu par de efeitos e pecado afim, e **sem nomes alheios**. Anúbis/Stolas/Rainha Corvo, por exemplo, viram **o Pesador, o Coruja e a Rainha-Pena** (§2.6).

## 2.4 Combate sem tabelas: Fôlego, Feridas e Cicatrizes

**Fim dos PV numéricos e das 13 tabelas de crítico.**

- **Fôlego:** sua resistência imediata. Cai com golpes leves e **volta ao fim da cena** (substitui PV de descanso curto).
- **Feridas:** 3 slots (**Leve, Grave, Mortal**). Um golpe com **Margem** alta ignora Fôlego e entra direto numa Ferida.
- **Cicatriz (mecânica central):** quando você toma uma Ferida Grave ou Mortal, **o jogador escreve a Cicatriz em 3 palavras** ("Olho de vidro", "Mão que treme", "Ouvido que zumbe"). A cicatriz vira **etiqueta**:
  - **Mestre pode comprometer** (te cobra uma complicação em troca de uma Pena Dourada).
  - **Você pode invocar** 1×/cena para subir um degrau, quando a cicatriz ajuda ("o olho de vidro não pisca na fumaça").
- A cicatriz **sobrevive à cura**. Toda campanha produz corpos com história, e o Mestre não rola tabela nenhuma.
- **Tipos de dano** deixam de ter tabela. Cada tipo muda **o texto da cicatriz** e **um efeito de uma linha** (fogo: marca; veneno: tremor; vazio: lacuna).

## 2.5 O Mundo Escrito — mecânica do Anaviosi

**Magia e ofícios não começam existindo. Eles são descobertos.**

- A mesa mantém o **Livro das Descobertas** (documento compartilhado).
- Ciclo de 3 estágios:

| Estágio | Como se alcança |
|:--|:--|
| **Hipótese** | Um jogador declara "e se eu juntar X com Y?". O Mestre define a Pena. Sucesso = fica registrado. |
| **Ensaio** | Outro personagem repete e obtém sucesso. A técnica ganha nome. |
| **Lei** | Uma terceira confirmação (de outro personagem) **transforma em regra do mundo**: qualquer um pode aprender. |

- O **primeiro descobridor** ganha o **direito de nomear** a técnica e um **degrau permanente** nela.
- A lista de magias deixa de ser fixa. A "Trama" de cada campanha é diferente, e **cada mesa escreve a sua**.
- Para Penasia clássica, o Mestre pode **pré-carregar** a lista de descobertas ("o mundo já sabe").

## 2.6 A Pesagem — Morte como cena

**Sem Testes Contra a Morte em tally.** Quando a Ferida **Mortal** se enche:

1. Você entra na **Pesagem**: sua **Pena** (a pluma que você acumulou na vida) é pesada contra o seu **Coração**.
2. Três árbitros oferecem **uma saída cada**:

| Árbitro | Oferta | Custo |
|:--|:--|:--|
| **O Pesador** (contratos) | Você **volta**, mas deve um **Contrato** de serviço definido pelo Mestre | Dívida + obrigação |
| **O Coruja** (a própria morte) | Você morre **limpo**: seu corpo e sua história acabam | Nenhum, é o fim |
| **A Rainha-Pena** (memória) | Você morre, mas **o próximo personagem herda uma Cicatriz-Memória** (um traço seu) | Legado, não vida |

3. Heróis podem **barganhar** com **Penas Douradas** para subir uma saída.

Isso transforma "morrer" em uma decisão do jogador e dá **uso mecânico às divindades que você já escreveu**.

## 2.7 Leis — o novo Domínio Pessoal (original)

Em vez de comprar PD, você declara **uma Lei**: **uma frase** que vale numa **área**.

> Exemplos: *"Nada é de graça."* (Ganância) · *"Ninguém corre."* (Preguiça) · *"Ninguém mente."* (Orgulho) · *"Tudo que cai é meu."* (Inveja)

- **Mecânica:** dentro da área, a Lei **vale sempre**. O Mestre é **obrigado** a aplicá-la, mesmo contra você.
- **Tamanho:** a área vem do que você **empenhou** (objeto, local, território), com Dívida proporcional.
- **Contradição** (no lugar de "Choque de Domínios"): quando duas Leis se sobrepõem e **se negam**, ambos os donos fazem uma **Balança** com **Pecado afim**. O vencedor **muda a Lei do rival** por uma cena. Perder 3 Contradições **quebra a sua Lei** até o próximo Interlúdio.
- **Ponto fraco obrigatório**: toda Lei tem uma **Brecha** escrita pelo **outro lado da mesa** (o Mestre, ou outro jogador). Se alguém encontra a Brecha, a Lei cai por uma cena.

Isso é jurídico, narrativo e original. A mecânica **é** a lore das Bruxas (contratos, mentiras, regras).

## 2.8 Progressão: Peso, Penas e Provas

- **Classes saem.** O personagem é montado por **3 escolhas**: **Origem** (raça), **Ofício** (o que faz) e **Credor** (a quem deve).
- **Nível vira Peso** (1–10 normal; 11–13 épico).
- **XP vira Penas.** Você ganha **Penas** quando sofre, paga, resiste a uma Tentação ou **entrega uma Descoberta**. Penas viram Peso.
- **Provas** substituem as Travas: **Reino, Mundo, Deus, Mito** (os mesmos 12/16/20/22 da sua lore). Cada Prova libera **Cargas de Poder**, não só limite de atributo.
- **Atributos não somam +1.** Eles sobem por **Provação**: cada vez que você vence uma Pena de dado superior, **marca uma pluma** no Pecado. 3 plumas = sobe o dado em 1 degrau. Não é possível inflar por downtime.

## 2.9 Treino de Interlúdio (enxuto)

- 22 treinos viram **8 Ofícios** com escada de **3 degraus**.
- Cada degrau custa **Semanas de Foco** e **uma Cicatriz da sessão** (não pode treinar enquanto mancando).
- O calendário **anda**: enquanto você treina, **os Relógios das Bruxas** avançam (cada Bruxa tem uma agenda de 6 passos que a mesa vê).
- **Missão de Desafio** mantida (+1 semana grátis).

## 2.10 Raças, Magia e Poderes

- **3 raças-chave:** **Amaldiçoados** (animais), **Titânicos**, **Elfos das Cinzas**. Elfos Lunares viram **relíquia/NPC** (a extinção é o drama).
- **Titânicos:** mutações continuam, mas **cada mutação vira Cicatriz voluntária** (você escolhe o preço).
- **Magia** = **Ofícios descobertos** (§2.5) pagos com **Dívida** (§2.2). Não existe lista fixa nem tabela de mana.
- **Vazio / Voidwalker** = Credor 8. A **Saturação** é a **Dívida do Vazio**, e **nunca sobe de estágio por cobrança**: ela **apaga** (você some das lembranças dos outros). O Colapso deixa de ser teórico.
- **Poderes épicos** (Sopro Atômico, Hit Kill, etc.) viram **Leis de nível Mito**, com **Brecha escrita**.

---

# PARTE 3 — O QUE É TÃO NOVO QUANTO POSSÍVEL (resumo)

| # | Mecânica | Por que é diferente |
|:-:|:--|:--|
| 1 | **A Balança** (dado vs. dado, Pena de dificuldade) | Sem somar bônus. Dificuldade é dado, não número. |
| 2 | **Dívida a 7 credores** | Poder × crédito. Cada credor cobra em **moeda temática**. |
| 3 | **Votos com medidor de Tentação** | A tentação **tem mecânica**, não só roleplay. |
| 4 | **Cicatrizes como etiquetas escritas pelo jogador** | Substitui 13 tabelas, **ferida vira personagem**. |
| 5 | **Livro das Descobertas** (Hipótese → Ensaio → Lei) | **Regras emergem do jogo.** É a mecânica do Anaviosi. |
| 6 | **A Pesagem** | Morte é uma negociação com 3 divindades. |
| 7 | **Leis com Brecha** | Domínio como cláusula contratual, com ponto fraco escrito por outra pessoa. |
| 8 | **XP = Penas (sofrimento e custo)** | Progride-se pelo que se **paga**, não só pelo que se mata. |

---

# PARTE 4 — ROTEIRO

1. **Núcleo jogável (1 página):** Balança + 7 Pecados + Fôlego/Feridas/Cicatrizes. *Meta: dar para jogar uma luta em 10 minutos.*
2. **Credores e Dívida:** reescrever as 20 Dádivas em 12–14 Credores com Voto + Tentação + Redenção.
3. **Livro das Descobertas:** modelo de documento (e uma lista pré-carregada "Penasia antiga").
4. **A Pesagem e Leis.**
5. **Provas e Peso.**
6. **Revisão de lore:** corrigir cronologia (gêmea, lua, datas) e renomear entidades externas.
7. **Playtest curto:** one-shot de 2 horas com 3 jogadores.

## Decisões em aberto (preciso de você)

1. **Tom:** assumir **comédia por fora, horror por dentro** como identidade, ou **sombrio sério**?
2. **Classes:** topa matar as 12 classes em favor de **Origem + Ofício + Credor**? (É a decisão que mais afasta o D&D.)
3. **Anaviosi:** **mesmo mundo** (Penasia como o passado que o jogo redescobre) ou **cenário separado** que só compartilha o motor?
