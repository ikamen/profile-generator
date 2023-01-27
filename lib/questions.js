// array of questions for user

const manager_questions = [
    {
        name: 'manager_name',
        message: 'What is manager\'s name?',
        validate: (user_input) => {
            if(!user_input.length) return "You must enter at least one character!";

            return true;
        }
    },
    {
        name: 'manager_id',
        message: 'What is the manager\'s employee ID?',
        validate: (user_input) => {
            if(isNaN(user_input)) return "You must enter a valid number!";

            return true;
        }
    },
    {
        name: 'manager_email',
        message: 'What is the manager\'s email address?',
        validate: (user_input) => {
            if(!user_input.includes("@")) return "You must enter a valid email address";

            return true;
        }
    },
    {
        name: 'manager_number',
        message: 'What is the manager\'s office number?',
        validate: (user_input) => {
            if(isNaN(user_input)) return "You must enter a valid number!";

            return true;
        }
    }];

const multichoice_questions = [    
    {
        name: 'multichoice',
        type: 'list',
        choices: [ 
            {name:"Add an engineer",
            value:1},
            {name: "Add an intern",
            value:2},
            {name:"Finish building the team",
            value:3}
            ],
        message: 'What would you like to do next?'
    }];

const engineer_questions = [
    {
        name: 'engineer_name',
        message: 'What is the engineer\'s name?',
        validate: (user_input) => {
            if(!user_input.length) return "You must enter at least one character!";

            return true;
        }
    },
    {
        name: 'engineer_id',
        message: 'What is the engineer\'s employee ID?',
        validate: (user_input) => {
            if(isNaN(user_input)) return "You must enter a valid number!";

            return true;
        }
    },
    {
        name: 'engineer_email',
        message: 'What is the engineer\'s email address?',
        validate: (user_input) => {
            if(!user_input.includes("@")) return "You must enter a valid email address!";

            return true;
        }
    },
    {
        name: 'engineer_github',
        message: 'What is the engineer\'s GitHub username?',
        validate: (user_input) => {
            if(!user_input.length) return "You must enter at least one character!";

            return true;
        }
    }];    
    
const intern_questions = [
    {
        name: 'intern_name',
        message: 'What is the intern\'s name?',
        validate: (user_input) => {
            if(!user_input.length) return "You must enter at least one character!";

            return true;
        }
    },
    {
        name: 'intern_id',
        message: 'What is the intern\'s employee ID?',
        validate: (user_input) => {
            if(isNaN(user_input)) return "You must enter a valid number!";

            return true;
        }
    },
    {
        name: 'intern_email',
        message: 'What is the intern\'s email address?',
        validate: (user_input) => {
            if(!user_input.includes("@")) return "You must enter a valid email address!";

            return true;
        }
    },
    {
        name: 'intern_school',
        message: 'What is the intern\'s school?',
        validate: (user_input) => {
            if(!user_input.length) return "You must enter at least one character!";

            return true;
        }
    }];   

  module.exports.manager_questions = manager_questions;
  module.exports.multichoice_questions = multichoice_questions;
  module.exports.engineer_questions = engineer_questions;
  module.exports.intern_questions = intern_questions;

