
import { mount } from '@vue/test-utils'
import MealsComponent from '@/views/Meals.vue'


let mealsComponent
describe('Meal  component', () => {
  it('renders the meals component', () => {
    const wrapper = mount(MealsComponent)
    expect(wrapper.contains('.page__carbonara')).toBe(true)
  })
})

describe('Calculate Meals Button', () => {
    beforeEach(() => {
        mealsComponent = mount(MealsComponent);
    });

    it('Test that the form is validated correctly' , () => {
        const recipeFormInputs = [
            { 
              class: "eggs",
            } ,
            { 
              class: "butter",
            } ,
            { 
              class: "bacon",
            } ,
            { 
              class: "oil",
            } ,
            { 
              class: "pasta",
            } ,
            { 
              class: "milk",
            } 
          ]
          const wrapper = mount(MealsComponent)
          const submitMealBtn =  wrapper.find(`.calc-meals-btn`)
          submitMealBtn.trigger('click')
          for(let i=0; i<recipeFormInputs.length; i++)  {
            it(`Should get corresponding inputs when meal component is mounted`, () => {
                const inputField = mealsComponent.find(`.${recipeFormInputs[i].value}`)
                expect(inputField).to.be.greaterThan(0)
            })
          }
    })
})

