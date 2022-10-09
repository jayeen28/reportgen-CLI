#! /usr/bin/env node
const { exec } = require('node:child_process');
const command = `git log --since="10:30am" --pretty=format:'{%n  "commit": "%H",%n  "abbreviated_commit": "%h",%n  "tree": "%T",%n  "abbreviated_tree": "%t",%n  "refs": "%D",%n  "subject": "%s",%n  "sanitized_subject_line": "%f",%n  "body": "%b",%n  "author": {%n    "name": "%aN",%n    "email": "%aE",%n    "date": "%aD"%n},'`

exec(command, (error, stdout, stderr) => {
    if (stderr) return console.log(stderr);
    console.log(stdout);
});