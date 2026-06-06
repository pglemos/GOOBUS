# GOOBUS | Dados e integrações pendentes

> O site público foi limpo para não exibir marcadores editoriais, logos falsos ou dados operacionais sem confirmação. Os dados oficiais ficam centralizados em **`assets/site.js`** (objeto `COMPANY`).

## Tabela de pendências

| Item | Status | Necessário para publicação |
|---|---|---|
| Logo oficial | Wordmark provisório criado (GOO**BUS**) | Substituir pelo logo real, se houver |
| WhatsApp | **Fornecido**, (11) 98493-1178 | Confirmar se é o nº comercial/WhatsApp |
| Telefone | **Fornecido**, (11) 98493-1178 | Confirmar |
| Endereço | **Fornecido**, Av. Hilário Pereira de Souza, 406, Sala 1401, 14º andar | Confirmar |
| Cidade / UF | **Fornecida**, Osasco, SP (CEP 06010-170) | OK |
| E-mail | Não exibido | Adicionar quando houver canal oficial |
| Razão social | **Fornecida** | GOOBUS Transportes e Turismo Ltda | OK |
| CNPJ | **Fornecido**, 49.151.280/0001-28 | OK |
| Registro ANTT | Não exibido | Somente se for exibido com comprovação |
| Cadastur | Pendente | Somente se for exibido |
| Regiões atendidas | Exibidas como "sob consulta" | Definir regiões para SEO local |
| Horário de atendimento | Exibido como horário comercial pelo WhatsApp | Ajustar se houver horário oficial diferente |
| Fotos reais da frota | Imagens ilustrativas por categoria | Substituir por fotos reais quando disponíveis |
| Capacidade de cada veículo | Exibida como "sob consulta" | Preencher se houver dados oficiais por veículo |
| Comodidades reais | Exibidas como "conforme veículo" | Preencher se houver dados oficiais por veículo |
| Fotos institucionais | Imagens ilustrativas geradas | Substituir por fotos reais quando disponíveis |
| Foto dedicada "Aluguel de ônibus" (home) | Reutilizada em segmento | Opcional |
| Depoimentos aprovados | Nenhum, seção **desativada** no site | Opcional (só publicar reais e autorizados) |
| Redes sociais (Instagram/Facebook) | Pendente | Opcional |
| História da empresa | Texto institucional genérico e seguro | Substituir por histórico real quando disponível |
| Encarregado de dados (DPO) | Canal oficial de atendimento | Revisar juridicamente |
| Prazo de retenção de dados | Linguagem geral | Revisar juridicamente |
| Operadores/subcontratados | Linguagem geral | Revisar juridicamente |

## SEO técnico (implementado)

- **Schema.org** `LocalBusiness` (JSON-LD) com nome, razão social, **CNPJ real**, telefone e endereço de Osasco, injetado em todas as páginas.
- **Open Graph + Twitter Card** (título, descrição, imagem de compartilhamento) por página.
- **Canonical**, **favicon SVG** da marca, **theme-color**, `lang="pt-BR"` e **skip-link** de acessibilidade.
- **`sitemap.xml`** (15 URLs) e **`robots.txt`** na raiz com domínio `goobuss.com`.

## Integrações de produção (não incluídas no protótipo)

Para colocar no ar como o site completo descrito no briefing, restam etapas de engenharia:

- **Banco de leads (Supabase)**, hoje os envios são registrados no `console` e em `localStorage` (`goobus.leads`). Em produção, gravar na tabela `leads` e validar no servidor.
- **Notificação por e-mail** (Resend ou equivalente) ao receber lead.
- **WhatsApp**, links `wa.me` já funcionam; API oficial só com credenciais.
- **Analytics**, eventos já têm `dataLayer.push` de exemplo; inserir IDs reais (GA4 / Meta Pixel / GTM) e banner de cookies.
- **Anti-spam**, honeypot incluído; adicionar rate limiting no servidor.

## Checklist antes de publicar

- [ ] Logo real aplicado (ou wordmark aprovado)
- [ ] `COMPANY` em `assets/site.js` revisado com canais oficiais
- [x] Nenhum marcador editorial visível no site público
- [x] Fotos ilustrativas substituindo os blocos vazios visíveis
- [ ] Fotos reais da frota substituindo imagens ilustrativas quando disponíveis
- [ ] Capacidades e comodidades da frota confirmadas, se forem exibidas como dados específicos
- [ ] ANTT/Cadastur exibidos **somente** se comprovados
- [ ] Política de Privacidade revisada juridicamente
- [ ] Regiões atendidas definidas para SEO local, se desejado
- [x] Domínio `goobuss.com` aplicado em `sitemap.xml`, `robots.txt` e tags SEO
- [ ] Depoimentos: só publicar se reais e autorizados
- [ ] Revisão ortográfica final em pt-BR
