<template>
  <div id="app">
    <h2 v-if="!repoName">Loading...</h2>
    <h2 v-else>more star repo is <a :href="repoUrl">{{repoName}}</a></h2>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      repoName: '',
      repoUrl: ''
    }
  },

  mounted() {
    // this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars').then((response) => {
    //   const { name, html_url } = response.data.items[0];
    //   this.repoName = name;
    //   this.repoUrl = html_url;

    // }, (err) => {
    //   console.log(err);
    // })

    // axios.get('https://api.github.com/search/repositories?q=v&sort=stars').then((response) => {
    //   const res = response.data
    //   const { name, html_url } = res.items[0];
    //   this.repoName = name;
    //   this.repoUrl = html_url;

    // }, (err) => {
    //   console.log(err.message);
    // })
    // 模拟跨域
    axios.get('/gh/search/repositories', { params: { q: 'v', sort: 'stars' } }).then((response) => {
      const res = response.data
      const { name, html_url } = res.items[0];
      this.repoName = name;
      this.repoUrl = html_url;

    }, (err) => {
      console.log(err.message);
    })

  }


}

</script>

<style scoped>
</style>
