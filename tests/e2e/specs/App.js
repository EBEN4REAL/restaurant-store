
describe('Loads app successfully', () => {
    it('Visits the app root url', () => {
      cy.visit('/')
      cy.contains('Welcome! Your local time is:')
    })
})

describe('Meals component', () => {
  it('mount meals component successfully', () => {
    cy.visit('/meals')
  })
  it('Renders meals headers successfully' , () => {
    cy.contains('Pasta carbonara meals')
    cy.contains('Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!')
  })
})

describe("Meals inputs", () => {
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
  for(let i=0; i<recipeFormInputs.length; i++)  {
    it(`Should get corresponding inputs when meal component is mounted`, () => {
      cy.get(`.${recipeFormInputs[i].class}`)
    })
  }
})
describe('Calculate Meals Button', () => {
  it('mount meals component successfully', () => {
    cy.visit('/meals')
  })
  it('Renders meals headers successfully' , () => {
    cy.contains('Pasta carbonara meals')
    cy.contains('Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!')
  })
})