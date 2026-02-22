const puppeteer = require('puppeteer');
const fs = require('fs');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

        await page.goto('file://' + __dirname + '/index.html', { waitUntil: 'networkidle0' });

        await wait(1000);

        await page.evaluate(() => document.querySelectorAll('button')[2].click());
        await wait(200);

        await page.evaluate(() => document.querySelectorAll('button')[5].click());
        await wait(200);

        await page.focus('input');
        await page.keyboard.type('Test Name');
        await page.keyboard.press('Enter');
        await wait(200);

        await page.focus('input');
        await page.keyboard.type('test@example.com');
        await page.keyboard.press('Enter');
        await wait(1000);

        console.log('Done reaching step 5');
        await browser.close();
    } catch (e) {
        console.error('Test error:', e);
    }
})();
