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
    if(this.$route.params.id) {
       this.$axios.post("/mode", {id:this.$route.params.id}).then(res => {
        this.listData = [res.data[0]];
      });
    }
  }
};
</script>
