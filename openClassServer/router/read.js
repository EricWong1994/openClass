const {
  read
} = require('../mysql/index');
const Router = require('koa-router');
const router = new Router();
router.post('/', async (ctx, next) => {
  const result = await read({
    label: "h5大前端",
    batch: '1906',
    startDate: "20190920",
    address: "北京校区",
    status: 'true'
  });
  ctx.body = result;
  await next()
})
module.exports = router.routes()