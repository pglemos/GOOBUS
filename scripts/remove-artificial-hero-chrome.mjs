import fs from 'node:fs';

const file = 'assets/app.js';
let source = fs.readFileSync(file, 'utf8');

const replacements = [
  [
    'function hero({ kicker, title, accent, description, imagePath = IMG.hero, panel = true }) {',
    'function hero({ title, accent, description, imagePath = IMG.hero, panel = true }) {'
  ],
  [
    '<div class="container cinematic-hero__grid"><div class="hero-copy"><span class="hero-kicker">${kicker}</span><h1 class="hero-title">',
    '<div class="container cinematic-hero__grid"><div class="hero-copy"><h1 class="hero-title">'
  ],
  [
    '<div class="container internal-hero__content"><nav class="breadcrumb" aria-label="Navegação estrutural"><a href="/">Início</a><span>/</span><span>${label || title}</span></nav><span class="hero-kicker">${label || \'GOOBUS\'}</span><h1>',
    '<div class="container internal-hero__content"><h1>'
  ],
  [
    "hero({ kicker: 'Mobilidade corporativa e transporte de grupos', title:",
    'hero({ title:'
  ]
];

for (const [before, after] of replacements) {
  if (!source.includes(before)) {
    throw new Error(`Trecho esperado não encontrado: ${before.slice(0, 90)}`);
  }
  source = source.replace(before, after);
}

if (/class=["'](?:hero-kicker|breadcrumb)["']/.test(source)) {
  throw new Error('Ainda existem hero-kicker ou breadcrumb renderizados em app.js');
}

fs.writeFileSync(file, source);
console.log('Heróis limpos: kicker e breadcrumb removidos da origem.');
