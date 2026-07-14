import { test, expect } from '@playwright/test';

const pages = [
  { path: '/servicos/', id: 'servicos', h1: 'Cada viagem pede uma lógica operacional diferente.', marker: 'Matriz de escolha' },
  { path: '/frota/', id: 'frota', h1: 'Escolha a categoria pela operação, não apenas pela quantidade.', marker: 'Critérios de escolha' },
  { path: '/empresa/', id: 'empresa', h1: 'Planejamento antes do embarque. Clareza durante toda a operação.', marker: 'Dados cadastrais' },
  { path: '/orcamento/', id: 'orcamento', h1: 'Conte a rota. Nós organizamos o próximo passo.', marker: 'Resumo da solicitação' },
  { path: '/contato/', id: 'contato', h1: 'Fale com a equipe certa, pelo canal mais direto.', marker: 'Canais oficiais' },
  { path: '/servicos/aluguel-de-onibus/', id: 'service-aluguel-de-onibus', h1: 'Aluguel de ônibus para grupos que precisam de uma operação completa.', marker: 'Escolha a categoria pela operação' },
  { path: '/servicos/fretamento-corporativo/', id: 'service-fretamento-corporativo', h1: 'Fretamento corporativo desenhado para turnos, pessoas e pontos reais.', marker: 'Turnos, adesão e pontos de embarque' },
  { path: '/servicos/turismo-excursoes/', id: 'service-turismo-excursoes', h1: 'Turismo e excursões com roteiro, horários e grupo no mesmo plano.', marker: 'Programação, paradas e experiência do grupo' },
  { path: '/servicos/romarias/', id: 'service-romarias', h1: 'Romarias organizadas do primeiro ponto de encontro ao retorno.', marker: 'Pontos de encontro e horários da jornada' },
  { path: '/servicos/eventos/', id: 'service-eventos', h1: 'Eventos e congressos com chegada e saída sincronizadas.', marker: 'Chegada, dispersão e contingência' },
  { path: '/servicos/escolas-formaturas/', id: 'service-escolas-formaturas', h1: 'Escolas e formaturas com responsáveis, horários e roteiro definidos.', marker: 'Responsáveis, autorizações e horários' },
  { path: '/servicos/bandas-producoes/', id: 'service-bandas-producoes', h1: 'Bandas e produções com agenda técnica e logística no mesmo roteiro.', marker: 'Agenda técnica, equipe e equipamentos' },
  { path: '/servicos/transfers/', id: 'service-transfers', h1: 'Transfers e city tour com voo, bagagem e destino acompanhados.', marker: 'Voo, bagagem, espera e roteiro urbano' },
];

for (const item of pages) {
  test(`${item.path} renderiza a página correta sem quebras`, async ({ page }) => {
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(`console: ${msg.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(item.path, { waitUntil: 'domcontentloaded' });

    await expect(page.locator('body')).toHaveAttribute('data-page', item.id);
    await expect(page.locator('header.site-header')).toBeVisible();
    await expect(page.locator('main#conteudo h1')).toHaveText(item.h1);
    await expect(page.getByText(item.marker, { exact: false }).first()).toBeVisible();
    await expect(page.locator('footer.site-footer')).toBeVisible();
    await expect(page.locator('a[href="/orcamento/"]').first()).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `overflow horizontal em ${item.path}`).toBeLessThanOrEqual(1);
    expect(errors, `erros no navegador em ${item.path}`).toEqual([]);
  });
}

test('orçamento recebe serviço pela URL e valida datas', async ({ page }) => {
  await page.goto('/orcamento/?servico=Romarias', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#service')).toHaveValue('Romarias');

  await page.locator('#date-out').fill('2026-08-20');
  await page.locator('#date-return').fill('2026-08-19');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#date-return')).toHaveAttribute('aria-invalid', 'true');
});

test('orçamento envia uma única vez e mostra protocolo', async ({ page }) => {
  let requests = 0;
  await page.route('**/api/enviar-lead.php', async route => {
    requests += 1;
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, protocolo: 'GB-TESTE-001' }) });
  });

  await page.goto('/orcamento/', { waitUntil: 'domcontentloaded' });
  await page.locator('#name').fill('Cliente Teste');
  await page.locator('#email').fill('cliente@example.com');
  await page.locator('#phone').fill('(11) 99999-9999');
  await page.locator('#service').selectOption({ label: 'Eventos e congressos' });
  await page.locator('#origin').fill('Osasco');
  await page.locator('#destination').fill('São Paulo');
  await page.locator('#date-out').fill('2026-08-20');
  await page.locator('#passengers').fill('40');
  await page.locator('input[name="consentimento"]').check();
  await page.locator('button[type="submit"]').dblclick();

  await expect(page.locator('.form-alert')).toContainText('GB-TESTE-001');
  expect(requests).toBe(1);
});
