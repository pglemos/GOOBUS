<?php
declare(strict_types=1);
header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-GOOBUS-Build: 20260714-3');
$indexFile = __DIR__ . '/index.html';
if (!is_file($indexFile)) {
    http_response_code(500);
    echo '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>GOOBUS</title><body><h1>Arquivo principal indisponível</h1><p>Entre em contato: contato@goobuss.com</p></body></html>';
    exit;
}
readfile($indexFile);
