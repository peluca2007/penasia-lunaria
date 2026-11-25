---
tags: [penasia, classes, principios]
---
# 14 Princípios de classe

> Meta do Pedro: cada classe com uma mecânica que só ela tem. Dois jogadores com a mesma classe e a mesma subclasse precisam terminar diferentes.

## 1. O que o Moshoku faz bem

Fonte: `src/data/trees/*.ts` (projeto Moshoku).

- **Toda árvore tem um bloco `mechanic` com `tag / hook / loop / cost`.** A identidade da árvore vem escrita antes das técnicas. Exemplo: Suishin, *"Você não abre a luta. Você cobra por ela"*.
- **Cada escola tem um verbo de estado só dela.** A Água faz *Molhado → Congelado* ("todo o dano mora no segundo tempo"), a Terra faz *Atolado → Soterrado*, o Vento faz *Desequilibrado* e o Fogo faz *Em Chamas*, que "cobra na hora e continua cobrando". Nenhuma repete o ritmo de outra.
- **Algumas árvores têm uma "faixa exclusiva".** Só o Bardo altera o que um inimigo *sente*. Só o Tático *concede Ações*. Escudos é "a única árvore cujo recurso é gasto no dano dos outros".
- **O custo vem escrito, junto com a força.** O Deus da Espada *desliga a árvore inteira* se vestir armadura média. O Suishin "precisa que o inimigo coopere". O Ladino é "o pior combatente direto das dezenove" sem preparo. A fraqueza é parte da graça.
- **Timing vale mais que número.** Na Cura, *"não é quanto você cura, é quando"*: a Ferida Fresca dobra os dados.
- **Existe uma árvore híbrida que nasce de duas.** O Punho do Fogo exige Intermediário em Fogo e em Lutador e não traz recurso novo: é o soco das duas juntas. Isso é Sinergia no estado puro.
- **A Teórica é uma gramática, não uma lista.** Essência + verbo + forma, e o jogador monta o feitiço.
- **A identidade também é visual.** Cada árvore tem cor, kanji e selo (`identidadeDasArvores.ts`). A mesa reconhece a árvore antes de ler a regra.

## 2. Dez princípios

1. **Cada recurso se comporta de um jeito físico diferente na mesa.** Pilha, ficha de três faces, marca no inimigo, pino no mapa, copo, cartela. Se dois recursos usam o mesmo objeto, um deles está errado.
2. **Toda classe tem um verbo próprio com os dados na mesa.** Há 11 verbos: plantar, virar, colher, fixar, fincar, adiar, ecoar, sangrar, consagrar, derramar, aprender. É o "Sangue na Mesa" virando identidade.
3. **Toda classe tem uma decisão por turno que só ela toma**, e essa decisão cabe numa frase.
4. **Toda classe mexe na Roda de um jeito diferente.** Uma escolhe a Guarda do alvo, outra muda o pecado do terreno, outra apaga a dominação.
5. **Um "momento uau" por classe, visível para todos**, em que a mesa inteira olha e alguém grita.
6. **O custo vem escrito no `cost`.** Toda classe tem uma situação em que fica fraca, escrita como no Moshoku.
7. **Cada classe tem uma faixa exclusiva.** Só o Confessor mexe na ordem. Só o Armador muda o pecado de uma zona. Só a Navalha tira dado da mesa. Nada de talento ou Vocação dá isso pela metade.
8. **A combinação é desenhada, não acidental.** Todo recurso tem um gancho para os aliados (a mesa é combeira). As Sinergias são as "árvores híbridas", como o Punho do Fogo.
9. **Até 3 contadores por jogador** (Fôlego, Ímpeto e o recurso). A singularidade vem do comportamento do recurso, não de ter mais deles.
10. **Toda escolha muda o jeito de jogar, não só um número.** Nenhum talento dá "+1". Se a escolha não muda a decisão do turno, ela não é uma escolha.

## 3. As camadas que fazem dois iguais divergirem

| Camada | Escolhas reais |
|:--|:--|
| Classe → subclasse | 11 → 3 a 5 (mais o Ramo no Marco 4: o traço de outra subclasse) |
| Foco na Escada | 7 pecados × cada Peso. Aonde vai o degrau muda Vida (Gula), Essência (Orgulho) e o pecado de ataque. Os focos que importam de verdade são uns 4 a 6. |
| Técnicas | 2 de 6 no Peso 1 = **15 combinações**, mais as dos Marcos |
| Talentos | De Classe (cerca de 8), Geral (cerca de 120), De Origem e De Jejum (que depende do d4). São 5 espaços, mais os de treino. |
| Sinergia (Vocação, Peso 4) | 10 classes parceiras × a técnica emprestada e os talentos da dupla |
| Treinos | 14, de 3 etapas |
| Pacto | 7 Credores ou nenhum, mais Votos e Bênçãos |

