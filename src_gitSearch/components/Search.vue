<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="searchName" placeholder="enter the name you search" />
      <button @click="ClickSearch">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      // 搜索名称
      searchName: '',
    }
  },
  methods: {
    ClickSearch() {
      if (!this.searchName.trim()) {
        this.searchName = '';
        return alert("plese input name you search")

      }
      this.$globalEventBus.$emit('search', this.searchName);
      this.searchName = '';
    }
  },

}
</script>

<style scoped>
</style>
