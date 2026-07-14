import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const exists = (base, relativePath) => fs.existsSync(path.join(base, relativePath));
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'assets/app.js'), 'utf8');
const pagesCss = fs.readFileSync(path.join(root, 'assets/pages.css'), 'utf8');

assert.match(index, /assets\/cinematic\.css/, 'index.html deve carregar cinematic.css');
assert.match(index, /assets\/pages\.css/, 'index.html deve carregar pages.css');
assert.match(index, /assets\/app\.js/, 'index.html deve carregar app.js');
assert.doesNotMatch(index, /route-bootstrap|page-audit|cinematic-pages-v3|cinematic\.js|theme\.css|site\.js/, 'index.html referencia arquivo temporário ou legado');

assert.doesNotMatch(app, /class=["']hero-kicker["']/, 'nenhuma página pode renderizar hero-kicker');
assert.doesNotMatch(app, /class=["']breadcrumb["']/, 'nenhuma página pode renderizar breadcrumb no herói');
assert.doesNotMatch(pagesCss, /ROTA\s*\/\s*OPERAÇÃO\s*\/\s*MOVIMENTO/i, 'pages.css não pode inserir slogan artificial no herói');
assert.doesNotMatch(pagesCss, /\.internal-hero__content::before/, 'o pseudo-elemento decorativo do conteúdo do herói deve ser removido');

const removed = [
  'empresa/index.html', 'servicos/index.html', 'frota/index.html', 'orcamento/index.html', 'contato/index.html', 'politica-de-privacidade/index.html',
  'servicos/aluguel-de-onibus/index.html', 'servicos/fretamento-corporativo/index.html', 'servicos/turismo-excursoes/index.html', 'servicos/transfers/index.html',
  'servicos/eventos/index.html', 'servicos/escolas-formaturas/index.html', 'servicos/romarias/index.html', 'servicos/bandas-producoes/index.html',
  'index.php', 'assets/theme.css', 'assets/site.js', 'assets/cinematic.js', 'assets/cinematic-pages-v3.css',
  'assets/route-bootstrap-v4.js', 'assets/page-audit-v4.js', 'assets/page-audit-v4.css'
];

for (const file of removed) {
  assert.equal(exists(root, file), false, `fonte ainda contém ${file}`);
  assert.equal(exists(dist, file), false, `dist ainda publica ${file}`);
}

for (const file of ['index.html', 'assets/app.js', 'assets/cinematic.css', 'assets/pages.css']) {
  assert.equal(exists(root, file), true, `fonte não contém ${file}`);
  assert.equal(exists(dist, file), true, `dist não contém ${file}`);
}

assert.equal(exists(dist, 'tests'), false, 'dist não pode publicar testes');
assert.equal(exists(dist, 'package.json'), false, 'dist não pode publicar package.json');

const allowed = new Set(['app.js', 'cinematic.css', 'pages.css']);
const codeFiles = fs.readdirSync(path.join(root, 'assets')).filter(file => /\.(css|js)$/i.test(file));
for (const file of codeFiles) assert.ok(allowed.has(file), `asset de código legado ou não autorizado: assets/${file}`);

console.log('OK: arquivos antigos, pontes legadas e rótulos artificiais removidos.');