function renderPage() {
  if (!root) return;
  let content = '';
  if (PAGE === 'home') content = homePage();
  else if (PAGE === 'empresa') content = companyPage();
  else if (PAGE === 'servicos') content = servicesPage();
  else if (PAGE === 'frota') content = fleetPage();
  else if (PAGE === 'orcamento') content = budgetPage();
  else if (PAGE === 'contato') content = contactPage();
  else if (PAGE === 'privacidade') content = privacyPage();
  else if (PAGE.startsWith('service-')) content = servicePage(PAGE.replace('service-', ''));
  else content = notFoundPage();
  root.innerHTML = header() + `<main id="conteudo">${content}</main>` + footer();
  document.documentElement.classList.add('js');
  initialize();
}

function initialize() {
  initNavigation();
  initReveal();
  initProgress();
  initCounters();
  initForms();
  if (PAGE === 'home') initMap();
}

function initNavigation() {
  const headerEl = document.querySelector('.site-header');
  const menu = document.querySelector('.mobile-menu');
  const openButton = document.querySelector('.menu-button');
  const closeButton = menu?.querySelector('.mobile-menu__top button');
  let previousFocus = null;
  const focusable = () => [...(menu?.querySelectorAll('a,button') || [])];
  const setMenu = state => {
    if (!menu || !openButton) return;
    if (state) previousFocus = document.activeElement;
    menu.classList.toggle('open', state);
    menu.setAttribute('aria-hidden', String(!state));
    openButton.setAttribute('aria-expanded', String(state));
    document.body.style.overflow = state ? 'hidden' : '';
    if (state) focusable()[0]?.focus(); else previousFocus?.focus?.();
  };
  openButton?.addEventListener('click', () => setMenu(true));
  closeButton?.addEventListener('click', () => setMenu(false));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
    if (event.key === 'Tab' && menu?.classList.contains('open')) {
      const items = focusable();
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });
  const onScroll = () => headerEl?.classList.toggle('is-scrolled', window.scrollY > 22);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  document.querySelectorAll('a[href^="/"]').forEach(link => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || link.target === '_blank') return;
    const url = new URL(link.href, location.origin);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
    document.body.classList.add('is-leaving');
    setTimeout(() => { location.href = url.href; }, 160);
    event.preventDefault();
  }));
}

function initReveal() {
  const items = [...document.querySelectorAll('.reveal')];
  items.forEach((element, index) => element.style.setProperty('--delay', `${Math.min((index % 7) * 55, 330)}ms`));
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    items.forEach(element => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .1, rootMargin: '0px 0px -8%' });
  items.forEach(element => observer.observe(element));
}

function initProgress() {
  const element = document.querySelector('.page-progress');
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const value = max > 0 ? Math.max(0, Math.min(100, scrollY / max * 100)) : 0;
    element?.style.setProperty('--progress', `${value}%`);
  };
  update();
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
}

