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

//Code to gather information about the development team members, and render the HTML file.


// function to get the answers from the user and call the function that will create the file
function promptUser() {
  
    inquirer.prompt(questions.manager_questions).then( (data) => {
        console.log("Man data: " + JSON.stringify(data));
        promptFurther()

    });
  }

  function promptFurther() {
  
    inquirer.prompt(questions.multichoice_questions).then( (data) => {
        console.log("Multichoice data: " + JSON.stringify(data));
        
        if (data.multichoice == 1) {
            console.log ("Ask Eng questions");
            inquirer.prompt(questions.engineer_questions).then( (data) => {
                console.log("Engineer data: " + JSON.stringify(data));
                promptFurther()
            })
            
        } else if (data.multichoice == 2) {
            console.log ("Ask Int questions");
            inquirer.prompt(questions.intern_questions).then( (data) => {
                console.log("Intern data: " + JSON.stringify(data));
                promptFurther()
            })
        } else {
            
            // writeToFile(data);
        }
    
    });
  }


// function to write README file
function writeToFile(data) {

    fs.writeFile('./generated_files/README.md', data, (err) => {
        if (err) throw err;
        console.log('Your HTML file was created in the generated_files folder!');
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

