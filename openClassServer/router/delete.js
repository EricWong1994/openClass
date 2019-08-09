const {deleteList,read}  = require('../mysql/index');
const Router = require('koa-router');
const router = new Router();
router.post('/', async (ctx, next) => {
  const data = ctx.request.body;
  console.log('id值',data);
  if(deleteList(data.id)) {
    ctx.body = await read()
  }
  await next()
})
module.exports = router.routes()