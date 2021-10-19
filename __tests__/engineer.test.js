const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("can create a new employee and set a name", () => {
        const name = "Gabe";
        const engineer = new Engineer(name)

        expect(engineer.name).toEqual(name)
    }); 
    it("can set an engineer ID", () => {
        const id = 1;
        const engineer = new Engineer("Gabe", id)

        expect(engineer.id).toEqual(id)
    });
    it("to set an engineer email", () => {
        const email = "test@test.com";
        const engineer = new Engineer("Gabe", 1, email)

        expect(engineer.email).toEqual(email)
    });
    it("it should set a github username", () => {
        const github = "gabriel-crosetti"
        const engineer = new Engineer("Gabe", 1,"test@test.com", github)

        expect(engineer.github).toEqual(github)
    })

})