---
tags: [penasia, orgulho, pacto, altiva, defesa]
status: proposta (nada aplicado nos capítulos)
base: balanca.md (Orgulho neutro), pacto.md, defesa_v5.md
---
# Orgulho v1

O Orgulho agora é **neutro**: ninguém sobe contra ele, ele não sobe contra ninguém, e pode ser ajudado.
Quem **nunca aceita ajuda** é só o devoto da Altiva. Isso virou o Voto dela.

---

## A. O Pacto da Altiva

```md
#### Altiva · Voto: "Ninguém me carrega."

- **O Voto.** Você não aceita ajuda. Ajuda = um aliado sobe o seu dado,
  toma um golpe por você ou te cura.
- **Recusa** (a bênção do Voto). Um aliado oferece ajuda em voz alta.
  Você diz: "Não preciso." O seu dado sobe um, sozinho. O aliado
  guarda a Reação (ou a Ação) dele. 1 Recusa por rodada.
- **Cumprir:** recusou ajuda num momento de risco: −1 Dívida (1 por cena).
- **Quebrar:** aceitou ajuda: +2 Dívida e marca 1 caixa de Tentação.
- **Cobrança (Dívida 4+):** a parcela é em dignidade. No começo da sessão,
  você se curva em cena diante de alguém que despreza.
- **Condenação** (2 caixas): a Recusa para de subir o dado.
- **Danação** (3 caixas): você precisa de ajuda para tudo, e ela vem do Mestre.
- **Prova de Redenção:** salvar quem te humilhou, sem que ele saiba.
```

As Bênçãos a crédito da Altiva (tabela de pacto.md) ficam iguais.

**Por que funciona:** a Recusa dá ao devoto o mesmo degrau da ajuda, mas o grupo **não gasta nada**. O preço está no que ninguém pode fazer por ele.

### Duas variações de preço

| | **Preço Duro** | **Preço Leve** |
|:--|:--|:--|
| O que é "ajuda" | Tudo: Ajudar, Proteger, Salto, Cobrir, cura de aliado, Graça, dado de aliado na mesa, ombro de quem sobrou. | Só o que **sobe o seu dado**: Ajudar, Graça, dado de aliado na mesa, ombro. Proteger e cura podem. |
| À Beira | Ninguém te levanta. Você levanta sozinho: Orgulho contra 5. | Normal. |
| Quem gosta | rp (drama), combeiro (preço real) | simples (menos exceção) |

---

## B. Correções (Orgulho neutro + defesa v5)

Linhas da versão atual. Nada foi editado.

| Arquivo | Linha | Texto atual | Texto novo |
|:--|:-:|:--|:--|
| `pages/ferramentas.astro` | 73 | "Fora da roda. Só ganha +1 degrau contra quem ele desafiou ou quem o desafiou." + chip "Nunca recebe ajuda" | "No centro, neutro. Ninguém sobe contra ele, ele não sobe contra ninguém." Chip: "Pode ser ajudado". |
| `pages/balanca.md` | 64 | "Ele pode ser ajudado normalmente." | Igual, mas **falta a regra de ajuda** (ver pergunta 1). Somar: "Ajudar: um aliado perto diz como ajuda; o seu dado sobe um. 1 ajuda por teste." Link "pelo Pacto" → `/pacto`. |
| `pages/combate.md` | 30 | Impor · classe · "Contra quem foi desafiado." | Impor · só Firme · **Desafia** (linha da tabela dos 7 da v5). |
| `pages/combate.md` | 83 | Desafiar: "Desafiado: −1 degrau se atacar outro." | Fica. Só trocar "−1 degrau" por "um dado abaixo" (igual à v5, linha 24). |
| `pages/referencia.md` | 61 | "Classe. Contra quem foi desafiado." | "Só Firme. Venceu: quem bateu fica Desafiado. Aliado pode Ajudar." |
| `classes/brigao.md` | 28 | "O Orgulho fica fora da Roda: o Troco nunca domina nem é dominado." | "O Orgulho é neutro: o Troco nunca domina nem é dominado." |
| `classes/brigao.md` | 57 | Pode Vir: "Desafiado (o primeiro ataque dele tem que ser em você)… Sua Guarda desce 1 degrau." | "…fica Desafiado por você até o seu próximo turno. O seu dado firme desce um." |
| `classes/brigao.md` | 81 | Bate em Mim: "Impor vale contra **qualquer** inimigo que tenha Rancor seu, não só os Desafiados." | Impor já vale contra todos. Novo: "Quem tem Rancor seu e perde no seu Impor: plante +1 Rancor nele." |
| `classes/brigao.md` | 85 | "Impor, até d10. Vale contra quem você desafiou. Toque: quem ataca o seu Impor e erra fica Desafiado." | Impor já Desafia (v5). Novo **Toque do Brigão**: "Venceu no Impor: plante 1 Rancor em quem bateu, virado no dado dele." Sem teto d10. |
| `classes/confessor.md` | 89 | Penitente Profissional: "o alvo só ataca você, e você Impõe contra ele." | "o alvo ataca com Orgulho e fica Desafiado por você." (Impor é só Firme na v5.) |
| `classes/confessor.md` | 94 | "Impor, teto d10. Vale contra quem foi Desafiado. Toque: também contra quem está em Penitência." | **Toque do Confessor**: "Venceu no Impor contra alvo em Penitência: +1 Conta." Sem teto d10. |
| `classes/ungido.md` | 93–95 | "Guarda extra: Impor (teto d10). Vale contra quem foi desafiado. Toque: também contra quem atacou um aliado com Graça." | **Toque do Ungido**: "Contra quem atacou, nesta rodada, um aliado com Graça: o seu Impor sobe um dado." |
| `classes/avatar.md` | 12 | "o Orgulho fica fora da Roda" | "o Orgulho é neutro" |
| `classes/avatar.md` | 39 | Aprendido: "você o domina (+1 degrau), não importa a Roda." | Somar: "(menos Orgulho: ninguém domina o Orgulho)." |
| `pages/pacto.md` | 24 | Linha da Altiva sem Voto | Somar o bloco A abaixo da tabela, como "Voto de exemplo". |

