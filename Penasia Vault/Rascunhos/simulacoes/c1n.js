const S=require('./sim.js');Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1});
S.mk.boss.p2.R=3;S.mk.boss.p2.fmax=5;S.CFG.nAtk=0;const N=5000;
for(let i=0;i<N;i++)S.runBoss({roda:true,respira:true,finta:true,aposta:'smart',imp:true},S.mk);
console.log('ataques por luta de chefe:',(S.CFG.nAtk/N).toFixed(1));
