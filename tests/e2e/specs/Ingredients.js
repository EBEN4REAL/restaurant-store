
describe('Submitted Ingredients Page', () => {
    it('Loads Submitted Ingredients Page successfully', () => {
      cy.visit('/ingredients')
      cy.contains('Restaurant Info')
    })

    it('renders submitted ingredients container', () => {
        cy.get('[data-test=cards-wrapper]')
    })
    
})