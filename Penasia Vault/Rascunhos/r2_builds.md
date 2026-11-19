---
tags: [penasia, rodada2, builds, talentos, treinos, multiclasse]
autor: agente Designer de Personalização e Builds (rodada 2)
fontes: _contexto_v2.md, _diretriz_variedade.md, r2_arqueologo.md, r2_classes.md, progressao.md, penasia.pdf (Treinos p37–50, Características p50–67)
status: proposta para debate
---
# R2: Personalização e Builds

> **Meta do autor:** duas fichas da mesma classe precisam sair muito diferentes, com centenas de escolhas pequenas que se combinam, como no livro antigo, mas o turno de combate tem que continuar rápido.
> **Como chego lá:** a variedade vem de **muitas escolhas pequenas** (Talentos, Treinos, Técnicas, Origem, Dom+Voto, multiclasse). Ela **não** vem de números maiores. Nada aqui sobe o dado base de um Pecado.
> Os números foram conferidos com `node` (empate vence; Brutal = Margem 4+; Grave = Margem 7+, como na régua do Arqueólogo).

---

## 0. Regras de base que este rascunho assume

1. **Anti-inflação (progressao.md):** o dado de Pecado **só** sobe pelos degraus fixos de Peso. Talento, Treino, Origem e multiclasse **nunca** sobem o dado.
   - Todo "+1 atributo" do livro antigo foi **apagado** na conversão. Em cada talento abaixo eu digo o que entrou no lugar dele.
2. **Tetos (r2_classes):** degraus somados valem no máximo **+2** por teste. Bônus de Margem somados valem no máximo **+3** por teste.
   - Talentos dão de preferência **efeito, gatilho, troca de Pecado ou Margem condicional**.
   - Degrau só aparece quando é circunstancial, e ele **conta para o teto**.
3. **Troca de Pecado é a moeda preferida da variedade.**
   - Um talento que deixa você *Aparar com Luxúria* ou *agarrar com Ganância* muda a sua posição na Roda **sem inflar nada**.
   - É o tipo de talento que mais diferencia duas fichas.
4. **Marcos de classe** seguem o r2_classes (escala de 10 Pesos): M1 = Peso 1, M2 = 3, M3 = 4, M4 = 6, M5 = 7, M6 = 9, M7 = 10.

---

## 1. As CAMADAS da ficha

### 1.1 As 10 camadas

| # | Camada | O que é | Quantas opções existem | Pesa no combate? |
|:-:|:--|:--|:--|:-:|
| 1 | **Dados** | onde cai o d12…d4 (Vício e Jejum) | 1.260 arranjos | sim (base) |
| 2 | **Origem** | corpo/raça + traço + Marca d12 (Animais) | ~9 origens/sub-raças | pouco |
| 3 | **Classe** | recurso, reação, técnica-assinatura | 9 (as 8 do r2_classes + **Mago**) | muito |
| 4 | **Repertório** | técnicas **escolhidas** de uma lista de classe | 2 de 6 no M1; mais 1 no M3, M5 e M7 | muito |
| 5 | **Subclasse** | 3 por classe, pelo menos 1 sem Credor | 3 | muito |
| 6 | **Talentos** (as ex-Características) | uma lista aberta, com pré-requisitos | ~50 nesta lista inicial; a meta são 120+ | médio |
| 7 | **Treinos de Interlúdio** | caminhos em semanas, com Missões | 14 treinos, com rotas | médio |
| 8 | **Multiclasse** (Vocação) | uma classe parceira: técnica, Dote e Interclasse | 8 parceiras possíveis | médio |
| 9 | **Dom + Voto** (Pacto opcional) | pares das 20 entidades; Credor à parte | 60 pares | médio |
| 10 | **Magias** | Grimório: colecionar fórmulas | conjuradores; outros por talento, treino ou Vocação | variável |
| — | Ofícios | pontos de perícia | 8 Ofícios | fora do combate |

### 1.2 Em que Peso cada escolha acontece

Proposta, escala de 10 Pesos. Na coluna Marco, "M" é o Marco de classe e "S" é a Subclasse.

| Peso | Degrau de Pecado | Marco de classe | Talento | Outros |
|:-:|:-:|:--|:-:|:--|
| 1 | criação | M1: recurso, reação, **assinatura fixa + 2 técnicas de Repertório** | **1** (geral ou racial) | Origem; 2 Ofícios; 1 Dom+Voto (opcional) |
| 2 | +1 | — | **1** | Interlúdios começam (Treinos) |
| 3 | — | M2: **Subclasse I** | — | Ofício +1 |
| 4 | +1 | M3: **4ª técnica OU Vocação (multiclasse) OU Herança de Origem** | — | 2º Dom+Voto |
| 5 | — | — (Prova Reino) | **1** | Ofício +1 |
| 6 | +1 | M4: **Subclasse II** | — | |
| 7 | — | M5: recurso aprimorado + **1 técnica de Repertório** (ápice) | — | 3º Dom+Voto; 1ª Lei |
| 8 | +1 | — (Prova Mundo) | **1** | |
| 9 | — | M6: **Subclasse III OU Sinergia** | — | Ofício +1 |
| 10 | +1 | M7: Lenda + **1 técnica de Repertório** | **1** | 4º Dom+Voto |

**Princípio:** todo Peso dá **alguma** escolha. Nenhum subir de Peso é "só número".

**Total de Talentos:**
- Pelo Peso: **5 Talentos no Peso 10** (Pesos 1, 2, 5, 8 e 10).
- Por fora do Peso: +1 por Treino completo (o "Talento de Treino", §3) e +1 pela Vocação (§4).
- Um personagem de Peso 10 bem treinado chega a **7–8 Talentos**.

### 1.3 Regra opcional antiga: "Atributo ou Característica"

O livro antigo deixava trocar o aumento de atributo por uma Característica. Aqui fica assim:
- **Troca de Degrau:** num Peso par, o jogador pode **abrir mão do degrau** para pegar **1 Talento**.
- Isso é anti-inflação por definição (o personagem fica com dados menores e com mais versatilidade).
- Limite: 2 trocas na vida.
- É o caminho do "build de muitas ferramentas".

