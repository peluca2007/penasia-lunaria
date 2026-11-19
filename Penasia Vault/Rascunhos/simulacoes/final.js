const S=require('./sim.js');Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1});
S.mk.boss.p2.R=3;S.mk.boss.p2.fmax=5;
const b={roda:true,respira:true};
const P={'Ingênuo (maior dado, sem roda)':{roda:false,respira:true},'Lê a roda':b,'Roda+Finta':{...b,finta:true},'Roda+Tudo-ou-Nada esperto':{...b,aposta:'smart'},'Roda+Tudo-ou-Nada sempre':{...b,aposta:'sempre'},'Roda+Ímpeto (derrubar/proteger)':{...b,imp:true},'Tudo junto':{...b,finta:true,aposta:'smart',imp:true},'Guarda fixa Aguentar':{...b,finta:true,aposta:'smart',imp:true,fixGuard:'Gula'},'Guarda fixa Esquivar':{...b,finta:true,aposta:'smart',imp:true,fixGuard:'Preg'}};
for(const [k,p] of Object.entries(P)) console.log(k.padEnd(34),JSON.stringify(S.stats(()=>S.runBoss(p,S.mk),30000)));
S.CFG.Q=2;console.log('Q=2 Tudo junto',JSON.stringify(S.stats(()=>S.runBoss(P['Tudo junto'],S.mk),30000)));
S.CFG.Q=1;S.CFG.zeroBonus=4;S.CFG.tab7=3;console.log('regras antigas (+4, d10+3) Tudo junto',JSON.stringify(S.stats(()=>S.runBoss(P['Tudo junto'],S.mk),30000)));
