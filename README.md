# GOOBUS

Site institucional estático da GOOBUS Transportes e Turismo.

## Rotas públicas

As únicas rotas públicas são:

```text
/
/empresa
/frota
/servicos
/servicos/aluguel-de-onibus
/servicos/fretamento-corporativo
/servicos/turismo-excursoes
/servicos/romarias
/servicos/eventos
/servicos/escolas-formaturas
/servicos/bandas-producoes
/servicos/transfers
/orcamento
/contato
/politica-de-privacidade
```

Todas as rotas, exceto a raiz, são resolvidas pelo `.htaccess` para o respectivo `index.html` sem redirecionamento visível. URLs antigas com `.html`, barra final ou páginas removidas retornam `404`.

## Estrutura

- `assets/site.js`: cabeçalho, navegação, rodapé, WhatsApp e comportamento compartilhado.
- `assets/quote.js`: validação e montagem do orçamento para WhatsApp.
- `assets/theme.css`: tokens, componentes e estilos responsivos.
- `assets/brand/`: logotipos e símbolos da marca.
- `assets/images/`: imagens utilizadas nas páginas públicas.
- `robots.txt` e `sitemap.xml`: indexação das 15 rotas canônicas.

## Publicação

O site não possui etapa de build nem dependências de runtime. Publique a raiz do repositório em um servidor Apache com `mod_rewrite` habilitado e suporte a `.htaccess`. O formulário de orçamento e o contato continuam usando WhatsApp; o mapa permanece incorporado na página de contato.