### 1.4 O Repertório (pedido ao agente de classes)

Hoje o r2_classes dá **3 técnicas iniciais fixas**, e isso faz todo Brigão sair igual no Peso 1. Minha proposta:
- **1 técnica-assinatura fixa por classe** (ex.: o Troco do Brigão, a Finta da Navalha).
- **Mais uma lista de 6 técnicas de Repertório**, das quais você escolhe **2** no M1.
- Mais 1 no M3, se não pegar Vocação nem Herança, mais 1 no M5 e mais 1 no M7.

Só no Peso 1 já são **15 combinações por classe**.

Exemplo de Repertório do Brigão:
- Pode Vir
- Abraço de Urso
- Cabeçada (dá Atordoado leve com Margem 2+)
- Escudo de Carne (usa Rancor como Fôlego temporário)
- Grito de Guerra (Movimento: Desafia todos em Contato)
- Arremessar Mobília (ataque à distância Perto, de Ira, com objeto improvisado)

---

## 2. TALENTOS (as ex-Características)

### 2.1 Regras

- **Categorias** (cada talento tem 1):
  - ⚔ Combate
  - 🛡 Defesa
  - ✦ Magia
  - 💬 Social
  - 🧭 Exploração
  - 🧬 Racial
  - ⛓ Interclasse/Sinergia
  - 🜂 Jejum (nova: talentos que **exigem** um Pecado em d4)
- **Tipo**, para o turno ficar rápido (§6):
  - **P** = Passivo (já anotado na ficha; não se decide nada na hora)
  - **G** = Gatilho (acontece sozinho quando X ocorre; não gasta ação)
  - **A** = Ativo (gasta Ação, Movimento ou recurso)
  - **R** = Reação (gasta a reação da rodada)
- **Pré-requisitos possíveis:**
  - um **dado mínimo** num Pecado (ex.: "Gula d8+"), que é a versão nova do "Força 11+" antigo;
  - um **Pecado no Jejum** ("Orgulho d4");
  - uma **etapa de Treino**;
  - um **Peso mínimo**;
  - **classe ou Técnica** (Interclasse).
  - Os pré-requisitos de dado usam o dado **atual**. Então os degraus de Peso abrem talentos novos, e isso é progressão lateral.
- **Pré-requisito de dado não é Credor.** Nenhum talento exige Credor. Só os Interclasse que envolvem subclasse pactual herdam essa exigência.
- **Escolher o mesmo talento duas vezes:** só se o talento disser que pode (como o "Adepto Elemental" antigo).
- **Anti-inflação:** nenhum talento sobe dado. Talentos que dariam degrau permanente viraram troca de Pecado, Margem condicional ou efeito.

### 2.2 Lista inicial: 52 talentos convertidos

Legenda da coluna Origem: **[G]** Característica geral, **[R]** racial, **[I]** interclasse, **[T]** bônus de Treino antigo. Entre parênteses vem o que foi cortado.

#### ⚔ Combate (12)

| # | Talento | Pré-requisito | Tipo | Efeito no motor novo | Origem |
|:-:|:--|:--|:-:|:--|:--|
| 1 | **Ceifador** | Peso 4+ | G | 1× por turno: se você causar Ferida Grave ou derrubar alguém À Beira, faz **1 ataque extra** com −1 degrau (dá para trocar de alvo). | [G] Ceifador |
| 2 | **Tudo ou Nada** | Ira d8+ (corpo a corpo) **ou** Inveja d8+ (à distância) | A (declarar) | Declare antes de rolar: −1 degrau no Coração. Se acertar, **+2 Margem só para a severidade** (não ajuda a acertar). | [G] Golpe Devastador + Disparo Letal |
| 3 | **Atacante Bestial** | Ira ou Luxúria d6+ | G | Acerto com Margem 2–3 contra alvo que já tem uma Ferida: aplica também a condição leve (faixa 4–5) da Tabela Brutal do seu tipo de dano. | [G] Atacante Bestial (cortado: rerrolar o dano) |
| 4 | **Ambidestro** | Luxúria d6+ | A | Com duas armas: 1× por turno, ao errar um ataque corpo a corpo, pague 1 Fôlego e ataque com a outra mão (−1 degrau, outro Pecado permitido). | [G] Ambidestro (cortado: +1 CA) |
| 5 | **Investida Poderosa** | — | A | Se você andou 1 zona em linha reta antes de atacar: escolha +1 Margem **ou** empurrar o alvo 1 zona se acertar. | [G] Investida Poderosa |
| 6 | **Mestre da Haste** | arma de haste | P/G | Zona de Perigo: quem **entra** no seu Contato leva um golpe livre (1× por rodada). | [G] Maestria em Arma de Haste |
| 7 | **Sentinela** | Peso 4+; Ira ou Preguiça d8+ | G | O seu golpe livre que acerta zera o Movimento do alvo. Quem tenta Recuar do seu Contato provoca golpe livre mesmo assim. | [G] Sentinela |
| 8 | **Vingador** | Sentinela **ou** Peso 6+ | R | Um inimigo em Contato com você ataca outra pessoa: você ataca esse inimigo na hora. | [G] Vingador |
| 9 | **Matador de Conjuradores** | — | R/P | Um inimigo em Contato conjura ou gasta recurso sobrenatural: você o golpeia. Se acertar, a magia dele sai com −1 degrau. | [G] Matador de Conjuradores |
| 10 | **Especialista em Briga** | Treino de Luta I **ou** Explorador (rota Cidade) I | P/G | Desarmado e arma improvisada contam como arma. Um acerto desarmado com Margem 2+ **também agarra**, sem nova Ação. | [G] Especialista em Briga (cortado: +1 For/Con) |
| 11 | **Imobilizador** | Gula d8+; Treino de Luta II | A | +1 Margem contra quem você agarra. Ação *Imobilização Total*: você e o alvo ficam Presos, e ele não pode reagir com Luxúria. | [G] Imobilizador |
| 12 | **Olho de Águia** | Inveja d6+ | P | Atirar em Longe não tem −1. Atirar em Contato não tem penalidade. Ignora meia cobertura. | [G] Olhos de Águia + Especialista em Besta |

