// Code to define and export the Employee class

class Employee {
    constructor(employeeName, employeeID, employeeEmail) {
        this.name = employeeName;
        this.id = employeeID;
        this.email = employeeEmail;
    }

    getName () {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;