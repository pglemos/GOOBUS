'use strict';

const BUILD = '20260714-4';
const COMPANY = {
  phone: '(11) 98493-1178',
  phoneRaw: '5511984931178',
  email: 'contato@goobuss.com',
  address: 'Av. Hilário Pereira de Souza, 406, Sala 1401, 14º andar, Centro, Osasco - SP',
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
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>'
};

const SERVICES = [
  { slug: 'aluguel-de-onibus', title: 'Aluguel de ônibus', label: 'Grupos e viagens', image: IMG.bus, intro: 'Ônibus, micro-ônibus e vans com motorista para viagens, eventos, turismo e deslocamentos sob demanda.' },
  { slug: 'fretamento-corporativo', title: 'Fretamento corporativo', label: 'Empresas', image: IMG.corporate, intro: 'Rotas recorrentes ou pontuais para colaboradores, visitantes e equipes, estruturadas a partir de turnos e pontos reais.' },
  { slug: 'turismo-excursoes', title: 'Turismo e excursões', label: 'Turismo', image: IMG.tourism, intro: 'Roteiros para grupos, agências, associações e viagens particulares, com horários e paradas organizados.' },
  { slug: 'romarias', title: 'Romarias', label: 'Fé e comunidade', image: IMG.pilgrimages, intro: 'Transporte para romarias, retiros, encontros religiosos e peregrinações com pontos de embarque claros.' },
  { slug: 'eventos', title: 'Eventos e congressos', label: 'Eventos', image: IMG.events, intro: 'Logística de chegada e saída para feiras, congressos, festivais, confraternizações e grandes grupos.' },
  { slug: 'escolas-formaturas', title: 'Escolas e formaturas', label: 'Instituições', image: IMG.schools, intro: 'Excursões escolares, visitas técnicas, atividades acadêmicas e formaturas com responsáveis e horários definidos.' },
  { slug: 'bandas-producoes', title: 'Bandas e produções', label: 'Produção', image: IMG.bands, intro: 'Deslocamento de artistas, produção e equipe técnica considerando agenda, instrumentos, bagagens e equipamentos.' },
  { slug: 'transfers', title: 'Transfers e city tour', label: 'Receptivo', image: IMG.transfers, intro: 'Traslados entre aeroportos, hotéis, empresas, eventos e pontos turísticos com bagagens previstas no planejamento.' }
];

