const D=[4,6,8,10,12];
function dist(n,k){ // pmf over values of max of k dN; n=0 -> auto fail (value 0)
  if(n===0)return {0:1};const p={};for(let v=1;v<=n;v++){p[v]=(Math.pow(v/n,k)-Math.pow((v-1)/n,k));}return p;}
function spec(base,deg){ // base die size, degree shift
  let i=D.indexOf(base)+deg; if(i<0)return [0,1]; if(i<=4)return [D[i],1]; return [12,Math.min(2,i-3)]; }
const _c={};function P(a,d){const key=a+"|"+d;if(_c[key])return _c[key];return _c[key]=P0(a,d)}
function P0(a,d){ // a,d = [n,k]; returns pmf of margin>=? returns array of margin pmf
  const pa=dist(...a),pd=dist(...d),m={};
  for(const x in pa)for(const y in pd){const k=x-y;m[k]=(m[k]||0)+pa[x]*pd[y];}return m;}
const hit=(m)=>Object.entries(m).filter(([k])=>k>=0).reduce((s,[k,v])=>s+v,0);
const ge=(m,t)=>Object.entries(m).filter(([k])=>+k>=t).reduce((s,[k,v])=>s+v,0);
// 1. margin stats mirror
for(const [nm,a,d] of [["d10v d10",[10,1],[10,1]],["d12 v d12",[12,1],[12,1]],["2d12 v d12",[12,2],[12,1]],["2d12 v 2d12",[12,2],[12,2]],["d12 v 2d12",[12,1],[12,2]],["d8 v d8",[8,1],[8,1]]]){
 const m=P(a,d);console.log(nm,"hit",hit(m).toFixed(2),"m>=4",ge(m,4).toFixed(2),"m>=7",ge(m,7).toFixed(2),"m>=4 | hit",(ge(m,4)/hit(m)).toFixed(2),"m>=7|hit",(ge(m,7)/hit(m)).toFixed(2));}
// 3d12 check
function pmax3(){let s=0;for(let a=1;a<=12;a++)for(let b=1;b<=12;b++)for(let c=1;c<=12;c++)for(let d=1;d<=12;d++){if(Math.max(a,b,c)>=d)s++;}return s/12**4}
console.log("3d12 vs d12",pmax3().toFixed(2));
// armor effect: hit that passes (margin>=prot)
for(const pr of [0,1,2,3]){const m=P([12,2],[12,2]);console.log("2d12v2d12 prot",pr,"harm",ge(m,pr).toFixed(2),"leve+",ge(m,4+pr).toFixed(2),"grave",ge(m,7+pr).toFixed(2));}
for(const pr of [0,1,2,3]){const m=P([12,1],[12,2]);console.log("d12 v shield2d12 prot",pr,"harm",ge(m,pr).toFixed(3),"leve+",ge(m,4+pr).toFixed(3),"grave",ge(m,7+pr).toFixed(3));}
const wheel=['Ira','Luxuria','Preguica','Ganancia','Inveja','Gula'];
function rnd(n){return 1+Math.floor(Math.random()*n)}
function roll(s){if(s[0]===0)return 0;let m=0;for(let i=0;i<s[1];i++)m=Math.max(m,rnd(s[0]));return m}
function dom(a,b){if(a==='Orgulho')return true;if(b==='Orgulho')return false;const d=(wheel.indexOf(b)-wheel.indexOf(a)+6)%6;return d===1||d===2}
const FB={4:3,6:4,8:5,10:6,12:7};
function mk(o){const f=Object.assign({wl:2,wg:1,leve:0,grave:0,mort:false,shield:false,sused:false,prot:0,esqPen:0,fx:0,off:0,dmg:2,atk:['Ira'],bonus:0,ignore:0},o);f.fmax=FB[f.dice.Gula]+f.fx;f.f=f.fmax;return f}
function sp(f,p,extra){let deg=extra+(f.grave?-1:0);deg=Math.max(-3,Math.min(3,deg));return spec(f.dice[p],deg)}
function wound(f,t){if(t==='L'){if(f.leve<f.wl){f.leve++;f.fmax--;f.f=Math.min(f.f,f.fmax)}else wound(f,'G')}else{if(f.grave<f.wg)f.grave++;else f.mort=true}}
function dspec(def,dp,ap){let e=(dom(dp,ap)?1:0);if(dp==='Ira'&&def.shield)e+=1;if(dp==='Preguica')e-=def.esqPen;return sp(def,dp,e)}
function bestDef(att,def,ap){let best=null;for(const dp of ['Preguica','Ira']){const a=sp(att,ap,(dom(ap,dp)?1:0)+att.bonus);const d=dspec(def,dp,ap);const h=ge(P(a,d),def.prot-att.ignore);if(!best||h<best.h)best={h,dp,a,d}}return best}
function attack(att,def){let b=null;for(const ap of att.atk){const x=bestDef(att,def,ap);if(!b||x.h>b.h)b=x}
 const A=roll(b.a),Dd=roll(b.d);if(A<Dd)return;let m=A-Dd-(def.prot-att.ignore>0?def.prot-att.ignore:0);if(def.f===0)m+=4;if(m<0)return;
 if(m<=3){def.f=Math.max(0,def.f-att.dmg);return}
 const sh=()=>{ if(def.shield&&!def.sused){def.sused=true;return true}return false};
 if(m<=6){const r=rnd(10);if(!sh())wound(def,'L');if(r>=7&&r<=9)wound(def,'L');if(r===10)wound(def,'G');return}
 const r=rnd(10)+3;if(!sh())wound(def,'G');if(r>=7&&r<=9)wound(def,'L');else if(r>=10&&r<=12)wound(def,'G');else if(r===13)def.mort=true}
