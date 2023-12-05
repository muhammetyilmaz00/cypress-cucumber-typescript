/// <reference types="cypress" />

import { DataTable } from "@badeball/cypress-cucumber-preprocessor";

export class WebTables {
    private age= '';
    private email= '';
    private salary= '';
    private department=  '';

    private readonly rowSelector = ':nth-child';
    private readonly firstNameSelector = ':nth-child(1)';
    private readonly lastNameSelector = ':nth-child(2)';
    private readonly ageSelector = ':nth-child(3)';
    private readonly emailSelector = ':nth-child(4)';
    private readonly salarySelector = ':nth-child(5)';
    private readonly departmentSelector = ':nth-child(6)';
    private readonly tableRowSelector = '.rt-tr';
    private readonly firstNameId = '#firstName';
    private readonly lastNameId = '#lastName';
    private readonly userEmailId = '#userEmail';
    private readonly ageId = '#age';
    private readonly salaryId = '#salary';
    private readonly departmentId = '#department';

    clickAddButton(): void {
        cy.get('#addNewRecordButton').click();
    }

    fillOutTheRegistrationForm(dataTable:DataTable): void {
        dataTable.hashes().forEach(element => {
            cy.get(this.firstNameId).clear().type(element.FirstName);
            cy.get(this.lastNameId).clear().type(element.LastName);
            cy.get(this.userEmailId).clear().type(element.Email);
            cy.get(this.ageId).clear().type(element.Age);
            cy.get(this.salaryId).clear().type(element.Salary);
            cy.get(this.departmentId).clear().type(element.Department);
        });
    }

    verifyTheForm(dataTable:DataTable): void {
        dataTable.hashes().forEach(element => {
            this.verifyRowData(4, element);
        });
    }

    verifyRowData(rowIndex:number, element:any): void {
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.firstNameSelector}`).should('have.text', element.FirstName);
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.lastNameSelector}`).should('have.text', element.LastName);
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.ageSelector}`).should('have.text', element.Age);
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.emailSelector}`).should('have.text', element.Email);
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.salarySelector}`).should('have.text', element.Salary);
        cy.get(`${this.rowSelector}(${rowIndex}) > ${this.tableRowSelector} > ${this.departmentSelector}`).should('have.text', element.Department);
    }

    saveDetails(rowIndex:string): void {
        if (rowIndex === 'first') {
            this.saveRowDetails(1);
        } else if (rowIndex === 'second') {
            this.saveRowDetails(2);
        } else if (rowIndex === 'third') {
            this.saveRowDetails(3);
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    saveRowDetails(index:number): void {
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.ageSelector}`).then(($value) => {
            this.age = $value.text();
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.emailSelector}`).then(($value) => {
            this.email = $value.text();
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.salarySelector}`).then(($value) => {
            this.salary = $value.text();
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.departmentSelector}`).then(($value) => {
            this.department = $value.text();
        });
    }

    clickOnEditButton(rowIndex:string): void {
        if (rowIndex === 'first' || rowIndex === 'second' || rowIndex === 'third') {
            cy.get(`#edit-record-${rowIndex === 'first' ? 1 : rowIndex === 'second' ? 2 : 3}`).click();
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    editFirstNameAndLastName(dataTable:DataTable): void {
        dataTable.hashes().forEach(element => {
            cy.get(this.firstNameId).clear().type(element.FirstName);
            cy.get(this.lastNameId).clear().type(element.LastName);
        });
    }

    checkFirstNameAndLastName(dataTable:DataTable): void {
        dataTable.hashes().forEach(element => {
            cy.get(`${this.rowSelector}(2) > ${this.tableRowSelector} > ${this.firstNameSelector}`).should('have.text', element.FirstName);
            cy.get(`${this.rowSelector}(2) > ${this.tableRowSelector} > ${this.lastNameSelector}`).should('have.text', element.LastName);
        });
    }

    checkStoredDetails(rowIndex:string): void {
        if (rowIndex === 'first') {
            this.checkRowDetails(1);
        } else if (rowIndex === 'second') {
            this.checkRowDetails(2);
        } else if (rowIndex === 'third') {
            this.checkRowDetails(3);
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    checkRowDetails(index:number): void {
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.ageSelector}`).then(($value) => {
            expect(this.age).to.eq($value.text());
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.emailSelector}`).then(($value) => {
            expect(this.email).to.eq($value.text());
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.salarySelector}`).then(($value) => {
            expect(this.salary).to.eq($value.text());
        });
        cy.get(`${this.rowSelector}(${index}) > ${this.tableRowSelector} > ${this.departmentSelector}`).then(($value) => {
            expect(this.department).to.eq($value.text());
        });
    }

    clickSubmitButton(): void {
        cy.get('#submit').click({ force: true })
    }
}

export const webTables = new WebTables();
