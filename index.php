<?php
declare(strict_types=1);

const GOOBUS_BUILD = '20260714-4';

function html(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$servicePages = [
    'servicos/aluguel-de-onibus' => ['id' => 'service-aluguel-de-onibus', 'title' => 'Aluguel de ônibus | GOOBUS', 'description' => 'Aluguel de ônibus, micro-ônibus e vans com motorista, com rota, horários, bagagens e categoria avaliados para o grupo.', 'label' => 'Aluguel de ônibus', 'image' => '/assets/img/frota-real-onibus-convencional-20260606.jpg'],
    'servicos/fretamento-corporativo' => ['id' => 'service-fretamento-corporativo', 'title' => 'Fretamento corporativo | GOOBUS', 'description' => 'Fretamento corporativo para turnos, equipes e pontos de embarque, com planejamento de rotas recorrentes ou pontuais.', 'label' => 'Fretamento corporativo', 'image' => '/assets/img/seg-empresas.jpg'],
    'servicos/turismo-excursoes' => ['id' => 'service-turismo-excursoes', 'title' => 'Turismo e excursões | GOOBUS', 'description' => 'Transporte para turismo e excursões com programação, paradas, bagagens, responsáveis e horários organizados.', 'label' => 'Turismo e excursões', 'image' => '/assets/img/seg-turismo.jpg'],
    'servicos/romarias' => ['id' => 'service-romarias', 'title' => 'Romarias | GOOBUS', 'description' => 'Transporte para romarias, retiros e encontros religiosos com pontos de embarque, horários e retorno planejados.', 'label' => 'Romarias', 'image' => '/assets/img/seg-romarias.jpg'],
    'servicos/eventos' => ['id' => 'service-eventos', 'title' => 'Eventos e congressos | GOOBUS', 'description' => 'Logística de transporte para eventos e congressos com janelas de chegada, dispersão, pontos e responsáveis.', 'label' => 'Eventos e congressos', 'image' => '/assets/img/seg-eventos.jpg'],
    'servicos/escolas-formaturas' => ['id' => 'service-escolas-formaturas', 'title' => 'Escolas e formaturas | GOOBUS', 'description' => 'Transporte para escolas, visitas técnicas e formaturas com responsáveis, horários e roteiro definidos.', 'label' => 'Escolas e formaturas', 'image' => '/assets/img/seg-escolas.jpg'],
    'servicos/bandas-producoes' => ['id' => 'service-bandas-producoes', 'title' => 'Bandas e produções | GOOBUS', 'description' => 'Transporte de bandas, artistas e produção com agenda técnica, equipe, instrumentos, cases e equipamentos considerados.', 'label' => 'Bandas e produções', 'image' => '/assets/img/seg-bandas.jpg'],
    'servicos/transfers' => ['id' => 'service-transfers', 'title' => 'Transfers e city tour | GOOBUS', 'description' => 'Transfers e city tour com voo, bagagem, espera, hotéis, empresas, eventos e sequência de destinos planejada.', 'label' => 'Transfers e city tour', 'image' => '/assets/img/seg-aeroportos.jpg'],
];

$pageMap = array_merge([
    '' => ['id' => 'home', 'title' => 'GOOBUS | Fretamento corporativo e transporte de grupos', 'description' => 'Fretamento corporativo, aluguel de ônibus, turismo, eventos e transfers com planejamento de rotas e atendimento direto.', 'label' => 'Início', 'image' => '/assets/img/brand-mockups/goobus-bus-rebrand-hero.png'],
    'servicos' => ['id' => 'servicos', 'title' => 'Serviços de transporte | GOOBUS', 'description' => 'Aluguel de ônibus, fretamento corporativo, turismo, romarias, eventos, escolas, produções, transfers e city tour.', 'label' => 'Serviços', 'image' => '/assets/img/brand-mockups/goobus-bus-rebrand-hero.png'],
    'frota' => ['id' => 'frota', 'title' => 'Frota e categorias de veículos | GOOBUS', 'description' => 'Ônibus, micro-ônibus e vans avaliados conforme passageiros, bagagens, acessos, duração e conforto da operação.', 'label' => 'Frota', 'image' => '/assets/img/frota-real-onibus-executivo-20260606.jpg'],
    'empresa' => ['id' => 'empresa', 'title' => 'Empresa | GOOBUS', 'description' => 'Conheça a GOOBUS, seu método de planejamento, compromissos operacionais e dados cadastrais.', 'label' => 'Empresa', 'image' => '/assets/img/seg-empresas.jpg'],
    'orcamento' => ['id' => 'orcamento', 'title' => 'Solicitar orçamento | GOOBUS', 'description' => 'Envie serviço, origem, destino, datas e passageiros para receber atendimento comercial e proposta sob medida.', 'label' => 'Orçamento', 'image' => '/assets/img/op-planejamento-rota.jpg'],
    'contato' => ['id' => 'contato', 'title' => 'Contato | GOOBUS', 'description' => 'Fale com a GOOBUS por WhatsApp, e-mail ou formulário para assuntos comerciais e solicitações de transporte.', 'label' => 'Contato', 'image' => '/assets/img/brand-mockups/goobus-bus-rebrand-hero.png'],
    'politica-de-privacidade' => ['id' => 'privacidade', 'title' => 'Política de privacidade | GOOBUS', 'description' => 'Informações sobre coleta, finalidade, armazenamento e direitos relacionados aos dados enviados à GOOBUS.', 'label' => 'Política de privacidade', 'image' => '/assets/img/op-planejamento-rota.jpg'],
], $servicePages);

$requestedPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$normalizedPath = trim(rawurldecode($requestedPath), '/');
$normalizedPath = preg_replace('#/+#', '/', $normalizedPath) ?? '';
$page = $pageMap[$normalizedPath] ?? [
    'id' => 'not-found',
    'title' => 'Página não encontrada | GOOBUS',
    'description' => 'A página solicitada não existe ou foi movida.',
    'label' => 'Erro 404',
    'image' => '/assets/img/op-planejamento-rota.jpg',
];

if ($page['id'] === 'not-found') {
    http_response_code(404);
}

$canonicalPath = $normalizedPath === '' ? '/' : '/' . $normalizedPath . '/';
$canonical = 'https://goobuss.com' . $canonicalPath;
$ogImage = 'https://goobuss.com' . $page['image'];

header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
header('X-GOOBUS-Build: ' . GOOBUS_BUILD);
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');
?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="goobus-build" content="<?= html(GOOBUS_BUILD) ?>">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title><?= html($page['title']) ?></title>
  <meta name="description" content="<?= html($page['description']) ?>">
  <meta name="theme-color" content="#031522">
  <meta name="robots" content="<?= $page['id'] === 'not-found' ? 'noindex,follow' : 'index,follow' ?>">
  <link rel="canonical" href="<?= html($canonical) ?>">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="GOOBUS">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:title" content="<?= html($page['title']) ?>">
  <meta property="og:description" content="<?= html($page['description']) ?>">
  <meta property="og:url" content="<?= html($canonical) ?>">
  <meta property="og:image" content="<?= html($ogImage) ?>">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://tile.openstreetmap.org">
  <link rel="stylesheet" href="/assets/cinematic.css?v=20260714-4">
  <link rel="stylesheet" href="/assets/cinematic-pages-v4.css?v=20260714-4">
</head>
<body data-page="<?= html($page['id']) ?>" data-build="<?= html(GOOBUS_BUILD) ?>">
  <div id="app"><noscript>Ative o JavaScript para visualizar o site GOOBUS. Contato: contato@goobuss.com.</noscript></div>
  <script src="/assets/cinematic-data.js?v=20260714-4" defer></script>
  <script src="/assets/cinematic-components.js?v=20260714-4" defer></script>
  <script src="/assets/cinematic-content-pages.js?v=20260714-4" defer></script>
  <script src="/assets/cinematic-form-pages.js?v=20260714-4" defer></script>
  <script src="/assets/cinematic.js?v=20260714-4" defer></script>
</body>
</html>