function duel(A,B,max=60){let r=0;while(r<max){r++;attack(A,B);if(B.mort)return [r,'A'];attack(B,A);if(A.mort)return [r,'B']}return [max,'-']}
function stats(mkA,mkB,n=6000){const rs=[],w={A:0,B:0,'-':0};for(let i=0;i<n;i++){const [r,wi]=duel(mkA(),mkB());rs.push(r);w[wi]++}rs.sort((a,b)=>a-b);return `med ${rs[n/2|0]} p10 ${rs[n*.1|0]} p90 ${rs[n*.9|0]} A ${(w.A/n*100).toFixed(0)}% B ${(w.B/n*100).toFixed(0)}% draw ${(w['-']/n*100).toFixed(0)}%`}
const base=()=>({Ira:10,Gula:10,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4});
const mir=(o={})=>()=>mk(Object.assign({dice:base()},o));
console.log("== mirror P1 sem armadura, 2 Leves (combate):",stats(mir(),mir()));
console.log("== mirror, 1 Leve (progressao):",stats(mir({wl:1}),mir({wl:1})));
console.log("== mirror gibao:",stats(mir({prot:1}),mir({prot:1})));
console.log("== Ofício +1 degrau em um lado:",stats(mir({bonus:1}),mir()));
console.log("== +1 degrau vs +4 Folego:",stats(mir({fx:4}),mir()));
console.log("== +1 Ferida Grave/Leve anulada (escudo) :",stats(mir({shield:true}),mir()));
const P10=(o={})=>()=>mk(Object.assign({dice:{Ira:12,Gula:12,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4},fx:2},o));
console.log("== P10 Ira12 mirror:",stats(P10(),P10()));
console.log("== P10 Ofício(+1 => 2d12) vs P10:",stats(P10({bonus:1}),P10()));
console.log("== P10 mirror placas(3)+escudo:",stats(P10({prot:3,shield:true,esqPen:2}),P10({prot:3,shield:true,esqPen:2})));
console.log("== P10 tank placas+escudo vs P10 sem armadura atacando:",stats(P10(),P10({prot:3,shield:true,esqPen:2})));
console.log("== P10 tank vs Espreitador Inveja ignora armadura:",stats(P10({atk:['Inveja'],dice:{Ira:8,Gula:10,Preguica:8,Inveja:12,Luxuria:6,Ganancia:6,Orgulho:4},ignore:3}),P10({prot:3,shield:true,esqPen:2})));
console.log("== placas+escudo tank vs Carrasco com 2d12 (Ira12+Ofício) :",stats(P10({bonus:1}),P10({prot:3,shield:true,esqPen:2})));
console.log("== Gula d4 vs d12 (resto igual):",stats(()=>mk({dice:{Ira:10,Gula:12,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4}}),()=>mk({dice:{Ira:10,Gula:4,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4}})));
