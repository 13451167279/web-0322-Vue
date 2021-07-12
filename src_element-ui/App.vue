<template>
  <div id="app">
    <el-button type="primary">默认按钮</el-button>
    <el-button type="danger" @click="deleteInfo">删除按钮</el-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    deleteInfo() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style  scoped>
</style>
