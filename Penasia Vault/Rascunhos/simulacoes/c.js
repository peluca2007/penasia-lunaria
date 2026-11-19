// Divida: custo esperado por conjuro (piso d6, Coracao vs Pena)
function cost(die,tier){const n=Math.max(6,die),pena=[3,4,5][tier-1],c=tier;let e=0;
 for(let v=1;v<=n;v++){let k;if(v===1)k=c;else if(v>=pena+4)k=Math.max(1,c-1);else if(v>=pena)k=c;else k=1;e+=k/n}return e}
for(const d of [4,6,8,10,12])console.log("d"+d,[1,2,3].map(t=>cost(d,t).toFixed(2)).join(" / "),"nominal 1/2/3");
// Penas: piso sem risco
console.log("piso sem risco/sessao: Presenca1+PagarDivida2+Cobranca1+Contencao2 =",1+2+1+2);
// ritmo: sessoes ate Peso
const cum=[0,0,4,10,18,28,40,54,70,88,108,132,160,192];
for(const r of [2,5,6,7.5,9])console.log("Penas/sess",r,"P4",(18/r).toFixed(1),"P5",(28/r).toFixed(1),"P7",(54/r).toFixed(1),"P10",(108/r).toFixed(1),"P13",(192/r).toFixed(0));
console.log("curta x1.5: Peso4 em",(18/7.5).toFixed(1),"sess; Penas acumuladas em 5-8 sess:",5*7.5,"-",8*7.5);
// Contencao resist roll-under
for(const d of [4,6,8,10,12])console.log("d"+d,"resiste Leve(6)",(Math.min(d,5)/d*100).toFixed(0)+"%","Forte(8)",(Math.min(d,7)/d*100).toFixed(0)+"%");
// ataque minimax por Oficio: dado primario d12 sec d8, defensor Ira d10 Preguica d10, so Esquivar/Aparar
const wheel=['Ira','Luxuria','Preguica','Ganancia','Inveja','Gula'];
function dom(a,b){if(a==='Orgulho')return 1;const d=(wheel.indexOf(b)-wheel.indexOf(a)+6)%6;return d===1||d===2?1:0}
const D=[4,6,8,10,12];
function sp(b,deg){let i=D.indexOf(b)+deg;if(i<0)return[0,1];if(i<=4)return[D[i],1];return[12,2]}
function pm(a,d){const f=(n,k,v)=>n==0?(v==0?1:0):(Math.pow(v/n,k)-Math.pow((v-1)/n,k));let s=0;for(let x=1;x<=a[0];x++)for(let y=1;y<=d[0];y++)if(x>=y)s+=f(a[0],a[1],x)*f(d[0],d[1],y);return s}
const defs={Esquivar:['Preguiça',10],Aparar:['Ira',10]};
const wn={Preguiça:'Preguica',Ira:'Ira'};
const off={Carrasco:[['Ira',12],['Gula',8]],Amante:[['Luxuria',12],['Inveja',8]],Titanico:[['Gula',12],['Ira',8]],Sentinela:[['Preguica',12],['Inveja',8]],Espreitador:[['Inveja',12],['Luxuria',8]],Agiota:[['Ganancia',12],['Preguica',8]],Avatar:[['Orgulho',12],['Ira',8]],Pactario_Ira:[['Ira',12]],Andarilho:[['Preguica',8],['Inveja',8]]};
for(const [o,as] of Object.entries(off)){let best=0,bn;for(const [p,die] of as){let worst=1;for(const [dn,dp] of [['Esq','Preguica'],['Apar','Ira']]){const a=sp(die,dom(p,dp));const d=sp(10,dom(dp,p));worst=Math.min(worst,pm(a,d))}if(worst>best){best=worst;bn=p}}console.log(o.padEnd(13),(best*100).toFixed(0)+"%",bn)}
