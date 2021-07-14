<template>
  <li :style='{background:bgColor}' @mouseenter="hanldEnder(true)" @mouseleave="hanldEnder(false)">
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" :style="{display:isShow? 'block':'none'}" @click="clickDelete">删除</button>
  </li>
</template>

<script>
export default {
  name: '',
  props: {
    todo: Object,
    index: Number,
  },
  data() {
    return {
      isShow: false,
      bgColor: 'white',
    }
  },
  computed: {
    isChecked: {
      // 确认是否选中
      get() {
        return this.todo.isCompleted;
      },
      set() {
        // this.todoChecked(this.todo)
        this.$store.commit('todoChecked', this.todo)
      }
    }
  },
  methods: {
    hanldEnder(isShow) {
      if (isShow) {
        this.bgColor = '#ddd';
        this.isShow = true;
      }
      else {
        this.bgColor = 'white';
        this.isShow = false;
      }
    },
    clickDelete() {
      const { todo: { title }, index } = this;
      if (confirm(`是否删除《${title}》`)) {
        this.$store.commit('deleteTodo', index);
      }
    }

  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
