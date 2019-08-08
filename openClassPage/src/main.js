import Vue from 'vue';
import App from './app.vue';
// import Server from './server/index.js'
import * as Server  from './apis/index.js'
import router from './router/index.js'
import  ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })

Vue.prototype.$axios = Server;
new Vue({
    el:'#app',
    router,
    render:h => h(App)
})