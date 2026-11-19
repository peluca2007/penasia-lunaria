process.env.LC=2;process.env.GC=1;process.env.W=2;
const {duel,setSeed}=require('./sim5.js');
const b={Ira:10,Gula:10,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4};
const arm={p:1,pp:0};
for(let s=1;s<400;s++){setSeed(s);const r=duel(b,b,arm,arm,true);
 if(r.r>=4&&r.r<=5&&r.log.some(l=>l.includes('tabela'))&&r.log.some(l=>l.includes('falha'))){console.log('seed',s,'rodadas',r.r);console.log(r.log.join('\n'));break}}
let rs=[];const N=50000;
for (const [n,bb] of Object.entries({Bruto:{Ira:12,Gula:10,Preguica:8,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4},Equilibrado:b,Esquivo:{Ira:10,Gula:8,Preguica:12,Inveja:8,Luxuria:6,Ganancia:6,Orgulho:4}}))
for(const k of [[0,0],[1,0],[2,1],[3,2]]){const a={p:k[0],pp:k[1]};let t=0,arr=[];for(let i=0;i<N;i++){const x=duel(bb,bb,a,a).r;t+=x;arr.push(x)}arr.sort((p,q)=>p-q);console.log(n,'P'+k[0],(t/N).toFixed(1),'med',arr[N>>1],'p10',arr[N*.1|0],'p90',arr[N*.9|0])}
