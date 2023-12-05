/// <reference types="cypress" />

export class ProgressBar {

    verifyProgressBar(percentage: string): void {
        cy.get('.progress-bar').should('have.text', percentage);
    }

    clickStartButton(): void {
        cy.get('#startStopButton').click();
    }

    waitUntilResetButton(): void {
        cy.get('#resetButton', { timeout: 15000 }).should('be.visible');
    }

}

export const progressBar = new ProgressBar();