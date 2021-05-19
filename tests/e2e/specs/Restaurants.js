
describe('Restauarants Page', () => {
    it('Loads restaurants page successfully', () => {
      cy.visit('/restaurants')
      cy.contains('Welcome to our restaurants list! Your local time is: ')
    })
})

describe('Store list components', () => {
    
    it('mounts the search filter successfully', () => {
        cy.get('[data-test=stores-search]')
    })

    it('renders store list components successfully', () => {
        cy.get('[data-test=stores-list-wrapper]')
    })
    
    it('list at least one store' , () => {
        cy.get('[data-test=stores-list-wrapper]').children().should('have.length', 20)
    })

    it('Search filter should filter store list', () => {
        cy.get('[data-test=stores-search]').type('002')

        cy.get('[data-test=stores-list-wrapper]').find('.store-list__item').its('length').should('be.lt', 20)
    })
})



