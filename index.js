// Imported packages
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/generated');

// Questions class

class Prompt {
    constructor() {
        this.teamArray = [];
    }
    /**
     * @returns 
     */
    getTeamArray() {
        return this.teamArray;
    }


    // Prompt questions 

    questions() {
        inquirer.prompt(
            {
                type: 'list',
                name: 'employeeType',
                message: "Which employee type would you like to add to your team?",
                choices: ['Manager', 'Engineer', 'Intern', 'I am done entering my team info']
            })
            .then(({ employeeType }) => {
                if (employeeType === 'Manager') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the manager's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct manager's name");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Enter the manager's employee ID",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("The employee id should be a number");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the manager's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct manager's email");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'officeNumber',
                            message: "Enter the manager's office number",
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log("The office number should be a number");
                                    return false;
                                }
                            }
                        },
                    ])
                        // This pushes the new Manager data into the teamArray
                        .then((templateData) => {
                            const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                            this.teamArray.push(newManager);
                            this.questions();
                        });

                } else if (employeeType === 'Engineer') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct engineer's name");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Enter the engineer's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("The employee id should be a number");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct engineer's email");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct engineer's github username");
                                    return false;
                                }
                            }
                        }

                        // This pushes new Engineer data into the teamArray
                    ]).then(templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        this.teamArray.push(newEngineer);
                        this.questions();
                    });

                } else if (employeeType === 'Intern') {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Enter the intern's employee id",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("The employee id should be a number");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "Enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct intern's email");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Enter the correct intern school's name!");
                                    return false;
                                }
                            }
                        }
                        // This pushes the Intern data into the teamArray
                    ]).then(templateData => {
                        const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                        this.teamArray.push(newIntern);
                        this.questions();
                    });

                } else if (employeeType === 'I am done entering my team info') {

                    // This function writes the new html file in index.html
                    const pagehtml = generateHTML(this.getTeamArray());
                    fs.writeFile('./dist/index.html', pagehtml, err => {
                        if (err) throw new Error(err);

                        console.log('Your page has been created! Check out index.html in the dist/ folder to see it');
                    });
                }
            });

    }
};

const prompt = new Prompt();
prompt.questions();