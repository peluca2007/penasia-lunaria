const S=require('./sim.js');
const pols={S1:{roda:true,respira:true},S2finta:{roda:true,respira:true,finta:true},S3aposta:{roda:true,respira:true,aposta:'sempre'},S4smart:{roda:true,respira:true,aposta:'smart'},S5imp:{roda:true,respira:true,imp:true},S6:{roda:true,respira:true,finta:true,aposta:'smart',imp:true}};
const cfgs=JSON.parse(process.argv[2]);
for(const c of cfgs){Object.assign(S.CFG,{zeroBonus:4,tab7:2,capUp:2,apM:3,Q:null},c);console.log('CFG',JSON.stringify(c));
 for(const [k,p] of Object.entries(pols)) console.log('  ',k.padEnd(10),JSON.stringify(S.stats(()=>S.runBoss(p,S.mk),10000)));}
