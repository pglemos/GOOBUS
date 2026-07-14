import assert from 'node:assert/strict';
import fs from 'node:fs';

const htaccess = fs.readFileSync('.htaccess', 'utf8');
assert.match(htaccess, /DirectoryIndex\s+index\.html(?:\s|$)/, 'DirectoryIndex deve conter somente index.html');
assert.doesNotMatch(htaccess, /DirectoryIndex[^\n]*index\.php/, 'index.php não pode ser entrada alternativa');
assert.match(htaccess, /RewriteRule \^index\\\.\(\?:html\|php\)\$ \/ \[R=301,L,NE\]/, 'index antigo da raiz deve redirecionar para /');
assert.match(htaccess, /RewriteRule \^\(\.\+\)\/index\\\.\(\?:html\|php\)\$ \/\$1 \[R=301,L,NE\]/, 'index antigo aninhado deve preservar a rota');
assert.match(htaccess, /RewriteCond %\{REQUEST_URI\} !\^\/\$/, 'a raiz deve ser preservada ao retirar a barra final');
assert.match(htaccess, /RewriteRule \^\(\.\+\?\)\/\+\$ \/\$1 \[R=301,L,NE\]/, 'falta redirecionamento permanente da barra final');
assert.match(htaccess, /RewriteRule \^\(empresa\|servicos\|frota\|orcamento\|contato\|politica-de-privacidade\)\$/, 'rotas principais não estão enumeradas');
assert.match(htaccess, /RewriteRule \^servicos\/\(aluguel-de-onibus\|fretamento-corporativo\|turismo-excursoes/, 'rotas de serviço não estão enumeradas');
assert.match(htaccess, /RewriteRule \^ - \[R=404,L\]/, 'rotas desconhecidas devem retornar 404');

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 15, 'sitemap deve conter as 15 rotas públicas');
for (const url of urls) {
  if (url === 'https://goobuss.com/') continue;
  assert.equal(url.endsWith('/'), false, `sitemap contém barra final: ${url}`);
}

console.log('OK: Apache e sitemap usam URLs canônicas sem barra final.');