#### 🛡 Defesa (9)

| # | Talento | Pré-requisito | Tipo | Efeito | Origem |
|:-:|:--|:--|:-:|:--|:--|
| 13 | **Duelista Defensivo** | Luxúria d6+; arma leve | R | Você pode **Aparar com Luxúria** em vez de Ira. É troca de Pecado na Roda. | [G] Duelista Defensivo |
| 14 | **Tanque de Guerra** | Treino Aço (rota Armadura) III | P | Com Armadura 2: golpe físico não-sobrenatural que te acerta tem −1 de Margem (mínimo 1). | [G] Maestria em Armadura Pesada (cortado: +1 For) |
| 15 | **Mestre de Escudo** | escudo | A/R | Ataque com Margem 2+: empurra o alvo grátis. Contra efeito de área, falhar a defesa conta como Margem −2. | [G] Mestre de Escudo |
| 16 | **Mobilidade** | Luxúria ou Preguiça d6+ | P | Ignora terreno difícil. Depois de atacar alguém, sai do Contato **dele** sem provocar golpe livre. | [G] Mobilidade |
| 17 | **Reflexos de Combate** | — | P | A sua **primeira reação de cada cena** ganha +1 degrau (circunstancial). | [G] Reflexos de Combate |
| 18 | **Sentidos Aguçados** | Inveja d6+ | P | Você nunca fica Surpreso. Inimigos ocultos ou invisíveis não ganham degrau contra você. | [G] Sentidos Aguçados + [T] Alerta Constante |
| 19 | **Resiliente** | Peso 6+ | P | Escolha um Pecado: 1× por cena, rerrole uma Contenção ou defesa contra o sobrenatural feita com ele. Pode pegar 1× por Pecado. | [G] Resiliente |
| 20 | **Robusto** | Gula d8+; Peso 4+ | P | +1 Fôlego máximo. É o **único** talento de Fôlego máximo; não se acumula com nenhum outro. | [G] Robusto |
| 21 | **Resistente** | Gula d6+ | P | Ao Respirar você recupera +1 Fôlego. Venenos e doenças: +1 degrau na defesa contra eles. | [G] Resistente (cortado: +1 Con) + [R] Fortitude Anã |

#### ✦ Magia (7)

| # | Talento | Pré-requisito | Tipo | Efeito | Origem |
|:-:|:--|:--|:-:|:--|:--|
| 22 | **Iniciado em Magia** | — | A | Aprende 2 **magias menores** e 1 magia de 1º Círculo do Grimório de uma classe conjuradora. Conjura pelo custo dessa classe, pagando em Fôlego. É **a porta da magia para quem não é conjurador**. | [G] Iniciado em Magia (cortado: +1 atributo) |
| 23 | **Adepto Elemental** | conjura | P | Escolha um tipo de dano: ignora a redução de Margem que vem de resistência a esse tipo, e um 1 no dado de magia conta como 2. Pode pegar várias vezes. | [G] Adepto Elemental |
| 24 | **Atirador de Magia** | conjura; Peso 4+ | P | As magias de ataque alcançam 1 faixa a mais (Perto vira Longe) e ignoram meia cobertura. | [G] Atirador de Magia |
| 25 | **Conjurador de Guerra** | conjura | P/G | Conjura com as mãos ocupadas. O seu golpe livre pode ser uma magia de alvo único. | [G] Conjurador de Guerra |
| 26 | **Conjurador de Ritual** | Teólogo II **ou** Arcano III | A | Magias com a etiqueta *ritual* custam 10 minutos e **nenhuma Dívida**. Pode copiar rituais achados. | [G] Conjurador de Ritual |
| 27 | **Mente Blindada** | conjura; Gula d6+ | P | A magia mantida não cai por dano com Margem ≤ 2. 1× por cena, mantém automaticamente. | [G] Mente Blindada |
| 28 | **Interferência do Destino** | Peso 4+; Teólogo III **ou** Resiliência Mental II | A (declarar) | 3 Fios por sessão: **antes** da rolagem de alguém em Perto, dê +1 ou −1 degrau. | [G] Interferência do Destino |

#### 💬 Social e 🧭 Exploração (9). Ficam fora do limite de combate (§6)

| # | Talento | Pré-requisito | Efeito | Origem |
|:-:|:--|:--|:--|:--|
| 29 | **Ator** 💬 | Luxúria ou Orgulho d8+ | Imita vozes. Num disfarce, quem tenta desmascarar você rola contra a sua Luxúria com −1 degrau. | [G] Ator (cortado: +1 Car) |
| 30 | **Líder Inspirador** 💬 | Orgulho ou Luxúria d8+; Influência II **ou** Estrategista II | 10 minutos de discurso: até 6 aliados entram na próxima cena com +2 Fôlego temporário. | [G] Líder Inspirador |
| 31 | **Cavaleiro** 🧭⚔ | — | Montado: +1 Margem contra alvo a pé menor que a montaria. Reação: um golpe na montaria vem para você. | [G] Cavaleiro |
| 32 | **Explorador de Cavernas** 🧭 | Inveja ou Ganância d6+ | +1 degrau para achar armadilhas e passagens; armadilhas te acertam com −2 Margem. | [G] Explorador de Cavernas |
| 33 | **Observador** 🧭 | Inveja ou Ganância d8+ | Lê lábios. Passiva fixa: quem quer passar por você despercebido enfrenta **Pena 5**. | [G] Observador (cortado: +1 atributo) |
| 34 | **Mente Afiada** 🧭 | Ganância d6+ | Memória eidética de 1 mês, 3 idiomas, cifras próprias (para quebrar, Pena = metade do dado de Ganância + 2). | [G] Mente Afiada + Poliglota (cortado: +1 Int) |
| 35 | **Perito** 🧭 | — | +1 ponto de Ofício. Conta no teto de Ofício. | [G] Perito + [R] Prodígio |
| 36 | **Atleta** 🧭⚔ | Ira ou Luxúria d6+ | Levantar do chão custa 0. Escalar e saltar não gastam Movimento extra. | [G] Atleta (cortado: +1 For/Des) |
| 37 | **Sortudo** 🧭⚔ | Peso 4+ | 3 Sortes por sessão: rerrole **o seu próprio** dado. Não mexe em dado alheio, então não precisa de declaração prévia. | [G] Sortudo |

