# R1 — Advogado A: Fôlego e Feridas

## A proposta (com 4 consertos)
- **Fôlego máximo = lados do dado de Gula** (d8 → 8). Leve tira 2 do máximo. Fim do "quanto eu tenho mesmo?".
- **Margem 0–3 tira Fôlego = arma + Margem.** O forte d12 machuca o fraco d4 de verdade, sem tabela nova.
- **Magia soma o Fio na Margem e ignora armadura.** Bola de Fogo (Fio 3) com Margem 2 vira Margem 5: Ferida. Magia que dói.
- **Elo:** cada aliado que já acertou ou manobrou o mesmo alvo nesta rodada dá **+1 Margem** (máx. +3). O combo vira número na ficha.
- O resto fica: Margem 4–6 Leve, 7+ Grave, Tabela Brutal, À Beira → Pesagem. Uma conta só na mesa: **dado − dado (+ bônus)**. Você olha a faixa, pronto.

## O combo: "Vestido de Vermelho"
Rival (Guarda d8, Couro 1, Fôlego 8). Bloco Rápido, os três escolhem a ordem:
1. **Navalha Finta** (Luxúria): tranca a Guarda do Rival em Esquivar. Elo 1.
2. **Brigão** bate de Ira, que domina Preguiça: d10. Rola 8 contra 4: 8 − 4 − 1 + 1 (Elo) = **5 → Ferida Leve** + Tabela Brutal (Cortante 8: barriga rasgada, Sangrando 2). Elo 2.
3. **Mago** solta Brasa (Fio 3, etiqueta Ira, d10): 6 contra 5 = 1, + 3 (Fio) + 2 (Elo) = **6**. A caixa Leve estava cheia: transborda. **Ferida Grave. Rival caído.**

Três jogadores, uma frase cada, nenhuma subtração de 18 menos 13. E cada passo **empurra a Margem para a próxima faixa**: é isso que o combeiro sente. Combo é cruzar a linha junto.

## A conta (200 mil rodadas, script `r1a.py`)
Mesmo trio, mesmo Rival. No C, o Rival tem 18 de Vida, dano = dado + arma − armadura, dado explode.

| Chance de derrubar o Rival em 1 rodada | Sem combo (3 ataques) | Com combo (Finta + 2 ataques) | Combo vale |
|:--|:-:|:-:|:-:|
| **A com Elo** | 22,0% | **38,5%** | **×1,75** |
| A como está hoje (sem Elo) | 21,9% | 26,7% | ×1,22 |
| **C — Sangue e Essência** | 29,2% | 24,5% | **×0,84** |

No C, **fintar é jogar fora**. A Finta troca um ataque inteiro por +1 degrau, e +1 degrau vale ~1 ponto de dano numa barra de 18. O combeiro faz a jogada bonita e o Rival agradece. Até o meu sistema *sem conserto nenhum* premia o combo melhor que o C.

## Provocação
**Ao Advogado C:** você prometeu "números", mas o seu número é um **saco de pancada**. Vida 18 é um pântano em que todo bônus pequeno se afoga. Seu sistema premia quem bate, não quem pensa. E o Pedro tem dislexia: me mostra a mesa somando "7 + 3 − 2, mínimo 1, explodiu, rola de novo" quatro vezes por rodada, e eu te mostro o meu "deu 5? Ferida."

**Ao Inventor D, que ainda nem nasceu:** seja bem-vindo. Antes de abrir a boca, me responda duas perguntas. Uma: no seu sistema, a Finta faz o Rival cair **mais** que três pancadas? Duas: quantas contas o Pedro faz por golpe? Se for mais de uma, você inventou planilha, não combate.
