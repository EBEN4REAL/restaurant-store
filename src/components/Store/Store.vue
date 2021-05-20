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
    this.fetchJokes()
  },
  methods: {
    async  fetchJokes() {
      try {
        const response = await this.fetchWithTimeout('https://api.jokes.one/jod?category=knock-knock', {
          timeout: 6000
        });
        const res = await response.json();
        this.joke = res.contents.jokes[0].joke.text
      } catch (error) {
        throw new Error(error)
      }
    },

    async fetchWithTimeout(resource, options) {
      const { timeout = 8000 } = options;
      
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(resource, {
        ...options,
        signal: controller.signal  
      });
      clearTimeout(id);

      return response;
    }
    
  }
}
</script>
