# Auditoria de Scores — Site GOOBUS (2026-06-06)

Metodologia: Lighthouse real (mobile) em 3 páginas representativas + análise estática
de HTML/CSS/JS nas 15 páginas únicas. As 8 páginas de serviço compartilham o mesmo
template, logo têm scores praticamente idênticos.

## Scores Lighthouse reais (mobile, navigation)

| Página | Acessib. | Best Practices | SEO | Agentic |
|---|---|---|---|---|
| index (home) | 98 | 100 | 92 | 98 |
| orcamento | 96 | 100 | 100 | 92 |
| servicos/eventos (= demais serviços) | 92 | 100 | 100 | 96 |

> Performance não é coberta pelo Lighthouse-snapshot; estimada via peso/recursos
> (site estático, vanilla JS, sem framework, imagens locais) → muito alta.

## Scorecard qualitativo (0–100) por página e dimensão

| Página | UX/UI | Acessib | Naveg | Design | Modern | Respons | Mobile | SEO | Heatmap | Perf | Média |
|---|---|---|---|---|---|---|---|---|---|---|---|
| index (home) | 88 | 95 | 90 | 92 | 90 | 95 | 92 | 78 | 0 | 90 | **81** |
| empresa | 82 | 92 | 88 | 88 | 88 | 92 | 90 | 80 | 0 | 92 | **79** |
| frota | 84 | 92 | 88 | 88 | 88 | 92 | 90 | 80 | 0 | 92 | **79** |
| contato | 85 | 90 | 88 | 88 | 88 | 92 | 90 | 78 | 0 | 92 | **79** |
| orcamento | 86 | 92 | 85 | 88 | 88 | 92 | 88 | 82 | 0 | 88 | **80** |
| servicos (índice) | 82 | 90 | 88 | 88 | 88 | 92 | 90 | 80 | 0 | 92 | **79** |
| politica-de-privacidade | 75 | 90 | 85 | 82 | 85 | 90 | 88 | 70 | 0 | 94 | **74** |
| servicos/aluguel-de-onibus | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/bandas-producoes | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/escolas-formaturas | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/eventos | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/fretamento-corporativo | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/romarias | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/transfers | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |
| servicos/turismo-excursoes | 83 | 90 | 88 | 88 | 88 | 92 | 90 | 82 | 0 | 92 | **79** |

**Média geral do site: ~79/100** (excluindo Heatmap, que não existe: ~88/100).

## Pontos fortes (todo o site)
- CSS de alto nível: 227 tokens (CSS vars), 16 media queries / 8 breakpoints,
  14 `clamp()` (tipografia fluida), 25 grids → responsividade e design modernos.
- Acessibilidade base sólida: `lang`, `charset`, viewport em 100% das páginas;
  100% das imagens com `alt`; `prefers-reduced-motion` e `:focus-visible` no CSS.
- Best Practices 100/100 (sem libs vulneráveis, HTTPS-ready, sem erros de console).
- Stack leve: vanilla JS, sem framework, sem dependências externas → performance alta.
- Formulários com `<label for>` corretamente associados aos inputs.

## Problemas encontrados (priorizados)

### Críticos / alto impacto
1. **Sem dados estruturados (JSON-LD)** em nenhuma página. Para transporte/fretamento
   local, falta schema `LocalBusiness`/`Service` → perde rich results e SEO local.
2. **Sem canonical** em nenhuma página (Lighthouse falhou na home). Há versões `.html`
   e `/index.html` do mesmo conteúdo → risco de conteúdo duplicado.
3. **Sem Open Graph / Twitter Cards** → compartilhamento em WhatsApp/redes sem
   preview (título, imagem, descrição). Crítico para um negócio movido a WhatsApp.
4. **Heatmap / analytics: inexistente.** Nenhum GA4, GTM, Hotjar, Clarity ou pixel
   instalado. Score 0 porque não há captura de comportamento — impossível medir
   conversão, cliques ou rolagem hoje.

### Médios
5. **Ordem de headings quebrada** (Lighthouse a11y, home): saltos na hierarquia
   (ex.: h2 → h4) prejudicam leitores de tela.
6. **Navegação/header/footer injetados via JS** (`site.js`). Sem JS, a home fica sem
   menu nem rodapé → frágil para crawlers antigos e progressive enhancement.
7. **Imagens sem `width`/`height`** → risco de CLS (layout shift).
8. **Home sem `loading="lazy"`** nas 23 imagens (subpáginas já usam lazy).
9. **Títulos `<title>` muito curtos** em várias páginas (empresa=18, frota=14 chars)
   → desperdício de palavra-chave no SEO.

### Menores
10. Sem `<main>` semântico explícito no HTML estático (depende de injeção JS).
11. Sem skip-link ("pular para conteúdo").
12. Sem `prefers-color-scheme` (dark mode) — opcional.

## Recomendações rápidas (ordem de retorno)
1. Adicionar JSON-LD `LocalBusiness` + `Service` em todas as páginas.
2. Adicionar `<link rel="canonical">` e tags Open Graph/Twitter em todos os templates.
3. Instalar GA4 + Microsoft Clarity (heatmap grátis) para finalmente medir conversão.
4. Corrigir hierarquia de headings e adicionar `width`/`height` + `lazy` nas imagens.
5. Renderizar header/nav/footer no HTML (SSR/estático) em vez de só via JS.
