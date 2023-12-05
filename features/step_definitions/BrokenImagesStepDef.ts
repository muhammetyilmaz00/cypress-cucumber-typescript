import { When } from "@badeball/cypress-cucumber-preprocessor"

When('I verify the broken image', () => {
    cy.get('[src="/images/Toolsqa_1.jpg"]')
        .should('be.visible')
        .and($img => {
            const imageElement = $img[0] as HTMLImageElement;
            expect(imageElement.naturalWidth).to.eq(0)
            expect(imageElement.naturalHeight).to.eq(0)
            })

})