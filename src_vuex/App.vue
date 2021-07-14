<template>
  <div id="app">
    <h2>计数器 {{count}} ,当前是{{evenOrOdd}} </h2>
    <el-button @click="increment">点击增加</el-button>
    <el-button @click="decrement">点击减少</el-button>
    <el-button @click="incrementIfOdd">奇数增加</el-button>
    <el-button @click="incrementAsync">异步增加</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd']),
  },
  methods: {
    // increment() {
    //   this.$store.commit('INCREMENT');
    // },
    // decrement() {
    //   this.$store.commit('DECREMENT');
    // },
    // incrementIfOdd() {

    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync')
    // },
    ...mapMutations({
      increment:'INCREMENT',
      decrement:'DECREMENT'
    }),
    ...mapActions(['incrementIfOdd','incrementAsync']),
  },

}

</script>

<style scoped>
</style>
