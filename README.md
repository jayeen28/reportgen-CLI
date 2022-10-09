I have created this cli to generate my daily work report at office. Must follow these four steps for generating your work report.
1. Installation(npm/yarn):
    >```npm i -g work-report-generator```

    >```yarn add global work-report-generator```

2. Firstly, you have to be in the directory of the project and that directory must be connected with github.

3. The data for generating the report will come from git commit messages. That's why you have write your commits like this.
    > ```git commit -m "Task title: Task description."```

4. This is the command to generate the work report. The report will be generated into pdf format.
    > ```reportgen --pname="your project name" ```



If you want to customize the pdf then clone this repo and then go to ./src/writeHtml.js . Then prepare that html however you want.