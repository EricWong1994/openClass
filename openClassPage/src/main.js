import Vue from 'vue';
import App from './app.vue';
import * as Server  from './apis/index.js'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import  ElementUI from 'element-ui';
Vue.use(ElementUI);

console.log('环境',process.env.NODE_ENV)
process.env.NODE_ENV === 'development' && require('../mock/index.js')
// import  {Table,Row,Col,TableColumn, Popover, Tooltip,Menu,Button,MenuItem } from 'element-ui';

// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Menu);
// Vue.use(Button);
// Vue.use(MenuItem);

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