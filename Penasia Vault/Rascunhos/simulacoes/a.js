const D=[4,6,8,10,12];
function dist(n,k){ // pmf over values of max of k dN; n=0 -> auto fail (value 0)
  if(n===0)return {0:1};const p={};for(let v=1;v<=n;v++){p[v]=(Math.pow(v/n,k)-Math.pow((v-1)/n,k));}return p;}
function spec(base,deg){ // base die size, degree shift
  let i=D.indexOf(base)+deg; if(i<0)return [0,1]; if(i<=4)return [D[i],1]; return [12,Math.min(2,i-3)]; }
function P(a,d){ // a,d = [n,k]; returns pmf of margin>=? returns array of margin pmf
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
// sim
function rnd(n){return 1+Math.floor(Math.random()*n)}
function roll(s){let m=0;if(s[0]===0)return 0;for(let i=0;i<s[1];i++)m=Math.max(m,rnd(s[0]));return m}
const wheel=['Ira','Luxuria','Preguica','Ganancia','Inveja','Gula'];
function dom(a,b){const i=wheel.indexOf(a),j=wheel.indexOf(b);if(a==='Orgulho')return true;if(b==='Orgulho')return false;return (j-i+6)%6===1||(j-i+6)%6===2}
function F(o){return Object.assign({leve:0,grave:0,mort:false,shield:false,sbroken:false,prot:0,fb:0,bonus:{},foleg:0,fmax:0,wb:2},o)}
function init(f){f.fmax0={4:3,6:4,8:5,10:6,12:7}[f.dice.Gula]+(f.fextra||0);f.fmax=f.fmax0;f.foleg=f.fmax;}
function sp(f,p,extra=0){let deg=extra+(f.grave?-1:0)+(f.deg&&f.deg[p]||0);deg=Math.max(-3,Math.min(3,deg));return spec(f.dice[p],deg)}
function wound(f,t){if(t==='L'){if(f.leve<f.wl){f.leve++;f.fmax--;f.foleg=Math.min(f.foleg,f.fmax)}else wound(f,'G')}
 else{if(f.grave<f.wg)f.grave++;else f.mort=true}}
function defOpts(f){return [['Preguica',false],['Ira',true]]}
function attackP(att,def,ap,dp,dsh){const a=sp(att,ap,dom(ap,dp)?1:0);const d=sp(def,dp,(dom(dp,ap)?1:0)+(dsh?1:0));return {a,d}}
function turn(att,def,cfg){
 // attacker picks pecado maximizing worst-case harm prob
 let best=null;
 for(const ap of att.atk){let worst=1,wd=null;for(const [dp,needs] of defOpts(def)){const s=attackP(att,def,ap,dp,dp==='Ira'&&def.shield);const m=P(s.a,s.d);const h=ge(m,def.prot);const pen=(dp==='Preguica'?def.esqPen||0:0);
   // esq penalty degrees
   let dd=s.d;if(pen){dd=spec(def.dice.Preguica,Math.max(-3,Math.min(3,(dom(ap,'Preguica')?0:0)+(dom('Preguica',ap)?1:0)-pen+(def.grave?-1:0))));}
   const m2=P(s.a,dd);const h2=ge(m2,def.prot);if(h2<worst){worst=h2;wd=[dp,dd]}}
  if(!best||worst>best.w)best={w:worst,ap,dd:wd[1]}}
 const ap=best.ap;const a=sp(att,ap,0);// roda handled: recompute
 const dp=null;
 const A=roll(sp(att,ap,dom(ap,best.dp||'x')?0:0));
 return best}
