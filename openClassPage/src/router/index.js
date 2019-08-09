import Router from 'vue-router';
import Vue from 'vue';
import Index from '../pages/index/index.vue';
import List from '../pages/list/index.vue';
import Upload from '../pages/upload/index.vue';

Vue.use(Router);
export default new Router({
    routes:[
        {
            redirect: '/index',
            path: '/'
        },
        {
            name:'index',
            path:'/index',
            component:Index,
            meta:{
                title:'首页'
            }
        },
        {
            name:'list',
            path:'/list/:id?',
            component:List,
            meta:{
                title:'列表页'
            }
        },
        {
            name:'upload',
            path:'/upload/:id?',
            component:Upload,
            meta:{
                title:'上传页'
            }
        }
    ]
})