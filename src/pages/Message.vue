<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id" style="line-height:40px;width:300px;">
        <router-link :to="`/home/message/detail/${message.id}?qid=${message.id}&title=${message.title}`">{{message.title}}</router-link>
        <el-button type="primary" size="mini" @click="pushShow(message)">push</el-button>
        <el-button type="primary" size="mini" @click="replaceShow(message)">replace</el-button>
      </li>
    </ul>
    <el-button type="primary" size="mini" @click="$router.back()">返回</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messages: []
    }
  },

  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: '1', title: '三国' },
        { id: '2', title: '西游记' },
        { id: '3', title: '红楼梦' },
        { id: '4', title: '水浒传' }
      ];
    }, 100);
  },
  methods: {
    pushShow(message) {
      // this.$router.push(`/home/message/detail/${message.id}?qid=${message.id}&title=${message.title}`);
      this.$router.push(
        {
          name: 'MessageDetail',
          params: { id: message.id },
          query: { qid: message.id, title: message.title }

        }
      )
    },
    replaceShow(message) {
      this.$router.replace(`/home/message/detail/${message.id}?qid=${message.id}&title=${message.title}`)
    }

  }

}
</script>

<style scoped>
</style>
