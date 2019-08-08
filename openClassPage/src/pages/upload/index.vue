<template>
  <div class="index-container">
    <header>
      <div @click="req">请求</div>
      <div class="username">
        欢迎您：
        <span class="userText" ref="name"></span>
        <span class="loginout">退出登录</span>
      </div>
    </header>
    <List :listData="listData"></List>
  </div>
</template>
<script>
import "./index.scss";


import List from "../../components/list/index.vue";
const querystring = require('querystring');
export default {
  name: "upload",
  data() {
    return {
      listData: [
        {
          label: "h5大前端",
          batch: 1905,
          startDate: "20190823",
          address: "北京校区",
          status: false
        },
        {
          label: "h5大前端",
          batch: 1906,
          startDate: "20190920",
          address: "北京校区",
          status: true
        }
      ]
    };
  },
  components: {
    List
  },
  methods: {
    req() {
      this.$axios.post("http://localhost:3001/create", 123).then(res => {
        console.log("res返回了", res);
      });
    },
  },
  mounted() {
       console.log(111);
       console.log(this.$refs);
       const data = querystring.parse(document.cookie);
       this.$refs.name.innerText = data.username;
    }
};
</script>
