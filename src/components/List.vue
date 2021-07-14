<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :index="index" :key="todo.id" :todo='todo'></Item>
  </ul>
</template>

<script>
import Item from "./Item.vue"
export default {
  name: '',
  components: {
    Item
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },

  watch: {
    todos: {
      handler(value) {
        // 将todos保存到本地存储
        localStorage.setItem('todos_list', JSON.stringify(value));
      },

      deep: true,//开启深度监视

    }
  },
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