#### 🜂 Jejum (4, nova categoria). Fazem do d4 uma identidade, não só um buraco

Pegar um destes **substitui a deficiência do Jejum** daquele Pecado (a tabela do Arqueólogo, §3) **enquanto** ele estiver em d4.

| # | Talento | Pré-requisito | Tipo | Efeito | Origem |
|:-:|:--|:--|:-:|:--|:--|
| 38 | **Tática Suja** | **Orgulho d4** ("honra é para os mortos") | G | Ataque contra alvo maior que está em Contato com um aliado seu: com Margem 1+, também cega **ou** derruba o alvo. | [R] Tática Suja (Goblin) |
| 39 | **Desvanecer** | **Ira d4** (o covarde sábio) | R | Logo depois de perder Fôlego: fica Oculto até o fim do seu próximo turno ou até atacar. 1× por cena. | [R] Desvanecer (Gnomo) |
| 40 | **Segunda Chance** | **Ganância d4** (não guarda nada, só a sorte) | R | Um inimigo que você vê te acertou: obrigue-o a rerrolar o ataque, declarando antes de saber a Margem. Recarrega quando a cena começa. | [R] Segunda Chance (Halfling) |
| 41 | **Pés de Sorte** | **Preguiça d4** (nunca para quieto) | R | Você falhou contra um efeito de área: pule 1 zona para fora. Se sair da área, não sofre nada. | [R] Pés de Sorte (Coelho) |

#### 🧬 Raciais (só as 4 Origens novas; as raças de D&D saem)

| # | Talento | Origem exigida | Tipo | Efeito | Origem |
|:-:|:--|:--|:-:|:--|:--|
| 42 | **Chama da Revolução** | Elfo das Cinzas | A (Movimento, 1× por cena) | Aura em Perto até o fim da cena: aliados recebem −2 de Margem do frio e +1 Fôlego temporário no início do turno deles. | [R] Chama da Revolução (cortado: +1 Car) |
| 43 | **Guerreiro de Guerrilha** | Elfo das Cinzas | G | 1ª rodada: +1 Margem de fogo contra quem ainda não agiu. Ao Recuar, deixa fumaça (a zona antiga fica sem visão por 1 rodada). | [R] Guerreiro de Guerrilha |
| 44 | **Tecnologia Gravitacional** | Elfo Lunar | R (1× por cena) | Campo de Repulsão: quem te acerta em Contato rola Gula contra a sua Ganância; se perder, é empurrado 1 zona e Derrubado. | [R] Tecnologia Gravitacional + Campo de Repulsão |
| 45 | **Vingança Psíquica** | Elfo Lunar | G | Você vence a defesa contra um efeito mental: o autor dele perde 2 Fôlego. | [R] Vingança Psíquica |
| 46 | **Evolução Forçada** | Animal Amaldiçoado; Peso 4+ | P/A | Escolha uma Arma Biológica: *Espinhos* (quem te agarra perde 1 Fôlego), *Glândula* (cone de veneno, 1× por cena) ou *Carapaça* (+1 Armadura, sem passar do teto 2). | [R] Evolução Forçada (cortado: +1 Con) |
| 47 | **Instinto Primitivo** | Animal Amaldiçoado | P/R | Nunca Surpreso. Fúria Bestial: quando derruba um inimigo, a reação move 1 zona e morde outro alvo. | [R] Instinto Primitivo Desperto |
| 48 | **Adrenalina Titã** | Humano Titânico | G | Ao derrubar alguém À Beira: +2 Fôlego temporário. | [R] Quebra-Hordas (Orc), reaproveitado no Titã |

#### ⛓ Interclasse (exigem Vocação, §4). Amostra; a lista completa está no §4.3

| # | Talento | Exige | Efeito | Origem |
|:-:|:--|:--|:--|:--|
| 49 | **Overkill** | Brigão + Vocação Navalha (ou o contrário) | Abre mão de ataques extras: −1 degrau no Coração, +3 Margem; se errar, fica Atordoado. Conferido: d10 contra d8 vai de 65/26/8 % (acerto/Brutal/Grave) para 56/44/16 %. | [I] Overkill |
| 50 | **Ás Maior** | qualquer marcial + Vocação Mago (ou o contrário) | Magia de 1º–2º Círculo que tem como alvo **só você ou a sua arma** sai como Movimento. | [I] As Maior |
| 51 | **Sinfonia da Destruição** | Brigão + Vocação Confessor | Gastar 1 Rancor + 1 Conta juntos: um aliado em Perto ganha a sua Fúria: +1 Margem com Ira até gastar. | [I] Sinfonia da Destruição |
| 52 | **Gambito Arcano** | Navalha + Vocação Mago | A Finta pode ser uma ilusão (Ganância no lugar de Luxúria) e alcança Perto. | [I] Gambito Arcano |

**O que é inflação e ficou de fora:**
- Todos os "+1 atributo".
- Proficiências (o motor novo não tem proficiência).
- "Resistência a X" genérica: virou −2 Margem, só em talento racial ou de treino.
- Velocidade "+1,5 m": o motor usa zonas.

**Meta para o livro:** chegar a **~120 talentos**, com ~15 por categoria. Os outros 40+ raciais antigos podem voltar como **talentos de Marca** dos Animais Amaldiçoados (Garras, Couro Escamado, Pele de Montanha…), sem nome de raça de D&D.

---

## 3. TREINOS DE INTERLÚDIO (enxugados)

### 3.1 Estrutura, mantida do livro antigo

- **Custo:** em **Semanas de Foco**. O progresso fica salvo.
- **3 etapas em vez de 4–5:**
  - I = 1 semana
  - II = 2 semanas
  - III = 4 semanas
  - Total: **7 semanas**, contra 6–20 no livro antigo.
