/// <reference types="cypress" />

import { DataTable } from "@badeball/cypress-cucumber-preprocessor";

export class PracticeForm {

    fillOutTheForm(dataTable: DataTable): void {
        dataTable.hashes().forEach(element => {
            cy.get('#firstName').clear().type(element.name);
            cy.get('#lastName').clear().type(element.lastName);
            cy.get('#userEmail').clear().type(element.email);
            cy.contains(element.gender).click();
            cy.get('#userNumber').clear().type(element.mobileNumber);
            cy.get('#dateOfBirthInput').type('{selectall}').type(element.dateOfBirth);
            cy.get('#subjectsContainer').click();
            cy.get('#subjectsContainer').type(element.subjects);
            cy.contains(element.hobbies).click();
            cy.get('#uploadPicture').selectFile('cypress/fixtures/cypress.png');
            cy.get('#currentAddress').clear().type(element.currentAddress);
            cy.get('#state').click();
            cy.get('#react-select-3-option-0').should('contain', element.state).click();
            cy.get('#city').click();
            cy.get('#react-select-4-option-0').should('contain', element.city).click({ force: true });
        });
    }

    checkForm(dataTable: DataTable): void {
        dataTable.hashes().forEach(element => {
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', element.name + ' ' + element.lastName);
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', element.email);
            cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text', element.gender);
            cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text', element.mobileNumber);
            cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text', element.hobbies);
            cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text', element.currentAddress);
            cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text', element.state + ' ' + element.city);
        });
    }

}

export const practiceForm = new PracticeForm();