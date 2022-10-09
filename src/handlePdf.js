const puppeteer = require('puppeteer');
const path = require('path');

const handlePdf = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('file://' + path.resolve() + '/work-report.html');
        await page.pdf({
            path: 'work-report-done.pdf',
            printBackground: true,
            format: 'A4',
        });
        return await browser.close();
    }
    catch (e) { throw new Error(e) }
}

module.exports = handlePdf;