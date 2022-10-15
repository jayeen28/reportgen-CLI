#! /usr/bin/env node
const { exec } = require('node:child_process');
const handlePdf = require('./handlePdf');
const fs = require('fs');
const path = require('path');
const writeHtml = require('./writeHtml');
const command = `git log --since='12:00am' --pretty=format:'{"commit":"%H","abbreviated_commit":"%h","tree":"%T","abbreviated_tree":"%t","refs":"%D","message":"%s","sanitized_message_line":"%f","author":{"name":"%aN","email":"%aE","date":"%aD"}}'`;

const main = async () => {
    try {
        const commands = process.argv.slice(2);
        if (commands.length !== 1) return console.log('Project name not provided. Please use --pname="your project name" flag to provide me project name.')
        const projectName = commands[0].split('=')[1];
        // let's get the git commits
        const commitInfos = await new Promise((resolve, reject) => exec(command, (error, stdout, stderr) => {
            if (!!error || !!stderr) return reject({ message: error || stderr });
            if (!stdout.length) return reject({ message: 'No commits found.' });
            resolve(stdout.split('\n').map(d => JSON.parse(d)))
        }));
        //prepare report content and make html
        const content = commitInfos.filter(({ message }) => message.split(':').length > 1).map(({ message }) => ({ task: message.split(':')[0], description: message.split(':')[1] }))
        if (!content.length) return console.log('No commits found !');
        const [day, month, dateCount, year] = new Date().toDateString().split(' ');
        const date = `${month} ${dateCount}, ${year}`;
        const html = await writeHtml(date, projectName, content);
        const buffer = new Buffer.alloc(html.length, html.toString(), 'utf-8');
        //save html 
        fs.writeFileSync(path.resolve() + '/work-report.html', buffer, (error) => {
            if (error) throw new Error(error);
            console.log('Report saved.')
        });
        //generate pdf with puppeteer.
        await handlePdf();
        console.log(`Work report generated. Can be found here: ${path.resolve()}/work-report-done.pdf`);
    }
    catch (e) { console.log(e.message) }
};
main();