import { When,Then } from "@badeball/cypress-cucumber-preprocessor"
import { droppable } from "../../cypress/e2e/pageObjects/Droppable"

When('I drag the box and drop it on the other box',()=>{
    droppable.dragAndDrop()
})

Then('I verify the box has dropped',()=>{
    droppable.verifyTheBoxDropped()
})