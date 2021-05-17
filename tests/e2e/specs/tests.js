
describe('Loads app successfully', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('Welcome! Your local time is:')
    })
})