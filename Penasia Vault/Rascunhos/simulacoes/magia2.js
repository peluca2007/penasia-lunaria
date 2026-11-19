function dist(a, d, opts={}){ let r={hit:0,f:0,leve:0,grave:0,forte:0,rasgo:0,n:0};
  const P = d? [...Array(d).keys()].map(x=>x+1) : [opts.fixa];
  for(let x=1;x<=a;x++) for(const y of P){ r.n++; if(opts.rasgo && x<=opts.rasgo) r.rasgo++;
    let m=x-y; if(m<0) continue; m+=(opts.bonus||0); r.hit++; if(m>=4) r.forte++;
    if(opts.cap!==undefined) m=Math.min(m,opts.cap);
    if(m>=7) r.grave++; else if(m>=4) r.leve++; else r.f+=opts.dano; }
  const n=r.n, o={hit:r.hit/n,fol:r.f/n,leve:r.leve/n,grave:r.grave/n,forte:r.forte/n,rasgo:r.rasgo/n};
  o.valor=o.fol+3*o.leve+6*o.grave+(opts.rider||0)*o.forte; return o; }
const pc=x=>(x*100).toFixed(0)+'%';
const fmt=o=>`acerto ${pc(o.hit)} | forte ${pc(o.forte)} | Leve ${pc(o.leve)} | Grave ${pc(o.grave)} | Rasgo ${pc(o.rasgo)} | VALOR ${o.valor.toFixed(2)}`;
const arma=dist(8,8,{dano:2}); console.log("A) Arma padrão, Ira d8 x Aparar d8, dano 2      ", fmt(arma));
// Faísca: Fagulha, margem travada em 3 (nunca Ferida), forte = rider Queimando 1 (vale ~1 Fôlego)
const fa=dist(10,8,{dano:1,cap:3,rider:1}); console.log("B) Faísca F0 (d8+roda=d10 x Esquivar d8), trava 3", fmt(fa));
const faN=dist(8,8,{dano:1,cap:3,rider:1}); console.log("   Faísca sem roda (alvo com escudo)              ", fmt(faN));
const da=dist(8,0,{fixa:4,dano:2,rasgo:1}); console.log("C) Dardo Certeiro F1 (d8 x Pena fixa 4, dano 2)   ", fmt(da));
const daD12=dist(8,12,{dano:2}); console.log("   (comparação: arma d8 contra defensor d12)      ", fmt(daD12));
const bfA=dist(8,10,{dano:2,cap:6,rasgo:1,rider:1}), bfE=dist(10,8,{dano:2,cap:6,rasgo:1,rider:1});
console.log("D) Bola de Fogo F3, por alvo que Aguenta (Gula d8 +1)", fmt(bfA));
console.log("   Bola de Fogo F3, por alvo que Esquiva (Preg d8)   ", fmt(bfE));
console.log("   Bola de Fogo nos 3 alvos (pior caso / melhor caso):", (3*bfA.valor).toFixed(2), "/", (3*bfE.valor).toFixed(2), " vs 1 golpe de arma", arma.valor.toFixed(2));
// Imobilizar F3: Ganância d8 x Orgulho d6(+1 centro => d8). Preso: sem Movimento nem Ação. Fim de cada turno: alvo rola Orgulho d6 contra Pena fixa 5 para sair (concentração).
let s=0; for(let x=1;x<=8;x++)for(let y=1;y<=8;y++) if(x>=y) s++; const pIm=s/64;
const pFica=4/6; const turnos = 1/(1-pFica); // turnos esperados preso (o 1º sempre)
console.log(`E) Imobilizar F3: pega ${pc(pIm)}; preso em média ${turnos.toFixed(2)} turnos; ações inimigas negadas esperadas = ${(pIm*turnos).toFixed(2)}`);
const ganhoCerco = dist(10,8,{dano:2}).valor - arma.valor;
const vIm = pIm*turnos*(arma.valor + 2*ganhoCerco);
console.log(`   VALOR ≈ ${vIm.toFixed(2)} (cada ação negada = 1 golpe inimigo; 2 aliados batem com +1 degrau no Preso)`);
// Monte Carlo: Imobilizar contra chefe (Orgulho d10 +1 = d12), sai com d10 vs 5
s=0; for(let x=1;x<=8;x++)for(let y=1;y<=12;y++) if(x>=y) s++; console.log(`   contra chefe (Orgulho d10): pega ${pc(s/96)}; sai no 1º teste ${pc(6/10)}`);
// CENA de 5 rodadas contra 3 inimigos padrão
const G=5*arma.valor, M1=3*bfA.valor+da.valor+3*fa.valor, M2=vIm+da.valor+3*fa.valor;
console.log(`\nCENA (5 rodadas, 3 inimigos que defendem do melhor jeito):`);
console.log(`  Guerreiro, 5 golpes:                       ${G.toFixed(2)}`);
console.log(`  Mago A: Bola de Fogo + Dardo + 3 Faíscas:   ${M1.toFixed(2)}  (4 Fios)`);
console.log(`  Mago B: Imobilizar + Dardo + 3 Faíscas:     ${M2.toFixed(2)}  (4 Fios)`);
console.log(`  Mago só Faíscas:                           ${(5*fa.valor).toFixed(2)}`);
// Rasgo por 1 natural no d8 por magia de Fio>=1; 2 magias com Fios por cena
console.log(`  Chance de pelo menos 1 Rasgo na cena (2 magias com Fio, d8): ${pc(1-Math.pow(7/8,2))}`);
