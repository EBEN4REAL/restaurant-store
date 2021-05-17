<template>
  <div class="header">
    <ul class="header__navigation">
      <li class="header__navigation-item" @click="forceRender">
        <router-link :to="{path: '/'}" class="header__navigation-item-link" >Home</router-link>
      </li>
      <li class="header__navigation-item" @click="forceRender">
        <router-link :to="{path: '/meals'}" class="header__navigation-item-link">Carbonara Meals Calculator</router-link>
      </li>
      <li class="header__navigation-item" @click="forceRender">
        <router-link :to="{path: '/restaurants'}" class="header__navigation-item-link">Our Restaurants</router-link>
      </li>
      <li title="Toggle theme mode">
        <ThemeSwitch :key="key" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  @import './Header.scss';
</style>
<script>
import  ThemeSwitch from "@/components/ThemeSwitch"

export default {
  name: 'Header',
  components: {
    ThemeSwitch
  },
  data(){
    return {
      key: 0
    }
  },
  methods: {
    forceRender() {
      this.key++
    }
  }
}
</script>
