

beforeEach(() => {
    cy.visit('/meals')
})

let pastaQuantity, eggsQty, milkQty, baconQty, butterQty, oilQty
            

describe('Meals component', () => {
  
    it('mount meals component successfully', () => {
      cy.visit('/meals')
    })
  
    it('Renders meals headers successfully' , () => {
      cy.contains('Pasta carbonara meals')
      cy.contains('Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!')
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
        it(`Should get corresponding recipe form inputs when meal component is mounted`, () => {
          cy.get(`.${recipeFormInputs[i].class}`)
        })
      }
    })

    describe('Recipe form inputs', () => {

        it('Mounts submit button component' , () => {
            cy.get('.calc-meals-btn')
        })

        it('Renders the meals component headers' , () => {
            cy.contains('Pasta carbonara meals')
            cy.contains('Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!')
        })

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
              
              const submitMealBtn =  cy.get('.calc-meals-btn', { timeout: 5000 })
              submitMealBtn.click({force: true})
              for(let i=0; i<recipeFormInputs.length; i++)  {
                it(`should check that the recipe is properly validated`, () => {
                    const inputField = cy.get(`.${recipeFormInputs[i].class}`)
                    expect(inputField.value).to.be.greaterThan(0)
                })
              }
        })

        it("simulate user interaction with inputs" ,() => {

            cy.get('.pasta').type('1040', {force: true})
            cy.get('.eggs').type('3', {force: true})
            cy.get('.bacon').type('410', {force: true})
            cy.get('.oil').type('300', {force: true})
            cy.get('.butter').type('1010', {force: true})
            cy.get('.milk').type('405', {force: true})

            
            
            cy.get('.pasta').invoke('val')
                .then(val => {
                    pastaQuantity = val
                })
            
            cy.get('.eggs').invoke('val')
                .then(val => {
                    eggsQty = val
                })
            
            cy.get('.milk').invoke('val')
                .then(val => {
                    milkQty = val
                })
            
            cy.get('.bacon').invoke('val')
                .then(val => {
                    baconQty = val
                })
            
            cy.get('.butter').invoke('val')
                .then(val => {
                    butterQty = val
                })
            
            cy.get('.oil').invoke('val')
                .then(val => {
                    oilQty = val
                })

        })

        describe('Meals Calculation', () => {
            it("Calculate the number of meals with a user's introduced ingredients quantities", () => {
                const calculateIngredients = (pasta, eggs, bacon, oil, milk, butter) => {
                    const secretIngredients =  {
                        pasta: 500,
                        bacon: 200,
                        eggs: 1,
                        milk: 200,
                        butter: 500,
                        oil: 100
                    }
                    let ingredientsArr = []
        
                    for(let ingredient in secretIngredients) {
                      let quantity
                      quantity = ingredient === 'pasta' 
                        ? Math.floor( pasta / secretIngredients['pasta'] ) 
                        : ingredient === 'eggs' 
                        ? Math.floor( eggs / secretIngredients['eggs'] ) 
                        : ingredient === 'bacon'
                        ? Math.floor( bacon / secretIngredients['bacon'] )
                        : ingredient === 'oil'
                        ? Math.floor( oil / secretIngredients['oil'] )
                        : ingredient === 'milk'
                        ? Math.floor( milk / secretIngredients['milk'] )
                        : ingredient === 'butter'
                        ? Math.floor( butter / secretIngredients['butter'] )
                        : null
                      
                      ingredientsArr.push(quantity)
                    }
              
                    let meals = Math.min(...ingredientsArr)
    
                    return `${meals} Meals`
                }

                const calculatedMeals = calculateIngredients(pastaQuantity, eggsQty, baconQty, oilQty, milkQty, butterQty)

                console.log(pastaQuantity, eggsQty, baconQty, oilQty, milkQty, butterQty)

                console.log(calculatedMeals)
            })
        })
    })
  
  })
  
  
 