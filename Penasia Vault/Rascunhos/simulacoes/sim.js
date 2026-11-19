// Simulador de combate Penasia v2 (zonas abstratas, Guarda, Ímpeto, chefe 2 fases)
const W = ['Ira', 'Lux', 'Preg', 'Gan', 'Inv', 'Gula'];
const dom = (a, b) => { if (a === 'Org' || b === 'Org') return false; const d = (W.indexOf(b) - W.indexOf(a) + 6) % 6; return d === 1 || d === 2; };
const SZ = { 4: 0, 6: 1, 8: 2, 10: 3, 12: 4 };
const r = n => 1 + Math.floor(Math.random() * n);
const roll = i => i < 0 ? 0 : i >= 5 ? Math.max(r(12), r(12)) : r([4, 6, 8, 10, 12][i]);
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

let CFG = { zeroBonus: 4, tab7: 2, capUp: 2 };

function pj(name, d, atk, guards, o) {
  const fm = { 4: 3, 6: 4, 8: 5, 10: 6, 12: 7 }[d.Gula];
  return Object.assign({ name, d, atk, guards, guard: guards[0], fmax: fm, fol: fm, leve: 0, grave: 0, down: false,
    imp: 1, bleed: 0, caido: false, exposto: false, penal: 0, respirou: false, contact: true, prot: 1, ap: 0, dmg: 2,
    esqPen: 0, quedas: 0, isPJ: true }, o);
}

function sideIdx(c, P, isAtk) {
  let i = SZ[c.d[P]];
  return i;
}

// resolve ataque; retorna {hit, m}
function attack(A, D, P, o = {}) {
  let ab = 0, db = 0;
  if (CFG.lastDef && D.guards && !D.fintado) { let bg=D.guard,bv=-99; for (const G of D.guards){ const v=SZ[D.d[G]]-(G==='Preg'?D.esqPen:0)+(dom(G,P)?1:0)-(dom(P,G)?1:0); if(v>bv){bv=v;bg=G;} } D.guard=bg; }
  if (dom(P, D.guard)) ab++;
  if (A.orgDesafio && P === 'Org' && D.desafiado) ab++;
  if (A.grave > 0) ab--;
  if (A.penal) ab -= A.penal;
  if (D.caido && o.melee !== false) ab++;
  if (o.cerco) ab++;
  if (o.quick) ab--;
  if (o.aposta) ab -= o.aposta;
  ab = clamp(ab, -3, CFG.capUp);
  if (dom(D.guard, P)) db++;
  if (D.grave > 0) db--;
  if (D.exposto || D.executado) db--;
  if (D.guard === 'Preg') db -= D.esqPen;
  db = clamp(db, -3, CFG.capUp);
  const a = roll(SZ[A.d[P]] + ab), d = roll(SZ[D.d[D.guard]] + db);
  if (a === 0 || a < d) {
    // defesa bem-sucedida
    if (D.guard === 'Gula' && !CFG.aguentarFree) D.fol = Math.max(0, D.fol - 1);
    if (D.isPJ) D.imp = Math.min(3, D.imp + 1);
    if (o.aposta) A.exposto = true;
    return { hit: false };
  }
  let m = a - d - Math.max(0, D.prot - A.ap) + (D.fol === 0 ? CFG.zeroBonus : 0) + (CFG.apM||3) * (o.aposta || 0);
  applyHit(A, D, m, o);
  return { hit: true, m };
}

function addLeve(D) {
  if (D.boss) { D.R -= 1; return; }
  if (D.leve < (D.leveCap ?? 2)) { D.leve++; D.fmax--; D.fol = Math.min(D.fol, D.fmax); } else addGrave(D);
}
function addGrave(D) {
  if (D.boss) { D.R -= 2; return; }
  if (D.grave < 1) D.grave = 1; else knock(D);
}
function knock(D) { if (!D.down) { D.down = true; D.quedas++; } }

