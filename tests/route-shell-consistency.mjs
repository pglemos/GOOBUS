import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const build = '20260714-3';
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

for (const [relativePath, page] of Object.entries(pages)) {
  const absolutePath = path.join(root, relativePath);
  assert.ok(fs.existsSync(absolutePath), `${relativePath} deve existir`);
  const html = fs.readFileSync(absolutePath, 'utf8');
  assert.match(html, new RegExp(`cinematic\\.css\\?v=${build}`), `${relativePath} usa CSS antigo`);
  assert.match(html, new RegExp(`cinematic\\.js\\?v=${build}`), `${relativePath} usa JS antigo`);
  assert.match(html, new RegExp(`name=["']goobus-build["'][^>]+${build}`), `${relativePath} não possui marcador de build`);
  assert.match(html, new RegExp(`data-page=["']${page}["']`), `${relativePath} aponta para a página errada`);
  assert.doesNotMatch(html, /theme\.css|site\.js/, `${relativePath} ainda referencia o motor legado`);
}

const htaccess = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
assert.match(htaccess, /DirectoryIndex\s+index\.html\s+index\.php/, 'index.html deve ter prioridade');
assert.match(htaccess, /Cache-Control[^\n]+no-store/, 'HTML deve ser publicado sem cache persistente');

for (const legacyFile of ['assets/theme.css', 'assets/site.js']) {
  const content = fs.readFileSync(path.join(root, legacyFile), 'utf8');
  assert.match(content, /GOOBUS_LEGACY_BRIDGE/, `${legacyFile} ainda contém o motor visual antigo`);
}

console.log(`OK: ${Object.keys(pages).length} páginas usam o build cinematográfico ${build}.`);
