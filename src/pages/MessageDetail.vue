<template>
  <div>
    <h2>《{{detail.title}}》</h2>
    <hr>
    <h3>{{detail.content}}</h3>
    <br>
    <i>
      <h2> query 参数  {{$route.query.qid}}</h2>
    </i>
    <i>
      <h3>{{$route.query.title}}</h3>
    </i>

  </div>
</template>

<script>
const allMessageDetail = [
  { id: '1', title: '三国', content: '刘备、曹操、孙权' },
  { id: '2', title: '西游记', content: '悟空、悟能、悟净' },
  { id: '3', title: '红楼梦', content: '宝玉、黛玉、王熙凤' },
  { id: '4', title: '水浒传', content: '李逵、宋江、鲁智深' }
];
export default {
  name: 'MessageDetail',
  props:['id','name','title'],
  data() {
    return {
      detail: {}
    }
  },
  mounted() {
    this.getDetail(this.$route)
  },
  watch: {
    $route: function (value) {
      this.getDetail(value)
    },
  },
  methods: {
    getDetail(router) {
      const id = router.params.id;
      setTimeout(() => {
        this.detail = allMessageDetail.find((item) => item.id === id)
      }, 100);
    }
  }
}
</script>
<style scoped>
</style>
