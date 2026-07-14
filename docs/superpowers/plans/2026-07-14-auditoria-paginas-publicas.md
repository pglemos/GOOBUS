# Auditoria das Páginas Públicas GOOBUS — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Validar e corrigir as 13 páginas públicas solicitadas, garantindo identidade cinematográfica consistente, conteúdo exclusivo, rotas confiáveis, formulários funcionais e ausência de código legado servido em produção.

**Architecture:** Manter o frontend estático atual, mas centralizar a resolução de rotas no `index.php` e no pathname do navegador para impedir que diretórios antigos sejam priorizados. O conteúdo das páginas será renderizado pelo sistema cinematográfico compartilhado, com configurações e seções específicas para cada rota. A qualidade será protegida por testes HTTP, testes estruturais e testes Playwright em desktop e mobile.

**Tech Stack:** HTML5, CSS3, JavaScript sem framework, PHP 8+, Node.js 22, GitHub Actions, Playwright.

## Global Constraints

- Repositório: `pglemos/GOOBUS`.
- Branch de trabalho: `audit/paginas-publicas-2026-07-14`.
- Branch de produção: `main`.
- Hospedagem: Hostinger, diretório `public_html`.
- Paleta: navy profundo, branco, laranja GOOBUS e cinzas frios.
- Nenhuma página pode depender de arquivos `theme.css`, `site.js` ou `quote.js`.
- Todas as rotas devem funcionar por acesso direto, refresh e navegação interna.
- Respeitar `prefers-reduced-motion`, navegação por teclado e labels reais.
- Não incluir credenciais no repositório.

---

### Task 1: Criar testes de regressão das 13 rotas

**Files:**
- Create: `tests/public-pages-regression.mjs`
- Create: `tests/browser/public-pages.spec.mjs`
- Modify: `package.json`
- Modify: `.github/workflows/qa.yml`

**Interfaces:**
- Consumes: rotas HTML e assets publicados pelo build.
- Produces: comandos `npm test` e `npm run test:browser`.

- [ ] Criar manifesto das 13 URLs, títulos esperados, `data-page` e conteúdos obrigatórios.
- [ ] Criar teste estrutural que falha quando uma rota não possui shell, metadados, build marker, CSS/JS atual ou conteúdo exclusivo no registro.
- [ ] Criar teste Playwright que abre desktop e mobile, captura console, mede overflow horizontal e valida hero, CTA, header e footer.
- [ ] Executar a suíte antes da correção e confirmar falhas nas páginas genéricas e no roteamento físico.
- [ ] Commitar os testes em estado vermelho.

### Task 2: Eliminar a prioridade de telas antigas

**Files:**
- Modify: `.htaccess`
- Modify: `index.php`
- Modify: `assets/cinematic.js`
- Modify: `scripts/build-hostinger.mjs`

**Interfaces:**
- Consumes: `REQUEST_URI` e `location.pathname`.
- Produces: `pageIdFromPath(pathname)` e shell canônico para todas as rotas.

- [ ] Escrever teste para acesso direto a `/servicos/`, `/frota/`, `/empresa/`, `/orcamento/`, `/contato/` e oito serviços.
- [ ] Reescrever as rotas públicas para o front controller antes da exceção de diretório físico.
- [ ] Fazer `index.php` emitir o shell correto, metadados exclusivos e `data-page` derivado da URL.
- [ ] Fazer o JavaScript derivar a página do pathname como defesa adicional.
- [ ] Validar refresh, URL com e sem barra final, canonical e status HTTP.

### Task 3: Corrigir Serviços, Frota e Empresa

**Files:**
- Modify: `assets/cinematic.js`
- Create: `assets/cinematic-pages-v4.css`

**Interfaces:**
- Produces: `servicesPage()`, `fleetPage()` e `companyPage()` com conteúdo e composição próprios.