- **Mentoria:** corta o tempo pela metade (NPC melhor que você; custa Riqueza ou favor).
- **Prática em Sessão:** usar o treino num risco real vale 2 semanas.
- O teto antigo continua: a redução máxima é 50%, e as duas não se acumulam.
- **Missões de Desafio (inegociável):**
  - No início da sessão, o jogador declara o foco. O Mestre escolhe ou adapta uma Missão da lista do treino.
  - Cumprir a Missão = 1 semana grátis.
  - Cumprir de forma espetacular = a etapa inteira.
  - **Novo:** cumprir uma Missão **também dá +1 Pena** (máximo 1 por sessão). Isso liga o treino ao sistema de XP do progressao.md, que hoje só paga pela dor.
- **Bônus de Treino Completo:**
  - Você ganha **1 Talento de Treino de graça**, da lista daquele treino. Ele **não** gasta o seu espaço de Talento.
  - Também passa a **cumprir o pré-requisito** de vários Talentos.
  - O "+1 atributo" antigo saiu.
- **Limite:** no máximo **1 treino ativo** e **3 treinos completos até o Peso 10**. Isso força a escolha.

**O que cada etapa dá:**
- **Etapa I:** +1 ponto no Ofício ligado ao treino, ou um uso narrativo.
- **Etapa II:** uma passiva pequena.
- **Etapa III:** uma ativa 1× por cena ou uma reação.

### 3.2 Os 14 treinos (cobrem os 22 antigos)

| # | Treino (antigos) | I · II · III | Talento de Treino (completo) | Missões de Desafio (mantidas) |
|:-:|:--|:--|:--|:--|
| 1 | **Influência**, rotas Corte ou Palco (1 Influência + 15 Artista) | Ofício Lábia · Lê intenções (+1 degrau para discernir após 1 min de conversa) · **Presença de Espírito** (reação, 1× por cena: acaba com o medo em você; na rota Palco, num aliado) | *Memória Infalível* **ou** *Apresentação Cativante* (aliados em Perto +2 Fôlego temporário, 1× por cena) | **O Diplomata Improvável**: "Convença o líder dos bandidos a desistir do combate…" · **Mentira Arriscada** · **O Pacificador** · **O Distraidor** · **O Motim** · **Duelo de Bardos** |
| 2 | **Maestria em Arma** (2) — uma arma **específica** | Ofício Armas · Manobra Rápida (depois de atacar com ela, Ajudar/Recuar como Movimento) · **Técnica de Assinatura** por tipo: Contundente atordoa, Cortante *Corte de Bônus* / *Guarda Ativa*, Perfurante *Ponto Fraco* / sangra, À Distância sem −1 em Longe | **Crítico Letal**: com essa arma, a Tabela Brutal rola 2 vezes e fica a maior | **O Duelo de Honra**: "Derrote um inimigo de nível igual ou superior em combate individual, sem interferência dos aliados." |
| 3 | **Arcano**, rotas Foco ou Trama (3 Maestria em Magia + 4 Compreensão) | Ofício Saber Arcano · **Magia Focada** (escolha 1 magia: custa 1 de Dívida a menos) · *Eficiência da Trama* (1× por sessão, 1 magia de 1º–2º Círculo sem custo) | *Assinatura Arcana* (+1 Margem na Magia Focada) **ou** *Mente Expandida* (+2 magias no Grimório) | **O Finalizador**: "Derrote um chefe usando sua Magia Focada como golpe final." · **O Decifrador** · **Contra-Teoria** |
| 4 | **Agilidade** (5A + 20 Defesa Ágil) | Iniciativa: age na 1ª fatia · Levantar custa 0 · **Reflexo Instintivo** (reação, 1× por cena: +1 degrau numa defesa de Luxúria ou Preguiça) | *Evasão*: em efeito de área, vencer = nada; perder = Margem −2 | **Parkour Mortal** · **O Intocável**: "Passe um combate inteiro se movendo a cada turno sem sofrer dano de Ataques de Oportunidade." · **Corrida Contra o Tempo** · **Reflexo Impossível** · **Intocável**: "Termine um combate onde foi alvo de pelo menos 3 ataques, mas não sofreu nenhum dano." |
| 5 | **Luta** (5B) | Desarmado = arma · *Postura de Ferro* (agarrar e empurrar: +1 Margem) · **Manobra Defensiva** (reação: Margem −2 contra um golpe corpo a corpo) | **Contra-Golpe**: um atacante em Contato **falha por 4+**? Você golpeia de graça. *É a defesa que faz a Roda girar.* | **O Campeão do Fosso** · **Imobilização Tática**: "Mantenha um inimigo importante Agarrado ou Caído por 2 rodadas seguidas…" |
| 6 | **Superar o Jejum** (5C Condicionamento Puro, **reconvertido**) | longo: I 2 sem · II 4 · III 6 | **Remove a deficiência** do seu Jejum (§3 do Arqueólogo). **O dado continua d4.** É o "recuperar atributo muito baixo" antigo, sem inflação. | Missão livre: o Mestre propõe um teste com o próprio Jejum em risco real. |
| 7 | **Resistência** (5D) | +1 degrau contra veneno e doença · Remove 1 Fadiga ao Respirar · *Pele de Pedra* (−1 Margem física recebida, sem Armadura) | **Último Suspiro**: 1× por sessão, ignora 1 Marca da Pesagem | **Esponja de Dano** · **O Implacável** |
| 8 | **Ofício** (7 Perícia) — repetível | +1 ponto · Foco Momentâneo (1× por cena, +1 degrau no Ofício) · *Maestria Confiável* (no Ofício, o d4 vira d6) | *Especialista Supremo*: 1× por sessão, sucesso automático no Ofício contra Pena ≤ 6 | **O Teste de Pressão**: "Realize um teste da perícia com CD alta durante uma situação de vida ou morte." |
| 9 | **Explorador**, rotas Ermo ou Cidade (8 + 18 Sobrevivente Urbano) | Ofício · Sentidos/Ouvidos na Rua · Passo Seguro / Navegador Urbano | *Alerta Constante* + *Pressentir Perigo* (Ermo) **ou** *Rede de Contatos* (Cidade) | **O Batedor** · **Sobrevivente Solitário** · **A Palavra na Rua** |
| 10 | **Infiltração** (9) | Ofício Furtividade · Camuflagem na penumbra · Passo Sombrio (1× por cena: 1 zona sem ser visto) | **Golpe Súbito**: contra alvo Surpreso, você não rola para acertar, só a Margem (role seu dado e subtraia 1) | **O Fantasma** · **Sabotagem Silenciosa** |
| 11 | **Aço**, rotas Armadura ou Escudo (10 + 11) | Armadura: ignora o −1 de Luxúria da Armadura 2 · Juntas Lubrificadas · *Negação de Ponto Vital* (1× por cena, anula uma Tabela Brutal recebida). Escudo: Defesa Rápida · Batida de Escudo · Muralha Protetora | **Baluarte de Aço** (Tanque de Guerra liberado) **ou** **Guardião Protetor** (reação: você vira a defesa no lugar de um aliado em Contato) | **Vigilância de Ferro** · **Controle de Multidão** · **Reflexo Perfeito** |
| 12 | **Bancada**, rotas Ferreiro, Boticário ou Artífice (14 + 12 + 22) | Ofício · fabrica pela metade · Reparo de Batalha / Uso Rápido (beber ou untar como Movimento) / Autômato | **Análise de Ponto Fraco** (aliados +1 Margem contra criatura de metal) / *Receita Potente* / *Mini-Sentinela* (Mina Sonora ou Gás) | **Destruidor de Equipamento**: "foque em quebrar a arma ou o escudo de um chefe" · **Forja Improvisada** · **Colheita de Risco** · **Antídoto de Emergência** · **Sabotagem Química** · **MacGyver** · **Manutenção de Combate** |
| 13 | **Teólogo** (16) | Ofício Fé · Mente Protegida (+1 degrau contra medo e encanto de mortos-vivos e corruptores) · Voz do Teólogo | **O Segredo das Bruxas**: ritual de contato. **É a porta do Pacto** (o Mestre define custo e Pena) | **Exorcismo de Campo** · **Conversão** |
| 14 | **Cirurgião** (17) | Ofício Medicina · Medicina de Combate (Ação: +2 Fôlego num aliado) · Triagem (estabilizar como Movimento) | **Salvador**: estabilizar remove 1 Marca da Pesagem | **Não Morra no Meu Turno**: "Mantenha um aliado vivo e consciente durante um combate inteiro, mesmo que ele seja focado pelos inimigos." · **Cirurgia de Campo** · **O Diagnóstico** |
| + | **Estrategista** (19), **Caçador** (21), **Resiliência Mental** (23), **Domínio** (6) | Estes quatro **viram rotas** de treinos acima ou ficam ligados a sistemas próprios: Estrategista vira rota *Comando* do treino 1 (Talento: *Reposicionamento*, Movimento que move um aliado 1 zona sem golpe livre). Caçador vira rota *Presa* do treino 2 (Talento: *Faro de Sangue*, +1 Margem contra a presa marcada). Resiliência Mental vira rota do treino 7 (Talento: *Vontade de Ferro*, reação que anula medo, encanto ou confusão 1× por cena). Domínio vai para o módulo de Leis (Talento: *Imposição de Vontade*, +1 degrau no Confronto de Leis). | **O Comandante** · **Retirada Organizada** · **A Caçada** · **Abate Limpo** · **O Teste de Sanidade** · **A Verdade Dura** · **Meditação no Caos** · **O Choque de Reis** |

