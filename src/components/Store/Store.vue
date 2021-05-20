<template>
  <div class="store" v-if="isVisible">
    <div class="store__wrapper">
      <h2 class="store__title">{{ title }}</h2>
      <span class="store__location">{{ location }}</span>
      <img :src="require('@/assets/img/storeBg.jpg')" :alt="title" :title="title" />
      <div class="mt-3">
        <small><span class="store__joke mr-3">Joke of the day:</span> {{joke}}</small>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import './Store.scss';
</style>
<script>

export default {
  name: 'Store',
  data() {
    return {
      joke: null
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    location: {
      type: String,
      default: null
    },
    photo: {
      type: String,
      default: null
    }
  },
  computed: {
    isVisible () {
      return !!this.title && !!this.location;
    }
  },
  mounted(){
    fetch('https://api.jokes.one/jod?category=knock-knock')
      .then(response => response.json())
      .then(res => {
        this.joke = res.contents.jokes[0].joke.text
      });
    }
}
</script>
