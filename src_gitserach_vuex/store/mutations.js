export default {
  UPDATE_PAGE(state) {
    state.isShowFirst = false
    state.isShowLoading = true
  },
  REQ_SUCCESS(state,{ users }) {
    state.isShowLoading = false;
    state.users = users;
  },
  REQ_ERROR(state, err) {
    state.isShowLoading = false
    state.errMsg = err
  }
}
