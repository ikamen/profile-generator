// Code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, github) {
        super(employeeName, employeeID, employeeEmail);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
    
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;