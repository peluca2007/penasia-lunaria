const S=require('./sim.js');
Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1});
const base=JSON.parse(JSON.stringify(S.mk.boss));
const vars={orig:{},p2R3:{p2:{R:3}},p1R3p2R3:{p1:{R:3},p2:{R:3}},p2fol5R3:{p2:{R:3,fmax:5}},p1fol7p2R3:{p1:{fmax:7},p2:{R:3}}};
const pols={S1:{roda:true,respira:true},S6:{roda:true,respira:true,finta:true,aposta:'smart',imp:true},S0:{roda:false,respira:true}};
for(const [k,v] of Object.entries(vars)){S.mk.boss={p1:{...base.p1,...(v.p1||{})},p2:{...base.p2,...(v.p2||{})}};console.log(k);
 for(const [pk,p] of Object.entries(pols)) console.log('  ',pk,JSON.stringify(S.stats(()=>S.runBoss(p,S.mk),10000)));}
