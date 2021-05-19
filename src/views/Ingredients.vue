<template>
  <div class="page page__stores" data-test="page-stores">
    <IngredientsBanner :backgroundMedia="bannerProps.backgroundMedia" :text="bannerProps.text" />
    <div class="page__stores-header-wrapper">
      <h3 class="page__stores-header">Restaurant Info</h3>
    </div>
    <div class="page__stores--cards-wrapper mt-4"  data-test="cards-wrapper">
      <div class="page__stores--card" v-for="(ingredient,i) in capitalizedIngredients" :key="i" >
        <h3 class="text-black">{{ingredient.name}}</h3>
        <img :src="require(`@/assets/img/${ingredient.imageExt}`)" width="50" />
        <p class="text-black">{{ingredient.quantity}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const IngredientsBanner = () => import("@/components/Banner/Banner.vue");


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
    return Array.from(this.mealIngredients).map(mealIngredient => {
      mealIngredient.name = `${ mealIngredient.name.charAt(0).toUpperCase()}${mealIngredient.name.slice(1).toLowerCase()}`  
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