Sem mudança (conferido): `mago.md` (Essência = máximo do Orgulho; "qualquer carta com Orgulho" no Ecoar combina com o neutro), `herdeiro.md` (só a Escada), `ungido.md` l.63 Selo (Desafiado continua), `magia.md` l.55 e l.57, `mundo.md` l.138 ("Eu sou o centro da Roda" combina), `brigao.md` l.37 (o Impor nunca é dominado, então nunca planta 2: é o certo).

### Impor na defesa v5

- **Funciona.** v5 linha 14 já diz "Orgulho: ninguém sobe". Cartão: "Orgulho ← ninguém". Bate com o neutro.
- **Quem Ajuda gasta a única Reação.** Na rodada, esse aliado não Protege e não dá golpe livre.
- **Quando:** o alvo diz "Firme: Imponho", o aliado diz "Te ajudo" **antes** dos dados. 1 ajuda por golpe.
- **Teto:** Firme com a Ação (+1) + Ajuda (+1) = 2 acima. Cheio, não passa.
- **Conta:** Impor d10 contra d10: defende 45%. Com Ajuda (d12): 54%. Os outros pecados ganham a Roda em 1 de 3 lutas; o Orgulho troca isso pela Ajuda.
- **Devoto da Altiva:** não pode ser Ajudado. Usa a **Recusa**: sobe o mesmo dado, e o aliado fica com a Reação.

---

## C. Exemplo de mesa

**Dora** (devota da Altiva, Dívida 5): Orgulho d10 · malha 2 · Vida 18. Nina, Tomé e Breu como na v5.

Turno da Dora. Movimento: **"Firmo: Imponho."** (Orgulho d10).

| # | Quem | Fala | Dados | Rolou | Resultado | Narração |
|:-:|:--|:--|:--|:--|:--|:--|
| 1 | Ruivo → Dora | Nina: "Te ajudo!" · Dora: **"Não preciso."** (Recusa) | Orgulho neutro: ninguém sobe pela Roda. Recusa: d10 → **d12** × Ira d10 | 6 × **9** | Defendeu. **Desafia**: Ruivo Desafiado. Cumpriu o Voto: Dívida 5 → **4**. | "Ajoelhe. Ou me olhe nos olhos." |
| 2 | Fria → Dora | Tomé: "Salto na frente!" · Dora: "Sai." (Preço Duro: Salto é ajuda) | Firme (2º golpe), sem Recusa (1 por rodada): d10 × Ganância d10 | **8** × 5 | Acertou. 8 + 3 − 2 = **7**. Dora 18 → 11. | Fria: "No braço que ela não abaixou." |
| 3 | Rato → Breu | Nina guardou a Reação: **"Protejo o Breu! Reação: Aguento!"** | Gula domina Ira: Nina d6 → **d8** × Ira d6 | 3 × **5** | Nina defendeu. **Aguenta**. | "Pode bater. Eu fico de pé." |

Na rodada 2, o Ruivo Desafiado ataca a Nina: um dado abaixo (d10 → d8).

E se a Dora aceitasse o Salto do Tomé? Ele tomava o golpe 2, mas ela pagava **+2 Dívida** (4 → 6) e marcava 1 caixa de Tentação.

---

## D. Perguntas para o Pedro

1. **Regra geral de ajuda.** A Balança diz "o Orgulho pode ser ajudado normalmente", mas o livro não tem regra de ajuda fora do Impor. **Recomendo:** uma linha na Balança: "um aliado perto diz como ajuda; o seu dado sobe um; 1 ajuda por teste; em combate gasta a Reação".
2. **Preço Duro ou Leve?** **Recomendo: Duro.** É o mito (Ícaro voa sozinho). O Leve deixa o Voto quase sem custo.
3. **Quebrar marca caixa de Tentação, além de +2 Dívida?** **Recomendo: sim.** Todo Voto funciona assim em pacto.md.
4. **Toques de classe do Impor** (Brigão planta Rancor, Confessor ganha Conta, Ungido sobe um dado). **Recomendo: aprovar os três.** O "vale contra Desafiado" morreu com a v5: os Toques precisam de um efeito novo.
