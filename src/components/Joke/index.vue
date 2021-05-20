<template>
     <div class="text-center mt-3">
        <small>{{joke}}</small>
    </div>
</template>
<script>
export default {
  name: 'StoreList',
   data() {
    return {
      joke: null
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