function initCounters() {
  document.querySelectorAll('[data-counter]').forEach(element => {
    const end = parseInt(element.dataset.counter || '0', 10);
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { element.textContent = String(end).padStart(2, '0'); return; }
      const start = performance.now();
      const tick = now => {
        const progress = Math.min(1, (now - start) / 1000);
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

function todayLocal() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

function prefillLeadForm(form) {
  if (form.dataset.kind !== 'budget') return;
  const params = new URLSearchParams(location.search);
  const service = params.get('servico') || params.get('service');
  const vehicle = params.get('veiculo');
  const values = {
    service: service,
    origin: params.get('origem') || params.get('origin'),
    destination: params.get('destino') || params.get('destination'),
    'date-out': params.get('data') || params.get('date'),
    passengers: params.get('passageiros') || params.get('pax')
  };
  Object.entries(values).forEach(([id, value]) => {
    if (!value) return;
    const field = form.querySelector(`#${id}`);
    if (!field) return;
    if (field.tagName === 'SELECT' && ![...field.options].some(option => option.value === value)) return;
    field.value = value;
  });
  if (vehicle) {
    const notes = form.querySelector('#notes');
    if (notes && !notes.value) notes.value = `Categoria de interesse: ${vehicle}`;
  }
  form.querySelectorAll('input,select,textarea').forEach(field => field.dispatchEvent(new Event('input', { bubbles: true })));
}

function setFieldError(field, message = '') {
  const wrapper = field.closest('.field');
  const error = wrapper?.querySelector('.field-error');
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (error) error.textContent = message;
}

function validateLeadForm(form) {
  let valid = true;
  form.querySelectorAll('input,select,textarea').forEach(field => {
    if (field.closest('.honeypot')) return;
    let message = '';
    if (field.required && field.type === 'checkbox' && !field.checked) message = 'Confirme o consentimento para continuar.';
    else if (field.required && !String(field.value || '').trim()) message = 'Preencha este campo.';
    else if (field.type === 'email' && field.value && !field.validity.valid) message = 'Informe um e-mail válido.';
    else if (field.name === 'telefone' && form.dataset.kind === 'budget' && field.value.replace(/\D/g, '').length < 10) message = 'Informe um telefone com DDD.';
    else if (field.name === 'passageiros' && field.value && (Number(field.value) < 1 || Number(field.value) > 999)) message = 'Informe entre 1 e 999 passageiros.';
    setFieldError(field, message);
    if (message) valid = false;
  });
  const departure = form.querySelector('[name="dataIda"]');
  const returning = form.querySelector('[name="dataRetorno"]');
  if (departure?.value && departure.value < todayLocal()) { setFieldError(departure, 'A data de ida não pode estar no passado.'); valid = false; }
  if (departure?.value && returning?.value && returning.value < departure.value) { setFieldError(returning, 'O retorno não pode ser anterior à ida.'); valid = false; }
  return valid;
}

function updateBudgetSummary(form) {
  if (form.dataset.kind !== 'budget') return;
  const value = name => form.elements[name]?.value?.trim() || '';
  const route = [value('origem'), value('destino')].filter(Boolean).join(' → ') || 'A definir';
  const set = (selector, text) => { const element = document.querySelector(selector); if (element) element.textContent = text || 'A definir'; };
  set('[data-summary-service]', value('servico'));
  set('[data-summary-route]', route);
  set('[data-summary-date]', value('dataIda') ? new Date(`${value('dataIda')}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir');
  set('[data-summary-passengers]', value('passageiros') ? `${value('passageiros')} passageiros` : 'A definir');
}

function initForms() {
  document.querySelectorAll('[data-lead-form]').forEach(form => {
    const alert = form.querySelector('.form-alert');
    const departure = form.querySelector('[name="dataIda"]');
    const returning = form.querySelector('[name="dataRetorno"]');
    if (departure) departure.min = todayLocal();
    if (returning) returning.min = todayLocal();
    prefillLeadForm(form);
    updateBudgetSummary(form);
    form.querySelectorAll('input,select,textarea').forEach(field => {
      field.addEventListener('input', () => { setFieldError(field); updateBudgetSummary(form); });
      field.addEventListener('change', () => {
        if (field === departure && returning) returning.min = departure.value || todayLocal();
        setFieldError(field);
        updateBudgetSummary(form);
      });
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (form.dataset.submitting === 'true') return;
      if (!validateLeadForm(form)) {
        showAlert(alert, 'Revise os campos indicados antes de enviar.', true);
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }
      form.dataset.submitting = 'true';
      const button = form.querySelector('button[type="submit"]');
      const original = button?.innerHTML || '';
      if (button) { button.disabled = true; button.textContent = 'Enviando…'; }
      const data = Object.fromEntries(new FormData(form).entries());
      data.tipo = form.dataset.kind;
      data.pagina = location.pathname;
      try {
        const response = await fetch('/api/enviar-lead.php', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) throw new Error(result.message || 'Não foi possível enviar.');
        showAlert(alert, `Solicitação recebida. Protocolo ${escapeHtml(result.protocolo)}. A equipe responderá pelo canal informado.`);
        form.reset();
        updateBudgetSummary(form);
      } catch (error) {
        const message = `Olá! Tentei enviar uma solicitação pelo site GOOBUS.\nNome: ${data.nome || ''}\nServiço: ${data.servico || data.assunto || ''}\nOrigem: ${data.origem || ''}\nDestino: ${data.destino || ''}\nPassageiros: ${data.passageiros || ''}`;
        showAlert(alert, `O envio automático não respondeu. <a href="${wa(message)}" target="_blank" rel="noopener">Continue pelo WhatsApp</a>.`, true, true);
      } finally {
        form.dataset.submitting = 'false';
        if (button) { button.disabled = false; button.innerHTML = original; }
      }
    });
  });
}

function showAlert(element, message, error = false, allowHtml = false) {
  if (!element) return;
  element.hidden = false;
  if (allowHtml) element.innerHTML = message; else element.textContent = message;
  element.classList.toggle('error', error);
  element.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
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
    let points = [];
    const busIcon = L.divIcon({ className: '', html: '<div class="route-bus-marker"></div>', iconSize: [34,34], iconAnchor: [17,27] });
    const stopIcon = L.divIcon({ className: '', html: '<div class="route-stop-marker"></div>', iconSize: [14,14], iconAnchor: [7,7] });
    const setTelemetry = route => {
      document.querySelector('[data-route-duration]').textContent = route.duration;
      document.querySelector('[data-route-distance]').textContent = route.distance;
      document.querySelector('[data-route-occupancy]').textContent = route.occupancy;
    };
    const clear = () => {
      if (layer) map.removeLayer(layer);
      markers.forEach(marker => map.removeLayer(marker));
      markers = [];
      if (bus) map.removeLayer(bus);
      if (animation) cancelAnimationFrame(animation);
    };
    const getGeometry = async route => {
      const coordinates = route.stops.map(stop => `${stop[2]},${stop[1]}`).join(';');
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 7000);
      try {
        const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`, { signal: controller.signal });
        if (!response.ok) throw new Error('OSRM indisponível');
        const json = await response.json();
        const coordinatesList = json.routes?.[0]?.geometry?.coordinates;
        if (!coordinatesList?.length) throw new Error('Geometria ausente');
        return coordinatesList.map(([lng, lat]) => [lat, lng]);
      } finally { clearTimeout(timer); }
    };
    const draw = async index => {
      clear();
      const route = ROUTES[index];
      setTelemetry(route);
      document.querySelectorAll('.route-tab').forEach((button, buttonIndex) => button.setAttribute('aria-selected', String(buttonIndex === index)));
      points = route.stops.map(stop => [stop[1], stop[2]]);
      try { points = await getGeometry(route); } catch { points = route.stops.map(stop => [stop[1], stop[2]]); }
      layer = L.polyline(points, { color: '#ff7020', weight: 5, opacity: .9, lineCap: 'round' }).addTo(map);
      route.stops.forEach(stop => { markers.push(L.marker([stop[1], stop[2]], { icon: stopIcon }).addTo(map).bindTooltip(stop[0], { direction: 'top' })); });
      map.fitBounds(layer.getBounds(), { padding: [32,32], maxZoom: 12 });
      bus = L.marker(points[0], { icon: busIcon, zIndexOffset: 500 }).addTo(map);
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const total = points.length;
      const start = performance.now();
      const duration = 16000;
      const step = now => {
        const progress = ((now - start) % duration) / duration;
        const scaled = progress * (total - 1);
        const pointIndex = Math.floor(scaled);
        const interpolation = scaled - pointIndex;
        const current = points[pointIndex];
        const next = points[Math.min(pointIndex + 1, total - 1)];
        bus.setLatLng([current[0] + (next[0] - current[0]) * interpolation, current[1] + (next[1] - current[1]) * interpolation]);
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

renderPage();
