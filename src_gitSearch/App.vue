<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Search from './components/Search.vue'


// import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Main,
    Search
  },



}

</script>

<style  scoped>
</style>>
