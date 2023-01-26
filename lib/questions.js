// array of questions for user

const manager_questions = [
    {
        name: 'manager_name',
        message: 'What is manager\'s name?'
    },
    {
        name: 'manager_id',
        message: 'What is the manager\'s employee ID?'
    },
    {
        name: 'manager_email',
        message: 'What is the manager\'s email address?'
    },
    {
        name: 'manager_number',
        message: 'What is the manager\'s office number?'
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
        message: 'What is the engineer\'s name?'
    },
    {
        name: 'engineer_id',
        message: 'What is the engineer\'s employee ID?'
    },
    {
        name: 'engineer_email',
        message: 'What is the engineer\'s email address?'
    },
    {
        name: 'engineer_github',
        message: 'What is the engineer\'s GitHub username?'
    }];    
    
const intern_questions = [
    {
        name: 'intern_name',
        message: 'What is the intern\'s name?'
    },
    {
        name: 'intern_id',
        message: 'What is the intern\'s employee ID?'
    },
    {
        name: 'intern_email',
        message: 'What is the intern\'s email address?'
    },
    {
        name: 'intern_school',
        message: 'What is the intern\'s school?'
    }];   

  module.exports.manager_questions = manager_questions;
  module.exports.multichoice_questions = multichoice_questions;
  module.exports.engineer_questions = engineer_questions;
  module.exports.intern_questions = intern_questions;

