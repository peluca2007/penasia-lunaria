// Abertura de capítulo: junta o "chap", o título e a lede numa <header class="abre">
// (página negra no livro), e arruma as legendas. Usado no contínuo e no folhear.
export const PECADOS = ['ira', 'luxuria', 'preguica', 'ganancia', 'inveja', 'gula', 'orgulho', 'todos'];
export const pecadoDe = (fm = {}) => (PECADOS.includes(fm.pecado) ? fm.pecado : 'nenhum');

const limpo = (s) => s.replace(/<[^>]+>/g, '').replace(/[.\s]+$/, '').trim().toLowerCase();

// `grav` (src/data/gravuras.js) troca ou insere a gravura da abertura.
export function abrir(html, fm = {}, grav = null) {
  // legenda igual ao alt não diz nada novo: sai
  html = html.replace(/<figcaption>([\s\S]*?)<\/figcaption>/g, (m, cap, i) => {
    const alt = html.slice(Math.max(0, i - 600), i).match(/alt="([^"]*)"[^>]*>\s*$/);
    return alt && limpo(alt[1]) === limpo(cap) ? '' : m;
  });

  const tit = html.match(/^\s*(<h[12][^>]*>[\s\S]*?<\/h[12]>)/);
  if (!tit) return html;
  let resto = html.slice(tit[0].length);
  let fig = '', lede = '', sub = '';

  const pega = (re) => {
    const m = resto.match(re);
    if (!m) return '';
    resto = resto.slice(m[0].length);
    return m[1];
  };
  fig = pega(/^\s*(<figure[\s\S]*?<\/figure>)/);
  lede = pega(/^\s*(<p class="(?:lede|tag)">[\s\S]*?<\/p>)/);

  // Classe: a linha técnica vira subtítulo; a frase da caixa vira a abertura.
  if (fm.chap === 'Classe' && lede) {
    const frase = resto.match(/<p><strong>Em uma frase\.<\/strong>\s*([\s\S]*?)<\/p>\s*/);
    if (frase) {
      sub = lede.replace('class="lede"', 'class="sub"');
      lede = `<p class="lede">${frase[1]}</p>`;
      resto = resto.replace(frase[0], '');
    }
  }
  if (grav) {
    fig = `<figure class="fig gravura"><img src="${grav.src}" alt="${grav.alt}" width="${grav.w}" height="${grav.h}"><figcaption>${grav.autor}</figcaption></figure>`;
  } else if (fig) fig = fig.replace(/class="fig[^"]*"/, 'class="fig gravura"');

  const chap = fm.chap ?? '';
  const num = chap.match(/^(Capítulo|Apêndice)\s+(\S+)$/);
  const rotulo = num
    ? `<div class="chap"><span>${num[1]}</span><b>${num[2]}</b></div>`
    : chap ? `<div class="chap"><span>${chap}</span></div>` : '';

  const curta = fm.abertura === 'curta' ? ' curta' : '';
  return `<header class="abre${curta}${fig ? ' com-fig' : ''}"><i class="orn" aria-hidden="true"></i>${rotulo}${tit[1]}${sub}${fig}${lede}</header>${resto}`;
}
