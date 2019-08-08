const {create}  = require('../mysql/index');
const Router = require('koa-router');
const router = new Router();
router.post('/',async (ctx,next) => {
    ctx.body = '增加页'
    console.log(await create({
        label: "h5大前端",
        batch: '1906',
        startDate: "20190920",
        address: "北京校区",
        status: 'true'
      }))
    console.log('增加');
   await next()
})
module.exports = router.routes()