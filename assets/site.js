/* GOOBUS_LEGACY_BRIDGE
   Converte páginas HTML antigas em shells do sistema cinematográfico atual. */
(() => {
  'use strict';
  const BUILD = '20260714-3';
  const pathname = location.pathname.replace(/\/+$/, '') || '/';
  const serviceMatch = pathname.match(/^\/servicos\/([^/]+)$/);
  const pageMap = {'/':'home','/empresa':'empresa','/servicos':'servicos','/frota':'frota','/orcamento':'orcamento','/contato':'contato','/politica-de-privacidade':'privacidade'};
  const page = serviceMatch ? `service-${serviceMatch[1]}` : (pageMap[pathname] || 'home');
  document.body.dataset.page = page;
  document.body.dataset.build = BUILD;
  document.body.innerHTML = '<div id="app"><noscript>Ative o JavaScript para visualizar o site GOOBUS.</noscript></div>';
  document.querySelectorAll('link[href*="theme.css"],script[src*="site.js"]').forEach(node => node.remove());
  const ensureStyle = href => {
    if ([...document.styleSheets].some(sheet => sheet.href && sheet.href.includes(href.split('?')[0]))) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };
  ensureStyle(`/assets/cinematic.css?v=${BUILD}`);
  ensureStyle(`/assets/cinematic-pages-v3.css?v=${BUILD}`);
  const script = document.createElement('script');
  script.src = `/assets/cinematic.js?v=${BUILD}`;
  script.onload = () => document.body.classList.add('goobus-bridge-ready');
  script.onerror = () => {
    document.body.classList.add('goobus-bridge-ready');
    document.body.innerHTML = '<main style="padding:40px;color:#fff;background:#031522;font-family:Arial,sans-serif"><h1>GOOBUS</h1><p>Não foi possível carregar esta página. Fale com a equipe pelo WhatsApp ou escreva para contato@goobuss.com.</p></main>';
  };
  document.body.appendChild(script);
})();
