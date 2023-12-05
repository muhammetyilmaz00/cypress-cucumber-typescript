import { When,Then,DataTable } from "@badeball/cypress-cucumber-preprocessor"
import { webTables } from "../../cypress/e2e/pageObjects/WebTables"

When('I click to Add button on the Web Tables page', () => {
    webTables.clickAddButton()
})

When('I fill out the registration from', (dataTable:DataTable) => {
    webTables.fillOutTheRegistrationForm(dataTable)
})

When('I click to Submit button', () => {
    webTables.clickSubmitButton()
})

Then('I verify the form for the expected parameters', (dataTable:DataTable) => {
    webTables.verifyTheForm(dataTable)
})

When('I save the details of {} row record', (rowIndex:string) => {
    webTables.saveDetails(rowIndex)
})

When('I click on the {} row edit record button on the Web Tables page', (rowIndex:string) => {
    webTables.clickOnEditButton(rowIndex)
})

When('I edit the record with the parameters', (dataTable:DataTable) => {
    webTables.editFirstNameAndLastName(dataTable)
})

Then('I check the first name and last name as expected parameters', (dataTable:DataTable) => {
    webTables.checkFirstNameAndLastName(dataTable)
})

Then('I check that the stored details of the {} record have not changed', (rowIndex:string) => {
    webTables.checkStoredDetails(rowIndex)
})