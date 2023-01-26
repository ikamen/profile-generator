const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const questions = require("./lib/questions");

const employees = [];

//Gather information about the development team members, and render the HTML file.


// function to get the answers from the user and call the function that will create the file
function promptUser() {
  
    inquirer.prompt(questions.manager_questions).then( (data) => {
        let manager = new Manager(data.manager_name, data.manager_id, data.manager_email, data.manager_number)
        employees.push(manager);
        promptFurther()

    });
  }

  function promptFurther() {
  
    inquirer.prompt(questions.multichoice_questions).then( (data) => {
        
        if (data.multichoice == 1) {

            inquirer.prompt(questions.engineer_questions).then( (data) => {

                let engineer = new Engineer(data.engineer_name, data.engineer_id, data.engineer_email, data.engineer_github)
                employees.push(engineer);
                promptFurther()
            })
            
        } else if (data.multichoice == 2) {

            inquirer.prompt(questions.intern_questions).then( (data) => {

                let intern = new Intern(data.intern_name, data.intern_id, data.intern_email, data.intern_school)
                employees.push(intern);
                promptFurther()
            })
        } else {
            writeToFile(render(employees));
        }
    });
  }

// function to write README file
function writeToFile(data) {

    fs.writeFile(outputPath, data, (err) => {
        if (err) throw err;
        console.log('Your HTML file was created in the \'output\' folder!');
      });
}

// function to initialize program
function init() {
    console.log('------ Welcome to the Team Profile Generator ---------');
    console.log('Please provide the following information about each employee');
    console.log('Let\'s start with the team manager\'s details: ');
    promptUser();
}

// function call to initialize program
init();

