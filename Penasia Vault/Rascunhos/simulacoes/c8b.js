const S=require('./sim.js');const {attack,pj,bestAtk,SZ,dom,CFG}=S;
Object.assign(CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2});
function bestGuard(D,atk,ad){let best=D.guards[0],bv=-99;for(const G of D.guards){if(CFG.costOf&&G===D.ofGuard&&D.imp<1)continue;let die=D.d[G];if(CFG.capOf&&G===D.ofGuard)die=Math.min(die,CFG.capOf);let w=99;for(const P of atk){let db=(dom(G,P)?1:0);if(CFG.noDomOf&&G===D.ofGuard)db=0; if(CFG.downOf&&G===D.ofGuard)db--;w=Math.min(w,SZ[die]-(G==='Preg'?D.esqPen:0)+db-(SZ[ad[P]]+(dom(P,G)?1:0)));}if(w>bv){bv=w;best=G;}}if(CFG.costOf&&best===D.ofGuard)D.imp--;return best;}
const C=(o={})=>pj('Brigão',{Ira:12,Lux:6,Gula:10,Preg:6,Inv:8,Gan:4,Org:8},['Ira','Gula'],['Ira','Gula','Preg'],{dmg:2,prot:1,...o});
const N=(o={})=>pj('Navalha',{Ira:6,Lux:10,Gula:6,Preg:8,Inv:12,Gan:8,Org:4},['Inv','Lux'],['Preg','Ira','Gula','Inv'],{dmg:1,prot:1,ofGuard:'Inv',...o});
const V=(o={})=>pj('Vigia',{Ira:6,Lux:4,Gula:8,Preg:12,Inv:10,Gan:8,Org:6},['Preg','Inv'],['Preg','Ira','Gula'],{dmg:2,prot:1,ofGuard:'Preg',...o});
const A=(o={})=>pj('Armador',{Ira:6,Lux:4,Gula:8,Preg:10,Inv:8,Gan:12,Org:6},['Gan','Preg'],['Preg','Ira','Gula','Gan'],{dmg:2,prot:1,ofGuard:'Gan',...o});
const Cf=(o={})=>pj('Confessor',{Ira:6,Lux:12,Gula:8,Preg:8,Inv:10,Gan:6,Org:4},['Lux','Inv'],['Preg','Ira','Gula','Lux'],{dmg:1,prot:1,ofGuard:'Lux',...o});
const B2=(o={})=>pj('Brigão',{Ira:12,Lux:6,Gula:10,Preg:6,Inv:8,Gan:4,Org:8},['Ira','Gula'],['Ira','Gula','Preg','Gula'],{dmg:2,prot:1,...o});
function duel(a,b){let X=a(),Y=b(),r=0;X.guard=bestGuard(X,Y.atk,Y.d);Y.guard=bestGuard(Y,X.atk,X.d);
 while(r<60){r++;for(const [P,Q] of [[X,Y],[Y,X]]){if(P.down)continue;const {P:pc}=bestAtk(P,Q);attack(P,Q,pc,{});P.guard=bestGuard(P,Q.atk,Q.d);if(Q.down)return P.name;}}return '-';}
function wr(a,b,n=20000){let w=0;for(let i=0;i<n;i++){if(duel(a,b)===a().name)w++;}return (100*w/n).toFixed(0);}
const pairs=[['Brigão x Navalha',C,N],['Brigão x Vigia',C,V],['Brigão x Armador',C,A],['Brigão x Confessor',C,Cf],['Navalha x Vigia',N,V],['Navalha x Armador',N,A],['Vigia x Armador',V,A],['Armador x Confessor',A,Cf],['Navalha x Confessor',N,Cf]];
const vars={'Guarda de Ofício −1 degrau':{downOf:1},'teto d10 e sem roda':{capOf:10,noDomOf:1}};
for(const [k,v] of Object.entries(vars)){Object.assign(CFG,{capOf:0,noDomOf:0,costOf:0,downOf:0},v);
 const row=pairs.map(([n,a,b])=>n+' '+wr(a,b,8000)+'%');
 const vals=pairs.map(([n,a,b])=>Math.abs(+wr(a,b,8000)-50));
 console.log(k+' | desvio médio de 50%: '+(vals.reduce((x,y)=>x+y)/vals.length).toFixed(1)+'\n   '+row.join(' · '));}
