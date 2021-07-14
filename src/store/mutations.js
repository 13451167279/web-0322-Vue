export default {
  RECEIVE_TODOS(state, todos) {
    state.todos = todos
  },

  addTodo(state, todo) {
    todo.id = Date.now()
    state.todos.push(todo)
  },
  deleteTodo(state, index) {
    state.todos.splice(index, 1)
  },
  selectAllTodo(state, isSelect) {
    state.todos.forEach(todo => (todo.isCompleted = isSelect))
  },
  deleteSeleteTodo(state) {
    state.todos = state.todos.filter(todo => !todo.isCompleted)
  },
  // 改变todo的isCompleted属性
  todoChecked(state, todo) {
    // state = state;
    todo.isCompleted = !todo.isCompleted
  }
}
