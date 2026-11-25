---
tags: [penasia, balanceamento, simulacao]
---
# 17 Números das classes

Simulador: `C:\Users\pedro\AppData\Local\Temp\penasia_criticos\sim\sim.py` (python; `an.py` gera as tabelas). Fichas relidas depois da edição do crítico de coerência (pares novos de Brigão, Confessor, Herdeiro, Avatar). Amostra: 12 000 lutas por classe solo e 8 000 por grupo (os 330 grupos de 4, todas as combinações).

## 1. Sozinha contra Rival (Guarda d8, armadura 2, Vida 35)
"Dano/turno" = média de 6 rodadas contra Vida infinita (inclui armadura e Guarda sorteada entre os 6 pecados).

| Classe | Rodadas p/ derrubar | Dano/turno | Desvio da média (7,3) |
|:--|:-:|:-:|:-:|
| Herdeiro | 4,0 | 10,7 | **+47%** |
| Mago | 4,7 | 8,9 | **+22%** |
| Ungido | 4,9 | 8,4 | **+15%** |
| Andarilho | 5,2 | 7,6 | +4% |
| Armador | 5,9 | 6,8 | -7% |
| Navalha | 6,1 | 6,6 | -10% |
| Brigão | 6,2 | 6,5 | -12% |
| Veterano | 6,3 | 6,4 | -13% |
| Vigia | 6,4 | 6,2 | **-15%** (limite) |
| Avatar | 6,5 | 6,2 | **-15%** (limite) |
| Confessor | 6,6 | 6,1 | **-17%** |

## 2. Grupos de 4 contra o chefe (30+30, Gula d10 / Ira d12, armadura 3)
Média geral: **2,26 rodadas**. "Com" e "sem" = média dos grupos que têm ou não a classe. Como os grupos têm tamanho fixo, "sem" é sempre pior que a média; o que mede a classe é o desvio de "com".

| Classe | Com | Sem | Rodadas poupadas | "Com" vs média |
|:--|:-:|:-:|:-:|:-:|
| Ungido | 1,83 | 2,51 | 0,68 | **-19%** |
| Herdeiro | 2,15 | 2,32 | 0,17 | -5% |
| Mago | 2,16 | 2,32 | 0,16 | -5% |
| Veterano | 2,31 | 2,23 | -0,08 | +2% |
| Andarilho | 2,33 | 2,22 | -0,10 | +3% |
| Brigão | 2,33 | 2,22 | -0,11 | +3% |
| Armador | 2,34 | 2,22 | -0,13 | +4% |
| Avatar | 2,35 | 2,21 | -0,14 | +4% |
| Confessor / Navalha / Vigia | 2,36 | 2,21 | -0,15 | +4% |

Achado maior: **o chefe de 60 de Vida cai em ~2,3 rodadas**, qualquer grupo. Com 4 jogadores e ~8 de dano/turno, são ~32 por rodada.

## 3. Melhores pares (média dos 36 grupos que contêm o par)
| Par | Rodadas | Ganho vs média | Soma dos marginais |
|:--|:-:|:-:|:-:|
| Herdeiro + Ungido | 1,62 | 0,64 | 0,85 |
| Mago + Ungido | 1,77 | 0,49 | 0,84 |
| Ungido + Veterano | 1,84 | 0,43 | 0,60 |
| Armador + Ungido | 1,84 | 0,42 | 0,55 |
| Brigão + Ungido | 1,85 | 0,42 | 0,57 |

Todo top 5 tem o Ungido; o par é menor que a soma dos dois (rendimento decrescente: a Graça só salva um golpe por vez). Sem Ungido, os melhores são Herdeiro+Mago. Pior par: Navalha+Vigia (2,49).

## Fora da curva e ajuste de número
- **Ungido (+15% solo, -19% em grupo)**: a Graça vira o dado para a face máxima e o golpe passa de 20, quebrando a fase. Testei Graça inicial 2 para 1: o grupo ainda cai para 1,91 (contra 1,79), então a Graça não é o único motor. Sugestão: **Orgulho d8 para d6 no Peso 1 (Essência 8 para 6)**, (não testada).
- **Herdeiro (+47% solo)**: sangria vale +2 de força por Vida. Sugestão: **força da sangria +2 para +1 por Vida** (testado: grupo sobe de 2,03 para 2,15 e ele continua acima da média).
- **Mago (+22% solo)**: ignorar armadura pesa contra armadura 2 e 3. Sugestão: **Essência 8 para 6** (Orgulho d6), alinhando com o Herdeiro.
- **Confessor (-17%)**: sem dano próprio de classe. Sugestão: **maça +3 para +4** (ou Badalada por 1 Conta, que é número).
- **Avatar (-15%) e Vigia (-15%)**: no limite. Avatar: **Convergência com os 3 maiores dados** em vez dos 2 maiores (19 para ~22). Vigia: **Um Tiro com 2 explosões já existente, mas custo 3 alfinetes para 2**.

