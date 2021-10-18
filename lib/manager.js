// Importing employee class
const Employee = require("./Employee");

// Extending employee class
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    // Attribute methods for manager
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;