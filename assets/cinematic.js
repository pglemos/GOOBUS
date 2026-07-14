(() => {
  'use strict';

  const COMPANY = {
    phone: '(11) 98493-1178',
    phoneRaw: '5511984931178',
    email: 'contato@goobuss.com',
    address: 'Av. Hilário Pereira de Souza, 406, Sala 1401, Centro, Osasco - SP',
    cnpj: '49.151.280/0001-28'
  };

  const A = '/assets/img/';
  const IMG = {
    hero: A + 'brand-mockups/goobus-bus-rebrand-hero.png',
    corporate: A + 'seg-empresas.jpg',
    tourism: A + 'seg-turismo.jpg',
    transfers: A + 'seg-aeroportos.jpg',
    events: A + 'seg-eventos.jpg',
    schools: A + 'seg-escolas.jpg',
    pilgrimages: A + 'seg-romarias.jpg',
    bands: A + 'seg-bandas.jpg',
    route: A + 'op-planejamento-rota.jpg',
    safety: A + 'op-inspecao-seguranca.jpg',
    bus: A + 'frota-real-onibus-convencional-20260606.jpg',
    executive: A + 'frota-real-onibus-executivo-20260606.jpg',
    micro: A + 'frota-real-micro-onibus-20260606.jpg',
    van: A + 'frota-real-van-executiva-20260606.jpg'
  };

  const ICON = {
    arrow: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.7 7.1L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"/><path d="M8.5 8.3c.5 2 2.1 3.7 4.2 4.5l1.1-1.1c.2-.2.5-.2.7-.1l2 .9c.3.1.4.4.3.7-.4 1.5-1.5 2.3-3 2.2-4.2-.3-7.8-3.8-8.2-8-.1-1.5.7-2.6 2.2-3 .3-.1.6.1.7.3l.9 2c.1.2.1.5-.1.7L8.5 8.3Z"/></svg>',
    shield: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    route: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h5a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3"/></svg>',
    users: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    clock: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    bus: '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 7h8M7 19v2M17 19v2"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  const SERVICES = [
    { slug:'aluguel-de-onibus', title:'Aluguel de ônibus', label:'Viagens e grupos', image:IMG.bus, intro:'Ônibus, micro-ônibus e vans com motorista para viagens, eventos, turismo e deslocamentos sob demanda.' },
    { slug:'fretamento-corporativo', title:'Fretamento corporativo', label:'Empresas', image:IMG.corporate, intro:'Rotas recorrentes ou pontuais para colaboradores, visitantes e equipes, estruturadas a partir de turnos e pontos reais.' },
    { slug:'turismo-excursoes', title:'Turismo e excursões', label:'Turismo', image:IMG.tourism, intro:'Roteiros para grupos, agências, associações e viagens particulares, com horários e paradas organizados.' },
    { slug:'transfers', title:'Transfers e aeroportos', label:'Receptivo', image:IMG.transfers, intro:'Traslados entre aeroportos, hotéis, empresas, eventos e pontos turísticos com bagagens previstas no planejamento.' },
    { slug:'eventos', title:'Eventos e congressos', label:'Eventos', image:IMG.events, intro:'Logística de chegada e saída para feiras, congressos, festivais, confraternizações e grandes grupos.' },
    { slug:'escolas-formaturas', title:'Escolas e formaturas', label:'Instituições', image:IMG.schools, intro:'Excursões escolares, visitas técnicas, atividades acadêmicas e formaturas com responsáveis e horários definidos.' },
    { slug:'romarias', title:'Romarias', label:'Fé e comunidade', image:IMG.pilgrimages, intro:'Transporte para romarias, retiros, encontros religiosos e peregrinações com pontos de embarque claros.' },
    { slug:'bandas-producoes', title:'Bandas e produções', label:'Produção', image:IMG.bands, intro:'Deslocamento de artistas, produção e equipe técnica considerando agenda, instrumentos, bagagens e equipamentos.' }
  ];

  const ROUTES = [
    {
      id:'north-west', name:'Guarulhos → Alphaville', note:'Guarulhos, Tatuapé, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration:'1h42', distance:'58 km', occupancy:'82%',
      stops:[['Guarulhos',-23.4543,-46.5337],['Tatuapé',-23.5403,-46.5765],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Osasco',-23.5324,-46.7917],['Alphaville',-23.4969,-46.8489]]
    },
    {
      id:'abc-west', name:'ABC → Alphaville', note:'São Bernardo, Santo André, São Caetano, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration:'2h06', distance:'76 km', occupancy:'74%',
      stops:[['São Bernardo',-23.6914,-46.5646],['Santo André',-23.6639,-46.5383],['São Caetano',-23.6229,-46.5548],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Osasco',-23.5324,-46.7917],['Alphaville',-23.4969,-46.8489]]
    },
    {
      id:'airports', name:'Aeroportos → polos corporativos', note:'GRU, Tatuapé, Mooca, Paulista, Pinheiros e Congonhas', duration:'1h28', distance:'47 km', occupancy:'68%',
      stops:[['Aeroporto GRU',-23.4356,-46.4731],['Tatuapé',-23.5403,-46.5765],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Congonhas',-23.6261,-46.6566]]
    }
  ];

  const PAGE = document.body.dataset.page || 'home';
  const root = document.querySelector('#app');
  const wa = message => `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
  const image = (path, alt, extra='') => `<img src="${path}" alt="${alt}" ${extra} onerror="this.style.opacity='.15';this.removeAttribute('src')">`;

  function header() {
    const active = PAGE.startsWith('service-') ? 'servicos' : PAGE;
    const links = [['servicos','/servicos/','Serviços'],['frota','/frota/','Frota'],['empresa','/empresa/','Empresa'],['orcamento','/orcamento/','Orçamento'],['contato','/contato/','Contato']];
    return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a><div class="page-progress" aria-hidden="true"></div><div class="speed-layer" aria-hidden="true"><span></span><span></span><span></span></div><header class="site-header"><div class="container site-header__inner"><a class="brand" href="/" aria-label="GOOBUS - Página inicial"><img src="/assets/brand/approved/goobus-logo-approved-dark-header.png" alt="GOOBUS" width="715" height="156"></a><nav class="site-nav" aria-label="Navegação principal">${links.map(([id,url,label])=>`<a class="${active===id?'active':''}" href="${url}">${label}</a>`).join('')}</nav><div class="header-actions"><a class="header-whatsapp" href="${wa('Olá! Gostaria de falar com a equipe GOOBUS.')}" target="_blank" rel="noopener">${ICON.whatsapp} ${COMPANY.phone}</a><a class="button button--orange" href="/orcamento/">Solicitar orçamento</a><button class="menu-button" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button></div></div></header><div class="mobile-menu" aria-hidden="true"><div class="mobile-menu__top"><img src="/assets/brand/approved/goobus-logo-approved-dark-header.png" alt="GOOBUS"><button type="button" aria-label="Fechar menu">×</button></div><nav>${links.map(([,url,label])=>`<a href="${url}">${label}</a>`).join('')}</nav><div class="mobile-menu__actions"><a class="button button--orange" href="/orcamento/">Solicitar orçamento</a><a class="button button--outline" href="${wa('Olá! Gostaria de falar com a equipe GOOBUS.')}" target="_blank" rel="noopener">${ICON.whatsapp} WhatsApp</a></div></div>`;
  }

  function footer() {
    return `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><img src="/assets/brand/approved/goobus-logo-approved-dark-header.png" alt="GOOBUS"><p>Transporte sob medida para empresas e grupos, com planejamento de rota, atendimento direto e proposta coerente com cada operação.</p><a href="mailto:${COMPANY.email}">${ICON.mail} ${COMPANY.email}</a></div><div><h2>Navegação</h2><a href="/empresa/">Empresa</a><a href="/servicos/">Serviços</a><a href="/frota/">Frota</a><a href="/orcamento/">Orçamento</a><a href="/contato/">Contato</a></div><div><h2>Serviços</h2>${SERVICES.slice(0,5).map(s=>`<a href="/servicos/${s.slug}/">${s.title}</a>`).join('')}</div><div><h2>Contato</h2><a href="${wa('Olá! Gostaria de solicitar um orçamento GOOBUS.')}" target="_blank" rel="noopener">WhatsApp ${COMPANY.phone}</a><a href="mailto:${COMPANY.email}">${COMPANY.email}</a><a href="/politica-de-privacidade/">Política de privacidade</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} GOOBUS TRANSPORTES E TURISMO LTDA · CNPJ ${COMPANY.cnpj}</span><span>Dados de rotas exibidos no mapa são simulações demonstrativas.</span><a href="/politica-de-privacidade/">Privacidade</a></div></div></footer><a class="floating-whatsapp" href="${wa('Olá! Estou no site da GOOBUS e gostaria de atendimento.')}" target="_blank" rel="noopener" aria-label="Falar com a GOOBUS no WhatsApp">${ICON.whatsapp}<span>WhatsApp</span></a>`;
  }

  function trustRail() {
    return `<div class="trust-rail"><div class="container trust-rail__grid"><div class="trust-item">${ICON.route}<span><strong>Rotas sob medida</strong><small>Pontos e horários avaliados</small></span></div><div class="trust-item">${ICON.shield}<span><strong>Planejamento responsável</strong><small>Operação confirmada na proposta</small></span></div><div class="trust-item">${ICON.users}<span><strong>Atendimento direto</strong><small>Empresa, grupo e responsável</small></span></div><div class="trust-item">${ICON.clock}<span><strong>Janelas de horário</strong><small>Embarque e retorno organizados</small></span></div></div></div>`;
  }

  function hero({kicker,title,accent,description,imagePath=IMG.hero,panel=true}) {
    const highlighted = accent ? title.replace(accent, `<span class="accent">${accent}</span>`) : title;
    return `<section class="cinematic-hero"><div class="cinematic-hero__media">${image(imagePath,'Ônibus e operação de transporte GOOBUS','fetchpriority="high"')}<div class="cinematic-hero__route"><svg viewBox="0 0 1440 820" preserveAspectRatio="none"><path d="M-80 650 C 220 510, 330 715, 590 510 S 980 220, 1510 330"/></svg></div></div><div class="container cinematic-hero__grid"><div class="hero-copy"><span class="hero-kicker">${kicker}</span><h1 class="hero-title">${highlighted}</h1><p>${description}</p><div class="hero-actions"><a class="button button--orange" href="/orcamento/">Solicitar orçamento ${ICON.arrow}</a><a class="button button--outline" href="${wa('Olá! Gostaria de falar sobre uma operação de transporte com a GOOBUS.')}" target="_blank" rel="noopener">${ICON.whatsapp} Falar no WhatsApp</a></div><div class="hero-proof"><span>${ICON.route} Roteiro avaliado</span><span>${ICON.shield} Condições confirmadas</span><span>${ICON.users} Atendimento humano</span></div></div>${panel?`<aside class="hero-panel"><span class="hero-panel__label">Briefing operacional</span><h2>Uma boa viagem começa antes da partida.</h2><div class="hero-panel__rows"><div class="hero-panel__row"><span>Passageiros</span><b>Perfil e quantidade</b></div><div class="hero-panel__row"><span>Rota</span><b>Origem, destino e paradas</b></div><div class="hero-panel__row"><span>Agenda</span><b>Ida, retorno e janelas</b></div><div class="hero-panel__row"><span>Veículo</span><b>Confirmado na proposta</b></div></div></aside>`:''}</div><a class="scroll-cue" href="#inicio"><i></i>Continue a viagem</a></section>`;
  }

  function internalHero(title, description, imagePath, label) {
    return `<section class="internal-hero"><div class="internal-hero__media">${image(imagePath,title,'fetchpriority="high"')}</div><div class="container internal-hero__content"><nav class="breadcrumb" aria-label="Navegação estrutural"><a href="/">Início</a><span>/</span><span>${label||title}</span></nav><span class="hero-kicker">${label||'GOOBUS'}</span><h1>${title}</h1><p>${description}</p><div class="hero-actions"><a class="button button--orange" href="/orcamento/">Solicitar orçamento ${ICON.arrow}</a><a class="button button--outline" href="${wa('Olá! Gostaria de mais informações sobre '+title+'.')}" target="_blank" rel="noopener">${ICON.whatsapp} Falar com especialista</a></div></div></section>`;
  }

  function ctaBand(title='Vamos desenhar a próxima rota?') {
    return `<section class="section section--paper"><div class="container"><div class="cta-band reveal"><div class="cta-band__grid"><h2>${title}</h2><div><a class="button button--light" href="/orcamento/">Solicitar proposta ${ICON.arrow}</a></div></div></div></div></section>`;
  }

  function routeSection() {
    return `<section class="section route-stage"><div class="container route-layout"><div class="route-copy reveal"><span class="section-label">Mapa operacional demonstrativo</span><h2>Grande São Paulo vista como uma rede de possibilidades.</h2><p>Ruas, bairros e polos reais são exibidos sobre o OpenStreetMap. Os trajetos e indicadores são simulações visuais para demonstrar a capacidade de planejamento, não confirmação de linhas atualmente operadas pela GOOBUS.</p><div class="route-tabs" role="tablist" aria-label="Cenários demonstrativos">${ROUTES.map((r,i)=>`<button class="route-tab" type="button" role="tab" aria-selected="${i===0}" data-route="${i}"><strong>${r.name}</strong><small>${r.note}</small></button>`).join('')}</div><div class="route-telemetry"><div><span>Tempo estimado</span><b data-route-duration>${ROUTES[0].duration}</b></div><div><span>Distância</span><b data-route-distance>${ROUTES[0].distance}</b></div><div><span>Ocupação demo</span><b data-route-occupancy>${ROUTES[0].occupancy}</b></div></div><small class="route-demo-note">Simulação demonstrativa. Tempos variam com trânsito, acessos, pontos e condições da operação.</small></div><div class="route-map-wrap reveal"><div class="route-map-loader">Carregando mapa real da Grande São Paulo…</div><div id="goobus-map" role="application" aria-label="Mapa de rotas demonstrativas na Grande São Paulo"></div></div></div></section>`;
  }

  function homePage() {
    return `${hero({kicker:'Mobilidade corporativa e transporte de grupos',title:'Rotas que conectam pessoas, horários e operações.',accent:'Rotas',description:'A GOOBUS planeja fretamento corporativo, viagens e transfers com uma proposta construída a partir do trajeto real, da agenda do grupo e do veículo adequado.'})}${trustRail()}<section class="section section--warm" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Antes de escolher o ônibus</span><h2>O problema não é apenas transportar. É fazer a operação caber na rotina.</h2><p>Turnos, trânsito, acessos, bagagens, horários sensíveis e múltiplos pontos de embarque mudam completamente a solução. Por isso, a GOOBUS começa pelo briefing e não por uma promessa pronta.</p><ul class="check-list"><li>Mapeamento de origem, destino e paradas</li><li>Leitura de turnos, frequência e janelas de horário</li><li>Categoria de veículo indicada conforme o grupo</li><li>Proposta com escopo e condições organizadas</li></ul><a class="button button--navy" href="/empresa/">Conhecer a GOOBUS ${ICON.arrow}</a></div><div class="split__media reveal">${image(IMG.route,'Planejamento de rota e operação de transporte')}</div></div></section>${routeSection()}<section class="section section--paper"><div class="container"><div class="section-head reveal"><span class="section-label">Serviços</span><h2>Uma estrutura diferente para cada motivo de viagem.</h2><p>O veículo, os horários e a forma de operação são definidos a partir do contexto. Explore as principais soluções GOOBUS.</p></div><div class="editorial-grid">${SERVICES.map((s,i)=>`<a class="editorial-card ${i===1?'editorial-card--wide':''} reveal" href="/servicos/${s.slug}/">${image(s.image,s.title,'loading="lazy"')}<div class="editorial-card__body"><span>${s.label}</span><h3>${s.title}</h3><p>${s.intro}</p></div></a>`).join('')}</div></div></section><section class="section section--dark"><div class="container"><div class="section-head reveal"><span class="section-label">Indicadores de briefing</span><h2>Números que ajudam a transformar uma demanda em operação.</h2><p>Os indicadores abaixo demonstram como uma proposta pode ser estruturada. Valores reais são confirmados somente após a análise do seu roteiro.</p></div><div class="metric-grid">${[['09','polos conectados na demonstração'],['03','cenários de rota simulados'],['15','páginas especializadas'],['01','equipe para centralizar o atendimento']].map(([n,t])=>`<div class="metric reveal"><strong data-counter="${n}">0</strong><span>${t}</span></div>`).join('')}</div></div></section><section class="section section--paper"><div class="container"><div class="section-head center reveal"><span class="section-label">Como funciona</span><h2>Do briefing ao embarque, sem esconder as etapas.</h2></div><div class="process-grid">${[['01','Conte a necessidade','Origem, destino, datas, passageiros, horários e contexto.'],['02','Analisamos a operação','A equipe avalia rota, logística, veículo e pontos sensíveis.'],['03','Receba a proposta','Escopo, categoria e condições são apresentados de forma organizada.'],['04','Confirme a viagem','Com a aprovação, a operação segue para organização e execução.']].map(([n,t,p])=>`<div class="process-step reveal"><span class="process-step__number">${n}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}</div></div></section>${ctaBand('Sua próxima rota pode começar com um briefing de poucos minutos.')}`;
  }

  function companyPage() {
    return `${internalHero('Planejamento de transporte com conversa direta e escopo claro.','A GOOBUS atende empresas e grupos que precisam organizar deslocamentos sem transformar cada detalhe em improviso.',IMG.corporate,'Empresa')}${trustRail()}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__media reveal">${image(IMG.hero,'Ônibus GOOBUS e atendimento de transporte')}</div><div class="split__copy reveal"><span class="section-label">O que orienta nosso trabalho</span><h2>Entender primeiro. Propor depois.</h2><p>O mesmo número de passageiros pode pedir soluções diferentes quando mudam o trajeto, as bagagens, o turno ou o nível de conforto. Nossa abordagem começa pelas perguntas que evitam ruído depois.</p><ul class="check-list"><li>Atendimento centralizado para o responsável</li><li>Leitura de rota, agenda e perfil do grupo</li><li>Condições confirmadas antes da contratação</li><li>Comunicação objetiva durante o processo</li></ul></div></div></section><section class="section section--dark"><div class="container"><div class="section-head reveal"><span class="section-label">Princípios operacionais</span><h2>Confiança não nasce de adjetivos. Nasce de processo.</h2></div><div class="metric-grid">${[['01','briefing centralizado'],['02','contextos: recorrente ou pontual'],['03','pilares: rota, agenda e veículo'],['100%','condições confirmadas na proposta']].map(([n,t])=>`<div class="metric reveal"><strong>${n}</strong><span>${t}</span></div>`).join('')}</div></div></section>${ctaBand('Fale com uma equipe que começa pela sua necessidade real.')}`;
  }

  function servicesPage() {
    return `${internalHero('Soluções para empresas, grupos e agendas que não podem depender de improviso.','Escolha o contexto mais próximo da sua necessidade. A proposta final ajusta rota, horários, bagagens, veículo e condições da operação.',IMG.hero,'Serviços')}<section class="section section--paper" id="inicio"><div class="container"><div class="section-head reveal"><span class="section-label">Portfólio</span><h2>O destino é só uma parte do planejamento.</h2><p>Cada serviço abaixo possui necessidades próprias. Por isso, as páginas detalham o que precisa entrar no briefing antes da cotação.</p></div><div class="editorial-grid">${SERVICES.map((s,i)=>`<a class="editorial-card ${i%5===0?'editorial-card--wide':''} reveal" href="/servicos/${s.slug}/">${image(s.image,s.title,'loading="lazy"')}<div class="editorial-card__body"><span>${s.label}</span><h3>${s.title}</h3><p>${s.intro}</p></div></a>`).join('')}</div></div></section>${ctaBand()}`;
  }

  function fleetPage() {
    const fleet=[['Ônibus convencional','Grandes grupos',IMG.bus,'Excursões, romarias, eventos e operações com maior volume de passageiros.'],['Ônibus executivo','Conforto',IMG.executive,'Viagens corporativas e longas distâncias com comodidades confirmadas conforme o veículo.'],['Micro-ônibus','Versatilidade',IMG.micro,'Grupos médios, city tours, transfers e roteiros urbanos com operação compacta.'],['Van executiva','Agilidade',IMG.van,'Pequenos grupos, receptivo, equipes e deslocamentos com bagagem controlada.']];
    return `${internalHero('A categoria certa nasce do roteiro, não de uma foto.','Capacidade, bagagem, acessos, duração da viagem e comodidades desejadas definem o veículo mais coerente para cada operação.',IMG.executive,'Frota')}<section class="section section--soft" id="inicio"><div class="container"><div class="section-head reveal"><span class="section-label">Categorias de referência</span><h2>Compare o uso mais comum de cada configuração.</h2><p>Imagens e itens são referências. Capacidade, identidade visual, disponibilidade e comodidades são confirmadas no orçamento.</p></div><div class="fleet-grid">${fleet.map(([t,l,img,p])=>`<article class="fleet-card reveal">${image(img,t,'loading="lazy"')}<div class="fleet-card__body"><span>${l}</span><h3>${t}</h3><p>${p}</p><ul class="fleet-facts"><li><span>Capacidade</span><b>Sob consulta</b></li><li><span>Bagageiro</span><b>Conforme veículo</b></li><li><span>Comodidades</span><b>Confirmadas na proposta</b></li></ul><a class="button button--navy button--wide" href="/orcamento/?veiculo=${encodeURIComponent(t)}">Solicitar esta categoria</a></div></article>`).join('')}</div></div></section>${ctaBand('Conte a rota e deixe a equipe indicar a categoria adequada.')}`;
  }

  function servicePage(slug) {
    const s=SERVICES.find(x=>x.slug===slug)||SERVICES[0];
    const details={
      'aluguel-de-onibus':['Grupos, viagens e deslocamentos sob demanda.',['Número de passageiros e perfil do grupo','Origem, destino, paradas e acessos','Datas, horários e duração prevista','Bagagens, materiais e comodidades']],
      'fretamento-corporativo':['Rotas recorrentes e pontuais para a rotina da empresa.',['Turnos e frequência da operação','Endereços ou polos de embarque','Quantidade de colaboradores por faixa','Janelas de entrada e saída']],
      'turismo-excursoes':['Roteiros que precisam considerar a experiência completa do grupo.',['Programação de ida, retorno e paradas','Volume de bagagens','Perfil do grupo e responsáveis','Hospedagem, atrações e horários sensíveis']],
      'transfers':['Receptivo organizado para que a agenda não comece com incerteza.',['Aeroporto, terminal, hotel ou empresa','Número do voo e previsão de chegada','Bagagens e perfil dos passageiros','Tempo de espera e destino final']],
      'eventos':['Logística sincronizada com a programação do evento.',['Janelas de chegada e dispersão','Quantidade de participantes por horário','Pontos de encontro e responsáveis','Necessidades de credenciamento ou apoio']],
      'escolas-formaturas':['Transporte com responsabilidades e horários claramente definidos.',['Instituição e contato responsável','Faixa etária e quantidade de passageiros','Programação e horários','Necessidades de bagagem ou materiais']],
      'romarias':['Uma jornada coletiva exige pontos de encontro claros.',['Santuário, cidade ou evento de destino','Locais de embarque do grupo','Horários de celebrações e retorno','Perfil dos passageiros e bagagens']],
      'bandas-producoes':['Agenda, instrumentos e equipe técnica entram no mesmo planejamento.',['Horários de passagem de som e show','Instrumentos, cases e equipamentos','Equipe artística e técnica','Hotéis, aeroportos e casas de evento']]
    }[slug];
    return `${internalHero(s.title,details[0],s.image,s.label)}${trustRail()}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Briefing do serviço</span><h2>O que precisamos entender antes de apresentar a proposta.</h2><p>${s.intro}</p><ul class="check-list">${details[1].map(i=>`<li>${i}</li>`).join('')}</ul><a class="button button--orange" href="/orcamento/?servico=${encodeURIComponent(s.title)}">Solicitar orçamento ${ICON.arrow}</a></div><div class="split__media reveal">${image(s.image,s.title)}</div></div></section><section class="section section--soft"><div class="container"><div class="section-head center reveal"><span class="section-label">Etapas</span><h2>Uma operação mais previsível começa com um fluxo simples.</h2></div><div class="process-grid">${[['01','Briefing','Você envia os dados essenciais.'],['02','Análise','A equipe avalia rota, agenda e veículo.'],['03','Proposta','As condições são organizadas para aprovação.'],['04','Execução','A viagem segue conforme o escopo confirmado.']].map(([n,t,p])=>`<div class="process-step reveal"><span class="process-step__number">${n}</span><h3>${t}</h3><p>${p}</p></div>`).join('')}</div></div></section>${ctaBand('Solicite uma proposta construída para este tipo de operação.')}`;
  }

  function leadForm(kind) {
    return `<form class="form-card lead-form reveal" data-lead-form data-kind="${kind}" novalidate><div class="form-alert" hidden role="status"></div><div class="form-grid"><div class="field"><label for="name">Nome *</label><input id="name" name="nome" autocomplete="name" required></div><div class="field"><label for="company">Empresa ou grupo</label><input id="company" name="empresa" autocomplete="organization"></div><div class="field"><label for="email">E-mail *</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="phone">Telefone / WhatsApp *</label><input id="phone" name="telefone" autocomplete="tel" required></div><div class="field field--full"><label for="service">Tipo de serviço *</label><select id="service" name="servico" required><option value="">Selecione</option>${SERVICES.map(s=>`<option>${s.title}</option>`).join('')}<option>Outro</option></select></div><div class="field"><label for="origin">Cidade de origem *</label><input id="origin" name="origem" required></div><div class="field"><label for="destination">Destino *</label><input id="destination" name="destino" required></div><div class="field"><label for="date-out">Data de ida *</label><input id="date-out" name="dataIda" type="date" required></div><div class="field"><label for="date-return">Data de retorno</label><input id="date-return" name="dataRetorno" type="date"></div><div class="field field--full"><label for="passengers">Quantidade de passageiros *</label><input id="passengers" name="passageiros" type="number" min="1" max="999" required></div><div class="field field--full"><label for="notes">Observações</label><textarea id="notes" name="observacoes" placeholder="Horários, paradas, bagagens, turnos ou outras informações importantes"></textarea></div><label class="honeypot">Não preencha<input name="website" tabindex="-1" autocomplete="off"></label><label class="checkbox field--full"><input type="checkbox" name="consentimento" value="sim" required><span>Concordo com o uso dos dados para atendimento desta solicitação, conforme a Política de Privacidade.</span></label><div class="field--full"><button class="button button--orange button--wide" type="submit">Enviar solicitação ${ICON.arrow}</button></div></div></form>`;
  }

  function contactForm() {
    return `<form class="lead-form" data-lead-form data-kind="contact" novalidate><div class="form-alert" hidden role="status"></div><div class="form-grid"><div class="field field--full"><label for="cname">Nome *</label><input id="cname" name="nome" required autocomplete="name"></div><div class="field"><label for="cemail">E-mail *</label><input id="cemail" name="email" type="email" required autocomplete="email"></div><div class="field"><label for="cphone">Telefone</label><input id="cphone" name="telefone" autocomplete="tel"></div><div class="field field--full"><label for="csubject">Assunto *</label><input id="csubject" name="assunto" required></div><div class="field field--full"><label for="cmessage">Mensagem *</label><textarea id="cmessage" name="mensagem" required></textarea></div><label class="honeypot">Não preencha<input name="website" tabindex="-1" autocomplete="off"></label><label class="checkbox field--full"><input type="checkbox" name="consentimento" value="sim" required><span>Concordo com o uso dos dados para resposta ao contato.</span></label><div class="field--full"><button class="button button--orange button--wide" type="submit">Enviar mensagem ${ICON.arrow}</button></div></div></form>`;
  }

  function budgetPage() {
    return `${internalHero('Conte a rota. A proposta começa pelo contexto.','Preencha os dados disponíveis. Mesmo que alguns detalhes ainda não estejam definidos, a equipe consegue orientar os próximos passos.',IMG.route,'Orçamento')}<section class="section section--soft" id="inicio"><div class="container form-layout"><aside class="form-aside reveal"><span class="section-label">Solicitação de orçamento</span><h2>Informações que reduzem idas e vindas.</h2><p>Origem, destino, datas, passageiros e motivo da viagem ajudam a equipe a entender a operação. Nenhum valor é calculado automaticamente sem análise.</p><ul class="check-list"><li>Resposta pelo canal informado</li><li>Protocolo gerado após o envio</li><li>Dados tratados conforme a LGPD</li><li>Alternativa imediata pelo WhatsApp</li></ul></aside>${leadForm('budget')}</div></section>`;
  }

  function contactPage() {
    return `${internalHero('Fale com a GOOBUS pelo canal mais conveniente.','Use o formulário para assuntos gerais ou peça um orçamento com os dados completos da viagem. O WhatsApp continua disponível para contato rápido.',IMG.hero,'Contato')}<section class="section section--paper" id="inicio"><div class="container split"><div class="split__copy reveal"><span class="section-label">Canais oficiais</span><h2>Atendimento comercial sem labirinto.</h2><p><strong>WhatsApp:</strong> ${COMPANY.phone}<br><strong>E-mail:</strong> ${COMPANY.email}<br><strong>Endereço:</strong> ${COMPANY.address}</p><div class="hero-actions"><a class="button button--orange" href="${wa('Olá! Gostaria de falar com a GOOBUS.')}" target="_blank" rel="noopener">${ICON.whatsapp} Abrir WhatsApp</a><a class="button button--navy" href="mailto:${COMPANY.email}">${ICON.mail} Enviar e-mail</a></div></div><div class="form-card reveal">${contactForm()}</div></div></section>`;
  }

  function privacyPage() {
    return `${internalHero('Política de privacidade e tratamento de dados.','Esta página explica como informações enviadas pelos formulários e canais comerciais podem ser utilizadas pela GOOBUS.',IMG.route,'Privacidade')}<section class="section section--paper" id="inicio"><div class="container legal"><span class="section-label">LGPD</span><h2>1. Dados coletados</h2><p>Podemos coletar nome, empresa, e-mail, telefone, informações de origem e destino, datas, quantidade de passageiros e observações fornecidas voluntariamente.</p><h2>2. Finalidade</h2><p>Os dados são utilizados para responder contatos, elaborar propostas, organizar solicitações e manter registro comercial do atendimento.</p><h2>3. Base legal</h2><p>O tratamento ocorre mediante consentimento, procedimentos preliminares relacionados a eventual contratação e legítimo interesse na segurança e organização do atendimento.</p><h2>4. Compartilhamento</h2><p>Informações podem ser compartilhadas somente com prestadores necessários à operação, hospedagem, comunicação ou transporte, dentro do escopo adequado.</p><h2>5. Armazenamento e segurança</h2><p>São adotadas medidas técnicas e administrativas proporcionais para limitar acesso indevido, perda ou alteração das informações.</p><h2>6. Direitos do titular</h2><p>Você pode solicitar confirmação, acesso, correção, eliminação ou informações sobre o tratamento por meio de ${COMPANY.email}.</p><h2>7. Cookies e métricas</h2><p>O site pode utilizar recursos estritamente necessários e métricas de navegação quando configuradas e consentidas.</p><h2>8. Atualizações</h2><p>Esta política pode ser atualizada para refletir mudanças legais, técnicas ou operacionais. Versão revisada em julho de 2026.</p></div></section>`;
  }

  function renderPage() {
    if (!root) return;
    let content='';
    if(PAGE==='home') content=homePage();
    else if(PAGE==='empresa') content=companyPage();
    else if(PAGE==='servicos') content=servicesPage();
    else if(PAGE==='frota') content=fleetPage();
    else if(PAGE==='orcamento') content=budgetPage();
    else if(PAGE==='contato') content=contactPage();
    else if(PAGE==='privacidade') content=privacyPage();
    else if(PAGE.startsWith('service-')) content=servicePage(PAGE.replace('service-',''));
    else content=homePage();
    root.innerHTML = header() + `<main id="conteudo">${content}</main>` + footer();
    document.documentElement.classList.add('js');
    initialize();
  }

  function initialize() {
    initNavigation(); initReveal(); initProgress(); initCounters(); initForms();
    if (PAGE==='home') initMap();
  }

  function initNavigation() {
    const headerEl=document.querySelector('.site-header');
    const menu=document.querySelector('.mobile-menu');
    const open=document.querySelector('.menu-button');
    const close=menu?.querySelector('button');
    const setMenu=state=>{if(!menu||!open)return;menu.classList.toggle('open',state);menu.setAttribute('aria-hidden',String(!state));open.setAttribute('aria-expanded',String(state));document.body.style.overflow=state?'hidden':'';};
    open?.addEventListener('click',()=>setMenu(true)); close?.addEventListener('click',()=>setMenu(false));
    menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
    const scroll=()=>headerEl?.classList.toggle('is-scrolled',window.scrollY>22);scroll();window.addEventListener('scroll',scroll,{passive:true});
    document.querySelectorAll('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;const u=new URL(a.href,location.origin);if(u.origin!==location.origin)return;document.body.classList.add('is-leaving');setTimeout(()=>location.href=u.href,180);e.preventDefault();}));
  }

  function initReveal() {
    const items=[...document.querySelectorAll('.reveal')];items.forEach((el,i)=>el.style.setProperty('--delay',`${Math.min((i%7)*55,330)}ms`));
    if(!('IntersectionObserver'in window)){items.forEach(el=>el.classList.add('visible'));return}
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -8%'});items.forEach(el=>io.observe(el));
  }

  function initProgress() {
    const el=document.querySelector('.page-progress');const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;const value=max>0?Math.max(0,Math.min(100,scrollY/max*100)):0;el?.style.setProperty('--progress',`${value}%`)};update();addEventListener('scroll',update,{passive:true});addEventListener('resize',update);
  }

  function initCounters() {
    document.querySelectorAll('[data-counter]').forEach(el=>{const end=parseInt(el.dataset.counter||'0',10);let started=false;const run=()=>{if(started)return;started=true;const start=performance.now();const tick=now=>{const p=Math.min(1,(now-start)/1000);el.textContent=String(Math.round(end*(1-Math.pow(1-p,3)))).padStart(2,'0');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run();io.disconnect()}}));io.observe(el)}else run();});
  }

  async function initMap() {
    const mapEl=document.querySelector('#goobus-map');if(!mapEl)return;
    try {
      await loadLeaflet();const L=window.L;const map=L.map(mapEl,{zoomControl:true,scrollWheelZoom:false,attributionControl:true}).setView([-23.57,-46.68],10);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
      let layer,markers=[],bus,animation,points=[];const busIcon=L.divIcon({className:'',html:'<div class="route-bus-marker"></div>',iconSize:[34,34],iconAnchor:[17,27]});const stopIcon=L.divIcon({className:'',html:'<div class="route-stop-marker"></div>',iconSize:[14,14],iconAnchor:[7,7]});
      const setTelemetry=r=>{document.querySelector('[data-route-duration]').textContent=r.duration;document.querySelector('[data-route-distance]').textContent=r.distance;document.querySelector('[data-route-occupancy]').textContent=r.occupancy;};
      const clear=()=>{if(layer)map.removeLayer(layer);markers.forEach(m=>map.removeLayer(m));markers=[];if(bus)map.removeLayer(bus);if(animation)cancelAnimationFrame(animation)};
      const getGeometry=async r=>{const coordinates=r.stops.map(s=>`${s[2]},${s[1]}`).join(';');const url=`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),7500);try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error('OSRM');const json=await response.json();const coords=json.routes?.[0]?.geometry?.coordinates;if(!coords?.length)throw new Error('geometry');return coords.map(([lng,lat])=>[lat,lng]);}finally{clearTimeout(timer)}};
      const draw=async index=>{clear();const r=ROUTES[index];setTelemetry(r);document.querySelectorAll('.route-tab').forEach((b,i)=>b.setAttribute('aria-selected',String(i===index)));points=r.stops.map(s=>[s[1],s[2]]);try{points=await getGeometry(r)}catch{points=r.stops.map(s=>[s[1],s[2]])}layer=L.polyline(points,{color:'#ff7020',weight:5,opacity:.9,lineCap:'round'}).addTo(map);r.stops.forEach(s=>{const m=L.marker([s[1],s[2]],{icon:stopIcon}).addTo(map).bindTooltip(s[0],{direction:'top'});markers.push(m)});map.fitBounds(layer.getBounds(),{padding:[32,32],maxZoom:12});bus=L.marker(points[0],{icon:busIcon,zIndexOffset:500}).addTo(map);if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const total=points.length;let start=performance.now();const duration=16000;const step=now=>{const p=((now-start)%duration)/duration;const scaled=p*(total-1);const i=Math.floor(scaled);const t=scaled-i;const a=points[i],b=points[Math.min(i+1,total-1)];bus.setLatLng([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]);animation=requestAnimationFrame(step)};animation=requestAnimationFrame(step);};
      document.querySelectorAll('.route-tab').forEach((b,i)=>b.addEventListener('click',()=>draw(i)));document.querySelector('.route-map-loader')?.classList.add('hidden');draw(0);
    } catch(error) {const loader=document.querySelector('.route-map-loader');if(loader)loader.textContent='Mapa temporariamente indisponível. As rotas continuam disponíveis para análise pela equipe.';console.warn('GOOBUS map:',error);}
  }

  function loadLeaflet() {
    if(window.L)return Promise.resolve();return new Promise((resolve,reject)=>{if(!document.querySelector('link[data-leaflet]')){const link=document.createElement('link');link.rel='stylesheet';link.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';link.dataset.leaflet='true';document.head.appendChild(link)}const existing=document.querySelector('script[data-leaflet]');if(existing){existing.addEventListener('load',resolve,{once:true});existing.addEventListener('error',reject,{once:true});return}const script=document.createElement('script');script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';script.integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';script.crossOrigin='';script.dataset.leaflet='true';script.onload=resolve;script.onerror=reject;document.head.appendChild(script);});
  }

  function initForms() {
    document.querySelectorAll('[data-lead-form]').forEach(form=>{const alert=form.querySelector('.form-alert');form.addEventListener('submit',async e=>{e.preventDefault();const fields=[...form.querySelectorAll('[required]')];let valid=true;fields.forEach(f=>{const ok=f.type==='checkbox'?f.checked:Boolean(f.value.trim());f.setAttribute('aria-invalid',String(!ok));if(!ok)valid=false});if(!valid){showAlert(alert,'Revise os campos obrigatórios antes de enviar.',true);fields.find(f=>f.getAttribute('aria-invalid')==='true')?.focus();return}const button=form.querySelector('button[type="submit"]');button.disabled=true;button.textContent='Enviando…';const data=Object.fromEntries(new FormData(form).entries());data.tipo=form.dataset.kind;data.pagina=location.pathname;try{const response=await fetch('/api/enviar-lead.php',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});const result=await response.json().catch(()=>({}));if(!response.ok||!result.ok)throw new Error(result.message||'Não foi possível enviar.');showAlert(alert,`Solicitação recebida. Protocolo ${result.protocolo}. A equipe responderá pelo canal informado.`);form.reset();}catch(error){showAlert(alert,'O envio automático não respondeu. Abrimos uma alternativa pelo WhatsApp para você não perder a solicitação.',true);const message=`Olá! Tentei enviar uma solicitação pelo site GOOBUS.\nNome: ${data.nome||''}\nServiço: ${data.servico||data.assunto||''}\nOrigem: ${data.origem||''}\nDestino: ${data.destino||''}\nPassageiros: ${data.passageiros||''}`;window.open(wa(message),'_blank','noopener');}finally{button.disabled=false;button.innerHTML=`Enviar ${form.dataset.kind==='contact'?'mensagem':'solicitação'} ${ICON.arrow}`}});});
  }

  function showAlert(el,message,error=false){if(!el)return;el.hidden=false;el.textContent=message;el.classList.toggle('error',error);el.scrollIntoView({behavior:'smooth',block:'center'});}

  renderPage();
})();
