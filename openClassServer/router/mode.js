const {modeList,read}  = require('../mysql/index');
const Router = require('koa-router');
const router = new Router();
router.post('/', async (ctx, next) => {
  const data = ctx.request.body;
  console.log('编辑id值',data);
  // if(modeList(data.id)) {
    let result = await modeList(data.id)
    console.log(result);
    ctx.body = result;
  // }
  await next()
})
module.exports = router.routes()