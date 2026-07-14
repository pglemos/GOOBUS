import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const exists = relative => fs.existsSync(path.join(root, relative));

const routes = [
  ['servicos', 'servicos', 'Serviços'],
  ['frota', 'frota', 'Frota'],
  ['empresa', 'empresa', 'Empresa'],
  ['orcamento', 'orcamento', 'Orçamento'],
  ['contato', 'contato', 'Contato'],
  ['servicos/aluguel-de-onibus', 'service-aluguel-de-onibus', 'Aluguel de ônibus'],
  ['servicos/fretamento-corporativo', 'service-fretamento-corporativo', 'Fretamento corporativo'],
  ['servicos/turismo-excursoes', 'service-turismo-excursoes', 'Turismo e excursões'],
  ['servicos/romarias', 'service-romarias', 'Romarias'],
  ['servicos/eventos', 'service-eventos', 'Eventos e congressos'],
  ['servicos/escolas-formaturas', 'service-escolas-formaturas', 'Escolas e formaturas'],
  ['servicos/bandas-producoes', 'service-bandas-producoes', 'Bandas e produções'],
  ['servicos/transfers', 'service-transfers', 'Transfers e city tour'],
];

const htaccess = read('.htaccess');
assert.match(htaccess, /GOOBUS_FRONT_CONTROLLER_V4/, 'o front controller v4 deve estar identificado');
assert.match(htaccess, /RewriteRule[^\n]+index\.php/, 'as páginas públicas devem passar pelo index.php');
assert.ok(htaccess.indexOf('GOOBUS_FRONT_CONTROLLER_V4') < htaccess.indexOf('REQUEST_FILENAME'), 'o front controller deve executar antes da exceção de diretórios físicos');

const php = read('index.php');
assert.match(php, /\$pageMap\s*=\s*\[/, 'index.php deve possuir um mapa único de páginas');
assert.match(php, /data-page=\\?"<\?=\s*htmlspecialchars\(\$page\['id'\]/, 'index.php deve emitir data-page a partir do mapa');
for (const [route, pageId, label] of routes) {
  assert.match(php, new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `index.php deve mapear ${route}`);
  assert.match(php, new RegExp(pageId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `index.php deve mapear o id ${pageId}`);
  assert.match(php, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), `index.php deve possuir metadados de ${label}`);
}

const js = read('assets/cinematic.js');
assert.match(js, /function\s+pageIdFromPath\s*\(/, 'o JavaScript deve derivar a página pelo pathname');
assert.match(js, /const\s+SERVICE_PAGE_DATA\s*=\s*\{/, 'cada serviço deve possuir conteúdo editorial próprio');
assert.match(js, /function\s+prefillLeadForm\s*\(/, 'o orçamento deve aceitar pré-preenchimento por URL');
assert.match(js, /function\s+validateLeadForm\s*\(/, 'os formulários devem ter validação dedicada');
assert.match(js, /dataset\.submitting/, 'o formulário deve impedir envio duplicado');

const uniqueMarkers = [
  'Escolha a categoria pela operação',
  'Turnos, adesão e pontos de embarque',
  'Programação, paradas e experiência do grupo',
  'Pontos de encontro e horários da jornada',
  'Chegada, dispersão e contingência',
  'Responsáveis, autorizações e horários',
  'Agenda técnica, equipe e equipamentos',
  'Voo, bagagem, espera e roteiro urbano',
];
for (const marker of uniqueMarkers) {
  assert.match(js, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `conteúdo exclusivo ausente: ${marker}`);
}

assert.ok(exists('assets/cinematic-pages-v4.css'), 'a camada visual v4 deve existir');
assert.ok(!exists('assets/cinematic-pages-v3.css'), 'a camada visual v3 deve ser removida');

const staleShells = routes.map(([route]) => `${route}/index.html`);
for (const stale of staleShells) {
  assert.ok(!exists(stale), `${stale} é código morto e deve ser removido`);
}

const buildScript = read('scripts/build-hostinger.mjs');
assert.match(buildScript, /["']docs["']/, 'documentação interna não deve ir para produção');
assert.match(buildScript, /["']playwright-report["']/, 'relatórios de teste não devem ir para produção');
assert.match(buildScript, /["']test-results["']/, 'resultados de teste não devem ir para produção');

const endpoint = read('api/enviar-lead.php');
assert.match(endpoint, /\.data/, 'leads devem ser armazenados em diretório protegido');
assert.match(endpoint, /rate/i, 'endpoint deve possuir limitação básica de frequência');
assert.ok(exists('api/.data/.htaccess'), 'o diretório privado de leads deve negar acesso HTTP');

console.log(`OK: ${routes.length} páginas cobertas pela auditoria estrutural.`);
