// Gera public/roda.svg e public/mapa.svg. Rode: node scripts/figuras.mjs
import { writeFileSync } from 'node:fs';
const C = { Ira:'#d14a31', 'Luxúria':'#c63d8c', 'Preguiça':'#5b7ccc', 'Ganância':'#cf8f26', Inveja:'#3f9e6b', Gula:'#a86a36', Orgulho:'#d7b44a' };
const W = ['Ira','Luxúria','Preguiça','Ganância','Inveja','Gula'];
const BG = '#f3eee6', INK = '#211c1a', MUT = '#7a6f68';
const font = `font-family="Georgia,serif"`;

// Roda
{
  const cx=300, cy=300, R=200, r=52;
  const P = W.map((_,i)=>{const a=(-90+60*i)*Math.PI/180;return [cx+R*Math.cos(a), cy+R*Math.sin(a)];});
  const sh=(a,b,x,y)=>{const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy);return [a[0]+dx/L*x,a[1]+dy/L*x,b[0]-dx/L*y,b[1]-dy/L*y].map(v=>v.toFixed(1));};
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><rect width="600" height="600" rx="12" fill="${BG}"/><defs><marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="${MUT}"/></marker></defs>`;
  for(let i=0;i<6;i++) for(const k of [1,2]){const c=sh(P[i],P[(i+k)%6],r+4,r+10);s+=`<line x1="${c[0]}" y1="${c[1]}" x2="${c[2]}" y2="${c[3]}" stroke="${MUT}" stroke-width="${k===1?3:1.5}" marker-end="url(#a)"/>`;}
  W.forEach((n,i)=>{s+=`<circle cx="${P[i][0].toFixed(1)}" cy="${P[i][1].toFixed(1)}" r="${r}" fill="#fff" stroke="${C[n]}" stroke-width="6"/><text x="${P[i][0].toFixed(1)}" y="${(P[i][1]+6).toFixed(1)}" text-anchor="middle" font-size="19" font-weight="700" fill="${INK}" ${font}>${n}</text>`;});
  s+=`<circle cx="300" cy="300" r="58" fill="#fff" stroke="${C.Orgulho}" stroke-width="6"/><text x="300" y="306" text-anchor="middle" font-size="19" font-weight="700" fill="${INK}" ${font}>Orgulho</text></svg>`;
  writeFileSync('public/roda.svg', s);
}
// Mapa: o Anel. Costa por ruído com semente fixa (o desenho é sempre o mesmo).
{
  const VW = 800, VH = 820, cx = 420, cy = 440;
  // semente fixa: 1019, o ano em que Altiva acordou
  let seed = 1019;
  const rnd = () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const TAU = Math.PI * 2, rad = d => d * Math.PI / 180;
  const f1 = v => (Math.round(v * 10) / 10).toString();
  // ruído periódico: soma de senos com fases sorteadas (fecha a volta sem emenda)
  const ruido = (k0, k1, pot) => { const c = []; for (let k = k0; k <= k1; k++) c.push([k, 1 / Math.pow(k, pot), rnd() * TAU]); const n = Math.sqrt(c.reduce((s, x) => s + x[1] * x[1] / 2, 0)); return t => c.reduce((s, [k, a, p]) => s + a * Math.sin(k * t + p), 0) / n; };
  const P = (r, a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)]; // a: radianos, 0 = norte, horário
  const caminho = (pts, fecha = true) => 'M' + pts.map(p => f1(p[0]) + ',' + f1(p[1])).join('L') + (fecha ? 'Z' : '');
  const suave = (pts) => { // curva suave fechada (Catmull-Rom → Bézier)
    const n = pts.length; let d = `M${f1(pts[0][0])},${f1(pts[0][1])}`;
    for (let i = 0; i < n; i++) { const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)},${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)},${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])},${f1(p2[1])}`; }
    return d + 'Z';
  };
  const gauss = (a, a0, w) => { let d = Math.atan2(Math.sin(a - a0), Math.cos(a - a0)); return Math.exp(-(d * d) / (2 * w * w)); };

  // --- costas do anel
  const nO1 = ruido(2, 9, 0.9), nO2 = ruido(10, 70, 1.25), nI1 = ruido(2, 8, 0.9), nI2 = ruido(9, 55, 1.25);
  const Ro = a => 268 + 15 * nO1(a) + 6 * nO2(a) + 30 * gauss(a, rad(78), 0.07) + 26 * gauss(a, rad(228), 0.06) - 34 * gauss(a, rad(28), 0.045) - 26 * gauss(a, rad(158), 0.05) + 24 * gauss(a, rad(322), 0.05) - 22 * gauss(a, rad(268), 0.04);
  const Ri = a => 132 + 11 * nI1(a) + 4 * nI2(a) - 18 * gauss(a, rad(200), 0.07) + 16 * gauss(a, rad(345), 0.06) - 14 * gauss(a, rad(95), 0.05);
  const N = 540, A = i => i / N * TAU;
  const costaO = [], costaI = [];
  for (let i = 0; i < N; i++) { costaO.push(P(Ro(A(i)), A(i))); costaI.push(P(Ri(A(i)), A(i))); }
  // ilhas: blobs de ruído
  const ilha = (x, y, r, irr = 0.28, pts = 48) => { const n1 = ruido(2, 7, 0.8), n2 = ruido(8, 20, 1.2), rot = rnd() * TAU, ax = 0.6 + rnd() * 0.5;
    const out = []; for (let i = 0; i < pts; i++) { const t = i / pts * TAU, rr = r * (1 + irr * n1(t) * 0.6 + irr * 0.25 * n2(t)); const ex = rr * Math.cos(t), ey = rr * Math.sin(t) * ax; out.push([x + ex * Math.cos(rot) - ey * Math.sin(rot), y + ex * Math.sin(rot) + ey * Math.cos(rot)]); } return out; };
  const ilhasDef = [[78, 312, 12], [70, 318, 6], [94, 292, 4], [34, 338, 9], [107, 300, 7], [-12, 302, 5], [142, 312, 6], [205, 300, 9], [212, 298, 4], [252, 305, 11], [262, 308, 5], [300, 314, 7], [316, 304, 5], [190, 298, 4], [120, 300, 5]]
    .map(([deg, r, s]) => { const a = rad(deg); return ilha(...P(r, a), s); });
  const ilhasMar = [[40, 104, 6], [150, 98, 7], [255, 104, 5], [300, 102, 4]].map(([deg, r, s]) => ilha(...P(r, rad(deg)), s));
  const terraD = suave(costaO) + suave(costaI) + [...ilhasDef, ...ilhasMar].map(suave).join('');
  const naTerra = (x, y, m = 0) => { const a = Math.atan2(x - cx, -(y - cy)), r = Math.hypot(x - cx, y - cy); return r > Ri(a) + m && r < Ro(a) - m; };

  // --- fronteiras entre regiões (ângulo i*60-30), tortas
  const fronteira = (deg) => { const n = ruido(1, 6, 1), pts = []; for (let r = 95; r <= 330; r += 7) pts.push(P(r, rad(deg + 5.5 * n(r / 40)))); return pts; };
  const fr = [0, 1, 2, 3, 4, 5].map(i => fronteira(i * 60 - 30));
  const cunha = i => { const a0 = rad(i * 60 - 30), a1 = rad(i * 60 + 30), arco = []; for (let k = 0; k <= 12; k++) arco.push(P(380, a0 + (a1 - a0) * k / 12)); return caminho([[cx, cy], ...fr[i], ...arco, ...[...fr[(i + 1) % 6]].reverse()]); };

  // --- regiões, na ordem da Roda (começa no norte, sentido horário)
  const COR = { Ira: '#c2402a', 'Luxúria': '#b52f7f', 'Preguiça': '#4a6cc0', 'Ganância': '#b97a14', Inveja: '#2f8a5c', Gula: '#8f5a2a', Orgulho: '#a8821a' };
  const regs = [['Marca Rubra', 'Ira'], ['Costa Carmim', 'Luxúria'], ['Vagar', 'Preguiça'], ['Caliburna', 'Ganância'], ['Silvara', 'Inveja'], ['Terras Sem Lei', 'Gula']];
  const TINTA = '#2b2119', PAPEL = '#efe2c2', MAR = '#d3d6c3', MAR2 = '#c3c9b3', SERIF = `font-family="'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif"`;

  // --- rio que corta o anel (em Vagar, o rio preguiçoso)
  const rio = (() => { const n = ruido(1, 8, 0.7), pts = [], a0 = rad(126); for (let r = Ri(a0) - 6; r <= Ro(a0) + 8; r += 4) pts.push(P(r, a0 + rad(6) * n(r / 48))); return pts; })();
  const rioD = 'M' + rio.map(p => f1(p[0]) + ',' + f1(p[1])).join('L');
  const pertoRio = (x, y) => rio.some(p => Math.hypot(p[0] - x, p[1] - y) < 13);

  // --- símbolos de relevo
  const usados = [];
  const livre = (x, y, d) => !usados.some(([ux, uy, ud]) => Math.hypot(ux - x, uy - y) < Math.max(d, ud));
  const zonasTexto = []; // [x,y,raio] onde não desenhar
  const semTexto = (x, y) => !zonasTexto.some(([zx, zy, zr]) => Math.hypot(zx - x, zy - y) < zr);
  const espalha = (i, quant, tam, rMin, rMax, margem = 16) => { const out = []; let tent = 0;
    while (out.length < quant && tent++ < quant * 60) { const a = rad(i * 60 - 26 + 52 * rnd()), aa = a; const r0 = Ri(aa) + margem, r1 = Ro(aa) - margem; const r = r0 + (r1 - r0) * (rMin + (rMax - rMin) * rnd()); const [x, y] = P(r, aa);
      if (naTerra(x, y, margem) && !pertoRio(x, y) && semTexto(x, y) && livre(x, y, tam)) { usados.push([x, y, tam]); out.push([x, y]); } } return out; };
  const usa = (id, x, y, s = 1) => `<use href="#${id}" transform="translate(${f1(x)},${f1(y)})${s !== 1 ? ` scale(${s.toFixed(2)})` : ''}"/>`;

  // rótulos (posição das regiões): nome curvo em r=LR
  const LR = 210;
  const labelArc = (i, r) => { const c = i * 60, baixo = c > 90 && c < 270, a0 = rad(c - 44), a1 = rad(c + 44), p0 = P(r, baixo ? a1 : a0), p1 = P(r, baixo ? a0 : a1);
    return `M${f1(p0[0])},${f1(p0[1])}A${r},${r} 0 0,${baixo ? 0 : 1} ${f1(p1[0])},${f1(p1[1])}`; };
  regs.forEach((_, i) => { for (let d = -22; d <= 22; d += 5.5) { const c = i * 60, baixo = c > 90 && c < 270; zonasTexto.push([...P(baixo ? LR - 10 : LR + 2, rad(c + d)), 26]); zonasTexto.push([...P(baixo ? LR - 32 : LR - 22, rad(c + d * 0.6)), 19]); } });
  // cidades
  const cidades = [
    { n: 'Fornalha', a: 26, r: 0.97, t: 'forja', cima: 1 },
    { n: 'Carmesina', a: 72, r: 0.86, t: 'cidade' },
    { n: 'Bocejo', a: 132, r: 0.72, t: 'vila' },
    { n: 'Excalibur?', a: -1, r: 0, t: 'nada' },
    { n: 'Monte Cinza', a: 286, r: 0.78, t: 'vulcao' },
    { n: 'Mão Aberta', a: 318, r: 0.22, t: 'cidade' },
    { n: 'Orla de Vidro', a: 18, r: 0.04, t: 'vila' },
  ].filter(c => c.t !== 'nada').map(c => { const a = rad(c.a), r = Ri(a) + 16 + (Ro(a) - Ri(a) - 32) * c.r; const [x, y] = P(r, a); usados.push([x, y, c.t === 'vulcao' ? 34 : 22]); return { ...c, x, y }; });

  let rel = '';
  const relevo = { 0: [['mont', 26, 15, 0, 1, 1.1]], 1: [['colina', 18, 15, 0, 1, 1]], 2: [['brejo', 22, 14, 0, 1, 1], ['colina', 6, 15, 0, 1, 0.9]], 3: [['colina', 14, 16, 0, 1, 1.05], ['campo', 12, 15, 0, 1, 1]], 4: [['arvore', 95, 9, 0, 1, 1]], 5: [['mont', 10, 16, 0.5, 1, 0.95], ['seco', 14, 14, 0, 1, 1], ['arvoreM', 6, 11, 0, 0.5, 1]] };
  const simbolos = [];
  for (const [i, lista] of Object.entries(relevo)) for (const [id, q, tam, a, b, s] of lista) for (const [x, y] of espalha(+i, q, tam, a, b)) simbolos.push([y, usa(id, x, y, s * (0.85 + 0.3 * rnd()))]);
  simbolos.sort((p, q) => p[0] - q[0]); rel = simbolos.map(s => s[1]).join('');

  // --- textura do mar: tracinhos de onda
  let ondas = '';
  for (let k = 0, n = 0; k < 900 && n < 120; k++) { const x = 40 + rnd() * (VW - 80), y = 40 + rnd() * (VH - 80); const a = Math.atan2(x - cx, -(y - cy)), r = Math.hypot(x - cx, y - cy);
    const noMar = r > Ro(a) + 30 || (r < Ri(a) - 22 && r > 70); if (!noMar || x < 120 || (y < 130 && x > 230 && x < 610) || (x > 640 && y > 640) || (x < 300 && y > 690) || (x > 650 && y < 170)) continue;
    if ([...ilhasDef, ...ilhasMar].some(il => Math.hypot(il[0][0] - x, il[0][1] - y) < 26)) continue;
    ondas += `M${f1(x)},${f1(y)}q3,-3 6,0t6,0`; n++; }

  // --- o Fragmento (lua caída) e a cratera
  const frag = (() => { const pts = [], n = 11; for (let i = 0; i < n; i++) { const t = i / n * TAU + 0.2, r = 26 + 12 * rnd() * (i % 2 ? 1 : 0.4); pts.push([cx + 4 + r * Math.cos(t) * 1.25, cy + 2 + r * Math.sin(t)]); } return pts; })();
  const gelo = ilha(cx + 4, cy + 2, 50, 0.22, 40);

  // --- Ossário e a Mancha (oeste, na borda)
  const oss = ilha(58, 452, 44, 0.3, 50).map(([x, y]) => [58 + (x - 58) * 0.62, 452 + (y - 452) * 1.75]);
  const mancha = (() => { const n1 = ruido(2, 9, 0.7), n2 = ruido(10, 40, 1.1), pts = []; for (let i = 0; i < 160; i++) { const t = i / 160 * TAU; const r = 120 + 34 * n1(t) + 12 * n2(t); pts.push([-38 + r * Math.cos(t) * 0.85, 448 + r * Math.sin(t) * 1.55]); } return pts; })();
  let respingos = ''; for (let k = 0; k < 16; k++) { const t = rad(-70 + 140 * rnd()), d = 105 + 60 * rnd(); const x = -38 + d * Math.cos(t) * 0.9, y = 448 + d * Math.sin(t) * 1.5; respingos += suave(ilha(x, y, 1.5 + 5 * rnd() * rnd(), 0.4, 12)); }

  // --- rosa dos ventos
  const rosa = (x, y, R) => { let s = `<g transform="translate(${x},${y})"><circle r="${R * 0.62}" fill="none" stroke="${TINTA}" stroke-width="1"/><circle r="${R * 0.56}" fill="none" stroke="${TINTA}" stroke-width=".5"/>`;
    for (let k = 0; k < 16; k++) { const a = k * 22.5, L = k % 4 === 0 ? R : k % 2 === 0 ? R * 0.68 : R * 0.45, w = k % 4 === 0 ? R * 0.13 : R * 0.09;
      s += `<g transform="rotate(${a})"><path d="M0,${-L}L${w},${-w}L0,0Z" fill="${k % 4 === 0 ? TINTA : '#7d6a52'}"/><path d="M0,${-L}L${-w},${-w}L0,0Z" fill="${PAPEL}" stroke="${TINTA}" stroke-width=".7"/></g>`; }
    s += `<circle r="${R * 0.07}" fill="${COR.Orgulho}" stroke="${TINTA}" stroke-width=".8"/><text y="${-R - 6}" text-anchor="middle" font-size="19" font-weight="700" fill="${TINTA}" ${SERIF}>N</text></g>`; return s; };

  // --- moldura com escala quadriculada
  const M = 12, M2 = 24;
  let regua = ''; for (let x = M2, k = 0; x < VW - M2 - 1; x += 40, k++) if (k % 2 === 0) regua += `M${x},${M + 0.8}h40v${M2 - M - 1.6}h-40Z M${x},${VH - M2 + 0.8}h40v${M2 - M - 1.6}h-40Z`;
  for (let y = M2, k = 0; y < VH - M2 - 1; y += 40, k++) if (k % 2 === 0) regua += `M${M + 0.8},${y}v40h${M2 - M - 1.6}v-40Z M${VW - M2 + 0.8},${y}v40h${M2 - M - 1.6}v-40Z`;

  const halo = `stroke="${PAPEL}" stroke-width="4" stroke-linejoin="round" paint-order="stroke"`;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${VW} ${VH}" role="img" aria-label="Mapa do Anel">`;
  s += `<defs>
<filter id="papel" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".035 .05" numOctaves="4" seed="7"/><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .3  0 0 0 0 .16  0 0 0 -1.6 1.05"/></filter>
<filter id="roido" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="3" seed="3"/><feDisplacementMap in="SourceGraphic" scale="16"/></filter>
<radialGradient id="vinheta" cx="50%" cy="52%" r="72%"><stop offset=".62" stop-color="#5a3e1e" stop-opacity="0"/><stop offset="1" stop-color="#5a3e1e" stop-opacity=".38"/></radialGradient>
<radialGradient id="manchaG" cx="0" cy="${448 / VH}" r=".3" gradientTransform="scale(1,1)"><stop offset="0" stop-color="#0d0a0c"/><stop offset=".7" stop-color="#1c1418"/><stop offset="1" stop-color="#2a1e22"/></radialGradient>
<linearGradient id="someG" x1="0" x2="1"><stop offset=".08" stop-color="#000"/><stop offset=".5" stop-color="#fff"/></linearGradient>
<mask id="some" maskUnits="userSpaceOnUse" x="0" y="0" width="${VW}" height="${VH}"><rect x="0" y="300" width="150" height="320" fill="url(#someG)" filter="url(#roido)"/></mask>
<radialGradient id="geloG"><stop offset=".55" stop-color="#ffffff" stop-opacity=".95"/><stop offset="1" stop-color="#e6eef2" stop-opacity="0"/></radialGradient>
<path id="terra" d="${terraD}" fill-rule="evenodd"/>
<clipPath id="cTerra"><use href="#terra" clip-rule="evenodd"/></clipPath>
<clipPath id="cQuadro"><rect x="${M2}" y="${M2}" width="${VW - 2 * M2}" height="${VH - 2 * M2}"/></clipPath>
${regs.map((_, i) => `<clipPath id="cR${i}"><path d="${cunha(i)}"/></clipPath>`).join('')}
<g id="mont"><path d="M-13,0C-8,-5 -4,-12 0,-19C3,-13 6,-7 13,0Z" fill="${PAPEL}"/><path d="M0,-19C3,-13 6,-7 13,0L4,0C3,-6 2,-12 0,-19Z" fill="#b59a72"/><path d="M-13,0C-8,-5 -4,-12 0,-19C3,-13 6,-7 13,0" fill="none" stroke="${TINTA}" stroke-width="1.3" stroke-linejoin="round"/><path d="M-6,-6l3,-4M2,-11l1,4" stroke="${TINTA}" stroke-width=".7"/></g>
<g id="colina"><path d="M-10,0C-6,-9 6,-9 10,0Z" fill="${PAPEL}"/><path d="M-10,0C-6,-9 6,-9 10,0" fill="none" stroke="${TINTA}" stroke-width="1.2"/><path d="M3,-5l2,4M6,-3l1.5,3" stroke="${TINTA}" stroke-width=".7"/></g>
<g id="arvore"><path d="M0,0v-4" stroke="${TINTA}" stroke-width="1.1"/><path d="M-4.6,-4C-6,-9 -2,-13 0,-13C2.5,-13 6,-9 4.6,-4Z" fill="#cfd2a4" stroke="${TINTA}" stroke-width="1"/><path d="M1.5,-10l2,4M0.5,-7l2,3" stroke="${TINTA}" stroke-width=".6"/></g>
<g id="arvoreM"><path d="M0,0v-6" stroke="${TINTA}" stroke-width="1"/><path d="M0,-6l-4,-4M0,-8l3,-4M-2,-8l-1,-3" stroke="${TINTA}" stroke-width=".8" fill="none"/></g>
<g id="brejo" stroke="${TINTA}" fill="none" stroke-width=".8"><path d="M-8,0h16M-4,3h8"/><path d="M0,0v-6M-2.5,0l-2,-5M2.5,0l2,-5"/></g>
<g id="campo" stroke="${TINTA}" fill="none" stroke-width=".7"><path d="M-9,-3h7M-9,0h7M-9,3h7M1,-3h8M1,0h8M1,3h8"/></g>
<g id="seco" stroke="${TINTA}" fill="none" stroke-width=".8"><path d="M-8,0l3,-4l3,4l3,-3l4,3M-3,-1v-3"/></g>
</defs>`;
  // fundo
  s += `<rect width="${VW}" height="${VH}" fill="${PAPEL}"/>`;
  s += `<g clip-path="url(#cQuadro)">`;
  s += `<rect width="${VW}" height="${VH}" fill="${MAR}"/>`;
  // linhas de rumo saindo da rosa dos ventos
  { const rx = 690, ry = 710; let d = ''; for (let k = 0; k < 16; k++) { const a = rad(k * 22.5); d += `M${rx},${ry}l${f1(1400 * Math.sin(a))},${f1(-1400 * Math.cos(a))}`; } s += `<path d="${d}" stroke="#8b8a70" stroke-width=".6" opacity=".55"/>`; }
  s += `<path d="${ondas}" fill="none" stroke="#6f7a6a" stroke-width="1" stroke-linecap="round" opacity=".75"/>`;
  // ondulações de costa (anéis concêntricos no mar)
  for (const [w, c] of [[44, '#b9c0a8'], [42, MAR], [30, '#a9b39a'], [28.4, MAR], [18, '#97a28a'], [16.4, MAR2], [9, '#6d7864'], [7.6, MAR2]]) s += `<use href="#terra" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round"/>`;
  // cratera do Mar da Queda: anéis
  for (const [r, o] of [[96, .5], [78, .4], [62, .32]]) s += `<path d="${suave(ilha(cx + 4, cy + 2, r, 0.08, 36))}" fill="none" stroke="#7d8a7a" stroke-width="1" stroke-dasharray="${r > 90 ? '5 4' : '2 4'}" opacity="${o}"/>`;
  // terra
  s += `<use href="#terra" fill="${PAPEL}"/>`;
  s += `<g clip-path="url(#cTerra)">`;
  regs.forEach(([, p], i) => { s += `<g clip-path="url(#cR${i})"><path d="${cunha(i)}" fill="${COR[p]}" fill-opacity=".13" stroke="${COR[p]}" stroke-opacity=".42" stroke-width="18"/></g>`; });
  s += `<use href="#terra" fill="none" stroke="#7a5e3c" stroke-width="12" stroke-dasharray=".9 2.4" opacity=".55"/>`;
  s += `<path d="${fr.map(p => caminho(p, false)).join('')}" fill="none" stroke="${TINTA}" stroke-width="1.3" stroke-dasharray="7 3 1.5 3" opacity=".8"/>`;
  s += `</g>`;
  s += `<use href="#terra" fill="none" stroke="${TINTA}" stroke-width="1.7" stroke-linejoin="round"/>`;
  // rio
  s += `<path d="${rioD}" fill="none" stroke="#4d5a4b" stroke-width="6" stroke-linecap="round"/><path d="${rioD}" fill="none" stroke="${MAR}" stroke-width="3.6" stroke-linecap="round"/>`;
  // relevo
  s += rel;
  // Fragmento e o gelo de Nívea
  s += `<path d="${suave(gelo)}" fill="url(#geloG)"/><path d="${suave(gelo)}" fill="none" stroke="#8fa3ad" stroke-width=".9" stroke-dasharray="3 3"/>`;
  s += `<path d="${caminho(frag)}" fill="#f7f4ea" stroke="${TINTA}" stroke-width="1.6" stroke-linejoin="round"/><path d="${caminho(frag)}" fill="none" stroke="${COR.Orgulho}" stroke-width="5" stroke-opacity=".45" stroke-linejoin="round" transform="translate(0,0)"/>`;
  s += `<path d="M${f1(frag[0][0])},${f1(frag[0][1])}L${cx + 4},${cy + 2}L${f1(frag[4][0])},${f1(frag[4][1])}M${cx + 4},${cy + 2}L${f1(frag[7][0])},${f1(frag[7][1])}" stroke="${TINTA}" stroke-width=".7" opacity=".6"/>`;
  s += `<path d="M${cx + 4},${cy - 11}l3,6 6,1 -5,4 1.5,6 -5.5,-3 -5.5,3 1.5,-6 -5,-4 6,-1z" fill="${COR.Orgulho}" stroke="${TINTA}" stroke-width=".8"/>`;
  // cidades
  for (const c of cidades) {
    if (c.t === 'vulcao') s += `<g transform="translate(${f1(c.x)},${f1(c.y)}) scale(1.35)"><path d="M-15,0C-9,-6 -6,-14 -4,-18H4C6,-14 9,-6 15,0Z" fill="#cdb48e" stroke="${TINTA}" stroke-width="1.1" stroke-linejoin="round"/><path d="M-4,-18Q0,-15 4,-18" fill="none" stroke="#a33b22" stroke-width="1.6"/><path d="M-1,-18c-6,-4 4,-7 -1,-12c-3,-3 3,-6 1,-9" fill="none" stroke="#6b6159" stroke-width="1.3" stroke-linecap="round" opacity=".8"/><path d="M4,-17l3,6M7,-10l2,4M10,-5l2,3" stroke="${TINTA}" stroke-width=".7"/></g>`;
    else if (c.t === 'forja') s += `<g transform="translate(${f1(c.x)},${f1(c.y)})"><path d="M-7,3h14l-2,-6h-3v-4h-4v4h-3Z" fill="${TINTA}"/><circle cx="0" cy="-1" r="1.6" fill="#e0553a"/></g>`;
    else s += `<circle cx="${f1(c.x)}" cy="${f1(c.y)}" r="${c.t === 'cidade' ? 5 : 3.6}" fill="${PAPEL}" stroke="${TINTA}" stroke-width="1.4"/>${c.t === 'cidade' ? `<circle cx="${f1(c.x)}" cy="${f1(c.y)}" r="2" fill="${TINTA}"/>` : ''}`;
  }
  // Ossário: some na Mancha
  s += `<g mask="url(#some)"><path d="${suave(oss)}" fill="none" stroke="#a9b39a" stroke-width="16"/><path d="${suave(oss)}" fill="${PAPEL}" stroke="${TINTA}" stroke-width="1.6"/>`;
  for (let k = 0; k < 6; k++) { const y = 418 + k * 12, w = 16 - Math.abs(k - 2.5) * 2.4; s += `<path d="M66,${y}c-${f1(w)},2 -${f1(w)},9 -${f1(w * 0.4)},12M66,${y}c${f1(w)},2 ${f1(w)},9 ${f1(w * 0.4)},12" fill="none" stroke="${TINTA}" stroke-width="1.2" stroke-linecap="round"/>`; }
  s += `<path d="M66,410v84" stroke="${TINTA}" stroke-width="1.6" stroke-dasharray="3 1.5"/><circle cx="66" cy="404" r="6" fill="${PAPEL}" stroke="${TINTA}" stroke-width="1.3"/><circle cx="64" cy="403" r="1.2" fill="${TINTA}"/><circle cx="68.5" cy="403" r="1.2" fill="${TINTA}"/></g>`;
  s += `<g filter="url(#roido)"><path d="${suave(mancha)}" fill="url(#manchaG)"/><path d="${respingos}" fill="#1c1418"/></g>`;
  // vinheta e grão do papel (sobre tudo)
  s += `<rect width="${VW}" height="${VH}" fill="url(#vinheta)"/><rect width="${VW}" height="${VH}" filter="url(#papel)" opacity=".5"/>`;

  // --- textos
  const T = (x, y, txt, size, extra = '') => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" fill="${TINTA}" ${SERIF} ${extra}>${txt}</text>`;
  regs.forEach(([nome, p], i) => {
    const c = i * 60, baixo = c > 90 && c < 270;
    s += `<path id="lr${i}" d="${labelArc(i, baixo ? LR - 10 + 8 : LR)}" fill="none"/><path id="lp${i}" d="${labelArc(i, baixo ? LR - 32 + 6 : LR - 22)}" fill="none"/>`;
    const nomeTxt = nome.toUpperCase();
    s += `<text font-size="${nomeTxt.length > 12 ? 17 : nomeTxt.length > 9 ? 19 : 22}" letter-spacing="${nomeTxt.length > 9 ? 1.6 : 3.5}" font-weight="700" fill="${TINTA}" ${SERIF} ${halo}><textPath href="#lr${i}" startOffset="50%" text-anchor="middle">${nomeTxt}</textPath></text>`;
    s += `<text font-size="15" font-style="italic" letter-spacing="1" fill="${COR[p]}" ${SERIF} ${halo}><textPath href="#lp${i}" startOffset="50%" text-anchor="middle">${p === 'Gula' ? 'Gula, morta' : p}</textPath></text>`;
  });
  for (const c of cidades) { const dy = c.t === 'vulcao' ? 14 : -9; const [ox, oy] = { 'Carmesina': [0, 0], 'Mão Aberta': [0, 0], 'Orla de Vidro': [0, 0] }[c.n] || [0, 0];
    s += T(c.x + ox, c.y + oy + (c.cima ? -10 : c.t === "vulcao" ? 16 : 18), c.n, 14, `font-style="italic" ${halo}`); }
  s += T(cx + 4, cy + 52, 'O FRAGMENTO', 13, `font-weight="700" letter-spacing="2" ${halo}`);
  s += `<path id="lmar" d="M${cx - 74},${cy - 6}A78,78 0 0,1 ${cx + 82},${cy - 6}" fill="none"/><text font-size="15" font-style="italic" letter-spacing="3" fill="#3d4a40" ${SERIF}><textPath href="#lmar" startOffset="50%" text-anchor="middle">Mar da Queda</textPath></text>`;
  // oceano
  s += `<path id="loc" d="M160,778Q330,742 520,786" fill="none"/><text font-size="21" font-style="italic" letter-spacing="7" fill="#3d4a40" ${SERIF}><textPath href="#loc" startOffset="50%" text-anchor="middle">Oceano Sorvedouro</textPath></text>`;
  // redemoinho do Sorvedouro
  { let d = 'M100,738'; for (let k = 0; k < 60; k++) { const t = k / 60 * 4 * TAU, r = 2 + k * 0.42; d += `L${f1(100 + r * Math.cos(t))},${f1(738 + r * Math.sin(t) * 0.6)}`; } s += `<path d="${d}" fill="none" stroke="#4d5a4b" stroke-width="1.1" opacity=".8"/>`; }
  // Ossário e a Mancha
  s += T(98, 362, 'OSSÁRIO', 15, `font-weight="700" letter-spacing="3" ${halo}`);
  s += T(96, 378, 'sumindo', 12, `font-style="italic" ${halo}`);
  // título
  s += `<g transform="translate(${VW / 2},74)"><path d="M-150,-40H150L162,-26L150,-12V18L162,32L150,46H-150L-162,32L-150,18V-12L-162,-26Z" fill="${PAPEL}" stroke="${TINTA}" stroke-width="1.6"/><path d="M-144,-34H144V40H-144Z" fill="none" stroke="${TINTA}" stroke-width=".6"/>`;
  s += T(0, 6, 'O ANEL', 36, `font-weight="700" letter-spacing="10"`) + T(0, 30, 'o mundo depois da queda da lua · ano 1020', 13, `font-style="italic" letter-spacing="1"`) + `</g>`;
  // Meia-Lua
  s += `<g transform="translate(704,104)"><path d="M10,-34A34,34 0 1,0 30,22A27,27 0 1,1 10,-34Z" fill="#e9e4d4" stroke="${TINTA}" stroke-width="1.3"/><circle cx="-8" cy="6" r="3" fill="none" stroke="${TINTA}" stroke-width=".7"/><circle cx="-14" cy="-10" r="2" fill="none" stroke="${TINTA}" stroke-width=".7"/><circle cx="2" cy="22" r="2.4" fill="none" stroke="${TINTA}" stroke-width=".7"/></g>`;
  s += T(700, 160, 'a Meia-Lua', 14, `font-style="italic" ${halo}`);
  s += rosa(690, 710, 62);
  s += `</g>`; // fim do quadro
  // moldura
  s += `<rect x="${M}" y="${M}" width="${VW - 2 * M}" height="${VH - 2 * M}" fill="none" stroke="${TINTA}" stroke-width="2"/><rect x="${M2}" y="${M2}" width="${VW - 2 * M2}" height="${VH - 2 * M2}" fill="none" stroke="${TINTA}" stroke-width="1.2"/><path d="${regua}" fill="${TINTA}"/>`;
  for (const [x, y] of [[M, M], [VW - M2, M], [M, VH - M2], [VW - M2, VH - M2]]) s += `<rect x="${x}" y="${y}" width="${M2 - M}" height="${M2 - M}" fill="${COR.Orgulho}" stroke="${TINTA}" stroke-width="1"/>`;
  // a Mancha também rói a moldura
  s += `<g filter="url(#roido)"><path d="M-10,330C30,340 26,380 34,410C40,450 28,500 36,540C26,560 10,575 -10,580Z" fill="url(#manchaG)"/></g>`;
  s += `<rect width="${VW}" height="${VH}" fill="none" stroke="${PAPEL}" stroke-width="2"/>`;
  s += `</svg>`;
  writeFileSync('public/mapa.svg', s);
}
console.log('figuras geradas');
