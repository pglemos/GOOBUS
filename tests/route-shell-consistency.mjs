import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const dist = path.join(root, 'dist');
const read = relativePath => fs.readFileSync(path.join(root, relativePath), 'utf8');
const exists = (base, relativePath) => fs.existsSync(path.join(base, relativePath));

const index = read('index.html');
const buildMarker = index.match(/name=["']goobus-build["'][^>]+content=["']([^"']+)["']/)?.[1];
assert.ok(buildMarker, 'index.html precisa expor o marcador de build');
assert.match(index, /assets\/cinematic\.css/, 'index.html deve carregar o design cinematográfico');
assert.match(index, /assets\/pages\.css/, 'index.html deve carregar o CSS único das páginas');
assert.match(index, /assets\/app\.js/, 'index.html deve carregar apenas o aplicativo principal');
assert.doesNotMatch(index, /route-bootstrap|page-audit|cinematic-pages-v3|cinematic\.js|theme\.css|site\.js/, 'index.html ainda referencia arquivos temporários ou legados');

const physicalRouteFiles = [
  'empresa/index.html',
  'servicos/index.html',
  'frota/index.html',
  'orcamento/index.html',
  'contato/index.html',
  'politica-de-privacidade/index.html',
  'servicos/aluguel-de-onibus/index.html',
  'servicos/fretamento-corporativo/index.html',
  'servicos/turismo-excursoes/index.html',
  'servicos/transfers/index.html',
  'servicos/eventos/index.html',
  'servicos/escolas-formaturas/index.html',
  'servicos/romarias/index.html',
  'servicos/bandas-producoes/index.html'
];

const legacyFiles = [
  'index.php',
  'assets/theme.css',
  'assets/site.js',
  'assets/cinematic.js',
  'assets/cinematic-pages-v3.css',
  'assets/route-bootstrap-v4.js',
  'assets/page-audit-v4.js',
  'assets/page-audit-v4.css'
];

for (const file of [...physicalRouteFiles, ...legacyFiles]) {
  assert.equal(exists(root, file), false, `fonte ainda contém arquivo legado: ${file}`);
}

assert.ok(exists(root, 'assets/app.js'), 'assets/app.js deve existir');
assert.ok(exists(root, 'assets/pages.css'), 'assets/pages.css deve existir');
assert.ok(exists(dist, 'index.html'), 'dist precisa conter index.html após o build');
assert.ok(exists(dist, 'assets/app.js'), 'dist precisa conter assets/app.js');
assert.ok(exists(dist, 'assets/pages.css'), 'dist precisa conter assets/pages.css');
for (const file of [...physicalRouteFiles, ...legacyFiles]) {
  assert.equal(exists(dist, file), false, `dist ainda publica arquivo legado: ${file}`);
}
assert.equal(exists(dist, 'tests'), false, 'dist não pode publicar testes');
assert.equal(exists(dist, 'package.json'), false, 'dist não pode publicar package.json');

const appSource = read('assets/app.js');
assert.doesNotMatch(appSource, /href=["']\/(?:empresa|servicos|frota|orcamento|contato|politica-de-privacidade)\/["']/, 'links principais não podem terminar com barra');
assert.doesNotMatch(appSource, /href=["']\/servicos\/[^"']+\/["']/, 'links de serviços não podem terminar com barra');
assert.doesNotMatch(appSource, /GOOBUS_LEGACY_BRIDGE|route-bootstrap|page-audit/, 'app.js não pode conter pontes ou remendos legados');

const routeCases = {
  '/': 'home',
  '/empresa': 'empresa',
  '/servicos': 'servicos',
  '/frota': 'frota',
  '/orcamento': 'orcamento',
  '/contato': 'contato',
  '/politica-de-privacidade': 'privacidade',
  '/servicos/aluguel-de-onibus': 'service-aluguel-de-onibus',
  '/servicos/fretamento-corporativo': 'service-fretamento-corporativo',
  '/servicos/turismo-excursoes': 'service-turismo-excursoes',
  '/servicos/romarias': 'service-romarias',
  '/servicos/eventos': 'service-eventos',
  '/servicos/escolas-formaturas': 'service-escolas-formaturas',
  '/servicos/bandas-producoes': 'service-bandas-producoes',
  '/servicos/transfers': 'service-transfers',
  '/rota-inexistente': 'not-found'
};

const document = {
  body: { dataset: {} },
  documentElement: { classList: { add() {} } },
  querySelector() { return null; },
  querySelectorAll() { return []; }
};
const location = { pathname: '/', origin: 'https://goobuss.com', href: 'https://goobuss.com/' };
const window = { location, document, addEventListener() {}, matchMedia() { return { matches: true }; } };
vm.runInNewContext(appSource, {
  window,
  document,
  location,
  URL,
  URLSearchParams,
  Set,
  Object,
  Array,
  Date,
  Math,
  console,
  encodeURIComponent,
  decodeURIComponent,
  performance: { now: () => 0 },
  requestAnimationFrame() {},
  addEventListener() {},
  matchMedia: window.matchMedia,
  fetch: async () => ({ ok: false, json: async () => ({}) })
});
assert.equal(typeof window.GOOBUS?.resolveRoute, 'function', 'app.js deve expor um resolvedor de rotas testável');
for (const [pathname, expected] of Object.entries(routeCases)) {
  assert.equal(window.GOOBUS.resolveRoute(pathname), expected, `${pathname} deve resolver para ${expected}`);
  if (pathname !== '/') assert.equal(window.GOOBUS.resolveRoute(`${pathname}/`), expected, `${pathname}/ deve normalizar para ${expected}`);
}

const htaccess = read('.htaccess');
assert.match(htaccess, /RewriteCond %\{REQUEST_URI\} !\^\/$/, 'a raiz deve ser preservada ao remover barras finais');
assert.match(htaccess, /R=301/, 'URLs com barra final precisam de redirecionamento permanente');
assert.match(htaccess, /empresa\|servicos\|frota\|orcamento\|contato\|politica-de-privacidade/, 'rotas públicas precisam ser enumeradas no front controller');
assert.match(htaccess, /servicos\/\(aluguel-de-onibus\|fretamento-corporativo/, 'serviços válidos precisam ser enumerados no front controller');
assert.doesNotMatch(htaccess, /DirectoryIndex[^\n]*index\.php/, 'index.php não pode continuar como entrada alternativa');

const allowedTopLevelCode = new Set(['app.js', 'cinematic.css', 'pages.css']);
const topLevelCode = fs.readdirSync(path.join(root, 'assets')).filter(file => /\.(css|js)$/i.test(file));
for (const file of topLevelCode) assert.ok(allowedTopLevelCode.has(file), `asset de código não autorizado ou legado: assets/${file}`);

console.log(`OK: arquitetura limpa, ${Object.keys(routeCases).length} rotas canônicas e build ${buildMarker}.`);
