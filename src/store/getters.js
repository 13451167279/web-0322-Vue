export default {
  //所有任务的数量
  todosLength(state) {
    return state.todos.length
  },

  // 计算已完成/选中的数量
  completeSize(state) {
    return state.todos.reduce(
      (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
      0
    )
  },
  // 是否勾选
  isSelectAll(state, getters) {
    return (
      state.todos.length === getters.completeSize && getters.todos.length > 0
    )
  }
}
