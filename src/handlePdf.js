const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

const handlePdf = async () => {
    const existingPdfBytes = await fs.readFileSync('work-report.pdf', (err) => console.log(err));

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the Helvetica font
    // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { height } = firstPage.getSize()

    // Draw a string of text diagonally across the first page
    firstPage.drawText('This text was added with JavaScript!', {
        x: 5,
        y: height / 2 + 300,
        size: 50,
        // font: helveticaFont,
        color: rgb(0, 0, 0),
        rotate: degrees(-45),
    });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('work-report-done.pdf', pdfBytes);
};

module.exports = handlePdf;