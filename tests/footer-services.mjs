import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('assets/app.js', 'utf8');
const footerStart = source.indexOf('function footer()');
const footerEnd = source.indexOf('function trustRail()', footerStart);

assert.notEqual(footerStart, -1, 'função footer não encontrada');
assert.notEqual(footerEnd, -1, 'fim da função footer não encontrado');

const footerSource = source.slice(footerStart, footerEnd);

assert.doesNotMatch(
  footerSource,
  /SERVICES\.slice\s*\(/,
  'o rodapé não pode limitar a quantidade de serviços com slice()'
);

assert.match(
  footerSource,
  /SERVICES\.map\s*\(service\s*=>/,
  'o rodapé deve renderizar todos os serviços cadastrados em SERVICES'
);

console.log('OK: rodapé renderiza todos os serviços cadastrados.');
