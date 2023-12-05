import { When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor"
import { practiceForm } from "../../cypress/e2e/pageObjects/PracticeForm"

When('I fill out the form with the parameters', (dataTable:DataTable) => {
    practiceForm.fillOutTheForm(dataTable)
})

Then('I see the form result details as expected', (dataTable:DataTable) => {
    practiceForm.checkForm(dataTable)
})