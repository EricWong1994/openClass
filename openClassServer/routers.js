const Router = require('koa-router');
const router = new Router;
let create = require('./router/create');
let login = require('./router/login');
let read = require('./router/read');


router.use('/create',create);
router.use('/login',login);
router.use('/read',read);
module.exports = router;