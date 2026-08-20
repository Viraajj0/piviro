const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text(), msg.type());
  });
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });
  
  const rootHtml = await page.evaluate(() => {
    const root = document.getElementById('agentation-root');
    return root ? root.innerHTML : 'no-root';
  });
  console.log('ROOT HTML:', rootHtml);
  
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
