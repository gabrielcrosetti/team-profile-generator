// Importing employee class
const Employee = require("./Employee");

// Creating class for engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.title = 'Engineer';
    }
    
    // Attribute methods for engineer
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;