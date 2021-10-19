const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("can create a new engineer and set a name", () => {
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
    });
    it("to see if get github method works", () => {
        const engineer = new Engineer("Gabe", 1,"test@test.com","gabriel-crosetti")

        expect(engineer.getGithub()).toEqual("gabriel-crosetti")
    });
    it("to see if getRole method works", () => {
        const engineer = new Engineer('Manager1');
    
        expect(engineer.getRole()).toEqual('Engineer');
    });
    })
