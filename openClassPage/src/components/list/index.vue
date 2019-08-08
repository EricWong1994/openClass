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
            <input type="text" v-model="item.courseName" placeholder="请输入课程命名"/>
          </li>
          <li>
            <span>班级</span>
            <input type="text" placeholder="请输入班级" />
          </li>
          <li>
            <span>日期</span>
            <input type="text" placeholder="请输入日期"/>
          </li>
          <li>
            <span>校区</span>
            <input type="text" placeholder="请输入校区"/>
          </li>
          <li class="state">
            <span>状态</span>
            <input type="radio" placeholder="请输入" :name="index+'radio'"/>
            <input type="radio" placeholder="请输入" :name="index+'radio'"/>
          </li>
        </ul>
        <div class="btns">
          <button>添加</button>
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
    //   newList: [
    //     {
    //       courseName: "",
    //       label: "h5大前端",
    //       batch: 1905,
    //       startDate: "20190823",
    //       address: "北京校区",
    //       status: false
    //     },
    //   ],
    };
  },
  props: ["listData"],
  mounted() {
    // console.log("listData", this.listData);
  },
  methods: {
    addNewList() {
      this.listData.push( {
          courseName: "",
          label: "",
          batch: '',
          startDate: "",
          address: "",
          status: ''
        });
    //   console.log(this.listData);
    },
    delNewList(index) {
      this.listData.splice(index, 1);
    },
    mounted() {
      
    }
  }
};
</script>

