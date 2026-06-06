# GOOBUS — Dados pendentes de validação

> Este site foi construído como **protótipo de alta fidelidade**. Ele parece completo, mas **não publica nenhuma afirmação não confirmada**. Todos os itens abaixo precisam ser fornecidos/validados antes de publicar.
>
> Os dados oficiais ficam centralizados em **`assets/site.js`** (objeto `COMPANY`) — edite só lá. Marcadores no formato `[INSERIR ...]` / `[VALIDAR]` aparecem na interface onde o dado real entra.

## Tabela de pendências

| Item | Status | Necessário para publicação |
|---|---|---|
| Logo oficial | Wordmark provisório criado (GOO**BUS**) | Substituir pelo logo real, se houver |
| WhatsApp | **Fornecido** — (11) 98493-1178 | Confirmar se é o nº comercial/WhatsApp |
| Telefone | **Fornecido** — (11) 98493-1178 | Confirmar |
| Endereço | **Fornecido** — Av. Hilário Pereira de Souza, 406, Sala 1401, 14º andar | Confirmar |
| Cidade / UF | **Fornecida** — Osasco — SP (CEP 06010-170) | OK |
| E-mail | Pendente | Sim |
| Razão social | **Fornecida** — GOOBUS Transportes e Turismo Ltda | OK |
| CNPJ | **Fornecido** — 49.151.280/0001-28 | OK |
| Registro ANTT | Pendente | Somente se for exibido (não publicar selo sem prova) |
| Cadastur | Pendente | Somente se for exibido |
| Regiões atendidas | Pendente | Sim (para SEO local e FAQ) |
| Horário de atendimento | Pendente | Recomendado |
| Fotos reais da frota | Pendente — placeholders administrativos | Recomendado (não usar banco de imagens como frota real) |
| Capacidade de cada veículo | Pendente — `[VALIDAR]` | Sim para a página Frota |
| Comodidades reais (ar, Wi-Fi, banheiro, USB, acessibilidade) | Pendente — `[VALIDAR]` | Sim para a página Frota |
| Fotos institucionais (equipe, fachada, operação) | Pendente | Recomendado |
| Foto dedicada "Aluguel de ônibus" (home) | Reutilizada provisoriamente | Opcional (enviar 8ª foto para substituir) |
| Depoimentos aprovados | Nenhum — seção **desativada** no site | Opcional (só publicar reais e autorizados) |
| Redes sociais (Instagram/Facebook) | Pendente | Opcional |
| História da empresa | Pendente — estrutura pronta, sem texto inventado | Recomendado |
| Encarregado de dados (DPO) | Pendente | Sim (Política de Privacidade) |
| Prazo de retenção de dados | Pendente | Sim (Política de Privacidade) |
| Operadores/subcontratados (mensageria, e-mail, analytics) | Pendente | Sim (Política de Privacidade) |

## SEO técnico (implementado)

- **Schema.org** `LocalBusiness` (JSON-LD) com nome, razão social, **CNPJ real**, telefone e endereço de Osasco — injetado em todas as páginas.
- **Open Graph + Twitter Card** (título, descrição, imagem de compartilhamento) por página.
- **Canonical**, **favicon SVG** da marca, **theme-color**, `lang="pt-BR"` e **skip-link** de acessibilidade.
- **`sitemap.xml`** (15 URLs) e **`robots.txt`** na raiz. ⚠️ Trocar o domínio `goobus.com.br` pelo domínio real antes de publicar.

## Integrações de produção (não incluídas no protótipo)

Para colocar no ar como o site completo descrito no briefing, restam etapas de engenharia:

- **Banco de leads (Supabase)** — hoje os envios são registrados no `console` e em `localStorage` (`goobus.leads`). Em produção, gravar na tabela `leads` e validar no servidor.
- **Notificação por e-mail** (Resend ou equivalente) ao receber lead.
- **WhatsApp** — links `wa.me` já funcionam; API oficial só com credenciais.
- **Analytics** — eventos já têm `dataLayer.push` de exemplo; inserir IDs reais (GA4 / Meta Pixel / GTM) e banner de cookies.
- **Anti-spam** — honeypot incluído; adicionar rate limiting no servidor.

## Checklist antes de publicar

- [ ] Logo real aplicado (ou wordmark aprovado)
- [ ] `COMPANY` em `assets/site.js` totalmente preenchido
- [ ] Nenhum marcador `[INSERIR...]` / `[VALIDAR]` / `[INFORMAR...]` visível
- [ ] Fotos reais substituindo todos os placeholders `.ph`
- [ ] Capacidades e comodidades da frota confirmadas
- [ ] ANTT/Cadastur exibidos **somente** se comprovados
- [ ] Política de Privacidade revisada juridicamente
- [ ] Regiões atendidas definidas (e páginas de SEO local, se desejado)
- [ ] Trocar domínio `goobus.com.br` em `sitemap.xml`, `robots.txt` e tags SEO
- [ ] Depoimentos: só publicar se reais e autorizados
- [ ] Revisão ortográfica final em pt-BR
