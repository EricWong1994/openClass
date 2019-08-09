const Mock = require('mockjs');
import P_login_do from './post/login/do/index.js'; 
// Mock.mock('/login','post',{
//     a:1,
//     b:2
// })
// 传一个函数
Mock.mock('/login','post',P_login_do);