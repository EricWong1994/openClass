const {
    login
} = require('../mysql/index');
const Router = require('koa-router');
let handleParam = require('../common/index');
const router = new Router();
router.post('/', async (ctx, next) => {
    const userdata = ctx.request.body
    console.log(userdata);
    // ctx.body = '登录页';
    var result = await login(userdata);
    console.log(result);
    if (result.length > 0) {
        ctx.session = {
            username: userdata.username,
            password: userdata.password,
            id: result[0].id
        }
        console.log('session', ctx.session)
        ctx.body = handleParam({
            data: ctx.session
        });
    } else {
        ctx.body = handleParam({
            status: 0,
            error: '账号或者密码错误'
        });
    }
    // console.log(result);
    // console.log(login(ctx.request.body));
    console.log('登录');
    await next()
})
module.exports = router.routes()