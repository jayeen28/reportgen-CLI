I created this cli to generate my daily work report at office. Must follow these four steps for generating your work report.
1. Installation (npm/yarn):
    >```npm i reportgen --location=global```

    >```yarn add global reportgen```

2. Firstly, you have to be in the directory of the project and that directory must be connected with github.

3. Your git commits will be used for generating the report. That's why you have to write your commits like this.
    > ```git commit -m "Task title: Task description."```

4. Run this command to generate your work report in pdf format.
    > ```reportgen --pname="your project name" ```

If you want to customize the pdf then clone this repo and then go to ```./src/writeHtml.js``` . Then prepare that HTML however you want.