## Simplificações (importante)
- Ninguém morre nem sofre dano; o chefe só ataca o Brigão (60% das rodadas, planta 1 ou 2 Rancor). Defesa, Guarda de classe, Fechar a Guarda, Proteger, Revidar e Arrancada não entram.
- Dados de Peso 1: pecado-assinatura d10, outro d8, arma +3 (Brigão +5). Todo bônus (mesa + Roda + classe) trava em +2 degraus. Passos acima de d12 viram 2d6, d6+d8 etc. (tabela da Balança). Acerto compara um rolamento com o da Guarda; empate acerta. A explosão só vale para o dano.
- Guarda do Rival sorteada entre 6 pecados; chefe com 20+ quebra a fase (Acordo final); sem essa regra o chefe cai em ~2,3 e o Ungido continua na frente (1,88).
- Ordem: aleatória; Mago e Navalha esperam o fim (50% sem Confessor; sempre, gastando 1 Conta, com ele). Confessor: +1 Conta por rodada e por erro de aliado; Badalada com 2 Contas guarda os dados 1 rodada.
- Mago: cartas de 4 etiquetas aleatórias, feitiço custo 2 (3 depois de 4 usos), eco quando o maior dado da mesa é 7 ou mais; Rasgo ignorado. Herdeiro: Essência 6, sangra 2 Vida por feitiço (Vida 20, piso 4). Ungido: Essência 8, etiqueta Luxúria + 1 aleatória, 2 Graças entregues a aliados (sozinho: nenhuma), recusa degrau para fabricar Graça, +1 Graça no turno 3 (Juramento); aliado gasta Graça se salva erro ou ganha 4+.
- Andarilho: copo com Limite 5, ciclo 2-2-1-Derrama, nunca transborda. Armador: Etiqueta no turno 1 (sempre o pecado que mais gente domina, vale a luta toda), Armadilha no 2. Navalha: Finta no lugar do Movimento, Gume quebra em 22% das rodadas, não "fica oculta". Vigia: Fixar a Guarda com 2 alfinetes se houver 2+ aliados; senão Um Tiro com 3. Avatar: Jejum = Orgulho, Convergência com 7 dados (10,10,8,8,6,6,6), 2 maiores + 3. Veterano: escolhe a face pela Roda; virar fora do turno não modelado.

## Depois do balanceamento
Chefe de teste: **60 de Vida por fase** (só no simulador; o livro continua com 30). Mesmas simplificações acima. Amostra: 16 000 lutas solo por classe, 5 000 por grupo (330 grupos). Média solo 6,9 de dano/turno; média de grupo 3,85 rodadas.

| Classe | Dano/turno solo | Desvio solo | Rodadas c/ Rival | "Com" vs média (grupo) |
|:--|:-:|:-:|:-:|:-:|
| Andarilho | 7,7 | +12,0% | 5,1 | +1,7% |
| Herdeiro | 7,7 | +12,6% | 5,4 | -0,9% |
| Mago | 7,5 | +9,3% | 5,5 | -6,7% |
| Ungido | 7,0 | +1,5% | 6,0 | **-12,0%** (no limite) |
| Armador | 6,8 | -0,9% | 5,9 | +2,5% |
| Confessor | 6,8 | -1,2% | 6,0 | +1,4% |
| Navalha | 6,6 | -3,3% | 6,1 | +1,7% |
| Brigão | 6,5 | -5,8% | 6,2 | +3,1% |
| Veterano | 6,5 | -5,9% | 6,3 | +1,4% |
| Avatar | 6,3 | -8,5% | 6,5 | +4,5% |
| Vigia | 6,2 | -9,6% | 6,4 | +3,3% |

Todas dentro de ±15% solo; no grupo, só o Ungido encosta no teto (-12,0%; com o Juramento sem Graça cai para -10,3%, mas isso é mecânica, então deixei).

**O que mudou (só números, nas fichas):**
- Mago: dado de conjuração Ganância d8 (era d10).
- Ungido: dado Luxúria d8 (era d10); Graça inicial 1 (era 2; Peso 6: 2, era 3); teto em circulação 2 (era 3).
- Herdeiro: Gula d8 (era d10); Essência 4 / Orgulho d4 (era 6 / d6); força da sangria +1 por Vida (era +2).
- Confessor: maça +4 (era +3).
- Avatar: Convergência soma os três maiores dados (eram os dois): ~24 (era 19).
- Sem mudança: Andarilho, Armador, Brigão, Navalha, Veterano, Vigia.
Reduzir só a Essência dos conjuradores quase não mexeu: depois dela eles pagam Vida, então o que pesa é o dado.

**Recomendação (Vida do chefe):** pela simulação, ~15 de Vida por fase por jogador dá ~4 rodadas (4 jogadores: 60 por fase = 3,9 rodadas; 90 = 5,0; 120 = 5,9). Com 30 por fase o grupo de 4 acaba em ~2,3 rodadas.
