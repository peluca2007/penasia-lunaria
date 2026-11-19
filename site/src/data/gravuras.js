// Gravuras de domínio público usadas nas aberturas (capítulos e classes).
// Arquivos em public/img/estilo/; fonte, autor e licença em public/img/estilo/CREDITOS.md.
// A chave é o `arquivo` de src/data/capitulos.js.
const g = (img, w, h, alt, autor) => ({ src: `/img/estilo/${img}.webp`, w, h, alt, autor });

export const gravuras = {
  mundo: g('dore-luz', 698, 880, 'Luz rasgando nuvens sobre o abismo.', 'Gustave Doré, 1866'),
  personagem: g('holbein-criacao', 497, 720, 'A criação de todas as coisas, em xilogravura.', 'Hans Holbein, c. 1526'),
  balanca: g('bruegel-inveja', 800, 560, 'Alegoria da Inveja: um povo que se devora.', 'Bruegel e van der Heyden, 1558'),
  combate: g('bruegel-ira', 800, 560, 'Alegoria da Ira: uma guerra de facas e caldeirões.', 'Bruegel e van der Heyden, 1558'),
  magia: g('bruegel-ganancia', 800, 558, 'Alegoria da Avareza: moedas, cofres e mãos.', 'Bruegel e van der Heyden, 1558'),
  pacto: g('bruegel-luxuria', 800, 554, 'Alegoria da Luxúria: o banho dos amantes.', 'Bruegel e van der Heyden, 1558'),
  progressao: g('bruegel-orgulho', 800, 519, 'Alegoria do Orgulho: a dama e o pavão.', 'Bruegel e van der Heyden, 1558'),
  'classes/brigao': g('dore-cerbero', 800, 503, 'Cérbero, o cão de três cabeças.', 'Gustave Doré, 1861'),
  'classes/veterano': g('durer-cavaleiros', 526, 720, 'Os quatro cavaleiros do Apocalipse.', 'Albrecht Dürer, 1498'),
  'classes/navalha': g('dore-invejosos', 625, 880, 'Os invejosos, de olhos costurados, à beira do penhasco.', 'Gustave Doré, 1868'),
  'classes/vigia': g('bruegel-preguica', 800, 562, 'Alegoria da Preguiça: um mundo que dorme.', 'Bruegel e van der Heyden, 1558'),
  'classes/armador': g('holbein-mercador', 620, 800, 'A Morte puxa o mercador de cima das suas mercadorias.', 'Hans Holbein, c. 1526'),
  'classes/confessor': g('holbein-pregador', 503, 720, 'A Morte atrás do pregador no púlpito.', 'Hans Holbein, c. 1526'),
  'classes/mago': g('dore-pluto', 800, 635, 'Pluto, o guardião dos avarentos.', 'Gustave Doré, 1861'),
  'classes/herdeiro': g('bruegel-gula', 800, 556, 'Alegoria da Gula: a mesa que não acaba.', 'Bruegel e van der Heyden, 1558'),
  'classes/ungido': g('durer-cavaleiro-morte', 682, 880, 'O cavaleiro que segue entre a Morte e o Diabo.', 'Albrecht Dürer, 1513'),
  'classes/andarilho-do-vazio': g('durer-melencolia', 710, 880, 'O anjo da Melancolia sentado entre instrumentos parados.', 'Albrecht Dürer, 1514'),
  'classes/avatar': g('dore-lucifer', 800, 644, 'Lúcifer preso no gelo, no fundo do Inferno.', 'Gustave Doré, 1861'),
};
