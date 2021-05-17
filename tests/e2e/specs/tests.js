import { mount } from '@vue/test-utils';

describe('Loads app successfully', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('Welcome! Your local time is:')
    })
})