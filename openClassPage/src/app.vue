<template>
  <div class="index" id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: "wwww"
    };
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
@import './common/style/reset.css';
#app {
  // background:#F2F2F2;
}
</style>
