<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link active-class="myBgcolor" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link active-class="myBgcolor" to='/home/message'>Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props:['aa'],
}
</script>

<style  scoped>
</style>