const SERVICE_PAGE_DATA = {
  'aluguel-de-onibus': {
    h1: 'Aluguel de ônibus para grupos que precisam de uma operação completa.',
    description: 'A categoria do veículo, a rota, os horários, as bagagens e o perfil dos passageiros entram no mesmo briefing antes da proposta.',
    marker: 'Escolha a categoria pela operação',
    markerText: 'Um grupo de 30 passageiros pode precisar de soluções diferentes conforme distância, bagagem, acessos, duração e nível de conforto.',
    bullets: ['Quantidade e perfil dos passageiros', 'Origem, destino, paradas e acessos', 'Datas, horários e duração prevista', 'Bagagens, materiais e comodidades'],
    scenarios: [['Viagem rodoviária', 'Ida e retorno com duração, paradas e bagageiro considerados.'], ['Evento ou confraternização', 'Janelas de chegada e saída alinhadas à programação.'], ['Deslocamento urbano', 'Acessos, pontos de encontro e tempo de percurso avaliados.']],
    stats: [['Rota', 'Antes do veículo'], ['Bagagem', 'Dimensionada'], ['Motorista', 'Incluído'], ['Categoria', 'Sob consulta']],
    faq: [['O aluguel inclui motorista?', 'A proposta considera o veículo com motorista e as condições específicas da operação.'], ['Como escolher entre van, micro-ônibus e ônibus?', 'A equipe avalia passageiros, bagagens, acessos, trajeto e nível de conforto antes de indicar uma categoria.'], ['É possível incluir paradas?', 'Sim. Pontos adicionais devem entrar no briefing para análise de tempo, acesso e logística.']],
    cta: 'Solicite uma proposta de aluguel com a rota completa.'
  },
  'fretamento-corporativo': {
    h1: 'Fretamento corporativo desenhado para turnos, pessoas e pontos reais.',
    description: 'Rotas recorrentes e operações pontuais precisam caber na rotina da empresa, nos horários dos colaboradores e na geografia dos embarques.',
    marker: 'Turnos, adesão e pontos de embarque',
    markerText: 'A operação começa com dados de jornada, polos de origem, frequência e quantidade de passageiros por faixa de horário.',
    bullets: ['Turnos e frequência da operação', 'Endereços ou polos de embarque', 'Quantidade de colaboradores por faixa', 'Janelas de entrada e saída'],
    scenarios: [['Rotas recorrentes', 'Linhas organizadas conforme turnos e pontos consolidados.'], ['Projetos temporários', 'Transporte para obras, inventários, treinamentos ou operações sazonais.'], ['Visitas e eventos', 'Deslocamento de equipes, convidados e participantes.']],
    stats: [['Turnos', 'Mapeados'], ['Pontos', 'Consolidados'], ['Adesão', 'Dimensionada'], ['Frequência', 'Definida']],
    faq: [['A GOOBUS cria as rotas?', 'A equipe estrutura cenários a partir dos endereços, turnos e objetivos informados pela empresa.'], ['É possível iniciar com projeto piloto?', 'A implantação pode ser organizada em etapas conforme escopo, disponibilidade e condições comerciais.'], ['A capacidade é fixa?', 'A categoria e a capacidade são definidas de acordo com a demanda confirmada e a operação proposta.']],
    cta: 'Estruture o briefing do seu fretamento corporativo.'
  },
  'turismo-excursoes': {
    h1: 'Turismo e excursões com roteiro, horários e grupo no mesmo plano.',
    description: 'A experiência começa no embarque. Programação, paradas, bagagens e responsáveis precisam estar alinhados antes da saída.',
    marker: 'Programação, paradas e experiência do grupo',
    markerText: 'O roteiro de transporte acompanha a agenda da viagem para reduzir atrasos, desencontros e decisões improvisadas.',
    bullets: ['Programação de ida, retorno e paradas', 'Volume de bagagens', 'Perfil do grupo e responsáveis', 'Hospedagem, atrações e horários sensíveis'],
    scenarios: [['Excursões de um dia', 'Roteiro com ponto de encontro, destino e horário de retorno.'], ['Viagens com hospedagem', 'Bagagem, check-in, check-out e deslocamentos locais considerados.'], ['Agências e grupos', 'Comunicação centralizada com o responsável pela viagem.']],
    stats: [['Agenda', 'Integrada'], ['Paradas', 'Planejadas'], ['Bagagens', 'Previstas'], ['Responsável', 'Centralizado']],
    faq: [['O roteiro pode ter várias cidades?', 'Sim. O itinerário completo precisa ser informado para análise de quilometragem, tempo e condições.'], ['A GOOBUS organiza passeios locais?', 'Os deslocamentos podem ser incluídos no roteiro conforme disponibilidade e escopo da proposta.'], ['Como informar bagagens?', 'Indique o perfil do grupo, quantidade aproximada e itens especiais para dimensionamento da categoria.']],
    cta: 'Transforme a programação da excursão em um roteiro de transporte.'
  },
  'romarias': {
    h1: 'Romarias organizadas do primeiro ponto de encontro ao retorno.',
    description: 'Uma jornada coletiva exige horários claros, embarques bem comunicados e atenção ao perfil dos passageiros e à programação religiosa.',
    marker: 'Pontos de encontro e horários da jornada',
    markerText: 'Santuário, celebrações, paradas, alimentação e retorno influenciam diretamente o planejamento da viagem.',
    bullets: ['Santuário, cidade ou evento de destino', 'Locais de embarque do grupo', 'Horários de celebrações e retorno', 'Perfil dos passageiros e bagagens'],
    scenarios: [['Peregrinação de um dia', 'Embarque antecipado, programação religiosa e retorno no mesmo roteiro.'], ['Retiro ou encontro', 'Deslocamento com bagagens e horários do local de hospedagem.'], ['Vários pontos de embarque', 'Pontos consolidados e sequência de coleta avaliados no briefing.']],
    stats: [['Encontros', 'Comunicados'], ['Horários', 'Coordenados'], ['Paradas', 'Previstas'], ['Retorno', 'Planejado']],
    faq: [['É possível embarcar em mais de uma cidade?', 'Sim, desde que os pontos sejam informados para avaliação de rota, tempo e viabilidade.'], ['Idosos e pessoas com mobilidade reduzida podem viajar?', 'Informe as necessidades do grupo para que acessibilidade e categoria sejam avaliadas na proposta.'], ['A viagem pode incluir pernoite?', 'Sim. Hospedagem, horários e bagagens devem entrar no briefing.']],
    cta: 'Organize a romaria com pontos e horários definidos.'
  },
  'eventos': {
    h1: 'Eventos e congressos com chegada e saída sincronizadas.',
    description: 'Quando centenas de agendas convergem para o mesmo local, transporte precisa acompanhar credenciamento, programação e dispersão.',
    marker: 'Chegada, dispersão e contingência',
    markerText: 'Picos de participantes, acessos ao local, horários de encerramento e responsáveis operacionais orientam o desenho da logística.',
    bullets: ['Janelas de chegada e dispersão', 'Quantidade de participantes por horário', 'Pontos de encontro e responsáveis', 'Necessidades de credenciamento ou apoio'],
    scenarios: [['Congressos e feiras', 'Rotas para hotéis, aeroportos, empresas e pavilhões.'], ['Confraternizações', 'Ida e retorno organizados para reduzir deslocamento individual.'], ['Grandes grupos', 'Veículos e horários distribuídos conforme o fluxo esperado.']],
    stats: [['Picos', 'Dimensionados'], ['Acessos', 'Verificados'], ['Janelas', 'Sincronizadas'], ['Contingência', 'Planejada']],
    faq: [['É possível operar vários hotéis?', 'Sim. A distribuição dos hóspedes e a programação definem os circuitos avaliados.'], ['A GOOBUS atende eventos noturnos?', 'Horários e condições são analisados conforme disponibilidade e escopo.'], ['Como lidar com mudanças na programação?', 'Alterações devem ser centralizadas no responsável para reavaliação operacional.']],
    cta: 'Planeje a mobilidade do evento antes da abertura dos portões.'
  },
  'escolas-formaturas': {
    h1: 'Escolas e formaturas com responsáveis, horários e roteiro definidos.',
    description: 'Transporte de estudantes e convidados exige comunicação clara, identificação de responsáveis e programação sem ambiguidades.',
    marker: 'Responsáveis, autorizações e horários',
    markerText: 'Instituição, faixa etária, quantidade de passageiros, destino e agenda formam a base do planejamento.',
    bullets: ['Instituição e contato responsável', 'Faixa etária e quantidade de passageiros', 'Programação e horários', 'Necessidades de bagagem ou materiais'],
    scenarios: [['Visitas técnicas', 'Horário escolar, destino e responsáveis alinhados.'], ['Passeios pedagógicos', 'Pontos de encontro e programação do local considerados.'], ['Formaturas', 'Transporte de estudantes, famílias ou equipe conforme o evento.']],
    stats: [['Responsável', 'Identificado'], ['Passageiros', 'Conferidos'], ['Agenda', 'Compartilhada'], ['Roteiro', 'Confirmado']],
    faq: [['A escola precisa indicar um responsável?', 'Sim. A comunicação operacional deve ter um contato centralizado.'], ['É possível transportar materiais?', 'Informe volume e tipo de material para avaliação de espaço e categoria.'], ['A GOOBUS fornece autorizações?', 'Documentos pedagógicos e autorizações de responsáveis são atribuição da instituição; o transporte confirma seu escopo na proposta.']],
    cta: 'Envie a programação escolar ou da formatura para análise.'
  },
  'bandas-producoes': {
    h1: 'Bandas e produções com agenda técnica e logística no mesmo roteiro.',
    description: 'Passagem de som, show, hotel, aeroporto, instrumentos e equipe técnica não podem ser tratados como deslocamentos isolados.',
    marker: 'Agenda técnica, equipe e equipamentos',
    markerText: 'A logística acompanha a programação da produção e considera pessoas, cases, instrumentos, bagagens e horários rígidos.',
    bullets: ['Horários de passagem de som e show', 'Instrumentos, cases e equipamentos', 'Equipe artística e técnica', 'Hotéis, aeroportos e casas de evento'],
    scenarios: [['Shows e turnês', 'Sequência de cidades, hotéis e venues organizada.'], ['Produções audiovisuais', 'Equipe e materiais deslocados conforme diária e locação.'], ['Festivais', 'Janelas de acesso, credenciamento e dispersão considerados.']],
    stats: [['Agenda', 'Técnica'], ['Equipe', 'Dimensionada'], ['Cases', 'Informados'], ['Acessos', 'Coordenados']],
    faq: [['Instrumentos podem viajar no mesmo veículo?', 'Volume, peso e formato precisam ser informados para avaliação de bagageiro e segurança.'], ['É possível atender vários dias?', 'Sim. A agenda completa deve ser enviada para composição do roteiro.'], ['A equipe pode ter horários diferentes?', 'Sim, e isso pode exigir circuitos, veículos ou janelas distintas.']],
    cta: 'Coloque a agenda técnica e a rota na mesma conversa.'
  },
  'transfers': {
    h1: 'Transfers e city tour com voo, bagagem e destino acompanhados.',
    description: 'O receptivo precisa considerar horário real de chegada, tempo de bagagem, ponto de encontro e sequência de destinos.',
    marker: 'Voo, bagagem, espera e roteiro urbano',
    markerText: 'Aeroporto, terminal, hotel, empresa, evento e pontos turísticos formam um roteiro que precisa absorver variações de horário.',
    bullets: ['Aeroporto, terminal, hotel ou empresa', 'Número do voo e previsão de chegada', 'Bagagens e perfil dos passageiros', 'Tempo de espera e destino final'],
    scenarios: [['Transfer aeroportuário', 'Voo, terminal, encontro e destino registrados.'], ['Receptivo corporativo', 'Visitantes conectados a hotéis, empresas e eventos.'], ['City tour', 'Sequência de atrações e tempo de permanência organizados.']],
    stats: [['Voo', 'Monitorado'], ['Espera', 'Prevista'], ['Bagagem', 'Dimensionada'], ['Destinos', 'Sequenciados']],
    faq: [['O que acontece se o voo atrasar?', 'A condição de espera e acompanhamento é definida na proposta e depende das informações atualizadas do responsável.'], ['É possível deixar passageiros em vários hotéis?', 'Sim. A sequência de destinos entra na análise de rota.'], ['City tour pode ter guia?', 'Serviços adicionais devem ser solicitados no briefing e confirmados separadamente na proposta.']],
    cta: 'Envie o voo, os passageiros e a sequência de destinos.'
  }
};

