const S=require('./sim.js');const {attack,pj,SZ,roll,bestAtk,bestGuard,CFG}=S;
Object.assign(CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2});
function rival(name){return pj(name,{Ira:10,Lux:6,Gula:8,Preg:8,Inv:8,Gan:6,Org:6},['Ira','Inv'],['Ira','Preg','Gula'],{leveCap:1,dmg:2,prot:1,isPJ:false,melee:true});}
function bando(n){return {bando:true,name:'Bando',n,d:{Ira:8,Preg:6,Gula:6,Inv:6,Lux:6,Gan:6,Org:6},atk:['Ira'],guards:['Preg'],guard:'Preg',prot:0,ap:0,dmg:2,fol:0,leve:0,grave:0,down:false,isPJ:false,caido:false,exposto:false,penal:0,esqPen:0,bleed:0};}
function run(enemyMaker){
 const team=S.mk.team(); const foes=enemyMaker();
 const aliveP=()=>team.filter(p=>!p.down), aliveF=()=>foes.filter(f=>!f.down);
 let rounds=0;
 const fast=[],slow=[]; const lead=foes[0];
 for(const p of team)(roll(SZ[p.d.Inv])>=roll(SZ[lead.d.Inv])?fast:slow).push(p);
 const pjTurn=p=>{ if(p.down||!aliveF().length)return; p.caido=false;p.exposto=false; if(p.bleed)p.fol=Math.max(0,p.fol-p.bleed);
   if(p.fol===0&&!p.respirou){p.respirou=true;p.fol=Math.min(p.fmax,2);return;}
   let best=null,bv=-99,bp=null; for(const f of aliveF()){const {P,adv}=bestAtk(p,f); const v=adv+(f.bando?0.5:0); if(v>bv){bv=v;best=f;bp=P;}}
   attack(p,best,bp,{aposta:(bv>=1?1:0)});
   p.guard=bestGuard(p,['Ira','Inv'],{Ira:10,Inv:8});
 };
 const foeTurn=()=>{ for(const f of aliveF()){ const tg=aliveP(); if(!tg.length)return;
   let D=tg[Math.floor(Math.random()*tg.length)], P=f.atk[0];
   if(!f.bando){let bv=-99; for(const p of tg){const r=bestAtk(f,p); if(r.adv>bv){bv=r.adv;D=p;P=r.P;}}}
   const save=f.d.Ira; if(f.bando&&f.n>=4) f.d={...f.d,Ira:10};
   attack(f,D,P,{}); if(f.bando) f.d={...f.d,Ira:save};
   if(!f.bando) f.guard=bestGuard(f,['Ira','Inv','Lux','Preg'],{Ira:12,Inv:12,Lux:10,Preg:12});}};
 while(rounds<30){rounds++; for(const p of fast)pjTurn(p); if(!aliveF().length)break; foeTurn(); if(!aliveP().length)break; for(const p of slow)pjTurn(p); if(!aliveF().length)break;}
 return {win:!aliveF().length,rounds,quedas:team.reduce((s,p)=>s+p.quedas,0)};
}
const sc={'Rival+Bando4 (4 pts)':()=>[rival('R'),bando(4)],'2 Rivais+Bando4 (6 pts)':()=>[rival('R1'),rival('R2'),bando(4)],'Rival+2 Bandos4 (6 pts)':()=>[rival('R'),bando(4),bando(4)],'3 Rivais (6 pts)':()=>[rival('a'),rival('b'),rival('c')]};
for(const [k,f] of Object.entries(sc)) console.log(k.padEnd(26),JSON.stringify(S.stats(()=>run(f),10000)));
