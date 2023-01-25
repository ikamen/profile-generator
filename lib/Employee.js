// TODO: Write code to define and export the Employee class


class Employee {
    constructor(employeeName, employeeID, employeeEmail) {
        this.name = employeeName;
        this.id = employeeID;
        this.email = employeeEmail;
    }
}

Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.getId = function(){
    return this.id;
}

Employee.prototype.getEmail = function(){
    return this.email;
}

Employee.prototype.getRole = function(){
    return "Employee";
}

module.exports = Employee;