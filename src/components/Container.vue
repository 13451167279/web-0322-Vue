<template>
  <div class="container">
    <Left :addComment="addComment"></Left>
    <Right :comments='comments' :deleteComment='deleteComment'></Right>
  </div>
</template>

<script>
import Left from '../components/Left.vue'
import Right from '../components/Right.vue'
export default {
  name: 'Container',
  components: {
    Left,
    Right
  },
  data() {
    return {
      // comments: [
      //   { id: 1, username: '老王', content: 'Vue 太难了' },
      //   { id: 2, username: '老徐', content: 'Vue so easy' },
      // ]

      comments: JSON.parse(localStorage.getItem("comments_key")) || [
        { id: 1, username: '老王', content: 'Vue 太难了' },
        { id: 2, username: '老徐', content: 'Vue so easy' },
      ],
    }
  },

  watch: {
    comments: {
      handler(value) {
        localStorage.setItem("comments_key", JSON.stringify(value));
      },
    }
  },

  methods: {
    addComment(comment) {
      comment.id = Date.now();
      this.comments.unshift(comment);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    }
  }
}
</script>

<style  scoped>
</style>
