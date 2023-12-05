/// <reference types="cypress" />

export class Droppable {

    dragAndDrop(): void {
        cy.get('#draggable').drag('#droppable', { force: true });
        cy.get('#droppable').trigger('dragend', { force: true });
        cy.wait(1000);
    }

    verifyTheBoxDropped(): void {
        cy.get('#droppable').should('have.text', 'Dropped!');
    }
}

export const droppable = new Droppable();
