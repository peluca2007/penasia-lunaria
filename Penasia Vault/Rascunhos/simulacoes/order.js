const S=require('./sim.js');Object.assign(S.CFG,{zeroBonus:3,tab7:2,capUp:2,apM:2,Q:1,fintaOwn:1,fintaKeep:1});
S.mk.boss.p2.R=3;S.mk.boss.p2.fmax=5;
const b={roda:true,respira:true};
const P={'Lê a roda':b,'Tudo junto':{...b,finta:true,aposta:'smart',imp:true}};
for(const ld of [0,1]){S.CFG.lastDef=ld;console.log(ld?'DEFENSOR ESCOLHE DEPOIS (r2_classes)':'GUARDA NO FIM DO TURNO (r2_combate)');
for(const [k,p] of Object.entries(P)) console.log('  ',k.padEnd(12),JSON.stringify(S.stats(()=>S.runBoss(p,S.mk),20000)));}
// taxa de ataques em que o atacante domina