As **Missões ficam todas**: são 40+ objetivos de combate e de cena prontos, e é isso que o Arqueólogo pôs como inegociável nº 5.

---

## 4. MULTICLASSE: a Vocação

### 4.1 Como funciona

Sigo o r2_classes: **não se divide nível.** A multiclasse se chama **Vocação** e entra no **M3 (Peso 4)**, no lugar da 4ª técnica de classe.

Ao tomar uma **Vocação** em outra classe, você ganha **três coisas** (a diretriz pede que a multiclasse dê coisas):

1. **Técnica Emprestada:** 1 técnica (a assinatura ou uma do Repertório) da classe parceira.
   - O recurso alheio é pago em Fôlego: 1 Fôlego por unidade (regra do r2_classes).
2. **Dote da Vocação:** um benefício passivo pequeno, fixo para cada classe parceira:

| Vocação em… | Dote (o "talento/magia extra" da multiclasse) |
|:--|:--|
| Brigão | Ganha a reação *Aguentar (Gula)*, pagando 1 Fôlego |
| Vigia | 1 Mira grátis no 1º alvo de cada cena |
| Navalha | Ganha a reação *Desviar (Luxúria)* |
| Armador | 1 Estaca por cena (Etiqueta à escolha) |
| Confessor | 1 Conta por cena (mexe na Hora de um Confessor aliado ou usa a sua própria Hora de 1 casa) |
| **Mago** | **Magia extra:** 2 magias menores + 1 magia de 1º Círculo no seu Grimório |
| Destilador | 1 Essência guardada no início da cena |
| Andarilho | Âncora com Limite Seguro 2 e a técnica *Nulo* (gera 2) |

3. **Abre os Talentos Interclasse** da dupla (§4.3) e, no M6, a **Sinergia** (a do r2_classes, no lugar da Subclasse III).

### 4.2 Limites

- **Uma Vocação no M3.** Uma **segunda Vocação** só a partir do Peso 7, e ela **custa um espaço de Talento**. Máximo de 3 classes no total.
- **Avatar não pega Vocação** (regra do livro antigo e do r2_classes). Em troca, o Panteão de Um Homem Só já faz esse papel.
- **Técnica de subclasse pactual não é emprestável** sem aquele Credor.
- **Pré-requisito de dado:** nenhum (o "11 em dois atributos" do livro antigo saiu). Exceção: a Técnica Emprestada **não usa o Piso de Ofício d6** da outra classe, então ela rola o seu dado real. Uma Vocação no Pecado do seu Jejum é possível, mas fraca. É escolha, não proibição.

