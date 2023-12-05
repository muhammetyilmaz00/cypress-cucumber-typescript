/// <reference types="cypress" />

export class HomePage {

    navigateToHomePage(): void {
        cy.visit('/');
    }

    clickToCategory(category: string): void {
        cy.contains(category).click();
    }

    clickToMenu(menu: string): void {
        cy.contains(menu).click();
    }

}

export const homePage = new HomePage();
