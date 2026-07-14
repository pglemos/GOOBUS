(() => {
  'use strict';

  const servicePages = new Set([
    'aluguel-de-onibus',
    'fretamento-corporativo',
    'turismo-excursoes',
    'romarias',
    'eventos',
    'escolas-formaturas',
    'bandas-producoes',
    'transfers'
  ]);

  const directPages = {
    '': 'home',
    empresa: 'empresa',
    servicos: 'servicos',
    frota: 'frota',
    orcamento: 'orcamento',
    contato: 'contato',
    'politica-de-privacidade': 'privacidade'
  };

  function normalize(pathname) {
    return decodeURIComponent(pathname || '/')
      .replace(/\/index\.(?:html|php)$/i, '')
      .replace(/\.html$/i, '')
      .replace(/^\/+|\/+$/g, '');
  }

  function resolvePage(pathname = window.location.pathname) {
    const clean = normalize(pathname);
    if (Object.prototype.hasOwnProperty.call(directPages, clean)) return directPages[clean];
    const [section, slug] = clean.split('/');
    if (section === 'servicos' && servicePages.has(slug)) return `service-${slug}`;
    return 'not-found';
  }

  const page = resolvePage(location.pathname);
  document.body.dataset.page = page;
  document.body.dataset.routeSource = 'pathname-v4';
  window.GOOBUS_ROUTE = Object.freeze({ page, pathname: location.pathname, resolvePage });
})();
