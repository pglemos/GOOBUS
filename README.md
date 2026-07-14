# GOOBUS — Sistema cinematográfico de rotas

Site público responsivo da GOOBUS com arquitetura estática de entrada única.

- Um único `index.html` e um único `assets/app.js`.
- 15 rotas públicas resolvidas pelo aplicativo, sem arquivos HTML por página.
- URLs canônicas sem barra final, exceto a raiz.
- URLs antigas com barra final redirecionadas permanentemente para a versão canônica.
- OpenStreetMap + Leaflet carregados sob demanda.
- Geometrias consultadas no OSRM público, com fallback local.
- Endpoint PHP isolado para formulários.
- `www.goobuss.com` redirecionado para `goobuss.com`.
- Nenhuma senha SMTP ou token armazenado no repositório.
