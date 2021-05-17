import { mount } from '@vue/test-utils';
import Meals from '@/views/Meals';


describe('Loads app successfully', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('Welcome! Your local time is:')
    })
})
  
describe('Carbonatra meals calculator', () => {
  it('Loads carbonatra meal calculator component successfully', () => {
    component = mount(Meals);
    wrapper = component.find(".page__carbonara");
  })
})
