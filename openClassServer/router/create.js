const {create,updateList}  = require('../mysql/index');
const Router = require('koa-router');
const router = new Router();
router.post('/',async (ctx,next) => {
  
  const listData = ctx.request.body
  const data = Object.values(listData)
  console.log('data[0]',data[0]); 
  if(data[0].id) {
    updateList(data[0]);
    ctx.body = '更新完了';
  }  else {
    // console.log(typeof data); 
    // console.log(typeof listData)
    console.log(Array.isArray(data))
    // console.log('listData1111',listData);
  
    data.forEach(item =>{
      create(item)
    })
    // console.log(await create(listData[0]))
    ctx.body = '增加页'
  }
   await next()
})
module.exports = router.routes()