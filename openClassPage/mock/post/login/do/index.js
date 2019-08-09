const Mock = require('mockjs');
const Random = Mock.Random;
export default params => {
    console.log(params);
    return {
        // 1到10个字
        text:Random.csentence(1,10),
        status:300,
        uid:Random.integer(1,10),
        err:Random.csentence(1,2),
        data:{
            name:'李雷',
            gender:'男'
        }
    }
}