// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        super(employeeName, employeeID, employeeEmail);
        this.officeNumber = officeNumber;
    }
}

Engineer.prototype.getRole = function(){
    return "Manager";
}

Engineer.prototype.getOfficeNumber = function(){
    return this.officeNumber;
}

module.exports = Engineer;