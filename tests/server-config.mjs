import assert from 'node:assert/strict';
import fs from 'node:fs';

const htaccess = fs.readFileSync('.htaccess', 'utf8');
assert.match(htaccess, /DirectoryIndex\s+index\.html(?:\s|$)/, 'DirectoryIndex deve conter somente index.html');
assert.doesNotMatch(htaccess, /DirectoryIndex[^\n]*index\.php/, 'index.php não pode ser entrada alternativa');
assert.match(htaccess, /RewriteCond %\{REQUEST_URI\} !\^\/$/, 'a raiz deve ser preservada ao retirar a barra final');
assert.match(htaccess, /RewriteRule \^\(\.\+\?\)\/\+\$ \/\$1 \[R=301,L,NE\]/, 'falta redirecionamento permanente da barra final');
assert.match(htaccess, /RewriteRule \^\(empresa\|servicos\|frota\|orcamento\|contato\|politica-de-privacidade\)\$/, 'rotas principais não estão enumeradas');
assert.match(htaccess, /RewriteRule \^servicos\/\(aluguel-de-onibus\|fretamento-corporativo\|turismo-excursoes/, 'rotas de serviço não estão enumeradas');
assert.match(htaccess, /RewriteRule \^ - \[R=404,L\]/, 'rotas desconhecidas devem retornar 404');

console.log('OK: Apache canoniza URLs sem barra e usa uma única entrada.');
