// const Koa = require('koa');
const Koa = require('koa');
const app = new Koa();
const routers = require('./routers');
const session = require('koa-session');
const koabody = require('koa-body');
app.use(koabody());
app.keys = ['koa-web-site'];
app.use(session({
    autoCommit:true,
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,  //(boolean) renew session when session is nearly expired,
},app))
app.use(routers.routes());
// app.use((ctx)=> {
//     ctx.body = '访问成功'
// })
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Header','Content-type')
    ctx.set('Access-Control-Allow-Origin', '*');
    await next()
})
app.listen(3000, () => {
    console.log('服务启动')
})