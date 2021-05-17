<template>
  <div class="page page__home mt-5">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  components: {

  },
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
    const setTimer = () => setTimeout(() => {
      this.currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
      setTimer();
    }, 1000);
    setTimer();
  },
  methods: {
    
  }
}
</script>
