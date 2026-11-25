// Escala por Peso. node escala_peso_sim.js
const tiers=[{n:'1-4',m:1,q:0,d:[10]},{n:'5-7',m:2,q:1,d:[8,8]},{n:'8-10',m:3,q:2,d:[10,10]},{n:'11+',m:4,q:3,d:[12,12]}];
const roll=d=>d.reduce((s,x)=>s+1+Math.floor(Math.random()*x),0);
const N=200000;
function sim(t,{arma,arm,V0,b,def}){
  const m=t.m,V=V0+b*t.q;let sumDmg=0,zero=0,hits=0,one=0,tot=0,armorCut=0,raw=0;
  const gold=[];
  for(let i=0;i<N;i++){
    const a=roll(t.d),r=roll(t.d);
    if(a<r)continue; // defendeu (so conta golpes que acertam)
    let d=a+arma*m; raw+=d;
    let x=d-arm*m;
    if(def==='aguenta')x-=2*m; if(def==='aparar')x-=Math.floor(r/2);
    if(x<=0){zero++;x=0}
    armorCut+=d-x; sumDmg+=x; hits++; if(x>=V)one++;
  }
  // golpes ate cair (so acertos)
  const cnt=[];for(let k=0;k<20000;k++){let v=V,c=0;while(v>0&&c<50){const a=roll(t.d),r=roll(t.d);if(a<r)continue;let x=a+arma*m-arm*m;if(def==='aguenta')x-=2*m;if(def==='aparar')x-=Math.floor(r/2);if(x<0)x=0;v-=x;c++}cnt.push(c)}
  const mean=cnt.reduce((s,x)=>s+x,0)/cnt.length;
  return {V,dmg:sumDmg/hits,cut:armorCut/raw*100,zero:zero/hits*100,one:one/hits*100,hitsToDrop:mean,min:Math.min(...cnt)};
}
function tabela(titulo,opt){
  console.log('\n## '+titulo);
  for(const t of tiers){const r=sim(t,opt);console.log(`Peso ${t.n.padEnd(5)} x${t.m} Vida ${String(r.V).padStart(2)} | dano/acerto ${r.dmg.toFixed(1).padStart(5)} | armadura tira ${r.cut.toFixed(0).padStart(2)}% | zera ${r.zero.toFixed(0).padStart(2)}% | 1-golpe-mata ${r.one.toFixed(1)}% | acertos ate cair ${r.hitsToDrop.toFixed(1)} (min ${r.min})`)}
}
const base={arma:3,arm:2,V0:16,def:'nenhuma'};
console.log('--- SEM bonus de Vida (b=0)');
tabela('arma+3 armadura2 sem defesa',{...base,b:0});
tabela('arma+3 armadura2 Aguenta',{...base,b:0,def:'aguenta'});
tabela('arma+3 armadura2 Aparar',{...base,b:0,def:'aparar'});
tabela('arma+1 armadura3 sem defesa (arma fraca/armadura forte)',{arma:1,arm:3,V0:16,b:0,def:'nenhuma'});
tabela('arma+1 armadura3 Aguenta',{arma:1,arm:3,V0:16,b:0,def:'aguenta'});
tabela('arma+1 armadura3 Aparar',{arma:1,arm:3,V0:16,b:0,def:'aparar'});
tabela('CHEFE arma+5 vs armadura 3 sem defesa Vida 14',{arma:5,arm:3,V0:14,b:0,def:'nenhuma'});
tabela('CHEFE arma+5 vs armadura 0 Vida 14',{arma:5,arm:0,V0:14,b:0,def:'nenhuma'});
for(const b of [0,2,3,4,5,6,8,10]){console.log('\n--- b='+b);tabela('arma+3 arm2 sem defesa',{...base,b});}
for(const b of [4,6,8]){console.log('\n--- b='+b+' Vida pior caso (V0 14, arm 3 arma 5 Aguenta)');tabela('',{arma:5,arm:0,V0:14,b,def:'nenhuma'});tabela('',{arma:3,arm:2,V0:20,b,def:'aparar'});}
