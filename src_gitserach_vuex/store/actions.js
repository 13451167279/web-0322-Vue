import axios from 'axios'

export default {
  search({ commit }, searchName) {
    //更新页面显示状态
    commit('UPDATE_PAGE')
    //发送请求
    axios
      .get('https://api.github.com/search/users?', {
        params: { q: searchName }
      })
      .then(
        response => {
          const users = response.data.items.map(item => ({
            userName: item.login,
            avatar_url: item.avatar_url,
            html_url: item.html_url
          }))
          commit('REQ_SUCCESS', { users })
        },
        err => {
          commit('REQ_ERROR', err.message)
        }
      )
  }
}
