const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 375, height: 812, isMobile: true, hasTouch: true});
  await page.goto('http://localhost:8001', {waitUntil: 'networkidle0'});
  await page.screenshot({path: 'mobile_full.png', fullPage: true});
  await browser.close();
})();
