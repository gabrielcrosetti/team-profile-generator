
const { expect, it } = require('@jest/globals');
const Employee = require('../lib/employee');


describe("Employee", () => {
    it("can create a new employee and set a name", () => {
        const name = "Gabe";
        const employee = new Employee(name)

        expect(employee.name).toEqual(name)
    }); 
    it("can set an employee ID", () => {
        const id = 1;
        const employee = new Employee("Gabe", id)

        expect(employee.id).toEqual(id)
    });
    it("to set an employee email", () => {
        const email = "test@test.com";
        const employee = new Employee("Gabe", 1, email)

        expect(employee.email).toEqual(email)
    });
    it("to see if getName method works", () => {
        const employee = new Employee("Gabe", 1,"test@test.com")

        expect(employee.getName()).toEqual("Gabe")
    });
    it("to see if get ID method works", () => {
        const employee = new Employee("Gabe", 1,"test@test.com")

        expect(employee.getId()).toEqual(1)
    });
    it("to see if getEmail method works", () => {
        const employee = new Employee("Gabe", 1,"test@test.com")

        expect(employee.getEmail()).toEqual("test@test.com")
    });
    it("to see if getRole method works", () => {
        const employee = new Employee("Gabe", 1,"test@test.com")

        expect(employee.getRole()).toEqual("Employee")
    });
})

