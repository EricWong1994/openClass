<template>
  <div class="index-dialog">
    <div class="loginbox">
      <div class="topSection">
        <h2 v-text="title">登录页</h2>
        <span @click="closeLoginBox">×</span>
        <img src alt />
      </div>
      <div v-if="!content" class="slot">
        <slot></slot>
      </div>
      <p v-if="content" class="content" v-html="content">请您先登录后再进行购买，谢谢您的配合!</p>
      <div class="btns">
        <button v-if="btns[0]" @click="handleReq" v-text="btns[0]">确定</button>
        <button v-if="btns[1]" @click="closeLoginBox" v-text="btns[1]">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btns: {
      type: Array,
      default: function() {
        return ["确认", " 取消"];
      }
    },
    title:{
      type:String,
      default:'登录'
    },
    content:{
      type:String,
      default:''
    }
  },
  mounted(){
    console.log(this.btns)
  },
  data() {
    return {};
  },
  methods: {
    handleReq() {
      this.$emit("handleReq");
    },
    closeLoginBox(){
      this.$emit('closeLoginBox')
    }
  }
};
</script>

<style lang="scss" scoped>
.index-dialog {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  .loginbox {
    width: 280px;
    padding: 0 30px 30px;
    margin: 200px auto;
    background-color: #fff;
    border-radius: 10px;
    .topSection {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
      h2 {
        flex: 1;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
      }
      span {
        font-size: 28px;
        &:hover {
          background-color: orange;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .content {
      margin: 25px 0;
    }
    .btns {
      text-align: center;
      button {
        width: 80px;
        height: 30px;
        text-align: center;
        background-color: #fff;
        &:first-child {
          margin-right: 15px;
        }
        &:hover {
          background-color: orange;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

