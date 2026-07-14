<?php
declare(strict_types=1);

$root = dirname(__DIR__) . '/dist';
$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$file = realpath($root . $path);

if ($path !== '/' && $file !== false && str_starts_with($file, realpath($root)) && is_file($file)) {
    return false;
}

require $root . '/index.php';
