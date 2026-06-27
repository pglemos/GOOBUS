const puppeteer = require('puppeteer');
const fs = require('fs');

const OUT_DIR = '/Users/pedroguilherme/.gemini/antigravity-cli/brain/2c9a78e3-1320-4dbb-86fa-73cc2b621704';

const PAGES = [
  { url: '/', file: 'qa-home.png' },
  { url: '/empresa/', file: 'qa-empresa.png' },
  { url: '/frota/', file: 'qa-frota.png' },
  { url: '/servicos/', file: 'qa-servicos.png' },
  { url: '/orcamento/', file: 'qa-orcamento.png' },
  { url: '/contato/', file: 'qa-contato.png' },
  { url: '/politica-de-privacidade/', file: 'qa-politica.png' },
  { url: '/servicos/aluguel-de-onibus/', file: 'qa-srv-aluguel.png' },
  { url: '/servicos/fretamento-corporativo/', file: 'qa-srv-fretamento.png' },
  { url: '/servicos/turismo-excursoes/', file: 'qa-srv-turismo.png' },
  { url: '/servicos/romarias/', file: 'qa-srv-romarias.png' },
  { url: '/servicos/eventos/', file: 'qa-srv-eventos.png' },
  { url: '/servicos/escolas-formaturas/', file: 'qa-srv-escolas.png' },
  { url: '/servicos/bandas-producoes/', file: 'qa-srv-bandas.png' },
  { url: '/servicos/transfers/', file: 'qa-srv-transfers.png' }
];

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of PAGES) {
    console.log(`Processing ${p.url}...`);
    try {
      await page.goto(`http://localhost:8080${p.url}`, { waitUntil: 'networkidle0' });
      
      // Auto-scroll to bottom to trigger lazy loading and animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          let distance = 300;
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if(totalHeight >= scrollHeight - window.innerHeight){
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });
      
      // Wait for animations
      await new Promise(r => setTimeout(r, 1500));
      
      await page.screenshot({ path: `${OUT_DIR}/${p.file}`, fullPage: true });
    } catch (e) {
      console.error(`Error on ${p.url}:`, e.message);
    }
  }
  
  await browser.close();
  console.log('Done!');
}

run();
