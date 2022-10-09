const writeHtml = async (date, projectName, data) => {
    return (
        `
        <html>
        <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">
            ul.lst-kix_1r2l9uwagom4-6 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-5 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-8 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-7 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-2 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-1 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-4 {
                list-style-type: none
            }
    
            ul.lst-kix_1r2l9uwagom4-3 {
                list-style-type: none
            }
    
            li.li-bullet-0:before {
                margin-left: -18pt;
                white-space: nowrap;
                display: inline-block;
                min-width: 18pt
            }
    
            ul.lst-kix_1r2l9uwagom4-0 {
                list-style-type: unset
            }
    
            ol {
                margin: 0;
                padding: 0
            }
    
            table td,
            table th {
                padding: 0
            }
    
            .c5 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Courier New";
                font-style: normal
            }
    
            .c1 {
                color: #000000;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 14pt;
                font-family: "Courier New";
                font-style: normal
            }
    
            .c4 {
                color: #000000;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Courier New";
                font-style: normal
            }
    
            .c0 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left;
                height: 11pt
            }
    
            .c12 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c3 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c11 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.0;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c8 {
                color: #000000;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 12pt;
                font-style: normal
            }
    
            .c13 {
                color: #000000;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 22pt;
                font-style: normal
            }
    
            .c9 {
                background-color: #ffffff;
                max-width: 468pt;
                padding: 72pt 72pt 72pt 72pt
            }
    
            .c2 {
                font-size: 12pt;
                font-family: "Courier New";
                font-weight: 700
            }
    
            .c6 {
                font-weight: 400;
                font-family: "Courier New"
            }
    
            .c10 {
                font-weight: 700;
                font-family: "Courier New"
            }
    
            .c14 {
                padding: 0;
                margin: 0
            }
    
            .c7 {
                margin-left: 36pt;
                padding-left: 0pt
            }
    
            .title {
                padding-top: 0pt;
                color: #000000;
                font-size: 26pt;
                padding-bottom: 3pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .subtitle {
                padding-top: 0pt;
                color: #666666;
                font-size: 15pt;
                padding-bottom: 16pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            li {
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            p {
                margin: 0;
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            h1 {
                padding-top: 20pt;
                color: #000000;
                font-size: 20pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h2 {
                padding-top: 18pt;
                color: #000000;
                font-size: 16pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h3 {
                padding-top: 16pt;
                color: #434343;
                font-size: 14pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h4 {
                padding-top: 14pt;
                color: #666666;
                font-size: 12pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h5 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h6 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                font-style: italic;
                orphans: 2;
                widows: 2;
                text-align: left
            }
            </style>
        </head>
        <body class="c9 doc-content">
            <p class="c3"><span class="c10 c13">Work Report</span></p>
            <p class="c0"><span class="c5"></span></p>
            <p class="c3"><span class="c6">Date: </span><span class="c6">${date}</span></p>
            <p class="c0"><span class="c5"></span></p>
            <p class="c3"><span class="c1">Project: ${projectName}</span></p>
            <p class="c0"><span class="c1"></span></p>
            <p class="c3"><span class="c2">Today&rsquo;s Work Plan</span></p>
            <ul class="c14 lst-kix_1r2l9uwagom4-0 start">
            ${data.map(({ task }) => (
            `<li class="c3 c7 li-bullet-0">
                    <span class="c5">
                        ${task}
                    </span>
                </li>`
        )).join('\n')}
            </ul>
            <p class="c0"><span class="c5"></span></p>
            <p class="c3"><span class="c8 c10">Completed Tasks</span></p>
            ${data.map(({ task, description }) => description ? (
            `<br/>
            <p class="c3">
                    <span class="c5">
                        ${task}:
                    </span>
                </p>
                <p class="c3">
                    <span class="c6">${description}</span>
                </p>`
        ) : '').join('\n')}
            <p class="c0"><span class="c8 c10"></span></p>
            <p class="c3"><span class="c8 c10">Plan for Tomorrow</span></p>
            <p class="c3"><span class="c6 c8">Completing pending tasks and hunting for more tasks.</span></p>
            <p class="c0"><span class="c5"></span></p>
            <p class="c3"><span class="c5">Submitted by,</span></p>
            <p class="c3"><span class="c4">MD. Jayeen Bin Alam.</span></p>
            <p class="c11"><span class="c6">Jr. Developer</span></p>
        </body>
    
        </html>
    `)
}

module.exports = writeHtml;