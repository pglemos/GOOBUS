/* ============================================================
   GOOBUS | Orçamento (formulário em etapas)
   Navegação · validação · campos dinâmicos · UTM · WhatsApp · sucesso
   ============================================================ */
(function () {
  "use strict";
  const form = document.getElementById("quoteForm");
  if (!form) return;
  const steps = [...form.querySelectorAll(".qstep")];
  const total = steps.length;
  let current = 1;

  const $ = (s, r = document) => r.querySelector(s);
  const progressDots = [...document.querySelectorAll(".qprog-step")];
  const barFill = $(".qprog-fill");
  const btnBack = $("#qBack");
  const btnNext = $("#qNext");
  const btnSubmit = $("#qSubmit");
  const live = $("#qLive");

  const SERVICE_LABELS = {
    aluguel: "Aluguel de ônibus", corporativo: "Fretamento corporativo",
    turismo: "Turismo ou excursão", romaria: "Romaria", evento: "Evento ou congresso",
    escola: "Escola ou formatura", banda: "Banda ou produção", transfer: "Transfer / aeroporto", outro: "Outro"
  };

  /* ---------- Helpers ---------- */
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  function todayStr() {
    const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function fmtDate(iso) {
    if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso || "";
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  }
  function fmtPhone(v) {
    const d = (v || "").replace(/\D/g, "");
    if (!d) return "";
    if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").replace(/-$/, "");
    return d.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  /* ---------- UTM / rastreamento ---------- */
  function captureTracking() {
    const p = new URLSearchParams(location.search);
    const get = (k) => p.get(k) || "";
    return {
      landing_page: location.href.split("#")[0],
      referrer: document.referrer || "(direto)",
      utm_source: get("utm_source"), utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"), utm_content: get("utm_content"),
      utm_term: get("utm_term"), gclid: get("gclid"), fbclid: get("fbclid")
    };
  }
  const tracking = captureTracking();

  /* ---------- Datas: mínimo = hoje ---------- */
  const t = todayStr();
  if (form.departure_date) form.departure_date.min = t;
  if (form.return_date) form.return_date.min = t;
  if (form.departure_date && form.return_date) {
    form.departure_date.addEventListener("change", () => {
      form.return_date.min = form.departure_date.value || t;
      if (form.return_date.value && form.return_date.value < form.return_date.min) {
        form.return_date.value = "";
      }
    });
  }

  /* ---------- Prefill a partir do quick-quote ---------- */
  (function prefill() {
    const p = new URLSearchParams(location.search);
    const svc = p.get("service");
    if (svc) {
      const map = Object.fromEntries(Object.entries(SERVICE_LABELS).map(([k, v]) => [v, k]));
      const key = map[svc] || "";
      const radio = form.querySelector(`input[name="service_type"][value="${key}"]`);
      if (radio) radio.checked = true;
    }
    if (p.get("origin")) form.origin_city.value = p.get("origin");
    if (p.get("dest")) form.destination_city.value = p.get("dest");
    if (p.get("date") && /^\d{4}-\d{2}-\d{2}$/.test(p.get("date")) && p.get("date") >= t) {
      form.departure_date.value = p.get("date");
    }
    const pax = p.get("pax");
    if (pax && form.passenger_count) {
      [...form.passenger_count.options].forEach((o) => { if (o.text === pax) o.selected = true; });
    }
    syncDynamic();
  })();

  /* ---------- Campos dinâmicos por serviço ---------- */
  function selectedService() {
    const r = form.querySelector('input[name="service_type"]:checked');
    return r ? r.value : "";
  }
  function syncDynamic() {
    const svc = selectedService();
    document.querySelectorAll("[data-svc]").forEach((b) => {
      const match = b.dataset.svc.split(",").includes(svc);
      b.hidden = !match;
      b.querySelectorAll("input,select,textarea").forEach((f) => { f.disabled = !match; });
    });
  }
  form.querySelectorAll('input[name="service_type"]').forEach((r) =>
    r.addEventListener("change", () => {
      syncDynamic();
      // limpar erro do grupo de rádio assim que escolher
      const grp = form.querySelector('[data-required-radio]');
      if (grp) grp.classList.remove("invalid");
    })
  );

  /* ---------- Máscara de telefone (BR) ---------- */
  function maskPhone(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (!v) return "";
    if (v.length <= 2) return "(" + v;
    if (v.length <= 6) return v.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    if (v.length <= 10) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }
  form.querySelectorAll('input[inputmode="tel"]').forEach((el) =>
    el.addEventListener("input", () => { el.value = maskPhone(el.value); })
  );

  /* ---------- Validação ---------- */
  function fieldWrap(field) {
    return field.closest(".field") || field.closest(".consent") || field.closest(".opt-grid") || field.parentElement;
  }
  function setInvalid(field, msg) {
    const wrap = fieldWrap(field);
    if (wrap) { wrap.classList.add("invalid"); const em = wrap.querySelector(".err-msg"); if (em && msg) em.textContent = msg; }
  }
  function clearInvalid(field) { const wrap = fieldWrap(field); if (wrap) wrap.classList.remove("invalid"); }
  form.querySelectorAll("input,select,textarea").forEach((f) =>
    f.addEventListener("input", () => clearInvalid(f))
  );

  function validateStep(n) {
    const stepEl = steps[n - 1];
    let firstBad = null;
    const fail = (el) => { setInvalid(el); if (!firstBad) firstBad = el; };

    // rádio obrigatório (serviço)
    const radioGroup = stepEl.querySelector("[data-required-radio]");
    if (radioGroup) {
      const name = radioGroup.dataset.requiredRadio;
      if (!form.querySelector(`input[name="${name}"]:checked`)) {
        radioGroup.classList.add("invalid"); if (!firstBad) firstBad = radioGroup;
      } else radioGroup.classList.remove("invalid");
    }

    // obrigatórios visíveis
    stepEl.querySelectorAll("[required]").forEach((f) => {
      if (f.disabled || f.offsetParent === null) return;
      let bad = false;
      if (f.type === "checkbox") bad = !f.checked;
      else if (f.type === "email") bad = !isEmail(f.value);
      else if (f.inputMode === "tel") bad = f.value.replace(/\D/g, "").length < 10;
      else bad = !f.value.trim();
      if (bad) fail(f); else clearInvalid(f);
    });

    // e-mail OPCIONAL: validar só se preenchido
    const em = form.email;
    if (n === 4 && em && em.value.trim() && !isEmail(em.value)) fail(em);

    // datas (etapa 2)
    if (n === 2) {
      const dep = form.departure_date, ret = form.return_date;
      if (dep && dep.value && dep.value < t) { setInvalid(dep, "A data de ida não pode estar no passado."); if (!firstBad) firstBad = dep; }
      if (ret && ret.value && dep && dep.value && ret.value < dep.value) { setInvalid(ret, "O retorno deve ser igual ou após a ida."); if (!firstBad) firstBad = ret; }
    }

    if (firstBad) {
      const focusEl = firstBad.matches("input,select,textarea") ? firstBad : firstBad.querySelector("input,select,textarea");
      if (focusEl) { try { focusEl.focus({ preventScroll: true }); } catch (e) { focusEl.focus(); } }
      // rolar até o topo do formulário para revelar o erro sem usar scrollIntoView
      const top = form.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      if (live) live.textContent = "Há campos a corrigir nesta etapa.";
    }
    return !firstBad;
  }

  /* ---------- Navegação ---------- */
  function show(n) {
    current = Math.max(1, Math.min(total, n));
    steps.forEach((s, i) => { s.hidden = i + 1 !== current; });
    progressDots.forEach((d, i) => {
      const on = i + 1 === current, done = i + 1 < current;
      d.classList.toggle("active", on);
      d.classList.toggle("done", done);
      if (on) d.setAttribute("aria-current", "step"); else d.removeAttribute("aria-current");
    });
    if (barFill) barFill.style.width = ((current - 1) / (total - 1)) * 100 + "%";
    btnBack.style.visibility = current === 1 ? "hidden" : "visible";
    btnNext.hidden = current === total;
    btnSubmit.hidden = current !== total;
    if (current === total) buildReview();
    if (live) live.textContent = "Etapa " + current + " de " + total;
    const top = document.querySelector(".quote-progress");
    if (top) window.scrollTo({ top: Math.max(0, top.getBoundingClientRect().top + window.scrollY - 90), behavior: "smooth" });
  }
  function goNext() { if (validateStep(current)) show(current + 1); }
  btnNext.addEventListener("click", goNext);
  btnBack.addEventListener("click", () => show(current - 1));

  /* ---------- Resumo (etapa final) ---------- */
  function val(name) { const f = form[name]; return f ? (f.value || "").trim() : ""; }
  function dynRows() {
    const svc = selectedService();
    const rows = [];
    if (svc === "corporativo") {
      if (val("org_company")) rows.push(["Empresa", val("org_company")]);
      if (val("org_headcount")) rows.push(["Colaboradores", val("org_headcount")]);
      if (val("org_frequency")) rows.push(["Frequência", val("org_frequency")]);
      if (val("org_shifts")) rows.push(["Turnos", val("org_shifts")]);
    } else if (svc === "romaria") {
      if (val("rom_group")) rows.push(["Igreja/grupo", val("rom_group")]);
      if (val("rom_destination")) rows.push(["Destino religioso", val("rom_destination")]);
    } else if (svc === "transfer") {
      if (val("tr_airport")) rows.push(["Aeroporto", val("tr_airport")]);
      if (val("tr_flight")) rows.push(["Voo", val("tr_flight")]);
      if (val("tr_hotel")) rows.push(["Hotel/destino", val("tr_hotel")]);
      if (val("tr_baggage")) rows.push(["Bagagens", val("tr_baggage")]);
    } else if (svc === "banda") {
      if (val("bd_event")) rows.push(["Evento/show", val("bd_event")]);
      if (val("bd_date")) rows.push(["Data do show", fmtDate(val("bd_date"))]);
      if (val("bd_gear")) rows.push(["Equipamentos", val("bd_gear")]);
    } else if (svc === "escola") {
      if (val("ed_school")) rows.push(["Instituição", val("ed_school")]);
      if (val("ed_age")) rows.push(["Faixa etária", val("ed_age")]);
      if (val("ed_trip")) rows.push(["Tipo de passeio", val("ed_trip")]);
      if (val("ed_responsible")) rows.push(["Responsável", val("ed_responsible")]);
    }
    return rows;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function buildReview() {
    const svc = SERVICE_LABELS[selectedService()] || "Não informado";
    const ida = [fmtDate(val("departure_date")), val("departure_time")].filter(Boolean).join(" às ");
    const volta = [fmtDate(val("return_date")), val("return_time")].filter(Boolean).join(" às ");
    const acess = form.accessibility_needs && form.accessibility_needs.checked ? "Sim" : "";
    const rows = [
      ["Serviço", svc],
      ["Origem", [val("origin_city"), val("origin_address")].filter(Boolean).join(", ")],
      ["Destino", [val("destination_city"), val("destination_address")].filter(Boolean).join(", ")],
      ["Tipo de viagem", val("trip_type")],
      ["Ida", ida],
      ["Retorno", volta],
      ["Passageiros", val("passenger_count")],
      ["Veículo", val("vehicle_preference")],
      ...dynRows(),
      ["Acessibilidade", acess],
      ["Observações", val("additional_notes")],
      ["Solicitante", val("name")],
      ["Organização", val("organization")],
      ["WhatsApp", fmtPhone(val("whatsapp"))],
      ["Telefone", fmtPhone(val("phone"))],
      ["E-mail", val("email")],
      ["Cidade", val("city")],
      ["Melhor horário", val("contact_preference")]
    ].filter((x) => x[1]);
    const box = $("#qReview");
    if (box) box.innerHTML = rows.map((x) => `<div class="rev-row"><span>${esc(x[0])}</span><b>${esc(x[1])}</b></div>`).join("");
  }

  /* ---------- Mensagem de WhatsApp ---------- */
  function buildWaMessage() {
    const svc = SERVICE_LABELS[selectedService()] || "Não informado";
    const lines = [
      "Olá! Gostaria de solicitar um orçamento com a GOOBUS.",
      "",
      "*Serviço:* " + svc,
      "*Origem:* " + (val("origin_city") || "Não informado"),
      "*Destino:* " + (val("destination_city") || "Não informado"),
      "*Ida:* " + (fmtDate(val("departure_date")) || "Não informado") + (val("departure_time") ? " às " + val("departure_time") : "")
    ];
    if (val("return_date")) lines.push("*Retorno:* " + fmtDate(val("return_date")) + (val("return_time") ? " às " + val("return_time") : ""));
    lines.push("*Passageiros:* " + (val("passenger_count") || "Não informado"));
    if (val("vehicle_preference")) lines.push("*Veículo:* " + val("vehicle_preference"));
    lines.push("*Nome:* " + (val("name") || "Não informado"));
    return lines.join("\n");
  }

  /* ---------- Envio ---------- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Enter / submit implícito em etapas intermediárias = avançar, nunca enviar
    if (current !== total) { goNext(); return; }
    // honeypot
    if (form.company_website && form.company_website.value) return;
    if (!validateStep(total)) return;

    const lead = {
      id: "lead_" + Date.now().toString(36),
      created_at: new Date().toISOString(),
      service_type: selectedService(),
      origin_city: val("origin_city"), origin_address: val("origin_address"),
      destination_city: val("destination_city"), destination_address: val("destination_address"),
      departure_date: val("departure_date"), departure_time: val("departure_time"),
      return_date: val("return_date"), return_time: val("return_time"),
      trip_type: val("trip_type"),
      passenger_count: val("passenger_count"), vehicle_preference: val("vehicle_preference"),
      accessibility_needs: form.accessibility_needs && form.accessibility_needs.checked ? "sim" : "",
      additional_notes: val("additional_notes"),
      name: val("name"), organization: val("organization"),
      whatsapp: val("whatsapp"), phone: val("phone"), email: val("email"),
      city: val("city"), contact_preference: val("contact_preference"),
      privacy_consent: form.privacy_consent.checked,
      marketing_consent: form.marketing_consent ? form.marketing_consent.checked : false,
      status: "novo",
      ...tracking
    };
    try {
      const all = JSON.parse(localStorage.getItem("goobus.leads") || "[]");
      all.push(lead); localStorage.setItem("goobus.leads", JSON.stringify(all));
    } catch (e) {}
    if (window.dataLayer) window.dataLayer.push({ event: "submit_lead", service_type: lead.service_type });

    const waBtn = $("#qSuccessWa");
    if (waBtn && typeof waLink === "function") { waBtn.href = waLink(buildWaMessage()); waBtn.target = "_blank"; waBtn.rel = "noopener"; }
    form.hidden = true;
    const prog = document.querySelector(".quote-progress");
    if (prog) prog.hidden = true;
    const aside = document.querySelector(".quote-aside");
    if (aside) aside.hidden = true;
    $("#quoteSuccess").hidden = false;
    if (live) live.textContent = "Solicitação enviada com sucesso.";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- init ---------- */
  show(1);
})();
