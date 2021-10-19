const { it, expect } = require('@jest/globals');
const Employee = require('../lib/employee');
const Manager = require("../lib/manager");

describe("Manager", () => {
    it("can create a new manager and set a name", () => {
        const name = "Gabe";
        const manager = new Manager(name)

        expect(manager.name).toEqual(name)
    }); 
    it("can set an manager ID", () => {
        const id = 1;
        const manager = new Manager("Gabe", id)

        expect(manager.id).toEqual(id)
    });
    it("to set an manager email", () => {
        const email = "test@test.com";
        const manager = new Manager("Gabe", 1, email)

        expect(manager.email).toEqual(email)
    });
    it('gets office number', () => {
        const manager = new Manager("Gabe", 1, "test@test.com", "6");
    
        expect(manager.getOfficeNumber()).toEqual("6");
    });
    
    it('to see if getRole method works', () => {
        const manager = new Manager("Manager");
    
        expect(manager.getRole()).toEqual('Manager');
    });
    
})