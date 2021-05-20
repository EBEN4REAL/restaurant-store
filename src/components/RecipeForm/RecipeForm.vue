<template>
  <div class="recipe-form pt-3">
    <h6 class="text-center">Introduce below the quantity for each ingredient you have<br>
     and we will calculate how many Pasta Carbonara meals you can cook!</h6>
    <form class="recipe-form__form ">
      <label for="recipe-eggs">Eggs</label>
      <input class="recipe-form__form-input form-control eggs" type="number"  name="eggs"  id="recipe-eggs" value="0" v-model="eggs" />
      <label for="recipe-pasta">Pasta</label>
      <input class="recipe-form__form-input form-control pasta" type="number"  name="pasta" id="recipe-pasta" value="0" v-model="pasta" />
      <label for="recipe-butter">Butter</label>
      <input class="recipe-form__form-input form-control butter" type="number"  name="butter" id="recipe-butter" value="0" v-model="butter" />
      <label for="recipe-milk">Milk</label>
      <input class="recipe-form__form-input form-control milk" type="number"  name="milk" id="recipe-milk" value="0" v-model="milk" />
      <label for="recipe-oil">Oil</label>
      <input class="recipe-form__form-input form-control oil" type="number"  name="oil" id="recipe-oil" value="0" v-model="oil" />
      <label for="recipe-bacon">Bacon</label>
      <input class="recipe-form__form-input form-control bacon" type="number"  name="bacon" id="recipe-bacon" value="0" v-model="bacon" />
      <button type="submit" class="btn btn-warning calc-meals-btn" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
  @import './RecipeForm.scss';
</style>
<script>
import Vue from 'vue'
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
Vue.use(Toast);

export default {
  name: 'RecipeForm',
  data () {
    return {
      meals: null,
      eggs: null,
      pasta: null,
      butter: null,
      bacon: null,
      milk: null,
      oil: null
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({})
    }
  },
  created(){
    
  },
  methods: {
    calculate (event) {
      event.preventDefault();
      if(!this.eggs || !this.pasta || !this.butter || !this.milk || !this.bacon || !this.oil) {
        this.$toast("Some fields are missing ", {
            type: "error",
            timeout: 3000
        });
        return
      }

      let ingredients = Object.assign({}, this.ingredients)
      
      let ingredientsArr = []

      for(let ingredient in ingredients) {
        let quantity
        quantity = ingredient === 'pasta' 
          ? Math.floor( this.pasta / ingredients['pasta'] ) 
          : ingredient === 'eggs' 
          ? Math.floor( this.eggs / ingredients['eggs'] ) 
          : ingredient === 'bacon'
          ? Math.floor( this.bacon / ingredients['bacon'] )
          : ingredient === 'oil'
          ? Math.floor( this.oil / ingredients['oil'] )
          : ingredient === 'milk'
          ? Math.floor( this.milk / ingredients['milk'] )
          : ingredient === 'butter'
          ? Math.floor( this.butter / ingredients['butter'] )
          : null
        
        ingredientsArr.push(quantity)
      }

      this.meals = Math.min(...ingredientsArr)

      this.$toast(`${this.meals} Meals`, {
          type: "success",
          timeout: 3000
      });
      const bannerProps = {
        backgroundMedia: {
          type: 'image',
          src: 'storeBg.jpg'
        },
        text: `${this.meals} Meals`
      }
      localStorage.setItem('bannerProps', JSON.stringify(bannerProps))
      this.$router.push({name: 'ingredients'})
    }
  }
}

</script>

