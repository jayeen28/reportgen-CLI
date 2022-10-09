const puppeteer = require('puppeteer');
const path = require('path');

const handlePdf = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('file://' + path.resolve() + '/work-report.html');
        await page.pdf({
            path: 'work-report-done.pdf',
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        return await browser.close();
    }
    catch (e) { throw new Error(e) }
}

module.exports = handlePdf;