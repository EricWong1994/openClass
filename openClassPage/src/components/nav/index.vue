<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="listPage">列表页</el-menu-item>
      <el-menu-item index="2" @click="uploadPage">上传页</el-menu-item>
      <!-- <el-submenu index="2">
          <template slot="title">上传页</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
      </el-submenu>-->
      <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      <!-- <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>-->
      <!-- <el-menu-item index="1"></el-menu-item> -->
    </el-menu>
    <!-- <header> -->
    <!-- <div @click="req">请求</div> -->
    <div class="username">
      欢迎您：
      <span class="userText" ref="name"></span>
      <span class="loginout">退出登录</span>
    </div>
    <!-- </header> -->
  </div>
</template>
<script>
const querystring = require("querystring");

import "./index.scss";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    },
    handleClick(row) {
    //   console.log(row);
    },
    uploadPage() {
      if (this.$route.name !== "upload") {
        this.$router.push({
          name: "upload",
          params: {
            // id: 123
          }
        });
      }
    },
    listPage() {
      if (this.$route.name !== "list") {
        this.$router.push({
          name: "list",
          params: {
            // id: 456
          }
        });
      }
    }
  },
  mounted() {
    const data = querystring.parse(document.cookie);
    this.$refs.name.innerText = data.username;
  }
};
</script>

