<template>
  <div class="index-container">
    <!-- <router-link to="/list">列表页</router-link> -->
    <TopNav @handleReq="handleReq" @login="login" @register="register"></TopNav>
    <IndexDialog
      v-show="flag"
      @handleReq="handleReq"
      @closeLoginBox="closeLoginBox"
      :btns="btns"
      :title="title"
      :content="content"
    >
      <!--   v-show="flag" 
        @handleReq="handleReq"
        :btns="['确认']"
        :title="'注册'"
        :content="'我是内容'"
      content  不传即可显示插槽内的代码-->
      <div class="index-content">
        <p>
          <span>账号</span>
          <input type="text" ref="username" />
        </p>
        <p>
          <span>密码</span>
          <input type="password" ref="password" />
        </p>
        <div class="tip" v-show="tipFlag" ref="tip">账号或密码错误</div>
      </div>
    </IndexDialog>
  </div>
</template>
<script>
import "./index.scss";
import TopNav from "../../components/topnav/index.vue";
import IndexDialog from "../../components/dialog/index.vue";
import { setTimeout } from "timers";

export default {
  name: "index",
  data() {
    return {
      flag: false,
      title: "",
      content: "",
      btns: [],
      type: "",
      tipFlag: false
    };
  },
  components: {
    TopNav,
    IndexDialog
  },
  methods: {
    closeLoginBox() {
      this.flag = false;
    },
    login() {
      this.title = "登录";
      this.btns = ["确定", "取消"];
      // this.content = '请您先登录后再进行购买，谢谢您的配合!';
      this.flag = true;
      this.type = "login";
      this.tipFlag = false;
    },
    register() {
      this.title = "注册";
      this.btns = ["注册", "取消"];
      // this.content = '请注册';
      this.flag = true;
      this.type = "register";
      this.tipFlag = false;
    },
    handleReq(data) {
      //   this.flag = data;
      let userdata = {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      };
      if (this.type === "login") {
        this.loginReq(userdata);
      } else if (this.type === "register") {
        this.registerReq(userdata);
      }
    },
    // 登录请求
    loginReq(userdata) {
      // this.$axios.post("http://localhost:3001/login", userdata).then(res => {
      this.$axios.post("/login", userdata).then(res => {
          console.log(res);

        if (res.data.status === 0) {
          this.$refs.tip.innerText = res.data.error;
          this.tipFlag = true;
        } else if (res.data.status === 200) {
          const {username,password,id} = res.data.data;
          this.$refs.tip.innerText = "登录成功";
          this.tipFlag = true;
          this.setcookie('username',username);
          setTimeout(()=> {
            this.$router.push({
              path:'/list'
            })
          }, 1000);
        }
      });
    },
    setcookie(name, value) {
      let exp = new Date();
      //写入Cookie  ，toGMTstring将时间转换成字符串。
      document.cookie =
        name + "=" + escape(value) + ";expires=" + exp.toGMTString;
    },
    registerReq(userdata) {
      this.$axios.post("/register", userdata).then(res => {
        if (res.data.status === 0) {
          this.$refs.tip.innerText = res.data.error;
          this.tipFlag = true;
        } else if (res.data.status === 200) {
          this.$refs.tip.innerText = "注册成功";
          this.tipFlag = true;
        }
      });
    }
  }
};
</script>
