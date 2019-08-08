<template>
  <div class="index-top-nav ">
    <ul class="middle">
      <li>
        <span>百度推广首页</span>
        <span>商业开发者中心</span>
      </li>
      <li>
        <span @click="login">登录</span>
        <span @click="register">注册</span>
        <span>服务商入驻</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
    login(){
      // this.$emit('display',true);
      this.$emit('login');
    },
    register(){
      // this.$emit('display',false);
      this.$emit('register')
    }
  }
};
</script>

<style lang="scss" scoped>
.index-top-nav {
  width: 100%;
  background-color: #fff;
  ul {
    width: 1200px;
    margin: 0 auto;
    line-height: 36px;
    display: flex;
    justify-content: space-between;
    li {
      span {
        margin-right: 10px;
        &:last-child{
          margin-right: 0;
        }
        &:hover {
          cursor: pointer;

        }
      }
    }
  }
}
</style>

