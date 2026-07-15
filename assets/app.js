(() => {
  'use strict';

  const COMPANY = {
    phone: '(11) 98493-1178',
    phoneRaw: '5511984931178',
    email: 'contato@goobuss.com',
    address: 'Av. Hilário Pereira de Souza, 406, Sala 1401, Centro, Osasco - SP',
    cnpj: '49.151.280/0001-28'
  };

  const ASSET = '/assets/images/';
  const IMG = {
    hero: `${ASSET}goobus-bus-hero.png`,
    corporate: `${ASSET}servico-fretamento-corporativo.jpg`,
    tourism: `${ASSET}servico-turismo-excursoes.jpg`,
    transfers: `${ASSET}servico-transfers.jpg`,
    events: `${ASSET}servico-eventos.jpg`,
    schools: `${ASSET}servico-escolas-formaturas.jpg`,
    pilgrimages: `${ASSET}servico-romarias.jpg`,
    bands: `${ASSET}servico-bandas-producoes.jpg`,
    route: `${ASSET}operacao-planejamento-rota.jpg`,
    safety: `${ASSET}operacao-inspecao-seguranca.jpg`,
    bus: `${ASSET}onibus-convencional.jpg`,
    executive: `${ASSET}onibus-executivo.jpg`,
    micro: `${ASSET}micro-onibus.jpg`,
    van: `${ASSET}van-executiva.jpg`
  };

  const ICON = {
    arrow: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.7 7.1L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"/><path d="M8.5 8.3c.5 2 2.1 3.7 4.2 4.5l1.1-1.1c.2-.2.5-.2.7-.1l2 .9c.3.1.4.4.3.7-.4 1.5-1.5 2.3-3 2.2-4.2-.3-7.8-3.8-8.2-8-.1-1.5.7-2.6 2.2-3 .3-.1.6.1.7.3l.9 2c.1.2.1.5-.1.7L8.5 8.3Z"/></svg>',
    shield: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    route: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3"/></svg>',
    users: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    clock: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  const SERVICES = [
    {
      slug: 'aluguel-de-onibus', title: 'Aluguel de ônibus', label: 'Viagens e grupos', image: IMG.bus,
      intro: 'Ônibus, micro-ônibus e vans com motorista para viagens, eventos, turismo e deslocamentos sob demanda.',
      hero: 'Seu grupo, o veículo certo e um roteiro sem improviso.',
      briefing: ['Número de passageiros e perfil do grupo', 'Origem, destino, paradas e acessos', 'Datas, horários e duração prevista', 'Bagagens, materiais e comodidades'],
      benefits: [['Escolha orientada', 'A categoria é indicada a partir do grupo, da rota e das bagagens.'], ['Operação completa', 'Motorista, veículo e condições entram na mesma proposta.'], ['Uso flexível', 'Viagens pontuais, eventos, turismo e deslocamentos especiais.']],
      scenarios: ['Excursões e viagens em grupo', 'Eventos e congressos', 'Romarias e retiros', 'Transfers e city tour'],
      faq: [['A GOOBUS aluga somente ônibus?', 'Não. A categoria pode ser ônibus, micro-ônibus ou van executiva, conforme passageiros, rota e disponibilidade.'], ['O motorista está incluído?', 'Sim. O serviço é cotado com motorista e condições operacionais definidas na proposta.'], ['Posso incluir várias paradas?', 'Sim. Informe todos os pontos para avaliação de tempo, acesso e categoria.']]
    },
    {
      slug: 'fretamento-corporativo', title: 'Fretamento corporativo', label: 'Empresas', image: IMG.corporate,
      intro: 'Rotas recorrentes ou pontuais para colaboradores, visitantes e equipes, estruturadas a partir de turnos e pontos reais.',
      hero: 'Mobilidade para empresas que precisam de previsibilidade.',
      briefing: ['Turnos e frequência da operação', 'Endereços ou polos de embarque', 'Quantidade de colaboradores por faixa', 'Janelas de entrada e saída'],
      benefits: [['Rotas estruturadas', 'Pontos, horários e frequência são avaliados antes da proposta.'], ['Gestão centralizada', 'RH, Facilities ou Operações mantêm um canal direto com a GOOBUS.'], ['Escala adequada', 'Operações eventuais, recorrentes ou contínuas recebem escopo próprio.']],
      scenarios: ['Transporte diário de colaboradores', 'Treinamentos e convenções', 'Visitas técnicas e integração', 'Operações em turnos'],
      faq: [['Atendem contratos recorrentes?', 'Sim. A proposta pode contemplar operações eventuais, recorrentes ou contínuas.'], ['É possível usar vários pontos de embarque?', 'Sim. Os pontos são avaliados com turnos, demanda e tempo de percurso.'], ['A empresa recebe documentação comercial?', 'Dados cadastrais, condições e documentos aplicáveis são organizados na proposta e contratação.']]
    },
    {
      slug: 'turismo-excursoes', title: 'Turismo e excursões', label: 'Turismo', image: IMG.tourism,
      intro: 'Roteiros para grupos, agências, associações e viagens particulares, com horários e paradas organizados.',
      hero: 'A viagem começa antes do destino aparecer na janela.',
      briefing: ['Programação de ida, retorno e paradas', 'Volume de bagagens', 'Perfil do grupo e responsáveis', 'Hospedagem, atrações e horários sensíveis'],
      benefits: [['Roteiro organizado', 'Saída, paradas, chegada e retorno entram no mesmo planejamento.'], ['Conforto coerente', 'A categoria considera distância, duração e perfil do grupo.'], ['Atendimento a grupos', 'Agências, associações, famílias e excursões particulares.']],
      scenarios: ['Passeios e bate-volta', 'Roteiros de vários dias', 'Viagens de associações', 'City tours'],
      faq: [['Atendem viagens de vários dias?', 'Sim. Hospedagem, agenda e deslocamentos intermediários devem entrar no briefing.'], ['Vocês criam o roteiro turístico?', 'A GOOBUS planeja o transporte. A programação turística pode ser alinhada com a agência ou responsável.'], ['É possível incluir paradas?', 'Sim. Paradas programadas precisam ser informadas para avaliação de tempo e acesso.']]
    },
    {
      slug: 'transfers', title: 'Transfers e city tour', label: 'Receptivo', image: IMG.transfers,
      intro: 'Traslados entre aeroportos, hotéis, empresas, eventos e pontos turísticos com bagagens previstas no planejamento.',
      hero: 'Do desembarque ao destino, com a agenda sob controle.',
      briefing: ['Aeroporto, terminal, hotel ou empresa', 'Número do voo e previsão de chegada', 'Bagagens e perfil dos passageiros', 'Tempo de espera e destino final'],
      benefits: [['Contexto do voo', 'Horário, terminal, destino e tempo de espera entram no briefing.'], ['Bagagem prevista', 'O volume informado orienta a escolha da categoria.'], ['Roteiro urbano', 'Transfer, receptivo e city tour podem fazer parte da mesma operação.']],
      scenarios: ['Aeroporto e hotel', 'Aeroporto e empresa', 'Receptivo de convidados', 'City tour para grupos'],
      faq: [['Atendem Guarulhos e Congonhas?', 'A disponibilidade é confirmada conforme data, origem, destino e horário solicitado.'], ['O motorista aguarda atrasos de voo?', 'Tempo de espera e condições precisam ser definidos na proposta. Informe o voo para avaliação.'], ['É possível combinar transfer e city tour?', 'Sim. O roteiro completo deve ser informado para dimensionamento de veículo e tempo.']]
    },
    {
      slug: 'eventos', title: 'Eventos e congressos', label: 'Eventos', image: IMG.events,
      intro: 'Logística de chegada e saída para feiras, congressos, festivais, confraternizações e grandes grupos.',
      hero: 'Quando o evento tem hora para começar, a mobilidade não pode improvisar.',
      briefing: ['Janelas de chegada e dispersão', 'Quantidade de participantes por horário', 'Pontos de encontro e responsáveis', 'Necessidades de credenciamento ou apoio'],
      benefits: [['Fluxo sincronizado', 'Chegadas e saídas são organizadas a partir da programação.'], ['Múltiplos grupos', 'Hotéis, aeroportos e polos podem ser tratados no mesmo plano.'], ['Contato centralizado', 'A produção mantém um canal direto com a equipe responsável.']],
      scenarios: ['Feiras e congressos', 'Confraternizações corporativas', 'Festivais e encontros', 'Convidados e equipes'],
      faq: [['Atendem vários hotéis ou pontos?', 'Sim. Informe a distribuição dos participantes para construir os circuitos.'], ['É possível trabalhar com horários escalonados?', 'Sim. Janelas de chegada e saída são essenciais para dimensionar a operação.'], ['Há apoio para a produção?', 'Responsáveis, pontos de encontro e necessidades de apoio são definidos na proposta.']]
    },
    {
      slug: 'escolas-formaturas', title: 'Escolas e formaturas', label: 'Instituições', image: IMG.schools,
      intro: 'Excursões escolares, visitas técnicas, atividades acadêmicas e formaturas com responsáveis e horários definidos.',
      hero: 'Transporte escolar eventual com responsabilidade claramente definida.',
      briefing: ['Instituição e contato responsável', 'Faixa etária e quantidade de passageiros', 'Programação e horários', 'Necessidades de bagagem ou materiais'],
      benefits: [['Responsável identificado', 'A instituição centraliza dados, autorizações e comunicação.'], ['Programação precisa', 'Embarque, atividade e retorno são tratados no mesmo roteiro.'], ['Categoria adequada', 'Passageiros, acessos e materiais orientam a escolha do veículo.']],
      scenarios: ['Visitas técnicas', 'Passeios e excursões', 'Formaturas e cerimônias', 'Eventos acadêmicos'],
      faq: [['Atendem crianças e adolescentes?', 'A operação é analisada conforme instituição responsável, faixa etária, acompanhantes e requisitos aplicáveis.'], ['A escola pode definir vários pontos?', 'Sim, desde que sejam informados para avaliação de rota e horário.'], ['É possível solicitar acessibilidade?', 'Sim. A necessidade deve ser informada para confirmação de veículo compatível.']]
    },
    {
      slug: 'romarias', title: 'Romarias', label: 'Fé e comunidade', image: IMG.pilgrimages,
      intro: 'Transporte para romarias, retiros, encontros religiosos e peregrinações com pontos de embarque claros.',
      hero: 'Uma jornada de fé começa com todos sabendo onde e quando embarcar.',
      briefing: ['Santuário, cidade ou evento de destino', 'Locais de embarque do grupo', 'Horários de celebrações e retorno', 'Perfil dos passageiros e bagagens'],
      benefits: [['Pontos organizados', 'Embarques podem ser distribuídos conforme a realidade do grupo.'], ['Agenda respeitada', 'Celebrações, paradas e retorno entram no planejamento.'], ['Atenção ao perfil', 'Duração, conforto e acessibilidade são avaliados conforme passageiros.']],
      scenarios: ['Romarias e peregrinações', 'Retiros e encontros religiosos', 'Congressos de igrejas', 'Viagens de comunidades'],
      faq: [['É possível embarcar em vários bairros?', 'Sim. Os pontos devem ser informados para análise de rota e tempo.'], ['Atendem viagens durante a madrugada?', 'Horários são avaliados conforme roteiro, disponibilidade e condições da proposta.'], ['Podemos levar materiais e bagagens?', 'Sim. O volume deve ser informado para escolha correta da categoria.']]
    },
    {
      slug: 'bandas-producoes', title: 'Bandas e produções', label: 'Produção', image: IMG.bands,
      intro: 'Deslocamento de artistas, produção e equipe técnica considerando agenda, instrumentos, bagagens e equipamentos.',
      hero: 'A equipe precisa chegar antes do show. Os equipamentos também.',
      briefing: ['Horários de passagem de som e show', 'Instrumentos, cases e equipamentos', 'Equipe artística e técnica', 'Hotéis, aeroportos e casas de evento'],
      benefits: [['Agenda crítica', 'Passagem de som, montagem e apresentação orientam os horários.'], ['Carga informada', 'Cases, instrumentos e bagagens entram no dimensionamento.'], ['Rota integrada', 'Aeroporto, hotel, venue e retorno podem compor a mesma agenda.']],
      scenarios: ['Turnês e apresentações', 'Festivais e eventos privados', 'Produções audiovisuais', 'Equipes técnicas'],
      faq: [['Transportam instrumentos e equipamentos?', 'O volume e o tipo de material precisam ser informados para avaliar espaço e categoria.'], ['Atendem agendas com vários destinos?', 'Sim. Cada trecho, horário e parada deve constar no briefing.'], ['É possível atender madrugada?', 'A disponibilidade e as condições são confirmadas na proposta.']]
    }
  ];

  const SERVICE_SLUGS = new Set(SERVICES.map(service => service.slug));
  const DIRECT_ROUTES = {
    '': 'home',
    empresa: 'empresa',
    servicos: 'servicos',
    frota: 'frota',
    orcamento: 'orcamento',
    contato: 'contato',
    'politica-de-privacidade': 'privacidade'
  };

  function normalizePath(pathname = '/') {
    return decodeURIComponent(pathname)
      .replace(/^\/+|\/+$/g, '');
  }

  function resolveRoute(pathname = '/') {
    const clean = normalizePath(pathname);
    if (Object.prototype.hasOwnProperty.call(DIRECT_ROUTES, clean)) return DIRECT_ROUTES[clean];
    const [section, slug, extra] = clean.split('/');
    if (!extra && section === 'servicos' && SERVICE_SLUGS.has(slug)) return `service-${slug}`;
    return 'not-found';
  }

  const route = resolveRoute(window.location.pathname);
  window.GOOBUS = Object.freeze({ resolveRoute, normalizePath, route });

  const root = document.querySelector('#app');
  if (!root) return;

  const wa = message => `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
  const image = (src, alt, extra = '') => `<img src="${src}" alt="${alt}" ${extra} onerror="this.style.opacity='.15';this.removeAttribute('src')">`;
  const serviceUrl = slug => `/servicos/${slug}`;

  function header() {
    const active = route.startsWith('service-') ? 'servicos' : route;
    const links = [
      ['servicos', '/servicos', 'Serviços'],
      ['frota', '/frota', 'Frota'],
      ['empresa', '/empresa', 'Empresa'],
      ['orcamento', '/orcamento', 'Orçamento'],
      ['contato', '/contato', 'Contato']
    ];
    const navigation = links.map(([id, href, label]) => `<a class="${active === id ? 'active' : ''}" href="${href}">${label}</a>`).join('');
    return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div class="page-progress" aria-hidden="true"></div>
      <div class="speed-layer" aria-hidden="true"><span></span><span></span><span></span></div>
      <header class="site-header"><div class="container site-header__inner">
        <a class="brand" href="/" aria-label="GOOBUS - Página inicial"><img src="/assets/brand/goobus-logo-dark.png" alt="GOOBUS" width="715" height="156"></a>
        <nav class="site-nav" aria-label="Navegação principal">${navigation}</nav>
        <div class="header-actions">
          <a class="header-whatsapp" href="${wa('Olá! Gostaria de falar com a equipe GOOBUS.')}" target="_blank" rel="noopener noreferrer">${ICON.whatsapp} ${COMPANY.phone}</a>
          <a class="button button--orange" href="/orcamento">Solicitar orçamento</a>
          <button class="menu-button" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
        </div>
      </div></header>
      <div class="mobile-menu" aria-hidden="true"><div class="mobile-menu__top"><img src="/assets/brand/goobus-logo-dark.png" alt="GOOBUS"><button type="button" aria-label="Fechar menu">×</button></div><nav>${navigation}</nav><div class="mobile-menu__actions"><a class="button button--orange" href="/orcamento">Solicitar orçamento</a><a class="button button--outline" href="${wa('Olá! Gostaria de falar com a equipe GOOBUS.')}" target="_blank" rel="noopener noreferrer">${ICON.whatsapp} WhatsApp</a></div></div>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="container"><div class="footer-grid">
      <div class="footer-brand"><img src="/assets/brand/goobus-logo-dark.png" alt="GOOBUS"><p>Transporte sob medida para empresas e grupos, com planejamento de rota, atendimento direto e proposta coerente com cada operação.</p><a href="mailto:${COMPANY.email}">${ICON.mail} ${COMPANY.email}</a></div>
      <div><h2>Navegação</h2><a href="/empresa">Empresa</a><a href="/servicos">Serviços</a><a href="/frota">Frota</a><a href="/orcamento">Orçamento</a><a href="/contato">Contato</a></div>
      <div><h2>Serviços</h2>${SERVICES.map(service => `<a href="${serviceUrl(service.slug)}">${service.title}</a>`).join('')}</div>
      <div><h2>Contato</h2><a href="${wa('Olá! Gostaria de solicitar um orçamento GOOBUS.')}" target="_blank" rel="noopener noreferrer">WhatsApp ${COMPANY.phone}</a><a href="mailto:${COMPANY.email}">${COMPANY.email}</a><a href="/politica-de-privacidade">Política de privacidade</a></div>
    </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} GOOBUS TRANSPORTES E TURISMO LTDA · CNPJ ${COMPANY.cnpj}</span><span>Dados de rotas exibidos no mapa são simulações demonstrativas.</span><a href="/politica-de-privacidade">Privacidade</a></div></div></footer>
    <a class="floating-whatsapp" href="${wa('Olá! Estou no site da GOOBUS e gostaria de atendimento.')}" target="_blank" rel="noopener noreferrer" aria-label="Falar com a GOOBUS no WhatsApp">${ICON.whatsapp}<span>WhatsApp</span></a>`;
  }

  function trustRail() {
    return `<div class="trust-rail"><div class="container trust-rail__grid">
      <div class="trust-item">${ICON.route}<span><strong>Rotas sob medida</strong><small>Pontos e horários avaliados</small></span></div>
      <div class="trust-item">${ICON.shield}<span><strong>Planejamento responsável</strong><small>Operação confirmada na proposta</small></span></div>
      <div class="trust-item">${ICON.users}<span><strong>Atendimento direto</strong><small>Empresa, grupo e responsável</small></span></div>
      <div class="trust-item">${ICON.clock}<span><strong>Janelas de horário</strong><small>Embarque e retorno organizados</small></span></div>
    </div></div>`;
  }

  function hero({ title, accent, description, imagePath = IMG.hero, panel = true }) {
    const highlighted = accent ? title.replace(accent, `<span class="accent">${accent}</span>`) : title;
    return `<section class="cinematic-hero"><div class="cinematic-hero__media">${image(imagePath, 'Ônibus e operação de transporte GOOBUS', 'fetchpriority="high"')}<div class="cinematic-hero__route"><svg viewBox="0 0 1440 820" preserveAspectRatio="none"><path d="M-80 650 C 220 510, 330 715, 590 510 S 980 220, 1510 330"/></svg></div></div><div class="container cinematic-hero__grid"><div class="hero-copy"><h1 class="hero-title">${highlighted}</h1><p>${description}</p><div class="hero-actions"><a class="button button--orange" href="/orcamento">Solicitar orçamento ${ICON.arrow}</a><a class="button button--outline" href="${wa('Olá! Gostaria de falar sobre uma operação de transporte com a GOOBUS.')}" target="_blank" rel="noopener noreferrer">${ICON.whatsapp} Falar no WhatsApp</a></div><div class="hero-proof"><span>${ICON.route} Roteiro avaliado</span><span>${ICON.shield} Condições confirmadas</span><span>${ICON.users} Atendimento humano</span></div></div>${panel ? `<aside class="hero-panel"><span class="hero-panel__label">Briefing operacional</span><h2>Uma boa viagem começa antes da partida.</h2><div class="hero-panel__rows"><div class="hero-panel__row"><span>Passageiros</span><b>Perfil e quantidade</b></div><div class="hero-panel__row"><span>Rota</span><b>Origem, destino e paradas</b></div><div class="hero-panel__row"><span>Agenda</span><b>Ida, retorno e janelas</b></div><div class="hero-panel__row"><span>Veículo</span><b>Confirmado na proposta</b></div></div></aside>` : ''}</div><a class="scroll-cue" href="#inicio"><i></i>Continue a viagem</a></section>`;
  }

  function internalHero(title, description, imagePath, label, stamp) {
    return `<section class="internal-hero"><div class="internal-hero__media">${image(imagePath, title, 'fetchpriority="high"')}</div><div class="container internal-hero__content"><h1>${title}</h1><p>${description}</p><div class="hero-actions"><a class="button button--orange" href="/orcamento">Solicitar orçamento ${ICON.arrow}</a><a class="button button--outline" href="${wa(`Olá! Gostaria de mais informações sobre ${label || title}.`)}" target="_blank" rel="noopener noreferrer">${ICON.whatsapp} Falar com especialista</a></div>${stamp ? `<div class="page-stamp"><strong>${stamp[0]}</strong><span>${stamp[1]}</span></div>` : ''}</div></section>`;
  }

  function ctaBand(title = 'Vamos desenhar a próxima rota?') {
    return `<section class="section section--paper"><div class="container"><div class="cta-band reveal"><div class="cta-band__grid"><h2>${title}</h2><div><a class="button button--light" href="/orcamento">Solicitar proposta ${ICON.arrow}</a></div></div></div></div></section>`;
  }

  const DEMO_ROUTES = [
    { name: 'Guarulhos → Alphaville', note: 'Guarulhos, Tatuapé, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration: '1h42', distance: '58 km', occupancy: '82%', stops: [['Guarulhos', -23.4543, -46.5337], ['Tatuapé', -23.5403, -46.5765], ['Mooca', -23.5585, -46.5984], ['Paulista', -23.5615, -46.6559], ['Pinheiros', -23.5677, -46.6938], ['Osasco', -23.5324, -46.7917], ['Alphaville', -23.4969, -46.8489]] },
    { name: 'ABC → Alphaville', note: 'São Bernardo, Santo André, São Caetano, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration: '2h06', distance: '76 km', occupancy: '74%', stops: [['São Bernardo', -23.6914, -46.5646], ['Santo André', -23.6639, -46.5383], ['São Caetano', -23.6229, -46.5548], ['Mooca', -23.5585, -46.5984], ['Paulista', -23.5615, -46.6559], ['Pinheiros', -23.5677, -46.6938], ['Osasco', -23.5324, -46.7917], ['Alphaville', -23.4969, -46.8489]] },
    { name: 'Aeroportos → polos corporativos', note: 'GRU, Tatuapé, Mooca, Paulista, Pinheiros e Congonhas', duration: '1h28', distance: '47 km', occupancy: '68%', stops: [['Aeroporto GRU', -23.4356, -46.4731], ['Tatuapé', -23.5403, -46.5765], ['Mooca', -23.5585, -46.5984], ['Paulista', -23.5615, -46.6559], ['Pinheiros', -23.5677, -46.6938], ['Congonhas', -23.6261, -46.6566]] }
  ];

  function routeSection() {
    return `<section class="section route-stage"><div class="container route-layout"><div class="route-copy reveal"><span class="section-label">Mapa operacional demonstrativo</span><h2>Grande São Paulo vista como uma rede de possibilidades.</h2><p>Ruas, bairros e polos reais são exibidos sobre o OpenStreetMap. Os trajetos e indicadores são simulações visuais para demonstrar a capacidade de planejamento, não confirmação de linhas atualmente operadas pela GOOBUS.</p><div class="route-tabs" role="tablist" aria-label="Cenários demonstrativos">${DEMO_ROUTES.map((item, index) => `<button class="route-tab" type="button" role="tab" aria-selected="${index === 0}" data-route="${index}"><strong>${item.name}</strong><small>${item.note}</small></button>`).join('')}</div><div class="route-telemetry"><div><span>Tempo estimado</span><b data-route-duration>${DEMO_ROUTES[0].duration}</b></div><div><span>Distância</span><b data-route-distance>${DEMO_ROUTES[0].distance}</b></div><div><span>Ocupação demo</span><b data-route-occupancy>${DEMO_ROUTES[0].occupancy}</b></div></div><small class="route-demo-note">Simulação demonstrativa. Tempos variam com trânsito, acessos, pontos e condições da operação.</small></div><div class="route-map-wrap reveal"><div class="route-map-loader">Carregando mapa real da Grande São Paulo…</div><div id="goobus-map" role="application" aria-label="Mapa de rotas demonstrativas na Grande São Paulo"></div></div></div></section>`;
  }

  function homePage() {
    return `${hero({ title: 'Rotas que conectam pessoas, horários e operações.', accent: 'Rotas', description: 'A GOOBUS planeja fretamento corporativo, viagens e transfers com uma proposta construída a partir do trajeto real, da agenda do grupo e do veículo adequado.' })}${trustRail()}<section class="section section--warm" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Antes de escolher o ônibus</span><h2>O problema não é apenas transportar. É fazer a operação caber na rotina.</h2><p>Turnos, trânsito, acessos, bagagens, horários sensíveis e múltiplos pontos de embarque mudam completamente a solução. Por isso, a GOOBUS começa pelo briefing e não por uma promessa pronta.</p><ul class="check-list"><li>Mapeamento de origem, destino e paradas</li><li>Leitura de turnos, frequência e janelas de horário</li><li>Categoria de veículo indicada conforme o grupo</li><li>Proposta com escopo e condições organizadas</li></ul><a class="button button--navy" href="/empresa">Conhecer a GOOBUS ${ICON.arrow}</a></div><div class="split__media reveal">${image(IMG.route, 'Planejamento de rota e operação de transporte')}</div></div></section>${routeSection()}<section class="section section--paper"><div class="container"><div class="section-head reveal"><span class="section-label">Serviços</span><h2>Uma estrutura diferente para cada motivo de viagem.</h2><p>O veículo, os horários e a forma de operação são definidos a partir do contexto.</p></div><div class="editorial-grid">${SERVICES.map((service, index) => `<a class="editorial-card ${index === 1 ? 'editorial-card--wide' : ''} reveal" href="${serviceUrl(service.slug)}">${image(service.image, service.title, 'loading="lazy"')}<div class="editorial-card__body"><span>${service.label}</span><h3>${service.title}</h3><p>${service.intro}</p><b>Ver serviço ${ICON.arrow}</b></div></a>`).join('')}</div></div></section><section class="section section--dark"><div class="container"><div class="section-head reveal"><span class="section-label">Indicadores de briefing</span><h2>Números que ajudam a transformar uma demanda em operação.</h2><p>Valores reais são confirmados somente após a análise do roteiro.</p></div><div class="metric-grid">${[['09', 'polos conectados na demonstração'], ['03', 'cenários de rota simulados'], ['15', 'páginas especializadas'], ['01', 'equipe para centralizar o atendimento']].map(([number, text]) => `<div class="metric reveal"><strong data-counter="${number}">0</strong><span>${text}</span></div>`).join('')}</div></div></section><section class="section section--paper"><div class="container"><div class="section-head center reveal"><span class="section-label">Como funciona</span><h2>Do briefing ao embarque, sem esconder as etapas.</h2></div><div class="process-grid">${[['01', 'Conte a necessidade', 'Origem, destino, datas, passageiros, horários e contexto.'], ['02', 'Analisamos a operação', 'A equipe avalia rota, logística, veículo e pontos sensíveis.'], ['03', 'Receba a proposta', 'Escopo, categoria e condições são apresentados de forma organizada.'], ['04', 'Confirme a viagem', 'Com a aprovação, a operação segue para organização e execução.']].map(([number, title, text]) => `<div class="process-step reveal"><span class="process-step__number">${number}</span><h3>${title}</h3><p>${text}</p></div>`).join('')}</div></div></section>${ctaBand('Sua próxima rota pode começar com um briefing de poucos minutos.')}`;
  }

  function companyPage() {
    return `${internalHero('Planejamento de transporte com conversa direta e escopo claro.', 'A GOOBUS atende empresas e grupos que precisam organizar deslocamentos sem transformar cada detalhe em improviso.', IMG.corporate, 'Empresa', ['PROCESSO / CLAREZA / RESPONSABILIDADE', 'Dados comerciais, forma de trabalho e limites da proposta apresentados com objetividade.'])}${trustRail()}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__media reveal">${image(IMG.hero, 'Ônibus GOOBUS e atendimento de transporte')}</div><div class="split__copy reveal"><span class="section-label">O que orienta nosso trabalho</span><h2>Entender primeiro. Propor depois.</h2><p>O mesmo número de passageiros pode pedir soluções diferentes quando mudam o trajeto, as bagagens, o turno ou o nível de conforto. Nossa abordagem começa pelas perguntas que evitam ruído depois.</p><ul class="check-list"><li>Atendimento centralizado para o responsável</li><li>Leitura de rota, agenda e perfil do grupo</li><li>Condições confirmadas antes da contratação</li><li>Comunicação objetiva durante o processo</li></ul></div></div></section><section class="section section--dark"><div class="container"><div class="section-head reveal"><span class="section-label">Princípios operacionais</span><h2>Confiança não nasce de adjetivos. Nasce de processo.</h2></div><div class="metric-grid">${[['01', 'briefing centralizado'], ['02', 'contextos: recorrente ou pontual'], ['03', 'pilares: rota, agenda e veículo'], ['100%', 'condições confirmadas na proposta']].map(([number, text]) => `<div class="metric reveal"><strong>${number}</strong><span>${text}</span></div>`).join('')}</div></div></section>${ctaBand('Fale com uma equipe que começa pela sua necessidade real.')}`;
  }

  function servicesPage() {
    return `${internalHero('Soluções para empresas, grupos e agendas que não podem depender de improviso.', 'Escolha o contexto mais próximo da sua necessidade. A proposta final ajusta rota, horários, bagagens, veículo e condições da operação.', IMG.hero, 'Serviços', ['PORTFÓLIO / ROTA / CONTEXTO', 'Oito serviços conectados ao mesmo sistema visual e operacional.'])}<section class="section section--paper" id="inicio"><div class="container"><div class="section-head reveal"><span class="section-label">Portfólio</span><h2>O destino é só uma parte do planejamento.</h2><p>Cada serviço possui necessidades próprias. As páginas detalham o que precisa entrar no briefing antes da cotação.</p></div><div class="editorial-grid">${SERVICES.map((service, index) => `<a class="editorial-card ${index % 5 === 0 ? 'editorial-card--wide' : ''} reveal" href="${serviceUrl(service.slug)}">${image(service.image, service.title, 'loading="lazy"')}<div class="editorial-card__body"><span>${service.label}</span><h3>${service.title}</h3><p>${service.intro}</p><b>Conhecer solução ${ICON.arrow}</b></div></a>`).join('')}</div></div></section>${ctaBand()}`;
  }

  function fleetPage() {
    const fleet = [
      ['Ônibus convencional', 'Grandes grupos', IMG.bus, 'Excursões, romarias, eventos e operações com maior volume de passageiros.'],
      ['Ônibus executivo', 'Conforto', IMG.executive, 'Viagens corporativas e longas distâncias com comodidades confirmadas conforme o veículo.'],
      ['Micro-ônibus', 'Versatilidade', IMG.micro, 'Grupos médios, city tours, transfers e roteiros urbanos com operação compacta.'],
      ['Van executiva', 'Agilidade', IMG.van, 'Pequenos grupos, receptivo, equipes e deslocamentos com bagagem controlada.']
    ];
    return `${internalHero('A categoria certa nasce do roteiro, não de uma foto.', 'Capacidade, bagagem, acessos, duração da viagem e comodidades desejadas definem o veículo mais coerente para cada operação.', IMG.executive, 'Frota', ['PASSAGEIROS / BAGAGEM / ACESSO', 'A categoria é indicada pelo roteiro; capacidade e comodidades são confirmadas na proposta.'])}<section class="section section--soft" id="inicio"><div class="container"><div class="section-head reveal"><span class="section-label">Categorias de referência</span><h2>Compare o uso mais comum de cada configuração.</h2><p>Imagens e itens são referências. Capacidade, identidade visual, disponibilidade e comodidades são confirmadas no orçamento.</p></div><div class="fleet-grid">${fleet.map(([title, label, img, text]) => `<article class="fleet-card reveal">${image(img, title, 'loading="lazy"')}<div class="fleet-card__body"><span>${label}</span><h3>${title}</h3><p>${text}</p><ul class="fleet-facts"><li><span>Capacidade</span><b>Sob consulta</b></li><li><span>Bagageiro</span><b>Conforme veículo</b></li><li><span>Comodidades</span><b>Confirmadas na proposta</b></li></ul><a class="button button--navy button--wide" href="/orcamento?veiculo=${encodeURIComponent(title)}">Solicitar esta categoria</a></div></article>`).join('')}</div></div></section>${ctaBand('Conte a rota e deixe a equipe indicar a categoria adequada.')}`;
  }

  function servicePage(slug) {
    const service = SERVICES.find(item => item.slug === slug);
    if (!service) return notFoundPage();
    return `${internalHero(service.hero, service.intro, service.image, service.label, ['BRIEFING / CENÁRIOS / DECISÕES', `Conteúdo específico para ${service.title.toLowerCase()}, sem reaproveitar página genérica.`])}${trustRail()}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Briefing do serviço</span><h2>O que precisamos entender antes de apresentar a proposta.</h2><p>${service.intro}</p><ul class="check-list">${service.briefing.map(item => `<li>${item}</li>`).join('')}</ul><a class="button button--orange" href="/orcamento?servico=${encodeURIComponent(service.title)}">Solicitar orçamento ${ICON.arrow}</a></div><div class="split__media reveal">${image(service.image, service.title)}</div></div></section><section class="section section--dark service-detail"><div class="container"><div class="section-head reveal"><span class="section-label">Decisões da operação</span><h2>O que muda neste serviço.</h2><p>Cada solução possui briefing, riscos e decisões próprias.</p></div><div class="benefit-grid">${service.benefits.map(([title, text], index) => `<article><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><div class="scenario-layout"><div><span class="section-label">Indicado para</span><h2>Cenários atendidos</h2></div><ul>${service.scenarios.map(item => `<li>${item}</li>`).join('')}</ul></div><div class="faq"><div class="section-head"><span class="section-label">Dúvidas frequentes</span><h2>Respostas antes do orçamento.</h2></div>${service.faq.map(([question, answer]) => `<details><summary>${question}<span>+</span></summary><p>${answer}</p></details>`).join('')}</div><div class="service-cta"><h2>Planeje ${service.title.toLowerCase()} com todos os dados no mesmo briefing.</h2><a class="button button--orange" href="/orcamento?servico=${encodeURIComponent(service.title)}">Solicitar orçamento</a><a class="button button--outline" href="${wa(`Olá! Gostaria de cotar ${service.title}.`)}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></div></div></section>${ctaBand('Solicite uma proposta construída para este tipo de operação.')}`;
  }

  function leadForm(kind) {
    return `<form class="form-card lead-form reveal" data-lead-form data-kind="${kind}" novalidate><div class="form-alert" hidden role="status"></div><div class="form-grid"><div class="field"><label for="name">Nome *</label><input id="name" name="nome" autocomplete="name" required></div><div class="field"><label for="company">Empresa ou grupo</label><input id="company" name="empresa" autocomplete="organization"></div><div class="field"><label for="email">E-mail *</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="phone">Telefone / WhatsApp *</label><input id="phone" name="telefone" type="tel" inputmode="tel" autocomplete="tel" required></div><div class="field field--full"><label for="service">Tipo de serviço *</label><select id="service" name="servico" required><option value="">Selecione</option>${SERVICES.map(service => `<option value="${service.title}">${service.title}</option>`).join('')}<option>Outro</option></select></div><div class="field"><label for="origin">Cidade de origem *</label><input id="origin" name="origem" required></div><div class="field"><label for="destination">Destino *</label><input id="destination" name="destino" required></div><div class="field"><label for="date-out">Data de ida *</label><input id="date-out" name="dataIda" type="date" required></div><div class="field"><label for="date-return">Data de retorno</label><input id="date-return" name="dataRetorno" type="date"></div><div class="field field--full"><label for="passengers">Quantidade de passageiros *</label><input id="passengers" name="passageiros" type="number" min="1" max="999" required></div><div class="field field--full"><label for="notes">Observações</label><textarea id="notes" name="observacoes" placeholder="Horários, paradas, bagagens, turnos ou outras informações importantes"></textarea></div><label class="honeypot">Não preencha<input name="website" tabindex="-1" autocomplete="off"></label><label class="checkbox field--full"><input type="checkbox" name="consentimento" value="sim" required><span>Concordo com o uso dos dados para atendimento desta solicitação, conforme a Política de Privacidade.</span></label><div class="field--full"><button class="button button--orange button--wide" type="submit">Enviar solicitação ${ICON.arrow}</button></div></div></form>`;
  }

  function contactForm() {
    return `<form class="lead-form" data-lead-form data-kind="contact" novalidate><div class="form-alert" hidden role="status"></div><div class="form-grid"><div class="field field--full"><label for="cname">Nome *</label><input id="cname" name="nome" required autocomplete="name"></div><div class="field"><label for="cemail">E-mail *</label><input id="cemail" name="email" type="email" required autocomplete="email"></div><div class="field"><label for="cphone">Telefone</label><input id="cphone" name="telefone" type="tel" inputmode="tel" autocomplete="tel"></div><div class="field field--full"><label for="csubject">Assunto *</label><input id="csubject" name="assunto" required></div><div class="field field--full"><label for="cmessage">Mensagem *</label><textarea id="cmessage" name="mensagem" required></textarea></div><label class="honeypot">Não preencha<input name="website" tabindex="-1" autocomplete="off"></label><label class="checkbox field--full"><input type="checkbox" name="consentimento" value="sim" required><span>Concordo com o uso dos dados para resposta ao contato.</span></label><div class="field--full"><button class="button button--orange button--wide" type="submit">Enviar mensagem ${ICON.arrow}</button></div></div></form>`;
  }

  function budgetPage() {
    return `${internalHero('Conte a rota. A proposta começa pelo contexto.', 'Preencha os dados disponíveis. Mesmo que alguns detalhes ainda não estejam definidos, a equipe consegue orientar os próximos passos.', IMG.route, 'Orçamento', ['BRIEFING / PROTOCOLO / RETORNO', 'Formulário único, validação acessível, preenchimento por serviço e alternativa pelo WhatsApp.'])}<section class="section section--soft" id="inicio"><div class="container form-layout"><aside class="form-aside reveal"><span class="section-label">Solicitação de orçamento</span><h2>Informações que reduzem idas e vindas.</h2><p>Origem, destino, datas, passageiros e motivo da viagem ajudam a equipe a entender a operação. Nenhum valor é calculado automaticamente sem análise.</p><ul class="check-list"><li>Resposta pelo canal informado</li><li>Protocolo gerado após o envio</li><li>Dados tratados conforme a LGPD</li><li>Alternativa imediata pelo WhatsApp</li></ul><div class="contact-cards"><a href="${wa('Olá! Gostaria de solicitar um orçamento GOOBUS.')}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>${COMPANY.phone}</strong></a><a href="mailto:${COMPANY.email}"><span>E-mail</span><strong>${COMPANY.email}</strong></a></div></aside>${leadForm('budget')}</div></section>`;
  }

  function contactPage() {
    return `${internalHero('Fale com a GOOBUS pelo canal mais conveniente.', 'Use o formulário para assuntos gerais ou peça um orçamento com os dados completos da viagem. O WhatsApp continua disponível para contato rápido.', IMG.hero, 'Contato', ['WHATSAPP / E-MAIL / FORMULÁRIO', 'Canais oficiais e endereço comercial reunidos em uma única página.'])}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Canais oficiais</span><h2>Atendimento comercial sem labirinto.</h2><div class="contact-cards"><a href="${wa('Olá! Gostaria de falar com a GOOBUS.')}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>${COMPANY.phone}</strong></a><a href="mailto:${COMPANY.email}"><span>E-mail</span><strong>${COMPANY.email}</strong></a><div><span>Endereço</span><strong>${COMPANY.address}</strong></div></div><div class="hero-actions"><a class="button button--orange" href="${wa('Olá! Gostaria de falar com a GOOBUS.')}" target="_blank" rel="noopener noreferrer">${ICON.whatsapp} Abrir WhatsApp</a><a class="button button--navy" href="mailto:${COMPANY.email}">${ICON.mail} Enviar e-mail</a></div></div><div class="form-card reveal">${contactForm()}</div></div></section>`;
  }

  function privacyPage() {
    return `${internalHero('Política de privacidade e tratamento de dados.', 'Esta página explica como informações enviadas pelos formulários e canais comerciais podem ser utilizadas pela GOOBUS.', IMG.route, 'Privacidade')}<section class="section section--paper" id="inicio"><div class="container legal"><span class="section-label">LGPD</span><h2>1. Dados coletados</h2><p>Podemos coletar nome, empresa, e-mail, telefone, informações de origem e destino, datas, quantidade de passageiros e observações fornecidas voluntariamente.</p><h2>2. Finalidade</h2><p>Os dados são utilizados para responder contatos, elaborar propostas, organizar solicitações e manter registro comercial do atendimento.</p><h2>3. Base legal</h2><p>O tratamento ocorre mediante consentimento, procedimentos preliminares relacionados a eventual contratação e legítimo interesse na segurança e organização do atendimento.</p><h2>4. Compartilhamento</h2><p>Informações podem ser compartilhadas somente com prestadores necessários à operação, hospedagem, comunicação ou transporte, dentro do escopo adequado.</p><h2>5. Armazenamento e segurança</h2><p>São adotadas medidas técnicas e administrativas proporcionais para limitar acesso indevido, perda ou alteração das informações.</p><h2>6. Direitos do titular</h2><p>Você pode solicitar confirmação, acesso, correção, eliminação ou informações sobre o tratamento por meio de ${COMPANY.email}.</p><h2>7. Cookies e métricas</h2><p>O site pode utilizar recursos estritamente necessários e métricas de navegação quando configuradas e consentidas.</p><h2>8. Atualizações</h2><p>Esta política pode ser atualizada para refletir mudanças legais, técnicas ou operacionais. Versão revisada em julho de 2026.</p></div></section>`;
  }

  function notFoundPage() {
    return `<section class="not-found"><div><strong>404</strong><h1>Esta rota não faz parte da viagem.</h1><p>O endereço informado não corresponde a uma página atual da GOOBUS.</p><a class="button button--orange" href="/">Voltar para a página inicial ${ICON.arrow}</a></div></section>`;
  }

  function pageContent() {
    if (route === 'home') return homePage();
    if (route === 'empresa') return companyPage();
    if (route === 'servicos') return servicesPage();
    if (route === 'frota') return fleetPage();
    if (route === 'orcamento') return budgetPage();
    if (route === 'contato') return contactPage();
    if (route === 'privacidade') return privacyPage();
    if (route.startsWith('service-')) return servicePage(route.replace('service-', ''));
    return notFoundPage();
  }

  function metadata() {
    const service = route.startsWith('service-') ? SERVICES.find(item => `service-${item.slug}` === route) : null;
    const data = {
      home: ['GOOBUS | Fretamento corporativo e transporte de grupos', 'Fretamento corporativo, aluguel de ônibus, turismo, eventos e transfers com planejamento de rotas e atendimento direto.'],
      servicos: ['Serviços de transporte | GOOBUS', 'Aluguel de ônibus, fretamento corporativo, turismo, transfers, eventos, escolas, romarias e produções.'],
      frota: ['Frota | GOOBUS', 'Ônibus, micro-ônibus e vans indicados conforme passageiros, rota, bagagens e conforto desejado.'],
      empresa: ['Empresa | GOOBUS', 'Conheça a GOOBUS, sua abordagem de planejamento e os dados comerciais para contratação.'],
      orcamento: ['Solicitar orçamento | GOOBUS', 'Solicite uma proposta informando rota, datas, passageiros e tipo de serviço.'],
      contato: ['Contato | GOOBUS', 'Fale com a GOOBUS por WhatsApp, e-mail ou formulário de contato.'],
      privacidade: ['Política de privacidade | GOOBUS', 'Entenda como a GOOBUS trata informações enviadas pelos canais comerciais.'],
      'not-found': ['Página não encontrada | GOOBUS', 'O endereço informado não corresponde a uma página atual da GOOBUS.']
    };
    return service ? [`${service.title} | GOOBUS`, service.intro] : data[route] || data['not-found'];
  }

  function updateMetadata() {
    const [title, description] = metadata();
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    const cleanPath = normalizePath(location.pathname);
    const canonicalPath = cleanPath ? `/${cleanPath}` : '/';
    const canonicalUrl = `${location.origin}${canonicalPath}`;
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    if (route === 'not-found') document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex,follow');
  }

  function render() {
    document.body.dataset.page = route;
    document.body.dataset.build = '20260715';
    const content = pageContent();
    root.innerHTML = route === 'not-found' ? `<main id="conteudo">${content}</main>` : `${header()}<main id="conteudo">${content}</main>${footer()}`;
    document.documentElement.classList.add('js');
    updateMetadata();
    initialize();
  }

  function initialize() {
    initNavigation();
    initReveal();
    initProgress();
    initCounters();
    initForms();
    prepareForms();
    if (route === 'home') initMap();
  }

  function initNavigation() {
    const headerElement = document.querySelector('.site-header');
    const menu = document.querySelector('.mobile-menu');
    const open = document.querySelector('.menu-button');
    const close = menu?.querySelector('button');
    const setMenu = state => {
      if (!menu || !open) return;
      menu.classList.toggle('open', state);
      menu.setAttribute('aria-hidden', String(!state));
      open.setAttribute('aria-expanded', String(state));
      document.body.style.overflow = state ? 'hidden' : '';
    };
    open?.addEventListener('click', () => setMenu(true));
    close?.addEventListener('click', () => setMenu(false));
    menu?.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    const onScroll = () => headerElement?.classList.toggle('is-scrolled', window.scrollY > 22);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.querySelectorAll('a[href^="/"]').forEach(anchor => anchor.addEventListener('click', event => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || anchor.target === '_blank' || anchor.getAttribute('href') === '/') return;
      const url = new URL(anchor.href, location.origin);
      if (url.origin !== location.origin) return;
      document.body.classList.add('is-leaving');
      event.preventDefault();
      window.setTimeout(() => { location.href = url.href; }, 180);
    }));
  }

  function initReveal() {
    const items = [...document.querySelectorAll('.reveal')];
    items.forEach((element, index) => element.style.setProperty('--delay', `${Math.min((index % 7) * 55, 330)}ms`));
    if (!('IntersectionObserver' in window)) {
      items.forEach(element => element.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.1, rootMargin: '0px 0px -8%' });
    items.forEach(element => observer.observe(element));
  }

  function initProgress() {
    const element = document.querySelector('.page-progress');
    const update = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const value = maximum > 0 ? Math.max(0, Math.min(100, window.scrollY / maximum * 100)) : 0;
      element?.style.setProperty('--progress', `${value}%`);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  function initCounters() {
    document.querySelectorAll('[data-counter]').forEach(element => {
      const end = Number.parseInt(element.dataset.counter || '0', 10);
      let started = false;
      const run = () => {
        if (started) return;
        started = true;
        const startedAt = performance.now();
        const tick = now => {
          const progress = Math.min(1, (now - startedAt) / 1000);
          element.textContent = String(Math.round(end * (1 - Math.pow(1 - progress, 3)))).padStart(2, '0');
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { run(); observer.disconnect(); } }));
        observer.observe(element);
      } else run();
    });
  }

  function prepareForms() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const today = now.toISOString().slice(0, 10);
    document.querySelectorAll('input[type="date"]').forEach(input => { input.min = today; });
    const params = new URLSearchParams(location.search);
    const selectedService = params.get('servico');
    const select = document.querySelector('select[name="servico"]');
    if (selectedService && select) {
      const option = [...select.options].find(item => item.value === selectedService);
      if (option) select.value = option.value;
    }
    const vehicle = params.get('veiculo');
    const notes = document.querySelector('textarea[name="observacoes"]');
    if (vehicle && notes && !notes.value) notes.value = `Preferência de veículo: ${vehicle}`;
  }

  function initForms() {
    document.querySelectorAll('[data-lead-form]').forEach(form => {
      const alert = form.querySelector('.form-alert');
      form.addEventListener('submit', async event => {
        event.preventDefault();
        const required = [...form.querySelectorAll('[required]')];
        let valid = true;
        required.forEach(field => {
          const ok = field.type === 'checkbox' ? field.checked : Boolean(field.value.trim());
          field.setAttribute('aria-invalid', String(!ok));
          if (!ok) valid = false;
        });
        if (!valid) {
          showAlert(alert, 'Revise os campos obrigatórios antes de enviar.', true);
          required.find(field => field.getAttribute('aria-invalid') === 'true')?.focus();
          return;
        }
        const button = form.querySelector('button[type="submit"]');
        const original = button.innerHTML;
        button.disabled = true;
        button.textContent = 'Enviando…';
        const data = Object.fromEntries(new FormData(form).entries());
        data.tipo = form.dataset.kind;
        data.pagina = location.pathname;
        try {
          const response = await fetch('/api/enviar-lead.php', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || !result.ok) throw new Error(result.message || 'Não foi possível enviar.');
          showAlert(alert, `Solicitação recebida. Protocolo ${result.protocolo}. A equipe responderá pelo canal informado.`);
          form.reset();
        } catch (error) {
          showAlert(alert, 'O envio automático não respondeu. Abrimos uma alternativa pelo WhatsApp para você não perder a solicitação.', true);
          const message = `Olá! Tentei enviar uma solicitação pelo site GOOBUS.\nNome: ${data.nome || ''}\nServiço: ${data.servico || data.assunto || ''}\nOrigem: ${data.origem || ''}\nDestino: ${data.destino || ''}\nPassageiros: ${data.passageiros || ''}`;
          window.open(wa(message), '_blank', 'noopener');
        } finally {
          button.disabled = false;
          button.innerHTML = original;
        }
      });
    });
  }

  function showAlert(element, message, error = false) {
    if (!element) return;
    element.hidden = false;
    element.textContent = message;
    element.classList.toggle('error', error);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  async function initMap() {
    const mapElement = document.querySelector('#goobus-map');
    if (!mapElement) return;
    try {
      await loadLeaflet();
      const L = window.L;
      const map = L.map(mapElement, { zoomControl: true, scrollWheelZoom: false, attributionControl: true }).setView([-23.57, -46.68], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
      let layer;
      let markers = [];
      let bus;
      let animation;
      let drawToken = 0;
      const busIcon = L.divIcon({ className: '', html: '<div class="route-bus-marker"></div>', iconSize: [34, 34], iconAnchor: [17, 27] });
      const stopIcon = L.divIcon({ className: '', html: '<div class="route-stop-marker"></div>', iconSize: [14, 14], iconAnchor: [7, 7] });
      const clear = () => {
        if (layer) map.removeLayer(layer);
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
        if (bus) map.removeLayer(bus);
        if (animation) cancelAnimationFrame(animation);
      };
      const geometry = async selected => {
        const coordinates = selected.stops.map(stop => `${stop[2]},${stop[1]}`).join(';');
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), 7500);
        try {
          const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`, { signal: controller.signal });
          if (!response.ok) throw new Error('OSRM indisponível');
          const json = await response.json();
          const points = json.routes?.[0]?.geometry?.coordinates;
          if (!points?.length) throw new Error('Geometria indisponível');
          return points.map(([lng, lat]) => [lat, lng]);
        } finally {
          window.clearTimeout(timer);
        }
      };
      const draw = async index => {
        const token = ++drawToken;
        clear();
        const selected = DEMO_ROUTES[index];
        document.querySelector('[data-route-duration]').textContent = selected.duration;
        document.querySelector('[data-route-distance]').textContent = selected.distance;
        document.querySelector('[data-route-occupancy]').textContent = selected.occupancy;
        document.querySelectorAll('.route-tab').forEach((button, buttonIndex) => button.setAttribute('aria-selected', String(buttonIndex === index)));
        let points;
        try { points = await geometry(selected); } catch { points = selected.stops.map(stop => [stop[1], stop[2]]); }
        if (token !== drawToken || !points?.length) return;
        layer = L.polyline(points, { color: '#ff7020', weight: 5, opacity: 0.9, lineCap: 'round' }).addTo(map);
        selected.stops.forEach(stop => markers.push(L.marker([stop[1], stop[2]], { icon: stopIcon }).addTo(map).bindTooltip(stop[0], { direction: 'top' })));
        map.fitBounds(layer.getBounds(), { padding: [32, 32], maxZoom: 12 });
        bus = L.marker(points[0], { icon: busIcon, zIndexOffset: 500 }).addTo(map);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const total = points.length;
        if (total < 2) return;
        const startedAt = performance.now();
        const duration = 16000;
        const step = now => {
          if (token !== drawToken || !bus) return;
          const progress = ((now - startedAt) % duration) / duration;
          const scaled = progress * (total - 1);
          const pointIndex = Math.floor(scaled);
          const part = scaled - pointIndex;
          const current = points[pointIndex];
          const next = points[Math.min(pointIndex + 1, total - 1)];
          if (!current || !next) return;
          bus.setLatLng([current[0] + (next[0] - current[0]) * part, current[1] + (next[1] - current[1]) * part]);
          animation = requestAnimationFrame(step);
        };
        animation = requestAnimationFrame(step);
      };
      document.querySelectorAll('.route-tab').forEach((button, index) => button.addEventListener('click', () => draw(index)));
      document.querySelector('.route-map-loader')?.classList.add('hidden');
      draw(0);
    } catch (error) {
      const loader = document.querySelector('.route-map-loader');
      if (loader) loader.textContent = 'Mapa temporariamente indisponível. As rotas continuam disponíveis para análise pela equipe.';
      console.warn('GOOBUS map:', error);
    }
  }

  function loadLeaflet() {
    if (window.L) return Promise.resolve();
    return new Promise((resolve, reject) => {
      if (!document.querySelector('link[data-leaflet]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.dataset.leaflet = 'true';
        document.head.appendChild(link);
      }
      const existing = document.querySelector('script[data-leaflet]');
      if (existing) {
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.dataset.leaflet = 'true';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  render();
})();
