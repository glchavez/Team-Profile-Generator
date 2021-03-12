const inquirer = require('inquirer');
const employee = require('../lib/Employee');

describe ('employee', () => {
    describe ('employeeInfo', () => {
        it('should prompt the user to enter employee name, employee ID, and email', () => {
            
        })

        it('should update HTML file with employee name, employee ID, and email', () => {

        })
    });

    describe ('addEmployee', () => {
        it('should prompt if the user wants to create a new engineer or intern', () => {

        })
        
        it('should run employeeInfo() and engineer/intern code if creating new employee, else run endApp()', () => {

        })
    });

    describe ('endApp', () => {
        it('should end the application and notify user of new HTML file created', () => {

        })
    });
});