import { When } from "@badeball/cypress-cucumber-preprocessor"
import { progressBar } from "../../cypress/e2e/pageObjects/ProgressBar"

When('I verify the progress is {}', (percentage:string) => {
    progressBar.verifyProgressBar(percentage)
})

When('I click to Start button on Progress Bar page', () => {
    progressBar.clickStartButton()
})

When('I wait until Reset button appairs', () => {
    progressBar.waitUntilResetButton()
})