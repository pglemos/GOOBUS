(() => {
  'use strict';

  const PAGE = window.GOOBUS_ROUTE?.page || document.body.dataset.page || 'home';
  const PHONE_RAW = '5511984931178';
  const whatsapp = message => `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;

  const serviceData = {
    'service-aluguel-de-onibus': {
      title: 'Aluguel de ônibus',
      hero: 'Seu grupo, o veículo certo e um roteiro sem improviso.',
      description: 'Ônibus, micro-ônibus e vans com motorista para viagens, eventos, turismo e deslocamentos sob demanda.',
      benefits: [['Escolha orientada','A categoria é indicada a partir do grupo, da rota e das bagagens.'],['Operação completa','Motorista, veículo e condições entram na mesma proposta.'],['Uso flexível','Viagens pontuais, eventos, turismo e deslocamentos especiais.']],
      scenarios: ['Excursões e viagens em grupo','Eventos e congressos','Romarias e retiros','Transfers e city tour'],
      faq: [['A GOOBUS aluga somente ônibus?','Não. A categoria pode ser ônibus, micro-ônibus ou van executiva, conforme passageiros, rota e disponibilidade.'],['O motorista está incluído?','Sim. O serviço é cotado com motorista e condições operacionais definidas na proposta.'],['Posso incluir várias paradas?','Sim. Informe todos os pontos para avaliação de tempo, acesso e categoria.']]
    },
    'service-fretamento-corporativo': {
      title: 'Fretamento corporativo',
      hero: 'Mobilidade para empresas que precisam de previsibilidade.',
      description: 'Rotas recorrentes ou pontuais para colaboradores, visitantes e equipes, estruturadas a partir de turnos e pontos reais.',
      benefits: [['Rotas estruturadas','Pontos, horários e frequência são avaliados antes da proposta.'],['Gestão centralizada','RH, Facilities ou Operações mantêm um canal direto com a GOOBUS.'],['Escala adequada','Operações eventuais, recorrentes ou contínuas recebem escopo próprio.']],
      scenarios: ['Transporte diário de colaboradores','Treinamentos e convenções','Visitas técnicas e integração','Operações em turnos'],
      faq: [['Atendem contratos recorrentes?','Sim. A proposta pode contemplar operações eventuais, recorrentes ou contínuas.'],['É possível usar vários pontos de embarque?','Sim. Os pontos são avaliados com turnos, demanda e tempo de percurso.'],['A empresa recebe documentação comercial?','Dados cadastrais, condições e documentos aplicáveis são organizados na proposta e contratação.']]
    },
    'service-turismo-excursoes': {
      title: 'Turismo e excursões',
      hero: 'A viagem começa antes do destino aparecer na janela.',
      description: 'Roteiros para grupos, agências, associações e viagens particulares, com horários e paradas organizados.',
      benefits: [['Roteiro organizado','Saída, paradas, chegada e retorno entram no mesmo planejamento.'],['Conforto coerente','A categoria considera distância, duração e perfil do grupo.'],['Atendimento a grupos','Agências, associações, famílias e excursões particulares.']],
      scenarios: ['Passeios e bate-volta','Roteiros de vários dias','Viagens de associações','City tours'],
      faq: [['Atendem viagens de vários dias?','Sim. Hospedagem, agenda e deslocamentos intermediários devem entrar no briefing.'],['Vocês criam o roteiro turístico?','A GOOBUS planeja o transporte. A programação turística pode ser alinhada com a agência ou responsável.'],['É possível incluir paradas?','Sim. Paradas programadas precisam ser informadas para avaliação de tempo e acesso.']]
    },
    'service-romarias': {
      title: 'Romarias',
      hero: 'Uma jornada de fé começa com todos sabendo onde e quando embarcar.',
      description: 'Transporte para romarias, retiros, encontros religiosos e peregrinações com pontos de embarque claros.',
      benefits: [['Pontos organizados','Embarques podem ser distribuídos conforme a realidade do grupo.'],['Agenda respeitada','Celebrações, paradas e retorno entram no planejamento.'],['Atenção ao perfil','Duração, conforto e acessibilidade são avaliados conforme passageiros.']],
      scenarios: ['Romarias e peregrinações','Retiros e encontros religiosos','Congressos de igrejas','Viagens de comunidades'],
      faq: [['É possível embarcar em vários bairros?','Sim. Os pontos devem ser informados para análise de rota e tempo.'],['Atendem viagens durante a madrugada?','Horários são avaliados conforme roteiro, disponibilidade e condições da proposta.'],['Podemos levar materiais e bagagens?','Sim. O volume deve ser informado para escolha correta da categoria.']]
    },
    'service-eventos': {
      title: 'Eventos e congressos',
      hero: 'Quando o evento tem hora para começar, a mobilidade não pode improvisar.',
      description: 'Logística de chegada e saída para feiras, congressos, festivais, confraternizações e grandes grupos.',
      benefits: [['Fluxo sincronizado','Chegadas e saídas são organizadas a partir da programação.'],['Múltiplos grupos','Hotéis, aeroportos e polos podem ser tratados no mesmo plano.'],['Contato centralizado','A produção mantém um canal direto com a equipe responsável.']],
      scenarios: ['Feiras e congressos','Confraternizações corporativas','Festivais e encontros','Convidados e equipes'],
      faq: [['Atendem vários hotéis ou pontos?','Sim. Informe a distribuição dos participantes para construir os circuitos.'],['É possível trabalhar com horários escalonados?','Sim. Janelas de chegada e saída são essenciais para dimensionar a operação.'],['Há apoio para a produção?','Responsáveis, pontos de encontro e necessidades de apoio são definidos na proposta.']]
    },
    'service-escolas-formaturas': {
      title: 'Escolas e formaturas',
      hero: 'Transporte escolar eventual com responsabilidade claramente definida.',
      description: 'Excursões escolares, visitas técnicas, atividades acadêmicas e formaturas com responsáveis e horários definidos.',
      benefits: [['Responsável identificado','A instituição centraliza dados, autorizações e comunicação.'],['Programação precisa','Embarque, atividade e retorno são tratados no mesmo roteiro.'],['Categoria adequada','Passageiros, acessos e materiais orientam a escolha do veículo.']],
      scenarios: ['Visitas técnicas','Passeios e excursões','Formaturas e cerimônias','Eventos acadêmicos'],
      faq: [['Atendem crianças e adolescentes?','A operação é analisada conforme instituição responsável, faixa etária, acompanhantes e requisitos aplicáveis.'],['A escola pode definir vários pontos?','Sim, desde que sejam informados para avaliação de rota e horário.'],['É possível solicitar acessibilidade?','Sim. A necessidade deve ser informada para confirmação de veículo compatível.']]
    },
    'service-bandas-producoes': {
      title: 'Bandas e produções',
      hero: 'A equipe precisa chegar antes do show. Os equipamentos também.',
      description: 'Deslocamento de artistas, produção e equipe técnica considerando agenda, instrumentos, bagagens e equipamentos.',
      benefits: [['Agenda crítica','Passagem de som, montagem e apresentação orientam os horários.'],['Carga informada','Cases, instrumentos e bagagens entram no dimensionamento.'],['Rota integrada','Aeroporto, hotel, venue e retorno podem compor a mesma agenda.']],
      scenarios: ['Turnês e apresentações','Festivais e eventos privados','Produções audiovisuais','Equipes técnicas'],
      faq: [['Transportam instrumentos e equipamentos?','O volume e o tipo de material precisam ser informados para avaliar espaço e categoria.'],['Atendem agendas com vários destinos?','Sim. Cada trecho, horário e parada deve constar no briefing.'],['É possível atender madrugada?','A disponibilidade e as condições são confirmadas na proposta.']]
    },
    'service-transfers': {
      title: 'Transfers e city tour',
      hero: 'Do desembarque ao destino, com a agenda sob controle.',
      description: 'Traslados entre aeroportos, hotéis, empresas, eventos e pontos turísticos com bagagens previstas no planejamento.',
      benefits: [['Contexto do voo','Horário, terminal, destino e tempo de espera entram no briefing.'],['Bagagem prevista','O volume informado orienta a escolha da categoria.'],['Roteiro urbano','Transfer, receptivo e city tour podem fazer parte da mesma operação.']],
      scenarios: ['Aeroporto e hotel','Aeroporto e empresa','Receptivo de convidados','City tour para grupos'],
      faq: [['Atendem Guarulhos e Congonhas?','A disponibilidade é confirmada conforme data, origem, destino e horário solicitado.'],['O motorista aguarda atrasos de voo?','Tempo de espera e condições precisam ser definidos na proposta. Informe o voo para avaliação.'],['É possível combinar transfer e city tour?','Sim. O roteiro completo deve ser informado para dimensionamento de veículo e tempo.']]
    }
  };

  const meta = {
    servicos: ['Serviços de transporte | GOOBUS','Aluguel de ônibus, fretamento corporativo, turismo, transfers, eventos, escolas, romarias e produções.'],
    frota: ['Frota | GOOBUS','Ônibus, micro-ônibus e vans indicados conforme passageiros, rota, bagagens e conforto desejado.'],
    empresa: ['Empresa | GOOBUS','Conheça a GOOBUS, sua abordagem de planejamento e os dados comerciais para contratação.'],
    orcamento: ['Solicitar orçamento | GOOBUS','Solicite uma proposta informando rota, datas, passageiros e tipo de serviço.'],
    contato: ['Contato | GOOBUS','Fale com a GOOBUS por WhatsApp, e-mail ou formulário de contato.']
  };

  function updateMeta(title, description) {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', location.href.split(/[?#]/)[0]);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `${location.origin}${location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`}`;
  }

  function enhanceService(config) {
    const heroTitle = document.querySelector('.internal-hero h1');
    const heroText = document.querySelector('.internal-hero p');
    if (heroTitle) heroTitle.textContent = config.hero;
    if (heroText) heroText.textContent = config.description;
    document.querySelectorAll('h1,h2,h3,a,option').forEach(element => {
      if (element.textContent.trim() === 'Transfers e aeroportos') element.textContent = 'Transfers e city tour';
    });

    const cta = document.querySelector('.cta-band')?.closest('section');
    if (!cta || document.querySelector('[data-page-audit-section]')) return;
    const section = document.createElement('section');
    section.className = 'section section--dark audited-service';
    section.dataset.pageAuditSection = PAGE;
    section.innerHTML = `<div class="container"><div class="section-head reveal visible"><span class="section-label">Auditoria do serviço</span><h2>O que muda nesta operação.</h2><p>Cada serviço possui briefing, riscos e decisões próprias. Esta página não reutiliza conteúdo genérico.</p></div><div class="audit-benefit-grid">${config.benefits.map(([title,text],index)=>`<article><span>0${index+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><div class="audit-scenarios"><div><span class="section-label">Indicado para</span><h2>Cenários atendidos</h2></div><ul>${config.scenarios.map(item=>`<li>${item}</li>`).join('')}</ul></div><div class="audit-faq"><div class="section-head"><span class="section-label">Dúvidas frequentes</span><h2>Respostas antes do orçamento.</h2></div>${config.faq.map(([question,answer])=>`<details><summary>${question}<span>+</span></summary><p>${answer}</p></details>`).join('')}</div><div class="audit-service-cta"><h2>Planeje ${config.title.toLowerCase()} com todos os dados no mesmo briefing.</h2><a class="button button--orange" href="/orcamento/?servico=${encodeURIComponent(config.title)}">Solicitar orçamento</a><a class="button button--outline" href="${whatsapp(`Olá! Gostaria de cotar ${config.title}.`)}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></div></div>`;
    cta.before(section);
  }

  function enhancePrimaryPage() {
    const labels = {
      servicos: ['PORTFÓLIO / ROTA / CONTEXTO','Todos os oito serviços revisados e conectados ao mesmo sistema visual.'],
      frota: ['PASSAGEIROS / BAGAGEM / ACESSO','A categoria é indicada pelo roteiro; capacidade e comodidades são confirmadas na proposta.'],
      empresa: ['PROCESSO / CLAREZA / RESPONSABILIDADE','Dados comerciais, forma de trabalho e limites da proposta apresentados sem promessas inventadas.'],
      orcamento: ['BRIEFING / PROTOCOLO / RETORNO','Formulário único, validação acessível, prefill de serviço e fallback pelo WhatsApp.'],
      contato: ['WHATSAPP / E-MAIL / FORMULÁRIO','Canais oficiais e endereço comercial reunidos sem duplicação ou rotas antigas.']
    };
    const data = labels[PAGE];
    if (!data || document.querySelector('.page-audit-stamp')) return;
    const hero = document.querySelector('.internal-hero__content');
    const stamp = document.createElement('div');
    stamp.className = 'page-audit-stamp';
    stamp.innerHTML = `<strong>${data[0]}</strong><span>${data[1]}</span>`;
    hero?.append(stamp);
  }

  function prepareForms() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const today = now.toISOString().slice(0,10);
    document.querySelectorAll('input[type="date"]').forEach(input => { input.min = today; });
    const params = new URLSearchParams(location.search);
    const service = params.get('servico') || params.get('service');
    const select = document.querySelector('select[name="servico"]');
    if (service && select) {
      const matching = [...select.options].find(option => option.value === service || option.textContent.trim() === service);
      if (matching) select.value = matching.value;
    }
    const vehicle = params.get('veiculo');
    const notes = document.querySelector('textarea[name="observacoes"]');
    if (vehicle && notes && !notes.value) notes.value = `Preferência de veículo: ${vehicle}`;
    document.querySelectorAll('input[name="telefone"]').forEach(input => { input.type = 'tel'; input.inputMode = 'tel'; });
  }

  const service = serviceData[PAGE];
  if (service) {
    updateMeta(`${service.title} | GOOBUS`, service.description);
    enhanceService(service);
  } else if (meta[PAGE]) {
    updateMeta(meta[PAGE][0], meta[PAGE][1]);
    enhancePrimaryPage();
  }
  prepareForms();
  document.body.dataset.auditedPage = PAGE;
})();
