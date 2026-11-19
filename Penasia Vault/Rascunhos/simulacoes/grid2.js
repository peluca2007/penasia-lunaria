const S=require('./sim.js');
const base={roda:true,respira:true,finta:true,aposta:'smart',imp:true};
const pols={S6:base,AguentarSempre:{...base,fixGuard:'Gula'},AparaSempre:{...base,fixGuard:'Ira'},EsquivaSempre:{...base,fixGuard:'Preg'}};
const cfgs=JSON.parse(process.argv[2]);
for(const c of cfgs){Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1,aguentarFree:0},c);console.log('CFG',JSON.stringify(c));
 for(const [k,p] of Object.entries(pols)) console.log('  ',k.padEnd(15),JSON.stringify(S.stats(()=>S.runBoss(p,S.mk),10000)));}
