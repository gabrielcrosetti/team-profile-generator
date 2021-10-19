const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
const Intern = require("../lib/intern");

describe("Intern", () =>{
 it("can create a new intern and set a name", () => {
        const name = "Gabe";
        const intern = new Intern(name)

        expect(intern.name).toEqual(name)
    }); 
    it("can set an intern ID", () => {
        const id = 1;
        const intern = new Intern("Gabe", id)

        expect(intern.id).toEqual(id)
    });
    it("to set an intern email", () => {
        const email = "test@test.com";
        const intern = new Intern("Gabe", 1, email)

        expect(intern.email).toEqual(email)
    });
    it("gets Intern's school", () => {
        const intern = new Intern('Intern1', '2', 'email', 'school1');
    
        expect(intern.school).toEqual('school1');
    });
    
    it('to see if getRole method works', () => {
        const intern = new Intern('Intern');
    
        expect(intern.getRole()).toBe('Intern');;
    });
} )