# Pesquisa: combate do Moshoku Tensei RPG

**Aviso de fonte.** O texto do livro em si não está nas pastas indicadas (`src/app/livro` só tem o visualizador; `src/data/trees` e `_local/docs` estão vazias). A melhor fonte é o histórico de versões:
`Moshoku tensei rpg\_local\referencia-animacao-20261005\src\data\patchNotes.ts.bak` (abrevio como **PN**, com nº da linha) e o simulador `...\src\lib\encounterSim.ts.bak` (**SIM**). A pasta da campanha tem só roteiros de sessão, quase nada de combate.

## 1. Ações por turno

| Item | Regra | Fonte |
|---|---|---|
| Ações por turno | **3 Ações** normais | PN 2902: "Um turno tem 3 Ações" |
| Teto | **6 no total**: 4 próprias (3 + extras da árvore) e no máx. 2 concedidas por aliado | PN 1400 |
| Ação bônus | **Não existe.** Lista fechada de exceções "Sem Ação" no Cap. 2 §2 | PN 1594 |
| Reação | **1 por rodada**; talento "Segunda Guarda" dá +1 | PN 827 |
| Sem Ação | Ex.: Touki Concentrado (1 PT, Sem Ação, 1x por turno) | PN 1932 |
| Movimento | Não tem ação própria nas notas; deslocamento em metros (ex.: -3 m com armadura pesada) | PN 2155 |
| Surpresa | Quem não percebeu a ameaça tem **1 Ação e nenhuma Reação** na 1ª rodada | PN 2114 |

Lição: o teto antigo "5 ações, máx. 2 externas" engessava classes rápidas e foi trocado por 4 + 2 (PN 1399-1400).

## 2. Defesa, esquiva e reação

Ações defensivas (seção própria do Cap. 4, "Reações e Ações Defensivas", PN 3983):

| Opção | Custo | Efeito | Fonte |
|---|---|---|---|
| Esquivar | Ação padrão | Defesa maior contra o ataque; vale só contra o **primeiro** ataque sofrido na rodada (versão 0.0.2); depois foi ampliado: "vale contra todos os ataques de **uma criatura**" | PN 4620, 1161 |
| Defender/Absorver | Ação padrão | Atacante ganha **Vantagem**, mas o dano cai por mitigação `(Vigor × 2) + Bônus de Rank` (depois: "Defender reduz todos os golpes"; exemplo reduz metade do Bônus de Rank) | PN 4618, 1161, 894 |
| Bloquear com Escudo | **Reação** | Hoje: +5 de CA contra aquele ataque (+2 sem proficiência) e, se ainda acertar, dano pela metade. Ocupa a mão (sem duas armas/duas mãos) | PN 1989 |
| Ataque de Oportunidade | Reação | Perdido se Desequilibrado ("tira TODA Reação") | PN 2138 |
| Reações de árvore | 1 Reação + PT/PM/PP | Ex.: Couraça de Barro (2 PM, -1d6+BC); Touki Endurecido (1 PT, reduz dano em 2× Bônus de Rank); Aparar (Água); contragolpe quando alguém erra | PN 369, 1932, 1810 |
| Interceptar (Escudeiro) | 1 Reação por interceptação | Toma o golpe que derrubaria aliado; no Rei/Escudo Estendido, interceptar sem Reação 1x por rodada | PN 107, 122, 136 |

Quando se gasta: a Reação é gasta **na hora do golpe do inimigo**, no turno dele; recarrega no início do seu turno. Falha crítica (1 natural) pode custar "perder a Reação até o seu próximo turno" (PN 1996). Reações **encerram um cântico** em andamento (PN 349).

## 3. Magias de várias Ações (custo 6)

- Custo em Ações sobe com o rank: **Principiante 2, Intermediário 2, Avançado 3, Santo 3, Rei 4, Imperador 4** (escada nova "2-2-3-3-4-4"; a antiga era 2-2-3-4-5-6, que fazia a magia suprema render menos por Ação) (PN 2751). Em outra nota o custo de conjuração aparece "Avançado 3, Santo 4, Rei 5, Imperador 6" (PN 2902, versão intermediária).
- **Teto de 4 Ações** por magia comum desde a 0.1.47 (PN 2050).
- **Grande Obra** (5 ou 6 Ações): sempre Ritual (não encurta, não silencia, não se retoma) e com **Ponto de Não Retorno**: a partir da 2ª Ação a cena inteira vê o que vem e ganha um turno pra reagir (PN 2051). Ex.: Meteoro, 6 Ações (PN 1882). Efeito muda a cena, não é "mais dano por Ação" (PN 2052).
- **Como se paga e continua** ("Regra de Ouro: Conjuração Contínua e Dividida", Cap. 4 §3, PN 2903):
  - o cântico atravessa turnos e o **PM é investido no começo**;
  - **Perda de Foco** se passar um turno sem recitar;
  - sofrer dano **não interrompe sozinho**: teste de Concentração (Espírito) **CD 10 + Bônus de Rank de quem acertou**; falhar perde tudo que investiu **mais metade do PM**;
  - quem conjura não ataca.
