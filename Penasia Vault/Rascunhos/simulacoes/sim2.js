const D=[4,6,8,10,12];
let seed=1; function rnd(){seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296}
function roll(n){return 1+Math.floor(rnd()*n)}
function rollStep(die,steps){ // returns {v,d}
  let i=D.indexOf(die)+Math.max(-3,Math.min(3,steps));
  if(i<0) return {v:0,d:0};
  if(i>4){const a=roll(12),b=roll(12);return {v:Math.max(a,b),d:'2d12'}}
  return {v:roll(D[i]),d:'d'+D[i]};
}
const DOM={Ira:['Luxuria','Preguica'],Luxuria:['Preguica','Ganancia'],Preguica:['Ganancia','Inveja'],Ganancia:['Inveja','Gula'],Inveja:['Gula','Ira'],Gula:['Ira','Luxuria']};
const dom=(a,b)=>DOM[a]&&DOM[a].includes(b)?1:0;
const FOL={4:3,6:4,8:5,10:6,12:7};
function mk(name,b,armor){return {name,b,armor,fmax:FOL[b.Gula],fol:FOL[b.Gula],leve:0,grave:0,mortal:0,lm:0}}
function pen(c){return -c.grave} // cada Grave -1 degrau
function defChoose(def,atk,atkP){ // melhor postura por dado esperado
  let best=null,bs=-9;
  for(const p of ['Preguica','Ira']){
    const s=dom(p,atkP)-dom(atkP,p);
    const steps=Math.max(-3,Math.min(3,s+pen(def)+(p==='Preguica'?-def.armor.pp:0)));
    const idx=D.indexOf(def.b[p])+steps; const avg=idx<0?0:idx>4?9:(D[idx]+1)/2;
    if(avg>bs){bs=avg;best=p}
  }return best;
}
// tabela: resultado 1..13 => {fol, leve, grave, mortal}
const TAB={1:{f:1},2:{f:1},3:{f:0},4:{f:0},5:{f:0},6:{f:2},7:{l:1},8:{l:1,f:1},9:{l:1,f:1},10:{g:1},11:{g:1},12:{g:1},13:{m:1}};
function mark(c,kind){ // kind L,G,M com overflow
  if(kind==='L'){ if(c.leve<3){c.leve++;c.fmax=Math.max(1,c.fmax-1);c.fol=Math.min(c.fol,c.fmax)} else return mark(c,'G'); }
  else if(kind==='G'){ if(c.grave<2) c.grave++; else return mark(c,'M'); }
  else c.mortal=1;
}
function attack(a,d,log){
  const ap='Ira';
  const dp=defChoose(d,ap);
  const as=dom(ap,dp)-dom(dp,ap)+pen(a);
  const ds=dom(dp,ap)-dom(ap,dp)+pen(d)+(dp==='Preguica'?-d.armor.pp:0);
  const A=rollStep(a.b[ap],as),Dd=rollStep(d.b[dp],ds);
  let res={A,Dd,dp,txt:''};
  if(A.v<Dd.v||A.v===0){log&&log.push(`${a.name} Ira ${A.d}=${A.v} vs ${d.name} ${dp} ${Dd.d}=${Dd.v}: falha`);return}
  let m=A.v-Dd.v-d.armor.p; let t=`${a.name} Ira ${A.d}=${A.v} vs ${d.name} ${dp} ${Dd.d}=${Dd.v}: margem ${A.v-Dd.v}`+(d.armor.p?` -${d.armor.p} arm = ${m}`:'');
  if(m<0){log&&log.push(t+' bate e nao passa');return}
  if(m<=3){ if(d.fol>0){const q=m>=2?2:1;d.fol=Math.max(0,d.fol-q);t+=' -'+q+' Folego'} else {mark(d,'L');t+=' sem Folego: Leve'} }
  else{
    const g=m>=7; const tr=roll(10)+(g?3:0); const e=TAB[tr];
    t+=` -> ${g?'Grave':'Leve'} direta, tabela ${g?'d10+3':'d10'}=${tr}`;
    mark(d,g?'G':'L');
    if(e.f)d.fol=Math.max(0,d.fol-e.f); if(e.l)mark(d,'L'); if(e.g)mark(d,'G'); if(e.m)mark(d,'M');
  }
  log&&log.push(t+` [Fol ${d.fol}/${d.fmax} L${d.leve} G${d.grave} M${d.mortal}]`);
}
function duel(bA,bB,arA,arB,verbose){
  const A=mk('A',bA,arA),B=mk('B',bB,arB);const log=verbose?[]:null;
  let first=rnd()<.5?[A,B]:[B,A],r=0;
  while(!A.mortal&&!B.mortal&&r<60){r++;
    for(const [x,y] of [first,[first[1],first[0]]]){ if(x.mortal||y.mortal)break; attack(x,y,log)}
  }
  return {r,log,winner:A.mortal?'B':B.mortal?'A':'-'};
}
module.exports={duel,setSeed:s=>seed=s};
if(require.main===module){
const builds={
 Bruto:{Ira:12,Gula:10,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4},
 Resistente:{Ira:10,Gula:12,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4},
 Esquivo:{Ira:10,Gula:8,Preguica:12,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4}};
const arm={0:{p:0,pp:0},1:{p:1,pp:0},2:{p:2,pp:1},3:{p:3,pp:2}};
for(const [n,b] of Object.entries(builds))for(const k of [0,1,2,3]){
  const N=20000;let rs=[];for(let i=0;i<N;i++){rs.push(duel(b,b,arm[k],arm[k]).r)}
  rs.sort((a,b)=>a-b);const avg=rs.reduce((a,b)=>a+b)/N;
  console.log(n,'arm',k,'media',avg.toFixed(1),'mediana',rs[N>>1],'p10',rs[N*.1|0],'p90',rs[N*.9|0]);
}}
