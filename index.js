const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const managerQuestions = [
{
    type: "input",
    message: "Enter the manager's name",
    name: "name"
},
{
    type: "input",
    message: "What is the employee's ID?",
    name: "id"
},
{
    type: "input",
    message: "What is the employee's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the office number?",
    name: "officeNumber"
}]

const engineerQuestions = [
{
    type: "input",
    message: "Enter the Engineer's name",
    name: "name"
},
{
    type: "input",
    message: "What is the employee's ID?",
    name: "id"
},
{
    type: "input",
    message: "What is the employee's email address?",
    name: "email"
},
{
    type: "input",
    message: "What is the employee's GitHub username?",
    name: "github"
},
]

const internQuestions = [
    {
        type: "input",
        message: "Enter the Intern's name",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What school do they attend?",
        name: "school"
    },
]

const optionsQuestion =[
    {
        type: "list",
        message: "What would you like to do next?",
        choices: ["Add an Engineer","Add an Intern","Complete my team"],
        name: "options"
    }
]

function managerPrompt() {
    inquirer.prompt(managerQuestions)
    .then(data => new Manager(data.name,data.id,data.email,data.officeNumber))
};

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
    .then(data => new Engineer(data.name,data.id,data.email,data.github))
};

function internPrompt() {
    inquirer.prompt(internQuestions)
    .then(data => new Intern(data.name,data.id,data.email,data.school))
};

function optionsPrompt(){
    inquirer.prompt(optionsQuestion)
    .then(data => {
        if(data.options === "Add an Engineer"){
            engineerPrompt();
        }else if(data.options === "Add an Intern"){
            internPrompt();
        }else if(data.options === "Complete my team"){
            // finish
        }
    })
};

