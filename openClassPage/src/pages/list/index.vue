<template>
  <div class="index-container">
    <!-- 顶部导航 -->
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
        <el-menu-item index="1">列表页</el-menu-item>
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
        </el-submenu> -->
        <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
        <!-- <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item> -->
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

    <!-- 表格 -->
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="label"
      label="课程名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="batch"
      label="班级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="startDate"
      label="开课时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="校区"
      width="120">
    </el-table-column>
    <el-table-column 
      prop="status"
      label="状态"
      width="120">
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  
    <!-- <List :listData="listData"></List> -->
  </div>
</template>
<script>
import "./index.scss";
import TopNav from "../../components/topnav/index.vue";
import IndexDialog from "../../components/dialog/index.vue";
import List from "../../components/list/index.vue";
const querystring = require("querystring");
export default {
  name: "list",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tableData: [{
          label: 'h5大前端',
          batch: 1906,
          startDate: "20190920",
          address: "北京校区",
          status: true
        }]
    };
  },
  components: {
    TopNav,
    IndexDialog,
    List
  },
  methods: {
    req() {
      this.$axios.post("http://localhost:3001/create", 123).then(res => {
        console.log("res返回了", res);
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
    },
    uploadPage() {
      this.$router.push({
          path:'/upload',
          params:{
              id:123
          }
      })
    }
  },
  mounted() {
      this.$axios.post("http://localhost:3001/read", 123).then(res => {
        this.tableData = res.data;
        console.log("列表返回了", res);
      });
    const data = querystring.parse(document.cookie);
    this.$refs.name.innerText = data.username;
  }
};
</script>
