import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync('assets/app.js', 'utf8');
assert.doesNotMatch(source, /href=["']\/(?:empresa|servicos|frota|orcamento|contato|politica-de-privacidade)\/["']/, 'link principal termina com barra');
assert.doesNotMatch(source, /href=["']\/servicos\/[^"']+\/["']/, 'link de serviço termina com barra');
assert.doesNotMatch(source, /GOOBUS_LEGACY_BRIDGE|route-bootstrap|page-audit/, 'app.js contém ponte ou remendo legado');

const document = {
  body: { dataset: {} },
  documentElement: { classList: { add() {} } },
  querySelector() { return null; },
  querySelectorAll() { return []; }
};
const location = { pathname: '/', origin: 'https://goobuss.com', href: 'https://goobuss.com/' };
const window = { location, document, addEventListener() {}, matchMedia() { return { matches: true }; } };
vm.runInNewContext(source, {
  window, document, location, URL, URLSearchParams, Set, Object, Array, Date, Math, console,
  encodeURIComponent, decodeURIComponent, performance: { now: () => 0 }, requestAnimationFrame() {},
  addEventListener() {}, matchMedia: window.matchMedia, fetch: async () => ({ ok: false, json: async () => ({}) })
});

assert.equal(typeof window.GOOBUS?.resolveRoute, 'function', 'app.js não expõe resolveRoute');
const routes = {
  '/': 'home', '/empresa': 'empresa', '/servicos': 'servicos', '/frota': 'frota', '/orcamento': 'orcamento', '/contato': 'contato',
  '/politica-de-privacidade': 'privacidade', '/servicos/aluguel-de-onibus': 'service-aluguel-de-onibus',
  '/servicos/fretamento-corporativo': 'service-fretamento-corporativo', '/servicos/turismo-excursoes': 'service-turismo-excursoes',
  '/servicos/romarias': 'service-romarias', '/servicos/eventos': 'service-eventos',
  '/servicos/escolas-formaturas': 'service-escolas-formaturas', '/servicos/bandas-producoes': 'service-bandas-producoes',
  '/servicos/transfers': 'service-transfers', '/rota-inexistente': 'not-found'
};
for (const [pathname, expected] of Object.entries(routes)) {
  assert.equal(window.GOOBUS.resolveRoute(pathname), expected, `${pathname} deveria resolver para ${expected}`);
  if (pathname !== '/') assert.equal(window.GOOBUS.resolveRoute(`${pathname}/`), expected, `${pathname}/ deveria normalizar para ${expected}`);
}

console.log(`OK: ${Object.keys(routes).length} rotas resolvidas sem duplicação.`);
