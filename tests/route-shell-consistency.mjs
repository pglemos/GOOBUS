import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const mainHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cssVersion = mainHtml.match(/cinematic\.css\?v=([a-zA-Z0-9-]+)/)?.[1];
const jsVersion = mainHtml.match(/cinematic\.js\?v=([a-zA-Z0-9-]+)/)?.[1];
const buildMarker = mainHtml.match(/name=["']goobus-build["'][^>]+content=["']([^"']+)["']/)?.[1];

assert.ok(cssVersion, 'Não foi possível extrair a versão do cinematic.css em index.html');
assert.ok(jsVersion, 'Não foi possível extrair a versão do cinematic.js em index.html');
assert.ok(buildMarker, 'Não foi possível extrair o marcador goobus-build em index.html');

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const cssPattern = new RegExp(`cinematic\\.css\\?v=${escapeRegExp(cssVersion)}`);
const jsPattern = new RegExp(`cinematic\\.js\\?v=${escapeRegExp(jsVersion)}`);
const buildPattern = new RegExp(`name=["']goobus-build["'][^>]+content=["']${escapeRegExp(buildMarker)}["']`);

const pages = {
  'index.html': 'home',
  'empresa/index.html': 'empresa',
  'servicos/index.html': 'servicos',
  'frota/index.html': 'frota',
  'orcamento/index.html': 'orcamento',
  'contato/index.html': 'contato',
  'politica-de-privacidade/index.html': 'privacidade',
  'servicos/aluguel-de-onibus/index.html': 'service-aluguel-de-onibus',
  'servicos/fretamento-corporativo/index.html': 'service-fretamento-corporativo',
  'servicos/turismo-excursoes/index.html': 'service-turismo-excursoes',
  'servicos/transfers/index.html': 'service-transfers',
  'servicos/eventos/index.html': 'service-eventos',
  'servicos/escolas-formaturas/index.html': 'service-escolas-formaturas',
  'servicos/romarias/index.html': 'service-romarias',
  'servicos/bandas-producoes/index.html': 'service-bandas-producoes'
};

function validatePageShells(baseDirectory, label) {
  for (const [relativePath, page] of Object.entries(pages)) {
    const absolutePath = path.join(baseDirectory, relativePath);
    assert.ok(fs.existsSync(absolutePath), `${label}: ${relativePath} deve existir`);
    const html = fs.readFileSync(absolutePath, 'utf8');
    assert.match(html, cssPattern, `${label}: ${relativePath} usa CSS divergente`);
    assert.match(html, jsPattern, `${label}: ${relativePath} usa JS divergente`);
    assert.match(html, buildPattern, `${label}: ${relativePath} não possui o marcador de build correto`);
    assert.match(html, new RegExp(`data-page=["']${escapeRegExp(page)}["']`), `${label}: ${relativePath} aponta para a página errada`);
    assert.doesNotMatch(html, /theme\.css|site\.js|quote\.js/, `${label}: ${relativePath} ainda referencia motor legado`);
  }
}

validatePageShells(root, 'fonte');

const dist = path.join(root, 'dist');
assert.ok(fs.existsSync(dist), 'dist deve existir antes dos testes; execute npm run build');
validatePageShells(dist, 'dist');
assert.ok(!fs.existsSync(path.join(dist, 'tests')), 'tests não podem ser publicados em dist');
assert.ok(!fs.existsSync(path.join(dist, 'package.json')), 'package.json não deve ser publicado em dist');

const htaccess = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
assert.match(htaccess, /DirectoryIndex\s+index\.html\s+index\.php/, 'index.html deve ter prioridade');
assert.match(htaccess, /Cache-Control[^\n]+no-store/, 'HTML deve ser publicado sem cache persistente');

for (const legacyFile of ['assets/theme.css', 'assets/site.js']) {
  const content = fs.readFileSync(path.join(root, legacyFile), 'utf8');
  assert.match(content, /GOOBUS_LEGACY_BRIDGE/, `${legacyFile} ainda contém o motor visual antigo`);
}

const allowedTopLevelCode = new Set([
  'cinematic.css',
  'cinematic-pages-v3.css',
  'cinematic.js',
  'theme.css',
  'site.js'
]);
const topLevelCode = fs.readdirSync(path.join(root, 'assets'))
  .filter(file => /\.(css|js)$/i.test(file));
for (const file of topLevelCode) {
  assert.ok(allowedTopLevelCode.has(file), `asset legado não auditado: assets/${file}`);
}

const buildScript = fs.readFileSync(path.join(root, 'scripts/build-hostinger.mjs'), 'utf8');
assert.match(buildScript, /["']tests["']/, 'a pasta de testes não deve ser enviada para produção');

console.log(`OK: ${Object.keys(pages).length} páginas consistentes na fonte e em dist; CSS ${cssVersion}, JS ${jsVersion}, build ${buildMarker}.`);
