import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const mainHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const cssVersion = mainHtml.match(/cinematic\.css\?v=([a-zA-Z0-9-]+)/)?.[1];
const jsVersion = mainHtml.match(/cinematic\.js\?v=([a-zA-Z0-9-]+)/)?.[1];
const buildMarker = mainHtml.match(/name=["']goobus-build["'][^>]+content=["']([^"']+)["']/)?.[1];

assert.ok(cssVersion, 'Não foi possível extrair a versão do cinematic.css em index.html');
assert.ok(jsVersion, 'Não foi possível extrair a versão do cinematic.js em index.html');
assert.ok(buildMarker, 'Não foi possível extrair o marcador goobus-build em index.html');
assert.match(mainHtml, /route-bootstrap-v4\.js/, 'index.html deve carregar o bootstrap de rotas antes do frontend');
assert.match(mainHtml, /page-audit-v4\.css/, 'index.html deve carregar o CSS da auditoria página por página');
assert.match(mainHtml, /page-audit-v4\.js/, 'index.html deve carregar a auditoria página por página');
assert.ok(mainHtml.indexOf('route-bootstrap-v4.js') < mainHtml.indexOf('cinematic.js'), 'o bootstrap de rota deve executar antes do cinematic.js');

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
assert.ok(fs.existsSync(path.join(dist, 'assets/route-bootstrap-v4.js')), 'bootstrap de rotas deve ser publicado em dist');
assert.ok(fs.existsSync(path.join(dist, 'assets/page-audit-v4.js')), 'auditoria de páginas deve ser publicada em dist');
assert.ok(fs.existsSync(path.join(dist, 'assets/page-audit-v4.css')), 'CSS da auditoria deve ser publicado em dist');

const bootstrap = fs.readFileSync(path.join(root, 'assets/route-bootstrap-v4.js'), 'utf8');
assert.match(bootstrap, /location\.pathname/, 'o bootstrap deve resolver a página pela URL real');

const runtimeRoutes = {
  '/': 'home',
  '/empresa/': 'empresa',
  '/servicos/': 'servicos',
  '/frota/': 'frota',
  '/orcamento/': 'orcamento',
  '/contato/': 'contato',
  '/politica-de-privacidade/': 'privacidade',
  '/servicos/aluguel-de-onibus/': 'service-aluguel-de-onibus',
  '/servicos/fretamento-corporativo/': 'service-fretamento-corporativo',
  '/servicos/turismo-excursoes/': 'service-turismo-excursoes',
  '/servicos/romarias/': 'service-romarias',
  '/servicos/eventos/': 'service-eventos',
  '/servicos/escolas-formaturas/': 'service-escolas-formaturas',
  '/servicos/bandas-producoes/': 'service-bandas-producoes',
  '/servicos/transfers/': 'service-transfers',
  '/rota-inexistente/': 'not-found'
};

for (const [pathname, expectedPage] of Object.entries(runtimeRoutes)) {
  const location = { pathname };
  const document = { body: { dataset: {} } };
  const window = { location };
  vm.runInNewContext(bootstrap, { window, location, document, decodeURIComponent, Set, Object });
  assert.equal(document.body.dataset.page, expectedPage, `${pathname} deve resolver para ${expectedPage}`);
  assert.equal(window.GOOBUS_ROUTE.page, expectedPage, `${pathname} deve expor ${expectedPage} em GOOBUS_ROUTE`);
}

const audit = fs.readFileSync(path.join(root, 'assets/page-audit-v4.js'), 'utf8');
for (const page of ['servicos','frota','empresa','orcamento','contato']) {
  assert.match(audit, new RegExp(`${page}:`), `auditoria não contém configuração de ${page}`);
}
for (const title of ['Aluguel de ônibus','Fretamento corporativo','Turismo e excursões','Romarias','Eventos e congressos','Escolas e formaturas','Bandas e produções','Transfers e city tour']) {
  assert.match(audit, new RegExp(escapeRegExp(title)), `auditoria não contém conteúdo específico para ${title}`);
}
assert.match(audit, /prepareForms/, 'auditoria deve preparar e preencher formulários');
assert.match(audit, /updateMeta/, 'auditoria deve atualizar metadados por rota');

const htaccess = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
assert.match(htaccess, /DirectoryIndex\s+index\.html\s+index\.php/, 'index.html deve ter prioridade');
assert.match(htaccess, /Cache-Control[^\n]+no-store/, 'HTML deve ser publicado sem cache persistente');
assert.match(htaccess, /RewriteRule\s+\^\(empresa\|servicos\|frota\|orcamento\|contato\|politica-de-privacidade\)/, 'rotas públicas devem passar pelo front controller antes da verificação de diretórios físicos');
assert.match(htaccess, /RewriteRule[^\n]+\/index\.html/, 'rotas públicas devem ser servidas pelo index.html raiz');
const routeRulePosition = htaccess.indexOf('RewriteRule ^(empresa|servicos|frota|orcamento|contato|politica-de-privacidade)');
const directoryConditionPosition = htaccess.indexOf('RewriteCond %{REQUEST_FILENAME} -d');
assert.ok(routeRulePosition > -1 && routeRulePosition < directoryConditionPosition, 'front controller deve executar antes de respeitar diretórios físicos');

for (const legacyFile of ['assets/theme.css', 'assets/site.js']) {
  const content = fs.readFileSync(path.join(root, legacyFile), 'utf8');
  assert.match(content, /GOOBUS_LEGACY_BRIDGE/, `${legacyFile} ainda contém o motor visual antigo`);
}

const allowedTopLevelCode = new Set([
  'cinematic.css',
  'cinematic-pages-v3.css',
  'cinematic.js',
  'page-audit-v4.css',
  'page-audit-v4.js',
  'route-bootstrap-v4.js',
  'theme.css',
  'site.js'
]);
const topLevelCode = fs.readdirSync(path.join(root, 'assets')).filter(file => /\.(css|js)$/i.test(file));
for (const file of topLevelCode) assert.ok(allowedTopLevelCode.has(file), `asset legado não auditado: assets/${file}`);

const buildScript = fs.readFileSync(path.join(root, 'scripts/build-hostinger.mjs'), 'utf8');
assert.match(buildScript, /["']tests["']/, 'a pasta de testes não deve ser enviada para produção');

console.log(`OK: ${Object.keys(pages).length} páginas validadas; ${Object.keys(runtimeRoutes).length} rotas testadas em runtime; build ${buildMarker}.`);
