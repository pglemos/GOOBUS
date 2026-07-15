<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método não permitido.']);
    exit;
}
$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;
if (!empty($data['website'] ?? '')) {
    echo json_encode(['ok' => true, 'protocolo' => 'GB-' . date('Ymd-His')]);
    exit;
}
function clean_text($value, int $max = 2000): string {
    $text = trim((string)$value);
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
    return mb_substr($text, 0, $max);
}
$kind = clean_text($data['tipo'] ?? 'budget', 40);
$name = clean_text($data['nome'] ?? '', 140);
$email = filter_var(trim((string)($data['email'] ?? '')), FILTER_VALIDATE_EMAIL) ?: '';
$phone = clean_text($data['telefone'] ?? '', 60);
$consent = clean_text($data['consentimento'] ?? '', 20);
$requiredOk = $name !== '' && $email !== '' && $consent !== '';
if ($kind !== 'contact') {
    $requiredOk = $requiredOk && clean_text($data['servico'] ?? '', 180) !== '' && clean_text($data['origem'] ?? '', 180) !== '' && clean_text($data['destino'] ?? '', 180) !== '' && clean_text($data['dataIda'] ?? '', 30) !== '' && (int)($data['passageiros'] ?? 0) > 0 && $phone !== '';
} else {
    $requiredOk = $requiredOk && clean_text($data['assunto'] ?? '', 180) !== '' && clean_text($data['mensagem'] ?? '', 4000) !== '';
}
if (!$requiredOk) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Preencha os campos obrigatórios.']);
    exit;
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
    'dataIda' => clean_text($data['dataIda'] ?? '', 30),
    'dataRetorno' => clean_text($data['dataRetorno'] ?? '', 30),
    'passageiros' => (int)($data['passageiros'] ?? 0),
    'assunto' => clean_text($data['assunto'] ?? '', 180),
    'mensagem' => clean_text($data['mensagem'] ?? '', 4000),
    'observacoes' => clean_text($data['observacoes'] ?? '', 4000),
    'pagina' => clean_text($data['pagina'] ?? '', 300),
    'consentimento' => true,
    'ipHash' => hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . date('Y-m-d')),
    'createdAt' => date(DATE_ATOM),
    'status' => 'novo'
];
$dataDir = __DIR__ . '/data';
if (!is_dir($dataDir)) @mkdir($dataDir, 0750, true);
@file_put_contents($dataDir . '/leads.ndjson', json_encode($record, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);
$subject = $kind === 'contact' ? "[GOOBUS] Contato {$protocol} - " . ($record['assunto'] ?: $name) : "[GOOBUS] Orçamento {$protocol} - " . ($record['servico'] ?: 'Transporte');
$lines = ["Protocolo: {$protocol}","Tipo: {$kind}","Nome: {$name}","Empresa/grupo: {$record['empresa']}","E-mail: {$email}","Telefone: {$phone}","Serviço: {$record['servico']}","Origem: {$record['origem']}","Destino: {$record['destino']}","Data de ida: {$record['dataIda']}","Data de retorno: {$record['dataRetorno']}","Passageiros: {$record['passageiros']}","Assunto: {$record['assunto']}","Mensagem: {$record['mensagem']}","Observações: {$record['observacoes']}","Página: {$record['pagina']}","Recebido em: {$record['createdAt']}"];
$body = implode("\n", $lines);
$headers = ['From: Site GOOBUS <contato@goobuss.com>','Reply-To: ' . $name . ' <' . $email . '>','Content-Type: text/plain; charset=UTF-8','X-Mailer: GOOBUS Website'];
@mail('contato@goobuss.com', $subject, $body, implode("\r\n", $headers));
echo json_encode(['ok' => true, 'protocolo' => $protocol], JSON_UNESCAPED_UNICODE);
