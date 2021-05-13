<template>
  <div class="page page__stores">
    <IngredientsBanner :backgroundMedia="bannerProps.backgroundMedia" :text="bannerProps.text" />
    <div class="page__stores-header-wrapper">
      <h3 class="page__stores-header">Restaurant Info</h3>
    </div>
    <div class="page__stores--cards-wrapper">
      <div class="page__stores--card" v-for="(ingredient,i) in capitalizedIngredients" :key="i">
        <h3>{{ingredient.name}}</h3>
        <img :src="require(`@/assets/img/${ingredient.imageExt}`)" width="20px" />
        <p>{{ingredient.quantity}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientsBanner from '@/components/Banner/Banner.vue'

export default {
  name: 'Stores',
  components: {
    IngredientsBanner
  },
  data () {
    return {
     mealIngredients: {},
     bannerProps: {}
    }
  },
  computed: {
   capitalizedIngredients() {
    return this.mealIngredients.map(mealIngredient => {
      mealIngredient.name = mealIngredient.name.toUpperCase()
      return mealIngredient
    })
   }
  },
  mounted() {
    this.bannerProps = localStorage.getItem('bannerProps') 
      ? JSON.parse(localStorage.getItem('bannerProps'))
      : {}

    this.mealIngredients = localStorage.getItem('mealIngredients') 
      ? JSON.parse(localStorage.getItem('mealIngredients'))
      : {}
  }
}
</script>
