<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="commentSubmit">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    addComment: Function
  },
  data() {
    return {
      username: '',
      content: '',
    }
  },
  methods: {
    clearInput() {
      this.username = '';
      this.content = '';
    },
    commentSubmit() {
      const username = this.username.trim();
      const content = this.content;
      if (!username || !content) {
        this.clearInput();
        return alert("Please input username or content")
      }
      const comment = {
        username,
        content,
      }
      this.addComment(comment);
      this.clearInput();
    }
  },
}
</script>

<style  scoped>
</style>