### 4.3 Talentos Interclasse (as 30 Sinergias Híbridas antigas, convertidas)

Talento Interclasse = Talento normal (gasta o espaço), exige Vocação. Sinergia = escolha de Marco M6, mais forte. Os nomes antigos voltam:

| Talento Interclasse | Dupla | Efeito | Antiga |
|:--|:--|:--|:--|
| Overkill | Brigão × Navalha | ver nº 49 | Overkill (Guerreiro/Monge) |
| Ás Maior | marcial × Mago | ver nº 50 | As Maior (Guerreiro/Mago) |
| Sinfonia da Destruição | Brigão × Confessor | ver nº 51 | Sinfonia (Bárbaro/Bardo) |
| Gambito Arcano | Navalha × Mago | ver nº 52 | Gambito Arcano |
| Desvanecer na Escuridão | Vigia × Navalha | Emboscada: o 1º acerto da cena contra alvo Surpreso tem +2 Margem e você fica Oculto de graça | Desvanecer na Escuridão |
| Engenheiro Tático | Armador × Navalha | Uma Estaca de Armadilha que dispara dá 1 Fio contra o alvo | Engenheiro Tático |
| Canção do Ki | Confessor × Navalha | Intervir pode gastar 1 Fio no lugar de 1 Conta | Canção do Ki |
| Geometria Sagrada | Confessor × Mago | Magias de toque alcançam Perto; Absolver pode usar Ganância | Geometria Sagrada |
| Alma de Matilha | Vigia (Caçador) × Brigão | O seu companheiro animal usa a sua Mira | Alma de Matilha |
| Latir para a Lua | Brigão × Origem Animal | Rancor 3+: a forma bestial ativa sem ação | Latir para a Lua |
| Porcos de Guerra | Mago × Andarilho | A magia básica do Mago pode gerar Saturação no lugar de Dívida | Porcos de Guerra |
| Holy Diver (renomear: *Mergulho Sagrado*) | Confessor × qualquer subclasse pactual | Ao acertar, aplica a Moeda do Credor e Absolver no mesmo turno | Holy Diver |

As Sinergias de M6 (Fúria Majestosa, Fome Furiosa, Motor de Avareza, Estase Sincopada, Fantasma do Vácuo, Fúria do Evento Horizonte, Égide da Entropia, Caçador Impecável) continuam **como estão no r2_classes**.

---

## 5. CONTA DE VARIEDADE

### 5.1 Hipóteses (conservadoras)

| Fator | P5 | P10 |
|:--|--:|--:|
| Arranjo dos dados (7!/(2!·2!)) | 1.260 | 1.260 |
| Degraus de Peso (combinações) | 28 | 462 |
| Origem | 9 | 9 |
| Classe | 9 | 9 |
| Repertório (2 de 6 no M1; +2 de 4 no M5/M7) | 15 | 90 |
| Subclasse | 3 | 3 (I–III do mesmo caminho) |
| M3: 4ª técnica (4) / Vocação (8 × 3) / Herança (4) | 32 | 32 |
| M6: Subclasse III / Sinergia | — | 6 |
| Talentos (3 de ~30 elegíveis no P5; 5 de ~36 no P10) | 4.060 | 376.992 |
| Treinos (1 completo com rota no P5; 3 completos no P10) | 42 | 9.828 |
| Dom + Voto (0–2 de 60 pares no P5; 0–4 no P10) | 1.831 | 523.686 |

### 5.2 Resultado (node)

| Medida | Peso 5 | Peso 10 |
|:--|--:|--:|
| **Combinações brutas** (tudo multiplicado) | **≈ 1,3 × 10¹⁸** | **≈ 4,7 × 10²⁷** |
| Só classe + Repertório + Subclasse + M3 + Talentos | 5,3 × 10⁷ | 1,8 × 10¹¹ |
| **Por classe**, sem dados nem Dom+Voto | 5,8 milhões | 1,9 × 10¹⁰ |
| **Builds perceptivelmente diferentes por classe** (*) | **≈ 22.700** | **≈ 1,5 milhão** |

(*) Contagem "honesta": subclasse × Repertório × tipo de rota do M3 (técnica / Vocação / Herança) × **mistura de categorias** de Talento (combinações com repetição das 7 categorias) × com ou sem Pacto.
- P5: 3 × 15 × 3 × 84 × 2 = 22.680.
- P10: 3 × 90 × 3 × 2 × 462 × 2 = 1.496.880.

**Leitura:** mesmo contando só o que muda **o jeito de jogar**, uma mesa de 5 Brigões no Peso 5 tem chance praticamente nula de repetir uma build. É a sensação do livro antigo, sem inflação.

### 5.3 Três Brigões no Peso 5 que jogam de formas muito diferentes

Os três têm **Rancor**, **Troco** e **Aguentar**. Fora isso, quase nada se repete.

#### A) "Porteira", a muralha (sem Pacto)

| Camada | Escolha |
|:--|:--|
| Dados | Gula d12, Ira d10, Orgulho d8, Preguiça d8, Inveja d6, Luxúria d6, Ganância d4 → degraus: Ira d12 (P2), Preguiça d10 (P4) |
| Origem | Humano Titânico (Centelha Titã) |
| Repertório | Pode Vir, Grito de Guerra |
| Subclasse | Muralha de Carne (Interpor) |
| M3 | 4ª técnica: Escudo de Carne |
| Talentos | P1 **Mestre de Escudo**, P2 **Reflexos de Combate**, P5 **Sentinela** (só abre no Peso 4+, por isso vem por último) |
| Treino | Aço, rota Escudo, completo → **Guardião Protetor** grátis |
| Dom+Voto | nenhum |

**Como joga:** fica parado numa porta. Quem passa leva golpe livre e perde o Movimento (Sentinela). Quem ataca um aliado dá Interpor ou Guardião Protetor. Quem entra em Contato apanha do escudo. Quase não se move e decide **onde o inimigo pode ir**. Quer ser dominado para encher Rancor.

#### B) "Brasa", a incitadora (pactual, Ira em d6!)

