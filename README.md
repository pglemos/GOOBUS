# GOOBUS

Site institucional responsivo da GOOBUS Transportes e Turismo.

## Rotas públicas

O frontend atende somente estas 15 rotas canônicas, sem barra final:

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

O Apache resolve as rotas internamente para `index.html`. URLs antigas, extensões `.html`, barras finais e caminhos desconhecidos retornam `404`, sem redirecionamento público.

## Estrutura

- `index.html`: entrada única do frontend.
- `assets/app.js`: roteamento, páginas, navegação, formulário, WhatsApp e mapa.
- `assets/cinematic.css` e `assets/pages.css`: identidade visual e componentes responsivos.
- `assets/images/`: imagens produtivas com nomes semânticos.
- `api/enviar-lead.php`: endpoint técnico do formulário de orçamento e contato.
- `robots.txt` e `sitemap.xml`: indexação das 15 rotas canônicas.

## Publicação

Publique a raiz do repositório em Apache com `mod_rewrite` e `.htaccess` habilitados. O PHP é necessário apenas para o endpoint de leads; o restante do frontend é estático.
