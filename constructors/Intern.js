const Employee = require("./Employee");

class Intern extends Employee{
    
    constructor(name, email, id, University) {
    super(name, id, email);
    this.University = University;
    }
    getUniversity(){
        return this.University;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;