function applyHit(A, D, m, o) {
  if (m < 0) return;
  if (D.bando) { D.n -= m < 4 ? 1 : m < 7 ? 2 : 3; if (D.n <= 0) { D.n = 0; D.down = true; } return; }
  if (m <= 3) { D.fol = Math.max(0, D.fol - (A.dmg)); return; }
  const graveFull = D.grave >= 1;
  let t;
  if (m <= 6) { addLeve(D); t = r(10); } else { addGrave(D); t = r(10) + CFG.tab7; }
  if (D.isPJ) D.imp = Math.min(3, D.imp + 1);
  tabela(D, t, graveFull);
}
function tabela(D, t, graveFull) {
  if (t === 1) D.fol = Math.max(0, D.fol - 1);
  else if (t === 2) D.bleed += 1;
  else if (t === 3) D.caido = true;
  else if (t === 4) D.penal = 1;
  else if (t === 5) D.fol = Math.max(0, D.fol - 2);
  else if (t === 6) { D.fol = Math.max(0, D.fol - 2); D.bleed += 1; }
  else if (t <= 9) { addLeve(D); D.fol = Math.max(0, D.fol - 1); }
  else { // 10-12 lesão
    D.penal = 1;
    if (D.boss) { D.R -= 1; if (D.phase === 2) D.executado = true; }
    else if (graveFull && t >= (CFG.t13 || 99)) knock(D);
    else if (graveFull) knock(D);
  }
}

// ---------- chefe ----------
function makeBoss(spec) {
  const b = Object.assign({ boss: true, name: 'Chefe', phase: 1, guard: 'Gula', caido: false, exposto: false, penal: 0,
    bleed: 0, grave: 0, executado: false, ap: 1, dmg: 3, prot: 1, esqPen: 0 }, spec.p1);
  b.spec = spec; b.R = spec.p1.R; b.fol = b.fmax;
  return b;
}
function bossPhase2(b) {
  const s = b.spec.p2;
  Object.assign(b, s); b.phase = 2; b.R = s.R; b.fol = b.fmax; b.caido = false; b.bleed = 0; b.penal = 0;
}

function bestAtk(A, D) { // escolhe Pecado de ataque com maior vantagem
  let best = null, bv = -99;
  for (const P of A.atk) {
    let v = SZ[A.d[P]] + (dom(P, D.guard) ? 1 : 0) - (SZ[D.d[D.guard]] + (dom(D.guard, P) ? 1 : 0));
    if (v > bv) { bv = v; best = P; }
  }
  return { P: best, adv: bv };
}
function bestGuard(D, atkSet, attackerDice) { // minimax
  let best = D.guards[0], bv = -99;
  for (const G of D.guards) {
    let worst = 99;
    for (const P of atkSet) {
      const v = SZ[D.d[G]] - (G === 'Preg' ? D.esqPen : 0) + (dom(G, P) ? 1 : 0) - (SZ[attackerDice[P]] + (dom(P, G) ? 1 : 0));
      worst = Math.min(worst, v);
    }
    if (worst > bv) { bv = worst; best = G; }
  }
  return best;
}

