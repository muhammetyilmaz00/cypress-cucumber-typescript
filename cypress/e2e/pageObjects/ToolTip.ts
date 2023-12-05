/// <reference types="cypress" />

export class ToolTip {

    hoverOverButton(): void {
        cy.get("#toolTipButton").trigger("mouseover");
    }

    checkHoverButtonMessage(): void {
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    }

}

export const toolTip = new ToolTip();