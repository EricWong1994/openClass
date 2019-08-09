const {
    login
} = require('../mysql/index');
const Router = require('koa-router');
let handleParam = require('../common/index');
const router = new Router();
router.post('/', async (ctx, next) => {
    const userdata = ctx.request.body
    // ctx.body = '登录页';
    var result = await login(userdata);
    if (result.length > 0) {
        ctx.cookies.set('userid',userdata.username,{
            maxAge:720000,
            expires:'2018/8/10'
        })
        // ctx.session = {
        //     username: userdata.username,
        //     password: userdata.password,
        //     id: result[0].id
        // }
        ctx.body = handleParam({
            data: ctx.session
        });
    } else {
        ctx.body = handleParam({
            status: 0,
            error: '账号或者密码错误'
        });
    }
    await next()
})
module.exports = router.routes()