| Camada | Escolha |
|:--|:--|
| Dados | **Orgulho d12**, Luxúria d10, Gula d8, Inveja d8, **Ira d6**, Preguiça d6, Ganância d4 |
| Origem | Elfo das Cinzas |
| Repertório | Grito de Guerra, Abraço de Urso |
| Subclasse | **Amante da Ira** (Credor Bruxa da Ira, Rigor 2). *Credor ≠ dado: a Ira dela é d6.* |
| M3 | **Vocação Confessor** (Dote: 1 Conta por cena; Técnica Emprestada: *Penitência*) |
| Talentos | P1 **Chama da Revolução**, P2 **Líder Inspirador** (Orgulho d12 + Influência II), P5 **Sinfonia da Destruição** (Interclasse) |
| Treino | Influência (Corte), completo → *Memória Infalível*; Influência II já abre o Líder |
| Dom+Voto | Orgulho: *Decreto do Soberano* / *Obsessão Cega* |

**Como joga:** quase não bate. Dá **Fúria aos inimigos** com Ira para Todos e Penitência, deixa as reações deles previsíveis e entrega a Roda ao grupo. Enquanto isso, a aura de Chama e a Sinfonia empurram os aliados. No Peso 9 vai para a **Fúria Majestosa**. É uma "Brigona" de suporte e controle.

#### C) "Tranca", o lutador de taverna arcano (sem Pacto, multiclasse Mago)

| Camada | Escolha |
|:--|:--|
| Dados | **Ganância d12**, Gula d10, Ira d8, Luxúria d8, Inveja d6, Preguiça d6, **Orgulho d4** |
| Origem | Animal Amaldiçoado (Canídeo, Marca d12: *Dor da Evolução*) |
| Repertório | Abraço de Urso, Arremessar Mobília. *Troca de Escola* (M1): troca **Ira pela vizinha Luxúria**, então luta com Gula d10 e Luxúria d8. A Ganância d12 fica para a magia. |
| Subclasse | Mandíbula (Bocado) |
| M3 | **Vocação Mago**. Dote: 2 magias menores + 1 de 1º Círculo (ex.: *Correntes*). Técnica Emprestada: o projétil básico do Mago |
| Talentos | P1 **Tática Suja** (Orgulho d4: substitui a deficiência *Desagradável*), P2 **Especialista em Briga**, P5 **Ás Maior** (Interclasse) |
| Treino | Luta, completo → **Contra-Golpe** |
| Dom+Voto | Inveja: *O que é Seu é Meu* / *Cobrança Constante* |

**Como joga:** agarra com um soco (Especialista em Briga). Encanta a própria mão com Ás Maior usando o Movimento. Cega o alvo grande (Tática Suja). Rouba o degrau do inimigo (Dom da Inveja) e pune quem erra feio (Contra-Golpe). É sujo, imprevisível e meio mago, e quase não usa Ira.

**Resumo dos três:** A **controla espaço**. B **controla a Roda** e dá suporte. C **controla o corpo do alvo** e faz híbrido de magia. Mesma classe, três papéis.

---

## 6. TURNO RÁPIDO com muitas opções

1. **Cinto de Combate (limite rígido):** a ficha tem no máximo **6 cartas ativas** em combate (Técnicas + Talentos A + magias preparadas para a cena) e **3 opções de reação**.
   - O resto vai para a **Mochila**: fica conhecido, mas não está "no cinto".
   - A troca entre Cinto e Mochila acontece no **Interlúdio** ou com 1 Movimento fora de combate.
   - Ter muitos talentos aumenta a **escolha antes da luta**, não a paralisia durante ela.
2. **Proporção de desenho:** em cada categoria, **≥ 60% dos talentos são P ou G** (passivos ou gatilhos automáticos). Na lista acima são 36 de 52.
   - Passivos são **pré-calculados na ficha**. Exemplo: "Aparar: Luxúria d10 (Duelista)". Não se lembra disso na hora.
3. **Um gatilho por evento:** um único evento (acertar, derrubar, ser atacado) dispara **no máximo 1 Talento G + 1 Técnica** do mesmo personagem.
4. **Declarar antes do dado:** tudo que mexe no dado alheio é declarado antes (Manipulação do Destino do livro antigo). Isso acaba com o "espera, eu tenho uma reação…".
5. **Uma reação por rodada** (base). Talentos R **concorrem** com Aparar e Esquivar, não se somam a elas. Escolher entre o Duelista e o Vingador **é** a decisão tática.
6. **Tetos fixos:** +2 degraus e +3 Margem por teste. Com várias fontes, não se calcula nada: corta no teto.
7. **Cartas com ícone:** cada carta mostra Ação / Movimento / Reação / Gatilho e o custo (Rancor, Fôlego, Dívida). Talentos sociais e de exploração **não vão para o Cinto**.
8. **Linha de Ataque pronta:** a ficha traz 2–3 "linhas" já montadas. Exemplo: *"Troco: Ira d12 + Margem 1 se dominado, Ferida Cortante"*.

**Meta de mesa:** turno ≤ 60 s para quem conhece a ficha. O Cinto de 6 cartas vem do mesmo princípio do "um contador por classe" do r2_classes.

---

## 7. Inegociável × negociável

**Inegociável:**
1. **Nenhum talento, treino ou multiclasse sobe o dado base.** Todo "+1 atributo" antigo foi substituído.
2. **Missões de Desafio** mantidas, e elas também valem Pena.
3. **Multiclasse dá coisas:** Técnica Emprestada + Dote (incluindo **magia extra** via Mago) + acesso a Interclasse.
4. **Repertório escolhido de uma lista** já no Peso 1. Classe com 3 técnicas fixas mata a variedade.
5. **Limite de Cinto** (cartas ativas) para proteger o turno.

**Negociável:**
- O número exato de Talentos (5 por Peso + Treino + Vocação).
- O tamanho do Cinto (6 cartas / 3 reações).
- A categoria Jejum (o efeito de substituir a deficiência).
- 3 etapas de Treino em 7 semanas.
- A Troca de Degrau por Talento (limite 2).
- A segunda Vocação custar um Talento.
- Os nomes (Vocação, Dote, Cinto, Repertório).