function runBoss(pol, mk) {
  const team = mk.team();
  const boss = makeBoss(mk.boss);
  const alive = () => team.filter(p => !p.down);
  // iniciativa por blocos
  const fast = [], slow = [];
  for (const p of team) (roll(SZ[p.d.Inv]) >= roll(SZ[boss.d.Inv]) ? fast : slow).push(p);
  const order = x => x.sort((a, b) => (a.ord || 0) - (b.ord || 0));
  order(fast); order(slow);
  if (pol.roda) for (const p of team) p.guard = bestGuard(p, boss.atk, boss.d); else for (const p of team) p.guard = p.guards.reduce((a, g) => SZ[p.d[g]] > SZ[p.d[a]] ? g : a, p.guards[0]);
  boss.guard = bestGuard(boss, [...new Set(team.flatMap(p => p.atk))], team[0].d);
  let rounds = 0, quick = 0;
  const bossTurn = () => {
    if (boss.dead) return;
    boss.caido = false; const keep = boss.fintado>0; if (boss.fintado) boss.fintado--;
    if (boss.bleed) { boss.fol = Math.max(0, boss.fol - boss.bleed); }
    if (boss.fol === 0 && pol.bossRespira !== false) { boss.fol = Math.ceil(boss.fmax / 2); if(!keep) boss.guard = bestGuard(boss, [...new Set(team.flatMap(p => p.atk))], team[0].d); return; }
    const n = boss.phase === 2 ? boss.mainAtk2 : 1;
    const used = new Set();
    for (let k = 0; k < n; k++) {
      const tg = alive().filter(p => !used.has(p));
      if (!tg.length) break;
      let best = null, bv = -99, bp = null;
      for (const p of tg) { const { P, adv } = bestAtk(boss, p); const v = adv + (p.leve + p.grave * 2) * 0.3; if (v > bv) { bv = v; best = p; bp = P; } }
      used.add(best);
      if (!best.contact) best.contact = true; // investida até o atirador
      bossStrike(best, bp, {});
    }
    if(!keep) boss.guard = bestGuard(boss, [...new Set(team.flatMap(p => p.atk))], team[0].d);
  };
  const bossStrike = (tgt, P, o) => {
    // proteger
    if (pol.imp) {
      const prot = alive().find(p => p.protector && p !== tgt && p.contact && p.imp >= 1 && p.grave === 0 && (tgt.grave >= 1 || tgt.leve >= 2));
      if (prot) { prot.imp--; tgt = prot; P = bestAtk(boss, prot).P; }
    }
    attack(boss, tgt, P, o);
  };
  const pjTurn = p => {
    if (p.down || boss.dead) return;
    p.caido = false; p.exposto = false;
    if (p.bleed) p.fol = Math.max(0, p.fol - p.bleed);
    if (p.bleed >= 2) { p.bleed = 0; endTurn(p); return; }
    if (pol.respira && p.fol === 0 && !p.respirou) { p.respirou = true; p.fol = Math.min(p.fmax, 2); endTurn(p); return; }
    // finta
    if (pol.finta && p.finter && !boss.fintado) {
      const ally = alive().find(q => q.ord > p.ord && !q.finter);
      if (ally) {
        const P = p.d.Inv >= p.d.Lux ? 'Inv' : 'Lux';
        const a = roll(SZ[p.d[P]] + (dom(P, boss.guard) ? 1 : 0)), d = roll(SZ[boss.d[boss.guard]] + (dom(boss.guard, P) ? 1 : 0));
        if (a >= d) {
          const want0 = (CFG.fintaOwn? boss.guards : W).filter(g => dom(ally.atk[0], g)); const want = want0.length? want0 : (CFG.fintaOwn? boss.guards: W);
          boss.guard = want.reduce((x, g) => SZ[boss.d[g]] < SZ[boss.d[x]] ? g : x, want[0]);
          if (a - d >= 4) boss.exposto = true; boss.fintado = CFG.fintaKeep||0;
        } else p.imp = p.imp; // nada
        endTurn(p); return;
      }
    }
    const { P, adv } = pol.roda ? bestAtk(p, boss) : { P: p.atk[0], adv: 0 };
    let aposta = 0;
    if (pol.aposta === 'sempre') aposta = 1; else if (pol.aposta==='brasa2') aposta = p.dmg===3?2:0; else if (pol.aposta==='brasa1') aposta = p.dmg===3?1:0;
    else if (pol.aposta === 'smart' && (adv >= 1 || boss.fol === 0 || boss.exposto)) aposta = 1;
    const meleeCount = alive().filter(q => q.contact && q.melee).length;
    const res = attack(p, boss, P, { cerco: p.melee && meleeCount >= 2, aposta, melee: p.melee });
    if (pol.imp && p.derruba && res.hit && p.imp >= 1) { p.imp--; boss.caido = true; }
    endTurn(p);
  };
  const endTurn = p => { if (pol.roda) p.guard = bestGuard(p, boss.atk, boss.d); if (pol.fixGuard && p.guards.includes(pol.fixGuard)) p.guard = pol.fixGuard; checkBoss(); };
  const checkBoss = () => {
    if (boss.R <= 0) { if (boss.phase === 1) bossPhase2(boss); else boss.dead = true; }
  };
  const afterPJ = p => {
    if (boss.dead || p.down || quick <= 0 || boss.fol === 0) return;
    if (!p.contact) return;
    quick--;
    const { P } = bestAtk(boss, p);
    bossStrike(p, P, { quick: true });
  };
  while (rounds < 30) {
    rounds++; quick = CFG.Q != null ? CFG.Q : team.length - 1; boss.exposto = boss.executado;
    for (const p of fast) { pjTurn(p); afterPJ(p); if (boss.dead) break; }
    if (boss.dead) break;
    bossTurn();
    if (!alive().length) break;
    for (const p of slow) { pjTurn(p); afterPJ(p); if (boss.dead) break; }
    if (boss.dead || !alive().length) break;
  }
  return { win: !!boss.dead, rounds, quedas: team.reduce((s, p) => s + p.quedas, 0), phase: boss.phase };
}

