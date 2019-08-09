<template>
  <div class="index-container">
    <Nav></Nav>
    <List :listData="listData"></List>
  </div>
</template>
<script>
import "./index.scss";
import List from "../../components/list/index.vue";
import Nav from "../../components/nav/index.vue";

export default {
  name: "upload",
  data() {
    return {
      listData: [
        {
          label: "",
          batch: "",
          startDate: "",
          address: "",
          status: ""
        }
      ]
    };
  },
  components: {
    List,
    Nav,
  },
  methods: { },
  mounted(){
    console.log(this.$route.params);
    console.log('父组件发送列表',this.listData)
    if(this.$route.params.id) {
      console.log('发起修改请求')
       this.$axios.post("/mode", {id:this.$route.params.id}).then(res => {
        console.log("编辑返回", res.data[0]);
        this.listData = [res.data[0]];
      });
    }
  }
};
</script>
