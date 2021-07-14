<template>
  <div>
    <h1 v-if="isShowFirst">enter the name you search</h1>
    <h1 v-else-if="isShowLoading">Loading...</h1>
    <h1 v-else-if="errMsg">{{errMsg}}</h1>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.userName">
        <a :href="user.html_url">
          <img :src="user.avatar_url" style='width: 100px' />
        </a>
        <p class="card-text">{{user.userName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {

    }
  },

  computed: {
    ...mapState(['isShowFirst', 'isShowLoading', 'errMsg', 'users']),
  },


  methods: {
    // search(searchName) {
    //   //更新页面显示状态
    //   this.isShowFirst = false;
    //   this.isShowLoading = true;
    //   //发送请求
    //   axios.get('https://api.github.com/search/users?', { params: { q: searchName } }).then((response) => {
    //     this.isShowLoading = false;
    //     this.users = response.data.items.map((item) => ({
    //       userName: item.login,
    //       avatar_url: item.avatar_url,
    //       html_url: item.html_url
    //     }))
    //     console.log(this.users);
    //   }, err => {
    //     this.isShowLoading = false;
    //     this.errMsg = err.message;
    //   })
    // }
  }
}
</script>

<style  scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