**Exemplo: dois Brigões Muralha de Carne.**

- **"Porta" (Gorm).** Gula sobe em todo Peso, então tem Vida enorme. Técnicas: *Escudo de Carne* e *Pode Vir*. Talento de Jejum: Ganância d4, *Segunda Chance*. Vocação **Ungido**, com a Sinergia *Holy Diver*: o Rancor plantado nos agressores vira Graça para o grupo. Treino de Sentinela, sem pacto. **Joga parado e grita "bate em mim"**, e a mesa ganha degraus em todo mundo que encosta nele.
- **"Lâmina de Açougue" (Vessa).** Ira sobe em todo Peso. Técnicas: *Cabeçada* e *Arremessar Mobília*. Talento de Jejum: Orgulho d4, *Tática Suja*. Vocação **Navalha**, com a Sinergia *Overkill*: o Troco também colhe dados da mesa. Pacto com a Bruxa da Ira. **Mergulha no meio dos inimigos, apanha de propósito e devolve tudo em um golpe de 20+.**

A classe e a subclasse são as mesmas, mas a pergunta do turno é oposta: "quem me protege?" contra "em quem eu descarrego?".

## 4. Uma mecânica por classe

Roda: Ira → Luxúria → Preguiça → Ganância → Inveja → Gula → Ira (cada pecado domina os dois seguintes), com o Orgulho no centro.

**Brigão (Rancor). Plantar ao apanhar.** *Ganha* 1 Rancor quando é atingido, e +1 se o atacante o dominou na Roda (por isso ele quer apanhar da Inveja). *Gasta* no Troco: revida com dano = o maior número que o feriu na cena. *Na mesa:* quem acerta o Brigão recebe **um dado dele ao lado**, mesmo sem ele atacar, e os aliados ganham degrau contra quem ousou bater nele. *Uau:* três inimigos o cercam, os três ficam marcados e o grupo inteiro bate com +1. Ele é o único que **põe dado na mesa sofrendo**.

**Veterano (Postura). Virar a ficha.** A Postura não é um contador: é uma **ficha de três faces**, Ofensiva (Ira), Firme (Gula) e Ruptura (Inveja). *Troca* grátis no início do turno; fora do turno, paga 1 Fôlego. *Na mesa:* a face define o que o seu dado faz. Em Ofensiva, dá degrau aos aliados. Em Firme, vai ao lado de um aliado e vale como degrau de Guarda. Em Ruptura, faz a armadura ceder sem acerto. *Roda:* é o único que **troca o próprio pecado de ataque no meio da luta**. *Uau:* no Mestre de Armas, três trocas numa rodada, cada uma desarmando uma ameaça diferente.

**Navalha (Gume). Colher.** O Gume *sobe* 1 a cada Finta ou turno sem ser visto (máximo 3) e **quebra** (zera) se ela for atingida. *Gasta* tudo no Desfecho: para cada ponto de Gume, **tira um dado de aliado ao lado do alvo e soma o número dele ao dano**. *Roda:* ataca com o pecado de um dos dados colhidos. *Uau:* a mesa prepara, a Navalha recolhe três dados e o golpe passa de 20: Ferida Grave. É a única que **tira dados da mesa**, e por isso aliados reclamam e vibram juntos.

**Vigia (Mira). Fixar.** *Ganha* Mira no Tiro Paciente (sem se mover). A Mira é uma **marca que fica no inimigo**: o único dado que **não é recolhido no fim da rodada** e que se põe a qualquer distância. *Gasta*: com 2 Mira, escolhe a Guarda do alvo (*Roda*). Com 3, o *Um Tiro*: explode até duas vezes. *Uau:* o chefe carrega a marca por três rodadas e todo aliado entra com o degrau garantido.

**Armador (Estacas). Fincar.** São 3 **pinos físicos no mapa** por cena. *Fincar* dá à zona uma etiqueta de pecado: quem está nela ataca e defende com aquele pecado na Roda. *Recolher* custa uma ação. *Na mesa:* uma Estaca de Armadilha conta como **um dado na mesa ao lado de todo inimigo dentro da zona**. *Uau:* fincar Preguiça sob um chefe da Ganância e ver a Roda virar contra ele. É o único que **dá pecado ao terreno**. (Ele precisa trocar um pecado de ataque para não ficar com dois vizinhos.)

**Confessor (Hora). Adiar.** A Hora é um **marcador na trilha de iniciativa**. *Ganha* Hora ao atrasar o próprio turno ou quando um aliado confessa um pecado em cena. *Gasta* para puxar um aliado para agir agora ou empurrar um inimigo para depois. *Na mesa:* com a *Badalada*, ele decide quando os dados são recolhidos e pode adiar o fim da rodada para um alvo. *Roda:* a Penitência obriga o inimigo a atacar com o pecado que o Confessor nomear. *Uau:* três aliados em sequência contra o mesmo alvo, cada um entrando com +2, antes de o inimigo piscar.

