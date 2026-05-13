import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://sonicpop-prggdwgh.manus.space', { waitUntil: 'networkidle' });
  const html = await page.content();
  fs.writeFileSync('reference/rendered.html', html);
  await browser.close();
})();
