const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
    
    await page.goto('file://' + __dirname + '/index.html');
    await new Promise(r => setTimeout(r, 1000));
    
    // Evaluate in context to skip directly to the crash step without manual typing
    await page.evaluate(() => {
       // We can just query React instances, or just click through
       const step1Btn = [...document.querySelectorAll('button')].find(b => b.textContent.includes('Neue'));
       if(step1Btn) step1Btn.click();
    });
    await new Promise(r => setTimeout(r, 500));
    
    await page.evaluate(() => {
       const step2Btn = [...document.querySelectorAll('button')].find(b => b.textContent.includes('500'));
       if(step2Btn) step2Btn.click();
    });
    await new Promise(r => setTimeout(r, 500));
    
    await page.focus('input');
    await page.keyboard.type('Test');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 500));
    
    await page.focus('input');
    await page.keyboard.type('test@example.com');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 1000));
    
    console.log("On Step 5. Let's click Anfrage absenden");
    await page.evaluate(() => {
       const submitBtn = [...document.querySelectorAll('button')].find(b => b.textContent.includes('absenden'));
       if(submitBtn) submitBtn.click();
    });
    
    await new Promise(r => setTimeout(r, 1000));
    console.log("Done checking.");
    
    await browser.close();
})();
