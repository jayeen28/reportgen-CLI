#! /usr/bin/env node
const { exec } = require('node:child_process');
const handlePdf = require('./handlePdf');
const fs = require('fs');
const path = require('path');
const writeHtml = require('./writeHtml');
const command = `git log --since='10:30am' --pretty=format:'{"commit":"%H","abbreviated_commit":"%h","tree":"%T","abbreviated_tree":"%t","refs":"%D","message":"%s","sanitized_message_line":"%f","author":{"name":"%aN","email":"%aE","date":"%aD"}}'`;

const main = async () => {
    try {
        // let's get the git commits
        const commitInfos = await new Promise((resolve, reject) => exec(command, (error, stdout, stderr) => {
            if (!!error || !!stderr) return reject(error || stderr);
            resolve(stdout.split('\n').map(d => JSON.parse(d)))
        }));
        const content = commitInfos.map(d => ({ task: d.message.split(':')[0], description: d.message.split(':')[1] }));
        const [day, month, dateCount, year] = new Date().toDateString().split(' ');
        const date = `${month} ${dateCount}, ${year}`;
        const html = await writeHtml(date, content);
        const buffer = new Buffer.alloc(html.length, html.toString(), 'utf-8');
        fs.writeFileSync(path.resolve() + '/work-report.html', buffer, (error) => {
            if (error) throw new Error(error);
            console.log('Report saved.')
        });
        handlePdf();
    }
    catch (e) { console.log(e.message) }
};
main();