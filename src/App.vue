<template>
  <div id="app ">
    <Header />
    <div class="app-container mt-4">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/styles.scss';
</style>
<script>
import Header from '@/components/Header/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
