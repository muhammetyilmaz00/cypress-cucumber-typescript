import { Given, When } from "@badeball/cypress-cucumber-preprocessor"
import { homePage } from "../../cypress/e2e/pageObjects/HomePage";

Given('I navigate to demoqa website', () => {
    homePage.navigateToHomePage();
});

When('I click to {string} category', (category:string) => {
    homePage.clickToCategory(category)
});

When('I click to {string} in menu list', (menu:string) => {
    homePage.clickToMenu(menu)
});