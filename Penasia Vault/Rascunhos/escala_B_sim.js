// Proposta B (arma/armadura fixas) vs A (x Peso) vs C (armadura = degraus). node escala_B_sim.js
const L=[[4],[6],[8],[10],[12],[6,6],[6,8],[8,8],[8,10],[10,10],[10,12],[12,12]];
const avg=d=>d.reduce((s,x)=>s+(x+1)/2,0);
const tiers=[{n:'1-4',m:1,q:0,V:16,s:3},{n:'5-7',m:2,q:1,V:24,s:7},{n:'8-10',m:3,q:2,V:32,s:9},{n:'11+',m:4,q:3,V:40,s:11}];
const roll=d=>d.reduce((s,x)=>s+1+Math.floor(Math.random()*x),0);
const N=150000;
// modo: A (arma,arm x m), B (fixo), C (arm = degraus abaixo no dado do atacante; arma fixa)
function dano(mode,t,a,r,arma,arm,def){
  let x;
  if(mode==='A') x=a+(arma-arm)*t.m;
  else if(mode==='B') x=a+arma-arm;
  else { const k=Math.max(0,t.s-arm); x=Math.round(a*avg(L[k])/avg(L[t.s]))+arma; }
  if(def==='aparar') x-=Math.floor(r/2);
  if(def==='aguenta') x-=2;
  if(def==='ceder') x=Math.ceil(x/2);
  return x;
}
function sim(mode,t,arma,arm,def){
  const D=L[t.s];let raw=0,got=0,hits=0,clamp=0,one=0,sum=0;
  for(let i=0;i<N;i++){const a=roll(D),r=roll(D);if(a<r)continue;
    const bruto=a+(mode==='A'?arma*t.m:arma);raw+=bruto;
    let x=dano(mode,t,a,r,arma,arm,def);if(x<1){clamp++;x=1}
    sum+=x;hits++;if(x>=t.V)one++}
  let tot=0;const K=20000;
  for(let k=0;k<K;k++){let v=t.V,c=0;while(v>0&&c<99){const a=roll(D),r=roll(D);if(a<r)continue;v-=Math.max(1,dano(mode,t,a,r,arma,arm,def));c++}tot+=c}
  return {dmg:sum/hits,cut:(1-sum/raw)*100,clamp:clamp/hits*100,one:one/hits*100,dropHits:tot/K};
}
const f=(x,n=1)=>x.toFixed(n);
function bloco(titulo,arma,arm){
  console.log(`\n## ${titulo} (arma +${arma}, armadura ${arm})`);
  console.log('modo Peso  | dano/acerto | arm tira% | min1% | 1-golpe-mata% | acertos p/ cair: sem def / Aparar / Cede');
  for(const mode of ['A','B','C'])for(const t of tiers){
    const s=sim(mode,t,arma,arm,'n'),p=sim(mode,t,arma,arm,'aparar'),c=sim(mode,t,arma,arm,'ceder');
    // armadura 0 comparativo p/ %cortado real
    console.log(`${mode}   ${t.n.padEnd(5)}| ${f(s.dmg).padStart(5)} | ${f(s.cut,0).padStart(3)} | ${f(s.clamp,0).padStart(3)} | ${f(s.one,1).padStart(4)} | ${f(s.dropHits)} / ${f(p.dropHits)} / ${f(c.dropHits)}`);
  }
}
bloco('Arma padrao vs armadura malha',3,2);
bloco('Arma leve vs placas',1,3);
bloco('Arma pesada vs couro',5,1);
// CHEFE
function chefe(mode,t,H,armaH,armH,armaB,defH){
  const D=L[t.s];let rounds=0,drops=0,lost=0;const K=8000;let dead=0;
  for(let k=0;k<K;k++){
    let boss=10*H;const v=Array(H).fill(t.V);let r=0;
    while(boss>0&&r<30){r++;
      for(let h=0;h<H;h++){if(v[h]<=0)continue;const a=roll(D),b=roll(D);if(a<b)continue;boss-=Math.max(1,dano(mode,t,a,b,armaH,0,'aguenta'))}
      if(boss<=0)break;
      let g=Math.floor(H/2)+((H%2)&&r%2===0?1:0);
      for(let i=0;i<g;i++){const h=Math.floor(Math.random()*H);const a=roll(D),b=roll(D);if(a<b)continue;
        v[h]-=Math.max(1,dano(mode,t,a,b,armaB,armH,defH));}
    }
    rounds+=r;drops+=v.filter(x=>x<=0).length;lost+=v.reduce((s,x)=>s+(t.V-Math.max(0,x)),0)/(H*t.V);
  }
  return {r:rounds/K,drop:drops/K,lost:lost/K*100};
}
for(const defH of ['n','aparar']){
console.log(`\n## CHEFE (heroi arma+3 arm2; chefe clava+4; 10 Vida/heroi/fase; golpes=H/2); defesa heroi: ${defH}`);
console.log('modo Peso  H | rodadas/fase | herois a 0 | % Vida perdida');
for(const mode of ['A','B','C'])for(const t of tiers)for(const H of [3,4,5]){
  const c=chefe(mode,t,H,3,2,4,defH);
  console.log(`${mode}   ${t.n.padEnd(5)} ${H} | ${f(c.r)} | ${f(c.drop,2)} | ${f(c.lost,0)}`);}
}