**Mago (Essência + grimório). Ecoar.** O grimório é feito de **cartas com etiqueta**. As preparadas ficam no Cinto e, quando usadas, viram de lado. A Essência paga; sem ela, paga com Vida. *Na mesa:* uma vez por feitiço, ele pode usar o número de um dado na mesa **como o resultado da magia**, e o dado continua lá. *Roda:* escolhe a etiqueta por magia, então é o mais flexível contra a Roda. *Uau:* a *Trama* une duas cartas de etiquetas vizinhas num feitiço só, pagando as duas, e ecoa o 10 do Brigão. *Custo:* um dado que sai 1 dá Rasgo.

**Herdeiro (Fervura). Sangrar.** O sangue dos Inteiros: *paga* magia com Vida além da Essência, e **cada ponto de Vida pago vira um dado de sangue posto ao lado do alvo**, sem precisar acertar. A Fervura da cena *sobe* a cada sangria. Com 3, a Linhagem desperta (Sangue, Lágrima, Sopro ou Raiz) e a magia dele ignora a dominação contrária. *Uau:* sangra 2 e o alvo fica com +2 para o grupo inteiro antes de qualquer um rolar. É o único que **gera dado na mesa sem rolar contra o alvo**.

**Ungido (Graça). Consagrar.** A Graça **fica nas mãos dos outros**: o Ungido distribui fichas aos aliados no começo da cena, e eles gastam quando quiserem. Ele *ganha* Graça quando abre mão do próprio degrau ou do próprio dado. *Na mesa:* um milagre **vira um dado na mesa para a face máxima**, e isso mexe nas faixas de 10+ e 20+. *Roda:* quem segura Graça não pode ser dominado. *Uau:* o 7 do aliado vira 12, e o golpe cruza a faixa de Ferida Grave.

**Andarilho do Vazio (Saturação). Derramar.** É um **copo de verdade**: cada poder joga um d6 dentro, e o poder fica mais forte quanto mais dados há no copo. Ele nunca gasta, só enche, até o Limite Seguro, que a Âncora define. Ao passar do Limite, **vira o copo**: rola tudo, e os dados que caem ficam **ao lado de todos os que estão na zona, aliados e inimigos**. Cada 1 é dano nele. *Roda:* com o copo acima da metade, ninguém o domina (o Vazio). *Uau:* o copo vira, a mesa se enche de dados e todo mundo ganha degrau, os inimigos inclusive.

**Avatar (Convergência). Aprender.** Uma **cartela com 7 caixas**, uma por pecado. *Marca* a caixa ao acertar com aquele pecado **ou ao atacar um alvo que tem um dado de aliado daquele pecado** (ele aprende com a mesa). *Gasta* ao completar, na Convergência: por um turno, ataca com todos os pecados e sempre domina na Roda; depois a cartela zera. *Uau:* o grupo "pinta" o chefe com quatro pecados diferentes para o Avatar fechar a cartela. Ele é o único que **depende da variedade da mesa**, e não da quantidade.

## 5. Modelo de ficha de classe

```
# <Classe> (<Recurso>)
Arquétipo antigo · Papel · Pecados de Ofício (2, não vizinhos) · Guarda de classe

## Mechanic (no estilo do Moshoku)
- tag: <estado ou verbo exclusivo>
- hook: <1 frase que vende a classe>
- loop: <3 passos: ganhar, armar, gastar>
- cost: <quando ela fica fraca, escrito sem pudor>

## O recurso na mesa
Objeto físico · como se ganha · como se gasta · teto (até 3) · quando zera

## Verbo com os dados na mesa
(um dos 11; não pode repetir o de outra classe)

## Relação com a Roda
## Decisão exclusiva do turno
## Momento uau (descrição de mesa, 2 linhas)
## Faixa exclusiva (o que só ela faz)

## Repertório
Assinatura fixa (gira o recurso) + lista de 6 (2 escolhidas) + técnicas dos Marcos

## Passiva por Peso (3/6/9) · Ápice (Peso 7) · Lenda e Prova (Quebras 5/8/11/13)

## Subclasses (3 a 5)
Para cada uma: traço M2, traço M4, como muda o loop. Marcar Culto (C) ou pactual (P).

## Talentos de Classe (cerca de 8; ◇ = abre para quem tem Vocação)
## Dote de Vocação e Sinergias (lista por classe parceira)
## Focos na Escada: 3 builds de exemplo que divirjam
## Teste de unicidade
"Que outra classe faz isso?" A resposta precisa ser "nenhuma".
```
