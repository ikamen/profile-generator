// TODO: Write code to define and export the Employee class

function Employee(employeeName, employeeID, employeeEmail) {
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.employeeEmail = employeeEmail;
}

Employee.prototype.getName = function(){
    return this.employeeName;
}

Employee.prototype.getId = function(){
    return this.employeeID;
}

Employee.prototype.getEmail = function(){
    return this.employeeEmail;
}

Employee.prototype.getRole = function(){
    return "Employee";
}