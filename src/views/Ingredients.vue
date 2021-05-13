<template>
  <div class="page page__stores">
    <IngredientsBanner :backgroundMedia="bannerProps.backgroundMedia" :text="bannerProps.text" />
    <div class="page__stores-header-wrapper">
      <h3 class="page__stores-header">Restaurant Info</h3>
    </div>
    <div class="page__stores--cards-wrapper">
      <div class="page__stores--card">
        <h3>Ingredient</h3>
        <img src="" />
        <p>Quantity</p>
      </div>
      <div class="page__stores--card">
        
      </div>
      <div class="page__stores--card">

      </div>
      <div class="page__stores--card">
        
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
