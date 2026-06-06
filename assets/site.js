/* ============================================================
   GOOBUS | site engine (vanilla)
   Header/footer/mobile chrome · navegação · WhatsApp · formulários
   ============================================================ */
(function () {
  "use strict";

  /* ---------- CONFIG CENTRAL DA EMPRESA ----------
     Edite SOMENTE aqui os dados oficiais. Nada de telefone/endereço
     espalhado pelos componentes. */
  const COMPANY = {
    name: "GOOBUS",
    legalName: "GOOBUS TRANSPORTES E TURISMO LTDA",
    cnpj: "49.151.280/0001-28",
    phoneLabel: "(11) 98493-1178",
    phoneTel: "+5511984931178",
    whatsapp: "5511984931178",            // número informado (celular)
    email: "",
    address: "Av. Hilário Pereira de Souza, 406, Sala 1401, 14º andar, Centro",
    cep: "06010-170",
    city: "Osasco, SP",
    serviceRegions: "Atendimento sob consulta conforme origem, destino e disponibilidade operacional.",
    hours: "Atendimento em horário comercial pelo WhatsApp.",
    antt: "",
    cadastur: "",
    instagram: "",
    facebook: ""
  };
  window.GOOBUS = COMPANY;

  /* ---------- Base path (páginas em /servicos/ sobem um nível) ---------- */
  const BASE = location.pathname.includes("/servicos/") ? "../" : "";
  const url = (p) => BASE + p;

  /* ---------- Ícones ---------- */
  const I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    chevD: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    church: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M9 5h6"/><path d="M6 22V12l6-4 6 4v10"/><path d="M6 22h12M10 22v-4a2 2 0 0 1 4 0v4"/></svg>',
    school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 9-10-5L2 9l10 5 10-5Z"/><path d="M6 10.6V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-5.4"/><path d="M22 9v6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 3.7-2.5 2.5-1.8-.4a.5.5 0 0 0-.5.8L5 18l1.8 2.8a.5.5 0 0 0 .8-.1l2.5-1.8 3.7 3.2a.5.5 0 0 0 .8-.5Z"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6M16 6v6M2 12h20M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11M6 17h12M5 20h2a1 1 0 0 0 1-1v-2M16 19a1 1 0 0 0 1 1h2"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a3 3 0 0 0 3-3V8"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
    headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"/><path d="M21 14v3a4 4 0 0 1-4 4h-3"/></svg>',
    accessibility: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="4" r="1"/><path d="m18 19-1-7-5 1.5M9 9l4 .5"/><path d="M5 20a4 4 0 0 0 7 1l1-2"/><circle cx="12" cy="12" r="9" opacity=".25"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    ac: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5l-5 3-5-3M7 19l5-3 5 3M2 12h20M5 7l3 5-3 5M19 7l-3 5 3 5"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5M9 8V2M15 8V2M18 8v3a6 6 0 0 1-12 0V8Z"/></svg>',
    seat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3M3 11h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3ZM5 16v4M19 16v4"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>'
  };
  window.GOOBUS_ICONS = I;

  /* ---------- Logo ---------- */
  function mark(forDark) {
    const bg = forDark ? "var(--accent)" : "var(--navy)";
    const l1 = forDark ? "var(--navy)" : "var(--accent)";
    const l2 = forDark ? "rgba(11,37,69,.85)" : "#fff";
    const l3 = forDark ? "rgba(11,37,69,.55)" : "rgba(255,255,255,.65)";
    return `<svg class="mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="${bg}"/>
      <rect x="9" y="13" width="22" height="3.6" rx="1.8" fill="${l1}"/>
      <rect x="9" y="19.4" width="16" height="3.6" rx="1.8" fill="${l2}"/>
      <rect x="9" y="25.8" width="11" height="3.6" rx="1.8" fill="${l3}"/>
    </svg>`;
  }
  function brand(onHero, forDark) {
    return `<a class="brand ${onHero ? "on-hero" : ""}" href="${url("index.html")}" aria-label="GOOBUS | página inicial">
      ${mark(forDark)}<span class="word">GOO<b>BUS</b></span></a>`;
  }
  window.GOOBUS_MARK = mark;

  /* ---------- WhatsApp link ---------- */
  function waLink(message) {
    const base = "https://wa.me/" + COMPANY.whatsapp;
    return message ? base + "?text=" + encodeURIComponent(message) : base;
  }
  window.waLink = waLink;
  window.waDefault = function () {
    return waLink("Olá! Gostaria de solicitar um orçamento de transporte com a GOOBUS.");
  };

  /* ---------- Navegação ---------- */
  const NAV = [
    { label: "Início", href: "index.html", match: ["index.html", ""] },
    { label: "Empresa", href: "empresa.html", match: ["empresa.html"] },
    { label: "Serviços", href: "servicos.html", match: ["servicos.html", "/servicos/"] },
    { label: "Frota", href: "frota.html", match: ["frota.html"] },
    { label: "Orçamento", href: "orcamento.html", match: ["orcamento.html"] },
    { label: "Contato", href: "contato.html", match: ["contato.html"] }
  ];
  const path = location.pathname;
  const isActive = (m) =>
    m.some((x) => (x === "" ? /\/(index\.html)?$/.test(path) : path.includes(x)));

  /* ---------- HEADER ---------- */
  function buildHeader() {
    const heroMode = document.body.dataset.hero === "true";
    const header = document.createElement("header");
    header.className = "site-header" + (heroMode ? " on-hero-mode" : " solid");
    header.innerHTML = `
      <div class="container container-wide bar">
        ${brand(heroMode, false)}
        <nav class="nav" aria-label="Principal">
          ${NAV.map((n) => `<a href="${url(n.href)}" class="${isActive(n.match) ? "active" : ""}">${n.label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="icon-btn wa-icon" href="${waLink("Olá! Gostaria de falar com a equipe GOOBUS.")}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${I.wa}</a>
          <a class="btn btn-primary" href="${url("orcamento.html")}">Solicitar orçamento</a>
          <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">${I.menu}</button>
        </div>
      </div>`;
    document.body.prepend(header);
    if (!heroMode) {
      const sp = document.createElement("div");
      sp.className = "nav-spacer";
      header.after(sp);
    }

    // scroll state
    const onScroll = () => {
      if (window.scrollY > 24) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // drawer
    header.querySelector(".menu-toggle").addEventListener("click", openDrawer);
  }

  /* ---------- DRAWER (mobile) ---------- */
  function buildDrawer() {
    const d = document.createElement("div");
    d.className = "drawer";
    d.innerHTML = `
      <div class="scrim" data-close></div>
      <div class="panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div class="d-head">${brand(false, false)}
          <button class="icon-btn" data-close aria-label="Fechar menu">${I.close}</button>
        </div>
        <nav>
          ${NAV.map((n) => `<a class="d-link ${isActive(n.match) ? "active" : ""}" href="${url(n.href)}">${n.label}</a>`).join("")}
        </nav>
        <div class="d-cta">
          <a class="btn btn-primary btn-lg btn-block" href="${url("orcamento.html")}">Solicitar orçamento</a>
          <a class="btn btn-wa btn-lg btn-block" href="${waDefault()}" target="_blank" rel="noopener">${I.wa} Falar no WhatsApp</a>
        </div>
      </div>`;
    document.body.appendChild(d);
    d.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeDrawer));
    d.querySelectorAll(".d-link").forEach((el) => el.addEventListener("click", closeDrawer));
    window._gbDrawer = d;
  }
  function openDrawer() {
    const d = window._gbDrawer;
    d.classList.add("open");
    document.body.style.overflow = "hidden";
    const t = document.querySelector(".menu-toggle");
    if (t) t.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    const d = window._gbDrawer;
    d.classList.remove("open");
    document.body.style.overflow = "";
    const t = document.querySelector(".menu-toggle");
    if (t) t.setAttribute("aria-expanded", "false");
  }

  /* ---------- FOOTER ---------- */
  function buildFooter() {
    const f = document.createElement("footer");
    f.className = "site-footer";
    const svcLinks = [
      ["Aluguel de ônibus", "servicos/aluguel-de-onibus.html"],
      ["Fretamento corporativo", "servicos/fretamento-corporativo.html"],
      ["Turismo e excursões", "servicos/turismo-excursoes.html"],
      ["Romarias", "servicos/romarias.html"],
      ["Eventos e congressos", "servicos/eventos.html"],
      ["Escolas e formaturas", "servicos/escolas-formaturas.html"],
      ["Bandas e produções", "servicos/bandas-producoes.html"],
      ["Transfers e city tour", "servicos/transfers.html"]
    ];
    f.innerHTML = `
      <div class="container container-wide">
        <div class="f-top">
          <div>
            ${brand(false, true)}
            <p style="margin-top:18px;max-width:34ch;font-size:var(--fs-sm);line-height:1.6">Transporte sob medida para empresas, grupos, igrejas, escolas e eventos, com planejamento, conforto e atenção à segurança em cada trajeto.</p>
            <div style="display:flex;gap:10px;margin-top:22px">
              <a class="icon-btn" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);color:#fff" href="${waDefault()}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
              <a class="icon-btn" style="background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);color:#fff" href="tel:${COMPANY.phoneTel}" aria-label="Telefone">${I.phone}</a>
            </div>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>${NAV.map((n) => `<li><a href="${url(n.href)}">${n.label}</a></li>`).join("")}
              <li><a href="${url("politica-de-privacidade.html")}">Política de Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h4>Serviços</h4>
            <ul>${svcLinks.map((s) => `<li><a href="${url(s[1])}">${s[0]}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href="${waDefault()}" target="_blank" rel="noopener">WhatsApp ${COMPANY.phoneLabel}</a></li>
              <li><a href="tel:${COMPANY.phoneTel}">${COMPANY.phoneLabel}</a></li>
              <li style="opacity:.85">${COMPANY.address}</li>
              <li style="opacity:.85">${COMPANY.city} · CEP ${COMPANY.cep}</li>
            </ul>
          </div>
        </div>
        <div class="f-bottom">
          <span>© ${new Date().getFullYear()} GOOBUS TRANSPORTES E TURISMO LTDA · CNPJ 49.151.280/0001-28</span>
          <span style="opacity:.7">Transporte de passageiros, fretamento e turismo sob consulta.</span>
        </div>
      </div>`;
    document.body.appendChild(f);
  }

  /* ---------- WhatsApp flutuante + barra mobile ---------- */
  function buildFloaters() {
    const hasPrimaryForm = document.getElementById("quoteForm") || document.getElementById("contactForm");
    if (!hasPrimaryForm) {
      const wa = document.createElement("a");
      wa.className = "wa-float";
      wa.href = waDefault();
      wa.target = "_blank";
      wa.rel = "noopener";
      wa.setAttribute("aria-label", "Falar no WhatsApp");
      wa.innerHTML = `<span class="ping"></span>${I.wa}`;
      document.body.appendChild(wa);
    }

    const mbar = document.createElement("nav");
    mbar.className = "mbar";
    mbar.setAttribute("aria-label", "Ações rápidas");
    mbar.innerHTML = `
      <a class="m-wa" href="${waDefault()}" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
      <a class="m-quote" href="${url("orcamento.html")}">${I.arrow} Orçamento</a>`;
    document.body.appendChild(mbar);
    document.body.classList.add("has-mbar");
    const onScroll = () => {
      if (window.scrollY > 360) mbar.classList.add("show");
      else mbar.classList.remove("show");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Injeção de ícones / links ---------- */
  function injectIcons() {
    document.querySelectorAll("[data-ico]").forEach((el) => {
      const k = el.getAttribute("data-ico");
      if (I[k] && !el.dataset.icoDone) { el.innerHTML = I[k]; el.dataset.icoDone = "1"; }
    });
    document.querySelectorAll("[data-ico-pre]").forEach((el) => {
      const k = el.getAttribute("data-ico-pre");
      if (I[k] && !el.dataset.icoPreDone) { el.insertAdjacentHTML("afterbegin", I[k]); el.dataset.icoPreDone = "1"; }
    });
    document.querySelectorAll("[data-wa]").forEach((a) => {
      a.href = a.dataset.wa ? waLink(a.dataset.wa) : waDefault();
      a.target = "_blank"; a.rel = "noopener";
    });
  }
  window.GOOBUS_injectIcons = injectIcons;

  /* ---------- SEO: head tags + JSON-LD + skip link ---------- */
  function buildSeo() {
    const head = document.head;
    const origin = location.origin && location.origin !== "null" ? location.origin : "";
    const canonical = (origin + location.pathname).replace(/index\.html$/, "");
    const title = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const desc = descEl ? descEl.getAttribute("content") : "";
    const siteUrl = origin || "https://goobuss.com";
    const ogImg = siteUrl + "/assets/img/seg-aeroportos.jpg";

    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      for (const k in attrs) el.setAttribute(k, attrs[k]);
      head.appendChild(el);
      return el;
    };
    const ensureMeta = (sel, make) => { if (!document.querySelector(sel)) make(); };

    // favicon + theme-color + lang
    if (!document.querySelector('link[rel="icon"]')) add("link", { rel: "icon", type: "image/svg+xml", href: url("assets/favicon.svg") });
    ensureMeta('meta[name="theme-color"]', () => add("meta", { name: "theme-color", content: "#0b2545" }));
    if (!document.documentElement.lang) document.documentElement.lang = "pt-BR";

    // canonical
    ensureMeta('link[rel="canonical"]', () => add("link", { rel: "canonical", href: canonical }));

    // Open Graph
    const og = {
      "og:type": "website", "og:site_name": "GOOBUS",
      "og:title": title, "og:description": desc, "og:url": canonical,
      "og:image": ogImg, "og:locale": "pt_BR"
    };
    for (const p in og) ensureMeta(`meta[property="${p}"]`, () => add("meta", { property: p, content: og[p] }));

    // Twitter
    const tw = {
      "twitter:card": "summary_large_image", "twitter:title": title,
      "twitter:description": desc, "twitter:image": ogImg
    };
    for (const n in tw) ensureMeta(`meta[name="${n}"]`, () => add("meta", { name: n, content: tw[n] }));

    // JSON-LD LocalBusiness (dados reais)
    if (!document.getElementById("ld-org")) {
      const ld = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": siteUrl + "/#goobus",
        name: "GOOBUS",
        legalName: COMPANY.legalName,
        taxID: COMPANY.cnpj,
        description: desc,
        url: siteUrl,
        image: ogImg,
        telephone: COMPANY.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Hilário Pereira de Souza, 406, Sala 1401, 14º andar, Centro",
          addressLocality: "Osasco",
          addressRegion: "SP",
          postalCode: COMPANY.cep,
          addressCountry: "BR"
        },
        knowsAbout: [
          "Aluguel de ônibus", "Fretamento corporativo", "Transporte de funcionários",
          "Turismo e excursões", "Romarias", "Transfer aeroporto", "Transporte para eventos"
        ]
      };
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = "ld-org";
      s.textContent = JSON.stringify(ld);
      head.appendChild(s);
    }

    // skip link (a11y)
    if (!document.querySelector(".skip-link")) {
      const a = document.createElement("a");
      a.className = "skip-link"; a.href = "#conteudo"; a.textContent = "Pular para o conteúdo";
      document.body.prepend(a);
      const main = document.querySelector("main") || document.querySelector("section");
      if (main && !main.id) main.id = "conteudo";
    }
  }

  /* ---------- Init ---------- */
  function init() {
    buildSeo();
    injectIcons();
    buildHeader();
    buildDrawer();
    buildFooter();
    buildFloaters();
    initReveal();
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
