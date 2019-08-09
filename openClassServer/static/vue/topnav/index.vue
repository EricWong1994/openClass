<template>
  <div class="index-top-nav">
    <ul class="middle">
      <li>
        <span class="beicheng">贝程教育后台管理</span>
      </li>
      <li>
        <span @click="login">登录</span>
        <span @click="register">注册</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$emit("login");
    },
    register() {
      this.$emit("register");
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
        font-size: 16px;
        margin-right: 10px;
        &.beicheng {
          font-weight: 600;
          font-size: 18px;
        }
      }
      &:last-child {
        margin-right: 0;
        span {
          &:hover {
            cursor: pointer;
            color: orange;
          }
        }
      }
    }
  }
}
</style>

