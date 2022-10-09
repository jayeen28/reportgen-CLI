const puppeteer = require('puppeteer');
const path = require('path');

const handlePdf = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('file://' + path.resolve() + '/work-report.html');
    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    // await page.emulateMediaType('screen');
    await page.pdf({
        path: 'work-report-done.pdf',
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: false,
        format: 'A4',
    });
    await browser.close();
}

module.exports = handlePdf;