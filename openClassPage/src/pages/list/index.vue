<template>
  <div class="index-container">
    <!-- 顶部导航 -->
    <Nav></Nav>
    <!-- <List :listData="listData"></List> -->
   <!-- 表格 -->
   <div class="form">
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
    <el-table-column 
        prop="id"
        label="id"
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
            @click="handleDelete(scope.$index, scope.row)" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   </template>
   </div>
  </div>
</template>
<script>
import "./index.scss";
import IndexDialog from "../../components/dialog/index.vue";
import List from "../../components/list/index.vue";
import Nav from "../../components/nav/index.vue";
const querystring = require("querystring");

export default {
  name: "list",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tableData: [{
          label: '',
          batch: "",
          startDate: "",
          address: "",
          status: "",
          id:''
        }]
    };
  },
  components: {
    IndexDialog,
    List,
    Nav,
  },
  methods: {
    req() {
      // this.$axios.post("http://localhost:3001/create", 123).then(res => {
      this.$axios.post("/create", 123).then(res => {
        console.log("res返回了", res);
      });
    },
   handleDelete(index) {
     var number = this.tableData[index].id;
     console.log(number)
      this.$axios.post("/delete", {id:number}).then(res => {
        console.log("刪除返回", res);
        this.tableData = res.data;
      });
   },
    // 编辑
    handleEdit(index){

        this.$router.push({
          name: "upload",
          params: {
            id: this.tableData[index].id
          }
        });
        
    },
  },
  mounted() {
      this.$axios.post("/read", 123).then(res => {
        console.log("列表返回了", res);
        this.tableData = res.data;
      });
  }
};
</script>
