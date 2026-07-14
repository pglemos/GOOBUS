<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Método não permitido.']);
}

$contentType = strtolower((string)($_SERVER['CONTENT_TYPE'] ?? ''));
if ($contentType !== '' && !str_contains($contentType, 'application/json') && !str_contains($contentType, 'application/x-www-form-urlencoded') && !str_contains($contentType, 'multipart/form-data')) {
    respond(415, ['ok' => false, 'message' => 'Formato de envio não suportado.']);
}

$raw = file_get_contents('php://input') ?: '';
$data = str_contains($contentType, 'application/json') ? json_decode($raw, true) : $_POST;
if (!is_array($data)) {
    respond(400, ['ok' => false, 'message' => 'Dados inválidos.']);
}

if (!empty($data['website'] ?? '')) {
    respond(200, ['ok' => true, 'protocolo' => 'GB-' . date('Ymd-His')]);
}

function clean_text(mixed $value, int $max = 2000): string {
    $text = trim((string)$value);
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
    return function_exists('mb_substr') ? mb_substr($text, 0, $max) : substr($text, 0, $max);
}

$dataDir = __DIR__ . '/.data';
if (!is_dir($dataDir) && !mkdir($dataDir, 0750, true) && !is_dir($dataDir)) {
    respond(500, ['ok' => false, 'message' => 'Não foi possível registrar a solicitação.']);
}

$remoteAddress = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$ipHash = hash('sha256', $remoteAddress . date('Y-m-d'));
$rateFile = $dataDir . '/rate-' . substr($ipHash, 0, 24) . '.json';
$rateWindow = 600;
$rateLimit = 5;
$now = time();
$attempts = [];
if (is_file($rateFile)) {
    $decoded = json_decode((string)file_get_contents($rateFile), true);
    if (is_array($decoded)) $attempts = array_values(array_filter($decoded, static fn($timestamp) => is_int($timestamp) && $timestamp > $now - $rateWindow));
}
if (count($attempts) >= $rateLimit) {
    header('Retry-After: 600');
    respond(429, ['ok' => false, 'message' => 'Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.']);
}
$attempts[] = $now;
file_put_contents($rateFile, json_encode($attempts), LOCK_EX);

$kind = clean_text($data['tipo'] ?? 'budget', 40);
$name = clean_text($data['nome'] ?? '', 140);
$email = filter_var(trim((string)($data['email'] ?? '')), FILTER_VALIDATE_EMAIL) ?: '';
$phone = clean_text($data['telefone'] ?? '', 60);
$consent = clean_text($data['consentimento'] ?? '', 20);

if (!in_array($kind, ['budget', 'contact'], true)) $kind = 'budget';
$requiredOk = $name !== '' && $email !== '' && $consent !== '';

if ($kind === 'budget') {
    $requiredOk = $requiredOk
        && clean_text($data['servico'] ?? '', 180) !== ''
        && clean_text($data['origem'] ?? '', 180) !== ''
        && clean_text($data['destino'] ?? '', 180) !== ''
        && preg_match('/^\d{4}-\d{2}-\d{2}$/', clean_text($data['dataIda'] ?? '', 30)) === 1
        && (int)($data['passageiros'] ?? 0) > 0
        && preg_replace('/\D/', '', $phone) !== '';
} else {
    $requiredOk = $requiredOk
        && clean_text($data['assunto'] ?? '', 180) !== ''
        && clean_text($data['mensagem'] ?? '', 4000) !== '';
}

if (!$requiredOk) {
    respond(422, ['ok' => false, 'message' => 'Preencha os campos obrigatórios com dados válidos.']);
}

$departure = clean_text($data['dataIda'] ?? '', 30);
$returnDate = clean_text($data['dataRetorno'] ?? '', 30);
if ($kind === 'budget' && $returnDate !== '' && $returnDate < $departure) {
    respond(422, ['ok' => false, 'message' => 'A data de retorno não pode ser anterior à data de ida.']);
}

$protocol = 'GB-' . date('Ymd-His') . '-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 6));
$record = [
    'protocolo' => $protocol,
    'tipo' => $kind,
    'nome' => $name,
    'empresa' => clean_text($data['empresa'] ?? '', 180),
    'email' => $email,
    'telefone' => $phone,
    'servico' => clean_text($data['servico'] ?? '', 180),
    'origem' => clean_text($data['origem'] ?? '', 180),
    'destino' => clean_text($data['destino'] ?? '', 180),
    'dataIda' => $departure,
    'dataRetorno' => $returnDate,
    'passageiros' => (int)($data['passageiros'] ?? 0),
    'assunto' => clean_text($data['assunto'] ?? '', 180),
    'mensagem' => clean_text($data['mensagem'] ?? '', 4000),
    'observacoes' => clean_text($data['observacoes'] ?? '', 4000),
    'pagina' => clean_text($data['pagina'] ?? '', 300),
    'consentimento' => true,
    'ipHash' => $ipHash,
    'createdAt' => date(DATE_ATOM),
    'status' => 'novo'
];

$leadLine = json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
if (file_put_contents($dataDir . '/leads.ndjson', $leadLine, FILE_APPEND | LOCK_EX) === false) {
    respond(500, ['ok' => false, 'message' => 'Não foi possível registrar a solicitação.']);
}

$subject = $kind === 'contact'
    ? "[GOOBUS] Contato {$protocol} - " . ($record['assunto'] ?: $name)
    : "[GOOBUS] Orçamento {$protocol} - " . ($record['servico'] ?: 'Transporte');
$lines = [
    "Protocolo: {$protocol}", "Tipo: {$kind}", "Nome: {$name}", "Empresa/grupo: {$record['empresa']}",
    "E-mail: {$email}", "Telefone: {$phone}", "Serviço: {$record['servico']}", "Origem: {$record['origem']}",
    "Destino: {$record['destino']}", "Data de ida: {$record['dataIda']}", "Data de retorno: {$record['dataRetorno']}",
    "Passageiros: {$record['passageiros']}", "Assunto: {$record['assunto']}", "Mensagem: {$record['mensagem']}",
    "Observações: {$record['observacoes']}", "Página: {$record['pagina']}", "Recebido em: {$record['createdAt']}"
];
$headers = [
    'From: Site GOOBUS <contato@goobuss.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: GOOBUS Website'
];
@mail('contato@goobuss.com', $subject, implode("\n", $lines), implode("\r\n", $headers));

respond(200, ['ok' => true, 'protocolo' => $protocol]);