- Formas de conjurar: Padrão, **Encurtada** (metade das Ações, corta dano/área/duração), **Silenciosa**; **Recitação Perfeita** dá bônus (PN 2130, 4513).
- Tiro Perfeito paga em **turnos** em vez de recurso: 4 Ações, 1 por etapa, teste CD 12; falhar não interrompe, só perde o bônus da etapa (PN 2651-2653).
- Decisão da IA do simulador: só começa cântico longo com o turno inteiro livre. Sem isso o time de magos caiu de 32,8% para 16,4% de vitória; com a regra voltou a 32,0% (PN 2904).

## 4. Iniciativa

| Item | Regra | Fonte |
|---|---|---|
| Rolagem | **d20 + Agilidade** (ficha) | SIM 1405, 1628 |
| Criatura | d20 puro (Apêndice G não dá bônus); Mestre pode dar `bonusIniciativa` | SIM 1628-1629 |
| Empate | Maior Agilidade; persistindo, **o jogador age antes do Mestre** | PN 1981 |
| Pactos/invocações | Têm iniciativa e PV próprios, 1 Ação por turno | PN 1228 |
| Cena sem combate | "Não role iniciativa. Não role ataque": rodadas de aproximação, cada um faz uma coisa | Campanha, `Sessões\Sessão 03 - O Bosque das Flechas.md` |
| Reação de chefe | Rearma no início da rodada da mesa; não 1 por herói | SIM 1647-1670 |

## 5. Playtest: o que funcionou e o que não

Não achei relatório de playtest com jogadores. As sessões (`Campanha\Sessões\*.md`) são roteiros e usam pouco combate (Sessão 04 sugere inimigo que "gasta as Ações atrapalhando, nunca ferindo"). O que há de evidência vem de **simulações de 400 a 2.000 combates** e revisões do livro:

**Bom**
- Teto 4+2 deixou classes rápidas respirarem (PN 1400).
- Bloqueio de escudo reformulado: de ~15% para ~38% dos acertos anulados (PN 1988-1989).
- Exigir testes de Concentração por acerto cria tensão (cada acerto é teste novo; Espírito 2 falha 40% em 1 e 78% em 3) (PN 1865).
- "Nenhuma compra morta" e "uma decisão por turno" como prioridade (PN 1414, 1819).
- Surpresa definida (1 Ação, sem Reação) em vez de "nunca fica surpreso" (PN 2114).

**Ruim (e consertado)**
- Magias de 5-6 Ações rendiam **menos dano por Ação** que magia de dois ranks abaixo: virou Grande Obra / escada 2-2-3-3-4-4 (PN 2050, 2751).
- Reação defensiva quase sempre jogada fora (escudo +2) (PN 1988).
- Esquivar/Defender só protegendo o 1º ataque: preço do "concentrar-se" (PN 4620), depois afrouxado.
- Árvore quase toda de Reação (Suishin) deixava o jogador **sem decisão no próprio turno** (PN 1818).
- Reação "sem custo de Reação" (interceptar grátis) quebrava o equilíbrio do Escudeiro (PN 107, 122, 135).
- Controle puro encurtado saía de graça; só dados/área eram cortados (PN 1874).
- Encontros: moldes de criatura cresciam rápido demais; 4 criaturas davam "Mortal" onde o livro dizia "Equilibrado" (PN 777).
- Empate de iniciativa nunca resolvido no livro (PN 1981).

## Ideias para a defesa do Penasia

1. Reação limitada a 1 por rodada, mas com gatilho claro (quando o golpe te acerta), recarregando no seu turno.
2. Defender como Ação ativa com **escolha**: perder Vantagem do atacante em troca de mitigar. Cuidado com o custo do "só o primeiro ataque".
3. Reação defensiva precisa anular o bastante (>= ~35% dos acertos) senão ninguém usa.
4. Magia longa: pagar PM no início e testar Concentração por acerto; ponto de não retorno visível para a mesa reagir.
5. Dar decisão no turno a quem só tem Reação.
