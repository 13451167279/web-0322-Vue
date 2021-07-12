<template>
  <div id="app">
    <div>
      <Header></Header>
      <Container></Container>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Container from './components/Container.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },

  components: {
    Header,
    Container
  }
}

</script>

<style scoped>
</style>
