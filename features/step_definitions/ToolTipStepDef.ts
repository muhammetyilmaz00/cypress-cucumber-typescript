import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { toolTip } from "../../cypress/e2e/pageObjects/ToolTip"

When('I hover over the button "Hover me to see"', () => {
    toolTip.hoverOverButton()
})

Then('I see the message next to the button', () => {
    toolTip.checkHoverButtonMessage()
})

