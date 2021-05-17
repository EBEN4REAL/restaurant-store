<template>
  <div class="page page__carbonara py-4" data-testid="meals">
    <h6 class="text-center">Pasta carbonara meals</h6>
    <div class="page__carbonara-meals">
      <RecipeForm :ingredients="secretIngredients"/>
    </div>
  </div>
</template>
<script>
const RecipeForm = () => import("@/components/RecipeForm/RecipeForm");

export default {
  name: 'Meals',
  components: {
    RecipeForm
  },
  data () {
    return {
      secretIngredients: {
        pasta: 500,
        bacon: 200,
        eggs: 1,
        milk: 200,
        butter: 500,
        oil: 100
      }
    }
  }
}
</script>
