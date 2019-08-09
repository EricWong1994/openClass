<template>
  <section class="index-list">
    <div class="add">
      <div>
        点击新增列表
        <button class="btn-add" @click="addNewList">+</button>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list" v-for="(item,index) in listData" :key="(index)">
        <ul>
          <li>
            <span>课程名称</span>
            <input type="text" v-model="item.label" placeholder="请输入课程命名"/>
          </li>
          <li>
            <span>班级</span>
            <input type="text" placeholder="请输入班级" v-model="item.batch" />
          </li>
          <li>
            <span>日期</span>
            <input type="text" placeholder="请输入日期" v-model="item.startDate"/>
          </li>
          <li>
            <span>校区</span>
            <input type="text" placeholder="请输入校区" v-model="item.address"/>
          </li>
          <li class="state">
            <span>状态</span>
            <input type="radio" placeholder="请输入" :name="index+'radio'" @click="stateChangeT(index)"/>
            <input type="radio" placeholder="请输入" :name="index+'radio'" @click="stateChangeF(index)"/>
          </li>
        </ul>
        <div class="btns">
          <button @click="addList">添加</button>
          <button @click="delNewList(index)">删除</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "./index.scss";
export default {
  data() {
    return {

    };
  },
  props: ["listData"],
  methods: {
    addNewList() {
      this.listData.push( {
          label: "",
          batch: '',
          startDate: "",
          address: "",
          status: ""
        });
    },
    addList(){
      console.log(this.listData)
       this.$axios.post("http://localhost:3001/create", this.listData).then(res => {
          console.log('添加成功')
      });
    },
    delNewList(index) {
      this.listData.splice(index, 1);
    },
    stateChangeT(index){
      this.listData[index].status = true
    },
    stateChangeF(index){
      this.listData[index].status = false
    },
  }
};
</script>

