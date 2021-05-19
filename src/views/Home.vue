<template>
  <div class="page page__home mt-5">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  data () {
    return {
      currentTime: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  },
  computed: {
    welcomeMessage () {
      return 'Welcome! Your local time is: ' + this.currentTime;
    }
  },
  created() {
    
  },
  mounted() {
    this.currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
   
  },
  methods: {
    
  }
}
</script>
