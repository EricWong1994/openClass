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
    Nav
  },
  methods: {
   
  },
  mounted(){
    console.log(this.$route.params);
    if(this.$route.params) {
       this.$axios.post("http://localhost:3001/mode", {id:this.$route.params.id}).then(res => {
        console.log("编辑返回", res.data[0]);
        this.listData = [res.data[0]];
      });
    }
  }
};
</script>
