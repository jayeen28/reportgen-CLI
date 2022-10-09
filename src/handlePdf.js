const puppeteer = require('puppeteer');
const path = require('path');

const handlePdf = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    return await page.goto('file://' + path.resolve() + '/work-report.html');
    await page.pdf({
        path: 'work-report-done.pdf',
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
    });
    browser.close();
}

module.exports = handlePdf;