const PATH_TO_PAGE = {
  '': 'home',
  'empresa': 'empresa',
  'servicos': 'servicos',
  'frota': 'frota',
  'orcamento': 'orcamento',
  'contato': 'contato',
  'politica-de-privacidade': 'privacidade',
  ...Object.fromEntries(SERVICES.map(service => [`servicos/${service.slug}`, `service-${service.slug}`]))
};

const ROUTES = [
  { id: 'north-west', name: 'Guarulhos → Alphaville', note: 'Guarulhos, Tatuapé, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration: '1h42', distance: '58 km', occupancy: '82%', stops: [['Guarulhos',-23.4543,-46.5337],['Tatuapé',-23.5403,-46.5765],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Osasco',-23.5324,-46.7917],['Alphaville',-23.4969,-46.8489]] },
  { id: 'abc-west', name: 'ABC → Alphaville', note: 'São Bernardo, Santo André, São Caetano, Mooca, Paulista, Pinheiros, Osasco e Alphaville', duration: '2h06', distance: '76 km', occupancy: '74%', stops: [['São Bernardo',-23.6914,-46.5646],['Santo André',-23.6639,-46.5383],['São Caetano',-23.6229,-46.5548],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Osasco',-23.5324,-46.7917],['Alphaville',-23.4969,-46.8489]] },
  { id: 'airports', name: 'Aeroportos → polos corporativos', note: 'GRU, Tatuapé, Mooca, Paulista, Pinheiros e Congonhas', duration: '1h28', distance: '47 km', occupancy: '68%', stops: [['Aeroporto GRU',-23.4356,-46.4731],['Tatuapé',-23.5403,-46.5765],['Mooca',-23.5585,-46.5984],['Paulista',-23.5615,-46.6559],['Pinheiros',-23.5677,-46.6938],['Congonhas',-23.6261,-46.6566]] }
];

function normalizedPath(pathname) {
  return decodeURIComponent(String(pathname || '/')).replace(/\?.*$/, '').replace(/^\/+|\/+$/g, '').replace(/\/{2,}/g, '/');
}

function pageIdFromPath(pathname) {
  return PATH_TO_PAGE[normalizedPath(pathname)] || 'not-found';
}

const PAGE = pageIdFromPath(window.location.pathname);
document.body.dataset.page = PAGE;
document.body.dataset.build = BUILD;

const root = document.querySelector('#app');
const wa = message => `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
const image = (path, alt, extra = '') => `<img src="${path}" alt="${alt}" ${extra} onerror="this.style.opacity='.12';this.removeAttribute('src')">`;
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[character]));
