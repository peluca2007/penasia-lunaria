const S=require('./sim.js');Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1});
S.mk.boss.p2.R=3;S.mk.boss.p2.fmax=5;
for(const a of [undefined,'brasa1','brasa2','smart','sempre']) console.log(String(a).padEnd(8),JSON.stringify(S.stats(()=>S.runBoss({roda:true,respira:true,aposta:a},S.mk),20000)));
// distribuição de rodadas e quedas por PJ no cenário final S6
const res={};for(let i=0;i<20000;i++){const o=S.runBoss({roda:true,respira:true,finta:true,aposta:'smart',imp:true},S.mk);res[o.rounds]=(res[o.rounds]||0)+1;}
console.log(JSON.stringify(res));