function stats(fn, N = 20000) {
  let w = 0, rs = [], q = 0, q1 = 0, tpk = 0;
  for (let i = 0; i < N; i++) {
    const o = fn(); if (o.win) w++; rs.push(o.rounds); q += o.quedas; if (o.quedas >= 1) q1++; if (!o.win) tpk++;
  }
  rs.sort((a, b) => a - b);
  return { vitoria: (100 * w / N).toFixed(1) + '%', rodadas: (rs.reduce((a, b) => a + b, 0) / N).toFixed(2), p10: rs[Math.floor(N * .1)], p50: rs[Math.floor(N * .5)], p90: rs[Math.floor(N * .9)],
    quedasMedia: (q / N).toFixed(2), comQueda: (100 * q1 / N).toFixed(1) + '%', derrota: (100 * tpk / N).toFixed(1) + '%' };
}

// ---------- grupo e chefe de exemplo ----------
const mk = {
  team: () => [
    pj('Brasa', { Ira: 12, Lux: 6, Gula: 10, Preg: 6, Inv: 8, Gan: 4, Org: 8 }, ['Ira', 'Gula'], ['Ira', 'Gula', 'Preg'],
      { dmg: 3, ap: 1, prot: 2, esqPen: 1, melee: true, derruba: true, protector: true, ord: 2 }),
    pj('Vesna', { Ira: 6, Lux: 10, Gula: 6, Preg: 8, Inv: 12, Gan: 8, Org: 4 }, ['Inv', 'Lux'], ['Preg', 'Ira', 'Gula', 'Inv'],
      { dmg: 1, prot: 1, melee: true, finter: true, ord: 1 }),
    pj('Oto', { Ira: 6, Lux: 4, Gula: 8, Preg: 12, Inv: 10, Gan: 8, Org: 6 }, ['Preg', 'Inv'], ['Preg', 'Ira', 'Gula', 'Gan'],
      { dmg: 2, prot: 1, contact: false, melee: false, ord: 3 }),
  ],
  boss: {
    p1: { name: 'Açougueira', d: { Ira: 12, Lux: 4, Gula: 10, Preg: 6, Inv: 8, Gan: 6, Org: 8 }, atk: ['Ira', 'Gula'], guards: ['Ira', 'Gula', 'Preg'], fmax: 8, R: 4, prot: 1 },
    p2: { d: { Ira: 10, Lux: 4, Gula: 8, Preg: 6, Inv: 12, Gan: 10, Org: 8 }, atk: ['Inv', 'Gan'], guards: ['Inv', 'Gan', 'Gula'], fmax: 6, R: 4, mainAtk2: 2, prot: 1 },
  },
};

module.exports = { runBoss, stats, mk, CFG, attack, pj, dom, SZ, roll, makeBoss, bestGuard, bestAtk };

if (require.main === module) {
  const P = {
    'S0 ingênuo (sem roda)': { roda: false, respira: true },
    'S1 roda (Guarda+ataque certos)': { roda: true, respira: true },
    'S2 roda+finta': { roda: true, respira: true, finta: true },
    'S3 roda+Tudo-ou-Nada sempre': { roda: true, respira: true, aposta: 'sempre' },
    'S4 roda+Tudo-ou-Nada esperto': { roda: true, respira: true, aposta: 'smart' },
    'S5 roda+Ímpeto (derrubar/proteger)': { roda: true, respira: true, imp: true },
    'S6 tudo esperto': { roda: true, respira: true, finta: true, aposta: 'smart', imp: true },
  };
  for (const [k, pol] of Object.entries(P)) console.log(k.padEnd(38), JSON.stringify(stats(() => runBoss(pol, mk))));
}
