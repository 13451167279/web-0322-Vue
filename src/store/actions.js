export default {
  getTodoList({ commit }) {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem('todos_list')) || [
        { id: 1, title: '西游记', isCompleted: true },
        { id: 2, title: '三国演义', isCompleted: false },
        { id: 3, title: '水浒传', isCompleted: false },
        { id: 4, title: '红楼梦', isCompleted: true },
        { id: 5, title: '西厢记', isCompleted: false },
        { id: 6, title: '东游记', isCompleted: false }
      ];
      commit('RECEIVE_TODOS', todos)
    }, 1000)
  }
}
