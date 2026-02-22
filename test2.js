const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        page.on('console', msg => {
            if (msg.type() === 'error') console.log('ERROR:', msg.text());
        });
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
        
        await page.goto('file://' + __dirname + '/index.html', {waitUntil: 'domcontentloaded'});
        
        await page.waitForSelector('button');
        console.log('Page loaded!');
        
        // Wait for rendering
        await new Promise(r => setTimeout(r, 1000));
        
        // Find "Neue Website" button by text or just index
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            btns.find(b => b.textContent.includes('Neue Website')).click();
        });
        await new Promise(r => setTimeout(r, 200));
        
        await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            btns.find(b => b.textContent.includes('500')).click();
        });
        await new Promise(r => setTimeout(r, 200));

        await page.focus('input');
        await page.keyboard.type('Test Name');
        await page.keyboard.press('Enter');
        await new Promise(r => setTimeout(r, 200));
        
        await page.focus('input');
        await page.keyboard.type('test@example.com');
        await page.keyboard.press('Enter');
        await new Promise(r => setTimeout(r, 500));
        
        console.log('Reached end. No crashes?');

        // Check if there is a white screen (no main container)
        const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
        if (!rootHtml) console.log('ROOT IS EMPTY!');
        else console.log('ROOT HAS CONTENT');
        
        await browser.close();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
