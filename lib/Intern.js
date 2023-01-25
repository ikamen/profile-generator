// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, school) {
        super(employeeName, employeeID, employeeEmail);
        this.school = school;
    }
}

Intern.prototype.getRole = function(){
    return "Intern";
}

Intern.prototype.getSchool = function(){
    return this.school;
}

module.exports = Intern;