const Router = require('koa-router');
const router = new Router;
let create = require('./router/create');
let login = require('./router/login');
let read = require('./router/read');
let deleteList = require('./router/delete');
let mode = require('./router/mode');


router.use('/create',create);
router.use('/login',login);
router.use('/read',read);
router.use('/delete',deleteList);
router.use('/mode',mode);

module.exports = router;