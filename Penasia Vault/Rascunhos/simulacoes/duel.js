const S=require('./sim.js');const {attack,pj,bestAtk,bestGuard,CFG}=S;
Object.assign(CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2});
const mkC=()=>pj('C',{Ira:12,Lux:6,Gula:10,Preg:6,Inv:8,Gan:4,Org:8},['Ira','Gula'],['Ira','Gula','Preg'],{dmg:2,prot:1,esqPen:0});
const mkE=()=>pj('E',{Ira:6,Lux:10,Gula:6,Preg:8,Inv:12,Gan:8,Org:4},['Inv','Lux'],['Preg','Ira','Gula','Inv'],{dmg:1,prot:1});
function duel(a,b,o={}){let A=a(),B=b(),r=0;A.guard=bestGuard(A,B.atk,B.d);B.guard=bestGuard(B,A.atk,A.d);
 while(r<60){r++;for(const [X,Y] of [[A,B],[B,A]]){ if(X.down)continue; const {P,adv}=bestAtk(X,Y); attack(X,Y,P,{aposta:o.ap&&adv>=1?1:0}); if(o.fix)X.guard=o.fix; else X.guard=bestGuard(X,Y.atk,Y.d); if(Y.down) return {r,w:X.name};}}
 return {r,w:'-'};}
function st(f,N=20000){let rs=[],w={};for(let i=0;i<N;i++){const o=f();rs.push(o.r);w[o.w]=(w[o.w]||0)+1;}rs.sort((x,y)=>x-y);return {media:(rs.reduce((a,b)=>a+b)/N).toFixed(1),p10:rs[N*.1|0],p50:rs[N/2|0],p90:rs[N*.9|0],vit:w};}
console.log('Carrasco x Carrasco',JSON.stringify(st(()=>duel(mkC,mkC))));
console.log('Carrasco x Carrasco Aguentar fixo',JSON.stringify(st(()=>duel(mkC,mkC,{fix:'Gula'}))));
CFG.aguentarFree=1;console.log('idem Aguentar SEM custo',JSON.stringify(st(()=>duel(mkC,mkC,{fix:'Gula'}))));CFG.aguentarFree=0;
console.log('Carrasco x Espreitadora',JSON.stringify(st(()=>duel(mkC,mkE))));
console.log('Carrasco x Espreitadora c/ TudoOuNada esperto',JSON.stringify(st(()=>duel(mkC,mkE,{ap:1}))));
CFG.zeroBonus=4;console.log('Carrasco x Carrasco (+4 sem Fôlego)',JSON.stringify(st(()=>duel(mkC,mkC))));
CFG.zeroBonus=3;CFG.tab7=3;console.log('Carrasco x Carrasco (d10+3 antigo)',JSON.stringify(st(()=>duel(mkC,mkC))));
CFG.tab7=2;
const mkE2=()=>pj('E',{Ira:6,Lux:10,Gula:6,Preg:8,Inv:12,Gan:8,Org:4},['Inv','Lux'],['Preg','Ira','Gula'],{dmg:1,prot:1});
console.log('Carrasco x Espreitadora sem Guarda de Ofício',JSON.stringify(st(()=>duel(mkC,mkE2))));
const mkE3=()=>pj('E',{Ira:6,Lux:10,Gula:6,Preg:8,Inv:12,Gan:8,Org:4},['Inv','Lux'],['Preg','Ira','Gula','Inv'],{dmg:1,prot:1,capInv:1});
const mkC2=()=>pj('C',{Ira:12,Lux:6,Gula:10,Preg:6,Inv:8,Gan:4,Org:8},['Ira','Gula'],['Ira','Gula','Preg'],{dmg:3,ap:1,prot:2,esqPen:1});
console.log('Carrasco (pesada+malha) x Espreitadora',JSON.stringify(st(()=>duel(mkC2,mkE))));