- [ ] Serviços: apresentar oito categorias, matriz de decisão, briefing e comparação operacional.
- [ ] Frota: apresentar quatro categorias, critérios de escolha, recursos sob consulta e CTA contextual.
- [ ] Empresa: apresentar história, processo, compromissos, dados cadastrais e transparência sem alegações não verificadas.
- [ ] Validar hierarquia, imagens, alt text, links, mobile e ausência de conteúdo duplicado.

### Task 4: Corrigir Orçamento e Contato

**Files:**
- Modify: `assets/cinematic.js`
- Modify: `api/lead.php`
- Modify: `assets/cinematic-pages-v4.css`

**Interfaces:**
- Consumes: formulários `budget` e `contact`.
- Produces: payload validado, protocolo, estado de sucesso e fallback WhatsApp.

- [ ] Validar campos, datas, telefone, passageiros, consentimento e honeypot.
- [ ] Preservar parâmetros de pré-preenchimento por serviço e veículo.
- [ ] Impedir envio duplicado e mostrar erros por campo.
- [ ] Confirmar resposta do endpoint e fallback seguro para WhatsApp.
- [ ] Testar teclado, foco, leitor de tela e mobile.

### Task 5: Criar conteúdo exclusivo para oito serviços

**Files:**
- Modify: `assets/cinematic.js`
- Modify: `assets/cinematic-pages-v4.css`

**Interfaces:**
- Produces: configuração única para cada slug em `SERVICE_PAGE_DATA`.

- [ ] Aluguel de ônibus: modalidades, roteiro, grupo, bagagem e escolha da categoria.
- [ ] Fretamento corporativo: turnos, pontos, recorrência, indicadores e fluxo de implantação.
- [ ] Turismo e excursões: roteiro, paradas, bagagens, responsáveis e programação.
- [ ] Romarias: pontos de encontro, perfil do grupo, horários religiosos e retorno.
- [ ] Eventos e congressos: picos de chegada, dispersão, credenciamento e contingência.
- [ ] Escolas e formaturas: responsável, faixa etária, autorização, horários e materiais.
- [ ] Bandas e produções: agenda técnica, instrumentos, cases, equipe e hospedagem.
- [ ] Transfers e city tour: voo, espera, bagagem, hotel, múltiplos destinos e city tour.
- [ ] Validar que títulos, seções, FAQs, CTAs e mensagens de WhatsApp são exclusivos.

### Task 6: Responsividade, movimento e acessibilidade

**Files:**
- Modify: `assets/cinematic.css`
- Modify: `assets/cinematic-pages-v4.css`

**Interfaces:**
- Consumes: classes compartilhadas e `data-page`.
- Produces: layout sem overflow em 390, 768, 1024 e 1440 px.

- [ ] Corrigir recortes, grids, títulos, cards e formulários em telas estreitas.
- [ ] Garantir foco visível, contraste, menu, skip link e ordem semântica.
- [ ] Reduzir animações com `prefers-reduced-motion`.
- [ ] Validar que nenhuma animação bloqueia formulários ou leitura.

### Task 7: SEO, build e publicação segura

**Files:**
- Modify: `index.php`
- Modify: `scripts/build-hostinger.mjs`
- Modify: `sitemap.xml`
- Modify: `build-id.txt`
- Modify: `tests/route-shell-consistency.mjs`

**Interfaces:**
- Produces: pacote `dist/` completo e identificável.

- [ ] Definir título, descrição, canonical e Open Graph por rota.
- [ ] Garantir sitemap com as 13 páginas e política de privacidade.
- [ ] Excluir testes, documentação interna e código morto do pacote de produção.
- [ ] Atualizar build marker e validar todos os assets.
- [ ] Executar build, testes estruturais e Playwright.

### Task 8: Revisão, PR e integração

**Files:**
- Review: todos os arquivos alterados.

- [ ] Abrir PR com causa raiz, mudanças e evidências.
- [ ] Solicitar revisão automática e corrigir apontamentos válidos.
- [ ] Confirmar CI verde e screenshots de todas as páginas.
- [ ] Integrar ao `main` somente após verificação final.
- [ ] Validar implantação automática da Hostinger e as 13 URLs publicadas.
