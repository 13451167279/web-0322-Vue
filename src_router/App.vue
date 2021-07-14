<template>
  <div id="app">
    <div class="row">
      <div class=" col-md-offset-2 panel">
        <h1>router-test</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-offset-2 col-md-2 list-group">
        <router-link active-class="myBgcolor" class="list-group-item" to="/home">Home</router-link>
        <router-link active-class="myBgcolor" class="list-group-item" to="/about">About</router-link>
      </div>
      <div class="col-md-8 panel">
        <keep-alive >
          <router-view aa='aaa111'></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },

}

</script>

<style scoped>
</style>
