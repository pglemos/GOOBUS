import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
const ignored = new Set([
  '.git',
  '.github',
  'dist',
  'node_modules',
  'scripts',
  'tests',
  'docs',
  'playwright-report',
  'test-results',
  'package.json',
  'package-lock.json',
  'playwright.config.mjs',
  'README.md',
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (ignored.has(entry.name)) continue;
  await cp(resolve(root, entry.name), resolve(output, entry.name), { recursive: true, force: true });
}

console.log('GOOBUS build 20260714-4 concluído em dist/.');
