// Code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, school) {
        super(employeeName, employeeID, employeeEmail);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;