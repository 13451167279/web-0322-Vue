<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo='addTodo'></Header>
        <List :todos='todos' :deleteTodo='deleteTodo' :todoChecked="todoChecked"></List>
        <Footer :todos='todos' :selectAllTodo="selectAllTodo" :deleteSeleteTodo='deleteSeleteTodo'></Footer>
      </div>
    </div>
    <!-- <props-test name='hhhhh'></props-test> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
// import PropsTest from './components/test/PropsTest.vue'

export default {
  name: 'App',
  data() {
    return {
      // todos: [
      //   { id: 1, title: '西游记', isCompleted: true },
      //   { id: 2, title: '三国演义', isCompleted: false },
      //   { id: 3, title: '水浒传', isCompleted: false },
      //   { id: 4, title: '红楼梦', isCompleted: true },
      //   { id: 5, title: '西厢记', isCompleted: false },
      //   { id: 6, title: '东游记', isCompleted: false },
      // ],
      todos:[]
    }
  },
  
  mounted() {
    setTimeout(() =>{
      this.todos =JSON.parse( localStorage.getItem("todos_list")) || []
    },1000)
  },

  watch: {
    todos: {
      handler(value,) {
        // 将todos保存到本地存储
        localStorage.setItem('todos_list', JSON.stringify(value));
      },

      deep: true,//开启深度监视

    }
  },

  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    selectAllTodo(isSelect) {
      this.todos.forEach(todo => todo.isCompleted = isSelect);
    },
    deleteSeleteTodo() {
      this.todos = this.todos.filter(todo => !todo.isCompleted)
    },
    // 改变todo的isCompleted属性
    todoChecked(todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  },
  components: {
    Footer,
    Header,
    List,
    // PropsTest
  }
}

</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
