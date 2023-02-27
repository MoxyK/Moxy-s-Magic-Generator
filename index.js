const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        input: 'input',
        name: 'github',
        message: 'What is your GitHub username 🐱?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address 📧?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name ...?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project ...'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you require for your project?',
        choices: ["MIT", "APACHE 2.0", "GPL", "None"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command shall initiate test?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know to use the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
