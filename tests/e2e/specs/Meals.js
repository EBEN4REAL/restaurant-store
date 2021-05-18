describe('Meals component', () => {

    beforeEach(() => {
      cy.visit('/meals')
    })
  
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
        it(`Should get corresponding inputs when meal component is mounted`, () => {
          cy.get(`.${recipeFormInputs[i].class}`)
        })
      }
    })

    describe('Calculate Meals Button', () => {

        it('Mounts submit button component' , () => {
            cy.get('.calc-meals-btn')
        })

        it('Renders the meal compoennt headers' , () => {
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
              const submitMealBtn =  cy.get('.calc-meals-btn')
              submitMealBtn.click()
              for(let i=0; i<recipeFormInputs.length; i++)  {
                it(`Should get corresponding inputs when meal component is mounted`, () => {
                    const inputField = cy.get(`.${recipeFormInputs[i].value}`)
                    console.log(inputField)
                    expect(inputField).to.be.greaterThan(0)
                })
              }
         
        })
    })
  
  })
  
  
 